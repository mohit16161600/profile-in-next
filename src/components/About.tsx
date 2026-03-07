"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden" itemScope itemType="https://schema.org/Person">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-600 rounded-full blur-3xl opacity-20 pointer-events-none hidden md:block"></div>

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-primary-500/30 text-primary-400 text-sm font-medium mb-8">
              <span className="mr-2">👋</span> About The Developer
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Crafting Digital Experiences with <span className="text-primary-500">Precision</span> & <span className="text-secondary-500">Passion</span>.
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm <strong className="text-white" itemProp="name">Mohit Koli</strong>, a passionate and dedicated <strong>Web Developer</strong> and <strong>Full Stack Developer</strong> with over 2 years of professional experience. I specialize in designing, developing, and maintaining responsive websites and web applications that drive results. Welcome to my professional portfolio at <strong className="text-primary-500">mohitkoli.info</strong>.
              </p>
              <p>
                My expertise spans modern frontend and backend technologies, allowing me to deliver end-to-end solutions that are functionally robust and visually stunning. As a professional developer, I bring a unique blend of technical skill and creative problem-solving to every project.
              </p>
              <p>
                Currently serving as a <strong>Web Developer</strong> at <span className="font-semibold text-white" itemProp="worksFor">Sheopals Pvt Ltd</span>, I engineer responsive dashboards and platforms using HTML, PHP, Laravel, and React. I hold a <strong>Bachelor's Degree in Computer Science & Engineering</strong> from BPIT, providing me with structured software engineering principles.
              </p>
              <div className="pt-4">
                <p className="italic text-gray-500 border-l-4 border-primary-500 pl-4">
                  "Whether you're searching for 'Mohit Koli' or 'mohitkoli.info', you've found a partner dedicated to your digital success."
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="px-7 py-3.5 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">Hire Me</a>
              <a href="#experience" className="px-7 py-3.5 glass text-white border border-white/20 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all shadow-sm hover:shadow-md">View Journey</a>
            </div>
          </motion.div>

          {/* Visual / Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-12">
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
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-secondary-500 mb-2">20+</div>
                <div className="text-sm font-medium text-gray-400">Projects Delivered</div>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div 
                className="glass p-6 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300 border border-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
