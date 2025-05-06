"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Slider from 'react-infinite-logo-slider'

export default function Hero() {
  // Client logos for the slider
  const clients = [
    {name: "Canadian Tire", logo: "/logos/canadian-tire.png" },
    {name: "Woodgreen", logo: "/logos/woodgreen.png" },
    {name: "Under Armour", logo: "/logos/Under_armour_logo.svg" },
    {name: "CMHM", logo: "/logos/CMHC.png" },
    {name: "Canada", logo: "/logos/canada.png" },
    // scotia.png
    {name: "Scotiabank", logo: "/logos/scotia.png" },
    {name: "Ontario Trillium Foundation", logo: "/logos/OTF.png" },
    {name: "TD Bank", logo: "/logos/1144px-Toronto-Dominion_Bank_logo.svg.png" },
    {name: "Bell", logo: "/logos/Bell_logo.svg" },
    {name: "CBC", logo: "/logos/250px-CBC_Logo_1992-Present.svg.png" },
    {name: "YWCA", logo: "/logos/YWCA_Logo.svg" },
    {name: "Candu", logo: "/logos/Candu_logo.png" },
    {name: "BCG", logo: "/logos/BCG_MONOGRAM.png" },
    {name: "CIB", logo: "/logos/CIB-BIC-EN-Pride-Full.png" },
    {name: "Nike", logo: "/logos/nike.png" },
    {name: "Oxford", logo: "/logos/Oxford_Properties_logo_svg.png" },
    // mpac.png
    {name: "MPAC", logo: "/logos/mpac.png" },
    {name: "UofT", logo: "/logos/uoft.png" },
    // ilac.png
    {name: "ILAC", logo: "/logos/ilac.png" },
  ]

  return (
    <section className="relative pt-32 md:pt-40 md:pb-4 lg:pt-48 lg:pb-8 overflow-hidden min-h-[100vh] flex flex-col justify-between">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/office-2.jpg"
          alt="Modern office reception with city view"
          fill
          priority
          className="object-cover"
        />
       <div className="absolute inset-0 bg-gradient-to-b
            from-black from-0%
            via-black/60  via-70%
            to-gray-200    to-95%">
</div>

      </div>

      {/* Hero Content */}
      <div className="container relative z-10 flex-grow">
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-4 lg:items-start">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            <span className="block text-5xl md:text-5xl lg:text-6xl">You have a business to run.</span>
            <span className="block text-gray-300">Let us manage your construction and retrofit projects with experience that delivers results</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          With nearly 30 years of experience managing construction projects across Canada, we save you time, money, and stress by carefully managing your commercial relocation, renovation, or ground-up retail build — even in live, occupied spaces.  Our long experience lets us know where to look for the inevitable issues that are part of construction and get ahead of each and every one of them.  We don’t just react — we plan ahead, solve problems early, and keep your project on track from day one.
          </p>

        </div>

        <div className="flex flex-row xl:grid grid-cols-2 gap-2 xl:gap-8 xl:items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
                <Image
                  src={`/awards/award${i}.png`}
                  alt={`Award ${i}`}
                  width={150}
                  height={150}
                  className="object-contain invert"
                />
              </div>
            ))}
          </div>
      </div>

      {/* Awards Section */}
   
      </div>
      
      {/* Logo Slider at Bottom */}
      <div className="relative z-10 mt-auto pt-8 w-full ">
        <div className="container mb-4">
          <p className="text-center text-lg font-medium text-black/80 uppercase tracking-wider mb-2">Some of Our Valued Clients</p>
        </div>
        <div className="relative py-4">
          <Slider
            width="220px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
          >
            {clients.map((client) => (
              <Slider.Slide key={client.name}>
                <div className="w-[180px] h-16 relative">
                  <Image 
                    src={client.logo || "/placeholder.svg"} 
                    alt={client.name} 
                    fill 
                    className="object-contain rounded-xl" 
                  />
                </div>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
      
      
    </section>
  )
}
