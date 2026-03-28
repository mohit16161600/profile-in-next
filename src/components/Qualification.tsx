"use client";

import { motion } from "framer-motion";

export default function Qualification() {
  return (
    <section id="qualification" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Education & Certifications</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Degree */}
          <motion.div 
            className="glass rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 border-t-4 border-t-primary-600 border-x border-b border-white/5 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">B.Tech in CSE</h3>
            <p className="text-sm text-gray-500 mb-4">2019 - 2023</p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-300 font-medium">BPIT</p>
              <p className="text-gray-500 text-sm">Bhagwan Parshuram Institute of Technology</p>
              <p className="text-gray-600 text-xs mt-1">Affiliated with GGSIUP</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-4">
                Built a strong foundation in software engineering, database systems, web technologies,
                object-oriented programming, and system design principles through formal computer science education.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Computer Science", "Software Engineering", "Database Systems", "Web Technologies"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div 
            className="glass rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border-t-4 border-t-emerald-600 border-x border-b border-white/5 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
            <p className="text-sm text-gray-500 mb-4">2024</p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-300 font-medium">Professional Certification</p>
              <p className="text-gray-500 text-sm">Full Stack Specialization</p>
              <p className="text-gray-600 text-xs mt-1">Advanced Mastery</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-4">
                Strengthened practical knowledge of frontend and backend development, modern deployment patterns,
                responsive UI construction, API communication, and production-ready application workflows.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Full Stack Development", "Frontend Architecture", "Backend Fundamentals", "Deployment Basics"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DSA */}
          <motion.div 
            className="glass rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-t-4 border-t-purple-600 border-x border-b border-white/5 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Data Structures</h3>
            <p className="text-sm text-gray-500 mb-4">2021</p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-300 font-medium">Algorithms & Logic</p>
              <p className="text-gray-500 text-sm">Core CS Fundamentals</p>
              <p className="text-gray-600 text-xs mt-1">Problem Solving</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-4">
                Improved analytical thinking, optimization skills, and coding efficiency by studying data
                structures, algorithmic patterns, time complexity, and structured problem-solving techniques.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Algorithms", "Complexity Analysis", "Problem Solving", "Logic Building"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
