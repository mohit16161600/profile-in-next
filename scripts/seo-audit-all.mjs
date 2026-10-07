// Full on-page SEO audit of every blog page, against the checklist in
// SEO BLOG OPTIMIZATION MASTER PROMPT.
//
//   node scripts/seo-audit-all.mjs          -> writes SEO-AUDIT-ALL.md, prints summary
//
// Reads the BUILT html (.next/server/app/blog/*.html) so it audits what Google
// actually sees, not the source. Run `npm run build` first.
import fs from 'fs';

const D = '.next/server/app/blog';
if (!fs.existsSync(D)) { console.error('Run `npm run build` first.'); process.exit(1); }

// 3-month GSC export, 8 Aug - 4 Oct 2026. clicks, impressions, position.
const GSC = {
    'chatgpt-hidden-features-hacks': [33, 543, 6.98], 'viral-chatgpt-image-prompts-2026': [25, 1149, 8.7],
    'hostinger-business-plan': [12, 766, 8.04], 'best-chatgpt-prompts-2026': [6, 161, 8.09],
    'hostinger-vs-godaddy-vs-bluehost-2026': [4, 268, 10.91], 'hostinger-renewal-price-india-2026': [4, 259, 14.74],
    'best-web-hosting-india-2026': [3, 75, 17.59], 'how-to-transfer-domain-from-godaddy': [2, 615, 44.05],
    'hostinger-domain-price-india-2026': [2, 538, 14.95], 'cheap-web-hosting-under-200-india': [2, 75, 5.79],
    'hostinger-55-per-month-offer': [2, 25, 8.96], 'hostinger-plans-pricing-india-2026': [1, 715, 34.63],
    'best-domain-registrars-india-2026': [1, 507, 8.43], 'semrush-review-2026': [1, 302, 11.36],
    'hostinger-cloud-hosting-india-2026': [1, 145, 17.32], 'build-website-with-ai-step-by-step': [1, 123, 17.24],
    'godaddy-renewal-price-increase-india': [1, 95, 8.99], 'is-react-worth-learning-2026': [1, 82, 8.4],
    'shopify-review-india-2026': [1, 71, 9.8], 'top-javascript-libraries-frameworks-2025': [1, 69, 23.78],
    'cloudways-review-2026': [1, 53, 7.62], 'hostinger-review-2026': [1, 29, 32.55],
    'chatgpt-vs-gemini-vs-claude-best-ai-2026': [1, 18, 11.67], 'ai-in-web-development-comprehensive-guide': [1, 10, 7.3],
    'will-ai-replace-your-job-2026': [1, 6, 5.83], 'top-25-free-ai-tools-2026': [1, 6, 9.17],
    'how-to-build-ai-agent-no-code-2026': [1, 5, 14.2], 'how-to-make-money-blogging-for-beginners-2026': [1, 3, 34],
    'best-vps-hosting-india-2026': [0, 173, 6.88], 'best-seo-tools-india-2026': [0, 98, 8.61],
    'hostinger-kvm-vps-plans-india-2026': [0, 60, 5.05], 'react-se-ecommerce-website-kaise-banaye': [0, 50, 26.42],
    'best-ai-tools-to-make-money-online-2026': [0, 47, 16.02], 'hostinger-wordpress-hosting-india-2026': [0, 39, 43.79],
    'digitalocean-vs-vultr-vs-cloudways': [0, 37, 49.7], 'migrate-wordpress-to-new-host': [0, 35, 58.2],
    'namecheap-vs-godaddy': [0, 33, 7.06], 'hostinger-vps-review-hindi-2026': [0, 25, 9.28],
    'deepseek-vs-chatgpt-2026': [0, 21, 5.29], 'domain-kaise-kharide-galtiyan-2026': [0, 17, 6.12],
    'deepseek-how-to-use-free-2026': [0, 16, 13.12], 'semrush-vs-ahrefs': [0, 16, 71.69],
    'best-ai-productivity-tools-2025': [0, 13, 67.62], 'shopify-vs-woocommerce': [0, 12, 27.17],
    'the-truth-about-ai-coding-assistants': [0, 11, 54.82], 'mohit-koli-backend-developer-laravel-php-profile': [0, 10, 4],
    'nodejs-hosting-india-2026': [0, 10, 17], 'best-ai-tools-for-whatsapp-business-automation-2026': [0, 10, 27],
    'hostinger-game-server-hosting-india-2026': [0, 8, 7.75], 'what-are-ai-agents-2026-guide': [0, 6, 15],
    'hostinger-ai-builder-se-website-kaise-banaye': [0, 5, 7.2], 'how-to-get-hostinger-90-off-2026': [0, 5, 7.2],
    'how-to-get-sora-2-invite-code-2026': [0, 5, 27.6], 'how-to-use-chatgpt-beginners-2026': [0, 3, 9.33],
    'hostinger-discount-code-2026': [0, 1, 26],
};

const files = fs.readdirSync(D).filter((f) => f.endsWith('.html'));
const html = new Map(files.map((f) => [f.replace(/\.html$/, ''), fs.readFileSync(`${D}/${f}`, 'utf8')]));

const rows = [];
for (const [slug, h] of html) {
    const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]*>/g, '').trim());
    const h2 = (h.match(/<h2/g) || []).length;
    const h3 = (h.match(/<h3/g) || []).length;
    const canon = /rel="canonical"/.test(h);
    const schema = [...new Set([...h.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]))];
    const faq = (h.match(/"@type":"Question"/g) || []).length;
    const outLinks = new Set([...h.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((m) => m[1]));
    outLinks.delete(slug);
    const aff = [...h.matchAll(/<a[^>]*href="https:\/\/www\.hostinger\.com[^"]*"[^>]*>/g)].map((m) => m[0]);
    const affBadRel = aff.filter((a) => !/rel="[^"]*sponsored/.test(a)).length;
    const imgs = (h.match(/<img/g) || []).length;
    const imgNoAlt = (h.match(/<img(?![^>]*\salt=)/g) || []).length;
    const [clicks, impr, pos] = GSC[slug] || [null, null, null];

    const flags = [];
    if (!title) flags.push('NO TITLE');
    else if (title.length > 60) flags.push(`title ${title.length} chars`);
    if (!desc) flags.push('NO DESCRIPTION');
    else if (desc.length > 160) flags.push(`desc ${desc.length} chars`);
    else if (desc.length < 110) flags.push(`desc only ${desc.length} chars`);
    if (h1s.length !== 1) flags.push(`${h1s.length} H1`);
    if (!canon) flags.push('NO CANONICAL');
    if (!schema.includes('BlogPosting') && !schema.includes('Article')) flags.push('no Article schema');
    if (!schema.includes('BreadcrumbList')) flags.push('no breadcrumb schema');
    if (faq === 0) flags.push('no FAQ schema');
    if (outLinks.size < 3) flags.push(`only ${outLinks.size} outbound internal links`);
    if (affBadRel) flags.push(`${affBadRel} affiliate link(s) missing rel=sponsored`);
    if (imgNoAlt) flags.push(`${imgNoAlt} image(s) missing alt`);
    if (impr !== null && impr >= 50 && pos <= 12 && clicks === 0) flags.push('PAGE-1 WITH ZERO CLICKS -> CTR problem');
    if (impr !== null && impr >= 100 && pos > 20) flags.push('HIGH IMPRESSIONS, PAGE 3+ -> ranking problem');
    if (impr === null) flags.push('no GSC data (new or never shown)');

    rows.push({ slug, title, desc, h1: h1s[0] || '', h2, h3, faq, outLinks: outLinks.size, schema, clicks, impr, pos, flags, imgs, imgNoAlt });
}

// --- cannibalisation: pages sharing 2+ identical meta keywords in source ---
const SRC = 'src/app/blog';
const kw = new Map();
for (const slug of fs.readdirSync(SRC)) {
    const f = `${SRC}/${slug}/page.tsx`;
    if (!fs.existsSync(f)) continue;
    const block = (fs.readFileSync(f, 'utf8').match(/keywords:\s*\[([\s\S]*?)\]/) || [])[1] || '';
    kw.set(slug, new Set([...block.matchAll(/"([^"]+)"/g)].map((m) => m[1].toLowerCase())));
}
const clashes = [];
const slugs = [...kw.keys()];
for (let i = 0; i < slugs.length; i++) for (let j = i + 1; j < slugs.length; j++) {
    const shared = [...kw.get(slugs[j])].filter((k) => kw.get(slugs[i]).has(k));
    if (shared.length >= 2) clashes.push({ a: slugs[i], b: slugs[j], shared });
}
clashes.sort((x, y) => y.shared.length - x.shared.length);

// --- write report ---
const P = (n) => (n === null ? '—' : n);
let md = `# Full on-page SEO audit — mohitkoli.in\n\nGenerated by \`scripts/seo-audit-all.mjs\` from the built HTML.\nGSC figures: 8 Aug – 4 Oct 2026 (3 months).\n\n`;
md += `**${rows.length} pages audited.** ${rows.filter((r) => r.flags.length).length} have at least one flag.\n\n`;

const prio = rows.filter((r) => r.impr).sort((a, b) => b.impr - a.impr);
md += `## Priority order (by impressions)\n\n| # | Page | Impr | Clicks | Pos | Flags |\n|---|---|---|---|---|---|\n`;
prio.forEach((r, i) => { md += `| ${i + 1} | ${r.slug} | ${r.impr} | ${r.clicks} | ${r.pos} | ${r.flags.join('; ') || '—'} |\n`; });

md += `\n## Pages with no GSC impressions\n\n| Page | Outbound links | Flags |\n|---|---|---|\n`;
rows.filter((r) => !r.impr).forEach((r) => { md += `| ${r.slug} | ${r.outLinks} | ${r.flags.join('; ') || '—'} |\n`; });

md += `\n## Keyword overlap (possible cannibalisation)\n\n`;
if (!clashes.length) md += `None found.\n`;
clashes.slice(0, 15).forEach((c) => { md += `- **${c.shared.length}x** \`${c.a}\` vs \`${c.b}\`\n  - ${c.shared.slice(0, 5).join(' · ')}\n`; });

md += `\n## Per-page detail\n\n`;
rows.sort((a, b) => (b.impr || 0) - (a.impr || 0)).forEach((r) => {
    md += `### ${r.slug}\n\n`;
    md += `- GSC: ${P(r.clicks)} clicks · ${P(r.impr)} impressions · position ${P(r.pos)}\n`;
    md += `- Title (${r.title.length}): ${r.title}\n`;
    md += `- Description (${r.desc.length}): ${r.desc.slice(0, 150)}\n`;
    md += `- H1: ${r.h1}\n`;
    md += `- Structure: ${r.h2} H2 · ${r.h3} H3 · ${r.faq} FAQ questions\n`;
    md += `- Internal links out: ${r.outLinks} · Images: ${r.imgs} (${r.imgNoAlt} missing alt)\n`;
    md += `- Schema: ${r.schema.join(', ') || 'none'}\n`;
    md += `- Flags: ${r.flags.join('; ') || 'none'}\n\n`;
});

fs.writeFileSync('SEO-AUDIT-ALL.md', md);

// --- stdout summary only ---
console.log(`${rows.length} pages audited -> SEO-AUDIT-ALL.md\n`);
const counts = {};
rows.forEach((r) => r.flags.forEach((f) => {
    const key = f.replace(/^\d+ /, 'N ').replace(/\d+ chars/, 'N chars').replace(/only \d+/, 'only N');
    counts[key] = (counts[key] || 0) + 1;
}));
console.log('ISSUE COUNTS:');
Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${String(v).padStart(3)}  ${k}`));
console.log(`\nKeyword-overlap pairs (2+ shared): ${clashes.length}`);
console.log('\nTOP 8 BY IMPRESSIONS:');
prio.slice(0, 8).forEach((r) => console.log(`  ${String(r.impr).padStart(4)} imp · pos ${String(r.pos).padEnd(5)} · ${r.slug}`));
