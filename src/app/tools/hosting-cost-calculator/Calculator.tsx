"use client";

import { useState } from "react";

// Every figure below was price-checked on hostinger.com/in/pricing in September 2026.
// `intro` = sale price on the 48-month term. `code` = that price with the extra 20% off.
// `renewal` = the standard rate the plan reverts to once a term expires.
// `cart` = plan-specific 48-month cart link; Single has none yet, so it falls back to
// the general pricing page rather than opening a cart for the wrong plan.
const REFERRAL_URL = "https://www.hostinger.com/in/pricing?REFERRALCODE=mohitkoli";
const CART_PREMIUM_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_premium&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-907a-715a-826c-c2ae423f3289";
const CART_UNLIMITED_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_business&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-ac18-72fd-adc3-4fce44121064";
const CART_CLOUD_STARTUP_48 = "https://www.hostinger.com/in/cart?product=hosting%3Acloud_economy&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06615-43bc-7078-a7a8-92d52d2cce7b";

const PLANS = [
    { id: "single", name: "Single", intro: 69, code: 55.2, renewal: 289, specs: "1 website · 10 GB SSD", cart: REFERRAL_URL },
    { id: "premium", name: "Premium", intro: 149, code: 119.2, renewal: 449, specs: "3 websites · 20 GB SSD", cart: CART_PREMIUM_48 },
    { id: "unlimited", name: "Unlimited", intro: 249, code: 199.2, renewal: 649, specs: "Unlimited websites · 50 GB NVMe", cart: CART_UNLIMITED_48 },
    { id: "cloud", name: "Cloud Startup", intro: 599, code: 479.2, renewal: 1599, specs: "Unlimited websites · 100 GB NVMe", cart: CART_CLOUD_STARTUP_48 },
] as const;

const TERM_MONTHS = 48;
const GST_RATE = 0.18;

const inr = (n: number) =>
    "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: n % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 });

export default function Calculator() {
    const [planId, setPlanId] = useState<string>("premium");
    const [years, setYears] = useState<number>(4);
    const [useCode, setUseCode] = useState<boolean>(true);

    const plan = PLANS.find((p) => p.id === planId) ?? PLANS[1];
    const months = years * 12;

    const rate = useCode ? plan.code : plan.intro;
    const introMonths = Math.min(months, TERM_MONTHS);
    const afterTermMonths = Math.max(0, months - TERM_MONTHS);

    const longTermTotal = introMonths * rate + afterTermMonths * plan.renewal;
    const standardTotal = months * plan.renewal;
    const savings = standardTotal - longTermTotal;
    const savingsPct = standardTotal > 0 ? Math.round((savings / standardTotal) * 100) : 0;

    const upfront = TERM_MONTHS * rate; // what the first invoice actually asks for
    const upfrontWithGst = upfront * (1 + GST_RATE);

    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {/* ---------------- Inputs ---------------- */}
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="plan" className="block text-sm font-semibold text-gray-200 mb-2">
                        Which plan?
                    </label>
                    <select
                        id="plan"
                        value={planId}
                        onChange={(e) => setPlanId(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-[#0f1117] px-4 py-3 text-white outline-none focus:border-primary-500"
                    >
                        {PLANS.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name} — {inr(p.intro)}/mo intro, {inr(p.renewal)}/mo renewal
                            </option>
                        ))}
                    </select>
                    <p className="mt-2 text-xs text-gray-500">{plan.specs}</p>
                </div>

                <div>
                    <label htmlFor="years" className="block text-sm font-semibold text-gray-200 mb-2">
                        How long will you keep the site? — <span className="text-primary-400">{years} {years === 1 ? "year" : "years"}</span>
                    </label>
                    <input
                        id="years"
                        type="range"
                        min={1}
                        max={10}
                        step={1}
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full accent-primary-500"
                    />
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <span>1 yr</span>
                        <span>10 yrs</span>
                    </div>
                </div>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                    type="checkbox"
                    checked={useCode}
                    onChange={(e) => setUseCode(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-primary-500"
                />
                <span>
                    Apply the extra 20% discount
                    <span className="block text-xs text-gray-500">
                        Applies automatically when you open Hostinger through the button below — no code to type.
                    </span>
                </span>
            </label>

            {/* ---------------- Results ---------------- */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                        Buying the 48-month term
                    </p>
                    <p className="text-3xl font-bold text-white">{inr(Math.round(longTermTotal))}</p>
                    <p className="mt-1 text-sm text-gray-400">
                        for {years} {years === 1 ? "year" : "years"} — {inr(rate)}/mo for the first 4 years
                        {afterTermMonths > 0 && <>, then {inr(plan.renewal)}/mo</>}
                    </p>
                </div>

                <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.07] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-2">
                        Paying the standard rate
                    </p>
                    <p className="text-3xl font-bold text-white">{inr(Math.round(standardTotal))}</p>
                    <p className="mt-1 text-sm text-gray-400">
                        for {years} {years === 1 ? "year" : "years"} at {inr(plan.renewal)}/mo throughout
                    </p>
                </div>
            </div>

            {savings > 0 && (
                <div className="mt-4 rounded-xl border border-primary-500/40 bg-primary-500/[0.08] p-5 text-center">
                    <p className="text-sm text-gray-300">Difference over {years} {years === 1 ? "year" : "years"}</p>
                    <p className="mt-1 text-4xl font-bold text-white">{inr(Math.round(savings))}</p>
                    <p className="mt-1 text-sm text-primary-300">
                        {savingsPct}% less by committing to the long term upfront
                    </p>
                </div>
            )}

            {/* ---------------- The honest bits ---------------- */}
            <div className="mt-6 space-y-3 text-sm text-gray-400 leading-7">
                <p>
                    <strong className="text-gray-200">What the first invoice actually asks for:</strong>{" "}
                    {inr(upfront)} — the full 48 months, billed once, up front. With 18% GST added at
                    checkout that becomes roughly {inr(Math.round(upfrontWithGst))}. This is the number that
                    surprises people, so plan for it.
                </p>
                <p>
                    <strong className="text-gray-200">Shorter terms land in between.</strong> A 12- or 24-month
                    term carries a real discount too, just a smaller one — so its true cost sits between the two
                    figures above, not at either end.
                </p>
                <p>
                    <strong className="text-gray-200">No discount applies to a renewal.</strong> Coupons and
                    referral discounts work on a fresh purchase only. That is the entire reason the gap above exists.
                </p>
            </div>

            {/* ---------------- CTA ---------------- */}
            <div className="mt-7 text-center">
                <a
                    href={plan.cart}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition"
                >
                    Check the live {plan.name} price →
                </a>
                <p className="mt-3 text-xs text-gray-500">
                    Opens Hostinger with the discount applied — verify the figure in the cart before you pay.
                </p>
            </div>
        </div>
    );
}
