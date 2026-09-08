# Cryple landing page

The marketing site for the Cryple app. Next.js 16 App Router, no CSS framework — all styling lives in `src/app/globals.css` as plain CSS with hardcoded hex values.

Product overview: [application-overview.md](../api-general/.docs/application-overview.md)

## Localisation

Three locales: `en` (default), `pt-br`, `es`. Copy lives in `src/dictionaries/<locale>.json` and is loaded by `src/lib/dictionaries.ts`.

`src/middleware.ts` rewrites `/` to `/en` internally, so the default locale never appears in the URL, and redirects `/en/*` back to `/*`. Routes live under `src/app/[lang]/`.

**Every user-facing string belongs in all three dictionaries.** Adding a string to `en.json` alone silently ships English to Portuguese and Spanish visitors.

Spanish and Portuguese run roughly 20-30% longer than English. The header is the tightest layout on the site — see below.

## Icons

### Feature icons

Seven marks in `public/icons/`, drawn for the vault showcase in the hero:

| File | Feature |
| --- | --- |
| `secrets.svg` | Secrets — a key |
| `notes.svg` | Notes — one page, folded corner |
| `documents.svg` | Documents — two stacked pages |
| `drive.svg` | Drive — a cloud |
| `safe-sharing.svg` | Safe sharing — a padlock bridging two nodes |
| `password-manager.svg` | Password manager — a card holding a key and dots |
| `bitcoin-wallet.svg` | Bitcoin wallet — a wallet with a ₿ mark |

Rules for anything added to this set:

- 64×64 `viewBox`, stroke width 2.5, `stroke-linecap`/`stroke-linejoin` round
- `#4f46e5` for structure, `#e0e7ff` for fill mass, `#8b5cf6` for exactly one detail, `#ffffff` for negative space
- Colours are baked in. They read on white, on `#f9fafb` and on the `#e0e7ff` card, but **not** on the dark gradient — the indigo fill goes muddy. A dark variant needs a second file: fill `rgba(255,255,255,.14)`, strokes `#c7d2fe` and `#a5b4fc`. CSS cannot reach inside an `<img>`.
- Four of the seven describe stored things, so each takes a distinct silhouette rather than a variation on a page. An eighth icon has to respect that.

### Filled variant

`public/icons/filled/` holds the same seven marks with the outlines dropped and the bodies filled with a violet gradient at 135°, detail knocked out in white.

The ramp is `#4338ca → #a78bfa` (Indigo 700 → Violet 400), **not** the site's Action gradient. The Action gradient (`#6366f1 → #8b5cf6`) has no lightness step — 67% to 66% — so at icon size it reads as flat colour. A gradient is legible through change in value, not hue; this ramp steps 51% to 76% and reads at 52px.

Unlike the outline set it carries its own contrast, so one file works on white, on the Indigo 100 card and on the dark gradient. It also holds better below 32px, where the outline set's 2.5 stroke starts closing its own counters. Use outline where a text label carries the meaning, filled where the icon has to read at a glance.

The gradient is mapped to the artwork's bounds (`x1=8 y1=8 x2=56 y2=56`, `userSpaceOnUse`), not to the full 64×64 canvas. Mapped to the canvas, a shape that does not reach the corners samples only the middle of the ramp and looks flat.

Gradient ids are namespaced per icon (`g-secrets`, `g-drive`, …). SVG gradient ids are global once inlined into a page, so identical ids across files would make every icon adopt the first one's gradient — keep the prefix if you add an eighth.

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
- **Hero.** `#f9fafb` ground with two blurred brand-coloured ellipses bleeding in from the top corners, and a hairline bottom border separating it from the white features section.

## Feature flags

`src/app/[lang]/page.tsx` has two module-level booleans. `showEmailSubscription` gates the waitlist section, the roadmap copy and the Get Early Access buttons in both the header and the hero at once. `showRoadmapTimeline` gates the timeline.

## Development

```bash
npm run dev     # localhost:3000
npm run build
npm run lint
```
