export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-6">
            About Critical Path
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-foreground leading-[1.1] mb-12">
            Let us find your Critical Path
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="max-w-[65ch]">
              From assembling the right design and engineering teams to making
              top-tier contractors compete for your business, we handle the
              details others overlook. That&apos;s how we keep your project on
              time, on budget, and fully aligned with your vision — every time.
            </p>
            <p className="max-w-[65ch]">
              You&apos;ve heard the horror stories: projects running late, going
              over budget, or falling apart midstream. Our experience and process
              are built to ensure yours isn&apos;t one of them.
            </p>
          </div>
          <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-foreground mt-16 max-w-[45ch] leading-[1.25]">
            Construction management is all we do — so those stories
            are{" "}
            <span className="text-accent">never</span>{" "}
            your stories.
          </p>
        </div>
      </div>
    </section>
  )
}
