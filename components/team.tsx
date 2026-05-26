import Image from "next/image"
import { LinkedInLink } from "@/components/ui/linkedin-link"

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Peter Nissenbaum, PMP, MBA",
      role: "Senior Project Manager & Principal",
      bio: "Senior Project Manager with over 20 years professional experience in mission critical commercial construction, interiors, ground up, highrise and development. Extensive experience on behalf of project owners to manage clients, architects, consultants, engineers, landlords and contractors. Expert at providing independent third party consultation and management of construction projects for the owner. Strong ability to \u201Csee the big picture\u201D has led to an outstanding record of planning and completing projects on time and on budget. Respected by colleagues and clients as having excellent leadership, communication and negotiation skills. Problem solving skills result in creative solutions to tough technical and design issues on large, fast track projects. Expert at mitigating risk from construction in mission critical facilities.",
      image: "/headshots/peter.JPG",
      linkedIn: "https://www.linkedin.com/in/criticalpathprojects/",
      education: [
        "Project Management Professional (PMP), Project Management Institute",
        "M.B.A. (Awarded with Distinction) University of Warwick, Coventry, England",
        "B.A. (Marketing and Psychology) Brock University, St. Catharines, Ontario",
      ],
    },
    {
      id: 2,
      name: "Charlotte Nissenbaum, B.Sc., MBA",
      role: "Senior Project Manager and Principal",
      bio: "Charlotte has over 20 years of experience as a Senior Project Manager in commercial interior construction and development. She has successfully led construction and relocation projects for Fortune 500 companies, from initial planning and budgeting through contractor selection, construction, and move management. Her skills and dedication ensure projects run smoothly and meet client needs. Charlotte\u2019s extensive work with owners, architects, engineers, landlords, and contractors has built a strong track record of on-time, on-budget project delivery. Specialties: Construction and development planning, Client Relationship Management, Project and Budget Management, Contractor Selection, Negotiation, Value Analysis, Cost Reduction, Team Leadership, and Logical Problem Solving. She combines strong people skills, execution expertise, and attention to detail across every project.",
      image: "/headshots/charlotte.JPG",
      linkedIn: "https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/",
      education: [
        "M.B.A. (Awarded with Distinction) University of Warwick, Coventry, England.",
        "B.Sc. (Physics, 1st Class Honors) Bristol University, England.",
      ],
    },
    {
      id: 3,
      name: "Jonah Nissenbaum, B.Eng",
      role: "Project Manager",
      bio: "Jonah is an accomplished project manager with a B.Eng in Water Resource Engineering from the University of Guelph and a Certificate of Business from the Lang School of Business. He excels in budgeting, tender processes, and scope development for capital projects\u2014ensuring every initiative is financially viable and competitively priced. His keen eye for value-add opportunities consistently enhances construction project outcomes. Drawing on a robust background in Construction Management, ground-up construction, and Engineering Design, Jonah adeptly coordinates resources and teams while effectively managing communications with general contractors, architects, engineers, landlords, owners, and other key stakeholders. His strategic approach ensures projects are delivered on time and within budget, every time. With a commitment to excellence and a proven track record, Jonah is dedicated to driving project success from concept to completion.",
      image: "/headshots/jonah.JPG",
      linkedIn: "https://www.linkedin.com/in/jonah-nissenbaum-29038b154/",
      education: [
        "Bachelor of Engineering, Water Resource Engineering, University of Guelph",
        "Certificate of Business, Lang School of Business, University of Guelph",
      ],
    },
  ]

  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-6">
            Our Team
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
            The experienced professionals who ensure your project&apos;s
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {team.map((member) => (
            <div key={member.id}>
              <div className="relative aspect-[5/4] overflow-hidden mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mt-1">
                    {member.role}
                  </p>
                </div>
                {member.linkedIn && (
                  <LinkedInLink
                    href={member.linkedIn}
                    ariaLabel={`${member.name}'s LinkedIn profile`}
                  />
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                {member.bio}
              </p>
              {member.education && member.education.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Education
                  </p>
                  <ul className="space-y-1">
                    {member.education.map((edu, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground"
                      >
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
