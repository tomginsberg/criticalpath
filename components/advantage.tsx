"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function Advantage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current && !videoFailed) {
          videoRef.current.play().catch(() => setVideoFailed(true))
        } else if (videoRef.current) {
          videoRef.current.pause()
        }
      })
    }, { threshold: 0.1 })

    if (videoRef.current) observer.observe(videoRef.current)
    return () => { if (videoRef.current) observer.unobserve(videoRef.current) }
  }, [videoFailed])

  return (
    <section id="advantage" className="py-24 md:py-32 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-6">
              The Advantage
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-foreground leading-[1.1] mb-8">
              The Critical Path Advantage
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="max-w-[55ch]">
                Critical Path Projects is uniquely positioned to help businesses
                with their ground-up, retrofit, or renovation construction
                needs. We manage the entire process — from signing a lease to
                coordinating design and engineering teams, finding a qualified
                contractor, and overseeing construction through to move-in day.
              </p>
              <p className="text-foreground font-medium max-w-[55ch]">
                We represent your interests, period. Project management for
                commercial construction is our only business.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/success-methodology">
                <span className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide uppercase text-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                  How We Deliver Success
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            {videoFailed ? (
              <Image
                src="/images/construction-site.png"
                alt="Construction site"
                fill
                className="object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="/images/construction-site.png"
                onError={() => setVideoFailed(true)}
              >
                <source src="/videos/construction-site.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
