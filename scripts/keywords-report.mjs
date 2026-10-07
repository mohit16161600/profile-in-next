// Har blog page ka title, description aur keywords ek jagah.
// Chalao:  node scripts/keywords-report.mjs            (saare pages)
//          node scripts/keywords-report.mjs hostinger  (sirf matching slugs)
import fs from 'fs';

const filter = (process.argv[2] || '').toLowerCase();
const D = 'src/app/blog';

for (const slug of fs.readdirSync(D).sort()) {
    if (slug === '[slug]' || !fs.existsSync(`${D}/${slug}/page.tsx`)) continue;
    if (filter && !slug.toLowerCase().includes(filter)) continue;

    const s = fs.readFileSync(`${D}/${slug}/page.tsx`, 'utf8');
    const grab = (re) => (s.match(re) || [])[1];
    const title = grab(/\n\s{4}title:\s*"([^"]+)"/) || grab(/const TITLE = "([^"]+)"/) || '(const — see file)';
    const desc = grab(/\n\s{4}description:\s*\n?\s*"([^"]+)"/) || grab(/const DESCRIPTION =\s*\n?\s*"([^"]+)"/) || '';
    const kwBlock = (s.match(/keywords:\s*\[([\s\S]*?)\]/) || [])[1] || '';
    const kws = [...kwBlock.matchAll(/"([^"]+)"/g)].map((m) => m[1]);

    console.log(`\n${'='.repeat(70)}\n${slug}`);
    console.log(`TITLE (${title.length})  ${title}`);
    if (desc) console.log(`DESC  (${desc.length})  ${desc.slice(0, 110)}${desc.length > 110 ? '…' : ''}`);
    console.log(`KEYWORDS (${kws.length}):`);
    kws.forEach((k) => console.log(`   - ${k}`));
}
