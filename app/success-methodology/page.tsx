import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Clock, DollarSign, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SuccessMethodology() {
  return (
    <main className="pt-24 pb-16">
      <div className="container">
        <div className="mb-12">
          <Link href="/#advantage">
            <Button variant="ghost" className="flex items-center gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How We Make Your Project a Success</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our proven methodology ensures your project is delivered on time, on budget, and
            meets all your expectations. Critical Path Projects (CPP) takes full responsibility for 
            delivering successful outcomes.
          </p>
        </div>

        {/* Mobile view - simplified vertical flow */}
        <div className="md:hidden space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md ">
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

          <div className="bg-white p-6 rounded-lg shadow-md ">
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

          <div className="bg-white p-6 rounded-lg shadow-md ">
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

          <div className="bg-teal-50 p-6 rounded-lg  text-center">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Schedule & Budget Met</h2>
            <p className="text-gray-700">
              Critical Path Projects represents your interests and is responsible for ensuring your project is delivered
              on budget and on schedule.
            </p>
          </div>

          {/* PDF Download Button - Mobile */}
          <div className="mt-8 text-center">
            <a href="/success.pdf" target="_blank" rel="noopener noreferrer">
              View Our Success Flowchart
            </a>
          </div>
        </div>

        {/* Desktop view - flowchart style */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-3 gap-8 mb-16">
            {/* Column 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md ">
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
            <div className="bg-white p-6 rounded-lg shadow-md ">
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
            <div className="bg-white p-6 rounded-lg shadow-md ">
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

          {/* Flow lines */}
          <div className="absolute left-1/6 top-[calc(100%-4rem)] w-2/3 h-16  rounded-b-xl"></div>
          <div className="absolute left-1/2 top-[calc(100%-4rem)] w-0 h-16 "></div>

          {/* Result box */}
          <div className="bg-teal-50 p-8 rounded-lg border border-teal-200 text-center max-w-2xl mx-auto relative mb-12"> {/* Added mb-12 */}
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

          {/* PDF Download Button - Desktop */}
          <div className="text-center">
            <a href="/success.pdf" target="_blank">
              View Our Success Flowchart
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
