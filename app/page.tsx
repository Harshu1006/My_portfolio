import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { TechStackSection } from "@/components/portfolio/tech-stack-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
