"use client"

import { useEffect, useRef } from "react"

export default function SaveMoney() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.3}px, 0)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const items = [
    {
      num: "01",
      title: "Ensuring the design team has a clear budget to work to",
      body: "The parts of the project you don\u2019t see \u2014 mechanical, electrical, and civil work \u2014 account for over half the budget. We instruct consultant teams to design efficiently so you have more money for the finishes you do see.",
    },
    {
      num: "02",
      title: "Making contractors compete for your business",
      body: "Not all contractors want to compete, and some are too busy to price competitively. We find the ones who are ready to work and serious about earning your business.",
    },
    {
      num: "03",
      title: "Negotiating savings on high-cost items",
      body: "Our expertise and industry relationships let us negotiate meaningful savings on big-ticket items you would otherwise pay full price for.",
    },
  ]

  return (
    <section id="save-money" className="py-24 md:py-32 relative overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: 'url("/ct.png")', height: '160%', top: '-100%' }}
      />
      <div className="absolute inset-0 bg-[#0a1628]/85 -z-10" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#b8963e] mb-6">
            Value Engineering
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#f0eeea] leading-[1.1] mb-6">
            How We Save You Money
          </h2>
          <p className="text-lg text-[#a8a6a0] mb-16 max-w-[60ch] leading-[1.7]">
            A big part of what we do is save you money. We know where to look
            for opportunities to reduce costs without compromising design or
            construction quality. On most projects, we save you more than our
            fees.
          </p>

          <div className="space-y-12">
            {items.map((item) => (
              <div key={item.num} className="flex gap-8 items-start">
                <span className="font-display text-[2rem] font-bold text-[#b8963e] shrink-0 leading-none mt-1">
                  {item.num}
                </span>
                <div>
                  <p className="text-lg text-[#f0eeea] font-medium mb-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[#a8a6a0] leading-[1.7] max-w-[55ch]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
