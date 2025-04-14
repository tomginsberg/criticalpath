import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Advantage from "@/components/advantage"
import SaveMoney from "@/components/save-money"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Clients from "@/components/clients"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
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
