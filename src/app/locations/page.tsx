import type { Metadata } from "next";
import Link from "next/link";
import { SEO_LOCATIONS } from "@/data/locations";

export const metadata: Metadata = {
    title: "Service Areas | Mohit Koli",
    description: "Browse all cities and states where Mohit Koli offers freelance web development services.",
    alternates: {
        canonical: "https://mohitkoli.info/locations",
    },
};

export default function LocationsIndexPage() {
    return (
        <main className="pt-28 pb-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Service Areas</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Web development coverage across India
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        This page lists every city and state service page published on the site. It gives users a clean way to navigate the full location structure and helps search engines discover all important location URLs.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {SEO_LOCATIONS.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/developer-in-${location.slug}`}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary-500/40"
                        >
                            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                {location.type} • {location.region}
                            </p>
                            <h2 className="mt-2 text-xl font-semibold text-white">{location.name}</h2>
                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {location.serviceFocus}.
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
