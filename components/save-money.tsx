import { Check } from "lucide-react"

export default function SaveMoney() {
  return (
    <section id="save-money" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">HOW WE SAVE YOU MONEY</h2>
          <p className="text-lg text-gray-700 mb-6">
            A big part of what we do is save you money. We know where to look for opportunities to efficiently save on
            your budget without compromising the design or quality of construction. In fact, on most projects, we will
            save you more than our fees!
          </p>
          <p className="text-lg text-gray-700 mb-8">We do this by:</p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  <span className="font-medium">
                    Ensuring the design and engineering team has a clear budget to work to.
                  </span>{" "}
                  The parts of the project you don't see; the mechanical, electrical and civil work is over half of the
                  project budget. We know how to instruct the consultant teams to design as efficiently as possible so
                  you have more money to put toward the finishes you do see.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  <span className="font-medium">
                    Ensuring all work is competitively tendered to contractors and subtrades who want your business and
                    want to compete for your work.
                  </span>{" "}
                  Not all contractors want to compete and some are too busy to price competitively. We find the ones who
                  are — ready to work and serious about earning your business.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  <span className="font-medium">
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
