import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Advantage() {
  return (
    <section id="advantage" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">THE CRITICAL PATH ADVANTAGE</h2>
            <p className="text-lg text-gray-700">
              Critical Path Projects is uniquely positioned to help businesses with their ground-up, retrofit or
              renovations construction needs. We understand and can manage the entire process, from signing a lease to
              coordinating design and engineering teams, finding a qualified contractor, and overseeing construction,
              right through to assisting you on move-in day.
            </p>
            <p className="text-lg text-gray-700 font-medium">
              Critical Path Projects represents your interests, period. Project Management for commercial construction
              projects is our only business. We are experts at what we do and will deliver your project for the lowest
              cost on schedule.
            </p>

            <div className="mt-4">

            <Link href="/success-methodology">
            <Button className="group bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
              How We Make Your Project A Success
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/construction-site.png"
              alt="Commercial construction site with steel frame structure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-teal-600 text-white text-xs font-medium px-2.5 py-1 rounded">Active Project</span>
              <p className="text-sm mt-2">
                Commercial retail space under construction - steel frame installation phase
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
