'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Project } from '@/lib/projects';

interface AllProjectsClientProps {
  projects: Project[];
}

const getAllTags = (projects: Project[]) => {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags?.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export default function AllProjectsClient({ projects }: AllProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const allTags = getAllTags(projects);

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.tags?.includes(activeFilter))
    : projects;

  const handleFilterClick = (tag: string) => {
    setActiveFilter((prev) => (prev === tag ? null : tag));
  };

  return (
    <main className="min-h-screen" style={{ background: 'oklch(0.985 0.003 240)' }}>
      <div className="container max-w-6xl pt-32 pb-16 md:pt-40 md:pb-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0337A0] hover:text-[#021F59] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0337A0] mb-4">
            Portfolio
          </p>
          <h1
            className="font-bold text-[#021F59] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            All Projects
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'oklch(0.4 0.01 240)' }}
          >
            Our complete portfolio of work across commercial, retail,
            institutional, and specialty builds.
          </p>
        </div>

        {/* Tag filters */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterClick(tag)}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 border ${
                  activeFilter === tag
                    ? 'border-[#0337A0] text-white'
                    : 'border-[#021F59]/20 text-[#021F59]/70 hover:border-[#021F59]/40'
                }`}
                style={{
                  background: activeFilter === tag ? '#0337A0' : 'transparent',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <div className="mt-4">
              <button
                onClick={() => setActiveFilter(null)}
                className="text-xs font-medium text-[#0337A0] hover:text-[#021F59] transition-colors flex items-center gap-1"
              >
                <span className="w-4 h-4 inline-flex items-center justify-center rounded-full border border-[#0337A0]">
                  &times;
                </span>
                Clear filter
              </button>
            </div>
          )}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block"
            >
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: '16/10' }}
              >
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(2,31,89,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>

              <div className="space-y-2">
                <h3
                  className="font-bold text-[#021F59] group-hover:text-[#0337A0] transition-colors"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'oklch(0.45 0.01 240)' }}
                >
                  {project.caption}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <p
                    className="text-xs tracking-wide uppercase"
                    style={{ color: 'oklch(0.6 0.01 240)' }}
                  >
                    {project.tags.slice(0, 3).join(', ')}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p style={{ color: 'oklch(0.5 0.01 240)' }}>
              No projects match the selected filter.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
