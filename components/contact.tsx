"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { LinkedInLink } from "@/components/ui/linkedin-link"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">Ready to discuss your project? Get in touch with our team today.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-md flex flex-col items-center text-center">
              <LinkedInLink 
                href="https://www.linkedin.com/in/criticalpathprojects/" 
                className="text-gray-700 hover:text-blue-500 mb-4" 
                iconSize={24} 
                ariaLabel="Peter Nissenbaum's LinkedIn profile"
              />
              <h3 className="text-xl font-bold mb-2">Peter Nissenbaum</h3>
              <Link href="mailto:peter@criticalpathprojects.com" className="text-blue-500 hover:text-blue-700 mb-1 md:text-sm lg:text-base">
                peter@criticalpathprojects.com
              </Link>
              <p className="text-gray-600">416-995-6444</p>
            </div>

            <div className=" p-6  rounded-md flex flex-col items-center text-center">
              <LinkedInLink 
                href="https://www.linkedin.com/in/charlotte-nissenbaum-29a65641/" 
                className="text-gray-700 hover:text-blue-500 mb-4" 
                iconSize={24} 
                ariaLabel="Charlotte Nissenbaum's LinkedIn profile"
              />
              <h3 className="text-xl font-bold mb-2">Charlotte Nissenbaum</h3>
              <Link href="mailto:charlotte@criticalpathprojects.com" className="text-blue-500 hover:text-blue-700 mb-1 md:text-sm lg:text-base">
                charlotte@criticalpathprojects.com
              </Link>
              <p className="text-gray-600">647-828-8326</p>
            </div>

            <div className=" p-6  rounded-md flex flex-col items-center text-center">
              <LinkedInLink 
                href="https://www.linkedin.com/in/jonah-nissenbaum-29038b154/" 
                className="text-gray-700 hover:text-blue-500 mb-4" 
                iconSize={24} 
                ariaLabel="Jonah Nissenbaum's LinkedIn profile"
              />
              <h3 className="text-xl font-bold mb-2">Jonah Nissenbaum</h3>
              <Link href="mailto:jonah@criticalpathprojects.com" className="text-blue-500 hover:text-blue-700 mb-1 md:text-sm lg:text-base">
                jonah@criticalpathprojects.com
              </Link>
              <p className="text-gray-600">416-937-9496</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">We are based in Toronto, Canada and welcome your inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
