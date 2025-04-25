"use client"
import { Check } from "lucide-react"
import { useEffect, useRef } from "react"

export default function SaveMoney() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY
        // Move the background at a slower rate than the scroll speed
        const yPos = scrollPosition * 0.3
        parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="save-money" className="py-16 md:py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ 
          backgroundImage: 'url("/ct.png")', 
          height: '160%',
          top: '-100%'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Save You Money</h2>
          <div className="h-1 w-24 bg-blue-300 mx-auto mb-8"></div>
          <p className="text-left text-lg text-gray-100 mb-6">
            A big part of what we do is save you money. We know where to look for opportunities to efficiently save on
            your budget without compromising the design or quality of construction. In fact, on most projects, we will
            save you more than our fees!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="text-lg text-gray-100">
                  <span className="font-medium text-white">
                    Ensuring the design and engineering team has a clear budget to work to.
                  </span>{" "}
                  The parts of the project you don't see; the mechanical, electrical and civil work is over half of the
                  project budget. We know how to instruct the consultant teams to design as efficiently as possible so
                  you have more money to put toward the finishes you do see.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="text-lg text-gray-100">
                  <span className="font-medium text-white">
                    Ensuring all work is competitively tendered to contractors and subtrades who want your business and
                    want to compete for your work.
                  </span>{" "}
                  Not all contractors want to compete and some are too busy to price competitively. We find the ones who
                  are — ready to work and serious about earning your business.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="text-lg text-gray-100">
                  <span className="font-medium text-white">
                    Using our expertise to negotiate savings on big ticket items you would otherwise pay full price for.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
