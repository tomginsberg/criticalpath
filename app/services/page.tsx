"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Scope Development",
      description:
        "Critical Path Projects creates a detailed plan for executing your project. Having a clear scope ensures the architect and engineers can properly design your project and also ensures fewer contractor change orders during construction.",
    },
    {
      title: "Professional Project Budgets",
      description: "Clear and concise project budgets to help meet your financial targets.",
    },
    {
      title: "RFP and Selection of Architect / Designer and Engineering Teams",
      description:
        "Ensuring the right design and engineering teams competitively bid for your project to produce the project design you need.",
    },
    {
      title: "Scope and Budget Refinement",
      description:
        "Refining the project scope and budget is critical to ensuring your goals are met. Critical Path Projects continually refines both so you can be sure your needs are being met.",
    },
    {
      title: "Review of Tender Documents, Budget and Schedule",
      description:
        "Having Critical Path Projects review your bid documents before tender pays dividends. Documents are reviewed for proper coordination between disciplines, construct-ability of all design details, value for money and items likely to cause expensive change orders during the course of construction. This service will pay for itself many times over.",
    },
    {
      title: "Coordination of End User Groups",
      description:
        "If many internal groups need to have input on the design, coordination and communication are key. Critical Path Projects specializes in this kind of coordination.",
    },
    {
      title: "Tendering of Construction",
      description:
        "If your project is to be tendered, Critical Path Projects will manage the tender to ensure it is properly and accurately run. The result will be competitive bids that can be accurately compared, analyzed and awarded.",
    },
    {
      title: "Pre-Qualification of Appropriate Contractors",
      description:
        "Not all contractors are equal. Critical Path Projects can help identify professional contractors that are qualified to competitively bid for your project.",
    },
    {
      title: "Construction Management",
      description:
        "Critical Path Projects can manage the contractor, consultants, landlord and others during the course of construction. This helps the project stay on track.",
    },
    {
      title: "Budget Management",
      description:
        "Monitor and report on variances of actual cost versus budget. Make recommendations for corrective action. Implement corrective action.",
    },
    {
      title: "Schedule Management",
      description:
        "Monitor and report on variances of actual construction time versus original schedule. Make recommendations for corrective actions to minimize delays. Implement corrective action.",
    },
    {
      title: "Project Administration",
      description:
        "Monitor budget and compare with tender, change order management, approval of progress draws, up-to-date cash flow reports, progress reports, deficiency rectification, project close-out.",
    },
    {
      title: "Owners Representative",
      description:
        "Sometimes owners need a seasoned construction professional to be their 'eyes and ears' on a project. Critical Path Projects can act in your interests by representing you with the architectural and engineering teams, contractor, landlord and others.",
    },
    {
      title: "Move Management",
      description:
        "Planning, scheduling and budgeting for moves of people, furniture and equipment. Full coordination with groups to be moved. RFP for movers ensures the best possible pricing.",
    },
    {
      title: "Close Out Paperwork",
      description:
        "Finishing a project properly is critical to ensuring a trouble free future with all authorities. Critical Path Projects will ensure all as built drawings are received, landlord obligations fulfilled, building permits closed final paperwork done.",
    },
  ]

  return (
    <main className="pt-12 md:pt-24 pb-32 md:pb-16">
      <div className="container">
        <div className="w-full sticky top-4 p-4 border rounded-xl md:relative md:pb-2 md:px-0 md:pt-0 md:border-none bg-background z-10 flex items-center mb-6">
          <Link href="/#services" className="hidden md:block">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">Our Services</h1>
            <p className="text-xl text-blue-400 font-medium mb-8">Comprehensive Project Management Solutions</p>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-gray-700">
                Critical Path Projects provides a wide variety of project management, design and construction related
                services. Whether you engage us as full service project managers or simply choose one or more of the
                services listed below, you can be confident that Critical Path Projects will always look after your
                interests first.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg lg:sticky lg:top-24 lg:self-start">
            <Image 
              src="/images/construction-site.png" 
              alt="Critical Path Projects Services" 
              fill 
              className="object-cover"
              priority
          
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Service Offerings</h2>
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
          <p className="text-gray-700 italic">
            *Critical Path Projects can also be engaged for other construction related services not listed above.
            Contact us to discuss your specific project needs.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us About Our Services
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
