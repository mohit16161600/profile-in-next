# SEO Experiments — mohitkoli.in

Playbook: `MohitKoli_SEO_Growth_Master_Prompt.md`
Baseline source: Google Search Console export, **8 Aug – 4 Oct 2026** (3 months).

---

## Baseline (3 months, 8 Aug – 4 Oct 2026)

| Metric | Value |
|---|---|
| Clicks | 111 |
| Impressions | 8,161 |
| CTR | 1.36% |
| Position — mobile | 9.67 |
| Position — desktop | 19.3 |

### What actually happened to impressions

| Date | Impressions | Position |
|---|---|---|
| 12 Aug | 51 | 47.3 |
| 30 Aug | 187 | 33.3 |
| 10 Sep | **576** (peak) | 11.1 |
| 17 Sep | 110 | 7.5 |
| 4 Oct | 98 | **6.9** |

The impression fall is not a ranking loss. Position went **47.3 → 6.9**. The
500/day peak was page-4/page-5 impressions plus a ChatGPT image-prompt trend
spike on 8–11 Sep (`viral-chatgpt-image-prompts-2026` carries 1,149 of the
3-month impressions). Those impressions produced almost no clicks. What remains
is a smaller, much better-positioned set.

Clicks per week tell the same story less happily:
35 (8–14 Sep, trend spike) → 17 → 15 → ~16. Clicks have plateaued, not grown.

---

## THE core finding: CTR, not ranking

Several pages sit on page 1 and earn nothing. Expected CTR at position 5–9 is
roughly 2–6%. These are 10–30x below that.

| Page | Impressions | Clicks | CTR | Position |
|---|---|---|---|---|
| best-domain-registrars-india-2026 | 507 | 1 | **0.20%** | 8.43 |
| best-vps-hosting-india-2026 | 173 | 0 | **0%** | 6.88 |
| hostinger-kvm-vps-plans-india-2026 | 60 | 0 | **0%** | 5.05 |
| hostinger-business-plan | 766 | 12 | 1.57% | 8.04 |

### Hypothesis (EXP-001 to EXP-003)

Compare the two best-performing pages on the site against the dead ones:

| Page | Title angle | CTR |
|---|---|---|
| chatgpt-hidden-features-hacks | curiosity ("God Mode Prompt") | **6.08%** |
| hostinger-business-plan | news ("Was Business Plan") | 1.57% |
| best-domain-registrars | **price** (".in ₹99, .com ₹149") | 0.20% |
| best-vps-hosting | **price** ("69% OFF, ₹599/mo") | 0% |

The dead pages all lead with a **sale price or discount percentage**. On a
commercial SERP the vendor's own page ranks above us and shows the same price,
so a price-led title gives the searcher no reason to choose our result.

The living pages lead with something the vendor cannot say.

> **Hypothesis:** replacing price-led titles with the page's actual
> differentiator (renewal / multi-year cost) will raise CTR without changing
> position, because the content already delivers on that angle — only the
> title hides it.

Content, H1, schema and internal links are deliberately **unchanged** so the
title/snippet is the only variable (playbook §32).

---

## EXP-001

```text
URL:                /blog/best-domain-registrars-india-2026
Cohort:             Medium (title + meta only)
Current title:      Best Domain Registrar India 2026: .in ₹99, .com ₹149
New title:          Best Domain Registrars India 2026: Ranked by Renewal Cost
Primary query:      best domain registrar india / best domain registrars 2026
Baseline clicks:    1
Baseline imprs:     507
Baseline CTR:       0.20%
Baseline position:  8.43
Problem:            Title advertises year-one prices every competitor also shows.
                    The page's own value (five-year cost, flat renewals) is invisible in the SERP.
Change:             Title + meta description only. Content untouched.
Expected result:    CTR 0.2% -> 1.5%+ at the same position.
Risk:               Low. Losing "₹99/₹149" may cost a few price-intent clicks it is not winning today anyway.
Deployed:           2026-10-07
Measurement:        28 days (review 2026-11-04)
Result:             pending
```

## EXP-002

```text
URL:                /blog/best-vps-hosting-india-2026
Cohort:             Medium (title + meta only)
Current title:      Best VPS Hosting India 2026: Up to 69% OFF, ₹599/mo
New title:          Best VPS Hosting India 2026: What 4 Years Really Costs
Primary query:      best vps hosting india / vps hosting 2026
Baseline clicks:    0
Baseline imprs:     173
Baseline position:  6.88
Problem:            Position 6.88 with zero clicks across three months. Discount-led title
                    on a SERP where every result shows a discount.
Change:             Title + meta description only.
Expected result:    Any clicks at all. Zero at position 6.9 is anomalous.
Risk:               Low.
Deployed:           2026-10-07
Measurement:        28 days (review 2026-11-04)
Result:             pending
```

## EXP-003

```text
URL:                /blog/hostinger-kvm-vps-plans-india-2026
Cohort:             Medium (title + meta only)
Current title:      Hostinger KVM VPS India 2026: 69% Off, From ₹599/mo
New title:          Hostinger KVM VPS India 2026: Which Plan, and the Catch
Primary query:      hostinger kvm vps / hostinger vps pricing india
Baseline clicks:    0
Baseline imprs:     60
Baseline position:  5.05
Problem:            Position 5.05 with zero clicks. Same price-led pattern.
Change:             Title + meta description only.
Expected result:    First clicks.
Risk:               Low. Smallest page in the batch, used to confirm the pattern.
Deployed:           2026-10-07
Measurement:        28 days (review 2026-11-04)
Result:             pending
```

---

## Control group — DO NOT CHANGE until 4 Nov 2026

These stay untouched so site-wide movement can be separated from experiment effect.

| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| chatgpt-hidden-features-hacks | 33 | 543 | 6.08% | 6.98 |
| viral-chatgpt-image-prompts-2026 | 25 | 1,149 | 2.18% | 8.70 |
| hostinger-business-plan | 12 | 766 | 1.57% | 8.04 |
| / (homepage) | 6 | 438 | 1.37% | 5.75 |

---

## Next batch (NOT deployed — queued for after 4 Nov review)

Ranking problems, not CTR problems. A title will not fix position 15–44.

| Page | Impressions | Position | Problem |
|---|---|---|---|
| how-to-transfer-domain-from-godaddy | 615 | 44.05 | 50+ query variants all stuck on page 4–5. Biggest untapped cluster on the site. |
| hostinger-plans-pricing-india-2026 | 715 | 34.63 | Deepest page on the site, ranking on page 4. |
| hostinger-domain-price-india-2026 | 538 | 14.95 | Page 2. |

If EXP-001..003 win, the same title pattern scales to the Hostinger cluster.
If they do not, the problem is authority and the answer is backlinks, not edits.
