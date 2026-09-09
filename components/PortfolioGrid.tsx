"use client";

import { useState } from "react";
import type { PortfolioCategory, PortfolioItem } from "@/lib/data";

const filters: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Full-stack", value: "fullstack" },
  { label: "Data Science", value: "datascience" },
  { label: "Automation", value: "automation" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Mobile", value: "mobile" },
];

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");
  const visible = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === f.value
                ? "border-emerald bg-emerald text-white"
                : "border-ink/10 text-slate-soft hover:border-emerald/40 hover:text-emerald dark:border-white/15"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl border border-ink/8 bg-white p-6 dark:border-white/10 dark:bg-paper-darkAlt"
          >
            <span className="w-fit rounded-full bg-emerald/10 px-2.5 py-1 text-xs font-medium text-emerald">
              {item.tag}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">{item.description}</p>
            <dl className="mt-4 space-y-1.5 text-xs text-slate-soft">
              <div>
                <dt className="inline font-semibold text-ink dark:text-white">Tech: </dt>
                <dd className="inline">{item.tech}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-ink dark:text-white">Outcome: </dt>
                <dd className="inline">{item.outcome}</dd>
              </div>
            </dl>
            <span className="mt-4 text-sm font-medium text-emerald">{item.link}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
