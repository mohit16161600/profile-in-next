"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Professional Journey</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {/* Job 1 (Sheopals) - LEFT */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <motion.div
                className="order-1 md:w-5/12 pl-20 md:pl-0 md:text-right"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="glass p-6 rounded-2xl shadow-md border border-white/10 hover:border-primary-500/30 transition-all text-left md:text-right group-hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-bold rounded-full mb-2">Present</span>
                  <h3 className="text-xl font-bold text-white">Web Developer</h3>
                  <h4 className="text-primary-500 font-semibold mb-2">Sheopals Pvt Ltd</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Creating responsive websites using HTML, CSS, JavaScript, PHP, and Laravel. Spearheaded the development of a complex <strong className="text-white">CRM system</strong> with role-based access for Agents, TLs, and Admins. Implemented robust automation workflows and seamless 3rd-party integrations using <strong className="text-white">cURL/Webhooks</strong>.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="z-20 flex items-center order-1 bg-primary-600 shadow-xl w-16 h-16 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 overflow-hidden border-4 border-[#050505]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Image src="/assets/mohit-koli-profile-photo.jpg" alt="Mohit Koli" width={64} height={64} className="w-full h-full object-cover opacity-90" />
              </motion.div>

              <div className="order-1 md:w-5/12 pl-20 md:pl-0"></div>
            </div>

            {/* Job 2 (GPDM) - RIGHT */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="order-1 md:w-5/12 md:text-right"></div>

              <motion.div
                className="z-20 flex items-center order-1 bg-[#0f0f0f] shadow-xl w-16 h-16 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 border-4 border-white/10 justify-center text-primary-500 font-bold"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
              >
                2024
              </motion.div>

              <motion.div
                className="order-1 md:w-5/12 pl-20 md:pl-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="glass p-6 rounded-2xl shadow-md border border-white/10 hover:border-primary-500/30 transition-all text-left group-hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 bg-white/10 text-gray-300 text-xs font-bold rounded-full mb-2">2024 - 2025</span>
                  <h3 className="text-xl font-bold text-white">Web Developer</h3>
                  <h4 className="text-primary-500 font-semibold mb-2">GPDM Agency LLP</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Developed custom e-commerce themes and integrated third-party apps. Improved storefront user experience and performance. Worked on e-commerce solutions and optimized online stores for better conversion rates.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Job 3 (Danstring) - LEFT */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <motion.div
                className="order-1 md:w-5/12 pl-20 md:pl-0 md:text-right"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="glass p-6 rounded-2xl shadow-md border border-white/10 hover:border-primary-500/30 transition-all text-left md:text-right group-hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 bg-white/10 text-gray-300 text-xs font-bold rounded-full mb-2">2023 - 2024</span>
                  <h3 className="text-xl font-bold text-white">Web Developer</h3>
                  <h4 className="text-primary-500 font-semibold mb-2">Danstring Technology</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Built and customized website themes and plugins. Maintained website performance and ensured responsive, SEO-friendly designs. Implemented custom functionality and optimized websites for speed and user experience.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="z-20 flex items-center order-1 bg-[#0f0f0f] shadow-xl w-16 h-16 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 border-4 border-white/10 justify-center text-primary-500 font-bold"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
              >
                2023
              </motion.div>

              <div className="order-1 md:w-5/12 pl-20 md:pl-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
