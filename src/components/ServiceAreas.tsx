import Link from "next/link";
import { SEO_LOCATIONS } from "@/data/locations";

interface ServiceAreasProps {
    title?: string;
    description?: string;
    limit?: number;
}

export default function ServiceAreas({
    title = "Service Areas",
    description = "Browse the cities and states where I offer web development services.",
    limit = 12,
}: ServiceAreasProps) {
    const featuredLocations = SEO_LOCATIONS.slice(0, limit);

    return (
        <section className="py-20 border-y border-white/5 bg-white/[0.02]" aria-labelledby="service-areas-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Coverage</p>
                    <h2 id="service-areas-title" className="text-3xl md:text-4xl font-bold text-white">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        {description}
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {featuredLocations.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/developer-in-${location.slug}`}
                            className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-primary-500/40 hover:bg-black/30"
                        >
                            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">{location.region}</p>
                            <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-primary-400">
                                {location.name}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                Focused on {location.serviceFocus}.
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-8">
                    <Link
                        href="/locations"
                        className="inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 transition-colors hover:border-primary-500 hover:text-white"
                    >
                        View all service areas
                    </Link>
                </div>
            </div>
        </section>
    );
}
