"use client";

import { motion } from "framer-motion";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent relative">
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Frontend */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 shadow-sm border border-white/5 hover:border-primary-500/30 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-500/20 hover:text-primary-300 transition-colors border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 shadow-sm border border-white/5 hover:border-green-500/30 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['PHP 8+', 'Laravel', 'Node.js', 'MySQL', 'REST APIs'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-green-500/20 hover:text-green-300 transition-colors border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Others */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 shadow-sm border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </span>
              Tools & Methods
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Git/GitHub', 'VS Code', 'Figma', 'SEO Optimization', 'Agile/Scrum'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-colors border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
