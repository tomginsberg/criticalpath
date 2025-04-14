#!/usr/bin/env python3
"""
Extract images from a HAR file based on specified criteria.

Usage:
    python extract_images.py --har <har_file> --output <output_dir> [--prefix <url_prefix>] [--extension <extension>] [--min-dim <min_dimension>]

Example:
    python extract_images.py --har ../www.criticalpathprojects.com.har --output ../public/projects/woodgreen --prefix https://static.wixstatic.com/media/c11cdf --extension jpg --min-dim 400
"""

import json
import os
import sys
import argparse
import requests
from urllib.parse import urlparse
import base64
from PIL import Image
import io
import re

def is_avif_url(url):
    """Check if a URL points to an AVIF image"""
    return 'enc_avif' in url or url.lower().endswith('.avif')

def process_har_file(har_file, output_dir, prefix, extension, min_dim):
    """
    Process the HAR file to extract and save images matching the criteria.
    
    Args:
        har_file (str): Path to the HAR file
        output_dir (str): Directory to save images
        prefix (str): URL prefix to match
        extension (str): File extension to match
        min_dim (int): Minimum dimension (width or height) for images
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir, exist_ok=True)
    
    print(f"Processing HAR file: {har_file}")
    print(f"Output directory: {output_dir}")
    print(f"URL prefix: {prefix}")
    print(f"File extension: {extension}")
    print(f"Minimum dimension: {min_dim}")
    
    # Load the HAR file
    with open(har_file, 'r') as f:
        har_data = json.load(f)
    
    entries = har_data.get('log', {}).get('entries', [])
    print(f"Found {len(entries)} entries in the HAR file")
    
    image_count = 0
    avif_skipped = 0
    
    for i, entry in enumerate(entries):
        request = entry.get('request', {})
        response = entry.get('response', {})
        url = request.get('url', '')
        
        # Check if the URL matches our criteria
        if prefix in url and f".{extension}" in url.lower():
            print(f"Found matching URL: {url}")
            
            # Skip AVIF images (which PIL doesn't support well)
            if is_avif_url(url):
                print(f"Skipping AVIF image: {url}")
                avif_skipped += 1
                
                # Try to find a non-AVIF version by removing the AVIF parameters
                original_url = re.sub(r'/enc_avif[^/]*/', '/', url)
                original_url = re.sub(r',enc_avif', '', original_url)
                
                if original_url != url:
                    print(f"Attempting to fetch non-AVIF version: {original_url}")
                    try:
                        response = requests.get(original_url, timeout=10)
                        if response.status_code == 200:
                            try:
                                img = Image.open(io.BytesIO(response.content))
                                
                                # Check dimensions
                                width, height = img.size
                                if min(width, height) >= min_dim:
                                    # Save the image
                                    output_path = os.path.join(output_dir, f"img{image_count}.{extension}")
                                    with open(output_path, 'wb') as f:
                                        f.write(response.content)
                                    print(f"Downloaded and saved non-AVIF version to {output_path} (dimensions: {width}x{height})")
                                    image_count += 1
                                else:
                                    print(f"Image dimensions too small: {width}x{height}, minimum required: {min_dim}")
                            except Exception as e:
                                print(f"Error processing non-AVIF version: {e}")
                    except Exception as e:
                        print(f"Error downloading non-AVIF version: {e}")
                continue
            
            # Try to get the image data from the response content
            content = response.get('content', {})
            
            # Check if we have base64 content in the HAR file
            if 'text' in content and content.get('encoding') == 'base64':
                try:
                    # Decode base64 data
                    image_data = base64.b64decode(content['text'])
                    img = Image.open(io.BytesIO(image_data))
                    
                    # Check dimensions
                    width, height = img.size
                    if min(width, height) >= min_dim:
                        # Save the image
                        output_path = os.path.join(output_dir, f"img{image_count}.{extension}")
                        with open(output_path, 'wb') as f:
                            f.write(image_data)
                        print(f"Saved image to {output_path} (dimensions: {width}x{height})")
                        image_count += 1
                    else:
                        print(f"Image dimensions too small: {width}x{height}, minimum required: {min_dim}")
                except Exception as e:
                    print(f"Error processing base64 image: {e}")
            else:
                # If the image isn't stored in the HAR file, download it
                try:
                    response = requests.get(url, timeout=10)
                    if response.status_code == 200:
                        try:
                            img = Image.open(io.BytesIO(response.content))
                            
                            # Check dimensions
                            width, height = img.size
                            if min(width, height) >= min_dim:
                                # Save the image
                                output_path = os.path.join(output_dir, f"img{image_count}.{extension}")
                                with open(output_path, 'wb') as f:
                                    f.write(response.content)
                                print(f"Downloaded and saved image to {output_path} (dimensions: {width}x{height})")
                                image_count += 1
                            else:
                                print(f"Image dimensions too small: {width}x{height}, minimum required: {min_dim}")
                        except Exception as e:
                            print(f"Error opening image: {e}")
                except Exception as e:
                    print(f"Error downloading image: {e}")
    
    print(f"\nSummary: Extracted {image_count} images matching the criteria.")
    if avif_skipped > 0:
        print(f"Skipped {avif_skipped} AVIF images.")
        print("\nNote: If you want to process AVIF images, you can install the libavif support for PIL:")
        print("pip install pillow-avif-plugin")

def main():
    parser = argparse.ArgumentParser(description='Extract images from a HAR file.')
    parser.add_argument('--har', required=True, help='Path to the HAR file')
    parser.add_argument('--output', required=True, help='Output directory to save images')
    parser.add_argument('--prefix', default='https://static.wixstatic.com/media/c11cdf', help='URL prefix to match')
    parser.add_argument('--extension', default='jpg', help='Image extension to match')
    parser.add_argument('--min-dim', type=int, default=400, help='Minimum dimension (width or height) for images')
    
    args = parser.parse_args()
    
    process_har_file(args.har, args.output, args.prefix, args.extension, args.min_dim)

if __name__ == "__main__":
    main()