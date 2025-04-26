"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { HardHat, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint in Tailwind
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    // If not on homepage, always set scrolled state to true
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    // Check scroll position immediately when component mounts
    const checkInitialScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      }
    }
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Check initial scroll position
    checkInitialScroll()
    
    // Only add scroll listener on homepage
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const navigateToSection = (id: string) => {
    if (isHomePage) {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're not on the home page, navigate to home with the section hash
      router.push(`/#${id}`)
    }
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <>
      <header
        className={cn(
          "fixed z-50 transition-all duration-2000",
          isScrolled
            ? isMobile
              ? "bottom-4 left-4 right-4 bg-black/60 backdrop-blur-lg rounded-full shadow-lg py-2 mx-6 px-0" // Mobile scrolled - at bottom
              : "top-0 left-0 right-0 mx-auto bg-black/80 backdrop-blur-lg shadow-lg pt-2 pb-1 px-0" // Desktop scrolled - at top
            : "top-0 left-0 right-0 mx-auto pt-4 pb-2 px-0", // Not scrolled - no background
        )}
      >
        <div className={cn("flex items-center justify-between", isScrolled ? "container mx-auto" : "container")}>
          {/* Only show logo on desktop or when not scrolled on mobile */}
          {(!isMobile || !isScrolled) && (
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logos/cp_logo.png"
                className={cn(
                  isScrolled ? "invert h-12 transition-all duration-500" : "h-24 transition-all duration-500 invert"
                )}
              />
            </Link>
          )}
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigateToSection("about")}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigateToSection("advantage")}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              Advantage
            </button>
            <button
              onClick={() => navigateToSection("save-money")}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              Savings
            </button>
            <button
              onClick={() => navigateToSection("services")}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection("projects")}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => navigateToSection("team")}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => navigateToSection("contact")}
              className="bg-white hover:bg-black hover:text-blue-300 text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-500"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile navigation icons */}
          {isMobile && isScrolled ? (
            // Bottom dock navigation for mobile when scrolled
            <div className="flex justify-around w-full py-4">
              <button
                onClick={() => navigateToSection("about")}
                className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
              >
                <span className="text-sm">About</span>
              </button>
              <button
                onClick={() => navigateToSection("services")}
                className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
              >
                <span className="text-sm">Services</span>
              </button>
              <button
                onClick={() => navigateToSection("projects")}
                className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
              >
                <span className="text-sm">Projects</span>
              </button>
              <button onClick={() => setIsMobileMenuOpen(true)}>
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          ) : (
            // Hamburger menu for mobile when at top
            <div className="md:hidden">
              <button className="p-2" onClick={() => setIsMobileMenuOpen(true)}>
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 md:hidden flex flex-col">
          <div className="container py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-white">Critical Path Projects</span>
            </Link>
            <button className="p-2 text-white" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            <button
              onClick={() => navigateToSection("about")}
              className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigateToSection("advantage")}
              className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
            >
              Advantage
            </button>
            <button
              onClick={() => navigateToSection("save-money")}
              className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
            >
              Savings
            </button>
            <button
              onClick={() => navigateToSection("services")}
              className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection("projects")}
              className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => navigateToSection("team")}
              className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => navigateToSection("contact")}
              className="bg-white hover:bg-black hover:text-green-500 text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-500"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  )
}
