import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void selection:bg-amethyst selection:text-white">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* Other sections will be added here */}
    </main>
  );
}
