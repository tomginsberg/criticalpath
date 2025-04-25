"use client"

import { GiPencilRuler } from "react-icons/gi";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export default function About() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section 
      ref={ref}
      id="about" 
      className="py-16 md:py-48 bg-gray-200 relative overflow-hidden"
    >
      {/* Google Gemini Effect positioned behind the content */}
      <div className="absolute inset-0 bg-gray-200/50 top-[-120px]">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-center text-white p-4 mb-2 bg-black/90 rounded-full">Find Your Critical Path</h2>
            <p className="text-center text-gray-600 font-medium">Building success through meticulous management</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 bg-white/40 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                From assembling the right design and engineering teams to making top-tier contractors compete for your
                business, we handle the details others overlook. That's how we keep your project on time, on budget, and
                aligned with your vision — every time.
              </p>
            </div>

            <div className="flex items-start space-x-4 bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                You've heard the horror stories: projects running late, going over budget, or falling apart midstream.
              </p>
            </div>

            <div className="flex items-start space-x-4 bg-blue-50/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100/50">
              <p className="text-lg md:text-xl text-gray-900 leading-relaxed font-medium">
                Our only business is managing the entire construction process — so those stories never become yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
