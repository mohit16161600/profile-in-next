export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-50 relative">
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Technical Arsenal</h2>
                    <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mr-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </span>
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)'].map((skill) => (
                                <span key={skill}
                                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors border border-gray-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mr-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01">
                                    </path>
                                </svg>
                            </span>
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['PHP 8+', 'Laravel', 'Node.js', 'MySQL', 'REST APIs'].map((skill) => (
                                <span key={skill}
                                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-green-50 hover:text-green-700 transition-colors border border-gray-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mr-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                    </path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </span>
                            Tools & Methods
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Git/GitHub', 'VS Code', 'Figma', 'SEO Optimization', 'Agile/Scrum'].map((skill) => (
                                <span key={skill}
                                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors border border-gray-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
