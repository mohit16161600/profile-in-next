import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualification from "@/components/Qualification";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import InfiniteTechMarquee from "@/components/InfiniteTechMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohit Koli | Freelance Web Developer, Programmer & Coder",
  description: "Mohit Koli's official portfolio. I am a top rated Web Developer, Software Programmer, and Coder specializing in React, Next.js, and PHP Laravel.",
  alternates: {
    canonical: "https://mohitkoli.info/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteTechMarquee />
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
