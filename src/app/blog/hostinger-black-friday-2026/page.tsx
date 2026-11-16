import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-black-friday-2026";
const TITLE = "Hostinger Black Friday 2026: ₹69/mo Live Now, Renews at ₹289";
const DESCRIPTION =
  "Hostinger's India sale is already live before Black Friday — ₹69/mo on Single, ₹139 Premium, ₹599 KVM 1 VPS. Every renewal rate and the +319% jump, checked on the India storefront on 16 November 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Keyword tiers. Meta keywords do not rank on their own — this exists so the page has
  // one explicit PRIMARY term, which the title, H1 and intro are then written around.
  keywords: [
    // PRIMARY
    "hostinger black friday 2026",

    // SECONDARY — H2s and body
    "hostinger black friday sale india", "hostinger black friday deal",
    "hostinger cyber monday 2026", "hostinger sale 2026", "hostinger offer india",
    "hostinger black friday price", "hostinger discount black friday",

    // LONG-TAIL — FAQ and specific sections
    "when does hostinger black friday sale start 2026",
    "is hostinger black friday worth it",
    "hostinger black friday renewal price",
    "hostinger black friday vps deal india",
    "should i wait for hostinger black friday",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description:
      "The sale is live before Black Friday even starts. Every plan's sale price, every renewal rate, and the one number that decides whether the deal is good.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "/assets/blog/hostinger-black-friday-2026.svg", width: 1200, height: 630, alt: "Hostinger Black Friday 2026 India price ladder showing sale rates beside renewal rates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hostinger Black Friday 2026 — ₹69/mo, and the renewal nobody prints",
    description: "Sale prices and renewal rates side by side for every Hostinger India plan, checked 16 November 2026.",
    images: ["/assets/blog/hostinger-black-friday-2026.svg"],
  },
};

const CHECKED = "16 November 2026";

// Every figure below was read off Hostinger's own India storefront on the date above.
// Shared plans are quoted on the 48-month term, VPS on the 24-month term, because that
// is the term each sale price is attached to. Nothing here is retyped from another blog.
const SHARED = [
  { plan: "Single", sale: 69, term: 3312, months: 48, renew: 289 },
  { plan: "Premium", sale: 139, term: 6672, months: 48, renew: 449 },
  { plan: "Unlimited", sale: 199, term: 9552, months: 48, renew: 649 },
  { plan: "Cloud Startup", sale: 599, term: 28752, months: 48, renew: 1599 },
];

const VPS = [
  { plan: "KVM 1", sale: 599, term: 14376, months: 24, renew: 999 },
  { plan: "KVM 2", sale: 779, term: 18696, months: 24, renew: 1199 },
  { plan: "KVM 4", sale: 1099, term: 26376, months: 24, renew: 2399 },
  { plan: "KVM 8", sale: 2199, term: 52776, months: 24, renew: 4399 },
];

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
const jump = (sale: number, renew: number) => Math.round((renew / sale - 1) * 100);

const FAQ = [
  {
    q: "When does the Hostinger Black Friday sale start in 2026?",
    a: "Black Friday 2026 falls on 27 November and Cyber Monday on 30 November. But Hostinger does not wait for the date — I checked the India storefront on 16 November 2026 and the sale was already running, with Single at ₹69/mo and KVM 1 VPS at ₹599/mo on their respective long terms. Hostinger runs a near-continuous sale calendar, so the practical question is not when the sale starts but whether the number on the day you buy is lower than the number today.",
  },
  {
    q: "What is the Hostinger Black Friday price in India in 2026?",
    a: "As checked on 16 November 2026 on the India storefront: Single ₹69/mo, Premium ₹139/mo, Unlimited ₹199/mo and Cloud Startup ₹599/mo, each on a 48-month term. On VPS, KVM 1 is ₹599/mo, KVM 2 ₹779/mo, KVM 4 ₹1,099/mo and KVM 8 ₹2,199/mo on 24-month terms. Add 18% GST at checkout. These are the public sale prices before any referral discount.",
  },
  {
    q: "Is the Hostinger Black Friday deal actually worth it?",
    a: "It depends entirely on which plan, and the deciding number is the renewal rate rather than the discount percentage. Single drops to ₹69/mo but renews at ₹289/mo — a 319% increase, the steepest on the whole ladder. Cloud Startup renews at ₹1,599 against a ₹599 sale price, a 167% increase, the flattest. The deepest-looking discount has the worst renewal, which is exactly the opposite of how the banners present it.",
  },
  {
    q: "Should I wait for Black Friday or buy now?",
    a: "Buying before the date is usually fine, because the sale is already live and Hostinger's headline percentages move within a narrow band through November and December. The one thing worth waiting out is the term: the sale rate exists only on the longest term, so the real decision is whether you want a four-year commitment, not whether you catch the right week. If the project is less than a few months old, pay monthly at the undiscounted rate and stay free to leave.",
  },
  {
    q: "Does the Black Friday discount apply to the renewal price?",
    a: "No. Every Hostinger sale, coupon and referral discount is first-purchase only. When the term ends you move to the standard renewal rate — ₹289/mo on Single, ₹449 Premium, ₹649 Unlimited, ₹1,599 Cloud Startup, ₹999 on KVM 1. This is the single most expensive thing people miss in a Black Friday window, because the sale price is printed in 48-point type and the renewal rate is not printed at all.",
  },
  {
    q: "Can I use a referral code on top of the Black Friday sale?",
    a: "Yes, and that is the one stack that genuinely works. The referral discount sits on top of the public sale price rather than replacing it. I run two referral codes — MOHITKOLI and HOSTFIFTY — and either applies automatically when checkout opens through the link, so there is nothing to type. Two campaign coupons will not stack with each other, and the checkout accepts only one code in the field, so sale price plus referral is the realistic floor.",
  },
  {
    q: "Is the advertised ₹69/mo an actual monthly bill?",
    a: "No, and this catches people every year. ₹69/mo is ₹3,312 divided by 48 months, charged as one invoice today, plus 18% GST. There is no ₹69 monthly charge. Take the same plan month-to-month and there is effectively no discount at all — you pay close to the renewal rate from day one. The Black Friday price is a financing decision dressed as a hosting decision.",
  },
  {
    q: "What about domains, business email and the other Hostinger services?",
    a: "Domains, business email, Horizons and the AI website builder all sit behind their own price pages and their own renewal rates, and registry pricing on domains moves independently of any hosting sale. I keep those on separate pages with their own verified figures rather than folding guesses into a Black Friday table — the domain renewal gap in particular is wider than the hosting one and deserves its own read.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://mohitkoli.in/assets/blog/hostinger-black-friday-2026.svg",
    datePublished: "2026-11-16T00:00:00.000Z",
    dateModified: "2026-11-16T00:00:00.000Z",
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
    keywords: "hostinger black friday 2026, hostinger black friday sale india, hostinger cyber monday 2026, hostinger sale 2026",
    articleSection: "Hosting",
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
      { "@type": "ListItem", position: 3, name: "Hostinger Black Friday 2026", item: CANONICAL },
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

function PriceTable({ rows, caption }: { rows: typeof SHARED; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-white/5 text-gray-300">
          <tr>
            <th scope="col" className="p-4 font-semibold">Plan</th>
            <th scope="col" className="p-4 font-semibold">Sale price</th>
            <th scope="col" className="p-4 font-semibold">You pay today</th>
            <th scope="col" className="p-4 font-semibold">Renews at</th>
            <th scope="col" className="p-4 font-semibold">Increase</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {rows.map((r) => (
            <tr key={r.plan} className="border-t border-white/5">
              <th scope="row" className="p-4 font-medium text-white">{r.plan}</th>
              <td className="p-4">{inr(r.sale)}/mo</td>
              <td className="p-4">{inr(r.term)} · {r.months} mo</td>
              <td className="p-4">{inr(r.renew)}/mo</td>
              <td className="p-4 text-amber-300">+{jump(r.sale, r.renew)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HostingerBlackFriday2026() {
  const worst = SHARED.reduce((a, b) => (jump(a.sale, a.renew) > jump(b.sale, b.renew) ? a : b));
  const flattest = SHARED.reduce((a, b) => (jump(a.sale, a.renew) < jump(b.sale, b.renew) ? a : b));

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
              <li className="text-gray-300">Hostinger Black Friday 2026</li>
            </ol>
          </nav>

          <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">
            Black Friday · Checked {CHECKED}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Hostinger Black Friday 2026 — {inr(69)}/mo Is Live, and It Renews at {inr(289)}
          </h1>

          <p className="text-lg text-gray-300 leading-8 mb-3">
            Black Friday 2026 falls on <strong className="text-white">27 November</strong>, Cyber Monday on 30 November.
            Hostinger did not wait for either. I opened the India storefront on {CHECKED} and the sale was already
            running — Single at {inr(69)}/mo, KVM 1 VPS at {inr(599)}/mo. So the useful question is not
            <em> when does the sale start</em>. It is <strong className="text-white">which plan is actually worth
            buying on sale</strong>, and the answer comes from the renewal column, not the discount banner.
          </p>
          <p className="text-lg text-gray-300 leading-8 mb-3">
            Every figure on this page was read off Hostinger&apos;s own India pages on {CHECKED}, with the term each
            price is attached to written next to it. Nothing is copied from another deals blog, and I have put the
            renewal rate beside every sale rate — including the one that makes the headline offer the worst deal
            on the ladder.
          </p>
          <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
            Disclosure: links on this page use my Hostinger referral code. You get an extra discount on top of the
            sale, I earn a commission at no extra cost to you. Hostinger changes sale prices through the season, so
            the order summary at checkout is always the real number — not this table, and not any banner.
          </p>

          {/* Hero image */}
          <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/assets/blog/hostinger-black-friday-2026.svg"
              alt="Hostinger India Black Friday 2026 price ladder: Single ₹69, Premium ₹139, Unlimited ₹199, Cloud Startup ₹599, each shown beside its renewal rate"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Direct answer */}
          <section className="p-8 bg-primary-500/5 rounded-2xl border border-primary-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The short answer</h2>
            <p className="text-gray-300 leading-8 mb-4">
              The sale is live now, before the date. The cheapest shared plan is {inr(69)}/mo and the cheapest VPS is
              {" "}{inr(599)}/mo, both on their longest terms. The discount is real. The part the banner leaves out is
              that <strong className="text-white">{worst.plan} renews at {inr(worst.renew)}/mo</strong>, which is a
              {" "}{jump(worst.sale, worst.renew)}% increase — the steepest jump of any plan Hostinger sells in India.
            </p>
            <p className="text-gray-300 leading-8">
              {flattest.plan} has the flattest renewal on the shared ladder at +{jump(flattest.sale, flattest.renew)}%.
              On VPS, KVM 2 is the flattest at +{jump(VPS[1].sale, VPS[1].renew)}%. Deepest discount and best value are
              not the same plan, and in this sale they are at opposite ends of the list.
            </p>
          </section>

          {/* Shared ladder */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            Hostinger Black Friday prices in India — shared and cloud hosting
          </h2>
          <p className="text-gray-300 leading-8 mb-6">
            All four plans on the 48-month term, which is the only term the sale price attaches to. Add 18% GST at
            checkout; none of these numbers include it.
          </p>
          <PriceTable rows={SHARED} caption="Hostinger India shared and cloud hosting sale prices and renewal rates, checked 16 November 2026" />
          <p className="text-sm text-gray-500 mb-10">
            Read the last column, not the second. {worst.plan} looks like the deal of the year at {inr(worst.sale)} and
            carries the harshest renewal on the page. {flattest.plan} looks expensive and costs the least to keep.
          </p>

          {/* VPS ladder */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            Hostinger Black Friday VPS deal — the KVM ladder
          </h2>
          <p className="text-gray-300 leading-8 mb-6">
            VPS sale prices sit on 24-month terms rather than 48, so the commitment is half as long for the same
            discount structure. The jump is not uniform across the ladder, which is the whole reason to read this
            table before picking a tier.
          </p>
          <PriceTable rows={VPS} caption="Hostinger India KVM VPS sale prices and renewal rates, checked 16 November 2026" />
          <p className="text-sm text-gray-500 mb-6">
            KVM 4 more than doubles at renewal (+{jump(VPS[2].sale, VPS[2].renew)}%) and is the tier most
            &ldquo;best VPS&rdquo; listicles push you toward. KVM 2 is the flattest on the ladder
            (+{jump(VPS[1].sale, VPS[1].renew)}%).
          </p>
          <p className="text-gray-300 leading-8 mb-12">
            Tier-by-tier specs, what each box actually carries, and the month it stops being enough are in{" "}
            <Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
              the full KVM plan breakdown
            </Link>.
          </p>

          <div className="text-center my-12">
            <DealButton label="Check the live Black Friday price →" />
            <p className="text-xs text-gray-500 mt-3">
              Opens Hostinger India with my referral code applied. The order summary is the real number.
            </p>
          </div>

          {/* What Black Friday actually changes */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            Should you wait for 27 November?
          </h2>
          <p className="text-gray-300 leading-8 mb-4">
            Mostly, no — and this is the part the countdown timers are designed to stop you thinking about.
          </p>
          <p className="text-gray-300 leading-8 mb-4">
            Hostinger runs a near-continuous sale calendar. The headline percentage moves inside a narrow band through
            November and December, and the sale was already live eleven days before Black Friday when I checked. Waiting
            for the date to save another few rupees a month on a four-year invoice is optimising the wrong variable.
          </p>
          <p className="text-gray-300 leading-8 mb-4">
            The variable that actually matters is the <strong className="text-white">term</strong>. The sale rate exists
            only on the longest term, so the real decision is not <em>which week do I buy</em> but <em>am I willing to
            pay four years up front</em>. {inr(SHARED[1].term)} today on Premium is a bet that the project still exists
            in 2030.
          </p>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-12">
            <p className="text-gray-300 leading-8">
              If the site has not found users yet, the honest answer is to skip the sale entirely and pay monthly at
              the undiscounted rate. It costs more per month and far less in total when the project does not survive —
              which is most of the time. The discount is only a discount if you were going to stay four years anyway.
            </p>
          </div>

          {/* Stacking */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            The one discount that stacks on top of the sale
          </h2>
          <p className="text-gray-300 leading-8 mb-4">
            Nearly every &ldquo;Hostinger Black Friday coupon code&rdquo; you will find is a dead campaign string that
            has been recycled through three different years. Coupon aggregators scrape codes automatically, swap the
            year in the title each January and label everything verified — and the click sets their affiliate cookie
            whether or not your total moves by a rupee.
          </p>
          <p className="text-gray-300 leading-8 mb-4">
            What does work is a referral code, because it is attached to a customer account rather than a sale
            calendar. I run two, <strong className="text-white">MOHITKOLI</strong> and{" "}
            <strong className="text-white">HOSTFIFTY</strong>, and either applies automatically when checkout opens
            through the link. There is nothing to type and no third &ldquo;exclusive&rdquo; code that beats them.
          </p>
          <p className="text-gray-300 leading-8 mb-12">
            The checkout accepts one code in the field, and two campaign coupons will not stack with each other. Sale
            price plus referral is the floor. Why most listed codes are dead, and how to tell in five seconds whether
            one did anything, is in{" "}
            <Link href="/blog/hostinger-discount-code-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
              the coupon code breakdown
            </Link>.
          </p>

          {/* GST */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            The 18% nobody quotes
          </h2>
          <p className="text-gray-300 leading-8 mb-4">
            Every price on this page is pre-GST, because that is how Hostinger displays them. GST at 18% is added at
            checkout. On Premium&apos;s {inr(SHARED[1].term)} term that is roughly {inr(Math.round(SHARED[1].term * 0.18))}{" "}
            on top.
          </p>
          <p className="text-gray-300 leading-8 mb-12">
            This is the single biggest reason dollar-priced comparison articles are wrong for Indian buyers before the
            renewal error even starts — they quote the US page and skip the tax entirely. To see a total with the term,
            the renewal and GST together, use the{" "}
            <Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
              hosting cost calculator
            </Link>.
          </p>

          {/* Other services */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-4">
            Domains, email and the rest of the Hostinger catalogue
          </h2>
          <p className="text-gray-300 leading-8 mb-4">
            Hostinger sells more than hosting — domains, business email, cloud plans, the AI website builder, game
            servers. A sale window touches all of them, but each sits behind its own price page with its own renewal
            rate, and domain pricing in particular moves with registry costs rather than with any hosting promotion.
          </p>
          <p className="text-gray-300 leading-8 mb-4">
            Rather than fold guesses into the tables above, those live on their own pages with their own checked
            figures and dates:
          </p>
          <ul className="list-disc pl-8 space-y-3 text-gray-300 mb-12">
            <li>
              <Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger domain prices in India</Link>
              {" "}— where the first-year and renewal gap is wider than it is on hosting
            </li>
            <li>
              <Link href="/blog/hostinger-business-email-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger business email pricing</Link>
            </li>
            <li>
              <Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger cloud hosting plans</Link>
            </li>
            <li>
              <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">What every Hostinger plan renews at</Link>
              {" "}— the whole catalogue in one table
            </li>
          </ul>

          {/* FAQ */}
          <h2 className="text-3xl font-bold text-white mt-16 mb-6">Hostinger Black Friday 2026 — questions people actually ask</h2>
          <div className="space-y-6 mb-12">
            {FAQ.map((f) => (
              <div key={f.q} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">{f.q}</h3>
                <p className="text-gray-300 leading-8">{f.a}</p>
              </div>
            ))}
          </div>

          {/* Verdict */}
          <section className="p-8 bg-primary-500/5 rounded-2xl border border-primary-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The verdict</h2>
            <p className="text-gray-300 leading-8 mb-4">
              Buy on sale if you already knew you were staying. Pick the plan by its renewal rate, not its discount
              percentage — which means {flattest.plan} or KVM 2 before {worst.plan}, however the banner is ordered.
              Take the longest term only if the four-year bet is one you would make without a countdown timer on the
              screen.
            </p>
            <p className="text-gray-300 leading-8">
              And if you are not sure yet, the right move in a Black Friday window is the unglamorous one: pay monthly,
              stay free to leave, and buy the term next year when you know the project survived.
            </p>
          </section>

          <div className="text-center my-12">
            <DealButton label="Open Hostinger India with the referral discount →" />
          </div>

          <ShareButtons title={TITLE} url={CANONICAL} />
          <RelatedPosts slug="hostinger-black-friday-2026" />
        </article>
      </main>
    </>
  );
}
