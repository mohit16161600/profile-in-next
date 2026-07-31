import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/10 text-gray-300 py-16 font-light relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2 hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight flex items-center group hover-target">
                            Mohit<span className="text-primary-500 group-hover:text-primary-400 transition-colors">Koli</span>.
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Senior Full Stack Developer specializing in building high-performance, scalable web applications. Committed
                            to clean code and exceptional user experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover-target">
                                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/mohit-koli-b47260213" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-transparent hover:text-white transition-all duration-300 hover:-translate-y-1 hover-target">
                                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-white font-semibold mb-6 text-base">Explore</h2>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/#about" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max block">About</Link></li>
                            <li><Link href="/profile" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max block">Profile</Link></li>
                            <li><Link href="/locations" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max block">Locations</Link></li>
                            <li><Link href="/#projects" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max block">Projects</Link></li>
                            <li><Link href="/blog" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max flex items-center">Blog <span
                                className="bg-primary-600 font-bold tracking-wider text-white text-[9px] uppercase px-1.5 py-0.5 rounded ml-2">New</span></Link></li>
                        </ul>

                    </div>

                    {/* Resources */}
                    <div>
                        <h2 className="text-white font-semibold mb-6 text-base">Legal</h2>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy-policy" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max block">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max block">Terms of Service</Link></li>
                            <li><Link href="/sitemap.xml" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target w-max block">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact Short */}
                    <div>
                        <h2 className="text-white font-semibold mb-6 text-base">Contact</h2>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <span className="mr-3 text-primary-500">📧</span>
                                <a href="mailto:contact@mohitkoli.info"
                                    className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target">contact@mohitkoli.info</a>
                            </li>
                            <li className="flex items-start mt-2">
                                <span className="mr-3 text-primary-500">📞</span>
                                <a href="tel:+918383868837" className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-all hover-target">+91 8383868837</a>
                            </li>
                            <li className="flex items-start mt-2">
                                <span className="mr-3 text-primary-500">📍</span>
                                <span className="text-gray-400">New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 Mohit Koli. All rights reserved.</p>
                    <p className="mt-4 md:mt-0 items-center flex">Designed & Built with <span className="text-red-500 animate-pulse mx-1">♥</span> by Mohit Koli</p>
                </div>
            </div>
        </footer>
    );
}
