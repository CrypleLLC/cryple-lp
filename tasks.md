# Landing page — tasks

Open work on the landing page only. How the SEO and metadata pieces already in place work is in [README.md](README.md#seo-and-metadata).

## 1. Vercel domain configuration — blocker for the SEO work

**Owner:** Philippe, in the Vercel dashboard. No code change.

Today `https://Zekke.io` answers **307** to `https://www.Zekke.io/`, and the page is served from `www`. The code declares `https://Zekke.io` as the site URL (`SITE_URL` in `src/lib/site.ts`): canonical URLs, hreflang, `sitemap.xml`, `robots.txt`, `og:url` and the JSON-LD all point at the apex. Until the domains agree, every canonical points at a URL that redirects away, and search engines ignore conflicting canonicals.

- [ ] Vercel → Project → Settings → Domains: make `Zekke.io` the primary domain.
- [ ] Set `www.Zekke.io` to redirect to `Zekke.io` with **308** (permanent). A 307 tells crawlers the move is temporary and they keep indexing the old host.
- [ ] Confirm `LOOPS_API_KEY` is set for the **Production** environment. Without it `src/app/api/waitlist/route.ts` answers success and stores nothing, so signups are lost silently.
- [ ] Deploy, then check:
  - `curl -sI https://www.Zekke.io` → `308`, `location: https://Zekke.io/`
  - `curl -sI https://Zekke.io` → `200`
  - `https://Zekke.io/sitemap.xml` and `https://Zekke.io/robots.txt` load
  - `https://Zekke.io/opengraph-image` returns a PNG
- [ ] Add `Zekke.io` to Google Search Console and Bing Webmaster Tools and submit `https://Zekke.io/sitemap.xml`. Bing's index also feeds ChatGPT search and Copilot.
- [ ] Validate the home page in Google's Rich Results Test (JSON-LD) and in LinkedIn Post Inspector (share preview).

If `www` should stay primary instead, the only code change is `SITE_URL` in `src/lib/site.ts`; the redirect still has to become a 308.

## 2. FAQ section

**Why:** question-and-answer blocks are what search snippets and AI answer engines quote most reliably. The answers already exist on the page, spread across the features; an FAQ puts each one next to the question people actually ask.

- [ ] Add an FAQ section to `src/app/[lang]/page.tsx`, copy in all three dictionaries. Candidate questions:
  - Can Zekke read my data?
  - What happens if I lose my recovery phrase?
  - Is Zekke post-quantum?
  - How is Zekke different from Bitwarden or 1Password?
  - Is there a free plan, and what does premium cost?
  - Where is my data stored?
- [ ] Emit the same questions as a `FAQPage` node in the home page's JSON-LD `@graph`. The markup must match the visible text word for word, or Google discards it.
- [ ] Add the FAQ questions and answers to `public/llms.txt` as a `## FAQ` section, and update its pricing section once prices are set.
- [ ] Add a link to the FAQ in the header or the footer.

**Open questions before writing the copy:** how the comparison with Bitwarden and 1Password should be phrased, and whether a premium price can be stated yet. The page only says the free tier is free and premium gets 50% off in the first month.
