const WAYS_TO_SAVE = [
  {
    title: "Efficient design direction",
    description: "The mechanical, electrical, and civil work is over half your budget. We instruct consultants to design as efficiently as possible, freeing up more for visible finishes.",
  },
  {
    title: "Competitive tendering",
    description: "Not all contractors want to compete — some are too busy. We find the ones who are eager, ready to work, and serious about earning your business.",
  },
  {
    title: "Negotiated savings",
    description: "Our expertise lets us negotiate significant savings on major line items — materials, trades, and scope you would otherwise pay full price for.",
  },
]

export default function SaveMoney() {
  return (
    <section
      id="save-money"
      className="relative py-24 md:py-32"
      style={{ backgroundImage: 'url("/ct.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gray-900/78" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 mb-6 w-fit">
              Cost management
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
              How we save you money.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-prose mb-10">
              On most projects, our savings exceed our fees. We know exactly where to find efficiencies without compromising design or quality.
            </p>
            <div className="divide-y divide-white/20">
              {WAYS_TO_SAVE.map(({ title, description }, i) => (
                <div key={title} className="py-6">
                  <p className="text-amber-500 font-bold text-lg mb-3">
                    {title}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
    </section>
  )
}
