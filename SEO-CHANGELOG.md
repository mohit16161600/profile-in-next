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


---

## 2026-10-07 — Batch 3, Hostinger cluster only (EXP-011 … EXP-013)

### Hypothesis corrected

`hostinger-55-per-month-offer` disproves the original wording. Its title is
price-led — "Hostinger ₹55/mo: Cheapest Plan at 86% Off (2026)" — and it has the
**best CTR in the entire Hostinger cluster: 8.0%** (2 clicks / 25 impressions,
position 8.96).

The difference is not price vs no-price. It is **whose number it is**:

| Number in title | Who else shows it | Example | CTR |
|---|---|---|---|
| ₹55, 86% off | nobody — it only exists after the referral code | hostinger-55-per-month-offer | **8.0%** |
| ₹449 renewal | nobody — Hostinger does not advertise renewals | hostinger-renewal-price-india-2026 | 1.54% |
| ₹69, 83% off | Hostinger's own homepage | hostinger-wordpress-hosting | 0% @ pos 43.79 |
| ₹599, 69% off | Hostinger's own VPS page | best-vps-hosting | 0% @ pos 6.88 |

> **Revised hypothesis:** a title fails when it repeats a number the vendor
> also displays, because the vendor outranks us and shows the same figure. It
> works when the number is one only this site can state — the post-referral
> price, or the renewal rate.

This refines EXP-001…008 rather than invalidating them; all of those replaced
vendor-visible numbers. It also predicts which pages should be left alone.

### Changes

| EXP | Page | Impr | Clicks | Pos | New title |
|---|---|---|---|---|---|
| 011 | hostinger-wordpress-hosting-india-2026 | 39 | 0 | 43.79 | Hostinger WordPress India: ₹119/mo, Renews at ₹449 |
| 012 | hostinger-review-2026 | 29 | 1 | 32.55 | Hostinger Review 2026: What the Pricing Page Does Not Say |
| 013 | hostinger-vps-review-hindi-2026 | 25 | 0 | 9.28 | Hostinger VPS ₹479/mo: Renewal ₹999 Ka Poora Hisaab |

- **EXP-011** — both old numbers (83% off, ₹69) are Hostinger's own. Replaced
  with ₹119 (Premium after the referral 20%) and ₹449 (the renewal rate).
- **EXP-013** — ₹479 was already unique, but "69% Tak Off" was Hostinger's
  figure. Swapped for the ₹999 renewal.

### EXP-012 is also a correctness fix, not only a CTR test

The old title claimed **"India Tested"**. A grep of the page found that phrase
in the title, Open Graph, Twitter card and schema headline — and **nowhere in
the page body**. There is no test, no methodology, no measurement, no date.

That is an unsupported first-hand-experience claim, which both playbooks
prohibit (`MohitKoli_SEO_Growth_Master_Prompt.md` §14, Phase-2 §15). It has been
removed from all four places. This change would have been correct regardless of
its effect on CTR.

### Not changed, and why

| Page | Impr | CTR | Pos | Reason |
|---|---|---|---|---|
| hostinger-55-per-month-offer | 25 | **8.0%** | 8.96 | Best CTR in the cluster. It is the evidence for the revised hypothesis. |
| best-web-hosting-india-2026 | 75 | **4.0%** | 17.59 | Second-best CTR. Working. |
| cheap-web-hosting-under-200-india | 75 | 2.67% | 5.79 | Above site average. |
| hostinger-renewal-price-india-2026 | 259 | 1.54% | 14.74 | Already renewal-led. Control for the pattern. |
| nodejs-hosting-india-2026 | 10 | 0% | 17.0 | Too little data to test anything. |
| hostinger-discount-code-2026 | 1 | 0% | 26.0 | 1 impression in 3 months. Merge candidate, not a title problem. |

### Verification

- Build compiled successfully
- All three titles render at 54–57 characters
- `India Tested` occurrences in `hostinger-review-2026`: 4 → **0**
- No content, schema type, canonical or URL changes

### Hostinger cluster coverage after Batches 1–3

11 of the ~20 Hostinger-cluster pages now carry a live experiment
(EXP-001…008, 011…013). Six are deliberately held as evidence or controls. The
rest have too little data to test.

### Measurement

Review **2026-11-04**. The revised hypothesis gives a sharper prediction:
pages whose titles now carry a referral-only price or a renewal rate should
move; pages still showing vendor-visible numbers should not.


---

## 2026-10-07 — EXP-014, MAJOR: hostinger-plans-pricing-india-2026

**Backup commit:** `c4c7fff` — "Backup before EXP-014"
**Baseline:** 715 impressions · 1 click · CTR 0.14% · position 34.63 (3 months)
**Title/H1:** unchanged — EXP-005 is still measuring the title. This experiment
changes **content and facts only**, so the two variables stay separable.

### Why this is a correctness fix before it is an SEO experiment

An audit against Hostinger's live India pages found the page was wrong about
its own subject in six places, and claimed experience that cannot be evidenced.

| # | Was | Now | Source |
|---|---|---|---|
| 1 | No Single plan at all; "hosting starts at ₹149" | Single added: ₹69/mo, renews ₹289, 1 site, 10 GB SSD | /in/web-hosting |
| 2 | Unlimited: "5 mailboxes free for 1 year" | Unlimited mailboxes per website (1st year) | /in/web-hosting |
| 3 | Cloud Startup: "100 websites" | Unlimited websites | /in/web-hosting |
| 4 | Cloud Startup: "free domain + dedicated IP" | Free domain (1st year) — dedicated IP is listed on Agency plans, not verified here | /in/web-hosting, /in/pro |
| 5 | "KVM VPS starts around ₹499/mo" (×4) | ₹599/mo, renews ₹999/mo | /in/vps-hosting |
| 6 | KVM renewals "Varies by term" / "See live pricing" | ₹999 and ₹1,199–₹4,399 | /in/vps-hosting |

### Unsupported first-hand claims removed

None of these were evidenced anywhere on the site:

- "I have deployed client projects on every tier"
- "it is the plan I use in my …"
- "My verdict after a year of running client sites on these plans"
- Related-link anchor: "honest verdict after a year of client sites"

### Claims softened to what can actually be substantiated

- **Referral:** "you get an extra ~20% discount on top of the sale" →
  "it applies up to 20% off at checkout on top of the sale price". The stacked
  figure was asserting checkout behaviour that has not been verified end to end.
  Same change to "with the referral discount stacked", "with the referral stack",
  and the comparison-chart label.
- **Refund:** "the money-back guarantee is a full refund — the trial is
  genuinely free" → now states the 30-day guarantee **with** its exclusions
  (domain registrations) and tells the reader to check the current policy.

### Last-verified date

Was "July 2, 2026" and "last verified July 2026" in two places. Now **4 October
2026**, with the two source URLs named inline. The date was changed only
because every fast-changing figure on the page was actually re-checked today.

### Verification

| Check | Result |
|---|---|
| Build | compiled successfully |
| Title | Hostinger Plans India 2026: Sale Price vs Renewal Price (unchanged, EXP-005) |
| H1 | Hostinger Plans & Pricing in India (2026): Full Price List & Which Plan to Buy |
| Canonical | `https://mohitkoli.in/blog/hostinger-plans-pricing-india-2026` ✓ |
| Single plan renders | yes (₹289 renewal present) |
| Stale ₹499 remaining | **0** |
| Stale "July 2026" remaining | **0** |
| Unsupported first-hand claims remaining | **0** |
| Affiliate links with `rel="nofollow sponsored noopener"` | 8 |
| Schema | BlogPosting, FAQPage, BreadcrumbList intact |
| Internal blog links | 16 |

### Hypothesis

```text
Experiment ID:   EXP-014
Cohort:          MAJOR (content + facts; multi-variable, labelled as such)
Hypothesis:      The page ranked 34.63 while being factually wrong about the entry
                 price of the product it exists to explain. A page that omits the
                 cheapest plan cannot satisfy "hostinger plans india" intent.
                 Correcting the facts and adding the missing tier should improve
                 intent match on the India-qualified queries where it already
                 reaches position 9.65.
Expected effect: position improvement on "hostinger plans india" (71 impressions,
                 position 9.65, 0 clicks) within 28 days.
Risk:            Low-moderate. No title, URL, canonical or schema change. Rollback
                 is `git revert` to c4c7fff.
Deployed:        2026-10-07
Measurement:     28 days (review 2026-11-04)
Result:          pending
```

### Still outstanding on this page (not done today)

Phase-2 asked to compress the VPS / Agency / domain / email / discount sections
into summaries that link out, so this hub stops competing with the dedicated
pages. **Not done in this pass** — it is a structural change, and mixing it with
18 factual corrections in one deploy would make the result unreadable. Queued as
EXP-015 after the 4 Nov review.


---

## 2026-10-07 — Batch 4: CTR titles outside the live tests (EXP-016 … EXP-018)

Applied the CTR framework **only to pages not already carrying a live experiment**,
so EXP-001…013 keep measuring cleanly. Every new title is backed by a section
that genuinely exists on the page — no invented claim, no invented number.

| EXP | Page | Impr | Clicks | Pos | Old title | New title | Why |
|---|---|---|---|---|---|---|---|
| 016 | best-seo-tools-india-2026 | 98 | **0** | 8.61 | Best SEO Tools in India 2026: Real Prices in ₹ and $ | Cheapest SEO Tools in India 2026: Start With the Free Ones | Its real queries are cost-led (`cheapest seo tool in india` pos 7.64, `seo software cost` pos 3.2), not "best". The page's own strongest section is "Start with the free ones. Seriously." — the title was hiding it. |
| 017 | deepseek-vs-chatgpt-2026 | 21 | **0** | 5.29 | DeepSeek vs ChatGPT 2026: Which Free AI Is Better? | DeepSeek vs ChatGPT 2026: Where the Free Tier Runs Out | Position 5.29 with zero clicks across three months. The old title asked the same generic question as every competing result. The page has a dedicated "Free Tier & Cost" section, so the new title promises something specific. |
| 018 | is-react-worth-learning-2026 | 82 | 1 | 8.4 | Is React Worth Learning in 2026? An Honest Answer | Is React Worth Learning in 2026? Who Should Skip It | "An Honest Answer" promises nothing. The page has a section literally titled "Who Should NOT Learn React First" — the most distinctive thing on it. |

### Title length fixes (no experiment — these were being truncated)

| Page | Was | Now |
|---|---|---|
| domain-kaise-kharide-galtiyan-2026 | 62 chars | 50 — "Domain Ke Paise Mat Dein: Hosting Me Free Aata Hai" |
| hostinger-ai-builder-se-website-kaise-banaye | 63 chars | 58 — "AI Se Website ₹119/mo: 5 Credits Ka Sach Pehle Padh Lein" |

Blog-card titles in `posts.ts` synced to match.

### Build note

The first attempt at EXP-018 produced "Who Should Skip It Who Should Skip It" —
a second replacement matched inside the output of the first. Caught in the
rendered-title check and corrected before commit. Title now renders at 51 chars.


---

## 2026-10-07 — EXP-019: how-to-transfer-domain-from-godaddy

**Baseline:** 615 impressions · 2 clicks · position 44.05 (3 months) — the site's
third-largest page by impressions, and the worst-positioned large one.

### What the query data shows

The 615 impressions are not one intent. They are three:

| Intent | Approx. impressions | Positions |
|---|---|---|
| Transfer away from GoDaddy to another registrar | ~450 | 38–48 |
| Move a domain between two GoDaddy accounts | ~22 | 37–52 |
| Change domain ownership / transfer to another person | ~17 | 41–47 |

### What was done — and what was not

The page already carries a verified, visible section covering the account-change
and ownership case (free, no auth code, Domain Portfolio → transfer to another
GoDaddy account, recipient accepts from the emailed link or Pending Account
Changes, lapses in ~10 days, does not add a year, does not clear the 60-day lock).

The content was fine. The **heading never used the words people search**:

- Was: "Transferring a domain to another GoDaddy account (a "push")"
- Now: "GoDaddy to GoDaddy: changing a domain's account or owner (a "push")"

The opening paragraph now names ownership change explicitly, which the section
already described in substance ("when you sell a domain, when you hand a client
the domain you registered on their behalf").

**No new facts were added.** Only verified content already on the page was
re-worded to match search language.

### A separate page was considered and rejected

Splitting the account/ownership intent onto its own URL is defensible —
HostAdvice runs a dedicated page for it. It was **not** done, for one reason:
GoDaddy's own help article could not be retrieved (the fetch geo-redirected to a
Dutch page with no usable content), so the current UI steps could not be verified
from a primary source. Writing a step-by-step from memory would be fabricated
instructions for a destructive action on someone's domain.

### MANUAL ACTION #2 — needed before the split page can be written

**Where:** godaddy.com, logged in
**What to capture:**
1. Domain Portfolio → open any domain → find the account-change option. Note the
   exact menu label.
2. Note what the confirmation screen asks for (email only, or email + customer number).
3. Note the stated expiry of a pending request.

**Why:** these are the only facts missing. With them the dedicated page can be
written and should pick up the ~39 impressions currently ranking 37–52.

### Honest limit on this page

The main cluster — ~450 impressions across 50+ "transfer domain from godaddy"
variants — sits at position 38–48 against GoDaddy's own help docs and Forbes
Advisor. That is an authority gap. No heading, title or structure change moves a
page from 44 to page 1 against those competitors. EXP-009 (internal prominence)
is the on-site lever already running; beyond it, this page needs external links.

```text
Experiment ID:   EXP-019
Cohort:          MEDIUM (heading + intro wording; content unchanged)
Deployed:        2026-10-07
Measurement:     28 days (review 2026-11-04)
Target:          the ~39 impressions on account-change and ownership queries
Result:          pending
```


---

## 2026-10-07 — Batch 5: keyword tiers + CTR titles across the remaining pages

**NOT COMMITTED.** Working tree only — Mohit commits.

### Keyword tiering — all 52 pages

Every flat `keywords` array is now split into PRIMARY / SECONDARY / LONG-TAIL /
SUPPORTING, via `scripts/tier-keywords.mjs`.

The meta keywords tag carries no ranking weight on its own. The point of the
exercise is the **one explicit PRIMARY term per page**, which the title, H1 and
intro are then checked against — that check is what actually matters.

PRIMARY was never guessed. Where Search Console shows what a page really ranks
for, that query became the primary (38 pages mapped explicitly in the script).

### Primary-in-title audit

A new check compares each page's PRIMARY against its rendered title and H1.

| | Before | After |
|---|---|---|
| PRIMARY weak in both title and H1 | 10 | **2** |
| Titles over 62 characters | 1 | **0** |

The 2 remaining are matcher artefacts, not real gaps:
`hostinger-55-per-month-offer` ("₹55/mo" vs "55 per month" — and it is the site's
best CTR at 8%, so it stays untouched) and `gemini-3-1-chhupe-features-2026`.

### Titles fixed because the product name was missing entirely

These pages never named their own product in the title, so they could not match
the query they exist for:

| Page | Was | Now |
|---|---|---|
| hostinger-ai-builder-se-website-kaise-banaye | AI Se Website ₹119/mo: 5 Credits Ka Sach Pehle Padh Lein | Hostinger AI Builder ₹119/mo: 5 Credits Ka Sach |
| hostinger-business-email-price-india-2026 | Company Wala Email Sirf ₹23/mo: 84% Off Ka Poora Hisaab | Hostinger Business Email ₹23/mo: 84% Off Ka Hisaab |
| hostinger-n8n-hosting-india-2026 | n8n Self-Host Sirf ₹479/mo: Unlimited Workflows, Fix Bill | n8n Hosting India ₹479/mo: Unlimited Workflows, Fix Bill |
| gemini-3-1-chhupe-features-2026 | Gemini 3.1 Ke 7 Chhupe Feature… | Gemini 3.1 **Pro** Ke 7 Chhupe Feature: Thinking Max Aur Vision |

All three Hostinger pages have zero impressions in three months. Each is 3–17
days old, but a title with no product name in it was never going to match
`hostinger ai builder`, `hostinger business email price` or `n8n hosting india`.

### CTR titles (EXP-020 … EXP-024)

| EXP | Page | Impr | Clicks | Pos | New title | Hook source |
|---|---|---|---|---|---|---|
| 020 | namecheap-vs-godaddy | 33 | **0** | 7.06 | Namecheap vs GoDaddy India: UPI, GST and the 5-Year Cost | Page has sections "Does Namecheap accept UPI?" and "GST invoices and input tax credit" — unique to India, and the title hid both. |
| 021 | shopify-review-india-2026 | 71 | 1 | 9.8 | Shopify Review India 2026: The 2% Every Order Costs You | "the Catch" said nothing. The catch is specific and verified on the page: Shopify Payments does not work in India, so 2% applies to every order. |
| 022 | cloudways-review-2026 | 53 | 1 | 7.62 | Cloudways Review India 2026: When $11/mo Becomes $25 | The page's strongest section is literally "The Add-Ons: What Turns an $11 Bill Into a $25 One". |
| 023 | chatgpt-vs-gemini-vs-claude-best-ai-2026 | 18 | 1 | 11.67 | ChatGPT vs Gemini vs Claude 2026: Which One for Which Job | "The Ultimate AI Showdown" is hype that promises nothing specific. |
| 024 | hostinger-discount-code-2026 | 1 | 0 | 26 | Hostinger Coupon Codes: Why Most Do Not Work in 2026 | The old title promised a code; the page's own answer is that coupon codes are dead and the referral is what works. Title and content were arguing opposite things. |

### An unsupported claim removed

`best-ai-tools-to-make-money-online-2026` was titled "10 **Proven** Picks".
Proven by whom, against what? Nothing on the page substantiates it. Now
"10 Honest Picks".

### A claim checked and kept

`how-to-get-sora-2-invite-code-2026` is titled "What Happened to Sora? OpenAI
Shut It Down (2026)". Verified: OpenAI announced Sora's discontinuation on
24 March 2026, the apps closed 26 April 2026, and the API closes 24 September
2026. The claim is accurate and stays.

Its PRIMARY keyword was `sora invite code`, which is now meaningless — nobody
needs an invite to a discontinued product. Changed to `what happened to sora`.

### Two other PRIMARY corrections

- `hostinger-vps-review-hindi-2026`: was `hostinger vps review in hindi`. Mohit
  has said not to use "review in Hindi" labels, so the page's own primary term
  contradicted that. Now `hostinger vps price india`.
- `domain-kaise-kharide-galtiyan-2026`: was `domain kaise kharide`, but the page
  argues you should not buy a domain separately at all. Now
  `free domain with hosting india`, which is what it actually says.

### Deliberately left alone

| Page | Impr | CTR | Why |
|---|---|---|---|
| godaddy-renewal-price-increase-india | 95 | 1.05% @ 8.99 | Title already differentiator-led ("Why Cost Jumps 2–4×"), description carries real numbers. CTR is in the normal band for position 9. Changing a working page is churn. |
| best-web-hosting-india-2026 | 75 | **4.0%** | Second-best CTR on the site. |
| hostinger-55-per-month-offer | 25 | **8.0%** | Best CTR on the site. |
| chatgpt-hidden-features-hacks, viral-chatgpt-image-prompts-2026, homepage | — | — | Control group until 4 Nov. |

### Build

Compiled successfully. 0 titles over 62 characters. 52 pages carry tiered keywords.

