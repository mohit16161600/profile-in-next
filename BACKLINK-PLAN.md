# Backlink plan — mohitkoli.in

Written 14 October 2026. Work down the list in order; tick items off as you go.

---

## Why this is now the only lever

On-page work is finished. 64 pages audited, 24 experiments running, titles and
facts corrected, schema compliant, internal links dense (floor 5, median 10).

What the data says is left:

| Position band | Pages | What is blocking them |
|---|---|---|
| 4–10 | ~20 | Nothing on-page. They are where they should be. |
| 15–30 | ~10 | Authority |
| 40–85 | ~8 | Authority |

`migrate-wordpress-to-new-host` sits at position 58. Its content is not worse
than the pages at position 6 — it is competing against sites with thousands of
referring domains. No title, heading or word count fixes that.

**Realistic target:** 20–30 good referring domains. That is 3–6 months of
consistent work, not a weekend. Anyone promising faster is selling link spam.

---

## TIER 0 — DONE (14 October 2026)

Individually weak, mostly `nofollow`. They matter because Google uses them to
confirm that the GitHub account, the LinkedIn profile and mohitkoli.in are the
same person. That directly supports the `mohit koli` brand query, which currently
sits at position 3.5.

The site already declares these in `sameAs` schema. The link back is missing.

- [x] **GitHub** — website link live, verified 14 Oct. README repo still pending. — create repo named `mohit16161600`, paste `drafts/github-profile-readme.md` into its README. Then Edit profile → Website: `https://mohitkoli.in`, Bio: `Full stack developer · React, Next.js, PHP, Laravel · I write about hosting and SEO for India`
- [x] **LinkedIn** — Contact info → Website → `https://mohitkoli.in`
- [x] **X / Twitter** — Edit profile → Website
- [x] **Instagram** — Edit profile → Link
- [x] **dev.to** — Settings → Profile → Website + bio
- [x] **Hashnode** — Profile → Website + bio
- [x] **Quora** — Profile → Website, **and fix the credential** (it currently reads "Self-Improvement 2026", which says nothing and looks abandoned)
- [x] **Stack Overflow** — profile website field
- [x] **Product Hunt** — account created 14 Oct, needed for the calculator launch — create the maker profile now, you need it for Tier 2

Rule: same name, same photo, same link, everywhere. Consistency is the signal.

---

## TIER 1 — Content placement (do one per week, not all at once)

| Platform | Link type | Status | File |
|---|---|---|---|
| dev.to | **dofollow** | ✅ posted 24 Sep | `drafts/devto-hosting-gst-india.md` |
| Medium | nofollow | ✅ posted | `drafts/medium-hostinger-renewal-ranking.md` |
| Hashnode | **dofollow** | ✅ posted 14 Oct | `drafts/hashnode-selfhost-n8n.md` |
| Quora | nofollow | 🔄 4 of 5 posted (2 on 14 Oct, 2 on 15 Oct) | `drafts/quora-answers-hosting.md` — answer 5 left, post it 16 Oct. Max two a day. |

dev.to and Hashnode are the only two here that pass link equity. Medium and
Quora pass traffic, not equity — still worth it, because traffic to a Hostinger
page is what earns commission.

**Pace it.** Two posts on the same platform the same day gets throttled, and
the second buries the first.

**Second round, written 10 Nov 2026** — both bodies are finished and ready to paste:

| Platform | Link type | Status | File |
|---|---|---|---|
| dev.to #2 | **dofollow** | ✅ posted 14 Nov, verified | `drafts/devto-vps-tier-renewal-india.md` |
| Hashnode #2 | **dofollow** | ⛔ blocked — see below | `drafts/hashnode-kvm-599-box.md` |

**dev.to #2 — verified 14 Nov 2026**

```
https://dev.to/mohit_00777/picking-a-vps-tier-in-india-the-renewal-rate-is-the-only-number-that-matters-agf
```

Fetched and checked: HTTP 200, body rendered, exactly one link to mohitkoli.in,
pointing at `hostinger-kvm-vps-plans-india-2026`, `rel="noopener noreferrer"` —
**no nofollow**, so it passes equity. Canonical is dev.to's own URL, so the post
can rank on its own rather than deferring to the blog. Tags: devops, webdev,
india, hostinger.

**Hashnode — dead platform, dropped from the plan 14 Nov 2026**

The notifications page gave the answer: every post was **removed by Hashnode**
for "not meeting community guidelines" — the n8n/VPS post a month ago, and
Shopify cost, Hostinger domain price and cheap-hosting posts two months ago,
six removals in all. They were not drafts. They were deleted.

Two causes, both worth carrying to other platforms:

1. **The content pattern.** Every removed post is a price list aimed at a
   monetised page — "Domain Price in India", "Cheap Hosting Under ₹200". That
   reads as affiliate marketing rather than developer writing, which is exactly
   what Hashnode's guidelines exclude.
2. **A paste error.** The n8n post's preview begins `--- title: Self-hosting
   n8n...`, meaning the draft file's own header block was pasted along with the
   body, so the post opened with broken frontmatter. Paste only the fenced body
   block from a draft file, never the file.

**Do not post there again.** A seventh post gets removed and risks the account.
Do not appeal either — six removals already stand against it. The 14 Nov post
should be assumed removed too; check it in a few days.

Hashnode was one of only two dofollow placements in the sprint, so the dofollow
side now rests on dev.to alone. Replacement to evaluate before writing anything:
DZone or HackerNoon, both of which accept submissions and pass equity, and both
of which review editorially — which the removed posts would not have survived
either.

**Original diagnosis, kept for the record**

Checked 14 Nov 2026, both public surfaces:

```
hashnode.com/@mohitkoli     "No articles have been published yet." / "No publications yet."
mohitkoli.hashnode.dev      "We haven't published yet"  ·  posts: []
```

The Hashnode dashboard lists six posts marked **Published** (14 Nov, 24 Sep,
7 Sep, 3 Sep, 22 Aug, plus a Hostinger domain-price post), but none of them is
visible on either public surface. So none of them is a backlink, and that fully
explains why Hashnode has never appeared in GSC → Top linking sites.

The 14 Oct entry recorded in this file earlier was wrong — no October post
exists in the dashboard at all. `drafts/hashnode-selfhost-n8n.md` was never
published.

Next step: in the dashboard, open the ⋯ menu on the 14 Nov post and take its
public URL. Which of the three it turns out to be decides the fix:
posts sitting in draft despite the label; a second publication holding them; or
a publication-level setting blocking the blog from serving.

Day-by-day order for all of it: `drafts/RUNBOOK-external-links.md`.

Next after Hashnode:
- [ ] **Indie Hackers** — post the hosting-cost analysis there; founders care about infra cost
- [ ] **r/developersIndia** — read their self-promo rules first. Answer questions for two weeks *before* ever linking, or it is removed and the account is burned.

---

## TIER 2 — The linkable asset (this is the one that actually compounds)

Nobody links to a price guide. People link to **tools**.

You already own one: **mohitkoli.in/tools/hosting-cost-calculator** — free, no
signup, and it answers a question every Indian buyer has.

It currently gets 46 impressions in three months. It deserves far more.

- [x] **Product Hunt launch — scheduled 14 Oct, goes live 20 Oct.** Name "Hosting Cost Calculator", tagline "What web hosting really costs in India, renewals included", 2 screenshots (4-year and 1-year views), 60-word description, first comment written with the referral disclosed up front. Shoutouts to Next.js, Tailwind CSS and Claude — each one leaves a founder review with a link back on that product's page.
  - On the day: open the Launch Day dashboard and answer every comment. Share the link on X, LinkedIn and Instagram.
  - Never ask for upvotes, never use upvote groups or growth services — PH removes launches from the homepage for it.
- [ ] **Free-tool directories** — submit to ToolsForCreators, AlternativeTo, and any Indian startup tool list you can find. Twenty minutes each, permanent.
  - [x] **SaaSHub — submitted and verified 15 Oct** (free tier; the $75 Priority+ is not worth it for a nofollow listing). Verified via `contact@mohitkoli.in`, which is what makes the next line work: the listing names Hostinger, GoDaddy, Bluehost and Namecheap as competitors, so the calculator now appears as a verified alternative **on their SaaSHub pages** — exactly where people comparing hosting prices already are. Also listed free in their startups directory. Listing itself is pending approval (1–12 weeks on the free queue).
- [ ] **Answer with the tool, not a link to your blog.** When someone in a community asks "how much does hosting actually cost", reply with the real numbers *and* the calculator. The tool is the natural link.

### Build a second tool when the first one lands

Ideas that fit your data and would get linked:
- **Domain renewal cost comparator** — you already have verified renewal rates for 8 registrars; nobody has that in one place
- **GST-inclusive hosting price checker** — every foreign comparison ignores the 18%

---

## TIER 3 — Earned links (slowest, strongest)

You have one genuinely scarce asset: **verified Indian pricing with renewal
rates and GST**, re-checked on stated dates. Most hosting content quotes US
dollar prices and skips both.

- [ ] **Qwoted / Featured.com / SourceBottle** — journalist request platforms. Free. Answer queries about web hosting, domains, India SaaS pricing. A single citation from a news site beats fifty directory links.
- [ ] **Be the source.** When a bigger blog writes "hosting prices in India", they need a number. Make yours the easiest one to find and cite.

---

## Do NOT do any of this

These will cost money and can trigger a manual action that is far harder to
undo than the time it saves:

- Buying links, "1000 backlinks for ₹500" gigs on Fiverr
- PBNs, link farms, link-exchange groups
- Blog comment links
- Mass directory submissions to directories nobody reads
- Paid guest posts on sites that exist only to sell guest posts

A site with 111 clicks in three months does not need a penalty.

---

## How to measure it

Google Search Console → **Links** → *Top linking sites*.

Record the count here on the first of each month:

| Date | Referring domains | Total clicks (28d) | Avg position |
|---|---|---|---|
| 14 Oct 2026 | (never recorded) | 16/week | ~7 |
| 10 Nov 2026 | **3 linking sites / 5 total links** | 66 (4–31 Oct) | ~7.5 |
| 10 Dec 2026 | | | |

**10 Nov baseline, from GSC → Links → Top linked pages (externally):**

```
https://mohitkoli.in/                              4 links   3 sites
https://mohitkoli.in/blog/hostinger-kvm-vps-plans  1 link    1 site
```

This is the first time the number has actually been measured, and it is the most
important figure in this file. Three referring domains is, for practical
purposes, no backlink profile at all. Pages ranking top-three for the queries
this site targets have hundreds.

Two caveats, neither of which changes the conclusion:

- **GSC's Links report undercounts and lags.** It is a sample, refreshed slowly,
  and it misses links — particularly from platforms that render links through
  redirects or scripts. The real number is probably higher than 3.
- **Even generously, it is tiny.** Eight-plus placements since September
  producing three recorded domains means some of them either did not land, were
  collapsed or removed, or are not being attributed.

**What this changes:** at three referring domains, the dofollow placements matter
disproportionately — they are the only ones passing equity, and each one is a
large proportional addition rather than a rounding error. The sprint order in
`drafts/backlink-sprint-kvm-vps.md` has been changed to put them first.

If referring domains are not rising, the plan is not being worked — the ranking
will not move on its own.

---

## This week, specifically

1. **Today** — Tier 0 list above. Two hours, done once, never again.
2. **Tomorrow** — Hashnode post (file is ready).
3. **Day after** — two Quora answers (file is ready, do not post more than two in a day).
4. **Weekend** — Product Hunt prep for the calculator.

That is four sessions. It is worth more than another month of editing titles.
