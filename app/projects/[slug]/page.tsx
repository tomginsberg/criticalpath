import Image from "next/image"
import Link from "next/link"
import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import projectsData from "@/data/projects.json"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.slug)

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

  // Combine main image with gallery images for carousel
  const allImages = [project.image || "/placeholder.svg", ...(project.gallery || [])]

  return (
    <main className="pt-24 pb-16">
      <div className="container">
        <Link href="/#projects">
          <Button variant="ghost" className="flex items-center gap-2 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">{project.title}</h1>
            <p className="text-xl text-teal-600 font-medium mb-6">{project.caption}</p>

            {/* <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <User className="h-4 w-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
            </div> */}

            {/* Render markdown content with Tailwind Typography */}
            <div className="prose prose-slate max-w-none mb-8">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>

            {/* <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100">
                    {service}
                  </Badge>
                ))}
              </div>
            </div> */}

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

          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Carousel display - visible on all screen sizes */}
            <div>
              <Carousel className="relative">
                <CarouselContent>
                  {allImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                        <Image 
                          src={image || "/placeholder.svg"} 
                          alt={`${project.title} ${index === 0 ? 'main image' : `gallery image ${index}`}`} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="static translate-y-0 -translate-x-0" />
                  <CarouselNext className="static translate-y-0 translate-x-0" />
                </div>
              </Carousel>
            </div>

            {/* Grid display - only visible on large screens where there's extra space */}
            {allImages.length > 1 && (
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-3">
                  {allImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-square overflow-hidden rounded-md shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <Image 
                        src={image || "/placeholder.svg"} 
                        alt={`${project.title} gallery image ${index}`}
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
