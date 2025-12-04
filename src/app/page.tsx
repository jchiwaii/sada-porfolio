import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Articles } from "@/components/articles";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#1F261C] selection:bg-[#1F261C] selection:text-[#F7F4ED] overflow-x-hidden">
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
