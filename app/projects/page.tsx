import type { Metadata } from "next";
import Link from "next/link";
import { projectDomains } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our projects across Web Development, IoT, and Data Science domains.",
};

export default function ProjectsPage() {
  return (
    <section className="container py-20">
      <p className="text-sm font-medium text-emerald">Our work</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink dark:text-white">
        Choose a domain
      </h1>
      <p className="mt-4 text-slate-soft">Click into a domain to see ongoing and completed projects.</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {projectDomains.map((domain) => (
          <Link
            key={domain.slug}
            href={`/projects/${domain.slug}`}
            className="group rounded-2xl border border-ink/8 bg-white p-8 transition hover:border-emerald/30 dark:border-white/10 dark:bg-paper-darkAlt"
          >
            <h2 className="font-display text-xl font-semibold text-ink dark:text-white">{domain.title}</h2>
            <p className="mt-2 text-sm text-slate-soft">{domain.summary}</p>
            <p className="mt-4 text-xs text-slate-faint">
              {domain.ongoing.length} ongoing · {domain.completed.length} completed
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-emerald">View projects →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
