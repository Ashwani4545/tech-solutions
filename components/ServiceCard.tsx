import type { Service } from "@/lib/data";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div className="group rounded-2xl border border-ink/8 bg-white p-7 transition hover:border-emerald/30 hover:shadow-[0_8px_30px_-12px_rgba(15,157,110,0.25)] dark:border-white/10 dark:bg-paper-darkAlt">
      <span className="font-display text-sm text-slate-faint">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-soft">{service.description}</p>
      {service.tech && (
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/8 px-2.5 py-1 text-xs text-slate-soft dark:border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
