import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualification from "@/components/Qualification";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="content-auto">
        <Qualification />
      </div>
      <div className="content-auto">
        <Experience />
      </div>
      <div className="content-auto">
        <Skills />
      </div>
      <div className="content-auto">
        <Projects />
      </div>
      <div className="content-auto">
        <Contact />
      </div>
    </>
  );
}
