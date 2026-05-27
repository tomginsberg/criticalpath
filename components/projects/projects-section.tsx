import { getProjects } from '@/lib/projects';
import ProjectsClient from './projects-client';

export default async function ProjectsSection() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
