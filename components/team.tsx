import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { LinkedInLink } from "@/components/ui/linkedin-link"

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Peter Nissenbaum, PMP, MBA",
      role: "Senior Project Manager & Principal",
      bio: "Senior Project Manager with over 20 years professional experience in mission critical commercial construction, interiors, ground up, highrise and development. Extensive experience on behalf of project owners to manage clients, architects, consultants, engineers, landlords and contractors. Expert at providing independent third party consultation and management of construction projects for the owner. Strong ability to “see the big picture” has led to an outstanding record of planning and completing projects on time and on budget. Respected by colleagues and clients as having excellent leadership, communication and negotiation skills. Problem solving skills result in creative solutions to tough technical and design issues on large, fast track projects. Expert at mitigating risk from construction in mission critical facilities.",
      image: "/placeholder.svg?height=400&width=400",
      linkedIn: "https://www.linkedin.com/in/criticalpathprojects/",
      education: [
        "Project Management Professional (PMP), Project Management Institute",
        "M.B.A. (Awarded with Distinction) University of Warwick, Coventry, England",
        "B.A. (Marketing and Psychology) Brock University, St. Catharines, Ontario"
      ]
    },
    {
      id: 2,
      name: "Charlotte Nissenbaum, B.Sc., MBA",
      role: "Senior Project Manager and Principal",
      bio: "Charlotte has over 20 years of experience as a Senior Project Manager in commercial interior construction and development. She has successfully led construction and relocation projects for Fortune 500 companies, from initial planning and budgeting through contractor selection, construction, and move management. Her skills and dedication ensure projects run smoothly and meet client needs. Charlotte’s extensive work with owners, architects, engineers, landlords, and contractors has built a strong track record of on-time, on-budget project delivery. Specialties: Construction and development planning, Client Relationship Management, Project and Budget Management, Contractor Selection, Negotiation, Value Analysis, Cost Reduction, Team Leadership, and Logical Problem Solving. She combines strong people skills, execution expertise, and attention to detail across every project.",
      image: "/placeholder.svg?height=400&width=400",
      linkedIn: "https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/",
      education: ["M.B.A. (Awarded with Distinction) University of Warwick, Coventry, England.", "B.Sc. (Physics, 1st Class Honors) Bristol University, England."]
    },
    {
      id: 3,
      name: "Jonah Nissenbaum, B.Eng",
      role: "Project Manager",
      bio: "Jonah is an accomplished project manager with a B.Eng in Water Resource Engineering from the University of Guelph and a Certificate of Business from the Lang School of Business. He excels in budgeting, tender processes, and scope development for capital projects—ensuring every initiative is financially viable and competitively priced. His keen eye for value-add opportunities consistently enhances construction project outcomes. Drawing on a robust background in Construction Management, ground-up construction, and Engineering Design, Jonah adeptly coordinates resources and teams while effectively managing communications with general contractors, architects, engineers, landlords, owners, and other key stakeholders. His strategic approach ensures projects are delivered on time and within budget, every time. With a commitment to excellence and a proven track record, Jonah is dedicated to driving project success from concept to completion.",
      image: "/placeholder.svg?height=400&width=400",
      linkedIn: "https://www.linkedin.com/in/jonah-nissenbaum-29038b154/",
      education: ["Bachelor of Engineering, Water Resource Engineering, University of Guelph",
        "Certificate of Business, Lang School of Business, University of Guelph"]
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

        {/* Ensure items-stretch is applied to the grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {team.map((member) => (
            // Card uses flex flex-col
            <Card key={member.id} className="overflow-hidden flex flex-col">
              {/* Image container prevents shrinking */}
              <div className="relative h-64 w-full flex-shrink-0">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              {/* CardContent fills remaining space and arranges children vertically */}
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Name/Role/Link section prevents shrinking */}
                <div className="flex justify-between items-start mb-4 flex-shrink-0">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-medium">{member.role}</p>
                  </div>
                  {member.linkedIn && (
                    <LinkedInLink 
                      href={member.linkedIn}
                      ariaLabel={`${member.name}'s LinkedIn profile`}
                    />
                  )}
                </div>

                {/* Bio container with fixed height and vertical scroll if needed */}
                {/* Adjust h-80 (320px) as needed */}
                {/* Removed flex-grow, added fixed height and overflow */}
                <div className="lg:h-[550px] overflow-auto mb-4 flex-shrink-0">
                  <p className="text-gray-700">{member.bio}</p>
                </div>
                
                {/* Education section follows bio, prevents shrinking */}
                {/* Removed mt-auto */}
                <div className="pt-4 border-t border-gray-200 flex-shrink-0">
                  <h4 className="text-md font-semibold mb-2">Education</h4>
                  {member.education && member.education.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                      {member.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm italic">No education information available</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
