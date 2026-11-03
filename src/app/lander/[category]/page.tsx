import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "../Gallery";
import { CATEGORIES, categoryBySlug, itemsInCategory, siblingCategories } from "@/data/landers";

const ORIGIN = "https://mohitkoli.in";

export function generateStaticParams() {
    return CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string }>;
}): Promise<Metadata> {
    const { category: slug } = await params;
    const category = categoryBySlug(slug);
    if (!category) return {};

    const canonical = `${ORIGIN}/lander/${category.slug}`;

    return {
        title: category.title,
        description: category.description,
        keywords: category.keywords,
        alternates: { canonical },
        openGraph: {
            title: category.title,
            description: category.description,
            url: canonical,
            type: "website",
            images: [
                {
                    url: "/assets/og-default.png",
                    width: 1200,
                    height: 630,
                    alt: `${category.h1} by Mohit Koli`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: category.title,
            description: category.description,
            images: ["/assets/og-default.png"],
        },
    };
}

export default async function LanderCategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category: slug } = await params;
    const category = categoryBySlug(slug);
    if (!category) notFound();

    const items = itemsInCategory(category.slug);
    const { previous, next } = siblingCategories(category.slug);
    const canonical = `${ORIGIN}/lander/${category.slug}`;

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${canonical}#page`,
                url: canonical,
                name: category.h1,
                description: category.description,
                isPartOf: { "@id": `${ORIGIN}/lander#page` },
                author: { "@id": `${ORIGIN}/#person` },
                // Only claim images when there are images on the page — structured
                // data has to describe what is actually visible.
                ...(items.length > 0 && {
                    hasPart: items.map((item) => ({
                        "@type": "ImageObject",
                        name: item.title,
                        contentUrl: `${ORIGIN}${item.image}`,
                        width: item.width,
                        height: item.height,
                        ...(item.note && { description: item.note }),
                    })),
                }),
            },
            {
                "@type": "FAQPage",
                "@id": `${canonical}#faq`,
                mainEntity: category.faq.map((entry) => ({
                    "@type": "Question",
                    name: entry.question,
                    acceptedAnswer: { "@type": "Answer", text: entry.answer },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${canonical}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
                    { "@type": "ListItem", position: 2, name: "Layout Gallery", item: `${ORIGIN}/lander` },
                    { "@type": "ListItem", position: 3, name: category.name, item: canonical },
                ],
            },
        ],
    };

    return (
        <main className="pt-28 pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li>
                            <Link href="/" className="hover:text-primary-400">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li>
                            <Link href="/lander" className="hover:text-primary-400">
                                Layout Gallery
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li className="text-gray-300">{category.name}</li>
                    </ol>
                </nav>

                <h1 className="reveal mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {category.h1}
                </h1>

                <div className="reveal reveal-d1 mt-6 max-w-3xl space-y-5">
                    {category.intro.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="text-lg leading-8 text-gray-300">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    {items.length} {items.length === 1 ? "layout" : "layouts"} in this category
                    {items.length > 0 ? " — click any image to open it full size" : ""}.
                </p>
            </section>

            <section aria-label={`${category.name} layouts`} className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
                <Gallery items={items} />
            </section>

            <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                    What makes this layout work
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {category.principles.map((principle) => (
                        <article
                            key={principle.heading}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                        >
                            <h3 className="text-lg font-semibold text-white">{principle.heading}</h3>
                            <p className="mt-3 leading-7 text-gray-400">{principle.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">Mistakes that cost the most</h2>
                <div className="mt-8 space-y-4">
                    {category.mistakes.map((mistake) => (
                        <article
                            key={mistake.heading}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                        >
                            <h3 className="text-lg font-semibold text-white">{mistake.heading}</h3>
                            <p className="mt-3 leading-7 text-gray-400">{mistake.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            {category.indiaSpecific?.length ? (
                <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                        What changes for an Indian audience
                    </h2>
                    <p className="mt-4 max-w-3xl leading-7 text-gray-400">
                        These are the requirements a layout copied from a US or European template does not have, and
                        they decide more conversions here than any styling choice.
                    </p>
                    <div className="mt-8 space-y-4">
                        {category.indiaSpecific.map((entry) => (
                            <article
                                key={entry.heading}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                            >
                                <h3 className="text-lg font-semibold text-white">{entry.heading}</h3>
                                <p className="mt-3 leading-7 text-gray-400">{entry.body}</p>
                            </article>
                        ))}
                    </div>
                </section>
            ) : null}

            {category.cost ? (
                <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white">What drives the cost</h2>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">{category.cost.intro}</p>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {category.cost.drivers.map((driver) => (
                            <article
                                key={driver.heading}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                            >
                                <h3 className="text-lg font-semibold text-white">{driver.heading}</h3>
                                <p className="mt-3 leading-7 text-gray-400">{driver.body}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-6 max-w-3xl border-l-2 border-primary-500/40 pl-4 text-sm leading-6 text-gray-500">
                        {category.cost.note}
                    </p>
                    <Link
                        href="/tools/hosting-cost-calculator"
                        className="mt-6 inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 hover:border-primary-500 hover:text-white"
                    >
                        Work out the four-year hosting total
                    </Link>
                </section>
            ) : null}

            <section
                aria-label="Frequently asked questions"
                className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8"
            >
                <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
                <div className="mt-8 space-y-4">
                    {category.faq.map((entry) => (
                        <article key={entry.question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-xl text-white">{entry.question}</h3>
                            <p className="mt-3 leading-7 text-gray-400">{entry.answer}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-primary-500/30 bg-black/20 p-8">
                    <h2 className="text-2xl font-bold text-white">Want this built, not just looked at?</h2>
                    <p className="mt-4 max-w-3xl leading-7 text-gray-300">
                        A layout is the easy half. The rest is the build, the hosting it runs on, and the renewal
                        price nobody shows you at signup.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {category.related.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 hover:border-primary-500 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold text-white">Other categories</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {previous ? (
                        <Link
                            href={`/lander/${previous.slug}`}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-primary-500/40"
                        >
                            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Previous</span>
                            <span className="mt-2 block text-base font-semibold text-white">{previous.h1}</span>
                            <span className="mt-1 block text-sm text-gray-400">{previous.blurb}</span>
                        </Link>
                    ) : null}
                    {next ? (
                        <Link
                            href={`/lander/${next.slug}`}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-primary-500/40"
                        >
                            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Next</span>
                            <span className="mt-2 block text-base font-semibold text-white">{next.h1}</span>
                            <span className="mt-1 block text-sm text-gray-400">{next.blurb}</span>
                        </Link>
                    ) : null}
                </div>
                <Link href="/lander" className="mt-6 inline-block text-sm font-semibold text-primary-400 hover:text-white">
                    All layout categories
                </Link>
            </section>
        </main>
    );
}
