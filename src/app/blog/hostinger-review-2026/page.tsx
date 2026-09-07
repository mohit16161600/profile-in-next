import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const REFERRAL_URL_HOSTING = "https://www.hostinger.com/in/web-hosting?REFERRALCODE=mohitkoli";
const REFERRAL_URL_VPS = "https://www.hostinger.com/in/vps-hosting?REFERRALCODE=mohitkoli";
const REFERRAL_URL_BEGINNER = "https://www.hostinger.com/in?REFERRALCODE=HOSTFIFTY";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-review-2026";

export const metadata: Metadata = {
    title: "Hostinger Review 2026: ₹69/mo & 83% Off — India Tested",
    description:
        "Honest Hostinger review after a year of client sites in India: real speed, uptime, the ₹449/mo renewal, plans from ₹69/mo and who should skip it.",
    keywords: [
        "hostinger review 2026",
        "hostinger review",
        "hostinger review india",
        "hostinger review 2026 india",
        "is hostinger good",
        "is hostinger worth it",
        "is hostinger worth it in india",
        "hostinger horizons review 2026",
        "hostinger horizons review",
        "hostinger honest review",
        "hostinger pros and cons",
        "hostinger price in india",
        "hostinger price in india 2026",
        "how much does hostinger cost in india",
        "hostinger plans india",
        "hostinger unlimited plan",
        "hostinger yearly plan price",
        "hostinger monthly plan",
        "hostinger renewal price india",
        "why is hostinger so cheap",
        "hostinger speed test india",
        "hostinger mumbai data center speed",
        "hostinger ttfb india",
        "hostinger cpu limit",
        "hostinger inode limit",
        "hostinger resource limits reached",
        "hostinger backup retention",
        "is hostinger safe",
        "hostinger customer care india",
        "hostinger support phone number",
        "hostinger free migration",
        "hostinger refund policy india",
        "hostinger 30 day money back guarantee",
        "hostinger ai builder",
        "hostinger gst 18 percent",
        "hostinger free domain first year",
        "hostinger vs godaddy which is better in india",
        "hostinger vs bluehost india",
        "is hostinger good for beginners",
        "hostinger speed test",
        "should i use hostinger",
        "hostinger horizons",
        "hostinger review pricing india",
        "who should not buy hostinger",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hostinger Review 2026: ₹69/mo & 83% Off — India Tested",
        description:
            "Honest Hostinger review after a year of client sites in India: real speed, uptime, the ₹449/mo renewal, plans from ₹69/mo and who should skip it.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/hostinger-review-2026.png", width: 1200, height: 630, alt: "Hostinger review 2026 — honest developer verdict" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hostinger Review 2026: ₹69/mo & 83% Off — India Tested",
        description: "A year of running real client sites on Hostinger — pricing, renewals, resource limits, support, AI Builder, and is it worth it?",
        images: ["/assets/blog/hostinger-review-2026.png"],
    },
};

const RATINGS: [string, number, string][] = [
    ["Value for money", 4.8, "Among the cheapest serious hosting in India, especially on long terms."],
    ["Speed (with LiteSpeed/NVMe)", 4.5, "The Unlimited and Cloud tiers with NVMe + LiteSpeed cache feel genuinely fast."],
    ["Uptime", 4.4, "Solidly in the 99.9% range across a year of monitoring."],
    ["hPanel (ease of use)", 4.7, "Cleaner and friendlier than cPanel for beginners."],
    ["Support", 4.0, "24/7 chat and email, no phone line anywhere, and an AI agent answers first."],
    ["Renewal pricing", 3.5, "The one real downside — renewals run roughly 3-4x the intro rate."],
];

const FAQ = [
    {
        q: "How much does Hostinger cost per month in India in 2026?",
        a: "On the 48-month term the shared ladder is Single ₹69/mo, Premium ₹149/mo, Unlimited ₹249/mo and Cloud Startup ₹599/mo, all billed upfront for the whole term. KVM VPS starts at ₹599/mo. Every one of those prices is pre-tax: add 18% GST and Single actually bills at about ₹81/mo and Premium at about ₹176/mo. Renewals are far higher — ₹289, ₹449, ₹649 and ₹1,599 respectively.",
    },
    {
        q: "Does Hostinger's India price include GST?",
        a: "No. Every price on Hostinger's Indian pages is shown before tax, and 18% GST is added at checkout. That is why the cart total looks higher than the price you clicked: ₹69/mo becomes roughly ₹81/mo, ₹149 becomes roughly ₹176, and a ₹7,152 four-year Premium term becomes about ₹8,439. Budget with the tax included and there are no surprises at the payment screen.",
    },
    {
        q: "Why is Hostinger so cheap?",
        a: "Three reasons, none of them a scam. You pay up to four years upfront, so Hostinger gets the cash immediately and discounts heavily for it. Shared servers are packed densely, which is exactly why CPU, RAM and inode caps exist. And hPanel is built in-house, so there is no per-account cPanel licence to pass on. The money is made at renewal, which runs roughly three to four times the intro rate.",
    },
    {
        q: "What are Hostinger's CPU, RAM and inode limits?",
        a: "Every shared and cloud plan is capped on inode count, database size, CPU power, RAM and entry/active processes — Hostinger publishes the per-plan figures in its own hosting-parameters support doc. An inode is one file or folder, so an image-heavy site can hit the cap while disk space is still free, and once it does you cannot create new files. Check yours in hPanel under Websites → Resources Usage. VPS plans have no inode limit.",
    },
    {
        q: "Does Hostinger have a customer care phone number in India?",
        a: "No. Hostinger's own contact page lists no phone number for India or anywhere else — support is 24/7 live chat plus email, reached from inside hPanel after you log in. Its AI agent, Kodee, answers first; Hostinger says it replies in about nine seconds on average and fully resolves around half of chats. Ask for a human agent and the chat gets handed over.",
    },
    {
        q: "How do I get a refund from Hostinger in India?",
        a: "Cancel inside hPanel within 30 days of the transaction date and the hosting fee comes back to your original payment method, or to Hostinger Balance if you prefer. The 30-day guarantee covers web, cloud, agency and KVM plans plus Business Mail. Domains are treated separately: a .com is only refundable within 96 hours, and .in and most other country domains are not refundable at all.",
    },
    {
        q: "Does Hostinger offer free website migration?",
        a: "Yes — migrations are free and unlimited on paid plans. Hostinger says a simple automatic WordPress migration usually finishes in under two hours, while cPanel-based sites and other open-source CMS moves typically take more than 20 hours. Closed platforms such as Wix, Squarespace and Shopify cannot be migrated at all; those have to be rebuilt. Keep the old host running until the copy is verified.",
    },
    {
        q: "Which Hostinger data centre should I choose in India?",
        a: "Choose the India (Mumbai) location if your visitors are Indian. Distance is the one performance factor no plan upgrade can fix — a request to a US server crosses the planet twice before the page paints. The choice is made during setup, and changing it later means migrating the site again, so get it right on day one rather than debugging a slow site later.",
    },
    {
        q: "Is Hostinger Horizons still available in 2026?",
        a: "Not as a separate subscription. On 18 August 2026 Hostinger merged Horizons with its drag-and-drop Website Builder into a single product called Hostinger AI Builder, with an agentic mode (the old Horizons prompt-to-app flow) and a manual mode (the old visual editor). Existing projects keep working. Note that AI credits are listed as non-refundable in Hostinger's refund policy.",
    },
    {
        q: "Can I upgrade my Hostinger plan later without losing my site?",
        a: "Yes. Upgrading is a plan change inside hPanel, not a migration you run yourself — files, databases, email and domains stay where they are and the site keeps serving. What changes is the money: the new plan bills at whatever term price is live on the day you upgrade. Starting on Single and moving up later is a perfectly sane way to buy.",
    },
    {
        q: "How many websites can I host on Hostinger?",
        a: "One website on Single, three on Premium, and unlimited on Unlimited and Cloud Startup. The Agency Startup plan allows 100 websites. \"Unlimited\" means no counter in hPanel, not unlimited resources — the inode, CPU and RAM caps still apply across every site on the account, so twenty small sites are fine and three heavy stores may not be.",
    },
    {
        q: "What is the biggest hidden cost with Hostinger in India?",
        a: "Year two. Three bills land close together: hosting renews at roughly three to four times the intro rate, the free first-year domain starts charging (a .com renewal is roughly ₹1,000-1,400), and free business email stops being free. None of it is hidden in the fine print — it is just far away at checkout. Buying the longest term pushes the hosting part of that four years out.",
    },
    {
        q: "Is Hostinger actually good, or just cheap?",
        a: "It's genuinely good for the price. Across a year of running client sites I saw 99.9%-range uptime, fast loads on the NVMe/LiteSpeed tiers, and a beginner-friendly hPanel. It isn't a premium managed host like WP Engine — but for blogs, portfolios, small business and WooCommerce sites in India, the value is hard to beat.",
    },
    {
        q: "Is Hostinger worth it in 2026?",
        a: "For most Indian users, yes. If you want cheap-but-reliable shared or cloud hosting with a free domain and SSL, Hostinger is the strongest value pick. Choose a different host only if you need fully-managed enterprise WordPress or specialised infrastructure.",
    },
    {
        q: "What's the biggest downside of Hostinger?",
        a: "Renewal pricing. The first-term price is heavily discounted and renewals are much higher — Premium goes from ₹149/mo to ₹449/mo. The fix is simple: buy the longest term (48 months) at the sale price to lock the low rate for years, and set a calendar reminder well before renewal so the decision is yours, not the auto-renew's.",
    },
    {
        q: "Is Hostinger good for WordPress?",
        a: "Yes — it's one of its strongest use cases. You get one-click WordPress install, managed updates, LiteSpeed caching, and an optional AI site builder. Premium handles a normal blog; Unlimited (NVMe + daily backups) is better for a store or client site.",
    },
    {
        q: "How fast is Hostinger really?",
        a: "On the NVMe tiers (Unlimited, formerly Business, and above) with LiteSpeed cache and a CDN, real-world loads are fast — typically well under a second for a cached page from an Indian data-centre region. The entry Single and Premium plans run on SSD rather than NVMe: fine for low-traffic blogs, less comfortable under load.",
    },
    {
        q: "Is Hostinger safe and reliable?",
        a: "Broadly yes, with one honest caveat. Every plan gets free auto-renewing SSL, malware scanning, DDoS protection and a 30-day money-back guarantee, and reliability over a year has been consistent. The caveat: automatic backups are weekly on Single and Premium, and daily backups are only kept for seven days — run your own off-site backup as well.",
    },
    {
        q: "What is Hostinger Horizons?",
        a: "Horizons was Hostinger's prompt-to-app AI builder: you describe what you want in plain language and it generates a working site or simple web app. Since 18 August 2026 it no longer exists as a standalone product — it is the agentic mode inside Hostinger AI Builder, alongside the manual drag-and-drop mode. Existing projects continue to work, and AI Builder sites do not consume your plan's inode allowance.",
    },
    {
        q: "Is Hostinger good for beginners in India?",
        a: "Yes — it's the most beginner-friendly host I've used in India. hPanel is much simpler than cPanel, WordPress installs in one click, the free domain and free SSL remove two confusing steps, and INR pricing from ₹69/mo on the long term keeps the entry cost low. The 30-day money-back guarantee means a beginner can test everything risk-free.",
    },
];

const reviewNode = {
    "@type": "Review",
    itemReviewed: {
        "@type": "Product",
        name: "Hostinger Web Hosting",
        description: "Shared, Cloud and KVM VPS web hosting with free domain, SSL and email.",
        brand: { "@type": "Brand", name: "Hostinger" },
    },
    reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5", worstRating: "1" },
    author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile" },
    publisher: { "@type": "Person", name: "Mohit Koli" },
    datePublished: "2026-07-17T00:00:00.000Z",
    reviewBody:
        "After a year of running real client sites on Hostinger, it delivers 99.9%-range uptime, fast NVMe/LiteSpeed performance, and a beginner-friendly hPanel at a price that's hard to beat in India. The real downsides are renewal pricing at roughly 3-4x the intro rate, hard resource caps on shared plans, and no phone support.",
};

const jsonLd = [
    {
        "@context": "https://schema.org",
        ...reviewNode,
    },
    {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Hostinger Web Hosting",
        description:
            "Hostinger shared, cloud and KVM VPS hosting in India — free domain for the first year, free SSL, LiteSpeed and NVMe storage on the higher tiers. Prices shown are per month on the 48-month term, excluding 18% GST.",
        brand: { "@type": "Brand", name: "Hostinger" },
        category: "Web Hosting",
        url: "https://www.hostinger.com/in/web-hosting",
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: "69",
            highPrice: "599",
            offerCount: "4",
            offers: [
                {
                    "@type": "Offer",
                    name: "Hostinger Single (48-month term)",
                    price: "69",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hostinger.com/in/web-hosting",
                },
                {
                    "@type": "Offer",
                    name: "Hostinger Premium (48-month term)",
                    price: "149",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hostinger.com/in/web-hosting",
                },
                {
                    "@type": "Offer",
                    name: "Hostinger Unlimited (48-month term)",
                    price: "249",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hostinger.com/in/web-hosting",
                },
                {
                    "@type": "Offer",
                    name: "Hostinger Cloud Startup (48-month term)",
                    price: "599",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hostinger.com/in/cloud-hosting",
                },
            ],
        },
        review: reviewNode,
    },
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Hostinger Review 2026: ₹69/mo & 83% Off — India Tested",
        description:
            "Honest Hostinger review after a year of client sites in India: real speed, uptime, the ₹449/mo renewal, plans from ₹69/mo and who should skip it.",
        image: "https://mohitkoli.in/assets/blog/hostinger-review-2026.png",
        datePublished: "2026-07-17T00:00:00.000Z",
        dateModified: "2026-09-07T00:00:00.000Z",
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
        keywords:
            "hostinger review, hostinger review 2026, hostinger review india, is hostinger good, is hostinger worth it in india, hostinger price in india 2026, hostinger inode limit, hostinger ai builder, why is hostinger so cheap, hostinger pros and cons, is hostinger good for beginners",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger Review 2026", item: CANONICAL },
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

const PLAN_CARDS: { name: string; price: string; withCode: string; renews: string; specs: string; buyIf: string; cta: string; href: string }[] = [
    {
        name: "Single — ₹69/mo",
        price: "83% off ₹399/mo, 48-month term",
        withCode: "₹55.20/mo with the extra 20% applied",
        renews: "Renews ₹289/mo",
        specs: "1 website · 10 GB SSD · weekly backups · free SSL",
        buyIf: "Buy this if you are putting one blog, portfolio or single business site online and want the cheapest honest entry price in India.",
        cta: "See Single Plan Price →",
        href: REFERRAL_URL_HOSTING,
    },
    {
        name: "Premium — ₹149/mo",
        price: "75% off ₹599/mo, 48-month term",
        withCode: "₹119.20/mo with the extra 20% applied",
        renews: "Renews ₹449/mo",
        specs: "3 websites · 20 GB SSD · weekly backups · free domain year one",
        buyIf: "Buy this if you want two or three sites on one bill — a blog plus a client site, or a business site plus a landing page.",
        cta: "See Premium Price →",
        href: REFERRAL_URL_HOSTING,
    },
    {
        name: "Unlimited — ₹249/mo",
        price: "64% off ₹699/mo, 48-month term",
        withCode: "₹199.20/mo with the extra 20% applied",
        renews: "Renews ₹649/mo",
        specs: "Unlimited websites · 50 GB NVMe · daily backups",
        buyIf: "Buy this if you run a WooCommerce store or client sites. NVMe and daily backups are the two upgrades that actually change your day.",
        cta: "See Unlimited Price →",
        href: REFERRAL_URL_HOSTING,
    },
    {
        name: "Cloud Startup — ₹599/mo",
        price: "65% off ₹1,699/mo, 48-month term",
        withCode: "₹479.20/mo with the extra 20% applied",
        renews: "Renews ₹1,599/mo",
        specs: "Unlimited websites · 100 GB NVMe · dedicated resources",
        buyIf: "Buy this if a shared plan has already throttled you, or you are running a catalogue big enough to worry about inodes.",
        cta: "See Cloud Startup Price →",
        href: REFERRAL_URL_HOSTING,
    },
    {
        name: "KVM 1 VPS — ₹599/mo",
        price: "64% off ₹1,649/mo · KVM 2 ₹799 · KVM 4 ₹1,099 · KVM 8 ₹2,199",
        withCode: "KVM 4 lands at ₹879.20/mo with the extra 20% applied",
        renews: "KVM 1 renews ₹999/mo · KVM 4 renews ₹2,399/mo",
        specs: "1 vCPU · 4 GB RAM · 50 GB NVMe · 4 TB bandwidth · root access · no inode cap",
        buyIf: "Buy this if you need root, Docker, Node or a staging box — anything shared hosting is not allowed to do.",
        cta: "See KVM VPS Plans →",
        href: REFERRAL_URL_VPS,
    },
    {
        name: "Agency Startup — ₹2,499/mo",
        price: "24-month term (not 48)",
        withCode: "Unbranded client dashboard and staging included",
        renews: "Renews ₹3,499/mo",
        specs: "100 websites · 300 GB NVMe · 6 CPU cores · 12 GB RAM",
        buyIf: "Buy this if you hand sites to clients and want them logging into your dashboard instead of Hostinger's.",
        cta: "See Agency Plans →",
        href: REFERRAL_URL_HOSTING,
    },
];

export default function HostingerReview2026() {
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
                            <li className="text-gray-300">Hostinger Review 2026</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Honest Review · Updated September 7, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Hostinger Review 2026: I Ran Real Client Sites for a Year — Here&apos;s My Honest Verdict
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        Most &quot;Hostinger reviews&quot; are written by people who never deployed a real site on it. I did — I&apos;ve hosted
                        client blogs, a WooCommerce store and my own projects on Hostinger for over a year. So this is the honest version:
                        <strong className="text-white"> what&apos;s genuinely great, what&apos;s annoying, and who should skip it.</strong>
                    </p>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        The short answer: Hostinger in India starts at <strong className="text-white">₹69/mo on the Single plan</strong> (83% off
                        ₹399) and runs up to ₹599/mo for Cloud Startup, all on the 48-month term with <strong className="text-white">18% GST added
                        at checkout</strong>. It is fast, it is easy, and it renews at roughly three to four times what you first paid. Everything
                        below is the detail behind those three sentences — including the resource caps and the backup window that no pricing page mentions.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: some links use my Hostinger referral code — you get an extra discount and I earn a commission at no extra
                        cost to you. That doesn&apos;t change the verdict; the downsides below are real.
                    </p>

                    {/* Early CTA — the first affiliate link used to sit most of the way down
                        the page, which is no use to a reader who already knows what they want. */}
                    <div className="mb-10 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <div className="mb-4 sm:mb-0">
                            <p className="font-semibold text-white leading-6">Already sold? Hostinger starts at ₹55.20/mo</p>
                            <p className="mt-1 text-sm text-gray-400 leading-6">
                                That is the Single plan at ₹69/mo with my extra 20% applied · free domain on most plans · 30-day money-back · GST extra
                            </p>
                        </div>
                        <a
                            href={REFERRAL_URL}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/30 hover:scale-[1.02] whitespace-nowrap"
                        >
                            Check Live Prices →
                        </a>
                    </div>

                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/hostinger-review-2026.svg"
                            alt="Cover card reading 'Hostinger Review 2026' with an honest-review label, written by developer Mohit Koli"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Verdict box */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <h2 className="text-2xl font-bold text-white">The verdict</h2>
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-extrabold text-white">4.5</span>
                                <div>
                                    <div className="text-yellow-400 text-lg leading-none">★★★★<span className="text-yellow-400/40">★</span></div>
                                    <span className="text-xs text-gray-400">out of 5 · Editor&apos;s pick for value</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-7 mb-3">
                            <strong className="text-white">Hostinger is the best value hosting in India for 2026</strong> — reliable
                            99.9%-range uptime, genuinely fast on the NVMe/LiteSpeed tiers, a clean beginner-friendly hPanel, and a free
                            domain + SSL. The catches are real and knowable: renewals land at ₹289-₹1,599/mo depending on plan, shared plans
                            enforce hard CPU, RAM and inode caps, daily backups are kept for only seven days, and there is no phone support anywhere.
                        </p>
                        <p className="text-gray-300 leading-7">
                            👉 Best for: <strong className="text-white">blogs, portfolios, small business sites, WooCommerce stores, and beginners.</strong>{" "}
                            Look elsewhere only if you need fully-managed enterprise WordPress.
                        </p>
                    </section>

                    {/* Ratings breakdown */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Ratings breakdown (what I actually scored)</h2>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-5">
                            {RATINGS.map(([label, score, note]) => (
                                <div key={label}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-white font-semibold text-sm">{label}</span>
                                        <span className="text-primary-300 font-bold text-sm">{score.toFixed(1)}</span>
                                    </div>
                                    <div className="h-2.5 rounded-full bg-white/5 mb-2">
                                        <div className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400" style={{ width: `${(score / 5) * 100}%` }} />
                                    </div>
                                    <p className="text-xs text-gray-400 leading-5">{note}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Pros / Cons */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">The good and the annoying</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-green-500/30 bg-green-500/[0.05] p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">👍 What&apos;s genuinely great</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-6">
                                    <li>✅ Cheapest serious hosting in India on long terms — from ₹69/mo</li>
                                    <li>✅ Free domain (1st year) + free SSL on every plan</li>
                                    <li>✅ NVMe + LiteSpeed cache = fast real-world loads</li>
                                    <li>✅ hPanel is cleaner and easier than cPanel</li>
                                    <li>✅ One-click WordPress + AI Builder included</li>
                                    <li>✅ 30-day money-back guarantee (real, no fuss)</li>
                                    <li>✅ Free unlimited migrations from another host</li>
                                    <li>✅ 99.9%-range uptime across a full year</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.05] p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">👎 What&apos;s annoying</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-6">
                                    <li>⚠️ Renewals run roughly 3-4x the intro rate</li>
                                    <li>⚠️ 18% GST is added on top of every price shown</li>
                                    <li>⚠️ Single and Premium are SSD, not NVMe</li>
                                    <li>⚠️ Hard CPU, RAM and inode caps on shared plans</li>
                                    <li>⚠️ Daily backups are kept for only 7 days</li>
                                    <li>⚠️ No phone support anywhere — chat and email only</li>
                                    <li>⚠️ Lots of upsells during checkout — untick what you don&apos;t need</li>
                                    <li>⚠️ No monthly-term value (you must commit long to save)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Mid-article CTA — beginners */}
                    <section className="mb-12">
                        <div className="rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 flex flex-wrap items-center justify-between gap-4">
                            <p className="text-sm text-gray-300 leading-7 max-w-xl">
                                <strong className="text-white">Buying hosting for the first time?</strong> The pros above are exactly what a
                                first site needs — free domain, free SSL and an easy hPanel. Signing up with code{" "}
                                <strong className="text-white">HOSTFIFTY</strong> can get you an extra discount on top of the current sale price.
                            </p>
                            <a
                                href={REFERRAL_URL_BEGINNER}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-white/10 hover:bg-white/20 border border-primary-500/40 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                            >
                                Check Beginner Plans →
                            </a>
                        </div>
                    </section>

                    {/* Pricing in India — full rewrite */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger price in India 2026: every plan and what it renews at</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Hostinger in India starts at <strong className="text-white">₹69/mo on the Single plan</strong> (83% off ₹399) and tops out
                            at <strong className="text-white">₹599/mo for Cloud Startup</strong>, all on the 48-month term, with 18% GST added at
                            checkout. KVM VPS starts at ₹599/mo and the agency tier starts at ₹2,499/mo on a 24-month term. Every price below is per
                            month, billed upfront for the whole term — that upfront payment is the entire reason the discount exists.
                        </p>
                        <p className="text-gray-300 leading-8 mb-6">
                            One naming note before the numbers: <strong className="text-white">Unlimited is the plan Hostinger renamed from Business
                            in July 2026.</strong> Older reviews (and older versions of this one) still say Business. Same tier, new label.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            {PLAN_CARDS.map((plan) => (
                                <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col">
                                    <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                                    <p className="text-xs uppercase tracking-wider text-primary-400 mb-3">{plan.price}</p>
                                    <p className="text-sm text-gray-300 leading-6 mb-1">{plan.specs}</p>
                                    <p className="text-sm text-emerald-300 leading-6 mb-1">{plan.withCode}</p>
                                    <p className="text-sm text-red-300 leading-6 mb-3">{plan.renews}</p>
                                    <p className="text-sm text-gray-400 leading-6 mb-5 flex-1">{plan.buyIf}</p>
                                    <a
                                        href={plan.href}
                                        target="_blank"
                                        rel="nofollow sponsored noopener"
                                        className="inline-block text-center bg-white/10 hover:bg-white/20 border border-primary-500/40 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                                    >
                                        {plan.cta}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="bg-white/[0.06] text-white">
                                        <th className="px-4 py-3 font-semibold">Plan</th>
                                        <th className="px-4 py-3 font-semibold">Intro price (48-mo term)</th>
                                        <th className="px-4 py-3 font-semibold">Renews at</th>
                                        <th className="px-4 py-3 font-semibold">Sites &amp; storage</th>
                                        <th className="px-4 py-3 font-semibold">Best for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Single</td>
                                        <td className="px-4 py-3">₹69/mo (₹55.20 with code)</td>
                                        <td className="px-4 py-3">₹289/mo</td>
                                        <td className="px-4 py-3">1 site · 10 GB SSD</td>
                                        <td className="px-4 py-3">A first blog or portfolio</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Premium</td>
                                        <td className="px-4 py-3">₹149/mo (₹119.20 with code)</td>
                                        <td className="px-4 py-3">₹449/mo</td>
                                        <td className="px-4 py-3">3 sites · 20 GB SSD</td>
                                        <td className="px-4 py-3">Blogs, portfolios, first sites</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Unlimited (was Business)</td>
                                        <td className="px-4 py-3">₹249/mo (₹199.20 with code)</td>
                                        <td className="px-4 py-3">₹649/mo</td>
                                        <td className="px-4 py-3">Unlimited sites · 50 GB NVMe</td>
                                        <td className="px-4 py-3">WooCommerce, client sites (daily backups)</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Cloud Startup</td>
                                        <td className="px-4 py-3">₹599/mo (₹479.20 with code)</td>
                                        <td className="px-4 py-3">₹1,599/mo</td>
                                        <td className="px-4 py-3">Unlimited sites · 100 GB NVMe</td>
                                        <td className="px-4 py-3">High-traffic sites, agencies</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">KVM 1 VPS</td>
                                        <td className="px-4 py-3">₹599/mo</td>
                                        <td className="px-4 py-3">₹999/mo</td>
                                        <td className="px-4 py-3">1 vCPU · 4 GB RAM · 50 GB NVMe</td>
                                        <td className="px-4 py-3">Custom apps, Docker, root access</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">KVM 4 VPS</td>
                                        <td className="px-4 py-3">₹1,099/mo (₹879.20 with code)</td>
                                        <td className="px-4 py-3">₹2,399/mo</td>
                                        <td className="px-4 py-3">4 vCPU · 16 GB RAM · 200 GB NVMe</td>
                                        <td className="px-4 py-3">Multiple production apps</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Agency Startup</td>
                                        <td className="px-4 py-3">₹2,499/mo (24-mo term)</td>
                                        <td className="px-4 py-3">₹3,499/mo</td>
                                        <td className="px-4 py-3">100 sites · 300 GB NVMe · 6 cores</td>
                                        <td className="px-4 py-3">Agencies with client logins</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            The &quot;with code&quot; column is my extra 20% on top of the sale price. Two things to be straight about:{" "}
                            <strong className="text-white">it applies to new purchases only, and it can never be applied to a renewal.</strong> Nobody
                            gets ₹55.20/mo forever. What you are actually buying is four years at a locked rate, after which the renewal column above
                            becomes your bill.
                        </p>
                        <p className="text-gray-300 leading-8">
                            For the full plan-by-plan breakdown — storage, website limits, what each tier actually includes — see my{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger plans &amp; pricing in India guide
                            </Link>
                            , the{" "}
                            <Link href="/blog/hostinger-business-plan" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Business/Unlimited plan deep dive
                            </Link>
                            , the{" "}
                            <Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Cloud hosting guide
                            </Link>{" "}
                            and the{" "}
                            <Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                KVM VPS plans breakdown
                            </Link>.
                        </p>
                    </section>

                    {/* Four-year cost */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How much does Hostinger actually cost over four years?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Premium on the 48-month term is <strong className="text-white">₹7,152 before tax — about ₹8,439 once 18% GST is added</strong>
                            {" "}— for four full years of hosting. That is the number to compare against everything else, not the ₹149 on the button.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Now the comparison that makes the decision obvious. That same ₹7,152 buys just under 16 months once Premium hits its
                            ₹449/mo renewal rate. And Single at ₹3,312 for 48 months is being sold against a ₹19,152 list price for the same period.
                            The discount is enormous precisely because you are pre-paying four years.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="bg-white/[0.06] text-white">
                                        <th className="px-4 py-3 font-semibold">Plan</th>
                                        <th className="px-4 py-3 font-semibold">48 months upfront (incl. 18% GST)</th>
                                        <th className="px-4 py-3 font-semibold">The next 48 months at the renewal rate (incl. GST)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Single (₹69/mo)</td>
                                        <td className="px-4 py-3">₹3,312 + GST ≈ ₹3,908</td>
                                        <td className="px-4 py-3">₹13,872 + GST ≈ ₹16,369</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Premium (₹149/mo)</td>
                                        <td className="px-4 py-3">₹7,152 + GST ≈ ₹8,439</td>
                                        <td className="px-4 py-3">₹21,552 + GST ≈ ₹25,431</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Unlimited (₹249/mo)</td>
                                        <td className="px-4 py-3">₹11,952 + GST ≈ ₹14,103</td>
                                        <td className="px-4 py-3">₹31,152 + GST ≈ ₹36,759</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Cloud Startup (₹599/mo)</td>
                                        <td className="px-4 py-3">₹28,752 + GST ≈ ₹33,927</td>
                                        <td className="px-4 py-3">₹76,752 + GST ≈ ₹90,567</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            Here is the point almost no Indian review makes: <strong className="text-white">every price Hostinger shows an Indian
                            buyer is pre-GST.</strong> The real monthly outgo on Single is roughly ₹81/mo, not ₹69/mo, and on Premium roughly ₹176/mo,
                            not ₹149. Nothing dishonest is happening — it is how software is priced in India — but if you budgeted ₹3,312 for four
                            years, the card gets charged closer to ₹3,908.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            So the honest framing: the discount is real, the renewal is real, and buying the longest term is not a trick — it is simply
                            how you avoid the renewal for four years. Run your own numbers in the{" "}
                            <Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                hosting cost calculator
                            </Link>
                            , and read the term-by-term detail in{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger renewal price in India
                            </Link>.
                        </p>
                        <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                            <p className="text-sm text-gray-300 leading-7 mb-4 sm:mb-0 max-w-xl">
                                <strong className="text-white">Prices move.</strong> The ladder above was checked in September 2026 — Hostinger runs
                                seasonal sales that change the intro rate but rarely the renewal rate. Check what is live before you commit to four years.
                            </p>
                            <a
                                href={REFERRAL_URL_HOSTING}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/30 hover:scale-[1.02] whitespace-nowrap"
                            >
                                See Current Plans →
                            </a>
                        </div>
                    </section>

                    {/* Speed */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger speed in India: the data centre decides more than the plan</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The single biggest speed mistake Indian buyers make is not the plan they pick — it is{" "}
                            <strong className="text-white">picking the wrong data centre at checkout.</strong> Hostinger asks you where to place the
                            site during setup, and a lot of Indian users leave it on a US or European location without noticing. Distance is the one
                            thing no upgrade fixes: every request from a Mumbai visitor to a US server crosses the planet and comes back before the
                            page starts painting. Choose the India location. Changing it later means migrating the site again.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            After that, two things do the real work, and neither is marketing. Hostinger runs LiteSpeed instead of Apache on its shared
                            stack, and the LiteSpeed Cache plugin is installed automatically on WordPress — a cached page is served from memory rather
                            than rebuilt by PHP on every hit. That is where most of the speed comes from. The second is storage:{" "}
                            <strong className="text-white">Single and Premium are SSD, Unlimited and Cloud Startup are NVMe.</strong> If you are putting
                            a real store with a database on it, that difference shows up on every uncached query, so I would start a WooCommerce site
                            on Unlimited and not talk myself down to Premium to save ₹100 a month.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            I am deliberately not quoting a lab TTFB figure here. Benchmark numbers from a reviewer&apos;s empty test site tell you
                            almost nothing about your WordPress install with 24 plugins on it, and half the &quot;speed test&quot; tables circulating for
                            Indian hosts were measured from a US test node anyway. What is fair to say from a year of running client sites: on the NVMe
                            tiers with LiteSpeed cache on and the India location selected, cached pages feel instant, and the sites that felt slow were
                            slow because of plugins, unoptimised images or a resource cap — not because of the server.
                        </p>
                        <p className="text-gray-300 leading-8">
                            For developers who need dedicated resources, the KVM VPS line is a different (and excellent-value) product — I reviewed it
                            separately in my{" "}
                            <Link href="/blog/hostinger-vps-hosting-review-discount" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger KVM VPS review
                            </Link>.
                        </p>
                    </section>

                    {/* Resource limits */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The limits that are not in the pricing table: CPU, RAM and inodes</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Hostinger&apos;s shared and cloud plans cap CPU power, RAM, entry/active processes, database size and{" "}
                            <strong className="text-white">inode count</strong> — and hitting the inode cap is what silently breaks most cheap-hosting
                            sites. Hostinger documents this itself; it is just not on the page where you buy.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            An inode is one file or one folder. Every image, every plugin file, every cached page, every email sitting in a mailbox
                            counts as one. That is why the failure looks so strange when it happens:{" "}
                            <strong className="text-white">you cannot create new files even though hPanel says you still have disk space free.</strong>{" "}
                            Uploads fail, the File Manager throws errors, and a plugin update dies halfway. It is not a disk problem, it is a file-count
                            problem. Hostinger publishes the exact per-plan figures in its hosting-parameters support doc, and they rise as you go up the
                            ladder — read them before you migrate a media library rather than after.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            CPU and RAM work the same way. A shared plan gets a fixed slice, and going over it does not generate a surprise bill — it
                            gets you throttled, and then 503 errors while the queue backs up. The good news is that it is visible before it is fatal:
                            open <strong className="text-white">hPanel → Websites → Resources Usage</strong> and you get a graph of CPU, memory and
                            processes over time.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The fix order I would actually use, before spending money on an upgrade:
                        </p>
                        <ol className="space-y-3 text-gray-300 leading-7 mb-4 list-decimal list-inside">
                            <li><strong className="text-white">Read the graph first.</strong> If CPU is spiking for a minute a day, you have a cron problem, not a plan problem.</li>
                            <li><strong className="text-white">Turn LiteSpeed Cache on properly.</strong> A cached page costs a fraction of the CPU of an uncached one.</li>
                            <li><strong className="text-white">Cut the plugin count.</strong> Every active plugin is PHP running on every request and files sitting against your inode count.</li>
                            <li><strong className="text-white">Kill runaway WP-Cron and loopback requests.</strong> A busy site firing wp-cron.php on every page load will flat-line an entry plan on its own.</li>
                            <li><strong className="text-white">Clear the junk.</strong> Old backups, orphaned uploads and huge mailboxes are pure inode cost with no benefit.</li>
                            <li><strong className="text-white">Then upgrade</strong> — if the graph is still flat-lining at the ceiling after all of that, the plan genuinely is too small.</li>
                        </ol>
                        <p className="text-gray-300 leading-8">
                            The buying implication is worth stating plainly: an image-heavy WooCommerce catalogue or a mailbox-heavy business is an
                            <strong className="text-white"> inode problem, not a storage problem</strong>, and belongs on Unlimited or Cloud rather than
                            Single. And if you want none of these caps at all, that is exactly what a VPS is for — Hostinger&apos;s VPS plans have no
                            inode limit, which is half the reason developers move up to one.
                        </p>
                    </section>

                    {/* Backups & security */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Backups, SSL and security: what is covered and what is not</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Every plan gets free auto-renewing SSL and automatic backups — but{" "}
                            <strong className="text-white">Single and Premium back up weekly, not daily</strong>, and the retention window is where the
                            honest catch lives. Hostinger keeps daily backups for seven days and weekly backups for six weeks; after that they are
                            permanently removed. If a hack or a bad plugin update goes unnoticed for a couple of weeks, the last clean daily copy is
                            already gone.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            What is genuinely included is decent for the price: free SSL on every plan, an in-house web application firewall, automatic
                            malware scanning, Cloudflare-backed DDoS protection, and a one-click restore flow in hPanel that I have used in anger and
                            that worked. Daily backups come with Unlimited and above, which is a real reason to buy that tier for anything commercial.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The recommendation I would give regardless of host:{" "}
                            <strong className="text-white">run your own backup plugin to external storage</strong> — Google Drive, Dropbox or S3 — on a
                            schedule you control, with retention you control. Host-side backups protect you against the server failing. They do not
                            protect you against you, and a seven-day window is not long enough to catch a slow-moving problem.
                        </p>
                        <p className="text-gray-300 leading-8">
                            One more thing a reader will find anyway, so it belongs here: in August 2019 Hostinger disclosed a breach in which an
                            unauthorised party reached a client database, affecting around 14 million accounts. Usernames, email addresses, first names,
                            IP addresses and hashed passwords were exposed; Hostinger said no payment data was stored on those servers, force-reset every
                            client password and moved password hashing to SHA-2. It is seven years old and it was disclosed promptly rather than hidden,
                            which is more than several competitors managed — but you should know it happened before you decide, not after.
                        </p>
                    </section>

                    {/* Support */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger support tested: there is no phone number</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">Hostinger has no phone support — India included.</strong> Its own contact page lists no
                            number anywhere. Support is 24/7 live chat plus email, and an AI agent called Kodee answers first. If you specifically want
                            to call a human when your site is down, stop reading here and buy from someone else, because this will annoy you every time.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The real flow: chat lives inside hPanel once you are logged in. Kodee handles the common things — DNS records, SSL, where a
                            setting lives — and Hostinger says it replies in about nine seconds on average and fully resolves around half of all chats.
                            You reach a person by asking for one, or by pushing past the first canned answer instead of accepting it. hPanel itself is
                            localised, Hindi included, but plan on chatting in English.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Where support is genuinely good: DNS and nameserver problems, SSL issues, billing, migrations, restoring a backup, anything
                            that lives in hPanel. Where it is not: plugin conflicts, custom code, and deep performance debugging. Ask why your checkout
                            page takes four seconds and you will get documentation links, because that is not their site to debug — it is yours.
                        </p>
                        <p className="text-gray-300 leading-8">
                            One warning worth more than the rest of this section:{" "}
                            <strong className="text-white">take your own backup before you let any support agent act on your files.</strong> That is not
                            a Hostinger-specific rule. It is the rule for every host on earth, and the people who ignore it are the people writing angry
                            reviews.
                        </p>
                    </section>

                    {/* Migration */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Free migration to Hostinger: how it really works</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Migrations are <strong className="text-white">free and unlimited</strong> on paid plans, and there are two routes: an
                            automatic tool for WordPress and cPanel-based hosts, and a request-based route for anything unusual. Hostinger&apos;s own
                            timings are worth knowing before you plan a launch date — a simple automatic WordPress migration typically finishes in under
                            two hours, while cPanel-based sites and other open-source CMS moves usually take{" "}
                            <strong className="text-white">more than 20 hours</strong>. It is a queue, not a button.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The exclusion that catches people: closed platforms cannot be migrated at all. Wix, Squarespace and Shopify sites have to be
                            rebuilt, not moved — there is no file-level export to import. And moving between plans inside your own Hostinger account is a
                            plan upgrade, not what the free-migration offer is for.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The sequence I use: request the migration, verify the staged copy on the temporary preview URL while the old site is still
                            live, drop the DNS TTL to 300 seconds a day before you switch, then point the nameservers.{" "}
                            <strong className="text-white">Keep the old host paid up until the new site has served real traffic for a few days.</strong>{" "}
                            Full walkthrough in{" "}
                            <Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                how to migrate WordPress to a new host
                            </Link>.
                        </p>
                    </section>

                    {/* Refund */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The 30-day money-back guarantee: what you actually get back</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            You get the hosting fee back if you cancel within{" "}
                            <strong className="text-white">30 days of the transaction date</strong> — not 30 days from when your site goes live, which
                            matters if you buy now and build next month. The guarantee covers web, cloud, agency and KVM hosting plans plus Business
                            Mail. Cancellation is a few clicks in hPanel, and the money goes back to the original payment method, or to your Hostinger
                            Balance if you would rather keep it on account.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            What is <strong className="text-white">not</strong> refundable, straight from Hostinger&apos;s refund policy: domain
                            renewals, successful domain transfers, domain privacy protection, SEO tools, Google Workspace email, VPS licences, website
                            cleanup, paid support services and AI credits. Free domains given away with a plan are non-refundable too.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Domains have their own, far shorter window and this is the part that surprises Indian buyers most:{" "}
                            <strong className="text-white">a new .com is only refundable within 96 hours of registration, and .in — along with most
                            country-code domains — is not refundable at all.</strong> So the sentence to remember is: the hosting is a 30-day risk, the
                            domain is a 96-hour risk, and a .in domain is a decision you cannot undo.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Practical advice: if you are not sure you are staying, turn auto-renew off in hPanel the week you buy rather than relying on
                            a refund later. Renewals are charged in advance of the expiry date, and a renewal payment that has already gone through on a
                            domain is not coming back.
                        </p>
                    </section>

                    {/* AI Builder (was Horizons) */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger AI Builder (what happened to Horizons)</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">Hostinger Horizons no longer exists as a separate product.</strong> On 18 August 2026
                            Hostinger merged Horizons with its drag-and-drop Website Builder into a single product called{" "}
                            <strong className="text-white">Hostinger AI Builder</strong>. Existing projects keep working, and old Horizons links land in
                            the new product — but any review still telling you to price Horizons as a standalone subscription is out of date.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            There are two modes, and the confusion in most write-ups comes from not separating them.{" "}
                            <strong className="text-white">Agentic mode</strong> is the old Horizons: you describe a web app in plain language — &quot;a
                            booking page for my salon with a contact form&quot; — and it builds it, then you refine with follow-up prompts. It is good
                            for dashboards, booking flows and MVPs where the point is to have something working this week.{" "}
                            <strong className="text-white">Manual mode</strong> is the old visual editor: drag, drop, edit in place, good for a standard
                            business site, blog or small store where you already know what it should look like.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The honest caveat is the credit model. Building with AI consumes credits, and a build that goes wrong burns credits on the
                            fix loop — heavy iteration is where the cost shows up, not the first generation. Worth knowing before you commit:{" "}
                            <strong className="text-white">AI credits are listed as non-refundable</strong> in Hostinger&apos;s refund policy, even
                            though the hosting plan around them is covered by the 30-day guarantee. One genuinely nice side effect of the architecture is
                            that AI Builder sites are not file-based, so they do not consume your plan&apos;s inode allowance at all.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">Who it&apos;s for:</strong> non-coders who want to ship an idea fast — a founder validating an
                            MVP, a local business that needs a one-page site with a form, a creator selling a digital product. It removes the two things
                            that actually stop those people: writing code and configuring hosting.
                        </p>
                        <p className="text-gray-300 leading-8">
                            <strong className="text-white">Who it&apos;s not for:</strong> anyone who wants control. Custom plugins, your own database
                            schema, code you can pick up and move to another host later — none of that is what an AI builder is for. On the same hosting
                            plan you could instead run WordPress, own every file, and move the whole thing elsewhere in an afternoon. That path is in my{" "}
                            <Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger WordPress hosting guide
                            </Link>. Anything with real custom logic behind it still needs a developer.
                        </p>
                        <p className="text-gray-300 leading-8">
                            AI Builder changed both its name and its shape inside a single year, and credit allowances move with the plans, so check{" "}
                            <a href={REFERRAL_URL} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                what the current plans include on Hostinger
                            </a>{" "}
                            before you budget around it. The 30-day money-back guarantee on the hosting plan still applies either way.
                        </p>
                    </section>

                    {/* Why so cheap */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Why is Hostinger so cheap? (and what gets cut to do it)</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Hostinger is cheap because you pay four years upfront, because it packs more sites per server than premium hosts, and because
                            renewals — not sign-ups — are where it makes its money. There are four concrete mechanisms:
                        </p>
                        <ul className="space-y-3 text-gray-300 leading-7 mb-4">
                            <li>
                                <strong className="text-white">1. The 48-month upfront payment.</strong> You hand over four years of revenue on day one.
                                That is effectively an interest-free loan to the company, and the discount is what it pays you for it.
                            </li>
                            <li>
                                <strong className="text-white">2. Higher density on shared servers.</strong> More accounts per machine means a lower cost
                                per account — and it is exactly why the CPU, RAM and inode caps in the section above exist. The caps are not an oversight;
                                they are the business model.
                            </li>
                            <li>
                                <strong className="text-white">3. No cPanel licence, own hardware.</strong> hPanel is built in-house, so there is no
                                per-account control-panel licence to pass on to you. The hardware is AMD EPYC in HPE and Dell chassis with NVMe storage
                                and 1 Gbps networking, bought at scale.
                            </li>
                            <li>
                                <strong className="text-white">4. AI-first support.</strong> Kodee answering first and resolving around half of chats
                                keeps the headcount — and therefore the price — down. You feel that trade-off on the day you have a hard problem.
                            </li>
                        </ul>
                        <p className="text-gray-300 leading-8">
                            The conclusion a review owes you: nothing here is a scam. But &quot;cheap&quot; is paid for with density, hard resource caps
                            and a renewal price roughly three to four times the intro rate — and knowing that going in is the difference between a good
                            purchase and an angry one.
                        </p>
                    </section>

                    {/* vs rivals — compact */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger vs GoDaddy vs Bluehost — the short version</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            These three are what Indian buyers cross-shop, and the full head-to-head lives in its own post. Here is the compact version:
                            four things to compare, and what Hostinger&apos;s answer actually is.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="bg-white/[0.06] text-white">
                                        <th className="px-4 py-3 font-semibold">What to compare</th>
                                        <th className="px-4 py-3 font-semibold">Hostinger&apos;s answer</th>
                                        <th className="px-4 py-3 font-semibold">Why it decides the purchase</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Entry price</td>
                                        <td className="px-4 py-3">₹69/mo on a 48-month term, GST extra</td>
                                        <td className="px-4 py-3">Compare like for like — a rival&apos;s monthly price is not the same product as a four-year term</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Renewal multiple</td>
                                        <td className="px-4 py-3">Roughly 3-4x (₹149 → ₹449)</td>
                                        <td className="px-4 py-3">Every cheap host does this; the only question is how big the jump is and when it lands</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Support channels</td>
                                        <td className="px-4 py-3">24/7 chat + email, AI first, no phone</td>
                                        <td className="px-4 py-3">If you want to phone someone, this is a genuine reason to pay a rival more</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-3 text-white font-semibold">Control panel</td>
                                        <td className="px-4 py-3">hPanel, in-house, no cPanel</td>
                                        <td className="px-4 py-3">Easier for beginners; a small relearn if your workflow is built around cPanel</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            The full comparison, with each host&apos;s current pricing side by side, is in{" "}
                            <Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger vs GoDaddy vs Bluehost 2026
                            </Link>
                            . If your budget is the hard constraint rather than the brand, start with{" "}
                            <Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                cheap web hosting under ₹200 in India
                            </Link>.
                        </p>
                    </section>

                    {/* Before you buy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">6 things I would tell you before you click buy</h2>
                        <ol className="space-y-4 text-gray-300 leading-7 mb-4 list-decimal list-inside">
                            <li>
                                <strong className="text-white">18% GST is added on top of every price you see.</strong> ₹69/mo bills at about ₹81/mo, and
                                a ₹7,152 four-year Premium term lands near ₹8,439. Budget with tax in.
                            </li>
                            <li>
                                <strong className="text-white">Choose the India (Mumbai) data centre during setup.</strong> Changing it later means
                                migrating the site again, and it is the single biggest lever on load time for Indian visitors.
                            </li>
                            <li>
                                <strong className="text-white">Untick the paid add-ons at checkout.</strong> You do not need a paid SSL certificate or an
                                SEO toolkit on day one — free SSL is included, and those add-ons are also the least refundable things in the cart.
                            </li>
                            <li>
                                <strong className="text-white">The free domain is free for year one only.</strong> A .com renews at roughly ₹1,000-1,400.
                                Factor that into year two, not year one — see{" "}
                                <Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Hostinger domain prices in India
                                </Link>{" "}
                                and{" "}
                                <Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    the best domain registrars in India
                                </Link>.
                            </li>
                            <li>
                                <strong className="text-white">Free business email is year-one only too, and the free tier is small.</strong> Hostinger
                                Mail&apos;s paid tiers start around ₹29/mo per mailbox (5 GB) and go to ₹79/mo (50 GB); heavy email users should budget
                                for that or run Google Workspace instead.
                            </li>
                            <li>
                                <strong className="text-white">Open the discount link before you add anything to the cart.</strong> The extra 20% applies
                                to the sale price of a new purchase and can never be applied to a renewal — the stacking order is explained step by step in{" "}
                                <Link href="/blog/how-to-get-hostinger-90-off-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    how to get 90% off on Hostinger
                                </Link>.
                            </li>
                        </ol>
                    </section>

                    {/* Who should buy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Should you use Hostinger? (by situation)</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["📝 Blogger / student / portfolio", "Yes — Single or Premium", "₹69/mo Single is the cheapest reliable way to get one site online; Premium if you want three."],
                                ["🛒 WooCommerce / small store", "Yes — Unlimited", "NVMe speed, daily backups and a bigger inode allowance are what a store actually needs."],
                                ["🧑‍💻 Developer with custom apps", "Yes — KVM VPS", "Root access, dedicated RAM, Docker-ready, no inode cap. Shared hosting can't do this."],
                                ["🏢 Enterprise / high-stakes WP", "Maybe not", "If you need fully-managed enterprise WordPress with an SLA and a phone line, a premium managed host fits better."],
                            ].map(([who, verdict, why]) => (
                                <div key={who} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="text-lg font-semibold text-white mb-1">{who}</h3>
                                    <p className="text-primary-400 font-bold mb-2">→ {verdict}</p>
                                    <p className="text-sm text-gray-300 leading-6">{why}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Who should NOT buy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Who should NOT buy Hostinger</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            An honest review has to include this. Skip Hostinger if any of these describe you:
                        </p>
                        <ul className="space-y-3 text-gray-300 leading-7 mb-4">
                            <li>
                                ❌ <strong className="text-white">You need fully-managed enterprise WordPress.</strong> If your business dies when the site is
                                down for ten minutes and you want an SLA, staging-first deploys and a dedicated engineer on chat, a premium managed host is
                                worth its 10x price. Hostinger is value hosting, not white-glove hosting.
                            </li>
                            <li>
                                ❌ <strong className="text-white">You refuse to commit long-term.</strong> Hostinger&apos;s value lives entirely in the 24–48 month
                                sale terms. Pay month-to-month and you&apos;re near the regular rate — at that point other hosts compete.
                            </li>
                            <li>
                                ❌ <strong className="text-white">You want phone support.</strong> There is no phone number, in India or anywhere else. Chat and
                                email are 24/7 and an AI agent answers first. If picking up a phone is how you solve problems, this will frustrate you monthly.
                            </li>
                            <li>
                                ❌ <strong className="text-white">You are running something resource-hungry on a shared plan.</strong> A big media library, a
                                heavy membership site or a mailbox-stuffed business will meet the inode and CPU caps. That is a VPS or Cloud purchase, and
                                pretending otherwise just buys you 503 errors.
                            </li>
                            <li>
                                ❌ <strong className="text-white">You expect the intro price forever.</strong> Renewals run roughly three to four times the sale rate.
                                If reading that makes you angry rather than making you buy a longer term, this pricing model will frustrate you.
                            </li>
                        </ul>
                        <p className="text-gray-300 leading-8">
                            Still unsure? I&apos;ve compared it head-to-head with the two hosts Indians most often cross-shop in{" "}
                            <Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger vs GoDaddy vs Bluehost
                            </Link>
                            , and ranked the whole market in my{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                best web hosting in India 2026
                            </Link>{" "}
                            roundup — Hostinger wins on value there, but not in every category.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">Try Hostinger risk-free for 30 days</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Free domain, free SSL, 30-day money-back guarantee on the hosting plan. The link applies my extra discount automatically —
                                deploy your real site in week one and judge it for yourself.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                See Live Prices with Discount Applied →
                            </a>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger review</h2>
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
                        <h2 className="text-2xl font-bold text-white mb-4">Keep reading (hosting series)</h2>
                        <ul className="space-y-3 text-primary-400">
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Plans &amp; Pricing in India 2026 — which plan to buy</Link></li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Renewal Price in India — the real cost after year one</Link></li>
                            <li><Link href="/blog/hostinger-wordpress-hosting-india-2026" className="hover:text-primary-300 underline underline-offset-4">Is Hostinger Good for WordPress? — setup, speed &amp; honest limits</Link></li>
                            <li><Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS Plans in India — specs, prices &amp; renewals</Link></li>
                            <li><Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost — 2026 India comparison</Link></li>
                            <li><Link href="/blog/how-to-get-hostinger-90-off-2026" className="hover:text-primary-300 underline underline-offset-4">How to Get 90% OFF on Hostinger — the discount-stacking steps</Link></li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Domain Price in India 2026 — .com, .in &amp; .store costs</Link></li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="hover:text-primary-300 underline underline-offset-4">7 Best Web Hosting Services in India (2026)</Link></li>
                        </ul>
                    </section>
                    {/* Cluster links — added so these articles are not internal-link orphans. */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/hostinger-55-per-month-offer" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">The ₹55/mo offer</Link> — exact referral-applied pricing for every plan.</li>
                            <li><Link href="/blog/best-vps-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best VPS hosting in India</Link> — if shared hosting is not enough.</li>
                            <li><Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cheap web hosting under ₹200</Link> — every host that fits the budget, not just this one.</li>
                            <li><Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hosting cost calculator</Link> — total cost across the term and the renewal.</li>
                        </ul>
                    </section>


                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Review</h3>
                        <ShareButtons url={CANONICAL} title="Hostinger Review 2026: Honest Developer Verdict" />
                    </div>
                </article>
            </main>
        </>
    );
}
