import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import HostingerCta from "@/components/HostingerCta";
import { OFFERS_VERIFIED, OFFERS_VERIFIED_ISO, REF, SHARED_PLANS, inr, priceWithCode } from "@/data/hostinger-offers";

const CANONICAL = "https://mohitkoli.in/blog/domain-kaise-kharide-galtiyan-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/best-domain-registrars-india-2026.png";
const TITLE = "Domain Ke Alag Paise Mat Dein — Hosting Ke Saath Free Aata Hai";
const DESCRIPTION =
    "Har Hostinger plan me domain free listed hai, phir bhi log alag se kharid lete hain. Domain chunne ki 7 galtiyan aur renewal ka trap — Sept 2026 verified.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        "domain kaise kharide",
        "domain name kaise chune",
        "free domain with hosting india",
        "hostinger free domain",
        "domain kharidne se pehle",
        "domain renewal price trap",
        "sasta domain india",
        "domain name kharidne ki galtiyan",
        "in domain ya com domain",
        "pehla domain kaise le",
        "domain aur hosting ek saath",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        publishedTime: OFFERS_VERIFIED_ISO,
        modifiedTime: OFFERS_VERIFIED_ISO,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Domain kaise kharide — India 2026 guide" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Domain Ke Alag Paise Mat Dein",
        description: "Hosting plan me domain free aata hai. Aur 7 galtiyan jo pehli baar me sab karte hain.",
        images: [IMAGE],
    },
};

/** Jo plans domain bundle karte hain — 20 Sep 2026 ko Hostinger ke web-hosting page se. */
const DOMAIN_INCLUDED = [
    { plan: "Single", note: "Free domain", price: SHARED_PLANS[0] },
    { plan: "Premium", note: "Domain — 1 saal free", price: SHARED_PLANS[1] },
    { plan: "Unlimited", note: "Domain — 1 saal free", price: SHARED_PLANS[2] },
    { plan: "Cloud Startup", note: "Domain — 1 saal free", price: SHARED_PLANS[3] },
];

const MISTAKES = [
    {
        t: "Domain aur hosting alag-alag jagah se lena",
        d: "Agar website banani hi hai to hosting plan me domain pehle se aa raha hota hai. Alag se kharidna matlab ek saal ka paisa bekaar dena — aur do alag dashboards sambhalna.",
    },
    {
        t: "Sirf pehle saal ka price dekhna",
        d: "Domain ka pehla saal aksar sasta ya free hota hai. Asli kharcha doosre saal se shuru hota hai. Kharidne se pehle renewal rate dekhna utna hi zaroori hai jitna sale price.",
    },
    {
        t: "Naam me hyphen aur number daalna",
        d: "mera-shop-24.com phone par bolna mushkil hai, log hyphen bhool jaate hain, aur type karte waqt galti karte hain. Agar naam zubaani nahi bataya ja sakta, to woh naam galat hai.",
    },
    {
        t: "Naam ko itna specific rakhna ki aage badh na sako",
        d: "delhicakeshop.com theek hai — jab tak aap Delhi me sirf cake bechte hain. Do saal baad Noida me cookies bechoge to naam jhooth bolne lagega. Thoda room chhodo.",
    },
    {
        t: "WHOIS privacy off chhod dena",
        d: "Registration me diya number aur email public ho jaate hain, aur spam calls shuru ho jaate hain. Hostinger free WHOIS privacy deta hai — on rakhein. Baad me domain transfer karte waqt bhi isse band karna padta hai, ye yaad rakhna.",
    },
    {
        t: "Trademark check kiye bina naam lena",
        d: "Kisi bade brand se milta-julta naam le liya to notice aa sakta hai aur domain haath se ja sakta hai — website ki saari mehnat ke saath. Naya naam sochne ke baad ek baar trademark search kar lena 5 minute ka kaam hai.",
    },
    {
        t: "Extension ke chakkar me ulajh jaana",
        d: ".com global pehchaan deta hai, .in India ka signal deta hai. Business sirf India me hai to .in bilkul sahi hai. Jo bhi lein, dono me se dusra bhi bacha kar rakh lein agar budget ho — competitor uthaa le jaata hai.",
    },
];

const FAQ = [
    {
        q: "Kya sach me hosting ke saath domain free milta hai?",
        a: "Haan. 20 September 2026 ko Hostinger ke India web hosting page par Single plan me “Free domain” aur Premium, Unlimited aur Cloud Startup me “Domain — free for 1 year” listed hai. Matlab pehle saal domain ka alag paisa nahi lagta. Doosre saal se domain ka apna renewal charge lagta hai, jo hosting ke renewal se alag hota hai.",
    },
    {
        q: "Pehle domain lein ya pehle hosting?",
        a: "Agar website banani hai to hosting pehle lein — domain usi ke saath aa jaayega aur ek saal ka paisa bach jaayega. Domain alag se tabhi lein jab abhi website nahi banani, bas naam pakad kar rakhna hai kyunki accha naam mil gaya hai.",
    },
    {
        q: "Domain ka renewal price kyun zyada hota hai?",
        a: "Pehle saal ka rate promotional hota hai, renewal rate asli rate hota hai. Ye sirf Hostinger nahi, lagbhag har registrar ka tareeka hai — aur kuch registrars par ye fark bahut bada hota hai. Isliye domain khareedne se pehle uska renewal rate dekhna sale price dekhne se zyada zaroori hai.",
    },
    {
        q: ".com lein ya .in?",
        a: "Customer sirf India me hain to .in bilkul theek hai, aksar sasta bhi padta hai, aur Indian audience ko bharosa dilata hai. Aage chal kar bahar ke customers chahiye ya app/SaaS banana hai to .com behtar hai. Dono chahiye to pehle .com lein, .in redirect kar dein.",
    },
    {
        q: "Domain ka naam kaise sochu?",
        a: "Teen filter lagao. Ek — phone par bina spelling bataye bol sako. Do — 15 characters se chhota ho. Teen — aaj ke kaam se thoda bada ho taaki business badhne par naam chhota na pad jaaye. Teeno pass ho gaye to naam sahi hai.",
    },
    {
        q: "Domain baad me badla ja sakta hai?",
        a: "Domain khud badal nahi sakte — naya khareedna padta hai. Purani site ko naye domain par le jaana mumkin hai, par saari ranking aur backlinks ko redirect se sambhalna padta hai, aur kuch nuksan hamesha hota hai. Isliye pehli baar me hi soch kar lein.",
    },
    {
        q: "Free domain par kya koi shart hoti hai?",
        a: "Aam taur par free domain sirf kuch extensions par aur sirf pehle term par milta hai, aur plan cancel karne par uska hisaab alag hota hai. Ye shartein waqt ke saath badalti hain, isliye checkout page par apna chuna hua domain aur uska rate dikhne par ek baar padh lena sabse sahi tareeka hai.",
    },
    {
        q: "Referral code domain par bhi chalta hai?",
        a: "Code sale price par extra 20% deta hai aur nayi kharid par lagta hai. Sabse seedha faayda ye hai ki aap hosting plan lete ho jisme domain pehle se included hai — yaani plan sasta padta hai aur domain waise bhi free aata hai. Renewal par koi discount nahi lagta.",
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
        articleSection: "Domains",
        inLanguage: "hi-Latn",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Domain Kaise Kharide", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function DomainKaiseKharide() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Domain Kaise Kharide</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                            Domains · India · {OFFERS_VERIFIED} ko verified
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                            Domain Ke Alag Paise Mat Dein — Hosting Ke Saath Free Aata Hai
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Zyadatar log pehle kahin se domain kharidte hain, phir kahin aur se hosting, aur ek saal ka
                            paisa bekaar me de dete hain. Sach ye hai ki har Hostinger plan me domain pehle se included
                            hai. Neeche wahi hisaab hai, plus woh 7 galtiyan jo pehla domain lete waqt lagbhag sab karte
                            hain — aur renewal wala trap jo doosre saal chubhta hai.
                        </p>
                    </header>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Kaunse plan me domain included hai</h2>
                        <div className="overflow-x-auto rounded-xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">Domain</th>
                                        <th className="p-4">Plan ka rate</th>
                                        <th className="p-4">Code ke saath</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {DOMAIN_INCLUDED.map((row) => (
                                        <tr key={row.plan} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white">{row.plan}</td>
                                            <td className="p-4 text-primary-300">{row.note}</td>
                                            <td className="p-4">{inr(row.price.sale)}/mo</td>
                                            <td className="p-4 text-primary-300 font-semibold">{priceWithCode(row.price)}/mo</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            48-month term ke rate, GST se pehle, 20 September 2026 ko Hostinger ke India page se. Domain
                            ka renewal hosting ke renewal se alag lagta hai — doosre saal se domain ka apna charge
                            shuru ho jaata hai.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pehle domain ya pehle hosting?</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Hosting pehle lein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm leading-7">
                                    <li>Website agle kuch hafton me banani hai</li>
                                    <li>Domain aur hosting ek hi jagah chahiye (aasan hota hai)</li>
                                    <li>Ek saal ka domain charge bachana hai</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Sirf domain lein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm leading-7">
                                    <li>Accha naam mil gaya hai, abhi pakadna hai</li>
                                    <li>Website kab banegi pata nahi</li>
                                    <li>Sirf email ke liye domain chahiye</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Saat galtiyan jo pehli baar me sab karte hain</h2>
                        <ol className="space-y-4">
                            {MISTAKES.map((m, i) => (
                                <li key={m.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        <span className="text-primary-400 mr-2">{i + 1}.</span>{m.t}
                                    </h3>
                                    <p className="text-gray-300 leading-8">{m.d}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <HostingerCta
                        href={REF.shared}
                        heading="Domain included plan par extra 20%"
                        sub="Checkout par code daalne se sale price par aur 20% kat jaata hai. Single ₹69 se ₹55.20, Premium ₹149 se ₹119.20 — domain dono me included."
                        buttonLabel="Domain wale plans dekhein"
                    />

                    <section className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Renewal ka trap — seedhi baat</h2>
                        <p className="text-gray-300 leading-8">
                            Pehla saal free ya sasta hone ka matlab ye nahi ki domain sasta hai. Doosre saal se do alag
                            bills aate hain: hosting ka renewal aur domain ka renewal. Hosting ke renewal rates humne{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">yahan poore likhe hain</Link>, aur domain ke
                            extension-wise rates{" "}
                            <Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">yahan</Link>.
                            Dono ek baar dekh lein — agle saal ka jhatka aaj hi pata chal jaayega, aur wahi asli faisla
                            karne wali cheez hai.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — domain kharidna</h2>
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
                            <li><Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">India ke best domain registrars</Link> — renewal rate ke hisaab se compare kiye hue.</li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger domain price</Link> — extension ke hisaab se poora rate card.</li>
                            <li><Link href="/blog/hostinger-business-email-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Business email ka price</Link> — domain mil gaya to email agla kadam hai.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                </article>
            </main>
        </>
    );
}
