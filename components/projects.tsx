"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import projectsData from "@/data/projects.json"

const getAllTags = () => {
  const tagSet = new Set<string>()
  projectsData.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => tagSet.add(tag))
    }
  })
  return Array.from(tagSet).sort()
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const allTags = getAllTags()

  const filteredProjects = activeFilter
    ? projectsData.filter((project) => project.tags?.includes(activeFilter))
    : projectsData

  const handleFilterClick = (tag: string) => {
    setActiveFilter((prev) => (prev === tag ? null : tag))
  }

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-6">
            Portfolio
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
            A selection of projects across industries and building types.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilterClick(tag)}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors duration-150 ${
                activeFilter === tag
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tag}
            </button>
          ))}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="px-3 py-1.5 text-xs font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              <X size={12} />
              Clear
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {project.caption}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
