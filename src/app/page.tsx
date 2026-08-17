import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Timeline />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
