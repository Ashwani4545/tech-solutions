import type { DomainProject } from "@/lib/data";

export function DomainProjectCard({ project }: { project: DomainProject }) {
  const isOngoing = project.status === "Ongoing";
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6 dark:border-white/10 dark:bg-paper-darkAlt">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            isOngoing
              ? "bg-signal/10 text-signal"
              : "bg-emerald/10 text-emerald"
          }`}
        >
          {project.status}
        </span>
        <span className="font-mono text-xs text-slate-faint">{project.code}</span>
      </div>
      <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink dark:text-white">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-paper-alt px-2 py-1 text-xs text-slate-soft dark:bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
