"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-infinite-logo-slider"

export default function Hero() {
  const clients = [
    { name: "Canadian Tire", logo: "/logos/canadian-tire.png" },
    { name: "Woodgreen", logo: "/logos/woodgreen.png" },
    { name: "Under Armour", logo: "/logos/Under_armour_logo.svg" },
    { name: "CMHC", logo: "/logos/CMHC.png" },
    { name: "Government of Canada", logo: "/logos/canada.png" },
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
    { name: "Oxford Properties", logo: "/logos/Oxford_Properties_logo_svg.png" },
    { name: "MPAC", logo: "/logos/mpac.png" },
    { name: "University of Toronto", logo: "/logos/uoft.png" },
    { name: "ILAC", logo: "/logos/ilac.png" },
  ]

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-36 lg:pt-40">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/office-2.jpg"
          alt="Modern office reception with city view"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,14,0.92)_0%,rgba(5,9,14,0.72)_48%,rgba(5,9,14,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-end lg:justify-between pb-8 md:min-h-[calc(100svh-9rem)] md:pb-10 lg:min-h-[calc(100svh-10rem)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="max-w-4xl">

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-amber-500">You have a business to run.</span>
              <br />
              <span className="text-amber-500">Let us manage your construction.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/80 md:text-xl">
              Commercial relocations, renovations, retrofits, and ground-up retail builds kept on budget and on schedule.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className=" bg-amber-500 px-6 text-white transition-colors duration-200 hover:bg-[#021F59]">
                <Link href="#contact">Discuss a project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="  bg-white px-6 text-amber-500 transition-colors duration-200 hover:bg-amber-500 hover:text-white"
              >
                <Link href="#projects">View work</Link>
              </Button>
            </div>
          </div>

          <div className="hidden grid-cols-2 gap-6 lg:grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="grid aspect-square place-items-center p-2">
                <Image
                  src={`/awards/award${i}.png`}
                  alt={`Award ${i}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-contain invert drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-10 lg:hidden">
          <div className="flex max-w-xl gap-3 overflow-x-auto pb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid h-24 w-24 shrink-0 place-items-center p-1">
                <Image
                  src={`/awards/award${i}.png`}
                  alt={`Award ${i}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-contain invert drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]"
                />
              </div>
            ))}
          </div>
        </div> */}

        <div className="mt-3 py-4">
          <p className="hidden sm:block mb-3 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-black md:px-6">
            Trusted by national brands, public institutions, and large operators
          </p>
          <Slider
            width="180px"
            duration={56}
            pauseOnHover={true}
            blurBorders={false}
          >
            {clients.map((client) => (
              <Slider.Slide key={client.name}>
                <div className="relative h-12 w-[140px]">
                  <Image
                    src={client.logo}
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
