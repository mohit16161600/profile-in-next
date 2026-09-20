import { HOSTINGER_CODE } from "@/data/hostinger-vps";
import CopyCode from "./CopyCode";

/**
 * The referral call-to-action shared by the Hostinger product-line guides.
 * `href` must point at the page for the product the article is about — sending a
 * game-server reader to the shared-hosting cart is how you lose the sale.
 */
export default function HostingerCta({
    href,
    heading,
    sub,
    buttonLabel,
}: {
    href: string;
    heading: string;
    sub: string;
    buttonLabel: string;
}) {
    return (
        <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{heading}</h2>
            <p className="text-gray-300 leading-8 mb-5">{sub}</p>
            <div className="mb-5">
                <CopyCode code={HOSTINGER_CODE} copyLabel="Code copy karein" copiedLabel="Copy ho gaya!" />
            </div>
            <a
                href={href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-block rounded-xl bg-primary-600 px-8 py-4 font-bold text-white transition hover:bg-primary-500"
            >
                {buttonLabel}
            </a>
            <p className="mt-4 text-sm text-gray-400">
                Code checkout par lagta hai aur sale price par extra 20% deta hai. Sirf nayi kharid par —
                renewal par koi discount nahi lagta. Prices GST ke bina hain.
            </p>
        </section>
    );
}
