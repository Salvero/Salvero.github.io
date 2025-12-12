import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <main className="pb-24">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Header />
    </>
  );
}
