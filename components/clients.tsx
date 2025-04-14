"use client"
import Image from "next/image"
import Slider from 'react-infinite-logo-slider'

export default function Clients() {
  const clients = [
    {name: "Canadian Tire", logo: "/logos/canadian-tire.png" },
    {name: "TD Bank", logo: "/logos/1144px-Toronto-Dominion_Bank_logo.svg.png" },
    {name: "Bell", logo: "/logos/Bell_logo.svg" },
    {name: "CBC", logo: "/logos/250px-CBC_Logo_1992-Present.svg.png" },
    {name: "Candu", logo: "/logos/Candu_logo.png" },
    {name: "BCG", logo: "/logos/BCG_MONOGRAM.png" },
    {name: "CIB", logo: "/logos/cib.png" },
    {name: "Nike", logo: "/logos/nike.png" },
    {name: "Oxford", logo: "/logos/Oxford_Properties_logo_svg.png" },
    {name: "UofT", logo: "/logos/uoft.png" },
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">TRUSTED CUSTOMERS</h2>
        </div>

        <div className="relative">
          <Slider
            width="220px"
            duration={40}
            pauseOnHover={false}
            blurBorders={true}
            blurBorderColor={'#fff'}
          >
            {clients.map((client) => (
              <Slider.Slide key={client.name}>
                <div className="w-[180px] h-24 relative">
                  <Image 
                    src={client.logo || "/placeholder.svg"} 
                    alt={client.name} 
                    fill 
                    className="object-contain" 
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
