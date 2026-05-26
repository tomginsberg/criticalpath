import Hero from "@/components/hero"
import About from "@/components/about"
import Advantage from "@/components/advantage"
import SaveMoney from "@/components/save-money"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Advantage />
      <SaveMoney />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
