<div align="center">

# ∞ Infinity Techies

### Ideas Today. A Brighter Tomorrow.

**Technology that moves ideas forward.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-black?logo=framer)](https://www.framer.com/motion/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

[🌐 Live Site](https://infinitytechies.com) · [✉️ Contact](#-contact) · [🚀 Deploy Guide](#-deploying)

</div>

---

## 📋 Table of Contents

- [🏢 About Infinity Techies](#-about-infinity-techies)
- [🛠️ What We Do](#️-what-we-do)
- [🏭 Industries](#-industries)
- [🎓 Student Solutions](#-student-solutions)
- [🧭 Site Map](#-site-map)
- [💻 Tech Stack](#-tech-stack)
- [⚡ Getting Started](#-getting-started)
- [🔑 Environment Variables](#-environment-variables)
- [📁 Project Structure](#-project-structure)
- [🚀 Deploying](#-deploying)
- [✍️ Editing Content](#️-editing-content)
- [✅ What's Already Handled](#-whats-already-handled)
- [📬 Contact](#-contact)

---

## 🏢 About Infinity Techies

**[Infinity Techies](https://infinitytechies.com)** is a modern technology and software
engineering company. We design, engineer and deliver digital products, software platforms and
AI-powered systems for **businesses, startups, entrepreneurs and organizations** — in India and
internationally.

We also run a secondary **[Student Solutions](#-student-solutions)** offering for students who
need legitimate technical project development, mentorship, documentation, deployment and
presentation support — positioned as a separate pathway, not the core brand identity.

| | |
|---|---|
| 🎯 **Positioning** | Technology that moves ideas forward |
| 🧬 **Personality** | Premium · Modern · Technical · Confident · Minimal · Innovative · Global · Trustworthy |
| 🌍 **Reach** | India and international clients |
| 🤝 **Engagement** | Project-based, or as an extension of your team |

---

## 🛠️ What We Do

Six core capabilities — see the live breakdown on **[/solutions](https://infinitytechies.com/solutions)**:

| Icon | Capability | Covers |
|---|---|---|
| 🤖 | **AI & Intelligent Systems** | AI applications, machine learning, intelligent automation, AI-powered workflows |
| ⚙️ | **Software Engineering** | Scalable web platforms, backend systems, APIs, enterprise software |
| 🎨 | **Digital Products** | Product strategy, UX/UI, architecture, development, deployment |
| 📊 | **Data & Analytics** | Data platforms, analytics, dashboards, intelligent decision systems |
| 📱 | **Web & Mobile** | High-performance websites and mobile applications |
| ☁️ | **Cloud & DevOps** | Cloud architecture, deployment, CI/CD, infrastructure, reliability |

**[→ See featured work](https://infinitytechies.com/work)** — real projects, real problem/solution
breakdowns, no fabricated clients or metrics.

---

## 🏭 Industries

We build across **[/industries](https://infinitytechies.com/industries)**:

`FinTech` · `Healthcare` · `Education` · `Retail` · `Startups` · `Professional Services`

---

## 🎓 Student Solutions

A distinct pathway for students building real, ambitious project work:

- 🧩 Project development
- 🧑‍🏫 Technical mentorship
- 📄 Documentation
- 🚀 Deployment
- 🎤 Presentation support
- 🗣️ Viva guidance

**[→ Explore Student Solutions](https://infinitytechies.com/company#students)**

---

## 🧭 Site Map

| Route | Description |
|---|---|
| 🏠 [`/`](https://infinitytechies.com/) | Home — hero, capabilities, problem/solution, featured work, industries, process, why us, student solutions, final CTA |
| 🧩 [`/solutions`](https://infinitytechies.com/solutions) | Full capability breakdown |
| 🏭 [`/industries`](https://infinitytechies.com/industries) | Industries we serve |
| 💼 [`/work`](https://infinitytechies.com/work) | All case studies |
| 🏢 [`/company`](https://infinitytechies.com/company) | About, process, why us, careers, student solutions |
| ✉️ [`/contact`](https://infinitytechies.com/contact) | Enquiry form (`?type=student` pre-fills the student path) |

---

## 💻 Tech Stack

| | Technology | Why |
|---|---|---|
| ▲ | [**Next.js 14**](https://nextjs.org/docs) (App Router) | Static generation, fast routing, built-in SEO primitives |
| 🔷 | [**TypeScript**](https://www.typescriptlang.org/docs/) (strict) | Type safety across the whole app |
| 🎨 | [**Tailwind CSS**](https://tailwindcss.com/docs) | Dark premium design system — near-black base, electric cyan accent |
| 🎬 | [**Framer Motion**](https://www.framer.com/motion/) | Restrained scroll-triggered animations |
| 🔤 | [**next/font**](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | Manrope (display) + Inter (body), self-hosted, zero layout shift |

---

## ⚡ Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)**.

Other scripts:

```bash
npm run build       # production build
npm run start        # run the production build locally
npm run typecheck     # tsc --noEmit
npm run lint           # next lint
```

---

## 🔑 Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) endpoint for the contact form |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp business number, international format, digits only (e.g. `919876543210`). The floating WhatsApp button only renders once this is set |
| `NEXT_PUBLIC_GA_ID` | Optional [GA4](https://analytics.google.com/) measurement ID |

---

## 📁 Project Structure

```
app/
  page.tsx                 🏠 Home
  solutions/                 🧩 Capabilities detail
  industries/                 🏭 Industries detail
  work/                        💼 All case studies
  company/                      🏢 About, process, why us, careers, student solutions
  contact/                       ✉️ Enquiry form
  sitemap.ts / robots.ts           🗺️ Auto-generated
components/                    🧱 Navbar, Footer, section components, ContactForm, WhatsAppButton
lib/data.ts                     📝 All copy — capabilities, projects, industries, process, etc.
```

---

## 🚀 Deploying

1. 🌐 Buy a domain (e.g. [Namecheap](https://namecheap.com))
2. 📦 Push this repo to GitHub
3. ▲ Import it into [Vercel](https://vercel.com) — `vercel.json` is already configured
4. 🔑 Add your environment variables in Vercel's project settings
5. 🔗 Point your domain at Vercel (Project Settings → Domains)
6. ✏️ Update `site.url` in `lib/data.ts` to your live domain

---

## ✍️ Editing Content

Almost everything lives in **[`lib/data.ts`](./lib/data.ts)** — capabilities, problem/solution
pairs, featured projects, industries, process stages, "why us" points, student services, and
footer links. Edit that file rather than hunting through JSX.

> ⚠️ Only add an `outcome` field to a project in `featuredProjects` once there's a real, confirmed
> result. Never fabricate clients, metrics, or testimonials — that's a hard rule for this brand.

---

## ✅ What's Already Handled

- ✅ Real content only — no fabricated stats, clients, or testimonials anywhere
- ✅ Dark premium theme, no flash on load
- ✅ Per-page SEO metadata, Open Graph tags, JSON-LD Organization schema
- ✅ Auto-generated `sitemap.xml` and `robots.txt`
- ✅ Security headers (`X-Frame-Options`, etc.)
- ✅ Full keyboard accessibility, `prefers-reduced-motion` support
- ✅ Working contact form with honeypot spam protection

### 🔜 Not yet wired (intentional)
- 📈 Analytics — set `NEXT_PUBLIC_GA_ID` and wire it in `app/layout.tsx` if wanted
- 🖼️ Favicon / OG share image — not yet generated
- 💬 WhatsApp number — set `NEXT_PUBLIC_WHATSAPP_NUMBER` to activate the floating button

---

## 📬 Contact

- ✉️ **Email:** hello@infinitytechies.com
- 💬 **WhatsApp:** available once configured (see [Environment Variables](#-environment-variables))
- 🌍 **Availability:** India and international, remote-friendly

---

<div align="center">
<sub>&copy; 2026 Infinity Techies. All rights reserved.</sub>
</div>