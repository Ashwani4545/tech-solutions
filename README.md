<div align="center">

# ∞ Infinity Tech Nexus

**Practical technology, built by people who ship.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Private-lightgrey)]()

[Website](https://infinitytechnexus.com) · [Services](#-what-we-do) · [Contact](#-contact)

</div>

---

## 🏢 About Infinity Tech Nexus

Infinity Tech Nexus is a technology-focused initiative bridging the gap between **students and
industry**. We build real, production-grade software for businesses — and give students real
projects and mentorship instead of tutorials.

We run two things at once, under one roof:

1. **A software development studio** — websites, apps, SaaS platforms, APIs, and data/ML products
   for businesses, delivered end-to-end.
2. **A student mentorship program** — academic project help, portfolio building, freelancing
   opportunities, and guidance from people who actually build for a living.

**Our vision:** Build industry-ready talent through practical exposure and real-world project
experience that bridges the gap between academia and industry.

**Our mission:** Deliver affordable, high-quality tech solutions globally while empowering the
next generation of developers, designers, and data scientists.

**Our approach:** Learn by building. Build for impact.

---

## 🛠 What We Do

### For companies
| Service | What it covers |
|---|---|
| Web Development | Responsive, SEO-optimized websites and web apps on scalable, modern infrastructure |
| App Development | Custom iOS, Android, and cross-platform mobile apps |
| DevOps | CI/CD pipelines and infrastructure automation for reliable deployments |
| IoT Solutions | Connected devices and monitoring systems for automation |
| Data & Automation | Analytics dashboards, workflow automation, AI-assisted decision tools |
| Branding | Logos, visual identity, and design systems |

### Software development (deeper dive)
Web apps (React/Next.js/Node), mobile apps (React Native/Flutter), full-stack SaaS platforms with
subscription billing, REST/GraphQL APIs on microservices architecture, and UI/UX design from
research through prototyping.

### For students
Academic project assistance (ideation → documentation → viva prep), 1:1 mentorship on tech stack
and architecture decisions, portfolio building with real GitHub/deployment work, skill development
alongside senior engineers, and technical content writing.

### Domains we build in
- **Web Development** — modern websites and web applications
- **Internet of Things** — smart devices and connected systems
- **Data Science — ML & AI** — machine learning and analytics solutions

---

## 💻 This Repository

This repo is the company website — rebuilt as a production-ready app rather than static HTML.

**Stack:** Next.js 14 (App Router) · TypeScript (strict) · Tailwind CSS · next/font

```bash
npm install
cp .env.example .env.local   # add your Formspree/Web3Forms endpoint
npm run dev                  # http://localhost:3000
```

### Project structure

```
app/                    Routes (App Router)
  page.tsx               Home
  services/               Services
  software-development/
  projects/               Projects hub + /projects/[slug] (web, iot, data-science)
  portfolio/               Filterable portfolio
  about/
  contact/                 Contact form
  sitemap.ts               Auto-generated sitemap.xml
  robots.ts                Auto-generated robots.txt
components/              Reusable UI (Navbar, Footer, cards, form, etc.)
lib/data.ts               All site content — services, projects, testimonials, stats
```

Almost all copy (services, projects, testimonials, stats) lives in `lib/data.ts` — edit that file
to update the site rather than hunting through JSX.

### Deploying

1. Buy a domain (e.g. [Namecheap](https://namecheap.com))
2. Push this repo to GitHub
3. Import it into [Vercel](https://vercel.com) — auto-detects Next.js
4. Add `NEXT_PUBLIC_FORM_ENDPOINT` in Vercel's Environment Variables
5. Point your domain at Vercel (Project Settings → Domains)
6. Update `site.url` in `lib/data.ts` to your live domain

### What's already handled
- Real content, no placeholder "0" stats — counters animate from real numbers
- Dark mode, no flash on load
- Per-page SEO metadata, Open Graph tags, sitemap.xml, robots.txt
- Security headers, full keyboard accessibility, `prefers-reduced-motion` support

### Not yet wired (intentional)
- Analytics (`NEXT_PUBLIC_GA_ID` placeholder — wire it in `app/layout.tsx` if wanted)
- Real testimonial photos / client logos
- Live chat widget (add a real provider — Crisp, Tawk.to, Intercom — if wanted)

---

## 📬 Contact

- **Email:** contact@infinitytechnexus.com
- **Response time:** within 48 hours
- **Availability:** worldwide, remote-first

---

<div align="center">
<sub>&copy; 2026 Infinity Tech Nexus. All rights reserved.</sub>
</div>