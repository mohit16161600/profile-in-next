import React from 'react';
import Link from 'next/link';
import { CheckCircle, ShieldCheck, Zap, Globe, Award, Percent } from 'lucide-react';

const REFERRAL_LINK = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";

const HostingerDiscount = () => {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          Are you looking for the best web hosting deal in 2026? You've come to the right place. 
          As a developer, I've tested dozens of hosting providers, and <strong>Hostinger</strong> consistently 
          stands out for its incredible speed, reliability, and most importantly, its value for money.
        </p>
        <p className="text-lg text-gray-400">
          By using my exclusive referral code <strong>MOHITKOLI</strong>, you can unlock an additional discount 
          of up to <strong>90% OFF</strong> on your hosting plan. This is a verified deal that includes a 
          <strong> FREE Domain</strong>, <strong>FREE SSL</strong>, and <strong>FREE Email</strong>.
        </p>
      </section>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
          <Award className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">4.8/5 Rating</h3>
          <p className="text-gray-400 text-sm">Rated "Excellent" by 20,000+ users on Trustpilot.</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
          <ShieldCheck className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">30-Day Guarantee</h3>
          <p className="text-gray-400 text-sm">Risk-free trial. Not satisfied? Get a full refund.</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
          <Globe className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">1.2M+ Users</h3>
          <p className="text-gray-400 text-sm">Trusted by developers and businesses worldwide.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative group overflow-hidden rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-primary-600 to-purple-700 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Claim Up to 90% Discount
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Use code <span className="bg-white text-primary-600 px-3 py-1 rounded-lg font-mono font-bold">MOHITKOLI</span> at checkout to maximize your savings.
          </p>
          <Link 
            href={REFERRAL_LINK}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-xl"
            target="_blank"
          >
            Activate Discount Now
            <Zap className="ml-2 w-6 h-6 fill-current" />
          </Link>
          <p className="mt-4 text-white/60 text-sm italic">
            *Offer valid for a limited time only!
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary-500 pl-4">
          Why Choose Hostinger with Code: MOHITKOLI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <BenefitItem 
              title="Ultra-Fast Performance" 
              desc="Powered by LiteSpeed Web Server and NVMe SSD storage for lightning-fast load times." 
            />
            <BenefitItem 
              title="24/7 Premium Support" 
              desc="Expert assistance available anytime via live chat and email to help you succeed." 
            />
            <BenefitItem 
              title="One-Click WordPress Install" 
              desc="Set up your website in seconds with a managed WordPress environment." 
            />
          </div>
          <div className="space-y-4">
            <BenefitItem 
              title="Unbeatable Security" 
              desc="Weekly backups, DDoS protection, and free SSL certificates to keep your site safe." 
            />
            <BenefitItem 
              title="Global Data Centers" 
              desc="Choose from servers in the USA, Europe, India, and more for low latency." 
            />
            <BenefitItem 
              title="99.9% Uptime Guarantee" 
              desc="Your website stays online consistently with our top-tier infrastructure." 
            />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-12 glass rounded-2xl border border-white/5 p-4 md:p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Price Comparison: You vs The Others</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-4 text-gray-400 font-medium">Feature</th>
              <th className="py-4 px-4 text-gray-400 font-medium text-center">Standard Price</th>
              <th className="py-4 px-4 text-primary-400 font-bold text-center bg-primary-500/10 rounded-t-xl">With Code: MOHITKOLI</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/5">
              <td className="py-4 px-4 text-white">Monthly Hosting</td>
              <td className="py-4 px-4 text-gray-400 text-center line-through">$14.99</td>
              <td className="py-4 px-4 text-white font-bold text-center bg-primary-500/10">$2.99 /mo</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-4 px-4 text-white">Domain Name</td>
              <td className="py-4 px-4 text-gray-400 text-center">$9.99</td>
              <td className="py-4 px-4 text-green-400 font-bold text-center bg-primary-500/10">FREE</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-4 px-4 text-white">SSL Certificate</td>
              <td className="py-4 px-4 text-gray-400 text-center">$11.99</td>
              <td className="py-4 px-4 text-green-400 font-bold text-center bg-primary-500/10">FREE (unlimited)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-4 px-4 text-white">Weekly Backups</td>
              <td className="py-4 px-4 text-gray-400 text-center">Paid Add-on</td>
              <td className="py-4 px-4 text-green-400 font-bold text-center bg-primary-500/10 rounded-b-xl">FREE</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* How to use the code */}
      <div className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10">
        <h3 className="text-2xl font-black text-white mb-8 flex items-center">
          <Percent className="mr-3 text-primary-500" />
          How to Apply Your 90% Discount
        </h3>
        <div className="space-y-6">
          <Step index={1} text="Click on the 'Activate Discount Now' button on this page." />
          <Step index={2} text="Select your preferred hosting plan (Premiun/Business recommended)." />
          <Step index={3} text="Choose the 12-month or 48-month duration for maximum savings." />
          <Step index={4} text="Find the 'Have a coupon code?' field and enter: MOHITKOLI" />
          <Step index={5} text="Complete your purchase and start building your website!" />
        </div>
        <div className="mt-10 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <p className="text-yellow-200 text-sm">
            <strong>Pro Tip:</strong> Buy the 48-month hosting plan. Not only do you get the 90% discount, but you also lock in the low price for 4 years, saving you hundreds of dollars in renewal fees!
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Take Your Website Online?</h2>
        <Link 
          href={REFERRAL_LINK}
          className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-black px-12 py-5 rounded-full text-2xl transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          target="_blank"
        >
          Get Hostinger Discount Now
        </Link>
        <p className="mt-6 text-gray-400">Join over 1.2 million successful websites on Hostinger.</p>
      </div>
    </div>
  );
};

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

export default HostingerDiscount;
