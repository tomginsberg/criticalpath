import Hero from "@/components/hero"
import About from "@/components/about"
import Advantage from "@/components/advantage"
import SaveMoney from "@/components/save-money"
import Services from "@/components/services"
import ProjectsSection from "@/components/projects/projects-section"
import Clients from "@/components/clients"
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
      <ProjectsSection />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
