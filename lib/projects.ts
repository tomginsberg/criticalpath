import path from 'node:path';
import { promises as fs } from 'node:fs';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { z } from 'zod';
import { cache } from 'react';

const testimonialSchema = z
  .object({
    quote: z.string().optional().default(''),
    author: z.string().optional().default(''),
    position: z.string().optional().default(''),
  })
  .optional();

const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  caption: z.string().min(1),
  image: z.string().optional().default(''),
  gallery: z.array(z.string()).optional().default([]),
  tags: z.array(z.string()).optional().default([]),
  testimonial: testimonialSchema,
  order: z.number().optional(),
});

export interface Project {
  id: string;
  title: string;
  caption: string;
  image: string;
  gallery?: string[];
  tags?: string[];
  testimonial?: {
    quote?: string;
    author?: string;
    position?: string;
  };
  order?: number;
}

export interface ProjectWithContent extends Project {
  markdownContent: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects');
const PUBLIC_PROJECTS_DIR = path.join(process.cwd(), 'public', 'projects');


/**
 * Discovers images from a project's public directory.
 * Returns sorted array of image paths relative to /projects/
 */
async function discoverGalleryImages(slug: string): Promise<string[]> {
  const projectDir = path.join(PUBLIC_PROJECTS_DIR, slug);

  try {
    const files = await fg('*.{jpg,jpeg,png,webp,gif}', {
      cwd: projectDir,
      absolute: false,
    });

    // Sort files naturally (img0, img1, img2... not img0, img1, img10)
    return files.sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)?.[1] || '0', 10);
      const numB = parseInt(b.match(/(\d+)/)?.[1] || '0', 10);
      return numA - numB;
    }).map(file => `/projects/${slug}/${file}`);
  } catch {
    return [];
  }
}

async function readProjectFile(filePath: string): Promise<ProjectWithContent> {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  const slug = path.basename(filePath, path.extname(filePath));

  const data = projectFrontmatterSchema.parse(parsed.data);

  // Auto-discover gallery images from public/projects/{slug}/ when not explicitly set
  const gallery = data.gallery.length > 0
    ? data.gallery
    : await discoverGalleryImages(slug);

  // If no explicit cover image override, use the first gallery image as cover
  const image = data.image || (gallery.length > 0 ? gallery[0] : '');

  return {
    id: slug,
    title: data.title,
    caption: data.caption,
    image,
    gallery,
    tags: data.tags,
    testimonial: data.testimonial,
    order: data.order,
    markdownContent: parsed.content.trim(),
  };
}

export const getProjects = cache(async (): Promise<Project[]> => {
  const files = await fg('*.md', {
    cwd: CONTENT_DIR,
    absolute: true,
  });

  const projects = await Promise.all(files.map(readProjectFile));

  return projects
    .map(({ markdownContent, ...project }) => project)
    .sort((a, b) => {
      const aOrder = a.order ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.order ?? Number.MAX_SAFE_INTEGER;

      if (aOrder !== bOrder) return aOrder - bOrder;
      return a.title.localeCompare(b.title);
    });
});

export const getProject = cache(
  async (slug: string): Promise<ProjectWithContent | null> => {
    const safeSlug = slug.replace(/[^a-z0-9-]/gi, '');
    if (!safeSlug || safeSlug !== slug) return null;

    const filePath = path.join(CONTENT_DIR, `${safeSlug}.md`);

    try {
      return await readProjectFile(filePath);
    } catch (error: unknown) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return null;
      }
      throw error;
    }
  }
);

export const getProjectSlugs = cache(async (): Promise<string[]> => {
  const files = await fg('*.md', {
    cwd: CONTENT_DIR,
  });

  return files.map((file) => path.basename(file, path.extname(file)));
});
