import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import projectsData from "@/data/projects.json"
import ClientProjectPage from "./client-page"

interface PageProps<T = {}> {
  params: T
}

interface ProjectParams {
  slug: string
}

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

export default function ProjectPage({ params }: PageProps<ProjectParams>) {
  const project = projectsData.find((p) => p.id === params.slug) as Project

  if (!project) {
    notFound()
  }
  
  // Read markdown content from file
  let markdownContent = ""
  
  try {
    // Absolute path for server component
    const markdownPath = path.join(process.cwd(), 'data', 'projects-md', `${params.slug}.md`)
    
    if (fs.existsSync(markdownPath)) {
      markdownContent = fs.readFileSync(markdownPath, 'utf8')
    } else {
      // Try the path specified in the project data as fallback
      const fallbackPath = path.join(process.cwd(), project.storyFile)
      if (fs.existsSync(fallbackPath)) {
        markdownContent = fs.readFileSync(fallbackPath, 'utf8')
      } else {
        console.error(`Markdown file not found for project ${project.id}. Tried paths: ${markdownPath}, ${fallbackPath}`)
      }
    }
  } catch (error) {
    console.error(`Error reading markdown file for project ${project.id}:`, error)
  }

  // If we still don't have content, set a placeholder message
  if (!markdownContent) {
    markdownContent = "Project description is currently being updated."
  }

  return (
    <ClientProjectPage 
      params={params} 
      project={project} 
      markdownContent={markdownContent}
      allProjects={projectsData as Project[]}
    />
  )
}
