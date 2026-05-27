import { getProjects } from '@/lib/projects';
import AllProjectsClient from './all-projects-client';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Projects | Critical Path Projects',
  description:
    'Explore our full portfolio of completed projects across commercial, retail, institutional, and specialty builds.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <AllProjectsClient projects={projects} />
      <Footer />
    </>
  );
}
