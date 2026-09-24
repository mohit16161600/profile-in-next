import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import HostingerCta from "@/components/HostingerCta";
import RelatedPosts from "@/components/RelatedPosts";
import {
    AI_CREDITS,
    OFFERS_VERIFIED,
    OFFERS_VERIFIED_ISO,
    REF,
    SHARED_PLANS,
    inr,
    offWithCode,
    priceWithCode,
} from "@/data/hostinger-offers";

const CANONICAL = "https://mohitkoli.in/blog/hostinger-ai-builder-se-website-kaise-banaye";
const IMAGE = "https://mohitkoli.in/assets/blog/how-to-build-ai-agent-no-code-2026.png";
const TITLE = "AI Se Website ₹119/mo Me: Par 5 Credits Ka Sach Pehle Padh Lein";
const DESCRIPTION =
    "Hostinger AI Builder prompt se site bana deta hai. Premium ₹119.20/mo, par AI credits one-time milte hain — har mahine nahi. Poora sach, Sept 2026 verified.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        "hostinger ai builder",
        "ai se website kaise banaye",
        "hostinger ai website builder price",
        "bina code website kaise banaye",
        "ai website builder india",
        "hostinger ai credits",
        "prompt se website banana",
        "hostinger website builder price india",
        "vibe coding website",
        "ai builder vs wordpress",
        "sasta website builder india",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        publishedTime: OFFERS_VERIFIED_ISO,
        modifiedTime: OFFERS_VERIFIED_ISO,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger AI Builder se website banane ka price India me" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Se Website ₹119/mo: 5 Credits Ka Sach",
        description: "Prompt likhein, site ban jaati hai. Par credits one-time hain — pehle ye samajh lein.",
        images: [IMAGE],
    },
};

/** AI Builder sirf Premium se upar ke plans par milta hai — Single is page par nahi aata. */
const BUILDER_PLANS = SHARED_PLANS.filter((p) => p.name in AI_CREDITS).map((p) => ({
    ...p,
    credits: AI_CREDITS[p.name],
    code: priceWithCode(p),
    codeOff: offWithCode(p),
}));

const FAQ = [
    {
        q: "Hostinger AI Builder ka price kitna hai?",
        a: "AI Builder alag se nahi bikta — ye hosting plan ke saath aata hai. Premium ₹149/mo, Unlimited ₹249/mo aur Cloud Startup ₹599/mo par milta hai, 48-month term par. Referral code lagane par ₹119.20, ₹199.20 aur ₹479.20 ho jaata hai. Renewal par ₹449, ₹649 aur ₹1,599 per month. Prices 20 September 2026 ko Hostinger ke India AI Builder pricing page se check kiye gaye, GST alag hai.",
    },
    {
        q: "AI credits har mahine milte hain ya ek baar?",
        a: "Ek baar. Hostinger apne pricing page par saaf likhta hai “one-time gift” — Premium me 5 credits aur Unlimited me 15 credits, sirf shuruaat me. Ye hi woh cheez hai jo zyadatar log samajhne me galti karte hain: ₹149/mo dene par har mahine 5 naye credits nahi aate. Khatam hone par aur credits khareedne padte hain.",
    },
    {
        q: "Credits khatam ho gaye to site band ho jaayegi?",
        a: "Nahi. Credits sirf AI se banane aur badalne ke liye lagte hain. Ek baar site ban gayi to woh normal hosting par chalti rehti hai, aur aap usse manually — editor se — jitna chaahe badal sakte hain. Credits khatam hone ka matlab bas itna hai ki AI se naya kuch generate nahi kar payenge.",
    },
    {
        q: "Aur credits alag se khareed sakte hain?",
        a: "Haan. Hostinger ka apna FAQ kehta hai ki plan hone ke baad aap upar wale plan par gaye bina extra AI credits khareed sakte hain. Kitne ka milta hai ye plan lene ke baad hi dashboard me dikhta hai, isliye number yahan likhna theek nahi hoga.",
    },
    {
        q: "AI Builder lein ya WordPress?",
        a: "AI Builder tab jab site chhoti aur simple ho — portfolio, resume, link-in-bio, chhota business page — aur aapko technical cheezon me bilkul nahi padna. WordPress tab jab blog chalana hai, plugins chahiye, ya site samay ke saath badi hone wali hai. Seedhi baat: AI Builder tez hai, WordPress lamba chalta hai.",
    },
    {
        q: "Domain free milta hai?",
        a: "Haan, teeno plans me custom domain ek saal ke liye free listed hai. Doosre saal se domain ka apna renewal charge lagta hai, jo hosting ke renewal se alag hai. Kharidne se pehle domain ka renewal rate dekh lein — yahi wo jagah hai jahan log agle saal chaunk jaate hain.",
    },
    {
        q: "Kaunsa plan lena chahiye?",
        a: "Ek hi site banani hai to Premium — 3 websites, 5 credits, aur sabse sasta entry. Kai sites banani hain ya client ka kaam hai to Unlimited, jisme 15 credits aur unlimited websites milti hain. Cloud Startup tabhi jab traffic sach me bhaari ho; AI credits usme bhi 15 hi hain, yaani credits ke liye upgrade karne ka koi faayda nahi.",
    },
    {
        q: "Templates bhi milte hain ya sirf AI?",
        a: "Dono. Hostinger 400+ website templates listed karta hai, iske alawa AI generation. Practical tareeka ye hai: pehle template se shuru karein, phir AI credits zaroori badlav ke liye bachayein — isse credits bahut zyada chalte hain.",
    },
    {
        q: "Paise wapas mil sakte hain?",
        a: "Hostinger 30-day money-back guarantee deta hai. Matlab pehle mahine me AI Builder chala kar dekh sakte hain ki aapke kaam ka hai ya nahi. Domain jaise kuch items refund se bahar hote hain — current refund policy ek baar padh lein.",
    },
    {
        q: "Referral code se kitna sasta padta hai?",
        a: "Sale price par extra 20%. Premium ka regular rate ₹599 hai, sale me ₹149, aur code lagane par ₹119.20 — yaani regular se 80% kam. Sirf nayi kharid par, renewal par nahi.",
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
        articleSection: "Web Development",
        inLanguage: "hi-Latn",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "AI Builder", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

const STEPS = [
    { n: 1, t: "Plan lein, domain chun lein", d: "Premium se upar koi bhi plan AI Builder deta hai. Signup ke waqt custom domain ek saal free milta hai — ab hi chun lena aasan padta hai." },
    { n: 2, t: "Prompt likhein, thoda detail me", d: "“Website banao” likhenge to generic site milegi. Business kya hai, kis sheher me, kaunse page chahiye, tone kaisa ho — sab ek hi prompt me likhein. Har baar dobara generate karna credit kharch karta hai." },
    { n: 3, t: "Template se milao", d: "400+ templates me se koi paas ka dhoondein aur usse shuru karein. Isse AI ko kam kaam karna padta hai aur credits bachte hain." },
    { n: 4, t: "Editor se theek karein, AI se nahi", d: "Chhote badlav — text, rang, image — editor me haath se karein. Credits sirf badi structural cheezon ke liye bachayein." },
    { n: 5, t: "Publish se pehle ye teen cheez", d: "Har page ka title aur description apne shabdon me likhein, mobile par khol kar dekhein, aur contact form ek baar sach me bhar kar test karein. AI ye teen cheezein aksar aadhi chhod deta hai." },
];

export default function HostingerAiBuilder() {
    const premium = BUILDER_PLANS[0];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">AI Builder</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                            AI Website Builder · India · {OFFERS_VERIFIED} ko verified
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                            AI Se Website ₹119/mo Me — Par 5 Credits Ka Sach Pehle Padh Lein
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Hostinger ka AI Builder kaam karta hai: prompt likhein, site ban jaati hai, koi coding nahi.
                            Par ek baat ad me chhoti likhi hoti hai — AI credits <strong className="text-white">one-time</strong>{" "}
                            milte hain, har mahine nahi. Premium me 5, Unlimited me 15. Ye samajh kar chalenge to plan
                            sahi chunenge aur credits bekaar me barbaad nahi karenge.
                        </p>
                    </header>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">30 second ka jawab</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">Sabse sasta entry:</strong> {premium.name} — {inr(premium.sale)}/mo, code ke saath <strong className="text-white">{premium.code}/mo</strong> ({premium.codeOff}% off regular {inr(premium.regular)} se).</li>
                            <li><strong className="text-white">AI Builder ka alag paisa nahi</strong> — hosting plan ke saath hi aata hai.</li>
                            <li><strong className="text-amber-300">Sabse badi galatfahmi:</strong> credits one-time hain. 5 credits khatam = AI generation khatam (site chalti rahegi).</li>
                            <li><strong className="text-white">Credits ke liye upgrade mat karein:</strong> Unlimited aur Cloud Startup dono me 15 hi credits hain.</li>
                            <li><strong className="text-white">Domain ek saal free</strong> teeno plans me.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Kaunsa plan, kitne credits</h2>
                        <div className="grid gap-5 sm:grid-cols-3">
                            {BUILDER_PLANS.map((p) => (
                                <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">{p.name}</h3>
                                    <p className="mb-1">
                                        <span className="text-3xl font-bold text-white">{inr(p.sale)}</span>
                                        <span className="text-gray-400">/mo</span>
                                    </p>
                                    <p className="mb-3 text-sm">
                                        <span className="text-gray-500 line-through">{inr(p.regular)}</span>{" "}
                                        <span className="text-primary-300 font-semibold">{p.off}% off</span>
                                    </p>
                                    <p className="text-sm text-primary-300 font-semibold mb-4">
                                        Code ke saath {p.code}/mo — {p.codeOff}% kam
                                    </p>
                                    <ul className="space-y-1 text-sm text-gray-300 mb-4">
                                        <li><strong className="text-white">{p.credits} AI credits</strong> (one-time)</li>
                                        <li>{p.sites}</li>
                                        <li>{p.storage}</li>
                                        <li>Domain — 1 saal free</li>
                                        <li>400+ templates</li>
                                    </ul>
                                    <p className="text-sm text-amber-300/90">
                                        Renewal {inr(p.renewal)}/mo · 48 mahine ka total {inr(p.termTotal ?? 0)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Saare rate 48-month term ke aur GST se pehle ke hain. Single plan is list me nahi hai kyunki
                            Hostinger ke AI Builder pricing page par woh listed nahi hota.
                        </p>
                    </section>

                    <HostingerCta
                        href={REF.aiBuilder}
                        heading="AI Builder par extra 20%"
                        sub="Checkout par code daalne se sale price par aur 20% kat jaata hai. Premium ₹149 se ₹119.20, Unlimited ₹249 se ₹199.20."
                        buttonLabel="AI Builder plans dekhein"
                    />

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Paanch step me site — aur credits bachane ka tareeka</h2>
                        <ol className="space-y-4">
                            {STEPS.map((s) => (
                                <li key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        <span className="text-primary-400 mr-2">{s.n}.</span>{s.t}
                                    </h3>
                                    <p className="text-gray-300 leading-8">{s.d}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Credits kaise barbaad hote hain</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Sabse aam galti: pehla prompt do line ka likhna, result pasand na aana, phir dobara generate
                            karna. Teen-chaar baar me Premium ke 5 credits khatam. Bachne ka tareeka seedha hai — pehla
                            prompt hi lamba aur specific likhein.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                                <p className="text-xs font-bold uppercase tracking-wide text-red-300 mb-2">Aise nahi</p>
                                <p className="text-sm text-gray-300 leading-7">&ldquo;Meri bakery ke liye website banao&rdquo;</p>
                            </div>
                            <div className="rounded-xl border border-primary-500/30 bg-primary-500/5 p-4">
                                <p className="text-xs font-bold uppercase tracking-wide text-primary-300 mb-2">Aise</p>
                                <p className="text-sm text-gray-300 leading-7">
                                    “Delhi ki ek home bakery ke liye 4-page website: home, cake gallery, order form,
                                    contact. Tone warm aur family-type. WhatsApp order button har page par. Colors cream
                                    aur brown.”
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">AI Builder kab nahi lena chahiye</h2>
                        <p className="text-gray-300 leading-8">
                            Agar blog chalana hai, regular content dalna hai, ya aage chal kar plugins aur custom
                            functionality chahiye — to{" "}
                            <Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">WordPress hosting</Link>{" "}
                            behtar rasta hai. AI Builder ka sweet spot chhoti, stable site hai jise banane ke baad haath
                            kam lagana pade. Aur agar site business ke liye sach me important hai, to ek baar kisi
                            developer se review karwa lena AI ke saare credits se zyada kaam ka hai.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger AI Builder</h2>
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
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Saare Hostinger plans ka price</Link> — AI Builder inhi plans ke saath aata hai.</li>
                            <li><Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">WordPress hosting</Link> — blog ya badi site ke liye behtar rasta.</li>
                            <li><Link href="/blog/hostinger-business-email-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Business email ka price</Link> — site ke saath professional address bhi chahiye hota hai.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                    <RelatedPosts slug="hostinger-ai-builder-se-website-kaise-banaye" />
                </article>
            </main>
        </>
    );
}
