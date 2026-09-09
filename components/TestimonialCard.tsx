export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  const initial = name.charAt(0);
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-7 dark:border-white/10 dark:bg-paper-darkAlt">
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-soft">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/10 font-display text-sm font-semibold text-emerald">
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink dark:text-white">{name}</p>
          <p className="text-xs text-slate-faint">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
