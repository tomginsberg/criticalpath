"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, DollarSign, Users } from "lucide-react"

export default function SuccessMethodology() {
  return (
    <main className="pt-12 md:pt-24 pb-32 md:pb-16">
      <div className="container">
        <div className="w-full sticky top-4 p-4 border rounded-xl md:relative md:pb-2 md:px-0 md:pt-0 md:border-none bg-background z-10 flex items-center mb-6">
          <Link href="/#advantage" className="hidden md:block">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">How We Make Your Project a Success</h1>
            <p className="text-xl text-blue-400 font-medium mb-8">Our Proven Methodology</p>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-gray-700">
                Our systematic approach ensures your project is delivered on time, on budget, and
                meets all your expectations. Critical Path Projects (CPP) takes full responsibility for 
                delivering successful outcomes through careful planning, constant communication, and 
                expert management of all project stakeholders.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg lg:sticky lg:top-24 lg:self-start">
            <Image 
              src="/images/peter.png" 
              alt="Critical Path Projects Success Methodology" 
              fill 
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Success Framework</h2>
          
          {/* Mobile view - simplified vertical flow */}
          <div className="md:hidden space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 p-2 rounded-full">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Keeping You On Schedule</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <p>CPP creates a clear schedule that meets project requirements</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <p>
                    CPP ensures good communication and coordination between professionals (Architect, Designer, Engineers)
                    through a defined meeting schedule
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <p>CPP focuses daily on schedule dates and ensures all stay on track</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <p>CPP is expert at managing architects, engineers and contractors to ensure delivery</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Meeting Client Expectations</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p>CPP ensures clearly defined project scope and objectives</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p>CPP sets up and manages communications and construction Meetings</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p>
                    CPP responsible for comprehensive communication, paperwork & reporting processes put in place to manage
                    the project
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p>CPP's only focus is the Project Management</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Managing Costs and Ensuring Value</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p>CPP ensures client needs are properly translated into construction drawings</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p>CPP manages unforeseen site conditions through better pre-construction investigations</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p>CPP makes sure the budget represents "Total" Project costs including all 'soft costs'</p>
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200 text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Schedule & Budget Met</h2>
              <p className="text-gray-700">
                Critical Path Projects represents your interests and is responsible for ensuring your project is delivered
                on budget and on schedule.
              </p>
            </div>
          </div>

          {/* Desktop view - flowchart style */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-3 gap-8 mb-16">
              {/* Column 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Keeping You On Schedule</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p>CPP creates a clear schedule that meets project requirements</p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p>
                      CPP ensures good communication and coordination between professionals (Architect, Designer,
                      Engineers) through a defined meeting schedule
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p>CPP focuses daily on schedule dates and ensures all stay on track</p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p>CPP is expert at managing architects, engineers and contractors to ensure delivery</p>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Meeting Client Expectations</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p>CPP ensures clearly defined project scope and objectives</p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p>CPP sets up and manages communications and construction Meetings</p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p>
                      CPP responsible for comprehensive communication, paperwork & reporting processes put in place to
                      manage the project
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p>CPP's only focus is the Project Management</p>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Managing Costs and Ensuring Value</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p>CPP ensures client needs are properly translated into construction drawings</p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p>CPP manages unforeseen site conditions through better pre-construction investigations</p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p>CPP makes sure the budget represents "Total" Project costs including all 'soft costs'</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Result box */}
            <div className="bg-teal-50 p-8 rounded-lg border border-teal-200 text-center max-w-2xl mx-auto relative mb-12">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 inline-flex justify-center items-center w-16 h-16 bg-teal-600 text-white rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Schedule & Budget Met</h2>
              <div className="flex items-center justify-center gap-6">
                <p className="text-left text-lg text-gray-700">
                  Critical Path Projects represents your interests and is responsible for ensuring your project is
                  delivered on budget and on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learn More About Our Success Methodology</h3>
              <p className="text-gray-700">Download our detailed flowchart showing how we manage successful projects.</p>
            </div>
            <a 
              href="/success.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Download PDF
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us To Discuss Your Project
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
