import { notFound } from 'next/navigation';
import ClientProjectPage from './client-page';
import { getProject, getProjects, getProjectSlugs } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Projects`,
    description: project.caption,
    openGraph: {
      title: project.title,
      description: project.caption,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    getProject(slug),
    getProjects(),
  ]);

  if (!project) {
    notFound();
  }

  const { markdownContent, ...projectData } = project;

  return (
    <ClientProjectPage
      params={{ slug }}
      project={projectData}
      markdownContent={
        markdownContent || 'Project description is currently being updated.'
      }
      allProjects={allProjects}
    />
  );
}
