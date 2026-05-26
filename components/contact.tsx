import { Mail, Phone } from "lucide-react"
import { LinkedInLink } from "@/components/ui/linkedin-link"
import Link from "next/link"

export default function Contact() {
  const contacts = [
    {
      name: "Peter Nissenbaum",
      email: "peter@criticalpathprojects.com",
      phone: "416-995-6444",
      linkedIn: "https://www.linkedin.com/in/criticalpathprojects/",
    },
    {
      name: "Charlotte Nissenbaum",
      email: "charlotte@criticalpathprojects.com",
      phone: "647-828-8326",
      linkedIn: "https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/",
    },
    {
      name: "Jonah Nissenbaum",
      email: "jonah@criticalpathprojects.com",
      phone: "416-937-9496",
      linkedIn: "https://www.linkedin.com/in/jonah-nissenbaum-29038b154/",
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-6">
            Get in Touch
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Ready to discuss your project?
          </h2>
          <p className="text-lg text-muted-foreground">
            Based in Toronto, we manage projects across Canada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {contacts.map((person) => (
              <div key={person.name} className="text-center">
                <div className="flex justify-center mb-3">
                  <LinkedInLink
                    href={person.linkedIn}
                    className="text-muted-foreground hover:text-accent"
                    iconSize={20}
                    ariaLabel={`${person.name}'s LinkedIn profile`}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {person.name}
                </h3>
                <div className="space-y-1.5">
                  <Link
                    href={`mailto:${person.email}`}
                    className="text-muted-foreground hover:text-accent text-sm flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    {person.email}
                  </Link>
                  <Link
                    href={`tel:${person.phone.replace(/-/g, "")}`}
                    className="text-muted-foreground hover:text-accent text-sm flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    {person.phone}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
