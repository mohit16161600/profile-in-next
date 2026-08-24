// Rasterizes the branded SVG hero images -> public/assets/blog/<slug>.png (1200x630).
//
// Why both formats exist: the SVG is ~4KB and stays the on-page hero (great LCP),
// but no social platform renders an SVG og:image — Facebook, WhatsApp, X, LinkedIn
// and Pinterest all drop it, and Google Discover needs a raster >=1200px wide.
// So every SVG gets a PNG twin that is used for og:image, twitter:image and the
// BlogPosting schema image.
//
// Usage: node scripts/rasterize-blog-images.mjs [--force]
import { readdirSync, existsSync, statSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = resolve(__dirname, "..", "public", "assets", "blog");
const FORCE = process.argv.includes("--force");

const svgs = readdirSync(DIR).filter((f) => f.endsWith(".svg"));
if (!svgs.length) {
  console.error(`No SVGs found in ${DIR}`);
  process.exit(1);
}

let written = 0;
let skipped = 0;

for (const file of svgs) {
  const src = join(DIR, file);
  const out = join(DIR, file.replace(/\.svg$/, ".png"));

  // Skip when the PNG is already newer than its source, unless --force.
  if (!FORCE && existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) {
    skipped++;
    continue;
  }

  await sharp(src, { density: 144 })
    .resize(1200, 630, { fit: "fill" })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(out);

  const kb = (statSync(out).size / 1024).toFixed(0);
  console.log(`wrote ${file.replace(/\.svg$/, ".png")} (${kb} KB)`);
  written++;
}

console.log(`\nDone. ${written} PNG written, ${skipped} up to date, in ${DIR}`);
