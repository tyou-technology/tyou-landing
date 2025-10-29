import { Hero } from "@/src/components/hero"
import { Services } from "@/src/components/services"
import { About } from "@/src/components/about"
import { Projects } from "@/src/components/projects"
import { Contact } from "@/src/components/contact"
import { Header } from "@/src/components/header"
import { Footer } from "@/src/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
