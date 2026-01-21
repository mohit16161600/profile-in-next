export default function Qualification() {
    return (
        <section id="qualification" className="py-24 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Education & Certifications</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Degree */}
                    <div
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 group">
                        <div
                            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                </path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">B.Tech in CSE</h3>
                        <p className="text-sm text-gray-500 mb-4">2019 - 2023</p>
                        <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 font-medium">BPIT</p>
                            <p className="text-gray-500 text-sm">Bhagwan Parshuram Institute of Technology</p>
                            <p className="text-gray-500 text-xs mt-1">Affiliated with GGSIUP</p>
                        </div>
                    </div>

                    {/* Certification */}
                    <div
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-600 group">
                        <div
                            className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                        <p className="text-sm text-gray-500 mb-4">2024</p>
                        <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 font-medium">Professional Certification</p>
                            <p className="text-gray-500 text-sm">Full Stack Specialization</p>
                            <p className="text-gray-500 text-xs mt-1">Advanced Mastery</p>
                        </div>
                    </div>

                    {/* DSA */}
                    <div
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-purple-600 group">
                        <div
                            className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Data Structures</h3>
                        <p className="text-sm text-gray-500 mb-4">2021</p>
                        <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 font-medium">Algorithms & Logic</p>
                            <p className="text-gray-500 text-sm">Core CS Fundamentals</p>
                            <p className="text-gray-500 text-xs mt-1">Problem Solving</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
