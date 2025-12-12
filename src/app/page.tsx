import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { BlogSection } from "@/components/sections/BlogSection";
import { Contact } from "@/components/sections/contact";
import { getAllPostsMeta } from "@/lib/mdx";

export default function Home() {
  // Get blog posts at build time (static generation)
  const posts = getAllPostsMeta();

  return (
    <>
      <main className="pb-24">
        <Hero />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsShowcase />
        <BlogSection posts={posts} />
        <Contact />
      </main>
      <Footer />
      <Header />
    </>
  );
}
