import path from 'node:path';
import { promises as fs } from 'node:fs';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { z } from 'zod';
import { cache } from 'react';

const mediaFrontmatterSchema = z.object({
  title: z.string().min(1),
  publication: z.string().optional().default(''),
  publishedAt: z.coerce.date().optional(),
  url: z.string().optional().default(''),
  description: z.string().optional().default(''),
  image: z.string().optional().default(''),
});

export interface MediaItem {
  id: string;
  title: string;
  publication: string;
  publishedAt: string;
  url: string;
  description: string;
  image: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'media');

async function readMediaFile(filePath: string): Promise<MediaItem> {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  const slug = path.basename(filePath, path.extname(filePath));

  const data = mediaFrontmatterSchema.parse(parsed.data);

  return {
    id: slug,
    title: data.title,
    publication: data.publication,
    publishedAt: data.publishedAt
      ? data.publishedAt.toISOString().slice(0, 10)
      : '',
    url: data.url,
    description: data.description,
    image: data.image,
  };
}

export const getMedia = cache(async (): Promise<MediaItem[]> => {
  const files = await fg('*.md', {
    cwd: CONTENT_DIR,
    absolute: true,
  });

  const media = await Promise.all(files.map(readMediaFile));

  return media.sort((a, b) =>
    (b.publishedAt || '').localeCompare(a.publishedAt || '')
  );
});
