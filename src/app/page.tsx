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
import HomeFaq from "@/components/HomeFaq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Web Developer in India | Mohit Koli | Next.js, React, Laravel",
  description:
    "Mohit Koli is a freelance web developer in India specializing in Next.js, React, PHP, and Laravel websites, dashboards, SEO-friendly business sites, and custom web applications.",
  keywords: [
    "freelance web developer in India",
    "full stack developer India",
    "Next.js developer India",
    "React developer India",
    "Laravel developer India",
    "website developer India",
    "custom web application developer",
    "SEO friendly website developer",
    "business website developer",
    "freelance web developer",
    "hire web developer in India",
    "PHP Laravel developer",
    "technical SEO developer",
  ],
  alternates: {
    canonical: "https://mohitkoli.info/",
  },
  openGraph: {
    title: "Freelance Web Developer in India | Mohit Koli",
    description:
      "Freelance web developer building high-performance Next.js, React, and Laravel websites, dashboards, and SEO-friendly digital experiences for modern businesses.",
    url: "https://mohitkoli.info/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer in India | Mohit Koli",
    description:
      "Freelance web developer building high-performance Next.js, React, and Laravel websites, dashboards, and SEO-friendly digital experiences for modern businesses.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohit Koli",
    url: "https://mohitkoli.info/",
    jobTitle: "Freelance Full Stack Web Developer",
    knowsAbout: [
      "Next.js",
      "React",
      "Laravel",
      "PHP",
      "JavaScript",
      "Technical SEO",
      "Web Application Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Sheopals Pvt Ltd",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bhagwan Parshuram Institute of Technology",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mohit Koli Web Development Services",
    url: "https://mohitkoli.info/",
    areaServed: "India",
    description:
      "Freelance web development services for business websites, Next.js applications, React frontends, Laravel backends, dashboards, and SEO-friendly websites.",
    provider: {
      "@type": "Person",
      name: "Mohit Koli",
    },
    serviceType: [
      "Web Development",
      "Frontend Development",
      "Full Stack Development",
      "Technical SEO",
      "Website Performance Optimization",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of websites and web applications does Mohit Koli build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mohit Koli builds business websites, portfolio websites, landing pages, SEO-focused company sites, custom dashboards, CRM systems, and full-stack web applications using React, Next.js, PHP, Laravel, and modern frontend tooling.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide SEO-friendly website development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. His development process includes semantic page structure, optimized headings, internal linking support, mobile responsiveness, page speed improvements, and technical SEO best practices.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with redesigning an existing website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. He redesigns outdated websites to improve credibility, user experience, performance, and conversion flow while supporting the existing business goals.",
        },
      },
      {
        "@type": "Question",
        name: "Which technologies do you specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "His strongest stack includes React, Next.js, JavaScript, Tailwind CSS, PHP, Laravel, MySQL, REST APIs, SEO improvements, and performance optimization for production websites.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <article itemScope itemType="https://schema.org/AboutPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <InfiniteTechMarquee />
      <section aria-label="About Mohit Koli" className="content-auto">
        <About />
      </section>
      <section aria-label="Service Areas" className="content-auto-sm">
        <ServiceAreas
          title="Cities and states I serve"
          description="These service-area links are now surfaced directly from the homepage so both users and search engines can discover them faster."
        />
      </section>
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
      <section aria-label="Latest Articles" className="content-auto-sm">
        <LatestBlogs />
      </section>
      <section aria-label="Frequently Asked Questions" className="content-auto" itemScope itemType="https://schema.org/FAQPage">
        <HomeFaq />
      </section>
      <section aria-label="Contact Information" className="content-auto">
        <Contact />
      </section>
    </article>
  );
}
