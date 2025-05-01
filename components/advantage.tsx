"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function Advantage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  // Set up intersection observer to play video when it comes into view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current && !videoFailed) {
          videoRef.current.play().catch(e => {
            console.log("Video play failed:", e)
            setVideoFailed(true)
          })
        } else if (videoRef.current) {
          videoRef.current.pause()
        }
      })
    }, options)

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [videoFailed])

  // Add error handler for video load failure
  const handleVideoError = () => {
    console.log("Video error occurred, falling back to image")
    setVideoFailed(true)
  }

  return (
    <section id="advantage" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Critical Path Advantage</h2>
            <p className="text-lg text-gray-600">
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

            <div className="mt-6">
              <Link href="/success-methodology">
                <Button className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white">
                  How We Make Your Project A Success
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[450px] rounded-md overflow-hidden shadow-2xl transition-all hover:shadow-3xl">
            {videoFailed ? (
              <div className="w-full h-full">
                <Image
                  src="/images/construction-site.png"
                  alt="Construction site"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            ) : (
              <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="/images/construction-site.png"
                onError={handleVideoError}
              >
                <source src="/videos/construction-site.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-full">Commercial retail space under construction</span>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
