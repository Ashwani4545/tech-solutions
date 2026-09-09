import { FadeIn } from "./FadeIn";
import type { FeaturedProject } from "@/lib/data";

export function FeaturedWork({ projects, compact = false }: { projects: FeaturedProject[]; compact?: boolean }) {
  return (
    <div className={compact ? "space-y-6" : "space-y-8"}>
      {projects.map((p, i) => (
        <FadeIn key={p.slug} delay={i * 0.06}>
          <article className="grid gap-6 rounded-2xl border border-line p-8 transition-colors duration-300 hover:border-lineStrong md:grid-cols-[1fr_1.4fr] md:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-sm text-cyan">{p.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.technology.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Problem</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Solution</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.solution}</p>
              </div>
              {p.outcome && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Outcome</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.outcome}</p>
                </div>
              )}
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
