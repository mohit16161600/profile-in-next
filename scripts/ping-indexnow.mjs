/**
 * Ping IndexNow (Bing, Yandex, Seznam, Naver) with every URL from the live sitemap.
 * Google does not consume IndexNow, but Bing powers DuckDuckGo/Ecosia and is a real
 * impressions source — this gets new/updated pages indexed there within hours.
 *
 * Run AFTER deploying (the key file must be live at /<KEY>.txt):
 *   node scripts/ping-indexnow.mjs
 */

const SITE = 'https://mohitkoli.info';
const KEY = '8530f65840195d95374c3e4bb20d2118';

const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
if (!sitemapRes.ok) {
    console.error(`Failed to fetch sitemap: HTTP ${sitemapRes.status}`);
    process.exit(1);
}

const xml = await sitemapRes.text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

if (urls.length === 0) {
    console.error('No URLs found in sitemap — aborting.');
    process.exit(1);
}

console.log(`Submitting ${urls.length} URLs from sitemap to IndexNow...`);

const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
        host: 'mohitkoli.info',
        key: KEY,
        keyLocation: `${SITE}/${KEY}.txt`,
        urlList: urls,
    }),
});

// 200 = submitted, 202 = accepted (key validation pending) — both are success.
if (res.status === 200 || res.status === 202) {
    console.log(`✅ IndexNow accepted (HTTP ${res.status}) — ${urls.length} URLs submitted.`);
} else {
    console.error(`❌ IndexNow rejected: HTTP ${res.status} ${await res.text()}`);
    process.exit(1);
}
