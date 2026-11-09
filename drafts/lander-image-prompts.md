# Image prompts for the /lander cluster

## Read this first — it changes what you should ask for

There are three kinds of image this cluster needs, and only one of them should
come from ChatGPT.

**1. The gallery images themselves — must be real screenshots.**

Do not generate fake landing-page screenshots. Image models cannot render UI text
correctly: headings come out misspelled, button labels turn into letter-shaped
noise, and tables fill with nonsense numbers. At thumbnail size it passes. Opened
in the lightbox, which is the whole point of the page, it does not.

This matters more here than on a blog post, because `/lander` is attached to your
name and links straight to your services page. A gallery of obviously fake
layouts on a page that says "I build these" costs more credibility than an empty
gallery does.

So: screenshot real work. Client sites you built, your own projects, or — for the
categories where you have nothing yet — build the demo layout yourself and
screenshot that. It is a few hours per layout and the result is genuinely your
work, which is the only thing this page is actually selling.

**2. OG / social images — no ChatGPT needed.**

The repo already has 39 hand-authored SVG hero images at 1200×630 in
`public/assets/blog/`. Same approach works for the 11 lander pages: perfect text,
about 4 KB each, exact brand colours. Ask me and I will write them.

**3. Content images INSIDE the demo layouts you build — this is where ChatGPT earns its place.**

When you build a restaurant demo layout you need food photographs. A clinic demo
needs a waiting room. A store demo needs products. Right now the alternative is
pulling them off Google Images, which is a copyright problem on a commercial
page. Generated placeholder content solves exactly that.

The prompts below are for this third category only.

---

## Rules that apply to every prompt

- End every prompt with: `no text, no words, no letters, no logos, no watermark`.
  Generated text is always wrong and always visible.
- Generate a whole set in one conversation and reference the earlier images, so
  lighting and colour stay consistent. A demo layout with five photos in five
  different styles reads as a template, which defeats the purpose.
- Ask for **photographic, natural light, shot on a 35mm lens** unless you want
  illustration. The default house style of most models is over-lit and plastic.
- Convert to `.webp` before adding to the repo. This page shows many large
  images at once and total weight is the whole performance story.
- Aspect ratios: `16:9` for hero bands, `4:3` for cards, `1:1` for product
  grids, `3:4` for portraits.

---

## Restaurant / cafe demo

```
A plated North Indian thali on a dark wooden table, shot from a 45-degree angle,
natural window light from the left, shallow depth of field, steam just visible,
warm tones, photographic, 35mm lens, 4:3 — no text, no words, no letters, no
logos, no watermark
```

```
Interior of a small modern Indian cafe, exposed brick, warm pendant lights,
two empty tables in the foreground, late afternoon light through a window,
photographic, wide angle, 16:9 — no text, no words, no letters, no logos,
no watermark
```

```
Close-up of a masala chai being poured into a glass tumbler, motion in the pour,
dark background, warm rim light, photographic, macro, 1:1 — no text, no words,
no letters, no logos, no watermark
```

## E-commerce demo

```
A single pair of cotton kurta folded neatly on a plain light grey backdrop,
soft even studio light, no shadows, straight-on product shot, photographic, 1:1
— no text, no words, no letters, no logos, no watermark
```

Then, in the same conversation, for every other product: *"same lighting, same
backdrop, same angle, now a [item]"*. That consistency is what makes a grid of
products look like one store instead of a stock-photo collage.

```
Flat lay of three fabric swatches on a light grey surface, soft directional
light showing texture, top-down, photographic, macro detail, 4:3 — no text,
no words, no letters, no logos, no watermark
```

## Clinic / healthcare demo

```
A clean empty dental clinic treatment room, white and soft teal, daylight from
a window, modern equipment, nobody in frame, photographic, wide angle, 16:9
— no text, no words, no letters, no logos, no watermark
```

```
A tidy clinic reception and waiting area with four empty chairs, warm neutral
palette, plants, bright natural light, nobody in frame, photographic, 16:9
— no text, no words, no letters, no logos, no watermark
```

**Do not generate a doctor's portrait and put it on a page as a real doctor.**
That is a fabricated credential, and on a clinic layout it is the one element a
patient is specifically trusting. If a demo needs a face, caption it clearly as
an illustrative placeholder.

## Coaching institute demo

```
An empty modern classroom with rows of desks facing a whiteboard, large windows,
morning light, clean and uncluttered, nobody in frame, photographic, wide angle,
16:9 — no text, no words, no letters, no logos, no watermark
```

```
A stack of study notebooks and a pen on a wooden desk beside a window, soft
morning light, shallow depth of field, photographic, 4:3 — no text, no words,
no letters, no logos, no watermark
```

Same caution on faculty portraits as above. Named qualifications attached to a
generated face is a fabricated credential, whichever category it appears in.

## Local business demo — salon, gym, boutique

```
Interior of a small modern hair salon, two styling chairs facing mirrors, warm
wood and brass fittings, bright daylight, nobody in frame, photographic, wide
angle, 16:9 — no text, no words, no letters, no logos, no watermark
```

```
A small clean gym floor with free weights and a rack, large windows, morning
light, polished concrete floor, nobody in frame, photographic, wide angle, 16:9
— no text, no words, no letters, no logos, no watermark
```

```
Interior of a small boutique clothing store, garments on a rail, warm lighting,
wooden floor, nobody in frame, photographic, 4:3 — no text, no words, no
letters, no logos, no watermark
```

## Real estate demo

```
Exterior of a modern mid-rise Indian apartment building at golden hour, clear
sky, landscaped entrance, shot from across the street, photographic, wide angle,
16:9 — no text, no words, no letters, no logos, no watermark
```

```
An empty, well-lit living room of a newly finished apartment, neutral walls,
vitrified tile floor, large balcony window, nobody in frame, photographic, wide
angle, 16:9 — no text, no words, no letters, no logos, no watermark
```

Label any generated interior as a representative image, not as the property.
Presenting a generated interior as a specific listing is the render-passed-off-as-
a-photograph problem the real-estate page itself warns about.

## Abstract background art — for section bands, any category

```
Abstract dark background, deep navy to near-black gradient, faint amber glow in
the upper right, subtle fine grid lines, very low contrast, minimal, no subject,
16:9 — no text, no words, no letters, no logos, no watermark
```

Keep the amber against near-black. That is the site's existing palette and a
background in a different hue will look borrowed.

---

## After you generate

1. Convert to `.webp`.
2. Name the file after what it is, kebab-case: `restaurant-cafe-interior.webp`.
3. Put it in `public/assets/lander/`.
4. If it is a gallery item, add the entry to `src/data/landers.ts` with the real
   pixel width and height. If it is content inside a demo layout you built, it
   does not go in `ITEMS` at all — only the screenshot of the finished layout
   does.

## One standing rule

Nothing generated goes on these pages presented as a real person, a real client,
a real property or a real credential. Placeholder content inside a demo layout is
fine and is what these prompts are for. A fabricated proof element is not, and
this cluster links directly to pages where people decide whether to hire you.
