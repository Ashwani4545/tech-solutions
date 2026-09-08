# 🚀 Infinity Tech Nexus — Website Enhancement Roadmap

> Current site: [techsoln.vercel.app](https://techsoln.vercel.app/)
> Goal: Level up from "student project" vibe → **proper company website** ready for a paid domain.

---

## 🔴 Critical Fixes (Do First)

- [ ] **Fix "0" stat counters** — Homepage shows `0 Projects Completed`, `0 Technologies Used`, `0 Hr Avg Response Time`, `0 Happy Clients`. Either the JS counter animation is broken or the numbers are literally zero — both look bad. Fix the counter script or hardcode real numbers.
- [ ] **Fix response time mismatch** — Homepage says `0 Hr`, Contact page says `Within 48 hours`. Pick ONE number and use it everywhere.
- [ ] **Fix dead footer social links** — 💻 💼 🐦 ✉️ icons all point to `#`. Link them to real profiles or remove.
- [ ] **Fix cut-off About page stats** — `20+ / 15+ / 10+ / 5+` numbers appear with no visible labels. Make sure each has a clear label (e.g. "Projects Delivered", "Happy Clients", "Technologies Used", "Years Active").

---

## 🟡 Brand & Positioning

- [ ] **Split identity: Business vs Student.** Right now "Premium Tech Solutions" (SaaS, API, UI/UX) and "Student Mentorship" (Academic Assistance, Viva Prep, Freelancing) are mixed into one Services section — confusing for a business client evaluating you. Options:
  - Separate nav tabs: **"For Businesses"** / **"For Students"**
  - OR spin student mentorship into its own sub-brand/page
- [ ] **Buy a real domain** — currently on free `techsoln.vercel.app`. Move to something like `infinitytechnexus.com` for instant credibility.
- [ ] **Swap emoji icons for a proper icon set** — 🌙 📚 💼 🎨 read as informal/prototype. Use **Lucide**, **Phosphor**, or **Heroicons** for a consistent, premium look.

---

## 🟢 Content & Trust Signals

- [ ] **Real testimonial photos/logos** — currently colored letter avatars (R, P, A). Replace with real headshots or client company logos once available.
- [ ] **Verify all "Learn More" buttons** actually link somewhere (Web Dev, App Dev, SaaS, API, UI/UX cards).
- [ ] **Clean up service card copy** — check for duplicate/overlapping descriptions between "Our Services" and "Software Development Services" sections.

---

## 🏗️ Technical Rebuild Plan

| Step | Action |
|---|---|
| 1 | Buy domain on **Namecheap** (~$10–15/yr) |
| 2 | Rebuild shell in **Next.js** — keeps existing copy/structure, adds clean URLs (`/about` not `/about.html`) + better SEO |
| 3 | Deploy to **Vercel** (free tier) |
| 4 | Point Namecheap DNS → Vercel |
| 5 | Wire contact form via **Formspree** / **Web3Forms** (no backend needed) |
| 6 | Optional: add a blog via headless CMS (**Sanity** / **Contentful**) |

---

## ✅ What's Already Working (Keep As-Is)

- Clean green/mint visual system, consistent nav
- Well-organized service tiers
- Filterable Projects page (by domain: Web/IoT/Data Science)
- Filterable Portfolio page (by tag: Full-stack/Data Science/Automation/E-Commerce/Mobile)
- Honest, clear About page copy

---

*Prioritize: 🔴 Critical Fixes → 🟡 Brand/Positioning → 🟢 Content → 🏗️ Rebuild & domain migration*
