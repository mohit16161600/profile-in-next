// Generates premium branded SVG hero images for blog posts -> public/assets/blog/<slug>.svg
// Usage: BLOG_IMG_DATA='[{"slug":"...","title":"...","chip":"..."}]' node scripts/gen-blog-images.mjs
// Gradient/accent is chosen by index from PALETTE. Title is auto-wrapped to fit 1200x630.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "assets", "blog");

// 10 vibrant 3-stop palettes (c1 top-left glow, c2 top-right glow, c3 bottom glow + brand accent).
const PALETTE = [
  ["#34d399", "#22d3ee", "#3b82f6"], // emerald / cyan / blue
  ["#60a5fa", "#818cf8", "#a855f7"], // blue / indigo / purple
  ["#e879f9", "#a78bfa", "#6366f1"], // fuchsia / violet / indigo
  ["#fbbf24", "#fb923c", "#ec4899"], // amber / orange / pink
  ["#fb7185", "#f472b6", "#f97316"], // rose / pink / orange
  ["#a78bfa", "#c084fc", "#d946ef"], // violet / purple / fuchsia
  ["#38bdf8", "#60a5fa", "#4f46e5"], // sky / blue / indigo
  ["#2dd4bf", "#34d399", "#16a34a"], // teal / emerald / green
  ["#facc15", "#fbbf24", "#ea580c"], // yellow / amber / orange
  ["#22d3ee", "#38bdf8", "#2563eb"], // cyan / sky / blue
];

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

function svgFor({ title, chip }, idx) {
  const [c1, c2, c3] = PALETTE[idx % PALETTE.length];
  // pick font size first, then wrap to a width budget that matches it
  let lines = wrap(title, 18, 3);
  let fontSize = lines.length >= 3 ? 70 : lines.length === 2 ? 84 : 96;
  // re-wrap a touch tighter for the biggest size to avoid overflow
  if (lines.length === 1 && title.length > 16) { lines = wrap(title, 16, 3); fontSize = 84; }
  const lineHeight = Math.round(fontSize * 1.14);
  const blockHeight = lines.length * lineHeight;
  const centerY = 312;
  const startY = Math.round(centerY - blockHeight / 2 + fontSize * 0.78);
  const tspans = lines
    .map((ln, i) => `<tspan x="84" y="${startY + i * lineHeight}">${esc(ln)}</tspan>`)
    .join("");
  const chipText = esc(String(chip).toUpperCase());
  const chipWidth = Math.min(620, 96 + chipText.length * 14.5);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#04050a"/>
      <stop offset="0.55" stop-color="#080b16"/>
      <stop offset="1" stop-color="#0b0f1c"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.08" cy="0.12" r="0.85">
      <stop offset="0" stop-color="${c1}" stop-opacity="0.55"/>
      <stop offset="0.55" stop-color="${c1}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.98" cy="0.08" r="0.8">
      <stop offset="0" stop-color="${c2}" stop-opacity="0.5"/>
      <stop offset="0.5" stop-color="${c2}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g3" cx="0.78" cy="1.0" r="0.95">
      <stop offset="0" stop-color="${c3}" stop-opacity="0.45"/>
      <stop offset="0.55" stop-color="${c3}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="0.5" stop-color="${c2}"/>
      <stop offset="1" stop-color="${c3}"/>
    </linearGradient>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M46 0H0V46" fill="none" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14"/>
    </filter>
    <filter id="tshadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="10" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- background layers -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect width="1200" height="630" fill="url(#g3)"/>

  <!-- decorative orbit, top-right -->
  <g transform="translate(1012 150)" opacity="0.9">
    <circle r="240" fill="url(#bar)" opacity="0.10" filter="url(#soft)"/>
    <ellipse rx="150" ry="58" fill="none" stroke="${c2}" stroke-opacity="0.35" stroke-width="2" transform="rotate(-22)"/>
    <ellipse rx="110" ry="110" fill="none" stroke="${c1}" stroke-opacity="0.25" stroke-width="2"/>
    <circle cx="150" cy="-58" r="9" fill="${c2}"/>
    <circle cx="-104" cy="40" r="6" fill="${c1}"/>
    <circle cx="0" cy="0" r="20" fill="url(#bar)"/>
  </g>

  <!-- thin top border accent -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#bar)"/>

  <g font-family="'Segoe UI', 'Helvetica Neue', Roboto, Arial, sans-serif">
    <!-- category chip -->
    <rect x="84" y="96" rx="23" ry="23" width="${chipWidth}" height="46" fill="#ffffff" fill-opacity="0.07" stroke="${c1}" stroke-opacity="0.5"/>
    <circle cx="112" cy="119" r="6" fill="${c1}"/>
    <text x="130" y="127" font-size="22" font-weight="700" letter-spacing="2.5" fill="#f3f4f6">${chipText}</text>

    <!-- title -->
    <text font-size="${fontSize}" font-weight="800" fill="#ffffff" letter-spacing="-1.5" filter="url(#tshadow)">${tspans}</text>

    <!-- divider -->
    <rect x="84" y="486" width="132" height="6" rx="3" fill="url(#bar)"/>

    <!-- brand row -->
    <circle cx="110" cy="560" r="26" fill="url(#bar)"/>
    <text x="110" y="569" font-size="24" font-weight="800" fill="#04050a" text-anchor="middle">MK</text>
    <text x="150" y="552" font-size="30" font-weight="800" fill="#f9fafb">mohitkoli<tspan fill="${c2}">.info</tspan></text>
    <text x="150" y="582" font-size="19" font-weight="500" fill="#9aa3b2">Mohit Koli — Senior Full Stack Developer</text>
  </g>
</svg>
`;
}

const DATA = JSON.parse(process.env.BLOG_IMG_DATA || "[]");

mkdirSync(OUT_DIR, { recursive: true });
let n = 0;
DATA.forEach((item, idx) => {
  writeFileSync(resolve(OUT_DIR, `${item.slug}.svg`), svgFor(item, idx), "utf8");
  n++;
  console.log("wrote", `${item.slug}.svg`);
});
console.log(`Done. ${n} premium SVG hero image(s) generated in ${OUT_DIR}`);
