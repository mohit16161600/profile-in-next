import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualification from "@/components/Qualification";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import InfiniteTechMarquee from "@/components/InfiniteTechMarquee";
import ServiceAreas from "@/components/ServiceAreas";
import LatestBlogs from "@/components/LatestBlogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohit Koli | Freelance Web Developer, Senior Programmer & Coder",
  description: "Official portfolio of Mohit Koli, a top-rated Senior Web Developer and Full Stack Coder. Specializing in high-performance React, Next.js, and PHP Laravel solutions.",
  keywords: ["Mohit Koli", "Web Developer", "Senior Programmer", "Full Stack Coder", "React Next.js Expert", "Freelance Developer India"],
  alternates: {
    canonical: "https://mohitkoli.info/",
  },
};

export default function Home() {
  return (
    <article itemScope itemType="https://schema.org/AboutPage">
      <Hero />
      <InfiniteTechMarquee />
      <section aria-label="About Mohit Koli">
        <About />
      </section>
      <ServiceAreas
        title="Cities and states I serve"
        description="These service-area links are now surfaced directly from the homepage so both users and search engines can discover them faster."
      />
      <section aria-label="Qualifications" className="content-auto">
        <Qualification />
      </section>
      <section aria-label="Professional Experience" className="content-auto">
        <Experience />
      </section>
      <section aria-label="Technical Skills" className="content-auto">
        <Skills />
      </section>
      <section aria-label="Featured Projects" className="content-auto">
        <Projects />
      </section>
      <LatestBlogs />
      <section aria-label="Contact Information" className="content-auto">
        <Contact />
      </section>
    </article>
  );
}
