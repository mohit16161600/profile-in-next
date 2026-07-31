"use client";

import Image from "next/image";
import Link from "next/link";

interface LocationHeroProps {
    locationName: string;
}

export default function LocationHero({ locationName }: LocationHeroProps) {
    return (
        <section className="relative min-h-svh flex items-center bg-transparent overflow-hidden pt-20">
            {/* Background Decor -> Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-600 rounded-full blur-3xl opacity-20 hidden md:block"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-500 rounded-full blur-3xl opacity-20 hidden md:block"></div>
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <div className="hero-item hero-item-1 inline-flex items-center px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-400 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <span className="flex h-2.5 w-2.5 relative mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
                            </span>
                            Top Rated in {locationName}
                        </div>

                        <h1 className="hero-item hero-item-2 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
                            Best <span className="text-primary-500">Developer</span>
                            <br />
                            <span className="text-4xl md:text-5xl lg:text-6xl mt-4 block h-[1.2em] text-white">
                                in {locationName}.
                            </span>
                        </h1>

                        <h2 className="hero-item hero-item-3 text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                            Looking for an expert Web Developer in {locationName}? I build fast, scalable, and modern digital experiences tailored for businesses in {locationName} and beyond. Let's create something extraordinary.
                        </h2>

                        <div className="hero-item hero-item-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/#projects" className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/25 hover:bg-primary-500 hover:scale-105 hover:shadow-primary-600/40 transition-all duration-300 flex items-center justify-center group">
                                View My Work
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                            <Link href="/#contact" className="px-8 py-4 glass text-white border border-white/10 rounded-xl font-semibold hover:border-white/20 hover:bg-white/5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center backdrop-blur-md">
                                Hire Me Today
                            </Link>
                        </div>

                        <div className="hero-item hero-item-5 mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-primary-500/20 text-primary-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                                Delivering to {locationName}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-secondary-500/20 text-secondary-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                                20+ Projects
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-yellow-500/20 text-yellow-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                Rated 5/5
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="hero-media order-1 lg:order-2 flex justify-center relative">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Decorative Circles */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-secondary-600 rounded-full opacity-30 blur-3xl transform scale-110 hidden md:block"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-full border-[6px] border-white/10 shadow-[0_0_50px_rgba(239,68,68,0.2)] overflow-hidden z-10 hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/assets/mohit-koli-profile-photo.jpg"
                                    alt={`Mohit Koli - Professional Web Developer in ${locationName}`}
                                    fill
                                    className="object-cover"
                                    preload
                                    fetchPriority="high"
                                    sizes="(max-width: 767px) 320px, 384px"
                                />
                            </div>

                            {/* Floating Badge 1 */}
                            <div className="hero-badge-right absolute top-8 -right-8 glass p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 cursor-default">
                                <div className="bg-primary-500/20 p-2.5 rounded-lg text-primary-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Expertise</p>
                                    <p className="font-bold text-white">Full Stack</p>
                                </div>
                            </div>

                            {/* Floating Badge 2 */}
                            <div className="hero-badge-left absolute bottom-8 -left-8 glass p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 cursor-default">
                                <div className="bg-secondary-500/20 p-2.5 rounded-lg text-secondary-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Available in</p>
                                    <p className="font-bold text-white">{locationName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
