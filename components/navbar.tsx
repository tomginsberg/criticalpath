"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isMobileMenuOpen])

  const navigateToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${id}`)
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "Advantage", id: "advantage" },
    { label: "Savings", id: "save-money" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Team", id: "team" },
  ]

  const mobileDocItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed z-50 transition-all duration-300",
          isScrolled
            ? isMobile
              ? "bottom-4 left-4 right-4 bg-[#0a1628]/80 backdrop-blur-md rounded-full shadow-lg py-2 mx-6 px-0"
              : "top-0 left-0 right-0 mx-auto bg-[#0a1628]/90 backdrop-blur-md shadow-lg pt-2 pb-1 px-0"
            : "top-0 left-0 right-0 mx-auto pt-4 pb-2 px-0",
        )}
      >
        <div className={cn("flex items-center justify-between", isScrolled ? "container mx-auto" : "container")}>
          {(!isMobile || !isScrolled) && (
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logos/cp_logo.png"
                alt="Critical Path Projects"
                className={cn(
                  "transition-all duration-500 invert",
                  isScrolled ? "h-10" : "h-20"
                )}
              />
            </Link>
          )}

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="text-[0.8125rem] font-medium text-[#f0eeea]/80 hover:text-[#b8963e] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateToSection("contact")}
              className="bg-[#b8963e] hover:bg-[#a3843a] text-[#0a1628] px-5 py-2 text-[0.8125rem] font-semibold tracking-wide transition-colors duration-200"
            >
              Contact Us
            </button>
          </nav>

          {isMobile && isScrolled ? (
            <div className="flex justify-around w-full py-3">
              {mobileDocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className="text-[0.8125rem] text-[#f0eeea]/80 hover:text-[#b8963e] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-[#f0eeea]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="md:hidden">
              <button className="p-2" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f0eeea]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a1628]/98 z-50 md:hidden flex flex-col">
          <div className="container py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-bold text-xl text-[#f0eeea]">Critical Path Projects</span>
            </Link>
            <button className="p-2 text-[#f0eeea]" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="text-xl font-display font-medium text-[#f0eeea] hover:text-[#b8963e] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateToSection("contact")}
              className="bg-[#b8963e] hover:bg-[#a3843a] text-[#0a1628] px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors mt-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  )
}
