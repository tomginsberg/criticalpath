"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const SERVICES = [
  {
    title: "Full Service Project Management",
    description: "Complete management from inception to final closeout and move-in. We work beside you every step of the way, including all services below and any your specific project requires.",
    image: "/images/management.jpeg",
  },
  {
    title: "Scope, Budget, and Schedule Development",
    description: "Getting started is the hardest part. We help you develop clear scope, initial budgets, and schedules so you can make informed decisions about moving forward.",
    image: "/images/scope.jpeg",
  },
  {
    title: "Bidding, Execution, and Control of Construction",
    description: "We oversee every aspect of tender and construction execution to ensure your project stays on budget and on schedule, solving problems as they arise.",
    image: "/images/Bidding.jpeg",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-6">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
            Our services.
          </h2>
        </div>

        <div className="space-y-24">
          {SERVICES.map(({ title, description, image }, i) => (
            <div
              key={title}
              className={`grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-gray-100">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm uppercase tracking-widest border-b-2 border-amber-500 pb-1 hover:border-gray-900 transition-colors duration-200 group"
          >
            See all services
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
