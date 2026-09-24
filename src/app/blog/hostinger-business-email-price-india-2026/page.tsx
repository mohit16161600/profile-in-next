import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import HostingerCta from "@/components/HostingerCta";
import RelatedPosts from "@/components/RelatedPosts";
import {
    EMAIL_PLANS,
    OFFERS_VERIFIED,
    OFFERS_VERIFIED_ISO,
    REF,
    inr,
    offWithCode,
    priceWithCode,
} from "@/data/hostinger-offers";

const CANONICAL = "https://mohitkoli.in/blog/hostinger-business-email-price-india-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/hostinger-domain-price-india-2026.png";
const TITLE = "Company Wala Email Sirf ₹23/mo: 84% Off Ka Poora Hisaab";
const DESCRIPTION =
    "name@apnibrand.com sirf ₹23.20/mo par. Teeno plan ka storage, renewal rate, aur kitni GB aapko sach me chahiye — bina bakwaas ke. Sept 2026 verified.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        "hostinger business email price",
        "hostinger business email india",
        "business email price india",
        "custom domain email price",
        "apne domain ka email kaise banaye",
        "hostinger email hosting price",
        "professional email india cost",
        "hostinger mail plans",
        "business email kitne ka hai",
        "email hosting india 2026",
        "hostinger email storage",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        publishedTime: OFFERS_VERIFIED_ISO,
        modifiedTime: OFFERS_VERIFIED_ISO,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger business email plans aur price India me" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Company Wala Email Sirf ₹23/mo: Poora Hisaab",
        description: "Starter, Standard, Premium — storage, renewal aur kaunsa plan aapke liye kaafi hai.",
        images: [IMAGE],
    },
};

const PLAN_COPY: Record<string, { badge: string; best: string; take: string; highlight: boolean }> = {
    Starter: {
        badge: "",
        best: "Solo freelancer, ek-do client, din ke 20-30 mail",
        take: "5 GB sunne me kam lagta hai par sirf text mails me saalon chal jaata hai. Attachment bhejne-lene ki aadat hai to jaldi bharega.",
        highlight: false,
    },
    Standard: {
        badge: "SABSE POPULAR",
        best: "Chhoti team, regular client communication, attachments",
        take: "20 GB plus AI reply aur read-receipt — asli kaam ke liye sabse sensible plan yahi hai.",
        highlight: true,
    },
    Premium: {
        badge: "TEAM KE LIYE",
        best: "Badhti team, heavy attachments, ek saal ka free domain chahiye",
        take: "50 GB aur free domain milta hai. Par dhyan rahe — renewal ₹179/mo hai, yaani dhai guna.",
        highlight: false,
    },
};

const PLANS = EMAIL_PLANS.map((p) => ({ ...PLAN_COPY[p.name], ...p, code: priceWithCode(p), codeOff: offWithCode(p) }));

const FAQ = [
    {
        q: "Hostinger business email ka price kitna hai India me?",
        a: "Starter ₹29/mo, Standard ₹49/mo aur Premium ₹79/mo hai — per mailbox, 48-month term par. Referral code lagane par yahi ₹23.20, ₹39.20 aur ₹63.20 ho jaata hai. Renewal par ₹69, ₹119 aur ₹179 per month ho jaate hain. Prices 20 September 2026 ko Hostinger ke India business email page se check kiye gaye, GST alag hai.",
    },
    {
        q: "Price per mailbox hai ya poore domain ka?",
        a: "Per mailbox. Hostinger apne page par saaf likhta hai “Price per mailbox”, aur har plan me 1 mailbox included hai. Teen log chahiye to teen mailbox ka paisa lagega. Ye woh cheez hai jo zyadatar comparison chhod dete hain, aur team ke liye budget isi par badalta hai.",
    },
    {
        q: "Mere business ke liye kitni email storage chahiye?",
        a: "Sirf text wale mails lagbhag 10-20 KB ke hote hain, yaani 5 GB me lakhon mails aa jaate hain. Asli jagah attachments khaate hain. Roz 2-3 PDF ya image aate-jaate hain to saal bhar me 1-2 GB lagta hai — Starter kaafi hai. Design files, video ya bade invoices ka kaam hai to 20 GB (Standard) lena chahiye. 50 GB tabhi jab archive kabhi delete na karte hon.",
    },
    {
        q: "Kya email ke liye alag se hosting leni padegi?",
        a: "Nahi. Business email ek alag product hai aur bina hosting ke bhi khareeda ja sakta hai — bas domain aapke paas hona chahiye taaki MX record point kar sakein. Aur agar aap Hostinger ka hosting plan lete hain to usme pehle se mailbox milte hain, alag email plan ki zaroorat hi nahi padti.",
    },
    {
        q: "Renewal par kitna badh jaata hai?",
        a: "Starter ₹29 se ₹69/mo, Standard ₹49 se ₹119 aur Premium ₹79 se ₹179 ho jaata hai. Teeno par bill lagbhag dhai guna ho jaata hai. Renewal par koi coupon ya referral discount nahi chalta, isliye pehli baar me lamba term lena hi asli bachat hai.",
    },
    {
        q: "Agentic Mail kya hai?",
        a: "Ye Hostinger ka API aur MCP layer hai jisse AI agents khud mail bhej, padh aur mailbox manage kar sakte hain. Teeno email plans me listed hai. Agar aap koi AI automation bana rahe hain jise apni email identity chahiye, to ye kaam ka hai — warna ignore kar dijiye.",
    },
    {
        q: "Free domain kaunse plan me milta hai?",
        a: "Sirf Premium plan me — Hostinger uske feature list me “Free domain for 1 year” likhta hai. Starter aur Standard me nahi. Agar domain abhi kharidna hi hai to Premium ka ₹79 vs Standard ka ₹49 wala fark domain ki keemat se compare karke dekhiye.",
    },
    {
        q: "Gmail chhod kar isme shift karna mushkil hai?",
        a: "Setup ka kaam MX record badalna hai, jo domain ke DNS panel me 5 minute ka kaam hai. Purane mails import karne ka option bhi milta hai. Asli mehnat sabko naya address batana hai — isliye purana Gmail kuch mahine forwarding par chalu rakhna samajhdaari hai.",
    },
    {
        q: "Paise wapas mil sakte hain?",
        a: "Hostinger 30-day money-back guarantee deta hai aur “cancel anytime” likhta hai. Matlab pehle mahine me setup karke dekh sakte hain. Domain jaise kuch items refund se bahar hote hain — kharidne se pehle current policy padh lein.",
    },
    {
        q: "Referral code se kitna farak padta hai?",
        a: "Sale price par extra 20%. Starter ka regular rate ₹149 hai, sale me ₹29, aur code lagane par ₹23.20 — yaani regular se 84% kam. Ye poore catalogue ka sabse gehra discount hai. Sirf nayi kharid par, renewal par nahi.",
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
        "@type": "Product",
        name: "Hostinger Business Email (India)",
        description: "Custom-domain business email plans — per mailbox pricing, 5 GB se 50 GB storage.",
        brand: { "@type": "Brand", name: "Hostinger" },
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: EMAIL_PLANS[0].sale,
            highPrice: EMAIL_PLANS[EMAIL_PLANS.length - 1].sale,
            offerCount: EMAIL_PLANS.length,
            offers: EMAIL_PLANS.map((p) => ({
                "@type": "Offer",
                name: p.name,
                price: p.sale,
                priceCurrency: "INR",
                url: REF.email,
                availability: "https://schema.org/InStock",
            })),
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Business Email Price", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function HostingerBusinessEmail() {
    const starter = PLANS[0];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Business Email Price</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                            Business Email · India · {OFFERS_VERIFIED} ko verified
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                            Company Wala Email Sirf ₹23/mo: Poora Hisaab, Bina Bakwaas
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Client ko quotation gmail.com se bhejna aur apnibrand.com se bhejna — dono me reply rate ka
                            farak padta hai. Achhi baat ye hai ki mahine ka kharcha ek chai se kam hai. Yahan teeno
                            Hostinger email plans ka seedha hisaab hai: asli price, renewal rate, aur kitni storage
                            aapko sach me chahiye.
                        </p>
                    </header>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">30 second ka jawab</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">Sabse sasta:</strong> {starter.name} — {inr(starter.sale)}/mo, code ke saath <strong className="text-white">{starter.code}/mo</strong> ({starter.codeOff}% off regular {inr(starter.regular)} se).</li>
                            <li><strong className="text-white">Zyadatar logon ke liye:</strong> Standard — 20 GB, AI reply aur read receipt, {PLANS[1].code}/mo code ke saath.</li>
                            <li><strong className="text-white">Free domain chahiye:</strong> sirf Premium me milta hai, ek saal ke liye.</li>
                            <li><strong className="text-amber-300">Catch 1:</strong> price <em>per mailbox</em> hai. Teen log = teen guna.</li>
                            <li><strong className="text-amber-300">Catch 2:</strong> renewal par teeno plan lagbhag dhai guna ho jaate hain.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Teeno plan — price aur storage</h2>
                        <div className="grid gap-5 sm:grid-cols-3">
                            {PLANS.map((p) => (
                                <div
                                    key={p.name}
                                    className={`rounded-2xl border p-6 ${p.highlight ? "border-primary-500/50 bg-primary-500/5" : "border-white/10 bg-white/5"}`}
                                >
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <h3 className="text-xl font-bold text-white">{p.name}</h3>
                                        {p.badge && (
                                            <span className="rounded-full bg-primary-500/20 px-2 py-1 text-[10px] font-bold text-primary-300">{p.badge}</span>
                                        )}
                                    </div>
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
                                        <li><strong className="text-white">{p.storageGb} GB</strong> storage</li>
                                        <li>{p.forwarding} forwarding rules</li>
                                        <li>{p.aliases} email aliases</li>
                                        <li>1 mailbox included</li>
                                    </ul>
                                    <p className="text-sm text-gray-400 mb-2"><strong className="text-gray-200">Kiske liye:</strong> {p.best}</p>
                                    <p className="text-sm text-gray-400 mb-2">{p.take}</p>
                                    <p className="text-sm text-amber-300/90">Renewal {inr(p.renewal)}/mo</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Saare rate 48-month term ke, per mailbox, GST se pehle. Hostinger ka apna page bhi
                            “Price per mailbox” likhta hai.
                        </p>
                    </section>

                    <HostingerCta
                        href={REF.email}
                        heading="Business email par extra 20%"
                        sub="Checkout par code daalne se sale price par aur 20% kat jaata hai. Starter ₹29 se ₹23.20, Standard ₹49 se ₹39.20."
                        buttonLabel="Business email plans dekhein"
                    />

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Kitni GB chahiye — asli hisaab</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Storage ka number sabko darata hai, par ganit simple hai. Sirf text wala mail lagbhag 10-20 KB
                            ka hota hai — yaani 5 GB me lakhon mails aa jaayenge. Jagah attachments khaate hain, mails
                            nahi. Isliye sawal ye nahi ki kitne mail aate hain, sawal ye hai ki kitne <em>bade</em> mail
                            aate hain.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Aapka kaam</th>
                                        <th className="p-4">Saal bhar me lagbhag</th>
                                        <th className="p-4">Plan</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4">Zyadatar text mail, kabhi-kabhi PDF</td><td className="p-4">1-2 GB</td><td className="p-4 text-white">Starter (5 GB)</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Roz invoice, image, document aate-jaate hain</td><td className="p-4">4-8 GB</td><td className="p-4 text-white">Standard (20 GB)</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Design files, bade attachments, kuch delete nahi karte</td><td className="p-4">15 GB+</td><td className="p-4 text-white">Premium (50 GB)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Ye estimate typical attachment size par based hai, Hostinger ke kisi dawe par nahi. Sach ye
                            hai ki zyadatar solo log 5 GB kabhi nahi bharte — aur upgrade baad me bhi ho sakta hai.
                        </p>
                    </section>

                    <section className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Teen cheezein jo ad me nahi dikhti</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">Per mailbox pricing.</strong> ₹29/mo ek address ka hai. Team of 4 ka matlab ₹116/mo, ₹29 nahi.</li>
                            <li><strong className="text-white">GST alag hai.</strong> Hostinger ka footer khud kehta hai prices GST ke bina hain — 18% upar jodkar sochiye.</li>
                            <li><strong className="text-white">48 mahine ka paisa upfront.</strong> ₹29/mo dikhta hai par poore term ka amount ek saath katega.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Alag email plan lein ya hosting wala mailbox?</h2>
                        <p className="text-gray-300 leading-8">
                            Agar aap waise bhi website banane wale hain to ruk jaiye. Hostinger ke{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">shared hosting plans</Link>{" "}
                            me mailbox pehle se aate hain — Premium me 2 mailbox per website ek saal free, Unlimited me
                            unlimited mailbox per website ek saal free. Aise me alag email plan kharidna paisa barbaad
                            karna hai. Alag email plan tabhi lein jab website ki zaroorat hi na ho aur sirf professional
                            address chahiye.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger business email</h2>
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
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger domain price</Link> — email ke liye domain pehle chahiye hota hai.</li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Saare hosting plans ka price</Link> — inme mailbox pehle se aate hain.</li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Renewal price ka poora sach</Link> — dusre term me bill kitna badhega.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                    <RelatedPosts slug="hostinger-business-email-price-india-2026" />
                </article>
            </main>
        </>
    );
}
