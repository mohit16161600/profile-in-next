import Link from "next/link";
import {
  Award,
  CheckCircle,
  Globe,
  Percent,
  ShieldCheck,
  Zap,
} from "lucide-react";

const REFERRAL_LINK = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Hostinger discount code for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Hostinger discount code featured on this page is MOHITKOLI. It can help you unlock extra savings on eligible hosting plans, often with bonus value like a free domain and SSL depending on the selected plan.",
      },
    },
    {
      "@type": "Question",
      name: "How much discount can I get with Hostinger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hostinger promotions can reach up to 90% off on longer-term plans. The exact final price depends on the hosting package, region, and current promotional window.",
      },
    },
    {
      "@type": "Question",
      name: "Is Hostinger good for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hostinger is popular with beginners because it is affordable, easy to manage, includes a simple control panel, offers one-click WordPress setup, and gives solid performance for starter websites.",
      },
    },
  ],
};

const HostingerDiscount = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-12">
        <section className="rounded-3xl border border-primary-500/20 bg-primary-900/10 p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Hostinger Discount Code 2026: Save More With Referral Code MOHITKOLI
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you are looking for a <strong>verified Hostinger discount code in 2026</strong>, this page gives you the fastest route. By using my referral code <strong>MOHITKOLI</strong>, you can unlock one of the best available Hostinger deals and reduce your starting cost significantly.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For beginners, bloggers, freelancers, agencies, and small business owners, Hostinger is still one of the best value hosting platforms because it combines low pricing, strong uptime, fast LiteSpeed performance, and beginner-friendly setup in one package.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrustCard
            icon={<Award className="w-12 h-12 text-yellow-400 mb-4" />}
            title="Strong Reputation"
            desc='Widely trusted by beginners and small businesses for affordable shared and WordPress hosting.'
          />
          <TrustCard
            icon={<ShieldCheck className="w-12 h-12 text-green-400 mb-4" />}
            title="30-Day Refund"
            desc="You can test the service with lower risk thanks to the money-back guarantee."
          />
          <TrustCard
            icon={<Globe className="w-12 h-12 text-blue-400 mb-4" />}
            title="Global Reach"
            desc="Useful for websites targeting India, the US, Europe, and other international markets."
          />
        </div>

        <div className="relative group overflow-hidden rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-primary-600 to-purple-700 shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
              Claim Up to 90% OFF
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              Use code{" "}
              <span className="bg-white text-primary-600 px-3 py-1 rounded-lg font-mono font-bold">
                MOHITKOLI
              </span>{" "}
              to maximize your Hostinger savings.
            </p>
            <Link
              href={REFERRAL_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-xl"
              target="_blank"
            >
              Activate Discount Now
              <Zap className="ml-2 w-6 h-6 fill-current" />
            </Link>
            <p className="mt-4 text-white/70 text-sm italic">
              Pricing and offers can change, so it is smart to claim the deal while it is active.
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary-500 pl-4">
            Why Many Beginners Choose Hostinger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <BenefitItem
                title="Affordable Entry Pricing"
                desc="Hostinger is popular because it lets new site owners get online without spending too much upfront."
              />
              <BenefitItem
                title="Good Speed for the Price"
                desc="LiteSpeed servers, SSD or NVMe storage, and built-in caching help improve loading speed."
              />
              <BenefitItem
                title="Simple Dashboard"
                desc="Its custom control panel is easier for many beginners than traditional cPanel-heavy hosting."
              />
            </div>
            <div className="space-y-4">
              <BenefitItem
                title="WordPress Friendly"
                desc="You can install WordPress quickly and manage themes, plugins, SSL, and email from one place."
              />
              <BenefitItem
                title="Useful Free Extras"
                desc="Depending on the plan, you may get a free domain, SSL, and email value bundled in."
              />
              <BenefitItem
                title="Scalable for Growth"
                desc="You can start small and later move to stronger plans if your traffic or business grows."
              />
            </div>
          </div>
        </section>

        <section className="glass rounded-2xl border border-white/5 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Price Comparison: Standard vs Discounted Value
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-slate-200 font-semibold">Feature</th>
                  <th className="py-4 px-4 text-slate-300 font-semibold text-center">Typical Value</th>
                  <th className="py-4 px-4 text-primary-300 font-bold text-center bg-primary-500/10 rounded-t-xl">
                    With MOHITKOLI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Hosting plan price</td>
                  <td className="py-4 px-4 text-slate-300 text-center line-through">$14.99</td>
                  <td className="py-4 px-4 text-white font-bold text-center bg-primary-500/10">
                    From around $2.99/mo
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Domain name</td>
                  <td className="py-4 px-4 text-slate-300 text-center">$9.99+</td>
                  <td className="py-4 px-4 text-green-400 font-bold text-center bg-primary-500/10">
                    Often FREE
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">SSL certificate</td>
                  <td className="py-4 px-4 text-slate-300 text-center">Extra cost elsewhere</td>
                  <td className="py-4 px-4 text-green-400 font-bold text-center bg-primary-500/10">
                    FREE
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Email and backups</td>
                  <td className="py-4 px-4 text-slate-300 text-center">Varies by provider</td>
                  <td className="py-4 px-4 text-white font-bold text-center bg-primary-500/10 rounded-b-xl">
                    Better bundled value
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Final pricing can vary by country, plan, billing cycle, and live promotion.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center">
            <Percent className="mr-3 text-primary-500" />
            How to Apply the Hostinger Discount Code
          </h3>
          <div className="space-y-6">
            <Step index={1} text="Click the Hostinger referral link on this page." />
            <Step index={2} text="Choose the hosting plan that fits your website needs." />
            <Step index={3} text="Select a longer billing period if you want the best savings." />
            <Step index={4} text="At checkout, confirm that the referral discount is applied or enter code MOHITKOLI if needed." />
            <Step index={5} text="Complete payment and claim your hosting setup bonuses." />
          </div>
          <div className="mt-10 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <p className="text-yellow-200 text-sm leading-relaxed">
              <strong>Money-saving tip:</strong> the longer-term plans usually give the best headline discount. If you already know you are serious about your site, that option often gives the strongest total value.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            Which Hostinger Plan Is Best for You?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PlanCard
              title="Single or basic shared plan"
              desc="Best for first websites, test projects, and beginners who want the lowest possible starting cost."
            />
            <PlanCard
              title="Premium or Business plan"
              desc="Best for bloggers, freelancers, small business sites, and people who want stronger features and better bundled value."
            />
            <PlanCard
              title="Cloud or VPS options"
              desc="Best for advanced users, higher traffic websites, agencies, and projects that need more resources."
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            Real Use Cases Where Hostinger Makes Sense
          </h2>
          <div className="space-y-4">
            <UseCase
              title="Bloggers and niche site owners"
              desc="If you want to launch a content website with WordPress and keep your starting cost low, Hostinger is often a practical choice."
            />
            <UseCase
              title="Freelancers building client websites"
              desc="It is useful for local business websites, landing pages, portfolios, and brochure-style company sites where budget matters."
            />
            <UseCase
              title="Students and beginners learning hosting"
              desc="The simple dashboard and low pricing make it easier to learn domains, SSL, emails, and deployments without overspending."
            />
          </div>
        </section>

        <section className="rounded-3xl border border-blue-500/20 bg-blue-950/10 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Important Things to Know Before You Buy
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Low intro pricing is usually tied to longer billing periods.</li>
            <li>Renewal rates are often higher than the first-term promotional rate.</li>
            <li>You should compare shared, WordPress, cloud, and VPS plans before purchasing.</li>
            <li>The best plan depends on whether you are building a blog, client site, ecommerce store, or app.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            FAQ: Hostinger Discount Code 2026
          </h2>

          <FaqItem
            question="What is the Hostinger coupon code on this page?"
            answer="The referral code featured here is MOHITKOLI. It is designed to help you unlock better pricing when available through the Hostinger checkout flow."
          />
          <FaqItem
            question="Is this Hostinger discount code verified?"
            answer="Yes, this page is built around my referral offer. Final discounts still depend on Hostinger's active promotion, plan, and billing cycle."
          />
          <FaqItem
            question="Does Hostinger include a free domain?"
            answer="Many Hostinger plans include a free domain for the first year, especially on longer-term plans, but the exact offer depends on the package you choose."
          />
          <FaqItem
            question="Is Hostinger good for WordPress?"
            answer="Yes. Hostinger is a common choice for WordPress users because setup is easy, pricing is beginner-friendly, and performance is solid for most starter websites."
          />
          <FaqItem
            question="Should I buy Hostinger for 1 year or 4 years?"
            answer="If you are sure you will keep the website running, the longer term usually gives better value. If you are still testing an idea, a shorter commitment may feel safer."
          />
        </section>

        <section className="py-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Website for Less?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            If you want a low-cost way to launch a blog, portfolio, agency site, or business website, Hostinger remains one of the strongest budget-friendly options. Use my referral code to maximize your savings while the deal is active.
          </p>
          <Link
            href={REFERRAL_LINK}
            className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-black px-12 py-5 rounded-full text-2xl transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            target="_blank"
          >
            Get Hostinger Discount Now
          </Link>
          <p className="mt-6 text-gray-400">
            Start with the plan that fits your needs and scale later if your website grows.
          </p>
        </section>
      </div>
    </>
  );
};

const TrustCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
    {icon}
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const BenefitItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1 bg-primary-500/20 p-1 rounded-full">
      <CheckCircle className="w-5 h-5 text-primary-500" />
    </div>
    <div>
      <h4 className="text-white font-bold">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Step = ({ index, text }: { index: number; text: string }) => (
  <div className="flex items-center space-x-6">
    <span className="w-10 h-10 flex-shrink-0 bg-primary-600 text-white font-bold rounded-full flex items-center justify-center">
      {index}
    </span>
    <p className="text-gray-300 text-lg">{text}</p>
  </div>
);

const PlanCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{desc}</p>
  </div>
);

const UseCase = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-white mb-3">{question}</h3>
    <p className="text-gray-300 leading-relaxed">{answer}</p>
  </div>
);

export default HostingerDiscount;
