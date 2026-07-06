import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { FloatingKeyboard } from "@/components/FloatingKeyboard";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CursorSpotlight />
      <Nav />
      <FloatingKeyboard />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
