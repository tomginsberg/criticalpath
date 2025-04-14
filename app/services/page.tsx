import Link from "next/link"
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
    <main className="pt-24 pb-16">
      <div className="container">
        <Link href="/#services">
          <Button variant="ghost" className="flex items-center gap-2 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 mb-12">
            Critical Path Projects provides a wide variety of project management, design and construction related
            services. Whether you engage us as full service project managers or simply choose one or more of the
            services listed below, you can be confident that Critical Path Projects will always look after your
            interests first.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 border border-gray-100"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">

                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12  p-6  ">
            <p className="text-gray-700 italic">
              *Critical Path Projects can also be engaged for other construction related services not listed above.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/#contact">
              <Button className=" " variant="outline">Contact Us About Our Services</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
