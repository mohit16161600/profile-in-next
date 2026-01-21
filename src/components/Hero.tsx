import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-20" role="banner">
            {/* Background Decor -> Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float">
                </div>
                <div
                    className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
                    style={{ animationDelay: "2s" }}></div>
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <div
                            className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary-100/50 text-primary-700 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <span className="flex h-2.5 w-2.5 relative mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
                            </span>
                            Available for New Projects
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Digital
                                Scale</span><br /> & Performance.
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            I'm <strong className="text-gray-900">Mohit Koli</strong>, a Senior Full Stack Developer tailored for complex
                            web ecosystems. I architect scalable solutions using React, Node.js, and Cloud Infrastructure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/#projects"
                                className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                                View Featured Work
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                                    </path>
                                </svg>
                            </Link>
                            <Link href="/#contact"
                                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                                Let's Talk
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-green-100 text-green-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                2+ Years Exp
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-blue-100 text-blue-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                20+ Projects
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-yellow-100 text-yellow-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                    </svg>
                                </span>
                                Rated 5/5
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 flex justify-center relative">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Decorative Circles */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full opacity-20 blur-3xl transform scale-110 animate-pulse">
                            </div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-full border-[6px] border-white shadow-2xl overflow-hidden z-10 hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/assets/mohit-koli-profile-photo.jpg"
                                    alt="Mohit Koli - Professional Web Developer"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 320px, 384px"
                                />
                            </div>

                            {/* Floating Badge 1 */}
                            <div
                                className="absolute top-8 -right-8 glass p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-float hover:scale-105 transition-transform cursor-default"
                                style={{ animationDelay: "1s" }}>
                                <div className="bg-primary-50 p-2.5 rounded-lg text-primary-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Stack</p>
                                    <p className="font-bold text-gray-900">React & Node</p>
                                </div>
                            </div>

                            {/* Floating Badge 2 */}
                            <div
                                className="absolute bottom-8 -left-8 glass p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-float hover:scale-105 transition-transform cursor-default"
                                style={{ animationDelay: "2.5s" }}>
                                <div className="bg-secondary-500/10 p-2.5 rounded-lg text-secondary-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Status</p>
                                    <p className="font-bold text-gray-900">Top Rated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
