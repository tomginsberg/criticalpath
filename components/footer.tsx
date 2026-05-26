import { LinkedInLink } from "@/components/ui/linkedin-link"

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-[#a8a6a0] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <img
              src="/logos/cp_logo.png"
              alt="Critical Path Projects"
              className="invert h-14 opacity-80"
            />
            <p className="text-sm text-[#6a7488]">
              Building success through meticulous management
            </p>
          </div>
          <LinkedInLink
            href="https://www.linkedin.com/in/criticalpathprojects/"
            className="text-[#6a7488] hover:text-[#b8963e]"
            iconSize={22}
            ariaLabel="Critical Path Projects LinkedIn page"
          />
        </div>

        <div className="border-t border-white/5 mt-10 pt-8">
          <p className="text-xs text-[#6a7488]">
            &copy; {new Date().getFullYear()} Critical Path Projects Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
