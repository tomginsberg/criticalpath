import { HardHat } from "lucide-react"
import Link from "next/link"
import { LinkedInLink } from "@/components/ui/linkedin-link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
          <img
                src="/logos/cp_logo.png"
                className="invert h-16"
              />
            <p className="text-sm">
              We are based in Toronto, Canada and welcome your inquiries.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact us directly</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <LinkedInLink 
                  href="https://www.linkedin.com/in/criticalpathprojects/" 
                  className="text-white hover:text-teal-500" 
                  iconSize={20} 
                  ariaLabel="Peter Nissenbaum's LinkedIn profile"
                />
                <div>
                  <p className="font-medium">Peter Nissenbaum:</p>
                  <p className="text-sm">email: peter@criticalpathprojects.com</p>
                  <p className="text-sm">phone: 416-995-6444</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <LinkedInLink 
                  href="https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/" 
                  className="text-white hover:text-teal-500" 
                  iconSize={20} 
                  ariaLabel="Charlotte Nissenbaum's LinkedIn profile"
                />
                <div>
                  <p className="font-medium">Charlotte Nissenbaum:</p>
                  <p className="text-sm">email: charlotte@criticalpathprojects.com</p>
                  <p className="text-sm">phone: 647-828-8326</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <LinkedInLink 
                  href="https://www.linkedin.com/in/jonah-nissenbaum-29038b154/" 
                  className="text-white hover:text-teal-500" 
                  iconSize={20} 
                  ariaLabel="Jonah Nissenbaum's LinkedIn profile"
                />
                <div>
                  <p className="font-medium">Jonah Nissenbaum:</p>
                  <p className="text-sm">email: jonah@criticalpathprojects.com</p>
                  <p className="text-sm">phone: 416-937-9496</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Critical Path Projects inc.</p>
          <LinkedInLink 
            href="https://www.linkedin.com/in/criticalpathprojects/" 
            className="text-white hover:text-teal-500" 
            iconSize={24} 
            ariaLabel="Critical Path Projects LinkedIn page"
          />
        </div>
      </div>
    </footer>
  )
}
