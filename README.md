# Cryple landing page

The marketing site for the Cryple app. Next.js 16 App Router, no CSS framework — all styling lives in `src/app/globals.css` as plain CSS with hardcoded hex values.

Product overview: [application-overview.md](../api-general/docs/application-overview.md)

## Localisation

Three locales: `en` (default), `pt-br`, `es`. Copy lives in `src/dictionaries/<locale>.json` and is loaded by `src/lib/dictionaries.ts`.

`src/middleware.ts` rewrites `/` to `/en` internally, so the default locale never appears in the URL, and redirects `/en/*` back to `/*` with a permanent 308. Routes live under `src/app/[lang]/`. Internal links go through `localizedPath(lang, path)` from `src/lib/site.ts`, never a hand-built `/${lang}/…`, so English links never hit that redirect.

**Every user-facing string belongs in all three dictionaries.** Adding a string to `en.json` alone silently ships English to Portuguese and Spanish visitors.

Spanish and Portuguese run roughly 20-30% longer than English. The header is the tightest layout on the site — see below.

## Icons

### Feature icons

Six marks in `public/icons/`, drawn for the vault showcase in the hero:

| File                   | Feature                                          |
| ---------------------- | ------------------------------------------------ |
| `secrets.svg`          | Secrets — a key                                  |
| `notes.svg`            | Notes — one page, folded corner                  |
| `documents.svg`        | Documents — two stacked pages                    |
| `drive.svg`            | Drive — a cloud                                  |
| `safe-sharing.svg`     | Safe sharing — a padlock bridging two nodes      |
| `password-manager.svg` | Password manager — a card holding a key and dots |

Rules for anything added to this set:

- 64×64 `viewBox`, stroke width 2.5, `stroke-linecap`/`stroke-linejoin` round
- `#4f46e5` for structure, `#e0e7ff` for fill mass, `#8b5cf6` for exactly one detail, `#ffffff` for negative space
- Colours are baked in. They read on white, on `#f9fafb` and on the `#e0e7ff` card, but **not** on the dark gradient — the indigo fill goes muddy. A dark variant needs a second file: fill `rgba(255,255,255,.14)`, strokes `#c7d2fe` and `#a5b4fc`. CSS cannot reach inside an `<img>`.
- Four of the six describe stored things, so each takes a distinct silhouette rather than a variation on a page. A seventh icon has to respect that.

### Filled variant

`public/icons/filled/` holds the same six marks with the outlines dropped and the bodies filled with a violet gradient at 135°, detail knocked out in white.

The ramp is `#4338ca → #a78bfa` (Indigo 700 → Violet 400), **not** the site's Action gradient. The Action gradient (`#6366f1 → #8b5cf6`) has no lightness step — 67% to 66% — so at icon size it reads as flat colour. A gradient is legible through change in value, not hue; this ramp steps 51% to 76% and reads at 52px.

Unlike the outline set it carries its own contrast, so one file works on white, on the Indigo 100 card and on the dark gradient. It also holds better below 32px, where the outline set's 2.5 stroke starts closing its own counters. Use outline where a text label carries the meaning, filled where the icon has to read at a glance.

The gradient is mapped to the artwork's bounds (`x1=8 y1=8 x2=56 y2=56`, `userSpaceOnUse`), not to the full 64×64 canvas. Mapped to the canvas, a shape that does not reach the corners samples only the middle of the ramp and looks flat.

Gradient ids are namespaced per icon (`g-secrets`, `g-drive`, …). SVG gradient ids are global once inlined into a page, so identical ids across files would make every icon adopt the first one's gradient — keep the prefix if you add a seventh.

Caveat: the gradient's darker stop is 3.3:1 against `#1f2937`, fine for a decorative icon beside a label but not as the sole content of a control on a dark surface.

### Usage

Decorative icons take an empty `alt`, and in the hero they must load eagerly or they pop in after paint:

```tsx
<Image src="/icons/drive.svg" alt="" width={52} height={52} loading="eager" />
<Image src="/icons/filled/drive.svg" alt="" width={52} height={52} loading="eager" />
```

The icon order in `vaultIcons` (`src/app/[lang]/page.tsx`) must match `hero.vaultItems` in every dictionary — they are zipped by index.

### Illustrations

`anywhere.svg`, `bitcoin.svg`, `generate.svg` and `secure.svg` are unDraw scenes ([undraw.co](https://undraw.co)) recoloured to `#6366f1`, used in the How It Works steps. They are illustrations, not icons, and do not follow the rules above.

## Layout notes

- **Header.** Fixed, and the tightest layout on the site: logo + four nav links + language select + two CTAs, in three languages. Spanish is the worst case. It fits on one row above 1150px; below that `.nav-links` wraps to its own centred row and `scroll-padding-top` rises to compensate. If you lengthen a nav label or a CTA, check `/es` first.
- **Anchor offsets.** `html { scroll-padding-top }` keeps anchored sections clear of the fixed header, and the two scroll handlers (`GetAppButton`, `EarlyAccessButton`) use `block: 'start'`, not `'center'` — centring a tall section puts its heading above the fold.
- **Feature badges.** A feature item with a `badge` in the dictionaries gets a pill above its title (`.feature-badge`). Leave the field out and nothing renders.
- **Footer.** Besides the language select in the header, the footer lists the three languages as plain links with `hrefLang`, because crawlers do not operate a `<select>`. Group titles in the footer are `<p class="footer-section-title">`, not headings, so the page outline stays `h1` → `h2` → `h3`.
- **Hero.** `#f9fafb` ground with two blurred brand-coloured ellipses bleeding in from the top corners, and a hairline bottom border separating it from the white features section.

## SEO and metadata

`src/lib/site.ts` holds the site URL (`https://cryple.io`), the locale list and the helpers every page uses to build its metadata. `pageMetadata(lang, path, title, description)` returns the title, description, canonical URL, `hreflang` alternates, Open Graph and Twitter card for one page. Change the domain there and nowhere else.

- **Titles and descriptions** come from the `meta` block of each dictionary. `[lang]/layout.tsx` sets the default title and the `%s | Cryple` template; the home page opts out of the template with an absolute title, and the legal pages use their own `title` plus a `meta.*Description`. Keep descriptions under ~160 characters, or search engines truncate them.
- **Language alternates.** Each page lists all three locales plus `x-default` (English). The hreflang for `pt-br` is `pt-BR`, the BCP 47 form; `languageTag` does that mapping, and `<html lang>` uses it too.
- **`robots.ts` / `sitemap.ts`** in `src/app/` generate `/robots.txt` and `/sitemap.xml`. The sitemap is the `pages` list × the three locales, each entry carrying its alternates. A new public page has to be added to that list.
- **Open Graph image.** `[lang]/opengraph-image.tsx` renders a 1200×630 PNG per locale at build time from `hero.title` and `meta.ogImageTagline`. The middleware lets `/en/opengraph-image` through without its usual `/en` → `/` redirect, because Next.js puts that path in the English `og:image` tag.
- **Structured data.** The home page emits one JSON-LD `@graph` with `Organization`, `WebSite` and `WebApplication`. The address, the contact email and the free-tier `Offer` are facts about the company: update them there when they change.
- **`public/llms.txt`** is a plain-Markdown summary of Cryple for AI crawlers and assistants ([llmstxt.org](https://llmstxt.org)): what it stores, the security model, the specs, pricing, release status and the key URLs. It repeats facts from the dictionaries by hand, so a change to the roadmap, the specs or the pricing on the page has to be made there too. It is English only.
- **Alt text** for the feature photos and How It Works illustrations is in the dictionaries (`features.items[].imageAlt`, `howItWorks.steps[].imageAlt`). It describes the picture, not the feature. Swapping a photo means rewriting its alt in all three languages.

## Feature flags

`src/app/[lang]/page.tsx` has two module-level booleans. `showEmailSubscription` gates the waitlist section, the roadmap copy and the Get Early Access buttons in both the header and the hero at once. `showRoadmapTimeline` gates the timeline.

## Development

```bash
npm run dev     # localhost:3000
npm run build
npm run lint
```
