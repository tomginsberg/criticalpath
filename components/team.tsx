import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { LinkedInLink } from "@/components/ui/linkedin-link"

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Peter Nissenbaum, PMP, MBA",
      role: "Senior Project Manager & Principal",
      bio: "Senior Project Manager with over 20 years professional experience in mission critical commercial construction. Expert at providing independent third party consultation and management of construction projects for the owner with an outstanding record of planning and completing projects on time and on budget.",
      image: "/placeholder.svg?height=400&width=400",
      linkedIn: "https://www.linkedin.com/in/criticalpathprojects/",
    },
    {
      id: 2,
      name: "Charlotte Nissenbaum, B.Sc., MBA",
      role: "Senior Project Manager and Principal",
      bio: "For over 20 years Charlotte has worked as a Senior Project Manager in commercial interior construction and development with Fortune 500 companies. Her experience, skills and dedication ensure projects run smoothly, with a strong track record of good team management, planning and completing projects on time and on budget.",
      image: "/placeholder.svg?height=400&width=400",
      linkedIn: "https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/",
    },
    {
      id: 3,
      name: "Jonah Nissenbaum, B.Eng",
      role: "Project Manager",
      bio: "Jonah is an accomplished project manager with a B.Eng in Water Resource Engineering. He excels in budgeting, tender processes, and scope development for capital projects. His background in Construction Management ensures projects are delivered on time and within budget, every time.",
      image: "/placeholder.svg?height=400&width=400",
      linkedIn: "https://www.linkedin.com/in/jonah-nissenbaum-29038b154/",
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-700">
            Meet the experienced professionals who will ensure your project's success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              {/* <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div> */}
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  </div>
                  {member.linkedIn && (
                    <LinkedInLink 
                      href={member.linkedIn}
                      ariaLabel={`${member.name}'s LinkedIn profile`}
                    />
                  )}
                </div>
                <p className="text-gray-700">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
