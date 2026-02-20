import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualification from "@/components/Qualification";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohit Koli - Top Web Developer & Professional Developer Portfolio",
  description: "Mohit Koli is a top Web Developer and Developer specializing in React, PHP, and Laravel. View portfolio and projects at mohitkoli.info",
  alternates: {
    canonical: "https://mohitkoli.info/",
  },
};

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
