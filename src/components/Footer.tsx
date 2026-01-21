import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 font-light relative overflow-hidden">
            {/* Subtle top gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"></div>

            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight flex items-center group">
                            Mohit<span className="text-primary-500 group-hover:text-primary-400 transition-colors">Koli</span>.
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Senior Full Stack Developer specializing in building high-performance, scalable web applications. Committed
                            to clean code and exceptional user experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/mohit-koli-b47260213" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://x.com/mohitko86979490" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/#about" className="hover:text-primary-400 transition-colors">About</Link></li>
                            <li><Link href="/#services" className="hover:text-primary-400 transition-colors">Services</Link></li>
                            <li><Link href="/#projects" className="hover:text-primary-400 transition-colors">Projects</Link></li>
                            <li><Link href="/blog" className="hover:text-primary-400 transition-colors flex items-center">Blog <span
                                className="bg-primary-600 text-white text-[10px] px-1.5 rounded ml-2">New</span></Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/sitemap.xml" className="hover:text-primary-400 transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact Short */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <span className="mr-3 text-primary-500">📧</span>
                                <a href="mailto:contact@mohitkoli.info"
                                    className="hover:text-white transition-colors">contact@mohitkoli.info</a>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-primary-500">📞</span>
                                <a href="tel:+918383868837" className="hover:text-white transition-colors">+91 8383868837</a>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-primary-500">📍</span>
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 Mohit Koli. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Designed & Built with <span className="text-red-500 animate-pulse">♥</span> by Mohit Koli</p>
                </div>
            </div>
        </footer>
    );
}
