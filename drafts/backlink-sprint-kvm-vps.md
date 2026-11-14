# Backlink sprint — one page, 30 days

## The one target

```
https://mohitkoli.in/blog/hostinger-kvm-vps-plans-india-2026
```

Every external link for the next 30 days points here. Nowhere else. Not the
calculator, not the renewal page, not the comparison page.

**Why this page**, from the 28-day Search Console export (4–31 Oct 2026):

```
hostinger-kvm-vps-plans-india-2026   519 imp   2 clicks   pos 8.1
hostinger-business-plan              458 imp   5 clicks   pos 6.75
hostinger-domain-price-india-2026    385 imp   3 clicks   pos 9.28
hostinger-vs-godaddy-vs-bluehost     137 imp   0 clicks   pos 7.79
hostinger-renewal-price-india-2026   110 imp   0 clicks   pos 8.87
hostinger-plans-pricing-india-2026    25 imp   0 clicks   pos 9.08
```

Three reasons it wins:

1. **Most impressions of any Hostinger page**, and its queries are a dense cluster
   of buying intent all parked at position 9–10 — `hostinger kvm plans` (9.36),
   `hostinger vps india` (8.64), `hostinger kvm 4 plan` (9.57), and a dozen more.
   Position 9 is the bottom of page 1, where CTR is roughly 1%. Position 4 is
   roughly 5–6%. Same impressions, five times the clicks.
2. **VPS pays more per sale than shared hosting.** Same work, bigger commission.
3. `hostinger-business-plan` has more clicks but is for a tier Hostinger no longer
   sells, and `hostinger-vs-godaddy-vs-bluehost` averages 7.79 only because of
   one-impression AI fragments — its real query `hostinger vs godaddy` sits at
   position 55, which no amount of links fixes in a month.

## What to stop

The scatter above is the whole problem. Seven pages, each getting a trickle,
none reaching the top five. Pick one, feed it for a month, measure, then move to
the next. Spreading links evenly is the same as not building them.

---

## Anchor text — rotate, never repeat

Twenty links all saying "Hostinger KVM VPS plans" is a footprint. Rotate through
these, and keep roughly this mix:

**Natural / URL (use most often)**
```
mohitkoli.in/blog/hostinger-kvm-vps-plans-india-2026
here
this breakdown
I tabulated it here
```

**Descriptive (use regularly)**
```
Hostinger KVM VPS plans compared with renewal rates
the KVM tier ladder with both prices
what each KVM plan actually renews at
```

**Exact match (use sparingly — two or three times in the whole sprint)**
```
Hostinger KVM VPS plans India
Hostinger VPS pricing India
```

Never use the same anchor twice on the same platform.

---

## The 30-day order

Work top to bottom. One placement per day at most.

**Order revised 10 Nov 2026.** The first real measurement came in that day:
**3 referring domains, 5 total external links**, one of them already pointing at
this target page. At that size the dofollow placements are not just the most
valuable — they are the only ones adding ranking equity at all, and each is a
large proportional addition rather than a rounding error. So they move to week 1
and the community posts move back.

### Week 1 — dofollow first

**1. dev.to — second post** — **dofollow**

You posted there 24 Sep. A second post is fine; dev.to has no cooldown culture.

```
Title: Picking a VPS tier in India: the renewal rate is the only number that matters
```

Technical angle — vCPU and RAM against what you actually run, then the renewal
ladder. Link in the body, naturally, once.

**2. ~~Hashnode — second post~~ — CANCELLED 14 Nov 2026**

Hashnode removed all six of the posts there for "not meeting community
guidelines" — the n8n/VPS post in October, and the Shopify cost, Hostinger
domain price and cheap-hosting posts in September. They were deleted, not
drafted, which is why Hashnode never appeared in GSC. `drafts/hashnode-kvm-599-box.md`
stays unposted. Do not post there again and do not appeal; six removals already
stand against the account. Full write-up in `BACKLINK-PLAN.md`.

Two lessons that apply everywhere else in this plan:

- Posts titled as price lists aimed at a monetised page ("Domain Price in
  India", "Cheap Hosting Under ₹200") read as affiliate marketing. Posts that
  lead with an argument survive — the dev.to post of 14 Nov is live and
  dofollow, and it is the same subject written the other way round.
- Paste only the fenced body block out of a draft file. One removed post opened
  with `--- title: ...` because the file's own header went in with it.

Dofollow now rests on dev.to alone. Before adding a second dofollow platform,
evaluate DZone or HackerNoon — both pass equity, both review editorially, and
neither would have accepted the removed posts either.

**3. GitHub repo** — a small, genuinely useful repo

Not a link farm — a real thing. A VPS first-hour setup script (user, SSH keys,
UFW, fail2ban, nginx, certbot), or a benchmark script with your own results.
README links to the page as the pricing reference.

README links are nofollow, but a useful repo gets starred, forked and cited, and
those citations are not all nofollow. Slowest item here, longest tail.

**Before any of this**, check why the September and October placements are not
showing. If the dev.to post from 24 Sep and the Hashnode post from 14 Oct are
live with working links, they should be two of the three recorded domains. If
they are not in GSC → Links → Top linking sites, find out why before writing
two more posts on the same platforms.

### Week 2 — VPS-specific communities

These are the highest-value placements in this whole plan, because the audience
is literally people shopping for a VPS.

**4. LowEndTalk** — `lowendtalk.com`

The main community for budget VPS buyers. Heavily moderated against promotion,
so this needs care.

- Create the account and spend the first three days answering questions with no
  link at all. A new account dropping a URL is removed and flagged.
- Then post in the **Reviews** or **General** category: your actual experience
  running client sites on a KVM instance, with the tier ladder and renewal
  figures as the substance.
- Link once, at the end, as "I tabulated the full ladder here".
- Reply to every challenge on the numbers. This crowd checks.

```
Title: Hostinger KVM renewal rates — I tabulated all four tiers against the intro price
```

**5. Reddit — r/VPS**

Smaller and far more tolerant than the big subs. Start here, not r/webhosting.

```
Title: Hostinger KVM tiers: the intro-to-renewal jump is not uniform across the ladder
Body: the four-tier table, the observation that KVM 4 jumps most (+118%) while
      KVM 2 jumps least (+50%), and the question of whether others have seen the
      same pattern at other providers. Link at the end only.
```

**6. Reddit — r/selfhosted**

This audience buys VPS for a reason — a project they want to run. Frame around
what the tier can actually host, not around price.

Do not post all three in the same week on Reddit. One sub, wait three days,
next sub.

### Week 3 — forums and Q&A

**7. WebHostingTalk** — `webhostingtalk.com`

The oldest hosting forum. Same rule as LowEndTalk: answer first, link later.
Signature links are allowed after a post-count threshold — read the rules before
posting anything.

**8. Quora — the three VPS answers**

Already written in `drafts/quora-vps-answers.md`, all three already pointing at
this page. Two a day maximum.

```
D →  hostinger vps india  /  is hostinger vps good
E →  shared hosting vs vps
F →  vps cost india  /  cheapest vps india
```

**9. Indie Hackers**

`drafts/indiehackers-hosting-renewal-trap.md` currently links to the renewal
page. **Retarget it to this one** — the VPS ladder has its own renewal story
(KVM 1 +67%, KVM 4 +118%) and it fits the post's argument without rewriting it.

### Week 4 — the rest

**10. Stack Overflow / Server Fault profile** — website field on your profile.
One link, takes a minute, nofollow, worth having.

**11. Your own off-site profiles** — anywhere you already have a bio with a URL
field: GitHub profile, LinkedIn, Twitter/X, dev.to, Hashnode, Medium. Most point
at the homepage. That is correct and should stay. Do not change them to this
page; profile links belong on the root domain.

**12. Answer three existing questions** on the platforms from weeks 1–3 without
linking at all. This is not filler. Accounts that only ever post links get
flagged, and the ones that participate do not.

---

## Verified figures — do not go outside this table

Hostinger India, checked 17 September 2026:

```
KVM 1    ₹599/mo   →  ₹999/mo     +67%
KVM 2    ₹799/mo   →  ₹1,199/mo   +50%
KVM 4    ₹1,099/mo →  ₹2,399/mo   +118%
KVM 8    ₹2,199/mo →  ₹4,399/mo   +100%
```

18% GST added at checkout. The advertised monthly figure is a division, not a
billing cycle — the full term is one upfront invoice. No coupon or referral code
ever applies to a renewal.

If a figure is not in this table, do not state it.

---

## Rules

- **One link per post.** Two reads as promotion everywhere.
- **Answer first, link last.** The link is the final line, never the opening.
- **Say the uncomfortable thing.** Every post should contain something that costs
  you the sale — that KVM 4 is the worst-value jump on the ladder, that most
  people asking about VPS do not need one. That is what gets upvoted instead of
  removed, and the reader who buys anyway was a real buyer.
- **Disclose immediately if asked** whether you earn from it. Not when pressed.
- **Never ask anyone to upvote.** Permanent bans on HN and Reddit.
- **One placement per day, maximum.** Five links in one day on a new account is
  the clearest spam signal there is.

---

## Measuring it

Two numbers, on 10 December, nothing in between:

```
GSC → Links → Top linking sites     → referring domain count
GSC → Pages → 28 days               → this page's position and clicks
```

Checking weekly will show noise and nothing else. The current baseline for this
page is **519 impressions, 2 clicks, position 8.1**.

**Honest expectation, revised 10 Nov after the real measurement.** The earlier
estimate here — position 8.1 moving to roughly 6 in a month — assumed a larger
existing profile than three referring domains. It was too optimistic.

With three domains, a good month is getting to eight or ten, of which two or
three are dofollow. That is a tripling of the profile in relative terms and
almost nothing in absolute terms, and a month is also shorter than the lag
between a link appearing and Google acting on it.

So: expect position to hold or improve by a point or two, and expect clicks to
stay in single digits. The thing being built this month is the profile, not the
ranking. The ranking follows it by a quarter, not by a month — and the only
version of this that compounds is the one where every link points at the same
page.
