import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services in India | Mohit Koli",
  description:
    "Web development services from a freelance developer in India — React, Next.js, PHP, Laravel, performance optimization and SEO-friendly builds.",
  keywords: [
    "web development services",
    "best web developer",
    "best freelancer",
    "React developer",
    "Next.js developer",
    "PHP Laravel developer",
    "local SEO web developer",
    "freelance web services",
    "custom web apps",
  ],
  alternates: {
    canonical: "https://mohitkoli.in/services",
  },
  openGraph: {
    title: "Web Development Services | Best Freelance Web Developer | Mohit Koli",
    description:
      "A complete list of web development services from India’s top freelance web developer: product websites, SaaS apps, landing pages, and SEO-first builds.",
    url: "https://mohitkoli.in/services",
    type: "website",
    images: [{ url: "/assets/og-default.png", width: 1200, height: 630, alt: "Web development services by Mohit Koli" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-default.png"],
    title: "Web Development Services | Best Freelance Web Developer | Mohit Koli",
    description:
      "India’s best freelance web developer in React, Next.js, PHP and Laravel. Discover services, success cases, and local service-area pages.",
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-20">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Services</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Web Development Services by Mohit Koli</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Hire the best freelance web developer for React, Next.js, PHP and Laravel. I deliver scalable web apps, e-commerce platforms, and SEO-driven landing pages.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Custom SaaS applications",
            "High-conversion landing pages",
            "E-commerce development",
            "CMS & Backend integrations",
            "Performance optimization",
            "Local SEO service pages",
          ].map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-xl font-semibold text-white">{item}</h2>
              <p className="mt-2 text-gray-400">
                Expert execution for {item.toLowerCase()}, built with modern web architecture and strong business value.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary-500/30 bg-black/20 p-8">
          <h2 className="text-2xl font-bold text-white">Service Areas and Local Pages</h2>
          <p className="mt-4 text-gray-300">
            I deliver local-first web development in cities and states throughout India. Start with the locations page below and choose your region.
          </p>
          <Link
            href="/locations"
            className="mt-6 inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 hover:border-primary-500 hover:text-white"
          >
            View all locations
          </Link>
        </div>

        <section className="mt-16" aria-label="Frequently asked questions">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl text-white">Why hire a freelance web developer</h3>
              <p className="text-gray-300 mt-2">
                Freelancers provide focused execution, rapid project turnaround and direct communication. As a best-in-class freelancer, I own delivery end-to-end.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl text-white">Can I start with an SEO audit?</h3>
              <p className="text-gray-300 mt-2">
                Yes. I offer technical SEO audits and actionable recommendations aligned to your business goals.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
