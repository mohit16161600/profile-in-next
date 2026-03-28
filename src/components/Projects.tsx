"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-3xl opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-primary-600 rounded-full"></div>
          </div>
          <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold transition-colors mt-4 md:mt-0 group hover-target">
            View All on GitHub
            <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Project 1 - Sheopals CRM */}
          <motion.article variants={itemVariants} className="glass border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-56 bg-[#0a0a0a] overflow-hidden">
              <div className="absolute inset-0 bg-red-900/40 z-10 group-hover:bg-red-900/10 transition-colors duration-500"></div>
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-primary-700 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20 transition-transform duration-500 group-hover:scale-110">Sheopals CRM</div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                <Link href="/projects/sheopals-crm" className="hover-target">Sheopals Internal CRM</Link>
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-4 text-sm leading-relaxed">
                Engineered a comprehensive CRM with complex role-based access (Agents, TLs, Managers, Admin). Features robust automation, daily task management, and seamless integrations via Webhooks & cURL APIs.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-red-500/30 transition-colors">Next.js</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-red-500/30 transition-colors">Automation</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-red-500/30 transition-colors">API/Webhooks</span>
              </div>

              <Link href="/projects/sheopals-crm" className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 hover-target">
                View Case Study
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </motion.article>


          {/* Project 4 */}
          <motion.article variants={itemVariants} className="glass border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-56 bg-[#0a0a0a] overflow-hidden">
              <div className="absolute inset-0 bg-sky-900/40 z-10 group-hover:bg-sky-900/10 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-700 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20 transition-transform duration-500 group-hover:scale-110">Driftload</div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                <a href="https://driftload.in/" target="_blank" rel="noopener noreferrer" className="hover-target">Driftload Logistics</a>
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-4 text-sm leading-relaxed">
                Built a logistics brand website focused on reliable, efficient, and cost-effective transportation solutions, with messaging centered on trust, transparency, and exceptional service delivery.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-sky-400/30 transition-colors">Business Website</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-sky-400/30 transition-colors">Branding</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-sky-400/30 transition-colors">Responsive UI</span>
              </div>

              <a href="https://driftload.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 hover-target">
                Visit Website
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </motion.article>

          {/* Project 5 */}
          <motion.article variants={itemVariants} className="glass border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-56 bg-[#0a0a0a] overflow-hidden">
              <div className="absolute inset-0 bg-amber-900/40 z-10 group-hover:bg-amber-900/10 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-700 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20 transition-transform duration-500 group-hover:scale-110">Software Crafting</div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                <a href="https://www.softwarecrafting.in/" target="_blank" rel="noopener noreferrer" className="hover-target">Software Crafting</a>
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-4 text-sm leading-relaxed">
                Created a polished software services website that presents development expertise, service offerings, and a conversion-focused digital presence for a modern tech brand.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-amber-400/30 transition-colors">Service Website</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-amber-400/30 transition-colors">SEO</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-amber-400/30 transition-colors">Frontend</span>
              </div>

              <a href="https://www.softwarecrafting.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 hover-target">
                Visit Website
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </motion.article>

          {/* Project 6 */}
          <motion.article variants={itemVariants} className="glass border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-56 bg-[#0a0a0a] overflow-hidden">
              <div className="absolute inset-0 bg-pink-900/40 z-10 group-hover:bg-pink-900/10 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-700 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20 transition-transform duration-500 group-hover:scale-110">Instagram Booster</div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                <a href="https://instagram-like-and-follow-booster.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover-target">Instagram Like &amp; Follow Booster</a>
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-4 text-sm leading-relaxed">
                Built and deployed a promotional web app with a bold, campaign-style interface designed to present features clearly and drive user engagement through a fast, mobile-friendly experience.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-pink-400/30 transition-colors">Landing Page</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-pink-400/30 transition-colors">Vercel</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-pink-400/30 transition-colors">Mobile Friendly</span>
              </div>

              <a href="https://instagram-like-and-follow-booster.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 hover-target">
                Visit Website
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </motion.article>
          {/* Project 2 */}
          <motion.article variants={itemVariants} className="glass border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-56 bg-[#0a0a0a] overflow-hidden">
              <div className="absolute inset-0 bg-emerald-900/40 z-10 group-hover:bg-emerald-900/10 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20 transition-transform duration-500 group-hover:scale-110">Vision Sheen</div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                <a href="https://visionsheen.in" target="_blank" rel="noopener noreferrer" className="hover-target">Vision Sheen</a>
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                Developed and maintained the Vision Sheen website, showcasing a diverse range of high-performance projectors and AV accessories.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-emerald-500/30 transition-colors">Custom Code</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-emerald-500/30 transition-colors">E-Commerce</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-emerald-500/30 transition-colors">SEO</span>
              </div>

              <a href="https://visionsheen.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-emerald-500 hover:text-emerald-400 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 hover-target">
                Visit Website
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </motion.article>

          {/* Project 3 */}
          <motion.article variants={itemVariants} className="glass border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-56 bg-[#0a0a0a] overflow-hidden">
              <div className="absolute inset-0 bg-purple-900/40 z-10 group-hover:bg-purple-900/10 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20 transition-transform duration-500 group-hover:scale-110">Vinayak Hospital</div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-500 transition-colors">
                <a href="https://www.vinayakhospital.co.in" target="_blank" rel="noopener noreferrer" className="hover-target">Vinayak Hospital</a>
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                Enhancing online presence and accessibility for a multi-specialty healthcare facility. Focused on responsive design.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-purple-500/30 transition-colors">HTML/CSS</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-purple-500/30 transition-colors">JavaScript</span>
                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10 group-hover:border-purple-500/30 transition-colors">Responsive</span>
              </div>

              <a href="https://www.vinayakhospital.co.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-500 hover:text-purple-400 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 hover-target">
                Visit Website
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </motion.article>
          
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold transition-colors hover-target">
            View All on GitHub
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
