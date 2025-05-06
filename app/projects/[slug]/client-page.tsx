"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"

interface Project {
  id: string;
  title: string;
  caption: string;
  storyFile: string;
  image: string;
  gallery?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface ClientProjectPageProps {
  params: {
    slug: string;
  };
  project: Project;
  markdownContent: string;
}

function ImageGallery({ images, projectTitle }: { images: string[], projectTitle: string }) {
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) {
        // Exit fullscreen with Escape key
        if (e.key === 'Escape') {
          setIsFullscreen(false);
        }
        
        // Navigate with arrow keys
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          const currentIndex = images.indexOf(selectedImage);
          const nextIndex = (currentIndex + 1) % images.length;
          setSelectedImage(images[nextIndex]);
        }
        
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          const currentIndex = images.indexOf(selectedImage);
          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          setSelectedImage(images[prevIndex]);
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, images, selectedImage]);

  // Function to navigate to next/previous image
  const navigateImage = (direction: 'next' | 'prev') => {
    const currentIndex = images.indexOf(selectedImage);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <>
      <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
        {/* Main image display - shows the currently selected image */}
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg mb-4 group">
          <Image 
            src={selectedImage} 
            alt={`${projectTitle} selected image`} 
            fill 
            className="object-cover cursor-pointer"
            priority
            onClick={() => setIsFullscreen(true)}
          />
          <button 
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="View fullscreen"
          >
            <Maximize size={18} />
          </button>
        </div>

        {/* Thumbnails grid - always visible */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`relative aspect-square overflow-hidden rounded-md shadow-md cursor-pointer 
                  hover:opacity-90 transition-all ${selectedImage === image ? 'ring-2 ring-blue-500 opacity-100' : 'opacity-80'}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image 
                  src={image || "/placeholder.svg"} 
                  alt={`${projectTitle} gallery image ${index}`}
                  fill 
                  className="object-cover" 
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl max-h-screen p-4 md:p-8 flex flex-col">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button 
                onClick={() => setIsFullscreen(false)}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                aria-label="Exit fullscreen"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                  aria-label="Next image"
                >
                  <ArrowLeft size={24} className="rotate-180" />
                </button>
              </>
            )}
            
            <div className="flex-1 relative my-8">
              <Image 
                src={selectedImage} 
                alt={`${projectTitle} fullscreen image`}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {images.indexOf(selectedImage) + 1} / {images.length}
              </div>
            )}
            
            {images.length > 1 && (
              <div className="flex justify-center gap-2 overflow-x-auto pb-4 mt-4">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 overflow-hidden rounded-md cursor-pointer 
                      ${selectedImage === image ? 'ring-2 ring-blue-500 opacity-100' : 'opacity-60 hover:opacity-90'} transition-opacity`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image 
                      src={image || "/placeholder.svg"} 
                      alt={`${projectTitle} thumbnail ${index}`} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

interface ProjectPreviewProps {
  project: Project;
}

function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block transform transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden rounded-lg mb-2 shadow-md">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-0 w-full p-3">
          <h3 className="font-medium text-white group-hover:text-blue-200 transition-colors text-lg">{project.title}</h3>
        </div>
      </div>
      <p className="text-sm text-gray-600 line-clamp-1 mt-1">{project.caption}</p>
    </Link>
  )
}

export default function ClientProjectPage({ params, project, markdownContent, allProjects }: ClientProjectPageProps & { allProjects: Project[] }) {
  // Combine main image with gallery images for carousel
  const allImages = [project.image || "/placeholder.svg", ...(project.gallery || [])]

  // Get nearby projects and navigation indices
  const currentIndex = allProjects.findIndex(p => p.id === project.id)
  const projectsCount = allProjects.length
  const prevIndex = (currentIndex - 1 + projectsCount) % projectsCount
  const nextIndex = (currentIndex + 1) % projectsCount
  
  // Calculate indices for nearby projects
  const getNearbyProjects = () => {
    const result = []
    
    // Add two projects before the current one
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex - i + projectsCount) % projectsCount
      result.unshift(allProjects[index])
    }
    
    // Add two projects after the current one
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex + i) % projectsCount
      result.push(allProjects[index])
    }
    
    return result
  }
  
  const nearbyProjects = getNearbyProjects()

  return (
    <main className="pt-12 md:pt-24 pb-32 md:pb-16">
      <div className="container">
        <div className="w-full sticky top-4 p-4 border rounded-xl md:relative md:pb-2 md:px-0 md:pt-0 md:border-none bg-background z-10 flex justify-between items-center mb-6">
          <Link href="/#projects" className="hidden md:block">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Projects 
            </Button>
          </Link>
          
          {/* Project pagination controls */}
          <div className="justify-between w-full md:w-auto flex items-center space-x-4">
            <Link href={`/projects/${allProjects[prevIndex].id}`} className="group">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden md:inline">Previous Project</span>
              </Button>
            </Link>
            <span className="text-sm text-gray-500">
            <p className="inline md:hidden">Project{" "}</p>
              {currentIndex + 1} of {projectsCount}
            </span>
            <Link href={`/projects/${allProjects[nextIndex].id}`} className="group">
              <Button variant="ghost" className="flex items-center gap-2">
                <span className="hidden md:inline">Next Project</span>
                <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">{project.title}</h1>
            <p className="text-xl text-blue-400 font-medium mb-4">{project.caption}</p>
            
            {/* Display project tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="prose prose-slate max-w-none mb-8">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>

            {project?.testimonial && (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <blockquote className="text-gray-700 italic mb-4">"{project.testimonial.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-medium">{project.testimonial.author}</p>
                    <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <ImageGallery images={allImages} projectTitle={project.title} />
        </div>
        
        {/* More Projects Section */}
        <div className="mt-24">
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">More Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {nearbyProjects.map((p) => (
                <ProjectPreview key={p.id} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}