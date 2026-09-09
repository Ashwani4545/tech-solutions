"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur-md dark:border-white/5 dark:bg-paper-dark/85">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Infinity Tech Nexus home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-emerald"
                    : "text-ink/70 hover:text-ink dark:text-white/70 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-dark"
          >
            Get a free quote
          </Link>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center text-ink md:hidden dark:text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-paper px-6 py-4 md:hidden dark:border-white/5 dark:bg-paper-dark">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80 dark:text-white/80"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-white"
              >
                Get a free quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
