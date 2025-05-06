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
  const markdownPath = path.join(process.cwd(), project.storyFile)
  let markdownContent = ""
  
  try {
    markdownContent = fs.readFileSync(markdownPath, 'utf8')
  } catch (error) {
    console.error(`Error reading markdown file for project ${project.id}:`, error)
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
