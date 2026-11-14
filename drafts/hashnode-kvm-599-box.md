# Hashnode post #2 — what a ₹599 KVM box actually carries

**Where:** Hashnode → Write
**Target page:** https://mohitkoli.in/blog/hostinger-kvm-vps-plans-india-2026
**Link type:** **dofollow**
**Anchor:** "the KVM tier ladder with both prices" (descriptive anchor — different from the dev.to one, deliberately)
**Tags:** `vps`, `devops`, `selfhosting`, `india`
**Links in body:** ONE.

**Before posting — the open question**

The 14 Oct Hashnode post is not showing in GSC → Links → Top linking sites.
Resolve that first, because if Hashnode links are not being attributed, this
post is worth far less than the sprint assumes:

1. Open the 14 Oct post's public URL in a logged-out browser (incognito).
2. If it 404s or shows a draft banner, it never published. Publish it.
3. If it is live, right-click the link to mohitkoli.in → Inspect. Check `rel`.
4. Hashnode on a subdomain (`yourname.hashnode.dev`) passes less than a custom
   domain, but it should still register. If the link is dofollow and the post is
   live, the cause is GSC lag, and that is fine — proceed.

Write the finding into `BACKLINK-PLAN.md` either way.

**Posting steps**
1. Hashnode → Write. Paste title and body.
2. Add the four tags.
3. Set the cover image: reuse any existing 1200×630 SVG from
   `public/assets/blog/` exported to PNG, or skip it. Do not generate one.
4. Publish. Two days minimum after the dev.to post.
5. Record the URL in `BACKLINK-PLAN.md`.

---

## Title

```
What I actually run on a ₹599/mo KVM box, and the month it stops being enough
```

## Body

```
I moved a handful of small client projects onto entry-level KVM VPS instances instead of shared hosting, mostly to stop fighting PHP version locks and cron limits. Two years in, here is what that tier carries and where it gives up.

This is deliberately not a benchmark post. Benchmarks measure the box. The thing that decided my bill was the price ladder, not the hardware.

## What fits

On the entry tier I run, comfortably:

- Two or three static Next.js sites behind nginx, built elsewhere and rsynced in
- One small Node API with PM2
- Postgres, single instance, databases in the low hundreds of MB
- Certbot, ufw, fail2ban, a nightly `pg_dump` to object storage
- Uptime Kuma, because the box should tell me before the client does

What that list has in common: nothing on it is memory-hungry and nothing on it spikes. Static files and a quiet API are the ideal entry-VPS workload because the load is predictable.

## What does not fit

The three things that pushed me off the tier, in the order they happened:

**Building on the box.** A `next build` on a cold cache will exhaust the memory on an entry instance and take the running services down with it. I now build in CI and ship the output. This is the single change that kept me on the cheap tier longest.

**Docker with more than two or three containers.** Not Docker itself — the images. Each one carries its own base layer and its own idle memory, and four containers that each look small together do not fit.

**Anything that recompiles.** A WordPress site doing image derivatives on upload, a video thumbnailer, a PDF generator. One request turns into a CPU-bound minute and everything else queues behind it.

The pattern: the entry tier handles sustained small load well and bursty heavy load badly. If your spike is a build or a media job, move the spike off the box before you move the box.

## The month it stops being enough

For me it was not a traffic event. It was the renewal invoice.

    Entry tier    ₹599/mo intro    →    ₹999/mo renewal    (+67%)

Plus 18% GST, which no dollar-priced comparison mentions.

The ₹599 is a division of one upfront 48-month invoice, not a monthly charge. So the real question at month 49 is not "has the site outgrown the box" — it is "at ₹999 is this still the right box", and that is a completely different question with a completely different answer.

The tier above renews at ₹1,199, which is +50% on its own intro rate — a *flatter* increase than the entry tier. Which means at renewal time the gap between the two tiers narrows from ₹200 to ₹200 on a much larger base, and upgrading costs proportionally less than it looked like it would when you were choosing.

That is the sort of thing you only see if you write both columns down. I did, for all four tiers, with the dates I checked them — the KVM tier ladder with both prices is here:

https://mohitkoli.in/blog/hostinger-kvm-vps-plans-india-2026

## What I would tell myself two years ago

Start one tier lower than the recommendation and move the build off the box. The recommendation assumes you will do everything on the server, and that assumption is what sells the upgrade. If your deploy is "copy a folder", the cheap tier lasts years.

And if you have not shipped yet, do not buy a four-year term at all. Pay monthly, undiscounted, and stay free to leave. It costs more per month and far less in total when the project does not survive, which is most of the time.

Disclosure: my site is monetised with a hosting referral link. The renewal figures are the provider's published rates. The renewal column is the one that should decide this, and it is the one they put furthest from the buy button.
```
