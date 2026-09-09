import Link from "next/link";
import { Logo } from "./Logo";
import { footerNav, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container grid gap-12 py-20 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-[26ch] text-sm text-ink-muted">{site.tagline}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Solutions</h4>
          <ul className="mt-5 space-y-3">
            {footerNav.solutions.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-ink-muted transition hover:text-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Company</h4>
          <ul className="mt-5 space-y-3">
            {footerNav.company.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-ink-muted transition hover:text-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Students</h4>
          <ul className="mt-5 space-y-3">
            {footerNav.students.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-ink-muted transition hover:text-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-xs text-ink-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {footerNav.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-cyan">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
