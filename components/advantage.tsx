"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function Advantage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !videoFailed) {
            videoRef.current.play().catch(() => setVideoFailed(true))
          } else if (videoRef.current) {
            videoRef.current.pause()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [videoFailed])

  return (
    <section id="advantage" className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative aspect-[7/5] overflow-hidden">
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
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-24 pb-6 px-6">
              <span className="text-white/80 text-xs uppercase tracking-widest">Commercial retail under construction</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-6">
              The advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-8">
              We manage the entire process, start to finish.
            </h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed max-w-prose">
              <p>
                From signing a lease to coordinating design and engineering, finding a qualified contractor,
                overseeing construction, and assisting on move-in day, we handle it all.
              </p>
              <p>
                Critical Path Projects represents your interests, period. Commercial project management is
                our only business. We deliver your project for the lowest cost, on schedule.
              </p>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
