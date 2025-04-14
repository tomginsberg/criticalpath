export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">


      <div className="container relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-1 bg-teal-600 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Our Approach</h2>
            <p className="text-center text-teal-600 font-medium">Building success through meticulous management</p>
          </div>

          <div className="space-y-8 relative">
            {/* Timeline line - centered exactly */}
            <div className="absolute left-4 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 to-teal-200 hidden sm:block"></div>

            <div className="pl-10 sm:pl-16 relative">
              {/* Dot perfectly centered on the line */}
              <div className="absolute left-1 sm:left-1 top-2 w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center shadow-md hidden sm:flex">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                From assembling the right design and engineering teams to making top-tier contractors compete for your
                business, we handle the details others overlook. That's how we keep your project on time, on budget, and
                aligned with your vision — every time.
              </p>
            </div>

            <div className="pl-10 sm:pl-16 relative">
              {/* Dot perfectly centered on the line */}
              <div className="absolute left-1 sm:left-1 top-2 w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center shadow-md hidden sm:flex">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                You've heard the horror stories: projects running late, going over budget, or falling apart midstream.
              </p>
            </div>

            <div className="pl-10 sm:pl-16 relative">
              {/* Dot perfectly centered on the line */}
              <div className="absolute left-1 sm:left-1 top-2 w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center shadow-md hidden sm:flex">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="bg-teal-200 p-6 rounded-r-lg border-l-4 border-teal-600">
                <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
                  Our only business is managing the entire construction process — so those stories never become yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
