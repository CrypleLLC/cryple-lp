# Landing page — tasks

Open work on the landing page only. How the SEO and metadata pieces already in place work is in [README.md](README.md#seo-and-metadata).

## 1. Vercel domain configuration — blocker for the SEO work

**Owner:** Philippe, in the Vercel dashboard. No code change.

Today `https://cryple.io` answers **307** to `https://www.cryple.io/`, and the page is served from `www`. The code declares `https://cryple.io` as the site URL (`SITE_URL` in `src/lib/site.ts`): canonical URLs, hreflang, `sitemap.xml`, `robots.txt`, `og:url` and the JSON-LD all point at the apex. Until the domains agree, every canonical points at a URL that redirects away, and search engines ignore conflicting canonicals.

- [ ] Vercel → Project → Settings → Domains: make `cryple.io` the primary domain.
- [ ] Set `www.cryple.io` to redirect to `cryple.io` with **308** (permanent). A 307 tells crawlers the move is temporary and they keep indexing the old host.
- [ ] Confirm `LOOPS_API_KEY` is set for the **Production** environment. Without it `src/app/api/waitlist/route.ts` answers success and stores nothing, so signups are lost silently.
- [ ] Deploy, then check:
  - `curl -sI https://www.cryple.io` → `308`, `location: https://cryple.io/`
  - `curl -sI https://cryple.io` → `200`
  - `https://cryple.io/sitemap.xml` and `https://cryple.io/robots.txt` load
  - `https://cryple.io/opengraph-image` returns a PNG
- [ ] Add `cryple.io` to Google Search Console and Bing Webmaster Tools and submit `https://cryple.io/sitemap.xml`. Bing's index also feeds ChatGPT search and Copilot.
- [ ] Validate the home page in Google's Rich Results Test (JSON-LD) and in LinkedIn Post Inspector (share preview).

If `www` should stay primary instead, the only code change is `SITE_URL` in `src/lib/site.ts`; the redirect still has to become a 308.

## 2. FAQ section

**Why:** question-and-answer blocks are what search snippets and AI answer engines quote most reliably. The answers already exist on the page, spread across the features; an FAQ puts each one next to the question people actually ask.

- [ ] Add an FAQ section to `src/app/[lang]/page.tsx`, copy in all three dictionaries. Candidate questions:
  - Can Cryple read my data?
  - What happens if I lose my recovery phrase?
  - Is Cryple post-quantum?
  - How is Cryple different from Bitwarden or 1Password?
  - Is there a free plan, and what does premium cost?
  - Where is my data stored?
- [ ] Emit the same questions as a `FAQPage` node in the home page's JSON-LD `@graph`. The markup must match the visible text word for word, or Google discards it.
- [ ] Add the FAQ questions and answers to `public/llms.txt` as a `## FAQ` section, and update its pricing section once prices are set.
- [ ] Add a link to the FAQ in the header or the footer.

**Open questions before writing the copy:** how the comparison with Bitwarden and 1Password should be phrased, and whether a premium price can be stated yet. The page only says the free tier is free and premium gets 50% off in the first month.
