import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/data";

const columns = [
  {
    heading: "Services",
    links: [
      { href: "/services", label: "Web development" },
      { href: "/services", label: "App development" },
      { href: "/software-development", label: "Software development" },
      { href: "/services", label: "Data & automation" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "For students",
    links: [
      { href: "/services", label: "Mentorship" },
      { href: "/services", label: "Project help" },
      { href: "/services", label: "Portfolio building" },
      { href: "/services", label: "Freelancing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-paper-alt dark:border-white/5 dark:bg-paper-darkAlt">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-soft">
            Practical technology for businesses, and real project experience for students who want
            more than a tutorial.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-sm font-semibold text-ink dark:text-white">{col.heading}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link, i) => (
                <li key={col.heading + link.label + i}>
                  <Link href={link.href} className="text-sm text-slate-soft transition hover:text-emerald">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink/5 py-6 dark:border-white/5">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs text-slate-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.email}</p>
        </div>
      </div>
    </footer>
  );
}
