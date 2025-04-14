#!/usr/bin/env python3

import json
import os
import glob
from pathlib import Path

# Set paths
base_dir = Path(__file__).parent.parent
projects_json_path = base_dir / "data" / "projects.json"
projects_dir = base_dir / "public" / "projects"

# Supported image extensions
IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']

def update_project_galleries():
    # Load projects data
    with open(projects_json_path, 'r') as f:
        projects = json.load(f)
    
    # Track if any changes were made
    changes_made = False
    
    # Process each project
    for project in projects:
        project_id = project.get('id')
        if not project_id:
            continue
        
        project_dir = projects_dir / project_id
        
        # Check if project directory exists
        if project_dir.exists() and project_dir.is_dir():
            # Find all image files in the directory
            image_files = []
            for ext in IMAGE_EXTENSIONS:
                image_files.extend(glob.glob(str(project_dir / f"*{ext}")))
                image_files.extend(glob.glob(str(project_dir / f"*{ext.upper()}")))
            
            # Sort image files for consistent ordering
            image_files.sort()
            
            # Convert to relative paths for the JSON
            relative_paths = []
            for img_path in image_files:
                # Convert absolute path to relative path starting from /projects/...
                rel_path = os.path.join('/projects', project_id, os.path.basename(img_path))
                # Ensure forward slashes for web URLs
                rel_path = rel_path.replace('\\', '/')
                relative_paths.append(rel_path)
            
            # Update project gallery if images were found
            if relative_paths:
                project['gallery'] = relative_paths
                changes_made = True
                print(f"Updated gallery for {project_id} with {len(relative_paths)} images")
            else:
                print(f"No images found for {project_id}")
    
    # Save updated projects.json if changes were made
    if changes_made:
        with open(projects_json_path, 'w') as f:
            json.dump(projects, f, indent=2)
        print(f"Updated projects.json with new gallery images")
    else:
        print("No changes made to projects.json")

if __name__ == "__main__":
    update_project_galleries()