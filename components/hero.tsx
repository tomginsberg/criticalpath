"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Slider from 'react-infinite-logo-slider'

export default function Hero() {
  // Client logos for the slider
  const clients = [
    {name: "Canadian Tire", logo: "/logos/canadian-tire.png" },
    {name: "Woodgreen", logo: "/logos/woodgreen.png" },
    {name: "CMHM", logo: "/logos/CMHC.png" },
    {name: "Canada", logo: "/logos/canada.png" },
    {name: "TD Bank", logo: "/logos/1144px-Toronto-Dominion_Bank_logo.svg.png" },
    {name: "Bell", logo: "/logos/Bell_logo.svg" },
    {name: "CBC", logo: "/logos/250px-CBC_Logo_1992-Present.svg.png" },
    {name: "Candu", logo: "/logos/Candu_logo.png" },
    {name: "BCG", logo: "/logos/BCG_MONOGRAM.png" },
    {name: "CIB", logo: "/logos/CIB-BIC-EN-Pride-Full.png" },
    {name: "Nike", logo: "/logos/nike.png" },
    {name: "Oxford", logo: "/logos/Oxford_Properties_logo_svg.png" },
    {name: "UofT", logo: "/logos/uoft.png" },
  ]

  return (
    <section className="relative pt-32 md:pt-40 md:pb-4 lg:pt-48 lg:pb-8 overflow-hidden min-h-[90vh] flex flex-col justify-between">
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
            from-black/70 from-0%
            via-black/50  via-70%
            to-gray-200    to-95%">
</div>

      </div>

      {/* Hero Content */}
      <div className="container relative z-10 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            <span className="block">You have a business to run.</span>
            <span className="block text-gray-300">Let us manage your construction and retrofit projects.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            With nearly 30 years of experience managing construction projects across Canada, we save you time, money,
            and stress by taking full control of your commercial relocation, renovation, or ground-up retail build —
            even in live, occupied spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-black text-white rounded-none"
              variant="ghost"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white rounded-none text-black hover:bg-white/10 hover:text-white"
              onClick={() => {
                const element = document.getElementById("services")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col justify-center gap-2 md:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
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
          <p className="text-center text-sm font-medium text-black/80 uppercase tracking-wider mb-2">Our Trusted Clients</p>
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
