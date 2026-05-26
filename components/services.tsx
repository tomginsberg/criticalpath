import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-6">
            What We Do
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
            Whether you engage us as full service project managers or choose
            individual services, Critical Path Projects always looks after your
            interests first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
            <Image
              src="/services/s1.jpg"
              alt="Full service project management"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Full Service Project Management
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[50ch]">
              Complete management from inception to final close-out and move. We
              work with you every step of the way — design, engineering,
              tendering, construction oversight, and beyond.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="relative aspect-[3/2] overflow-hidden mb-6">
              <Image
                src="/services/s2.jpg"
                alt="Scope and budget development"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Scope, Budget &amp; Schedule Development
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-[50ch]">
              Getting started is tough. We clarify the initial scope, develop
              realistic budgets, and build schedules that give you the confidence
              to move forward.
            </p>
          </div>
          <div>
            <div className="relative aspect-[3/2] overflow-hidden mb-6">
              <Image
                src="/services/s3.jpg"
                alt="Bidding and construction execution"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Bidding, Execution &amp; Control
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-[50ch]">
              We closely oversee all aspects of tender and construction execution —
              managing budgets, solving problems, and keeping your project on track.
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <Link href="/services">
            <span className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide uppercase text-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
              See All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
