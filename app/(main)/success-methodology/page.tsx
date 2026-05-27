"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

const pillars = [
  {
    number: "01",
    title: "Schedule",
    lead: "Keeping you on time",
    points: [
      "CPP creates a clear schedule that meets your project requirements from day one",
      "Defined meeting cadences coordinate architects, designers, and engineers without gaps",
      "Daily focus on milestone dates — no surprises late in the project",
      "Expert management of all professionals to ensure on-time delivery",
    ],
  },
  {
    number: "02",
    title: "Expectations",
    lead: "Meeting your standards",
    points: [
      "Clearly defined project scope and objectives established before work begins",
      "CPP sets up and manages all construction communications and site meetings",
      "Comprehensive reporting keeps you informed at every stage",
      "Our only focus is project management — no divided attention",
    ],
  },
  {
    number: "03",
    title: "Budget",
    lead: "Managing costs and value",
    points: [
      "Client needs are properly translated into construction drawings",
      "Pre-construction investigations surface hidden site conditions early",
      "Budget reflects total project costs — every soft cost accounted for",
    ],
  },
]

export default function SuccessMethodology() {
  return (
    <main className="pt-12 md:pt-24 pb-32 md:pb-20" style={{ background: "oklch(0.985 0.003 240)" }}>
      <div className="container max-w-5xl">

        {/* Back nav */}
        <Link
          href="/#advantage"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#021F59]/60 hover:text-[#021F59] transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero intro */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start mb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0337A0] mb-5">
              Our Proven Methodology
            </p>
            <h1
              className="font-bold text-[#021F59] mb-8 leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              How We Make Your Project a Success
            </h1>
            <p className="text-lg leading-relaxed max-w-[60ch]" style={{ color: "oklch(0.35 0.01 240)" }}>
              CPP takes full responsibility for your outcome — not advisory, not oversight. We plan, coordinate,
              and drive delivery across every stakeholder so your business isn't distracted by the build.
            </p>
          </div>

          <div
            className="relative overflow-hidden lg:sticky lg:top-24 lg:self-start"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src="/images/peter.png"
              alt="Peter Nissenbaum, Principal — Critical Path Projects"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Framework label */}
        <div className="flex items-center gap-6 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "oklch(0.55 0.01 240)" }}>
            Our Success Framework
          </span>
          <div className="flex-1 h-px" style={{ background: "oklch(0.82 0.008 240)" }} />
        </div>

        {/* Three pillars — editorial rows */}
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="grid md:grid-cols-[120px_1fr_1fr] gap-x-12 gap-y-6 py-12"
              style={{
                borderTop: i === 0 ? undefined : `1px solid oklch(0.82 0.008 240)`,
              }}
            >
              {/* Number + category */}
              <div className="flex md:flex-col gap-3 md:gap-1 items-baseline md:items-start">
                <span
                  className="font-bold leading-none tabular-nums"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "oklch(0.88 0.008 240)" }}
                >
                  {pillar.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0337A0] md:mt-2">
                  {pillar.title}
                </span>
              </div>

              {/* Lead */}
              <div>
                <h2
                  className="font-bold text-[#021F59] mb-0"
                  style={{ fontSize: "clamp(1.15rem, 2vw, 1.4rem)" }}
                >
                  {pillar.lead}
                </h2>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <span
                      className="mt-[0.4em] shrink-0 w-1 h-1 rounded-full bg-[#0337A0]"
                    />
                    <p className="text-sm leading-relaxed max-w-[52ch]" style={{ color: "oklch(0.38 0.01 240)" }}>
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Outcome statement */}
        <div
          className="mt-4 mb-16 px-10 py-10"
          style={{ background: "#021F59" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">The Result</p>
          <h2
            className="font-bold text-white leading-[1.1] max-w-[42ch]"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
          >
            Project schedule met. Budget held. No surprises.
          </h2>
          <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-[58ch]">
            Critical Path Projects represents your interests alone — and is solely responsible for ensuring your
            project is delivered on budget and on schedule.
          </p>
        </div>

        {/* Download + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-semibold text-[#021F59] mb-1">Download Our Methodology</p>
            <p className="text-sm" style={{ color: "oklch(0.55 0.01 240)" }}>
              Detailed flowchart showing how we manage successful projects.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href="/success.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-[#021F59]/30 text-[#021F59] hover:bg-[#021F59] hover:text-white hover:border-[#021F59] transition-colors duration-200"
            >
              Download PDF
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#0337A0] text-white hover:bg-[#021F59] transition-colors duration-200"
            >
              Discuss a project
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
