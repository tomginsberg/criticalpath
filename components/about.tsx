import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const STATS = [
  { value: "30+", label: "years in commercial construction" },
  { value: "500+", label: "projects delivered" },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:gap-24 items-start">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-6">
              Who we are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-8 max-w-lg">
              Thirty years of making hard projects look easy.
            </h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed max-w-prose">
              <p>
                Critical Path Projects is a Toronto-based owner's project management firm. We represent you from the day the project starts until you're happy!
              </p>
              <p>
                We've managed commercial fit-outs, institutional renovations, retail builds, and ground-up
                construction for clients including Nike, BCG, the CBC, and the Government of Canada. The work
                is complex; your involvement shouldn't have to be.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/success-methodology"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm uppercase tracking-widest border-b-2 border-amber-500 pb-1 hover:border-gray-900 transition-colors duration-200 group"
              >
                How we work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="space-y-0">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Critical Path Projects"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 ring-1 ring-inset ring-black/10" /> */}
            </div>

            <dl className="grid grid-cols-2 gap-px bg-gray-200">
              {STATS.map(({ value, label }) => (
                <div key={label} className="bg-white py-5 px-4">
                  <dd className="text-2xl font-bold text-gray-900 tabular-nums">{value}</dd>
                  <dt className="text-xs text-gray-500 leading-snug mt-1">{label}</dt>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  )
}
