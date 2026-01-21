import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Featured Projects</h2>
                        <div className="w-24 h-1.5 bg-primary-600 rounded-full"></div>
                    </div>
                    <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors mt-4 md:mt-0 group">
                        View All on GitHub
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <article
                        className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                        <div className="relative h-56 bg-gray-100 overflow-hidden group">
                            <div className="absolute inset-0 bg-primary-900/10 z-10 group-hover:bg-primary-900/0 transition-colors duration-500"></div>
                            {/* Placeholder gradient or image */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-primary-700 opacity-90 group-hover:scale-110 transition-transform duration-700">
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20">Get Fast Education</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                <a href="https://getfasteducation.in" target="_blank" rel="noopener noreferrer">Get Fast Education</a>
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                Launched and developed "Get Fast Education," a streamlined platform offering personalized admission
                                counselling for Indian students.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100">PHP</span>
                                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100">MySQL</span>
                                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100">Bootstrap</span>
                            </div>

                            <a href="https://getfasteducation.in" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4">
                                Visit Website
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </article>

                    {/* Project 2 */}
                    <article
                        className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                        <div className="relative h-56 bg-gray-100 overflow-hidden">
                            <div className="absolute inset-0 bg-emerald-900/10 z-10 group-hover:bg-emerald-900/0 transition-colors duration-500"></div>
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 opacity-90 group-hover:scale-110 transition-transform duration-700">
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20">Vision Sheen
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                <a href="https://visionsheen.in" target="_blank" rel="noopener noreferrer">Vision Sheen</a>
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                Developed and maintained the Vision Sheen website, showcasing a diverse range of high-performance
                                projectors and AV accessories.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">Custom Code</span>
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">E-Commerce</span>
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">SEO</span>
                            </div>

                            <a href="https://visionsheen.in" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4">
                                Visit Website
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </article>

                    {/* Project 3 */}
                    <article
                        className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                        <div className="relative h-56 bg-gray-100 overflow-hidden">
                            <div className="absolute inset-0 bg-purple-900/10 z-10 group-hover:bg-purple-900/0 transition-colors duration-500"></div>
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 opacity-90 group-hover:scale-110 transition-transform duration-700">
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20">Vinayak
                                Hospital</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                <a href="https://www.vinayakhospital.co.in" target="_blank" rel="noopener noreferrer">Vinayak Hospital</a>
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                Enhancing online presence and accessibility for a multi-specialty healthcare facility. Focused on
                                responsive design.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full border border-purple-100">HTML/CSS</span>
                                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full border border-purple-100">JavaScript</span>
                                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full border border-purple-100">Responsive</span>
                            </div>

                            <a href="https://www.vinayakhospital.co.in" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4">
                                Visit Website
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </article>
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold transition-colors">
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
