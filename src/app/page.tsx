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
  title: "Best Web Developer & Freelancer in India | Mohit Koli",
  description:
    "Hire the best freelance web developer in India. Mohit Koli delivers high-conversion React, Next.js, and PHP Laravel websites for startups, agencies, and enterprises.",
  keywords: [
    "best web developer",
    "best freelancer",
    "freelance web developer",
    "hire web developer",
    "React developer",
    "Next.js developer",
    "PHP Laravel developer",
    "effectiveness web developer",
    "local SEO web developer",
    "web development services",
  ],
  alternates: {
    canonical: "https://mohitkoli.info/",
  },
  openGraph: {
    title: "Best Freelance Web Developer in India | Mohit Koli",
    description:
      "Top-ranked freelance web developer offering expert React, Next.js, and PHP Laravel development at scale. Delivering trusted digital products for Indian businesses.",
    url: "https://mohitkoli.info/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Freelance Web Developer in India | Mohit Koli",
    description:
      "Top-ranked freelance web developer offering expert React, Next.js, and PHP Laravel development at scale. Delivering trusted digital products for Indian businesses.",
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
