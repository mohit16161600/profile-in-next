// Generates professional branded SVG hero images for blog posts -> public/assets/blog/<slug>.svg
// Usage: BLOG_IMG_DATA='[{"slug":"...","title":"<short hero title>","chip":"<category label>","cat":"hosting|ai|dev|money"}]' node scripts/gen-blog-images.mjs
//
// ALWAYS run `npm run images:raster` afterwards. The SVG is the on-page hero, but no
// social platform renders an SVG og:image — Facebook, WhatsApp, X, LinkedIn and
// Pinterest all fall back to a bare link, and Google Discover needs a raster too.
// rasterize-blog-images.mjs writes the <slug>.png twin that og:image, twitter:image
// and the BlogPosting schema point at.
// Design system: near-black editorial background, ONE accent hue per category (consistent
// across the whole blog), ghosted line-art motif per category, strong typographic hierarchy.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "assets", "blog");

// One accent per category keeps the blog grid looking like a designed system,
// not a random rainbow. c1 = primary accent, c2 = secondary for gradient ends.
const THEMES = {
  hosting: { c1: "#8b5cf6", c2: "#6366f1" }, // violet / indigo
  ai:      { c1: "#22d3ee", c2: "#3b82f6" }, // cyan / blue
  dev:     { c1: "#34d399", c2: "#14b8a6" }, // emerald / teal
  money:   { c1: "#fbbf24", c2: "#f59e0b" }, // amber
  ride:    { c1: "#fb7185", c2: "#f97316" }, // rose / orange
  default: { c1: "#818cf8", c2: "#6366f1" },
};

// Ghosted decorative motifs, drawn as light stroke line-art (viewBox 0 0 100 100).
const MOTIFS = {
  hosting: `
    <rect x="14" y="16" width="72" height="20" rx="5" fill="none" stroke-width="3.5"/>
    <rect x="14" y="42" width="72" height="20" rx="5" fill="none" stroke-width="3.5"/>
    <rect x="14" y="68" width="72" height="20" rx="5" fill="none" stroke-width="3.5"/>
    <circle cx="24" cy="26" r="2.6" stroke="none" class="fill"/>
    <circle cx="24" cy="52" r="2.6" stroke="none" class="fill"/>
    <circle cx="24" cy="78" r="2.6" stroke="none" class="fill"/>
    <line x1="60" y1="26" x2="78" y2="26" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="60" y1="52" x2="78" y2="52" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="60" y1="78" x2="78" y2="78" stroke-width="3.5" stroke-linecap="round"/>`,
  ai: `
    <path d="M50 12 L56 40 L84 46 L56 52 L50 80 L44 52 L16 46 L44 40 Z" fill="none" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M78 64 L81 74 L91 77 L81 80 L78 90 L75 80 L65 77 L75 74 Z" fill="none" stroke-width="3"/>
    <circle cx="22" cy="20" r="4" fill="none" stroke-width="3"/>`,
  dev: `
    <path d="M34 26 L14 50 L34 74" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M66 26 L86 50 L66 74" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="56" y1="20" x2="44" y2="80" stroke-width="5" stroke-linecap="round"/>`,
  money: `
    <circle cx="50" cy="50" r="36" fill="none" stroke-width="4"/>
    <path d="M38 32 H62 M38 44 H62 M42 32 C56 32 56 50 42 50 L58 68" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
  ride: `
    <path d="M18 72 A34 34 0 0 1 82 72" fill="none" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="66" x2="66" y2="44" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="70" r="5" fill="none" stroke-width="3.5"/>
    <line x1="26" y1="88" x2="74" y2="88" stroke-width="4" stroke-linecap="round"/>
    <line x1="34" y1="96" x2="46" y2="96" stroke-width="4" stroke-linecap="round"/>
    <line x1="54" y1="96" x2="60" y2="96" stroke-width="4" stroke-linecap="round"/>`,
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Greedy word-wrap targeting ~maxChars per line, capped at maxLines.
function wrap(title, maxChars, maxLines) {
  const words = String(title).trim().split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if (!cur) cur = w;
    else if ((cur + " " + w).length <= maxChars) cur += " " + w;
    else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1] + "…";
    return kept;
  }
  return lines;
}

function svgFor({ title, chip, cat }) {
  const theme = THEMES[cat] || THEMES.default;
  const { c1, c2 } = theme;
  const motif = (MOTIFS[cat] || MOTIFS.hosting)
    .replaceAll('class="fill"', `fill="${c1}"`);

  const lines = wrap(title, 20, 3);
  const fontSize = lines.length >= 3 ? 62 : lines.length === 2 ? 74 : 82;
  const lineHeight = Math.round(fontSize * 1.16);
  const blockHeight = lines.length * lineHeight;
  const centerY = 318;
  const startY = Math.round(centerY - blockHeight / 2 + fontSize * 0.76);
  const tspans = lines
    .map((ln, i) => `<tspan x="84" y="${startY + i * lineHeight}">${esc(ln)}</tspan>`)
    .join("");
  const chipText = esc(String(chip).toUpperCase());
  const chipWidth = Math.round(58 + chipText.length * 13.2);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.9" y2="1">
      <stop offset="0" stop-color="#0b0e17"/>
      <stop offset="1" stop-color="#070910"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.88" cy="0.22" r="0.75">
      <stop offset="0" stop-color="${c1}" stop-opacity="0.22"/>
      <stop offset="0.6" stop-color="${c1}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.05" cy="1" r="0.7">
      <stop offset="0" stop-color="${c2}" stop-opacity="0.14"/>
      <stop offset="0.6" stop-color="${c2}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1.6" cy="1.6" r="1.2" fill="#ffffff" fill-opacity="0.045"/>
    </pattern>
    <filter id="tshadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <clipPath id="frame"><rect width="1200" height="630" rx="0"/></clipPath>
  </defs>

  <g clip-path="url(#frame)">
    <!-- background -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#dots)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <rect width="1200" height="630" fill="url(#glow2)"/>

    <!-- ghosted category motif, right side -->
    <g transform="translate(790 120) scale(3.6)" stroke="${c1}" opacity="0.14">${motif}</g>

    <!-- hairline ring for depth -->
    <circle cx="985" cy="300" r="255" fill="none" stroke="${c1}" stroke-opacity="0.10" stroke-width="1.5"/>
    <circle cx="985" cy="300" r="300" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>

    <!-- top accent bar -->
    <rect x="0" y="0" width="1200" height="5" fill="url(#accent)"/>

    <g font-family="'Segoe UI', 'Helvetica Neue', Roboto, Arial, sans-serif">
      <!-- category chip -->
      <rect x="84" y="102" rx="19" ry="19" width="${chipWidth}" height="38" fill="${c1}" fill-opacity="0.10" stroke="${c1}" stroke-opacity="0.45" stroke-width="1.5"/>
      <circle cx="108" cy="121" r="4.5" fill="${c1}"/>
      <text x="122" y="128" font-size="17" font-weight="700" letter-spacing="2.2" fill="#e5e7eb">${chipText}</text>

      <!-- title -->
      <text font-size="${fontSize}" font-weight="800" fill="#f8fafc" letter-spacing="-1.2" filter="url(#tshadow)">${tspans}</text>

      <!-- baseline divider -->
      <rect x="84" y="497" width="1032" height="1.5" fill="#ffffff" fill-opacity="0.08"/>
      <rect x="84" y="496" width="120" height="4" rx="2" fill="url(#accent)"/>

      <!-- brand row -->
      <circle cx="112" cy="556" r="24" fill="url(#accent)"/>
      <text x="112" y="564" font-size="21" font-weight="800" fill="#0b0e17" text-anchor="middle">MK</text>
      <text x="152" y="549" font-size="26" font-weight="800" fill="#f9fafb">mohitkoli<tspan fill="${c1}">.in</tspan></text>
      <text x="152" y="577" font-size="16" font-weight="500" fill="#8b93a7">Mohit Koli · Senior Full Stack Developer</text>
      <text x="1116" y="565" font-size="16" font-weight="600" letter-spacing="1.5" fill="#6b7280" text-anchor="end">MOHITKOLI.IN/BLOG</text>
    </g>
  </g>
</svg>
`;
}

const DATA = JSON.parse(process.env.BLOG_IMG_DATA || "[]");

mkdirSync(OUT_DIR, { recursive: true });
let n = 0;
DATA.forEach((item) => {
  writeFileSync(resolve(OUT_DIR, `${item.slug}.svg`), svgFor(item), "utf8");
  n++;
  console.log("wrote", `${item.slug}.svg`);
});
console.log(`Done. ${n} professional SVG hero image(s) generated in ${OUT_DIR}`);
