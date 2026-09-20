/**
 * Hostinger India catalogue facts shared by the newer product-line guides (game servers,
 * business email, shared hosting, AI Builder), so one price change is made in one place.
 *
 * Every figure below was read off Hostinger's own India pages on 20 September 2026:
 *   hostinger.com/in/web-hosting, /in/business-email, /in/vps/game-server-hosting,
 *   /in/self-hosted-n8n, /in/ai-builder/pricing
 *
 * Deliberately NOT recorded here, because Hostinger does not state them on those pages:
 * any uptime SLA percentage, any India data-centre claim, and any "90% off" figure —
 * the deepest real discount is Single at 83%, or 86% once the referral 20% is applied.
 * Hostinger's own footer says "Prices are listed without GST", so every number below
 * is pre-GST.
 */

import { inr, withCode } from "./hostinger-vps";

export const OFFERS_VERIFIED = "20 September 2026";
export const OFFERS_VERIFIED_ISO = "2026-09-20T00:00:00.000Z";

/** Referral links per product line. Always the page matching the article's topic. */
export const REF = {
    home: "https://www.hostinger.com/in?REFERRALCODE=mohitkoli",
    shared: "https://www.hostinger.com/in/web-hosting?REFERRALCODE=mohitkoli",
    wordpress: "https://www.hostinger.com/in/wordpress-hosting?REFERRALCODE=mohitkoli",
    email: "https://www.hostinger.com/in/business-email?REFERRALCODE=mohitkoli",
    gameServer: "https://www.hostinger.com/in/vps/game-server-hosting?REFERRALCODE=mohitkoli",
    n8n: "https://www.hostinger.com/in/self-hosted-n8n?REFERRALCODE=mohitkoli",
    aiBuilder: "https://www.hostinger.com/in/ai-builder?REFERRALCODE=mohitkoli",
} as const;

export type Tier = {
    name: string;
    sale: number;      // ₹/mo on the advertised term
    regular: number;   // ₹/mo crossed-out rate
    off: number;       // % as Hostinger prints it
    renewal: number;   // ₹/mo once the first term ends
    termMonths: number;
    termTotal?: number;
};

/** Shared + cloud plans, 48-month term. hostinger.com/in/web-hosting */
export const SHARED_PLANS: readonly (Tier & { sites: string; storage: string })[] = [
    { name: "Single", sale: 69, regular: 399, off: 83, renewal: 289, termMonths: 48, termTotal: 3312, sites: "1 website", storage: "10 GB SSD" },
    { name: "Premium", sale: 149, regular: 599, off: 75, renewal: 449, termMonths: 48, termTotal: 7152, sites: "3 websites", storage: "20 GB SSD" },
    { name: "Unlimited", sale: 249, regular: 699, off: 64, renewal: 649, termMonths: 48, termTotal: 11952, sites: "Unlimited", storage: "50 GB NVMe" },
    { name: "Cloud Startup", sale: 599, regular: 1699, off: 65, renewal: 1599, termMonths: 48, termTotal: 28752, sites: "Unlimited", storage: "100 GB NVMe" },
];

/** Business email, 48-month term, priced per mailbox. hostinger.com/in/business-email */
export const EMAIL_PLANS: readonly (Tier & { storageGb: number; forwarding: number; aliases: number })[] = [
    { name: "Starter", sale: 29, regular: 149, off: 81, renewal: 69, termMonths: 48, storageGb: 5, forwarding: 5, aliases: 5 },
    { name: "Standard", sale: 49, regular: 199, off: 75, renewal: 119, termMonths: 48, storageGb: 20, forwarding: 20, aliases: 10 },
    { name: "Premium", sale: 79, regular: 299, off: 74, renewal: 179, termMonths: 48, storageGb: 50, forwarding: 50, aliases: 30 },
];

/** Game Panel VPS plans, 24-month term. hostinger.com/in/vps/game-server-hosting */
export const GAME_PLANS: readonly (Tier & { vcpu: number; ramGb: number; diskGb: number; bandwidthTb: number })[] = [
    { name: "Game Panel 1", sale: 649, regular: 1649, off: 61, renewal: 999, termMonths: 24, termTotal: 15576, vcpu: 1, ramGb: 4, diskGb: 50, bandwidthTb: 4 },
    { name: "Game Panel 2", sale: 849, regular: 2099, off: 60, renewal: 1199, termMonths: 24, termTotal: 20376, vcpu: 2, ramGb: 8, diskGb: 100, bandwidthTb: 8 },
    { name: "Game Panel 4", sale: 1199, regular: 3499, off: 66, renewal: 2399, termMonths: 24, termTotal: 28776, vcpu: 4, ramGb: 16, diskGb: 200, bandwidthTb: 16 },
    { name: "Game Panel 8", sale: 2399, regular: 6199, off: 61, renewal: 4399, termMonths: 24, termTotal: 57576, vcpu: 8, ramGb: 32, diskGb: 400, bandwidthTb: 32 },
];

/** One-time AI credits bundled with a plan, per /in/ai-builder/pricing. */
export const AI_CREDITS: Record<string, number> = { Premium: 5, Unlimited: 15, "Cloud Startup": 15 };

/**
 * Discount off the crossed-out regular rate once the referral 20% is applied.
 * Single: ₹399 -> ₹55.20 is 86%, which is the deepest honest number on the whole catalogue.
 */
export const offWithCode = (t: Pick<Tier, "sale" | "regular">) =>
    Math.round((1 - withCode(t.sale) / t.regular) * 100);

/** "₹55.20" — the price a reader actually pays with the code applied. */
export const priceWithCode = (t: Pick<Tier, "sale">) => inr(withCode(t.sale));

export { inr, withCode };
