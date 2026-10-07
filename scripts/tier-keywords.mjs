// Restructure every page's flat `keywords` array into PRIMARY / SECONDARY / LONG-TAIL /
// SUPPORTING tiers.
//
//   node scripts/tier-keywords.mjs --dry     list what would change
//   node scripts/tier-keywords.mjs           apply
//
// Why bother, when meta keywords carry no ranking weight: the tiering forces one
// explicit primary term per page, which is what the title, H1 and intro are then
// checked against. The audit script reports any page whose PRIMARY is missing from
// its own title.
//
// PRIMARY is never guessed. Where Search Console shows what a page actually ranks
// for, that query is the primary. Pages with no GSC data keep their first listed
// keyword, which is the author's stated intent.
import fs from 'fs';

const D = 'src/app/blog';
const DRY = process.argv.includes('--dry');

// slug -> primary keyword, taken from the page's top GSC query (8 Aug – 4 Oct 2026)
const PRIMARY = {
    'hostinger-business-plan': 'hostinger business plan',
    'hostinger-plans-pricing-india-2026': 'hostinger plans india',
    'hostinger-domain-price-india-2026': 'hostinger domain price in india',
    'hostinger-renewal-price-india-2026': 'hostinger renewal price',
    'hostinger-vs-godaddy-vs-bluehost-2026': 'hostinger vs godaddy vs bluehost',
    'hostinger-cloud-hosting-india-2026': 'hostinger cloud hosting',
    'hostinger-kvm-vps-plans-india-2026': 'hostinger kvm vps',
    'hostinger-wordpress-hosting-india-2026': 'hostinger wordpress hosting india',
    'hostinger-review-2026': 'hostinger review 2026',
    'hostinger-55-per-month-offer': 'hostinger 55 per month offer',
    'how-to-get-hostinger-90-off-2026': 'hostinger 90 off',
    'hostinger-discount-code-2026': 'do hostinger coupon codes work',
    'best-domain-registrars-india-2026': 'best domain registrar in india',
    'how-to-transfer-domain-from-godaddy': 'transfer domain from godaddy',
    'godaddy-renewal-price-increase-india': 'godaddy domain renewal price india',
    'best-vps-hosting-india-2026': 'best vps hosting india',
    'best-web-hosting-india-2026': 'best web hosting india',
    'cheap-web-hosting-under-200-india': 'cheap web hosting india',
    'semrush-review-2026': 'semrush pricing india',
    'semrush-vs-ahrefs': 'semrush vs ahrefs',
    'best-seo-tools-india-2026': 'cheapest seo tool in india',
    'shopify-vs-woocommerce': 'shopify vs woocommerce india',
    'digitalocean-vs-vultr-vs-cloudways': 'digitalocean vs vultr vs cloudways',
    'migrate-wordpress-to-new-host': 'migrate wordpress site to new host',
    'nodejs-hosting-india-2026': 'nodejs hosting india',
    'best-keyword-research-tools-2026': 'best keyword research tools',
    'how-to-use-chatgpt-beginners-2026': 'how to use chatgpt',
    'what-are-ai-agents-2026-guide': 'what are ai agents',
    'how-to-get-sora-2-invite-code-2026': 'sora invite code',
    'how-to-make-money-blogging-for-beginners-2026': 'how to make money blogging',
    'best-ai-video-generators-2026': 'best free ai video generators',
    'nano-banana-saree-trend-prompts-2026': 'nano banana saree trend prompt',
    'beyondz900-riding-vlogs': 'beyondz900',
    'how-to-build-ai-agent-no-code-2026': 'how to build an ai agent without coding',
    'top-25-free-ai-tools-2026': 'free ai tools 2026',
    'will-ai-replace-your-job-2026': 'will ai replace your job',
    'best-chatgpt-prompts-2026': 'best chatgpt prompts',
    'deepseek-how-to-use-free-2026': 'how to use deepseek free',
};

const isQuestion = (k) => /^(how|what|why|which|can|do|does|is|are|should|where|when|kya|kaise|kaun)\b/i.test(k) || k.includes('?');
const words = (k) => k.trim().split(/\s+/).length;

let changed = 0; const skipped = [];

for (const slug of fs.readdirSync(D).sort()) {
    const file = `${D}/${slug}/page.tsx`;
    if (!fs.existsSync(file)) continue;

    const src = fs.readFileSync(file, 'utf8');
    // Pages are inconsistent: some indent metadata two spaces, some four.
    const block = src.match(/^[ ]{2,4}keywords: \[[\s\S]*?\n[ ]{2,4}\],\n/m);
    if (!block) { skipped.push(`${slug} (no keywords block)`); continue; }
    if (block[0].includes('// PRIMARY')) { skipped.push(`${slug} (already tiered)`); continue; }

    const all = [...new Set([...block[0].matchAll(/"([^"]+)"/g)].map((m) => m[1]))];
    if (all.length < 4) { skipped.push(`${slug} (only ${all.length} keywords)`); continue; }

    const primary = PRIMARY[slug] && all.some((k) => k.toLowerCase() === PRIMARY[slug])
        ? all.find((k) => k.toLowerCase() === PRIMARY[slug])
        : (PRIMARY[slug] || all[0]);

    const rest = all.filter((k) => k !== primary);
    const longTail = rest.filter((k) => isQuestion(k) || words(k) >= 5);
    const midRest = rest.filter((k) => !longTail.includes(k));
    const secondary = midRest.filter((k) => words(k) >= 3).slice(0, 8);
    const supporting = midRest.filter((k) => !secondary.includes(k));

    const fmt = (list) => {
        const out = []; let line = '       ';
        for (const k of list) {
            const piece = ` "${k}",`;
            if ((line + piece).length > 108) { out.push(line); line = '       '; }
            line += piece;
        }
        if (line.trim()) out.push(line);
        return out.join('\n');
    };

    const IND = block[0].match(/^ +/)[0];
    let out = IND + '// Keyword tiers. Meta keywords do not rank on their own — this exists so the page has\n';
    out += IND + '// one explicit PRIMARY term, which the title, H1 and intro are then written around.\n';
    out += '    keywords: [\n        // PRIMARY\n';
    out += `        "${primary}",\n`;
    if (secondary.length) out += '\n        // SECONDARY — H2s and body\n' + fmt(secondary) + '\n';
    if (longTail.length) out += '\n        // LONG-TAIL — FAQ and specific sections\n' + fmt(longTail) + '\n';
    if (supporting.length) out += '\n        // SUPPORTING / semantic\n' + fmt(supporting) + '\n';
    out += '    ],\n';

    console.log(`${DRY ? 'would tier' : 'tiered'}  ${slug}  (${all.length} kw -> 1 primary / ${secondary.length} sec / ${longTail.length} long / ${supporting.length} sup)`);
    console.log(`           PRIMARY: ${primary}`);
    if (!DRY) fs.writeFileSync(file, src.replace(block[0], out));
    changed++;
}

console.log(`\n${changed} pages ${DRY ? 'would be' : ''} tiered`);
if (skipped.length) console.log(`skipped ${skipped.length}:\n  ` + skipped.join('\n  '));
