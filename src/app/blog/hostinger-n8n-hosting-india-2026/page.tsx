import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import HostingerCta from "@/components/HostingerCta";
import { VPS_PLANS } from "@/data/hostinger-vps";
import { OFFERS_VERIFIED, OFFERS_VERIFIED_ISO, REF, inr, offWithCode, priceWithCode } from "@/data/hostinger-offers";
import RelatedPosts from "@/components/RelatedPosts";

const CANONICAL = "https://mohitkoli.in/blog/hostinger-n8n-hosting-india-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/best-vps-hosting-india-2026.png";
const TITLE = "n8n Self-Host Sirf ₹479/mo: Unlimited Workflows, Fix Bill";
const DESCRIPTION =
    "Har VPS plan me n8n free included. KVM 1 ₹479.20/mo par, execution ke hisaab se paisa nahi. Kaunsa plan lena hai aur kya galat ho sakta hai — Sept 2026 verified.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        "n8n hosting india",
        "n8n self hosted vps",
        "hostinger n8n",
        "n8n kaise host kare",
        "n8n hosting price india",
        "sasta n8n hosting",
        "self hosted n8n india",
        "n8n vps india 2026",
        "ai automation hosting india",
        "n8n vs make vs zapier",
        "n8n queue mode hosting",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        publishedTime: OFFERS_VERIFIED_ISO,
        modifiedTime: OFFERS_VERIFIED_ISO,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger VPS par self-hosted n8n ka price India me" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "n8n Self-Host Sirf ₹479/mo: Fix Bill, Unlimited Workflows",
        description: "Hostinger ke har VPS plan me n8n included. Kaunsa plan lena hai aur kyun.",
        images: [IMAGE],
    },
};

const PLAN_COPY: Record<string, { best: string; take: string; highlight: boolean }> = {
    "KVM 1": {
        best: "Seekhne ke liye, 5-10 simple workflows",
        take: "n8n chalane ke liye kaafi hai. Par 4 GB me n8n ke saath database aur Docker sab ek jagah — heavy nodes par jhatka lagega.",
        highlight: false,
    },
    "KVM 2": {
        best: "Client automation, 20-40 workflows, chhota business",
        take: "Hostinger khud isko small-to-medium business ke liye ideal batata hai. Pehla serious plan yahi hai.",
        highlight: true,
    },
    "KVM 4": {
        best: "Queue mode, heavy workflows, ek saath kai clients",
        take: "Range ka sabse gehra discount (69%) aur 16 GB RAM — queue mode me worker alag chalane ke liye yahi chahiye.",
        highlight: false,
    },
    "KVM 8": {
        best: "Agency scale, bahut saare parallel executions",
        take: "Tabhi lein jab worker queue sach me bhar rahi ho — renewal ₹4,399/mo hai.",
        highlight: false,
    },
};

const PLANS = VPS_PLANS.map((p) => ({ ...PLAN_COPY[p.name], ...p, code: priceWithCode(p), codeOff: offWithCode(p) }));

const FAQ = [
    {
        q: "Hostinger par n8n host karne ka kitna kharcha aata hai?",
        a: "n8n ke liye alag se koi paisa nahi lagta — Hostinger ke har KVM VPS plan me self-hosted n8n included hai. Aap sirf VPS ka paisa dete hain: KVM 1 ₹599/mo, KVM 2 ₹799/mo, KVM 4 ₹1,099/mo aur KVM 8 ₹2,199/mo. Referral code lagane par KVM 1 ₹479.20/mo par aa jaata hai. Prices 20 September 2026 ko verify kiye gaye, GST alag hai.",
    },
    {
        q: "Self-hosted n8n me execution ke hisaab se paisa lagta hai?",
        a: "Nahi. Self-host karne ka matlab hi yahi hai — aap server ka fix kiraya dete hain, workflow chalne ka nahi. Hostinger apne page par “unlimited workflows” likhta hai. Asli limit aapke server ki RAM aur CPU hai: jab tak box jhel raha hai, jitne chaahe executions chalayein.",
    },
    {
        q: "Kaunsa VPS plan n8n ke liye lena chahiye?",
        a: "Seekhne aur chhote workflows ke liye KVM 1 kaafi hai. Client ka kaam ya 20-40 workflows chalane hain to KVM 2 lein — Hostinger khud isko small-to-medium business ke liye ideal batata hai (2 vCPU, 8 GB RAM, 100 GB NVMe). Queue mode chalana hai jahan worker alag process me chalte hain, to KVM 4 se shuru karein.",
    },
    {
        q: "Install karna mushkil hai kya?",
        a: "Nahi, kyunki Hostinger n8n ka ready template deta hai — VPS banate waqt template chun lijiye aur n8n pehle se install aa jaata hai. Teen options milte hain: simple n8n, n8n with queue mode, aur ek template jisme 100+ pehle se bane workflows aate hain. Command line ka gyaan chahiye hi nahi, initial setup ke liye.",
    },
    {
        q: "Queue mode kya hota hai aur kab chahiye?",
        a: "Default n8n sab kuch ek hi process me chalata hai. Queue mode me executions ek queue me jaate hain aur alag worker process unhe uthate hain. Faayda: ek bhaari workflow poore instance ko block nahi karta. Zaroorat tab padti hai jab parallel executions bahut ho jaayein — chhote setup me iski koi zaroorat nahi, aur ye extra RAM khaata hai.",
    },
    {
        q: "n8n self-host karna cloud tools se sasta padta hai?",
        a: "Volume par depend karta hai. Cloud automation tools aam taur par per-execution ya per-task charge karte hain, yaani jitna zyada automate karein utna zyada bill. Self-hosted n8n me bill fix hai — KVM 1 par ₹479.20/mo, chahe 100 executions chalein ya 100,000. Isliye jitna zyada aap automate karenge, self-hosting utna zyada faayde ka sauda hoga. Kam volume par cloud aasan padta hai kyunki server maintain nahi karna padta.",
    },
    {
        q: "Server maintain kaun karega?",
        a: "Aap. Ye unmanaged VPS hai — OS updates, n8n version upgrade, backup verify karna sab aapki zimmedari hai. Hostinger malware scanner, firewall management, weekly backups aur snapshots deta hai, jisse kaam aasan ho jaata hai, par server ki sehat aapke haath me hai. Ye seedha bol dena zaroori hai: agar Linux bilkul nahi aata to pehle thoda seekh lein.",
    },
    {
        q: "Renewal par kitna badhega?",
        a: "KVM 1 ₹599 se ₹999/mo, KVM 2 ₹799 se ₹1,199, KVM 4 ₹1,099 se ₹2,399 aur KVM 8 ₹2,199 se ₹4,399. KVM 4 ka bill doguna se bhi zyada ho jaata hai. Renewal par koi coupon ya referral discount nahi chalta.",
    },
    {
        q: "Data India me rahega?",
        a: "Hostinger ke VPS regions North America, Europe, Asia aur South America hain. Asia chun sakte hain, par 20 September 2026 tak Hostinger apne page par India-specific data centre nahi batata. Agar aapka data India me hi rehna zaroori hai (compliance ki wajah se), to kharidne se pehle support se likhit me confirm kar lein.",
    },
    {
        q: "Windows par n8n chal jaayega?",
        a: "Hostinger ke KVM VPS Linux ke liye hain — Ubuntu, Debian, AlmaLinux, Rocky Linux, CentOS wagairah. n8n waise bhi Linux par hi sabse aaram se chalta hai, aur Hostinger ke templates Linux ke liye hi bane hain.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description: DESCRIPTION,
        image: IMAGE,
        datePublished: OFFERS_VERIFIED_ISO,
        dateModified: OFFERS_VERIFIED_ISO,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        articleSection: "Hosting",
        inLanguage: "hi-Latn",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "n8n Self-Hosting", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function HostingerN8n() {
    const entry = PLANS[0];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">n8n Self-Hosting</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                            AI Automation · India · {OFFERS_VERIFIED} ko verified
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                            n8n Self-Host Sirf ₹479/mo: Unlimited Workflows, Bill Fix
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Automation tools ka sabse bada dard ye hai ki jitna zyada kaam automate karein, bill utna hi
                            badhta jaata hai — kyunki charge har execution par lagta hai. Self-hosted n8n me ulta hota
                            hai: server ka kiraya fix, workflows jitne marzi. Aur Hostinger ke har VPS plan me n8n
                            pehle se included hai, alag paisa nahi.
                        </p>
                    </header>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">30 second ka jawab</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">n8n ka alag paisa nahi lagta</strong> — Hostinger ke har KVM VPS plan me included hai.</li>
                            <li><strong className="text-white">Sabse sasta shuruaat:</strong> {entry.name} — {inr(entry.sale)}/mo, code ke saath <strong className="text-white">{entry.code}/mo</strong> ({entry.codeOff}% off regular {inr(entry.regular)} se).</li>
                            <li><strong className="text-white">Serious kaam ke liye:</strong> KVM 2 — 2 vCPU, 8 GB RAM, Hostinger khud isko small-to-medium business ke liye ideal kehta hai.</li>
                            <li><strong className="text-white">Install ready hai:</strong> teen template milte hain — simple n8n, queue mode wala, aur 100+ ready workflows wala.</li>
                            <li><strong className="text-amber-300">Catch:</strong> server unmanaged hai. Updates aur backups aapko dekhne padenge.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Kaunsa plan — n8n ke hisaab se</h2>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {PLANS.map((p) => (
                                <div
                                    key={p.name}
                                    className={`rounded-2xl border p-6 ${p.highlight ? "border-primary-500/50 bg-primary-500/5" : "border-white/10 bg-white/5"}`}
                                >
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <h3 className="text-xl font-bold text-white">{p.name}</h3>
                                        {p.highlight && (
                                            <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-bold text-primary-300">SABSE SENSIBLE</span>
                                        )}
                                    </div>
                                    <p className="mb-1">
                                        <span className="text-3xl font-bold text-white">{inr(p.sale)}</span>
                                        <span className="text-gray-400">/mo</span>{" "}
                                        <span className="text-gray-500 line-through">{inr(p.regular)}</span>{" "}
                                        <span className="text-primary-300 font-semibold">{p.off}% off</span>
                                    </p>
                                    <p className="text-sm text-primary-300 font-semibold mb-4">
                                        Code ke saath {p.code}/mo — regular se {p.codeOff}% kam
                                    </p>
                                    <ul className="space-y-1 text-sm text-gray-300 mb-4">
                                        <li>{p.vcpu} vCPU core{p.vcpu > 1 ? "s" : ""}</li>
                                        <li>{p.ramGb} GB RAM</li>
                                        <li>{p.diskGb} GB NVMe</li>
                                        <li>{p.bandwidthTb} TB bandwidth</li>
                                    </ul>
                                    <p className="text-sm text-gray-400 mb-2"><strong className="text-gray-200">Kiske liye:</strong> {p.best}</p>
                                    <p className="text-sm text-gray-400 mb-2">{p.take}</p>
                                    <p className="text-sm text-amber-300/90">Renewal {inr(p.renewal)}/mo</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <HostingerCta
                        href={REF.n8n}
                        heading="n8n wale VPS par extra 20%"
                        sub="Checkout par code daalne se sale price par aur 20% kat jaata hai. KVM 1 ₹599 se ₹479.20, KVM 4 ₹1,099 se ₹879.20 — n8n dono me included."
                        buttonLabel="n8n VPS plans dekhein"
                    />

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Teen template — kaunsa chunein</h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Simple n8n</h3>
                                <p className="text-sm text-gray-300 leading-7">Default setup. Pehli baar chala rahe hain to yahi lein — sab kuch ek process me, samajhna aasan.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">n8n with queue mode</h3>
                                <p className="text-sm text-gray-300 leading-7">Executions queue me jaate hain, alag worker uthate hain. Tab lein jab parallel load zyada ho — extra RAM khaata hai.</p>
                            </div>
                            <div className="rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">100+ ready workflows</h3>
                                <p className="text-sm text-gray-300 leading-7">Pehle se bane workflows ke saath aata hai. Seekhne ke liye sabse tez rasta — chala kar dekhein, phir tod-mod karein.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Self-host kab faayde ka hai, kab nahi</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Self-host karein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm leading-7">
                                    <li>Executions ka volume badh raha hai aur per-task bill darava raha hai</li>
                                    <li>Client ka data apne server par rakhna hai</li>
                                    <li>Custom community nodes chahiye</li>
                                    <li>Thodi bahut Linux aati hai ya seekhne ka mann hai</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Self-host mat karein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm leading-7">
                                    <li>Mahine me ginti ke chand workflows chalte hain</li>
                                    <li>Server update-backup dekhne ka time nahi</li>
                                    <li>Automation band hone par business ruk jaata hai aur koi on-call nahi hai</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Seedhi baat</h2>
                        <p className="text-gray-300 leading-8">
                            Self-hosting ka sasta hona sirf paise ka hisaab nahi hai — aapka time bhi cost hai. Server
                            ek din chup-chaap band hoga, ya n8n ka version upgrade kuch tod dega, aur us din woh aapki
                            problem hogi. Hostinger malware scanner, firewall management, weekly backups aur snapshots
                            deta hai jo kaam aasan karte hain, par 20 September 2026 tak uske VPS page par koi uptime
                            SLA percentage likha nahi hai. Business-critical automation chala rahe hain to ye baat pehle
                            se maan kar chaliye.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — n8n self-hosting</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <summary className="cursor-pointer font-semibold text-white marker:text-primary-400">{item.q}</summary>
                                    <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS plans</Link> — wahi plans, poori specs aur renewal ka hisaab.</li>
                            <li><Link href="/blog/hostinger-vps-review-hindi-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger VPS ki poori kundali</Link> — Hinglish me, kaunsa plan lein aur kaunsa nahi.</li>
                            <li><Link href="/blog/hostinger-game-server-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Game server plans</Link> — wahi hardware, game panel ke saath.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                    <RelatedPosts slug="hostinger-n8n-hosting-india-2026" />
                </article>
            </main>
        </>
    );
}
