import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { LinkedInLink } from "@/components/ui/linkedin-link"

const CONTACTS = [
  {
    name: "Peter Nissenbaum",
    email: "peter@criticalpathprojects.com",
    phone: "416-995-6444",
    linkedIn: "https://www.linkedin.com/in/criticalpathprojects/",
    label: "Peter Nissenbaum — LinkedIn",
  },
  {
    name: "Charlotte Nissenbaum",
    email: "charlotte@criticalpathprojects.com",
    phone: "647-828-8326",
    linkedIn: "https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/",
    label: "Charlotte Nissenbaum — LinkedIn",
  },
  {
    name: "Jonah Nissenbaum",
    email: "jonah@criticalpathprojects.com",
    phone: "416-937-9496",
    linkedIn: "https://www.linkedin.com/in/jonah-nissenbaum-29038b154/",
    label: "Jonah Nissenbaum — LinkedIn",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-6">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
            Ready to discuss your project?
          </h2>
          <p className="mt-6 text-gray-500 text-lg">
            We are based in Toronto and welcome inquiries from across Canada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {CONTACTS.map(({ name, email, phone, linkedIn, label }) => (
            <div key={name} className="bg-white p-8">
              <div className="flex items-center gap-3 mb-5">
                <LinkedInLink href={linkedIn} ariaLabel={label} />
                <h3 className="font-bold text-gray-900">{name}</h3>
              </div>
              <div className="space-y-3">
                <Link
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {email}
                </Link>
                <Link
                  href={`tel:${phone.replace(/-/g, '')}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {phone}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
