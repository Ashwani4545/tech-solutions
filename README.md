# Infinity Tech Nexus

Production-ready company website, rebuilt with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** (App Router, static generation where possible)
- **TypeScript** — strict mode
- **Tailwind CSS** — design tokens matching the brand (emerald/blue, Inter + Space Grotesk)
- **next/font** — self-hosted Google Fonts, no layout shift
- Zero client-side framework bloat — forms and interactivity are small, targeted client components

## Getting started locally

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_FORM_ENDPOINT
npm run dev
```

Visit `http://localhost:3000`.

## Wiring the contact form

The contact form posts to whatever URL you set as `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local`.

1. Create a free account at [Formspree](https://formspree.io) (or [Web3Forms](https://web3forms.com))
2. Create a form, copy its endpoint URL
3. Set `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx` in `.env.local`
4. Redeploy

Until this is set, the form will show a friendly error instead of silently failing.

## Deploying (recommended path)

1. **Buy a domain** — e.g. on [Namecheap](https://namecheap.com) (~$10–15/yr for `.com`)
2. **Push this project to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. **Deploy to [Vercel](https://vercel.com)** — import the GitHub repo, it auto-detects Next.js. Add your environment variables (`NEXT_PUBLIC_FORM_ENDPOINT`) in the Vercel project settings.
4. **Point your domain at Vercel** — in Vercel's project settings → Domains, add your domain, then update your registrar's DNS records as instructed (usually one A record + one CNAME).
5. Update `site.url` in `lib/data.ts` to your real domain — this feeds metadata, sitemap, and Open Graph tags.

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Home
  services/            Services
  software-development/
  projects/            Projects hub + /projects/[slug] (web, iot, data-science)
  portfolio/            Filterable portfolio
  about/
  contact/              Contact form
  sitemap.ts            Auto-generated sitemap.xml
  robots.ts             Auto-generated robots.txt
components/            Reusable UI (Navbar, Footer, cards, form, etc.)
lib/data.ts             All site content in one place — edit this to update copy
```

## Editing content

Almost everything (services, projects, testimonials, portfolio items, stats) lives in
`lib/data.ts`. Edit that file rather than hunting through JSX.

## What's already handled

- Real content pulled from the original site (no more "0" stat counters — counters animate on
  scroll from real numbers)
- Dark mode (toggle in the navbar, respects system preference, no flash on load)
- SEO: per-page metadata, Open Graph tags, sitemap.xml, robots.txt
- Security headers (via `next.config.mjs`)
- Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`
- No emoji icons — clean SVG icon set throughout

## Not yet wired (intentionally left for you)

- Analytics — add your GA4 ID to `NEXT_PUBLIC_GA_ID` and wire it in `app/layout.tsx` if you want it
- Real testimonial photos / client logos — currently initials-based avatars
- Live chat widget — removed; the old one had no backend, so add a real provider (Crisp, Tawk.to, Intercom) if wanted
