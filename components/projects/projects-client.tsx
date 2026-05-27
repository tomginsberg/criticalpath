'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/projects';

interface ProjectsClientProps {
  projects: Project[];
}

const DESKTOP_LIMIT = 6;

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const displayProjects = projects.slice(0, DESKTOP_LIMIT);
  const hasMore = projects.length > DESKTOP_LIMIT;

  return (
    <section
      id="projects"
      className="py-16 md:py-24"
      style={{ background: 'oklch(0.985 0.003 240)' }}
    >
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0337A0] mb-4">
            Portfolio
          </p>
          <h2
            className="font-bold text-[#021F59] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Our Projects
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'oklch(0.4 0.01 240)' }}
          >
            A selection of completed work across commercial, retail, and
            institutional builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayProjects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={`group block ${i >= 3 ? 'hidden md:block' : ''}`}
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

        {(hasMore || projects.length > 3) && (
          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[#021F59]/30 text-[#021F59] hover:bg-[#021F59] hover:text-white hover:border-[#021F59] transition-all duration-200"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
