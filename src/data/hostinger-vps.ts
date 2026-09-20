/**
 * Hostinger KVM VPS facts shared by the English and Hinglish VPS guides, so a price change is
 * made once and both pages stay in sync.
 *
 * Every figure below was checked on hostinger.com/in/vps-hosting on 17 September 2026.
 * Referral discount: an extra 20% on the sale price for a new purchase, never on a renewal.
 * Not stated on Hostinger's VPS page on that date, so deliberately absent: any uptime SLA
 * percentage, and any India-specific data centre for VPS.
 */

export const VPS_VERIFIED = "17 September 2026";
export const VPS_VERIFIED_ISO = "2026-09-17T00:00:00.000Z";

export const VPS_REFERRAL_URL = "https://www.hostinger.com/in/vps-hosting?REFERRALCODE=mohitkoli";
export const HOSTINGER_CODE = "MOHITKOLI";

export type VpsPlan = {
    name: "KVM 1" | "KVM 2" | "KVM 4" | "KVM 8";
    sale: number;
    regular: number;
    off: number;
    renewal: number;
    vcpu: number;
    ramGb: number;
    diskGb: number;
    bandwidthTb: number;
};

export const VPS_PLANS: readonly VpsPlan[] = [
    { name: "KVM 1", sale: 599, regular: 1649, off: 64, renewal: 999, vcpu: 1, ramGb: 4, diskGb: 50, bandwidthTb: 4 },
    { name: "KVM 2", sale: 799, regular: 2099, off: 62, renewal: 1199, vcpu: 2, ramGb: 8, diskGb: 100, bandwidthTb: 8 },
    { name: "KVM 4", sale: 1099, regular: 3499, off: 69, renewal: 2399, vcpu: 4, ramGb: 16, diskGb: 200, bandwidthTb: 16 },
    { name: "KVM 8", sale: 2199, regular: 6199, off: 65, renewal: 4399, vcpu: 8, ramGb: 32, diskGb: 400, bandwidthTb: 32 },
];

export const VPS_REGIONS = ["North America", "Europe", "Asia", "South America"] as const;
export const VPS_OS_TEMPLATES = ["Ubuntu", "Debian", "AlmaLinux", "Rocky Linux", "CentOS", "Fedora", "Alpine Linux"] as const;

/** Sale price with the extra 20% applied. */
export const withCode = (sale: number) => Math.round(sale * 0.8 * 100) / 100;

/** ₹1,099 or ₹879.20 — whole rupees stay whole, paise always show two digits. */
export const inr = (n: number) =>
    "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });
