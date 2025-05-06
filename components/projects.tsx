"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, X } from "lucide-react";
import projectsData from "@/data/projects.json";

// Extract all unique tags from projects
const getAllTags = () => {
  const tagSet = new Set<string>();
  projectsData.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => tagSet.add(tag));
    }
  });
  return Array.from(tagSet).sort();
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const allTags = getAllTags();

  // Filter projects based on selected tag
  const filteredProjects = activeFilter
    ? projectsData.filter((project) => project.tags?.includes(activeFilter))
    : projectsData;

  const handleFilterClick = (tag: string) => {
    setActiveFilter((prevTag) => (prevTag === tag ? null : tag));
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-700">
            Discover our portfolio of successful projects across various industries
            and building types.
          </p>
        </div>

        {/* Tag filters */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 justify-center mt-4 pb-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterClick(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  activeFilter === tag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setActiveFilter(null)}
                className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center gap-1"
              >
                <X size={14} />
                Clear filter
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {project.tags && project.tags.length > 0 && (
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-black/50 text-white text-xs px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="inline-block bg-black/50 text-white text-xs px-2 py-0.5 rounded-sm">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.caption}</p>
              {/* View Project button - blue text without background */}
              <div className="mt-4">
                <div className="text-blue-500 font-medium flex items-center gap-1 transition-colors hover:text-blue-600">
                  View Project
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
