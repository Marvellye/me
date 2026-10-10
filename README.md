# Marvelly — Portfolio Rebuild

Next.js 14 + Tailwind. Minimal editorial, light/dark, Lenis smooth scroll, subtle Three.js hero.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verify production build
```

Prod preview currently serving at **http://127.0.0.1:3100** (background).

## Routes

- `/` — hero (Three.js particle field), proof strip, selected work, capabilities, about teaser, CTA
- `/work` + `/work/[slug]` — 6 projects, full case-study template each
- `/about` — story, philosophy, experience, education
- `/writing` + `/writing/[slug]` — 3 seeded technical articles
- `/resume` — printable résumé (Print / save as PDF button)

## Edit content

All copy lives in `content.ts` (profile, projects, capabilities, experience, writing).
Case-study bodies: `CASE_NOTES` in `app/work/[slug]/page.tsx`.
Article bodies: `BODIES` in `app/writing/[slug]/page.tsx`.

## Still needed from owner

- Portrait photo + real résumé PDF
- Verify experience claims before publishing (Google/Amazon entries from old site deliberately dropped)
- Real project screenshots to replace text cards
- Deploy target (Vercel recommended) + point marvelly.com.ng
