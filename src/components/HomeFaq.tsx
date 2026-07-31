"use client";

const faqs = [
  {
    question: "What kind of websites and web applications does Mohit Koli build?",
    answer:
      "I build business websites, portfolio websites, landing pages, SEO-focused company sites, custom dashboards, CRM systems, and full-stack web applications using React, Next.js, PHP, Laravel, and modern frontend tooling.",
  },
  {
    question: "Do you provide SEO-friendly website development?",
    answer:
      "Yes. My development process includes semantic page structure, optimized headings, internal linking support, mobile responsiveness, page speed improvements, and technical SEO best practices that help search engines crawl and understand the site better.",
  },
  {
    question: "Can you help with redesigning an existing website?",
    answer:
      "Yes. I can redesign outdated websites to improve credibility, user experience, performance, and conversion flow while preserving the core business goals and content strategy where needed.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "My strongest stack includes React, Next.js, JavaScript, Tailwind CSS, PHP, Laravel, MySQL, REST APIs, and custom CMS or admin workflows. I also work on SEO improvements and performance optimization for production websites.",
  },
  {
    question: "Do you work with clients across India and remote teams?",
    answer:
      "Yes. I work remotely with startups, agencies, and business owners across India and can support both short-term builds and long-term website maintenance or feature development.",
  },
  {
    question: "Why hire a freelance full stack developer instead of a large agency?",
    answer:
      "Working with a freelance full stack developer gives you direct communication, faster iteration, more technical ownership, and lower delivery overhead. It is often a strong fit for businesses that want high-quality execution without agency layers slowing the process down.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomeFaq() {
  return (
    <section id="faq" className="py-24 bg-transparent relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Common Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions About My Web Development Services
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            This section is here to make it easier for clients to understand how I work, what I build, and
            whether I am the right fit for their website or web application project.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className={`reveal reveal-d${Math.min(index + 1, 5)} glass rounded-2xl border border-white/10 p-6 md:p-8`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3" itemProp="name">
                {faq.question}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-400 leading-relaxed" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
