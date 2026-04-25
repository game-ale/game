import CompetitiveProgramming from "@/components/sections/CompetitiveProgramming";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechnicalArsenal from "@/components/sections/TechnicalArsenal";

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <TechnicalArsenal />
            <Experience />
            <CompetitiveProgramming />
            <Contact />
        </>
    );
}
