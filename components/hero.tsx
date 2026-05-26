"use client"

import Image from "next/image"
import Slider from 'react-infinite-logo-slider'

export default function Hero() {
  const clients = [
    { name: "Canadian Tire", logo: "/logos/canadian-tire.png" },
    { name: "Woodgreen", logo: "/logos/woodgreen.png" },
    { name: "Under Armour", logo: "/logos/Under_armour_logo.svg" },
    { name: "CMHC", logo: "/logos/CMHC.png" },
    { name: "Canada", logo: "/logos/canada.png" },
    { name: "Scotiabank", logo: "/logos/scotia.png" },
    { name: "Ontario Trillium Foundation", logo: "/logos/OTF.png" },
    { name: "TD Bank", logo: "/logos/1144px-Toronto-Dominion_Bank_logo.svg.png" },
    { name: "Bell", logo: "/logos/Bell_logo.svg" },
    { name: "CBC", logo: "/logos/250px-CBC_Logo_1992-Present.svg.png" },
    { name: "YWCA", logo: "/logos/YWCA_Logo.svg" },
    { name: "Candu", logo: "/logos/Candu_logo.png" },
    { name: "BCG", logo: "/logos/BCG_MONOGRAM.png" },
    { name: "CIB", logo: "/logos/CIB-BIC-EN-Pride-Full.png" },
    { name: "Nike", logo: "/logos/nike.png" },
    { name: "Oxford", logo: "/logos/Oxford_Properties_logo_svg.png" },
    { name: "MPAC", logo: "/logos/mpac.png" },
    { name: "UofT", logo: "/logos/uoft.png" },
    { name: "ILAC", logo: "/logos/ilac.png" },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/office-2.jpg"
          alt="Modern commercial interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
      </div>

      <div className="container relative z-10 flex-1 flex flex-col pt-40 md:pt-48 lg:pt-56">
        <div className="max-w-3xl">
          <h1 className="font-display">
            <span className="block text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold tracking-tight text-[#f0eeea] leading-[1.05]">
              You have a business to run.
            </span>
            <span className="block text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-semibold text-[#b8963e] mt-3 leading-[1.15]">
              We manage the construction.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#a8a6a0] mt-8 max-w-[55ch] leading-[1.7]">
            Nearly 30 years delivering commercial fit-outs, renovations, and
            ground-up builds across Canada. On time, on budget — every time.
          </p>
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#b8963e] hover:bg-[#a3843a] text-[#0a1628] px-7 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="border border-[#f0eeea]/25 hover:border-[#f0eeea]/50 text-[#f0eeea] px-7 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200"
            >
              View Our Work
            </button>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-6 pb-8">
          <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[#6a7488] font-medium hidden md:block">
            Industry Recognition
          </span>
          <div className="h-px w-8 bg-[#6a7488]/30 hidden md:block" />
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-[72px] h-[72px] md:w-[88px] md:h-[88px]">
                <Image
                  src={`/awards/award${i}.png`}
                  alt={`Award ${i}`}
                  width={88}
                  height={88}
                  className="object-contain brightness-0 invert opacity-50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 py-6">
        <Slider
          width="200px"
          duration={45}
          pauseOnHover={true}
          blurBorders={false}
        >
          {clients.map((client) => (
            <Slider.Slide key={client.name}>
              <div className="w-[160px] h-14 relative">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain brightness-0 invert opacity-40"
                />
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  )
}
