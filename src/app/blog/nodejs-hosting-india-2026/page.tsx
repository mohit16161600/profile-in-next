import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/nodejs-hosting-india-2026";

export const metadata: Metadata = {
    title: "Node.js Hosting in India (2026): Why Shared Hosting Fails & What Works",
    description:
        "A full-stack developer's guide to hosting Node.js apps in India — why shared hosting can't run Node, VPS vs serverless vs PaaS compared with real INR costs, and the exact setup I use for client projects.",
    keywords: [
        "nodejs hosting india",
        "node js hosting india price",
        "best vps for nodejs india",
        "host nodejs app india",
        "nodejs hosting cheap india",
        "hostinger nodejs hosting",
        "vps for nodejs 2026",
        "deploy nodejs app vps",
        "nodejs vs shared hosting",
        "nextjs hosting india",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Node.js Hosting in India (2026): Why Shared Hosting Fails & What Works",
        description:
            "VPS vs serverless vs PaaS for Node.js in India — real INR costs, when each fits, and a developer's production setup.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/nodejs-hosting-india-2026.svg", width: 1200, height: 630, alt: "Node.js hosting in India 2026 — VPS vs serverless comparison" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Hosting in India 2026: What Actually Works",
        description: "Why shared hosting can't run Node, VPS vs serverless with INR pricing, and a production-tested setup.",
        images: ["/assets/blog/nodejs-hosting-india-2026.svg"],
    },
};

const FAQ = [
    {
        q: "Can I host a Node.js app on normal shared hosting?",
        a: "Generally no. Shared hosting is built for PHP: the server starts your script per-request and kills it. Node.js needs a long-running process listening on a port, which shared plans don't allow (no root access, no process managers, no custom ports). You need a VPS, a PaaS like Render/Railway, or serverless (Vercel) for Next.js-style apps.",
    },
    {
        q: "What is the cheapest way to host Node.js in India?",
        a: "Three realistic paths: (1) Vercel/Netlify free tier if your app fits the serverless model (Next.js API routes, hobby traffic); (2) a small VPS like Hostinger KVM 1 (~₹499/mo on sale) for full control; (3) Render/Railway free-to-hobby tiers (~$5-7/mo) with cold starts. For production client work in India, the VPS usually wins on cost-per-performance.",
    },
    {
        q: "Which VPS is best for Node.js in India?",
        a: "For most production Node.js apps, 2 vCPU / 8 GB RAM is the sweet spot — enough for the app, a PostgreSQL/MySQL database, PM2, and Nginx on one box. Hostinger's KVM 2 hits that spec at Indian-budget prices with NVMe disks. Go KVM 4 when you're running multiple apps or heavy traffic.",
    },
    {
        q: "How do I deploy a Node.js app on a VPS?",
        a: "The standard production recipe: Ubuntu LTS → install Node via nvm → clone your repo → npm ci && npm run build → run it under PM2 (auto-restart on crash/reboot) → put Nginx in front as a reverse proxy → add a free Let's Encrypt SSL via certbot. That stack has served my client projects reliably for years.",
    },
    {
        q: "Is Vercel better than a VPS for Next.js?",
        a: "Different tools. Vercel is unbeatable for developer experience and scale-to-zero hobby projects — this site runs on it. But costs can rise quickly with traffic and server-side rendering, and long-running jobs/websockets don't fit serverless. A VPS gives predictable flat pricing and full control; you trade away the zero-ops convenience.",
    },
    {
        q: "Do I need a Mumbai/India server location for Node.js hosting?",
        a: "If your users are in India, yes it helps — Mumbai or Singapore regions typically cut 100-200ms of latency versus US East for Indian visitors. Hostinger offers Indian data centre options, and on Vercel you can set the serverless region to Mumbai (bom1).",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Node.js Hosting in India (2026): Why Shared Hosting Fails & What Works",
        description:
            "A developer's guide to Node.js hosting in India — why shared hosting can't run Node, VPS vs serverless vs PaaS with INR costs, and a production deployment recipe.",
        image: "https://mohitkoli.in/assets/blog/nodejs-hosting-india-2026.svg",
        datePublished: "2026-08-09T00:00:00.000Z",
        dateModified: "2026-08-09T00:00:00.000Z",
        author: {
            "@type": "Person",
            name: "Mohit Koli",
            url: "https://mohitkoli.in/profile",
            jobTitle: "Senior Full Stack Developer",
            sameAs: [
                "https://github.com/mohit16161600",
                "https://www.linkedin.com/in/mohit-koli-b47260213",
                "https://x.com/mohitko86979490",
            ],
        },
        publisher: {
            "@type": "Person",
            name: "Mohit Koli",
            logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "nodejs hosting india, node js vps india, host nodejs app, nextjs hosting india, vps for nodejs",
        articleSection: "Web Development",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Node.js Hosting in India 2026", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    },
];

const OPTIONS = [
    ["Shared hosting", "₹99–₹199/mo", "❌ Can't run Node", "PHP/WordPress sites only — no long-running processes, no custom ports"],
    ["VPS (Hostinger KVM)", "~₹499–₹1,099/mo", "✅ Best control", "Production apps, APIs, websockets, Docker, databases on one box"],
    ["Vercel / Netlify", "Free–$20/mo+", "✅ Best DX", "Next.js, serverless APIs, hobby → startup; watch costs at scale"],
    ["Render / Railway", "Free–$7/mo+", "✅ Easiest classic Node", "Express/Nest apps without server admin; cold starts on free tier"],
];

export default function NodejsHostingIndia() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
                            <li>/</li>
                            <li className="text-gray-300">Node.js Hosting India</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Developer Guide · Updated August 9, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Node.js Hosting in India (2026): Why Your Shared Hosting Can&apos;t Run It — and What Actually Works
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        Every week someone asks me why their Express app won&apos;t start on the hosting they already pay for.
                        Short answer: <strong className="text-white">shared hosting was built for PHP, and Node.js is a fundamentally different
                        animal</strong>. As a full-stack developer who ships Node, Next.js and Laravel apps for clients, here is the
                        complete 2026 map — what runs Node in India, what it costs in rupees, and the exact production setup I use.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: VPS links use my referral code — you get an extra discount, I earn a small commission at no extra cost to you.
                        Prices checked August 9, 2026.
                    </p>

                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/nodejs-hosting-india-2026.svg"
                            alt="Node.js hosting in India 2026 — shared hosting vs VPS vs serverless comparison"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 30-sec */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7">
                            <li>🧱 <strong className="text-white">Shared hosting can&apos;t run Node.js</strong> — no long-running processes, no custom ports, no root.</li>
                            <li>⚙️ <strong className="text-white">Production apps &amp; APIs:</strong> a VPS (2 vCPU / 8 GB sweet spot) with PM2 + Nginx — flat, predictable INR pricing.</li>
                            <li>▲ <strong className="text-white">Next.js projects:</strong> Vercel free tier first; move to VPS when bills or websockets demand it.</li>
                            <li>🚂 <strong className="text-white">Classic Express without server admin:</strong> Render/Railway — easiest start, cold starts on free tiers.</li>
                        </ul>
                    </section>

                    {/* Why shared fails */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Why shared hosting fails for Node.js (the actual technical reason)</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            PHP on shared hosting works like a vending machine: a request arrives, Apache/LiteSpeed spins up your
                            script, the script returns HTML and dies. Thousands of accounts share one server safely because nothing
                            keeps running between requests.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Node.js inverts that: <strong className="text-white">your app IS the server</strong> — a single persistent process
                            (e.g. <code className="text-primary-300 bg-white/5 px-1.5 py-0.5 rounded">node server.js</code>) that binds a port and
                            keeps state in memory. Shared hosts kill long-running processes, block port binding, and give you no
                            systemd/PM2 to keep the app alive. Some hosts advertise a &quot;Node.js selector&quot; on shared plans —
                            in practice these are hobbled (Passenger-based, restricted versions, no websockets) and I don&apos;t
                            recommend them for anything real.
                        </p>
                        <p className="text-gray-300 leading-8">
                            So the real question isn&apos;t &quot;which shared plan supports Node&quot; — it&apos;s{" "}
                            <strong className="text-white">&quot;VPS, PaaS or serverless?&quot;</strong>
                        </p>
                    </section>

                    {/* Options table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Your 4 real options in India (with INR costs)</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Option</th>
                                        <th className="p-4">Cost (India)</th>
                                        <th className="p-4">Node.js?</th>
                                        <th className="p-4">Best for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {OPTIONS.map(([opt, cost, node, best], i) => (
                                        <tr key={opt} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{opt}</td>
                                            <td className="p-4">{cost}</td>
                                            <td className="p-4">{node}</td>
                                            <td className="p-4">{best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* VPS deep dive */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The VPS route: specs that actually matter for Node</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Node itself is light — a typical Express/Nest app idles at 100–300 MB RAM. What eats resources is
                            everything around it: your database, build steps, PM2 cluster instances, and traffic spikes. My sizing
                            rule from client deployments:
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4 mb-6">
                            {[
                                ["1 vCPU / 4 GB (KVM 1)", "~₹499/mo", "One small app + SQLite/managed DB. Side projects, bots, cron workers, staging."],
                                ["2 vCPU / 8 GB (KVM 2)", "sweet spot", "Production app + PostgreSQL/MySQL + Nginx on one box. Handles most Indian startup traffic."],
                                ["4 vCPU / 16 GB (KVM 4)", "scale tier", "Multiple apps, Docker Compose stacks, busy APIs, WooCommerce backends."],
                            ].map(([spec, price, why]) => (
                                <div key={spec} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="font-semibold text-white mb-1">{spec}</h3>
                                    <p className="text-primary-400 text-sm font-bold mb-2">{price}</p>
                                    <p className="text-xs text-gray-300 leading-5">{why}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-300 leading-8">
                            NVMe disks matter more than CPU for most Node apps (database + npm installs are disk-bound). Full specs
                            and pricing for the KVM line are in my{" "}
                            <Link href="/blog/hostinger-vps-hosting-review-discount" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                hands-on Hostinger KVM VPS review
                            </Link>{" "}
                            and the{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                full plans &amp; pricing guide
                            </Link>.
                        </p>
                    </section>

                    {/* Mid-article CTA */}
                    <aside className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-sm text-gray-300 leading-7">
                            <strong className="text-white">Picked your spec?</strong> If KVM 2 matches your app, the sizing above is
                            all you need to decide — my referral link below can get you an extra discount on top of the running sale.
                        </p>
                        <a
                            href={REFERRAL_URL}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="shrink-0 inline-block border border-primary-500/50 text-primary-300 hover:text-white hover:bg-primary-500/20 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                        >
                            Check current KVM pricing →
                        </a>
                    </aside>

                    {/* Deployment recipe */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">My production deployment recipe (copy this)</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The same boring, reliable stack I use for client Node.js apps on a fresh Ubuntu VPS:
                        </p>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-x-auto">
                            <pre className="text-sm text-gray-300 leading-7"><code>{`# 1. Node via nvm (never apt's ancient node)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts

# 2. Get the app
git clone https://github.com/you/your-app.git && cd your-app
npm ci && npm run build

# 3. Keep it alive with PM2
npm i -g pm2
pm2 start dist/server.js --name app -i max   # cluster mode
pm2 save && pm2 startup                      # survive reboots

# 4. Nginx reverse proxy (port 80/443 → app port)
sudo apt install nginx
# proxy_pass http://127.0.0.1:3000; in your server block

# 5. Free SSL
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.in`}</code></pre>
                        </div>
                        <p className="text-sm text-gray-500 mt-3">
                            PM2 cluster mode uses every vCPU; Nginx handles SSL termination and static files. This exact stack has
                            run client production apps for years without drama.
                        </p>
                    </section>

                    {/* Vercel vs VPS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Next.js specifically: Vercel or VPS?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Honest answer from someone running both: <strong className="text-white">this very site is Next.js on Vercel</strong> —
                            the free tier is unbeatable for a portfolio/blog, and the Mumbai (bom1) region keeps it fast for Indian
                            visitors. For hobby and low-traffic projects, start there; it costs nothing to find out.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Move to a VPS when any of these hit: serverless bills climbing past VPS cost, websockets/long-running
                            jobs, heavy SSR traffic, or a client who wants everything on one predictable invoice. With{" "}
                            <code className="text-primary-300 bg-white/5 px-1.5 py-0.5 rounded">next start</code> behind Nginx + PM2, Next.js runs
                            beautifully on a ₹500–₹800/mo box — often 5–10× cheaper than the equivalent serverless bill at scale.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">Ready to deploy? Get a KVM VPS at the sale price</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Root access, NVMe disks, dedicated resources, Indian-friendly pricing. The referral link adds an
                                extra discount on top of the current sale — and the 30-day money-back covers your experiments.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                See KVM VPS Prices with Discount →
                            </a>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Node.js hosting in India</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <summary className="cursor-pointer text-lg font-semibold text-white list-none flex justify-between items-center">
                                        {item.q}
                                        <span className="text-primary-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                    </summary>
                                    <p className="mt-3 text-gray-300 leading-7">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Keep reading (developer series)</h2>
                        <ul className="space-y-3 text-primary-400">
                            <li><Link href="/blog/hostinger-vps-hosting-review-discount" className="hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS Review — hands-on with the developer plans</Link></li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Plans &amp; Pricing in India 2026 — shared vs cloud vs KVM</Link></li>
                            <li><Link href="/blog/frontend-vs-backend-development-guide" className="hover:text-primary-300 underline underline-offset-4">Frontend vs Backend Development — the complete guide</Link></li>
                            <li><Link href="/blog/is-react-worth-learning-2026" className="hover:text-primary-300 underline underline-offset-4">Is React Worth Learning in 2026?</Link></li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Renewal Price in India — what you&apos;ll pay after year one</Link></li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Guide</h3>
                        <ShareButtons url={CANONICAL} title="Node.js Hosting in India (2026): Why Shared Hosting Fails & What Works" />
                    </div>
                </article>
            </main>
        </>
    );
}
