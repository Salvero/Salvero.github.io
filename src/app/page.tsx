import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <main className="pb-24">
        <Hero />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsShowcase />
        <Contact />
      </main>
      <Footer />
      <Header />
    </>
  );
}
