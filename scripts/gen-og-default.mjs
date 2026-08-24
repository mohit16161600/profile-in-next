// Builds the site-wide social card -> public/assets/og-default.png (1200x630).
//
// layout.tsx used to point og:image at mohit-koli-profile-photo.jpg while declaring
// width 1200 / height 630. The file is actually 1333x1373 (near-square), so every
// scraper that trusts the declared box — Facebook, LinkedIn, WhatsApp — laid out a
// 1.91:1 card and then cropped a portrait photo into it. This generates a real
// 1.91:1 card using the same brand language as the blog heroes.
//
// Usage: node scripts/gen-og-default.mjs
import { writeFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = resolve(__dirname, "..", "public");
const OUT = resolve(PUBLIC, "assets", "og-default.png");

const c1 = "#818cf8";
const c2 = "#6366f1";
const AVATAR = 232;

// The background SVG is rasterised at 2x so the text edges stay crisp after the
// downsample. compositing happens in that 2x space, so every placement coordinate
// below is multiplied by SCALE — mixing viewBox units with rendered pixels here
// silently puts the avatar in the wrong place.
const SCALE = 2;
// The avatar composites onto the final 1200x630 canvas, so it is sized in final
// pixels — the 1333px source downsamples to 232 with room to spare.
const AVATAR_PX = AVATAR;

// Circular avatar, cut from the portrait's upper half so the face survives the crop.
const avatar = await sharp(resolve(PUBLIC, "assets", "mohit-koli-profile-photo.jpg"))
  .resize(AVATAR_PX, AVATAR_PX, { fit: "cover", position: "top" })
  .ensureAlpha()
  .composite([
    {
      input: Buffer.from(
        `<svg width="${AVATAR_PX}" height="${AVATAR_PX}"><circle cx="${AVATAR_PX / 2}" cy="${AVATAR_PX / 2}" r="${AVATAR_PX / 2}" fill="#fff"/></svg>`,
      ),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();

const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.9" y2="1">
      <stop offset="0" stop-color="#0b0e17"/><stop offset="1" stop-color="#070910"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.25" r="0.75">
      <stop offset="0" stop-color="${c1}" stop-opacity="0.22"/>
      <stop offset="0.6" stop-color="${c1}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1.6" cy="1.6" r="1.2" fill="#ffffff" fill-opacity="0.045"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="5" fill="url(#accent)"/>
  <circle cx="932" cy="300" r="168" fill="none" stroke="${c1}" stroke-opacity="0.18" stroke-width="1.5"/>
  <circle cx="932" cy="300" r="205" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
  <g font-family="'Segoe UI', 'Helvetica Neue', Roboto, Arial, sans-serif">
    <rect x="84" y="150" rx="19" ry="19" width="286" height="38"
          fill="${c1}" fill-opacity="0.10" stroke="${c1}" stroke-opacity="0.45" stroke-width="1.5"/>
    <circle cx="108" cy="169" r="4.5" fill="${c1}"/>
    <text x="122" y="176" font-size="17" font-weight="700" letter-spacing="2.2" fill="#e5e7eb">FULL STACK DEVELOPER</text>

    <text x="84" y="272" font-size="76" font-weight="800" fill="#f8fafc" letter-spacing="-1.6">Mohit Koli</text>
    <text x="84" y="330" font-size="34" font-weight="600" fill="#c7cbd6">React · Next.js · PHP · Laravel</text>
    <text x="84" y="380" font-size="24" font-weight="500" fill="#8b93a7">Freelance web developer building fast,</text>
    <text x="84" y="412" font-size="24" font-weight="500" fill="#8b93a7">scalable sites for founders across India.</text>

    <rect x="84" y="497" width="1032" height="1.5" fill="#ffffff" fill-opacity="0.08"/>
    <rect x="84" y="496" width="120" height="4" rx="2" fill="url(#accent)"/>
    <circle cx="112" cy="556" r="24" fill="url(#accent)"/>
    <text x="112" y="564" font-size="21" font-weight="800" fill="#0b0e17" text-anchor="middle">MK</text>
    <text x="152" y="565" font-size="26" font-weight="800" fill="#f9fafb">mohitkoli<tspan fill="${c1}">.in</tspan></text>
  </g>
</svg>`;

mkdirSync(resolve(PUBLIC, "assets"), { recursive: true });

// Two passes on purpose. sharp runs its pipeline in a fixed order — resize happens
// BEFORE composite no matter which you call first — so rendering at 2x and resizing
// in one chain would drop the avatar at 2x coordinates onto an already-shrunk 1200px
// canvas, placing it off-frame entirely. Pass 1 renders and downsamples the
// background; pass 2 composites onto the final-size canvas.
//
// density 72 is the 1:1 baseline for an SVG declaring width="1200", so 72*SCALE
// renders the viewBox at 2400x1260 before the downsample keeps the text crisp.
const background = await sharp(Buffer.from(bg), { density: 72 * SCALE })
  .resize(1200, 630, { fit: "fill" })
  .png()
  .toBuffer();

await sharp(background)
  .composite([{ input: avatar, left: 932 - AVATAR / 2, top: 300 - AVATAR / 2 }])
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`wrote assets/og-default.png ${meta.width}x${meta.height} (${(statSync(OUT).size / 1024).toFixed(0)} KB)`);
