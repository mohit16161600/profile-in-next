"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "High-Converting Business Websites",
    description:
      "Professional company websites built for trust, lead generation, local visibility, and mobile performance. Ideal for brands that need a polished web presence that converts visitors into inquiries.",
    tags: ["Next.js", "SEO", "Responsive Design"],
    accent: "primary",
  },
  {
    title: "Custom Web Applications & Dashboards",
    description:
      "Admin panels, CRMs, internal tools, and custom portals engineered for real workflows. I build scalable apps with secure role-based access, clean UI, and strong backend integrations.",
    tags: ["React", "Laravel", "API Integrations"],
    accent: "emerald",
  },
  {
    title: "Performance, SEO & Growth Improvements",
    description:
      "Technical SEO improvements, page-speed optimization, content structure refinement, and UX updates that help websites rank better and turn traffic into measurable business results.",
    tags: ["Core Web Vitals", "Technical SEO", "Conversion UX"],
    accent: "amber",
  },
];

const reasons = [
  "SEO-aware builds with clean structure, semantic headings, and scalable page architecture",
  "Experience across React, Next.js, PHP, Laravel, WordPress, custom dashboards, and APIs",
  "Clear communication, business-focused delivery, and long-term maintenance support",
  "Responsive, fast-loading interfaces designed for users, not just screenshots",
];

const accentClasses = {
  primary: {
    border: "hover:border-primary-500/30",
    icon: "bg-primary-500/20 text-primary-400",
    chip: "group-hover:border-primary-500/30",
    text: "group-hover:text-primary-400",
  },
  emerald: {
    border: "hover:border-emerald-500/30",
    icon: "bg-emerald-500/20 text-emerald-400",
    chip: "group-hover:border-emerald-500/30",
    text: "group-hover:text-emerald-400",
  },
  amber: {
    border: "hover:border-amber-500/30",
    icon: "bg-amber-500/20 text-amber-400",
    chip: "group-hover:border-amber-500/30",
    text: "group-hover:text-amber-400",
  },
} as const;

export default function ServiceHighlights() {
  return (
    <section id="services-overview" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent"></div>
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Professional Services</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Web Development Services Built for Growth, Rankings, and Better User Experience
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            I help businesses, agencies, and founders launch websites and web applications that look credible,
            load fast, support SEO, and make it easier to turn traffic into leads. The focus is always practical:
            better visibility, stronger performance, and cleaner execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const accent = accentClasses[service.accent];

              return (
                <motion.article
                  key={service.title}
                  className={`glass rounded-2xl p-8 border border-white/5 transition-all duration-300 group ${accent.border}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${accent.icon}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-4 transition-colors ${accent.text}`}>{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 transition-colors ${accent.chip}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            className="glass rounded-3xl border border-white/10 p-8 lg:p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-5">Why clients choose Mohit Koli</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              If you need a freelance web developer in India who can handle design-sensitive frontend work,
              backend logic, SEO fundamentals, and production-ready delivery, I bring those pieces together in one workflow.
            </p>

            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/15 text-primary-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-gray-300">{reason}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">Delivered Projects</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">Years Experience</div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
