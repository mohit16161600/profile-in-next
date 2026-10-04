---
title: Self-hosting n8n on a ₹599/month VPS — fixed billing vs per-execution, and when each one wins
subtitle: The economics flip at a specific point. Here is how to work out where yours is.
tags: n8n, automation, devops, self-hosting, vps
---

Managed automation platforms bill per execution or per task. Self-hosting bills per month, flat, regardless of how much you run.

That sounds like an obvious win for self-hosting until you price in your own time. I have been running n8n on a small VPS and the honest answer is that it depends on one number, and most people never calculate it.

Full disclosure: I write about hosting and my site carries affiliate links. Prices below come off the vendor's India pages on 20 September 2026 — check them live before you buy, sale rates move.

## The actual cost

Hostinger bundles self-hosted n8n into every KVM VPS plan — there is no separate n8n charge, you are paying for the box:

| Plan | vCPU | RAM | NVMe | Sale | Renewal |
|---|---|---|---|---|---|
| KVM 1 | 1 | 4 GB | 50 GB | ₹599/mo | ₹999/mo |
| KVM 2 | 2 | 8 GB | 100 GB | ₹799/mo | ₹1,199/mo |
| KVM 4 | 4 | 16 GB | 200 GB | ₹1,099/mo | ₹2,399/mo |
| KVM 8 | 8 | 32 GB | 400 GB | ₹2,199/mo | ₹4,399/mo |

Two things worth flagging, because they are not in the headline:

- **GST is extra.** The vendor's own footer says prices are listed without it. Add 18%.
- **The renewal roughly doubles on the bigger plans.** KVM 4 goes ₹1,099 → ₹2,399. The discount is a first-term thing. Budget for year two now, not in year two.

## The break-even question

Here is the only calculation that matters, and it takes two minutes:

```
monthly_executions × your_platform's_per_execution_cost  vs  VPS_monthly_cost
```

Below the crossover, managed wins — you are paying a small bill and someone else is patching the server. Above it, every additional execution on a managed plan costs money and on your own box costs nothing.

The part people get wrong: they compare today's volume. Automation volume does not stay flat. If a workflow is useful, it gets triggered more, and someone adds three more workflows next to it. Run the calculation on where you expect to be in six months, not where you are.

## What I would actually pick

**KVM 1 (4 GB)** — fine for learning and for five to ten simple workflows. It is genuinely usable. It also fills up fast once n8n, Postgres and Docker are all sharing 4 GB, and you will feel it on nodes that pull large payloads.

**KVM 2 (8 GB)** — the first plan I would put client work on. The vendor calls this one ideal for small-to-medium business use and for once the marketing matches reality.

**KVM 4 (16 GB)** — this is where queue mode becomes practical, because you want headroom for worker processes alongside the main instance.

## Queue mode, briefly

Default n8n runs everything in one process. One heavy workflow blocks the instance.

Queue mode pushes executions onto a queue and separate worker processes pick them up, so a slow job stops being everyone else's problem. Hostinger ships it as a ready template, alongside a plain n8n template and one preloaded with 100+ example workflows.

Do not enable it by default. It costs RAM and adds moving parts. Turn it on when you can point at parallel executions actually contending — not before.

## The part nobody puts in the comparison post

Self-hosting is cheaper in rupees and more expensive in attention. Specifically:

- **OS updates and n8n upgrades are yours.** An n8n minor version will eventually break a node you depend on, and you will be the one reading the changelog at 11pm.
- **Backups are only real if you have restored one.** Snapshots you have never tested are a feeling, not a backup.
- **There is no uptime SLA.** As of 20 September 2026 the vendor's VPS page does not state an uptime percentage, so treat any 99.9% figure you read elsewhere as unconfirmed for VPS. If an automation stopping costs you money, this matters more than the price does.
- **Region:** available regions are North America, Europe, Asia and South America. No India-specific data centre is claimed on the page, so if data residency is a compliance requirement for you, get it in writing from support before you buy.

## So: self-host or not

**Self-host** if execution volume is growing, you want client data on infrastructure you control, you need custom community nodes, or you already know your way around a Linux box.

**Stay managed** if you run a handful of workflows a month, you have no appetite for maintenance, or an automation going down stops your business and there is nobody on call.

There is no universally correct answer here. There is a correct answer for your volume, and it changes as your volume does — so re-run the calculation once a year.

I wrote up the full plan-by-plan breakdown, including what each tier realistically handles: [self-hosted n8n on Hostinger VPS, priced for India](https://mohitkoli.in/blog/hostinger-n8n-hosting-india-2026).

---

If you are self-hosting n8n already, I am curious what tier you landed on and whether you regret it. Comments are open.
