"use client";

import { motion } from "framer-motion";

const focusAreas = [
  {
    title: "Business Websites",
    description: "SEO-friendly company websites built for credibility, faster loading, and stronger lead generation.",
    tags: ["Next.js", "SEO", "Responsive"],
  },
  {
    title: "Custom Dashboards",
    description: "CRM panels, admin systems, and internal tools designed around real team workflows and clean data flow.",
    tags: ["React", "Laravel", "APIs"],
  },
  {
    title: "Performance Upgrades",
    description: "Technical improvements that strengthen Core Web Vitals, user experience, and conversion-focused structure.",
    tags: ["Performance", "Technical SEO", "UX"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden" itemScope itemType="https://schema.org/Person">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-600 rounded-full blur-3xl opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-primary-500/30 text-primary-400 text-sm font-medium mb-8">
              <span className="mr-2">About The Developer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Freelance Web Development That Balances <span className="text-primary-500">Design</span>, <span className="text-secondary-500">Performance</span>, and SEO.
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I&apos;m <strong className="text-white" itemProp="name">Mohit Koli</strong>, a <strong>Senior Web Developer</strong> and <strong>Full Stack Engineer</strong> working with <strong>Next.js</strong>, <strong>React</strong>, <strong>PHP</strong>, and <strong>Laravel</strong> to build modern websites, dashboards, and custom web applications for businesses that want strong execution and long-term reliability.
              </p>
              <p>
                My work sits at the intersection of frontend quality, backend logic, and technical SEO. That means I focus on websites and web apps that are not only visually polished, but also fast, scalable, mobile-friendly, and structured to support search visibility and better conversions.
              </p>
              <p>
                As <strong itemProp="jobTitle">Senior Web Developer</strong> at <span className="font-semibold text-white" itemProp="worksFor">Sheopals Pvt Ltd</span>, I build responsive dashboards and workflow-driven systems. Through <strong className="text-white">mohitkoli.info</strong>, I also help clients with website redesigns, SEO-aware development, performance improvements, and production-ready business websites.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="px-7 py-3.5 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">Hire Me</a>
              <a href="#experience" className="px-7 py-3.5 glass text-white border border-white/20 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all shadow-sm hover:shadow-md">View Journey</a>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300 border border-primary-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">02+</div>
                <div className="text-sm font-medium text-gray-400">Years of Experience</div>
              </motion.div>
              <motion.div
                className="glass p-6 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300 border border-secondary-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-secondary-500 mb-2">20+</div>
                <div className="text-sm font-medium text-gray-400">Projects Delivered</div>
              </motion.div>
              <motion.div
                className="glass p-6 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300 border border-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-emerald-500 mb-2">100%</div>
                <div className="text-sm font-medium text-gray-400">Client Satisfaction</div>
              </motion.div>
              <motion.div
                className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300 border border-orange-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-sm font-medium text-gray-400">Support & Maintenance</div>
              </motion.div>
            </div>

            <motion.div
              className="glass rounded-3xl border border-white/10 p-8 lg:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">What I help clients with</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                One focused section that explains the actual work clearly: building credible business websites, custom web systems, and performance-focused improvements that support rankings and growth.
              </p>

              <div className="space-y-4">
                {focusAreas.map((area) => (
                  <div key={area.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-white">{area.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full border border-white/10 bg-black/20 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{area.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
