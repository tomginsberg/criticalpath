import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Highlighted Projects</h2>
          <p className="text-lg text-gray-700">
            Take a look at some of our recent successful projects that showcase our expertise in managing complex
            construction and renovation work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="group">
              {/* Make Card a flex container */}
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg rounded-b-lg flex flex-col">
                <div className="relative h-64 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                {/* Make CardContent grow and use flex column */}
                <CardContent className="py-6 px-3 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.caption}</p>
                  {/* Push this div to the bottom */}
                  <div className="flex items-center text-blue-400 font-medium mt-auto">
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
