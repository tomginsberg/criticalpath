import Link from "next/link"
import { LinkedInLink } from "@/components/ui/linkedin-link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <img src="/logos/cp_logo.png" className="invert h-12 mb-4" alt="Critical Path Projects" />
            <p className="text-sm max-w-xs text-gray-500">
              Owner-side project management for commercial construction in Toronto and across Canada.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Navigate</p>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#team" className="hover:text-white transition-colors">Team</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Critical Path Projects Inc. Toronto, Canada.</p>
          <LinkedInLink
            href="https://www.linkedin.com/in/criticalpathprojects/"
            className="text-gray-600 hover:text-white transition-colors"
            iconSize={20}
            ariaLabel="Critical Path Projects on LinkedIn"
          />
        </div>
      </div>
    </footer>
  )
}
