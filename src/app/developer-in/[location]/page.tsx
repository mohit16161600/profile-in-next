import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import InfiniteTechMarquee from "@/components/InfiniteTechMarquee";
import LocationHero from "@/components/LocationHero";
import Projects from "@/components/Projects";
import Qualification from "@/components/Qualification";
import Skills from "@/components/Skills";
import { getLocationBySlug, getRelatedLocations, SEO_LOCATIONS } from "@/data/locations";

export const dynamicParams = false;

export function generateStaticParams() {
    return SEO_LOCATIONS.map((location) => ({
        location: location.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
    const { location } = await params;
    const locationData = getLocationBySlug(location);

    if (!locationData) {
        return {};
    }

    const title = `Web Developer in ${locationData.name} | Best Freelance Web Developer | Mohit Koli`;
    const description = `Hire the best web developer and freelancer in ${locationData.name} for ${locationData.serviceFocus}. Serving clients across ${locationData.region} with React, Next.js, PHP, and Laravel expertise.`;
    const canonical = `https://mohitkoli.in/developer-in/${locationData.slug}`;

    return {
        title,
        description,
        keywords: [
            `best web developer in ${locationData.name}`,
            `best freelance web developer ${locationData.name}`,
            `best freelancer in ${locationData.name}`,
            `web developer in ${locationData.name}`,
            `freelance web developer ${locationData.name}`,
            `react developer ${locationData.name}`,
            `next.js developer ${locationData.name}`,
            `${locationData.name} web development services`,
            `mohit koli ${locationData.name}`,
        ],
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            type: "website",
            images: [
                {
                    url: "/assets/mohit-koli-profile-photo.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Mohit Koli web development services in ${locationData.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/assets/mohit-koli-profile-photo.jpg"],
        },
    };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
    const { location } = await params;
    const locationData = getLocationBySlug(location);

    if (!locationData) {
        notFound();
    }

    const relatedLocations = getRelatedLocations(locationData);
    const canonical = `https://mohitkoli.in/developer-in/${locationData.slug}`;
    const faqItems = [
        {
            question: `Do you work with clients in ${locationData.name} remotely?`,
            answer: `Yes. I work remotely with businesses in ${locationData.name} and across ${locationData.region} on websites, landing pages, dashboards, and custom web applications.`,
        },
        {
            question: `What services do you offer in ${locationData.name}?`,
            answer: `I help with ${locationData.serviceFocus}, plus frontend development in React and Next.js, backend work in PHP and Laravel, site speed improvements, and ongoing maintenance.`,
        },
        {
            question: `Why does this ${locationData.name} page exist?`,
            answer: `This page helps visitors find the correct service area, understand the work I do for clients in ${locationData.name}, and navigate to related locations through clean internal links.`,
        },
    ];

    const locationSchema = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
                { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://mohitkoli.in/locations" },
                { "@type": "ListItem", position: 3, name: `Web Developer in ${locationData.name}`, item: canonical },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Web Development Services in ${locationData.name}`,
            provider: {
                "@type": "Person",
                name: "Mohit Koli",
                url: "https://mohitkoli.in",
            },
            serviceType: "Web Development",
            areaServed: {
                "@type": locationData.type === "city" ? "City" : "State",
                name: locationData.name,
            },
            description: `Freelance web development services in ${locationData.name} focused on ${locationData.serviceFocus}.`,
            url: canonical,
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        },
    ];

    return (
        <>
            <LocationHero locationName={locationData.name} />
            <InfiniteTechMarquee />

            <section className="py-16" aria-label={`About web development services in ${locationData.name}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/locations" className="hover:text-primary-400">Service Areas</Link></li>
                            <li>/</li>
                            <li className="text-white">Developer in {locationData.name}</li>
                        </ol>
                    </nav>

                    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                            <p className="text-sm uppercase tracking-[0.3em] text-primary-400">Web development in {locationData.name}</p>
                            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                                Freelance Web Developer in {locationData.name}
                            </h1>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                {locationData.intro}
                            </p>
                            <h2 className="mt-8 text-2xl font-semibold text-white">
                                Industries I commonly work with in {locationData.name}
                            </h2>
                            <ul className="mt-4 space-y-2 text-gray-300 leading-8 list-disc list-inside">
                                {locationData.industries.map((industry) => (
                                    <li key={industry}>{industry}</li>
                                ))}
                            </ul>
                            <h2 className="mt-8 text-2xl font-semibold text-white">
                                What you get when you hire me in {locationData.name}
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Every {locationData.name} project ships with a clean, type-safe Next.js or Laravel codebase, real Core Web Vitals scores (LCP under 2.5s, CLS under 0.1), proper on-page SEO with structured data, and a deployment that you actually own. No black-box CMS, no template lock-in, no surprise monthly fees.
                            </p>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                I work async-first with {locationData.name} teams on Slack, Notion, or Linear, with weekly demos and a written change log. If you need a developer who explains what's happening at every step instead of disappearing for two weeks, this is the right fit.
                            </p>
                        </div>

                        <aside className="rounded-3xl border border-white/10 bg-black/20 p-8">
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Coverage</p>
                            <h2 className="mt-4 text-2xl font-semibold text-white">Nearby service areas</h2>
                            <ul className="mt-6 space-y-3">
                                {locationData.nearby.map((nearbySlug) => {
                                    const nearbyLocation = getLocationBySlug(nearbySlug);

                                    if (!nearbyLocation) {
                                        return null;
                                    }

                                    return (
                                        <li key={nearbyLocation.slug}>
                                            <Link
                                                href={`/developer-in/${nearbyLocation.slug}`}
                                                className="text-gray-300 transition-colors hover:text-primary-400"
                                            >
                                                Web developer in {nearbyLocation.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>

            <section aria-label="About Mohit Koli">
                <About />
            </section>
            <div className="content-auto">
                <Qualification />
            </div>
            <div className="content-auto">
                <Experience />
            </div>
            <div className="content-auto">
                <Skills />
            </div>
            <div className="content-auto">
                <Projects />
            </div>
            <div className="content-auto">
                <Contact />
            </div>

            <section className="py-20 border-t border-white/5" aria-labelledby="related-locations-title">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-10">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Related areas</p>
                        <h2 id="related-locations-title" className="text-3xl md:text-4xl font-bold text-white">
                            Explore more locations
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            These nearby pages help visitors and search engines discover the full service-area structure.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedLocations.map((relatedLocation) => (
                            <Link
                                key={relatedLocation.slug}
                                href={`/developer-in/${relatedLocation.slug}`}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary-500/40"
                            >
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">{relatedLocation.region}</p>
                                <h3 className="mt-2 text-xl font-semibold text-white">{relatedLocation.name}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-400">
                                    {relatedLocation.serviceFocus}.
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-white/5" aria-labelledby="faq-title">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">FAQs</p>
                    <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-white">
                        Common questions about {locationData.name}
                    </h2>
                    <div className="mt-10 space-y-6">
                        {faqItems.map((item) => (
                            <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                                <p className="mt-3 text-gray-300 leading-7">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
            />
        </>
    );
}
