# SEO Changelog — mohitkoli.in

Baseline for every entry: Google Search Console, **8 Aug – 4 Oct 2026** (3 months).

---

## 2026-10-07 — Batch 1 (EXP-004 … EXP-009)

**Backup commit:** `7685c79` — "Backup before Phase-2 Batch 1 (EXP-004..012)"
**Prior backup:** EXP-001..003 snapshot, commit before "EXP-001..003 title tests"

### The pattern this batch tests

Across the 3-month data, every page that leads its title with a **price or
discount percentage** has near-zero CTR, and every page that leads with
something the vendor cannot say has a working CTR:

| Page | Title angle | CTR | Position |
|---|---|---|---|
| chatgpt-hidden-features-hacks | curiosity | **6.08%** | 6.98 |
| hostinger-renewal-price-india-2026 | renewal jump | 1.54% | 14.74 |
| hostinger-business-plan | news hook | 1.57% | 8.04 |
| best-domain-registrars-india-2026 | price | 0.20% | 8.43 |
| best-vps-hosting-india-2026 | discount | 0% | 6.88 |

On a commercial SERP, hostinger.com and godaddy.com outrank us and show the
same price. A price-led title gives the searcher no reason to pick our result.

EXP-001..003 started this test on 2026-10-07. Batch 1 extends it to five more
pages plus one page that tests a different variable entirely.

### Treatment A — title repositioning (one variable: title only)

Content, H1, schema, internal links and descriptions are unchanged so results
stay comparable with EXP-001..003.

| EXP | Page | Impr | Clicks | Pos | Old title | New title |
|---|---|---|---|---|---|---|
| 004 | hostinger-business-plan | 766 | 12 | 8.04 | Hostinger Unlimited Plan: 64% Off (Was Business Plan) | Hostinger Business Plan 2026: It's Now Called Unlimited |
| 005 | hostinger-plans-pricing-india-2026 | 715 | 1 | 34.63 | Hostinger Hosting Plans India: 83% Off, From ₹69/mo | Hostinger Plans India 2026: Sale Price vs Renewal Price |
| 006 | hostinger-domain-price-india-2026 | 538 | 2 | 14.95 | Hostinger Domain Price India 2026: .in ₹99, .com ₹149 | Hostinger Domain Price India: Year 1 vs Renewal, by TLD |
| 007 | hostinger-vs-godaddy-vs-bluehost-2026 | 268 | 4 | 10.91 | Hostinger vs GoDaddy India 2026: ₹69 vs ₹89/mo Compared | Hostinger vs GoDaddy vs Bluehost India: 4-Year Cost |
| 008 | hostinger-cloud-hosting-india-2026 | 145 | 1 | 17.32 | Hostinger Cloud Hosting India: 65% Off, From ₹599/mo | Hostinger Cloud Hosting India: ₹599 Now, ₹1,599 Later |

Per-page reasoning:

- **EXP-004** is a search-intent correction, not just a CTR test. The head query
  is `hostinger business plan` (83 impressions, position 12.19) — larger than
  `hostinger unlimited plan` (55 impressions, position 10.85). The title led
  with the smaller query. It now leads with the phrase people actually type and
  keeps the rename as the hook.
- **EXP-005** — the 34.63 average is misleading. `hostinger plans india` sits at
  position 9.65 with 71 impressions and zero clicks; the average is dragged down
  by generic global terms (`hostinger plans` at 55.5) this site will not win.
  So this is a CTR problem on the India-qualified query, not a ranking problem.
- **EXP-006** — every click this page has earned came from renewal intent
  (`hostinger domain renewal price in india`, 25 impressions, 2 clicks,
  position 8.2). The title advertised first-year prices instead.
- **EXP-007** — the page ranks **position 1** for `hostinger vs bluehost vs
  godaddy` and `bluehost vs godaddy vs hostinger`, yet the title named only two
  of the three brands. Adding Bluehost is a direct query-match fix.
- **EXP-008** — same price-led pattern; the renewal jump (₹599 → ₹1,599) is the
  page's actual differentiator.

### Treatment B — internal prominence (one variable: internal links)

| EXP | Page | Impr | Clicks | Pos | Change |
|---|---|---|---|---|---|
| 009 | how-to-transfer-domain-from-godaddy | 615 | 2 | 44.05 | Added to `PRIORITY_SLUGS` |

This page carries 50+ query variants, all stuck at position 38–48. That is an
authority problem, and a title rewrite cannot fix page 5. Its title already
leads with a differentiator ("6 Steps, ₹969, No Downtime"), so it was left
alone and a **different variable** was changed instead: internal prominence.
Inbound internal links went 6 → 7 and it now sits high in the priority feed.

If position moves and the title did not change, internal linking is the lever
for the rest of the page-4/5 cluster. If it does not move, the answer is
off-site links and no amount of on-site work will help.

### Treatment C — deliberately NOT changed (held as evidence)

| Page | Impr | Clicks | CTR | Pos | Why untouched |
|---|---|---|---|---|---|
| hostinger-renewal-price-india-2026 | 259 | 4 | 1.54% | 14.74 | Already differentiator-led ("₹149 Jumps to ₹449/mo"). Changing it would destroy the evidence for the hypothesis. |
| cheap-web-hosting-under-200-india | 75 | 2 | 2.67% | 5.79 | CTR is already double the site average. No problem to fix. |

### Control group — unchanged until 2026-11-04

Reduced from four pages to three, per Phase-2 §6. `hostinger-business-plan` was
released from the control group and promoted to EXP-004.

| Page | Clicks | Impr | CTR | Pos |
|---|---|---|---|---|
| chatgpt-hidden-features-hacks | 33 | 543 | 6.08% | 6.98 |
| viral-chatgpt-image-prompts-2026 | 25 | 1,149 | 2.18% | 8.70 |
| / (homepage) | 6 | 438 | 1.37% | 5.75 |

### Verification

- Build: compiled successfully
- All five new titles render at 51–57 characters (under the ~60 truncation point)
- `how-to-transfer-domain-from-godaddy` inbound internal links: 6 → 7
- No content, schema, canonical or URL changes in this batch

### Measurement

Review **2026-11-04** (28 days). Compare each experiment page against its own
baseline *and* against the control group, so site-wide movement is not mistaken
for experiment effect.

---

## Queued — Batch 2 (not deployed)

Decide after the 4 Nov review:

1. If Treatment A wins → apply the same title pattern to the remaining
   price-led titles across the site.
2. If Treatment A fails → the problem is not the SERP snippet. Move to content
   restructuring on `hostinger-business-plan` and `hostinger-plans-pricing`.
3. If EXP-009 moves position → run the internal-link treatment across the whole
   page-4/5 cluster (`hostinger-wordpress-hosting-india-2026` at 43.79,
   `digitalocean-vs-vultr-vs-cloudways` at 49.70, `migrate-wordpress-to-new-host`
   at 58.20, `semrush-vs-ahrefs` at 71.69).

### Possible merge candidates (needs decision, not yet actioned)

Three Hostinger discount pages share one intent and together earned 7
impressions in three months:

| Page | Impr | Pos |
|---|---|---|
| how-to-get-hostinger-90-off-2026 | 5 | 7.20 |
| hostinger-discount-code-2026 | 1 | 26.00 |
| hostinger-55-per-month-offer | 25 | 8.96 |

Merging into one discount page with 301 redirects is defensible, but it changes
URLs mid-experiment. Hold until after 4 Nov.

---

## 2026-10-07 — Batch 2 (EXP-010)

**Finding the CSV could not show:** the GSC export only lists pages that earned
at least one impression. Diffing it against `posts.ts` found **8 pages with zero
impressions in three months**. Four are simply new; four are not.

| Page | Published | Age | Inbound links before |
|---|---|---|---|
| nano-banana-saree-trend-prompts-2026 | 18 Jun 2026 | 111 days | 12 |
| best-ai-video-generators-2026 | 2 Jun 2026 | 127 days | 7 |
| beyondz900-riding-vlogs | 9 Aug 2026 | 59 days | 3 |
| best-keyword-research-tools-2026 | 24 Aug 2026 | 44 days | 4 |

Technical audit of all eight: present in sitemap, self-canonical, no `noindex`,
titles 48–63 characters, HTML renders. **Nothing technical is blocking them.**

Two of the four sat at exactly the `RelatedPosts` MIN_INBOUND floor of 3–4.
A page that nothing links to is a page Google has little reason to keep crawling.

### EXP-010 — raise the internal-link floor

```text
Experiment ID:      EXP-010
Scope:              site-wide, single variable
File:               src/components/RelatedPosts.tsx
Change:             MIN_INBOUND 3 -> 5
Hypothesis:         Pages at the link floor are starved of internal signal. Raising the
                    guaranteed minimum should improve crawl frequency and index coverage
                    for the long tail without touching any page's content.
Result (build):     site-wide minimum inbound 3 -> 5, median 10 (unchanged)
                    best-keyword-research-tools  4 -> 6
                    beyondz900-riding-vlogs      3 -> 5
                    best-ai-video-generators     7 -> 7
                    nano-banana-saree-trend     12 -> 10
Expected effect:    first impressions on the four dead pages within 28 days
Risk:               Low. No content, title or URL changed. Revert = set the constant back to 3.
Deployed:           2026-10-07
Measurement:        28 days (review 2026-11-04)
Result:             pending
```

Note: `nano-banana-saree-trend` went 12 -> 10 because the coverage pass
redistributes links toward the most starved pages. It is still well above floor.

### Not actioned — awaiting index-status evidence

Whether these four are **not indexed** or **indexed but never in the top 100**
changes the treatment completely, and only GSC URL Inspection can tell us. Until
Mohit reports that, rewriting them would be guesswork. See MANUAL ACTION #1.

