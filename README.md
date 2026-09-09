# ∞ Infinity Techies

**Ideas Today. A Brighter Tomorrow.**

A modern technology and software engineering company website, built with Next.js 14, TypeScript,
Tailwind CSS, and Framer Motion.

## About

Infinity Techies designs, engineers and delivers digital products, software platforms and
AI-powered systems for businesses, startups and organizations — in India and internationally. A
secondary Student Solutions offering provides project development, mentorship, documentation,
deployment and presentation support for students — positioned as a separate pathway, not the
core brand identity.

## Stack

- **Next.js 14** (App Router, fully static generation)
- **TypeScript** — strict mode
- **Tailwind CSS** — dark premium design system (near-black base, electric cyan accent)
- **Framer Motion** — restrained scroll-triggered animations
- **next/font** — Manrope (display) + Inter (body), self-hosted, no layout shift

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Formspree or Web3Forms endpoint for the contact form |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp business number (international format, digits only). The floating WhatsApp button only renders once this is set. |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 measurement ID |

## Structure

```
app/
  page.tsx              Home
  solutions/              Capabilities detail
  industries/              Industries detail
  work/                    All case studies
  company/                  About, process, why us, careers, student solutions
  contact/                  Enquiry form (supports ?type=student)
  sitemap.ts / robots.ts    Auto-generated
components/                Navbar, Footer, section components, ContactForm, WhatsAppButton
lib/data.ts                 All copy — capabilities, projects, industries, process, etc.
```

Edit `lib/data.ts` to change content. Add real projects to `featuredProjects` — only include an
`outcome` field once there's a real, confirmed result; don't fabricate metrics or clients.

## Deploying

1. Push to GitHub
2. Import into [Vercel](https://vercel.com) — `vercel.json` is already configured
3. Set environment variables in Vercel's project settings
4. Point your domain at Vercel
5. Update `site.url` in `lib/data.ts` to your live domain
