"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

  // Limited display: 3 on mobile, 6 on tablet+/desktop
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : true;
  const initialLimit = 6;
  const [isExpanded, setIsExpanded] = useState(false);

  // Mobile always shows 3 initially; desktop shows 6
  const getInitialLimit = () => {
    if (typeof window === 'undefined') return 3;
    return window.innerWidth < 768 ? 3 : 6;
  };

  const handleFilterClick = (tag: string) => {
    setActiveFilter((prevTag) => (prevTag === tag ? null : tag));
    setIsExpanded(false);
  };

  const limit = isExpanded ? filteredProjects.length : getInitialLimit();
  const displayProjects = filteredProjects.slice(0, limit);

  // Show more toggle
  const showLoadMore = !isExpanded && filteredProjects.length > limit;

  return (
    <section id="projects" className="py-16 md:py-24" style={{ background: "oklch(0.985 0.003 240)" }}>
      <div className="container max-w-6xl">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0337A0] mb-4">
            Portfolio
          </p>
          <h2
            className="font-bold text-[#021F59] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Our Projects
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "oklch(0.4 0.01 240)" }}>
            A selection of completed work across commercial, retail, and institutional builds.
          </p>
        </div>

        {/* Tag filters */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterClick(tag)}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 border ${activeFilter === tag
                    ? "border-[#0337A0] text-white"
                    : "border-[#021F59]/20 text-[#021F59]/70 hover:border-[#021F59]/40"
                  }`}
                style={{
                  background: activeFilter === tag ? "#0337A0" : "transparent",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setActiveFilter(null)}
                className="text-xs font-medium text-[#0337A0] hover:text-[#021F59] transition-colors flex items-center gap-1"
              >
                <span className="w-4 h-4 inline-flex items-center justify-center rounded-full border border-[#0337A0]">×</span>
                Clear filter
              </button>
            </div>
          )}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayProjects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block"
            >
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: "16/10" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Minimal overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(2,31,89,0.6) 0%, transparent 50%)" }}
                />
              </div>

              {/* Meta info inline, no cards */}
              <div className="space-y-2">
                <h3
                  className="font-bold text-[#021F59] group-hover:text-[#0337A0] transition-colors"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 240)" }}>
                  {project.caption}
                </p>

                {/* Tags as simple comma-separated text */}
                {project.tags && project.tags.length > 0 && (
                  <p className="text-xs tracking-wide uppercase" style={{ color: "oklch(0.6 0.01 240)" }}>
                    {project.tags.slice(0, 3).join(", ")}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Load more / View all */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            {showLoadMore ? (
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[#021F59]/30 text-[#021F59] hover:bg-[#021F59] hover:text-white hover:border-[#021F59] transition-all duration-200"
              >
                View more
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#0337A0] text-white hover:bg-[#021F59] transition-all duration-200"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
