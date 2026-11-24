import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";

const REFERRAL_URL = "https://www.dynadot.com/?s7f7O16308s7px";
const CANONICAL = "https://mohitkoli.in/blog/dynadot-review-2026";
const TITLE = "Dynadot Black Friday 2026: Domains From $1.50, 363 TLDs on Sale";
const DESCRIPTION =
  "Dynadot's Black Friday sale is live — .xyz and .biz at $1.50, .info $3.99, .tech $6.64, 363 extensions discounted. Every sale price, regular price and end date, read off Dynadot's own sales table on 24 November 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Keyword tiers. Meta keywords do not rank on their own — this exists so the page has
  // one explicit PRIMARY term, which the title, H1 and intro are then written around.
  keywords: [
    // PRIMARY
    "dynadot black friday",

    // SECONDARY — H2s and body
    "cheapest domain name", "cheap domain registration", "dynadot coupon code",
    "dynadot sale", "dynadot review", "domain name black friday sale",
    "cheapest domain registrar 2026", "dynadot renewal price",

    // LONG-TAIL — FAQ and specific sections
    "where to buy cheapest domain name",
    "dynadot black friday coupon code 2026",
    "is a $1 domain worth it",
    "dynadot india payment",
    "cheapest domain for first year",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description:
      "363 extensions discounted, some by 90%. The sale prices, the regular prices they snap back to, and the exact date each offer ends.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "/assets/blog/dynadot-review-2026.svg", width: 1200, height: 630, alt: "Dynadot Black Friday 2026 sale table showing .xyz at $1.50, .tech at $6.64 and the regular prices they renew at" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynadot Black Friday 2026 — domains from $1.50",
    description: "363 TLDs on sale with verified prices and end dates, plus what each one renews at afterwards.",
    images: ["/assets/blog/dynadot-review-2026.svg"],
  },
};

const CHECKED = "24 November 2026";

// Read straight off Dynadot's own Black Friday sales table (dynadot.com/domain/sales)
// on the date above, in USD. Columns there are TLD / regular price / sale price / end
// date. Published reviews disagree with each other and with this table — this is the
// table, not a review.
const SALE = [
  { tld: ".xyz", regular: 14.45, sale: 1.5, ends: "2 Dec 2026" },
  { tld: ".club", regular: 16.27, sale: 1.5, ends: "6 Dec 2026" },
  { tld: ".biz", regular: 19.5, sale: 1.5, ends: "6 Dec 2026" },
  { tld: ".lol", regular: 26.97, sale: 1.54, ends: "25 Aug 2027" },
  { tld: ".blog", regular: 21.62, sale: 2.0, ends: "30 Nov 2026" },
  { tld: ".live", regular: 32.32, sale: 2.5, ends: "31 Dec 2026" },
  { tld: ".online", regular: 29.64, sale: 2.5, ends: "31 Dec 2026" },
  { tld: ".cloud", regular: 21.62, sale: 3.99, ends: "31 Dec 2026" },
  { tld: ".vip", regular: 16.27, sale: 4.49, ends: "31 Dec 2026" },
  { tld: ".tech", regular: 52.65, sale: 6.64, ends: "31 Dec 2026" },
  { tld: ".net", regular: 12.52, sale: 7.49, ends: "5 Dec 2026" },
  { tld: ".org", regular: 11.64, sale: 7.99, ends: "7 Jan 2027" },
  { tld: ".io", regular: 53.5, sale: 21.4, ends: "30 Nov 2026" },
];

// Not on the Black Friday registration list — these are the standing prices, which is
// itself the point: .com never goes on sale here because it never goes up either.
const FLAT = [
  { tld: ".com", price: 11.62, note: "register, renew and transfer are all the same number" },
  { tld: ".app", price: 8.0, note: "flat — no sale, no renewal jump" },
  { tld: ".dev", price: 8.0, note: "flat — no sale, no renewal jump" },
];

const COUPON = { code: "BFCOM26", what: "domain transfer", price: 10.49, was: 11.62, ends: "1 December 2026, 00:00 UTC" };

const usd = (n: number) => "$" + n.toFixed(2);
const off = (regular: number, sale: number) => Math.round((1 - sale / regular) * 100);

const FAQ = [
  {
    q: "What is the cheapest domain in Dynadot's Black Friday sale?",
    a: "Three extensions tie at $1.50 for the first year — .xyz, .club and .biz — with .lol and .lat just behind at $1.54. Checked on Dynadot's own sales table on 24 November 2026. The deepest percentage discount is .xyz and .club at 90% off, and the largest absolute saving is .tech, down from $52.65 to $6.64. All of those are first-year prices; the regular price is what you pay from year two.",
  },
  {
    q: "Is there a Dynadot Black Friday coupon code for 2026?",
    a: "Yes, one that Dynadot features itself: BFCOM26, which brings a domain transfer down to $10.49 from $11.62. It expires on 1 December 2026 at 00:00 UTC. Most 'Dynadot coupon codes' you will find on deal aggregators are expired campaign strings recycled from previous years — this one is listed on Dynadot's own sales page with its expiry printed next to it, which is the only kind worth typing.",
  },
  {
    q: "How much is a .com at Dynadot in the Black Friday sale?",
    a: "It is not in the sale, and that is deliberate rather than an oversight. A .com is $11.62 to register, $11.62 to renew and $11.62 to transfer — the same number in all three columns, all year. Extensions that go on sale for $1.50 are the ones that snap back to $14 or $30 at renewal. The .com never drops because it never rises.",
  },
  {
    q: "Is a $1.50 domain actually worth buying?",
    a: "For a project you will abandon, yes, and it is the correct choice. For anything you intend to keep, do the five-year arithmetic first. A .xyz at $1.50 then renews at $14.45, so five years costs $59.30. A .com at a flat $11.62 costs $58.10 over the same five years — slightly less, on the extension people actually trust. The cheap sticker and the cheap domain are different things.",
  },
  {
    q: "When does the Dynadot Black Friday sale end?",
    a: "There is no single end date, which is the detail most roundups get wrong. Each extension has its own expiry printed in Dynadot's table: .blog and .io end on 30 November 2026, .xyz on 2 December, .net on 5 December, .club and .biz on 6 December, while .tech, .online, .live, .cloud and .vip run to 31 December 2026 and .org to 7 January 2027. Check the date against the extension you actually want.",
  },
  {
    q: "Can I buy a domain from Dynadot in India?",
    a: "Yes. Dynadot lists INR among its supported currencies alongside USD, EUR, GBP and others, and accepts credit cards, debit cards, PayPal, bank wire and account credit. Two practical caveats: prices are set in USD and Dynadot's own table notes that amounts move with exchange rates, and an Indian card may add a foreign-transaction fee on top. Budget a few percent above the dollar figure rather than treating it as the final rupee cost.",
  },
  {
    q: "Is Dynadot legit and safe to buy domains from?",
    a: "Dynadot is an ICANN-accredited registrar and has been operating since 2002. Accreditation means it sells domains directly rather than reselling. The things genuinely worth checking before moving a portfolio anywhere are whether registrar lock and two-factor authentication are available on your account, and what the restore fee is if a domain lapses — Dynadot lists that at $100.92 on .com, which is an expensive way to learn about auto-renew.",
  },
  {
    q: "Does Dynadot put renewals on sale too, or only new registrations?",
    a: "Both, and this is unusual enough to be worth knowing. The sales page carries three separate tabs — Registration Sales, Transfer Sales and Renewal Sales — so some extensions are discounted on renewal as well as on first registration. Most registrars discount only the first year, because the renewal is where the margin lives. Check the Renewal Sales tab for the extension you already own before you assume there is nothing there.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://mohitkoli.in/assets/blog/dynadot-review-2026.svg",
    datePublished: "2026-11-24T00:00:00.000Z",
    dateModified: "2026-11-24T00:00:00.000Z",
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
    keywords: "dynadot black friday, cheapest domain name, dynadot coupon code, dynadot sale, dynadot review",
    articleSection: "Domains",
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
      { "@type": "ListItem", position: 3, name: "Dynadot Black Friday 2026", item: CANONICAL },
    ],
  },
];

function DealButton({ label }: { label: string }) {
  return (
    <a
      href={REFERRAL_URL}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
    >
      {label}
    </a>
  );
}

export default function DynadotBlackFriday2026() {
  const cheapest = SALE.reduce((a, b) => (a.sale <= b.sale ? a : b));
  const deepest = SALE.reduce((a, b) => (off(a.regular, a.sale) >= off(b.regular, b.sale) ? a : b));
  const biggestSaving = SALE.reduce((a, b) => (a.regular - a.sale >= b.regular - b.sale ? a : b));
  const com = FLAT[0];
  const fiveYearXyz = cheapest.sale + cheapest.regular * 4;
  const fiveYearCom = com.price * 5;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-28 pb-20 bg-[#040404] text-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-300">Dynadot Black Friday 2026</li>
            </ol>
          </nav>

          <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">
            Domains · Checked {CHECKED}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Dynadot Black Friday 2026 — Domains From {usd(cheapest.sale)}, and What Each One Costs Afterwards
          </h1>

          <p className="text-lg text-gray-300 leading-8 mb-3">
            If you want a domain name at the lowest price it will be all year, this is the window.
            Dynadot&apos;s Black Friday and Cyber Monday sale is live with{" "}
            <strong className="text-white">363 extensions discounted</strong> — {cheapest.tld} and {SALE[1].tld} at{" "}
            {usd(cheapest.sale)}, {biggestSaving.tld} down from {usd(biggestSaving.regular)} to{" "}
            {usd(biggestSaving.sale)}. I read every figure on this page off Dynadot&apos;s own sales table on {CHECKED}.
          </p>
          <p className="text-lg text-gray-300 leading-8 mb-3">
            I have also put the <strong className="text-white">regular price next to every sale price</strong>, plus
            the exact date each offer expires. No other roundup does that, and it is the difference between a cheap
            domain and a cheap first year. Both are worth having — they are just not the same purchase.
          </p>
          <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
            Disclosure: links to Dynadot on this page are referral links — I earn a commission at no extra cost to
            you. All prices are in USD, as Dynadot publishes them. Dynadot notes that amounts move with exchange
            rates, so your checkout total is the real number. Each offer has its own end date, listed below.
          </p>

          {/* Hero image */}
          <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/assets/blog/dynadot-review-2026.svg"
              alt="Dynadot Black Friday 2026 sale: .xyz at $1.50 against a $14.45 regular price, .tech at $6.64 against $52.65"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Direct answer */}
          <section className="p-8 bg-primary-500/5 rounded-2xl border border-primary-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The short answer</h2>
            <p className="text-gray-300 leading-8 mb-4">
              <strong className="text-white">Cheapest first year:</strong> {cheapest.tld}, {SALE[1].tld} and{" "}
              {SALE[2].tld} at {usd(cheapest.sale)} — {off(deepest.regular, deepest.sale)}% off.{" "}
              <strong className="text-white">Biggest absolute saving:</strong> {biggestSaving.tld}, down{" "}
              {usd(biggestSaving.regular - biggestSaving.sale)} to {usd(biggestSaving.sale)}.{" "}
              <strong className="text-white">Best long-term value:</strong> {com.tld} at a flat {usd(com.price)},
              which is not in the sale because it never moves.
            </p>
            <p className="text-gray-300 leading-8">
              There is also a live coupon Dynadot publishes itself — <strong className="text-white">{COUPON.code}</strong>,
              {" "}which takes a {COUPON.what} to {usd(COUPON.price)} from {usd(COUPON.was)}, expiring {COUPON.ends}.
            </p>
          </section>

          {/* The sale table */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            Dynadot Black Friday sale prices — what is actually cheap
          </h2>
          <p className="text-gray-300 leading-8 mb-6">
            Sorted by sale price, cheapest first. The regular column is what you pay from year two. The end date is
            per extension, not per sale — they genuinely differ, and several expire before the others.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Dynadot Black Friday 2026 sale prices, regular prices and end dates by extension, checked 24 November 2026</caption>
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Extension</th>
                  <th scope="col" className="p-4 font-semibold">Sale price</th>
                  <th scope="col" className="p-4 font-semibold">Regular</th>
                  <th scope="col" className="p-4 font-semibold">Off</th>
                  <th scope="col" className="p-4 font-semibold">Offer ends</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {SALE.map((t) => (
                  <tr key={t.tld} className="border-t border-white/5">
                    <th scope="row" className="p-4 font-medium text-white">{t.tld}</th>
                    <td className="p-4 text-green-400 font-semibold">{usd(t.sale)}</td>
                    <td className="p-4">{usd(t.regular)}</td>
                    <td className="p-4 text-amber-300">{off(t.regular, t.sale)}%</td>
                    <td className="p-4 text-gray-400">{t.ends}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-10">
            These are the headline extensions from a list of 363. If the one you want is not here, it is almost
            certainly on Dynadot&apos;s full sales table with its own price and expiry.
          </p>

          <div className="text-center my-12">
            <DealButton label={`Search your domain at Dynadot →`} />
            <p className="text-xs text-gray-500 mt-3">
              Opens Dynadot with my referral link. Prices move with exchange rates — the checkout total is the real number.
            </p>
          </div>

          {/* Coupon */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            The one Dynadot coupon code that is actually live
          </h2>
          <div className="p-6 rounded-2xl border border-green-500/25 bg-green-500/[0.06] mb-6">
            <p className="text-gray-300 leading-8">
              <strong className="text-white text-lg">{COUPON.code}</strong> — {COUPON.what} for{" "}
              <strong className="text-white">{usd(COUPON.price)}</strong> instead of {usd(COUPON.was)}.
              Expires {COUPON.ends}.
            </p>
          </div>
          <p className="text-gray-300 leading-8 mb-12">
            That one is published by Dynadot on its own sales page with the expiry printed beside it. Almost every
            other &ldquo;Dynadot coupon&rdquo; you will find is a dead campaign string that a deal aggregator
            scraped years ago and relabelled for the current year. Those pages do not need the code to work — the
            click sets their affiliate cookie either way. The test takes five seconds: if the order total does not
            move when you apply a code, the code is dead.
          </p>

          {/* The honest part */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            The part a cheap-domain roundup should tell you
          </h2>
          <p className="text-gray-300 leading-8 mb-4">
            A {usd(cheapest.sale)} domain is a real price for exactly twelve months. After that {cheapest.tld} renews
            at {usd(cheapest.regular)} every year, forever. That is not Dynadot doing something to you — the renewal
            rates on new extensions are set by the registries behind them and look similar wherever you buy.
          </p>
          <p className="text-gray-300 leading-8 mb-4">
            Run it over five years and the ranking inverts:
          </p>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-6">
            <p className="text-gray-300 leading-8 mb-2">
              {cheapest.tld} — {usd(cheapest.sale)} + four years at {usd(cheapest.regular)} ={" "}
              <strong className="text-white">{usd(fiveYearXyz)}</strong>
            </p>
            <p className="text-gray-300 leading-8">
              {com.tld} — five years at a flat {usd(com.price)} ={" "}
              <strong className="text-white">{usd(fiveYearCom)}</strong>
            </p>
          </div>
          <p className="text-gray-300 leading-8 mb-12">
            The {usd(cheapest.sale)} domain is the more expensive one, on the extension people trust less. So the
            honest advice is split, not single: <strong className="text-white">take the {usd(cheapest.sale)} domain
            for anything experimental</strong> — a side project, a campaign page, a name you are parking — and
            <strong className="text-white"> take the flat-priced {com.tld} for anything with your name or your
            business on it.</strong> Both decisions are correct. Mixing them up is what costs money.
          </p>

          {/* Flat priced */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            The extensions that never go on sale — and why that is good
          </h2>
          <p className="text-gray-300 leading-8 mb-6">
            Three of the most useful extensions are absent from the Black Friday list entirely, because the price is
            the same every day of the year:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10 mb-6">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Dynadot flat-priced extensions, checked 24 November 2026</caption>
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Extension</th>
                  <th scope="col" className="p-4 font-semibold">Price, every year</th>
                  <th scope="col" className="p-4 font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {FLAT.map((f) => (
                  <tr key={f.tld} className="border-t border-white/5">
                    <th scope="row" className="p-4 font-medium text-white">{f.tld}</th>
                    <td className="p-4 text-green-400 font-semibold">{usd(f.price)}</td>
                    <td className="p-4 text-gray-400">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-8 mb-12">
            On .com, register, renew and transfer are all {usd(com.price)} — the same number in all three columns.
            Moving a .com in therefore costs a year of renewal you were going to pay anyway, and adds that year to
            the existing expiry rather than resetting it. For a domain attached to a business, the renewal price
            <em> is</em> the price, and the first year is a rounding error. I compared that across registrars in{" "}
            <Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
              five-year cost for the major domain registrars
            </Link>.
          </p>

          {/* Buying from India */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            Buying from India
          </h2>
          <p className="text-gray-300 leading-8 mb-4">
            Dynadot lists INR among its supported currencies alongside USD, EUR, GBP and others, and takes credit
            cards, debit cards, PayPal, bank wire and account credit. So the purchase itself is straightforward.
          </p>
          <p className="text-gray-300 leading-8 mb-12">
            Two things to budget for. Pricing is set in USD and Dynadot&apos;s own table notes that amounts vary with
            exchange-rate movement, so the rupee figure is not fixed. And an Indian card may add a
            foreign-transaction fee on top of that. Treat the dollar price as a floor. If you would rather pay in
            rupees with no conversion at all, that is a genuine argument for an Indian registrar — the trade-off is
            usually a higher renewal rate, which is the thing this whole page exists to make you check.
          </p>

          {/* Who for */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            Buy in this sale if — and skip it if
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 mb-12">
            <div className="p-6 rounded-2xl border border-green-500/25 bg-green-500/[0.06]">
              <h3 className="font-bold text-green-300 mb-3">Worth buying now</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>A side project or campaign name — {usd(cheapest.sale)} is as cheap as it gets</li>
                <li>A .tech or .online you were going to buy anyway, at {off(biggestSaving.regular, biggestSaving.sale)}% off</li>
                <li>A transfer you have been putting off — {COUPON.code} until {COUPON.ends}</li>
                <li>Multi-year registration, which locks the sale price for longer</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-red-500/25 bg-red-500/[0.06]">
              <h3 className="font-bold text-red-300 mb-3">Skip it</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>A business domain — buy the flat {usd(com.price)} .com instead</li>
                <li>Anything you will keep 5+ years on a {usd(cheapest.sale)} extension</li>
                <li>If you need to pay in rupees with zero forex exposure</li>
                <li>If you cannot name the project yet — the sale repeats every year</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-6">Dynadot Black Friday 2026 — questions people actually ask</h2>
          <div className="space-y-6 mb-12">
            {FAQ.map((f) => (
              <div key={f.q} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">{f.q}</h3>
                <p className="text-gray-300 leading-8">{f.a}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">If you are still choosing a registrar</h2>
          <ul className="list-disc pl-8 space-y-3 text-gray-300 mb-12">
            <li>
              <Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best domain registrars compared on five-year cost</Link>
              {" "}— GoDaddy, Namecheap, Porkbun and Dynadot side by side
            </li>
            <li>
              <Link href="/blog/namecheap-vs-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Namecheap vs GoDaddy</Link>
              {" "}— the two most people are actually choosing between
            </li>
            <li>
              <Link href="/blog/how-to-transfer-domain-from-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">How to transfer a domain away from GoDaddy</Link>
              {" "}— unlock, auth code and the 60-day lock, step by step
            </li>
            <li>
              <Link href="/blog/domain-kaise-kharide-galtiyan-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Domain kharidte waqt hone wali galtiyan</Link>
              {" "}— the mistakes that cost money later
            </li>
          </ul>

          {/* Verdict */}
          <section className="p-8 bg-primary-500/5 rounded-2xl border border-primary-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The verdict</h2>
            <p className="text-gray-300 leading-8 mb-4">
              This is a genuinely good sale, and Dynadot is unusually honest about it — the regular price sits in
              the column next to the sale price on its own table, with an expiry date beside each one. Most
              registrars make you discover the second number a year later, on an invoice.
            </p>
            <p className="text-gray-300 leading-8">
              So buy the {usd(cheapest.sale)} name for the idea you want to test this weekend. Buy the flat{" "}
              {usd(com.price)} .com for the thing you are building for real. And whatever you buy, turn auto-renew
              on — the restore fee after a lapse is {usd(100.92)}, which is more than a decade of renewals.
            </p>
          </section>

          <div className="text-center my-12">
            <DealButton label="See the live sale prices at Dynadot →" />
          </div>

          <ShareButtons title={TITLE} url={CANONICAL} />
          <RelatedPosts slug="dynadot-review-2026" />
        </article>
      </main>
    </>
  );
}
