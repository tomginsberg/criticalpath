import Image from "next/image"
import { LinkedInLink } from "@/components/ui/linkedin-link"

const TEAM = [
  {
    name: "Peter Nissenbaum",
    credentials: "PMP, MBA",
    role: "Senior Project Manager & Principal",
    bio: "Over 20 years managing mission-critical commercial construction for project owners. Expert at coordinating architects, consultants, engineers, landlords, and contractors with an outstanding record of on-time, on-budget delivery.",
    image: "/headshots/peter.JPG",
    linkedIn: "https://www.linkedin.com/in/criticalpathprojects/",
    education: [
      "Project Management Professional (PMP), PMI",
      "MBA with Distinction, University of Warwick",
      "BA Marketing & Psychology, Brock University",
    ],
  },
  {
    name: "Charlotte Nissenbaum",
    credentials: "B.Sc., MBA",
    role: "Senior Project Manager & Principal",
    bio: "20+ years leading commercial interior construction and development for Fortune 500 companies, from initial planning and budgeting through contractor selection, construction, and move management.",
    image: "/headshots/charlotte.JPG",
    linkedIn: "https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/",
    education: [
      "MBA with Distinction, University of Warwick",
      "BSc Physics, 1st Class Honours, University of Bristol",
    ],
  },
  {
    name: "Jonah Nissenbaum",
    credentials: "B.Eng",
    role: "Project Manager",
    bio: "Specializes in budgeting, tendering, and scope development for capital projects. Engineering background combined with business training gives Jonah a rare ability to navigate both technical and financial dimensions of complex builds.",
    image: "/headshots/jonah.JPG",
    linkedIn: "https://www.linkedin.com/in/jonah-nissenbaum-29038b154/",
    education: [
      "BEng Water Resource Engineering, University of Guelph",
      "Certificate of Business, Lang School of Business",
    ],
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-6">The team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
            Who you'll be working with.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200">
          {TEAM.map((member) => (
            <div key={member.name} className="bg-gray-50 flex flex-col">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{member.credentials}</span>
                  </div>
                  <LinkedInLink href={member.linkedIn} ariaLabel={`${member.name} on LinkedIn`} />
                </div>
                <p className="text-amber-600 text-sm font-medium mb-5">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">{member.bio}</p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Education</p>
                  <ul className="space-y-1">
                    {member.education.map((edu) => (
                      <li key={edu} className="text-xs text-gray-500 leading-snug">{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
