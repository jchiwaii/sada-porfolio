import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Articles } from "@/components/articles";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void selection:bg-amethyst selection:text-white overflow-x-hidden">
      <Hero />
      <Projects />
      <Skills />
      <Articles />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
