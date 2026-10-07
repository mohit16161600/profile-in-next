/**
 * Renders the editorial verdict and score that the page already declares in its
 * Review schema.
 *
 * Why this exists: four pages emitted `Review` + `reviewRating` in JSON-LD while
 * showing neither the score nor the verdict anywhere on the page. Structured data
 * must describe content a visitor can actually see — markup for invisible content
 * is a structured-data violation and risks a site-wide manual action, not just a
 * penalty on the page itself.
 *
 * The `body` passed in is the exact `reviewBody` string from that page's schema,
 * so the two can never drift apart.
 */
export type Verdict = {
    /** What is being scored, e.g. "Hostinger KVM VPS". */
    name: string;
    /** Must equal the page's `ratingValue`. */
    score: string;
    /** Must equal the page's `reviewBody`. */
    body: string;
};

export default function VerdictCard({ items, heading = "The verdict" }: { items: Verdict[]; heading?: string }) {
    if (!items.length) return null;

    return (
        <section className="mb-12" aria-label="Editorial verdict">
            <h2 className="text-2xl font-bold text-white mb-5">{heading}</h2>
            <div className={items.length > 1 ? "grid gap-5 sm:grid-cols-2" : ""}>
                {items.map((v) => (
                    <div key={v.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="flex items-baseline justify-between gap-4 mb-3">
                            <h3 className="text-lg font-bold text-white">{v.name}</h3>
                            <p className="text-3xl font-bold text-primary-300 shrink-0">
                                {v.score}
                                <span className="text-base font-normal text-gray-400"> / 5</span>
                            </p>
                        </div>
                        <p className="text-gray-300 leading-8">{v.body}</p>
                    </div>
                ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
                Scored on price against specification, the renewal rate, what the plan actually includes, and support —
                judged from the provider&apos;s own published pricing and documentation on the date stated above. This is
                an editorial opinion, not an aggregate of user ratings.
            </p>
        </section>
    );
}
