import About from "@/components/sections/About";
import CompetitiveProgramming from "@/components/sections/CompetitiveProgramming";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CompetitiveProgramming />
      <Contact />
    </>
  );
}
