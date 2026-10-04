import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import HostingerCta from "@/components/HostingerCta";
import RelatedPosts from "@/components/RelatedPosts";
import { inr, withCode } from "@/data/hostinger-vps";

const CANONICAL = "https://mohitkoli.in/blog/hostinger-agency-hosting-india-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/hostinger-cloud-hosting-india-2026.png";
const VERIFIED = "4 October 2026";
const VERIFIED_ISO = "2026-10-04T00:00:00.000Z";
const REF_AGENCY = "https://www.hostinger.com/in/pro?REFERRALCODE=mohitkoli";

const TITLE = "Agency Hosting ₹1,999/mo: 100 Client Sites, White-Label Panel";
const DESCRIPTION =
    "Agency Startup ₹2,499/mo par — 100 websites, 6 CPU, 12 GB RAM, aur client ko Hostinger ka naam dikhta hi nahi. Renewal ₹3,499 ka sach bhi. Oct 2026 verified.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        "hostinger agency hosting",
        "hostinger pro hosting",
        "hostinger reseller program",
        "white label hosting india",
        "reseller hosting india price",
        "client sites ek plan me",
        "agency hosting india 2026",
        "hostinger agency startup price",
        "multiple websites hosting india",
        "unbranded client dashboard hosting",
        "hostinger agency vs vps",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        publishedTime: VERIFIED_ISO,
        modifiedTime: VERIFIED_ISO,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger Agency hosting plans aur price India me" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Agency Hosting ₹1,999/mo: 100 Client Sites",
        description: "Agency Startup ka poora hisaab — specs, renewal, aur kab ye VPS se behtar hai.",
        images: [IMAGE],
    },
};

/**
 * Sirf Agency Startup ke numbers yahan hain, kyunki 4 October 2026 ko Hostinger ke
 * /in/pro page par Growth aur Professional ke daam server-rendered nahi the — wo tab
 * ke peeche JavaScript se aate hain. Bina dekhe daam likhna is site par allowed nahi.
 */
const STARTUP = {
    sale: 2499,
    regular: 4999,
    off: 50,
    renewal: 3499,
    termMonths: 24,
    cpu: 6,
    ramGb: 12,
    diskGb: 300,
    inodes: "4,000,000",
    sites: 100,
    mailboxesPerSite: 10,
};

const CODE_PRICE = withCode(STARTUP.sale);
const CODE_OFF = Math.round((1 - CODE_PRICE / STARTUP.regular) * 100);
const TERM_TOTAL = STARTUP.sale * STARTUP.termMonths;
const TERM_TOTAL_CODE = CODE_PRICE * STARTUP.termMonths;

const INCLUDED = [
    "Full website isolation — ek client ki site girne par baaki par asar nahi",
    "Access sharing per site — har client ko sirf uski site ka access",
    "Unbranded client dashboard — client ko Hostinger ka naam dikhta hi nahi",
    "Proactive monitoring alerts",
    "Dedicated IP address",
    "Daily backups",
    "Unlimited CDN aur SSL",
    "Priority 24/7 expert support",
    "Managed WordPress aur WooCommerce hosting",
    "30-day money-back guarantee",
];

const DEV_TOOLS = [
    "SSH aur WP-CLI",
    "SFTP account management (team ke liye)",
    "PHP version management per site",
    "Free staging environments",
    "1-click website cloning",
    "Redirects Manager (SEO bachane ke liye)",
    "Cron jobs",
    "Free malware scanning",
    "Unlimited collaborators",
];

const FAQ = [
    {
        q: "Hostinger Agency hosting ka price kitna hai India me?",
        a: "Agency Startup ₹2,499/mo hai, 24-month term par, aur regular rate ₹4,999/mo se 50% kam. Referral code lagane par ₹1,999.20/mo pad jaata hai. Renewal par ₹3,499/mo ho jaata hai. Growth aur Professional naam ke do aur plans hain, par 4 October 2026 ko unke daam Hostinger ke page par tab ke peeche thay — isliye yahan nahi likhe. Unhe seedha Hostinger ke page par dekh lijiye.",
    },
    {
        q: "Agency Startup me kitni websites host kar sakte hain?",
        a: "100 websites. Hostinger apne page par ye bhi likhta hai ki Agency hosting par ek hi plan par 300 tak sites chal sakti hain — wo unke upar wale tier ki baat hai. Startup par number 100 hai, aur har website ke liye 10 mailbox ek saal free milte hain.",
    },
    {
        q: "Unbranded dashboard ka matlab kya hai?",
        a: "Client jab apni site ka panel kholega to usme Hostinger ki branding nahi dikhegi — saaf, professional view milega. Agency ke liye ye matter karta hai, kyunki client ko ye nahi lagta ki aap bas bich me baithe ho. Ye feature Hostinger ne naya jodha hai aur Agency plans me included hai.",
    },
    {
        q: "Client ki site ka access kaise milta hai?",
        a: "Access Sharing feature se client ko add karte hain, phir client ko access request verify karni padti hai. Uske baad aap unki services aur websites apne hi hPanel se manage kar sakte hain. Hostinger ka apna FAQ kehta hai ki aap jitne chaahe clients add kar sakte hain — alag-alag panel me ghoomne ki zaroorat nahi.",
    },
    {
        q: "Agency plan lein ya VPS?",
        a: "VPS sasta padta hai — KVM 4 ₹1,099/mo par 4 vCPU aur 16 GB RAM deta hai, jabki Agency Startup ₹2,499/mo par 6 CPU aur 12 GB. Par VPS par sab kuch aapko khud setup aur maintain karna padta hai, aur client ko dikhane layak koi panel nahi hota. Agency plan managed hai, isolation deta hai, aur unbranded client dashboard deta hai. Agar aapke paas 10+ client sites hain aur unhe access dena padta hai, to Agency plan ka paisa wasool hai. Sirf apni sites hain to VPS behtar sauda hai.",
    },
    {
        q: "Renewal par kitna badhega?",
        a: "₹2,499 se ₹3,499 per month — lagbhag 40% ka jump. Baaki Hostinger products ke mukable ye jump kaafi halka hai (VPS aur shared par bill lagbhag doguna hota hai). Phir bhi, 24 mahine baad ka bill aaj hi calendar me likh lijiye. Renewal par koi coupon ya referral discount nahi lagta.",
    },
    {
        q: "Poora paisa ek saath dena padta hai?",
        a: "Haan. ₹2,499/mo ka matlab 24 mahine ka ₹59,976 upfront. Hostinger apne page par saaf likhta hai ki checkout par monthly rate × mahine + taxes ek saath liya jaata hai. Aur daam GST ke bina hain — 18% upar jodkar sochiye.",
    },
    {
        q: "Kya ye reseller hosting hai?",
        a: "Technically nahi. Reseller hosting me aap Hostinger ka hosting apne naam se bech kar alag billing karte hain. Agency hosting me aap client ki sites apne plan par rakhte hain aur unhe unbranded panel dete hain. Zyadatar freelancers aur chhoti agencies ko jo chahiye hota hai, wo ye wala hai — alag billing system sambhalne ka jhanjhat nahi.",
    },
    {
        q: "Paise wapas mil sakte hain?",
        a: "Hostinger 30-day money-back guarantee deta hai aur Agency page par “cancel anytime” likhta hai. Pehle mahine me ek client site daal kar panel chala kar dekh lijiye. Domain jaise kuch items refund se bahar hote hain — current refund policy ek baar padh lijiye.",
    },
    {
        q: "Referral code se kitna farak padta hai?",
        a: "Sale price par extra 20%. ₹2,499 se ₹1,999.20 — yaani regular ₹4,999 se 60% kam. 24 mahine ka total ₹59,976 se ₹47,980.80 ho jaata hai, matlab lagbhag ₹12,000 ki bachat. Sirf nayi kharid par, renewal par nahi.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description: DESCRIPTION,
        image: IMAGE,
        datePublished: VERIFIED_ISO,
        dateModified: VERIFIED_ISO,
        author: { "@id": "https://mohitkoli.in/#person" },
        publisher: { "@id": "https://mohitkoli.in/#person" },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        articleSection: "Hosting",
        inLanguage: "hi-Latn",
    },
    {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Hostinger Agency Startup Hosting (India)",
        description: "Agency hosting plan — 100 websites, unbranded client dashboard, full site isolation.",
        brand: { "@type": "Brand", name: "Hostinger" },
        offers: {
            "@type": "Offer",
            price: STARTUP.sale,
            priceCurrency: "INR",
            url: REF_AGENCY,
            availability: "https://schema.org/InStock",
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Agency Hosting", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function HostingerAgencyHosting() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Agency Hosting</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                            Agency Hosting · India · {VERIFIED} ko verified
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                            Agency Hosting ₹1,999/mo: 100 Client Sites Aur Client Ko Hostinger Ka Naam Tak Nahi Dikhta
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Client ke 8-10 sites alag-alag hosting accounts me padi hain, har ek ka password alag, aur
                            har baar panel badal kar login karna padta hai — ye dard har us bande ka hai jo doosron ki
                            sites sambhalta hai. Hostinger ka Agency plan isi ke liye hai. Yahan uska seedha hisaab
                            hai: asli price, renewal, kya milta hai, aur kab ye VPS se behtar sauda hai.
                        </p>
                    </header>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">30 second ka jawab</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">Agency Startup:</strong> {inr(STARTUP.sale)}/mo, code ke saath <strong className="text-white">{inr(CODE_PRICE)}/mo</strong> — regular {inr(STARTUP.regular)} se {CODE_OFF}% kam.</li>
                            <li><strong className="text-white">Kya milta hai:</strong> {STARTUP.sites} websites, {STARTUP.cpu} CPU cores, {STARTUP.ramGb} GB RAM, {STARTUP.diskGb} GB NVMe.</li>
                            <li><strong className="text-white">Asli khoobi:</strong> unbranded client dashboard — client ko Hostinger ki branding dikhti hi nahi.</li>
                            <li><strong className="text-amber-300">Catch 1:</strong> renewal {inr(STARTUP.renewal)}/mo — lagbhag 40% upar.</li>
                            <li><strong className="text-amber-300">Catch 2:</strong> 24 mahine ka {inr(TERM_TOTAL)} ek saath dena padta hai, aur GST alag.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Agency Startup — poora hisaab</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5"><td className="p-4 font-semibold text-white">Sale price</td><td className="p-4">{inr(STARTUP.sale)}/mo <span className="text-gray-500 line-through ml-2">{inr(STARTUP.regular)}</span> <span className="text-primary-300 font-semibold ml-1">{STARTUP.off}% off</span></td></tr>
                                    <tr className="border-b border-white/5"><td className="p-4 font-semibold text-white">Code ke saath</td><td className="p-4 text-primary-300 font-semibold">{inr(CODE_PRICE)}/mo — regular se {CODE_OFF}% kam</td></tr>
                                    <tr className="border-b border-white/5"><td className="p-4 font-semibold text-white">Renewal</td><td className="p-4 text-amber-300">{inr(STARTUP.renewal)}/mo</td></tr>
                                    <tr className="border-b border-white/5"><td className="p-4 font-semibold text-white">Term</td><td className="p-4">{STARTUP.termMonths} mahine — total {inr(TERM_TOTAL)} (code ke saath {inr(TERM_TOTAL_CODE)})</td></tr>
                                    <tr className="border-b border-white/5"><td className="p-4 font-semibold text-white">Websites</td><td className="p-4">{STARTUP.sites}</td></tr>
                                    <tr className="border-b border-white/5"><td className="p-4 font-semibold text-white">Resources</td><td className="p-4">{STARTUP.cpu} CPU cores · {STARTUP.ramGb} GB RAM · {STARTUP.diskGb} GB NVMe · {STARTUP.inodes} inodes</td></tr>
                                    <tr><td className="p-4 font-semibold text-white">Email</td><td className="p-4">{STARTUP.mailboxesPerSite} mailboxes per website — ek saal free</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Saare rate 24-month term ke aur GST ke bina hain. Hostinger apne page par likhta hai ki
                            checkout par monthly rate × mahine + taxes ek saath liya jaata hai.
                        </p>
                        <p className="mt-3 text-sm text-gray-400">
                            Growth aur Professional naam ke do aur Agency plans hain. {VERIFIED} ko unke daam Hostinger
                            ke page par tab ke peeche thay aur khule nahi — isliye yahan nahi likhe. Andaaza lagakar
                            number likhne se behtar hai seedha unke page par dekh lena.
                        </p>
                    </section>

                    <HostingerCta
                        href={REF_AGENCY}
                        heading="Agency plan par extra 20%"
                        sub={`Checkout par code daalne se sale price par aur 20% kat jaata hai. Agency Startup ${inr(STARTUP.sale)} se ${inr(CODE_PRICE)} — 24 mahine me lagbhag ${inr(TERM_TOTAL - TERM_TOTAL_CODE)} ki bachat.`}
                        buttonLabel="Agency plans dekhein"
                    />

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Kya-kya included hai</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Agency ke liye</h3>
                                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside leading-7">
                                    {INCLUDED.map((f) => <li key={f}>{f}</li>)}
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Developer tools</h3>
                                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside leading-7">
                                    {DEV_TOOLS.map((f) => <li key={f}>{f}</li>)}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Agency plan lein ya VPS — seedhi tulna</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Cheez</th><th className="p-4">Agency Startup</th><th className="p-4">KVM 4 (VPS)</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4">Price</td><td className="p-4">₹2,499/mo</td><td className="p-4 text-primary-300">₹1,099/mo</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">CPU / RAM</td><td className="p-4">6 cores / 12 GB</td><td className="p-4">4 vCPU / 16 GB</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Setup</td><td className="p-4 text-primary-300">Managed — ready</td><td className="p-4">Khud karna padta hai</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Client ko access</td><td className="p-4 text-primary-300">Per-site, unbranded panel</td><td className="p-4">Kuch nahi — khud banao</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Site isolation</td><td className="p-4 text-primary-300">Included</td><td className="p-4">Khud setup karna padega</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Renewal</td><td className="p-4">₹3,499/mo (+40%)</td><td className="p-4 text-amber-300">₹2,399/mo (+118%)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Agency plan lein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm leading-7">
                                    <li>10+ client sites sambhalte hain</li>
                                    <li>Client ko apna panel dena padta hai</li>
                                    <li>Server maintain karne me time nahi dena</li>
                                    <li>Ek client ki site girne par baaki safe rehni chahiye</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">VPS lein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm leading-7">
                                    <li>Sites aapki apni hain, client ki nahi</li>
                                    <li>Linux aata hai aur setup karne me dikkat nahi</li>
                                    <li>Docker, Node.js ya custom stack chahiye</li>
                                    <li>₹1,400/mo ka fark matter karta hai</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            KVM 4 ke poore specs aur renewal ka hisaab{" "}
                            <Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">yahan likha hai</Link>.
                        </p>
                    </section>

                    <section className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Kharidne se pehle teen baatein</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">₹59,976 ek saath jaayega.</strong> ₹2,499/mo dikhta hai, par 24 mahine ka poora amount card se ek baar me katega. GST alag.</li>
                            <li><strong className="text-white">Ye reseller hosting nahi hai.</strong> Aap client ko alag se bill nahi kar sakte Hostinger ke system se — sites aapke hi plan par rehti hain. Zyadatar freelancers ke liye yahi kaafi hota hai, par agar aap hosting bech kar paisa kamana chahte hain to ye wo product nahi hai.</li>
                            <li><strong className="text-white">Client ko access verify karna padta hai.</strong> Aap request bhejte hain, client approve karta hai. Jo client email hi nahi kholte, unke saath ye step atak jaata hai — pehle se bata dijiye.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger Agency hosting</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <summary className="cursor-pointer font-semibold text-white marker:text-primary-400">{item.q}</summary>
                                    <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <RelatedPosts slug="hostinger-agency-hosting-india-2026" />

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                </article>
            </main>
        </>
    );
}
