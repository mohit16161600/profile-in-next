import Link from 'next/link';

export default function BlogSidebar() {
    return (
        <div className="lg:col-span-1 mt-12 lg:mt-0">
            {/* Search */}
            <div className="glass rounded-xl shadow-sm p-6 mb-8 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">Search Technology Articles</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search AI, web development, programming articles..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-gray-500"
                        aria-label="Search technology articles"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Popular guides — real internal links (crawl paths + PageRank flow on every blog page) */}
            <div className="glass rounded-xl shadow-sm p-6 mb-8 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">Popular Guides</h3>
                <ul className="space-y-3">
                    <li>
                        <Link href="/blog/how-to-get-hostinger-90-off-2026" className="text-gray-400 hover:text-primary-400 flex justify-between items-center gap-2 transition-colors" title="How to get 90% OFF on Hostinger in 2026">
                            <span>Hostinger 90% OFF Deal Guide</span><span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full flex-shrink-0">Deal</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/best-web-hosting-india-2026" className="text-gray-400 hover:text-primary-400 flex justify-between items-center gap-2 transition-colors" title="7 best web hosting services in India 2026">
                            <span>Best Web Hosting in India 2026</span><span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-300 flex-shrink-0">Ranked</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-gray-400 hover:text-primary-400 flex justify-between items-center gap-2 transition-colors" title="Hostinger vs GoDaddy vs Bluehost comparison 2026">
                            <span>Hostinger vs GoDaddy vs Bluehost</span><span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-300 flex-shrink-0">VS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-gray-400 hover:text-primary-400 flex justify-between items-center gap-2 transition-colors" title="Hostinger plans and pricing in India 2026">
                            <span>Hostinger Plans &amp; Pricing India</span><span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-300 flex-shrink-0">Guide</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/top-javascript-libraries-frameworks-2025" className="text-gray-400 hover:text-primary-400 flex justify-between items-center gap-2 transition-colors" title="Top JavaScript frameworks and libraries in demand">
                            <span>Top JS Frameworks (2025–2026)</span><span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-300 flex-shrink-0">JS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/is-react-worth-learning-2026" className="text-gray-400 hover:text-primary-400 flex justify-between items-center gap-2 transition-colors" title="React vs Vue vs Svelte vs Solid — which to learn in 2026">
                            <span>React vs Vue vs Svelte 2026</span><span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-300 flex-shrink-0">React</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Popular Posts Placeholder - To be implemented dynamically if needed */}
            {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Technology Articles</h3>
        <div id="popular-posts" className="space-y-4"></div>
      </div> */}

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white shadow-lg shadow-primary-500/20 border border-white/10">
                <h3 className="text-lg font-bold mb-2">Subscribe to Technology Newsletter</h3>
                <p className="text-white/80 text-sm mb-4">
                    Get the latest AI development, web programming, and tech insights delivered to your inbox
                </p>
                <div className="space-y-3">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-black/20 border border-white/20 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-white focus:outline-none focus:bg-black/30 transition-all"
                        aria-label="Email address for newsletter subscription"
                    />
                    <button
                        className="w-full bg-white text-primary-600 py-3 rounded-lg font-bold hover:bg-gray-100 hover:shadow-lg transition-all"
                        aria-label="Subscribe to technology newsletter"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
