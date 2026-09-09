import Link from "next/link";

export function CTASection({
  heading,
  body,
  buttonLabel = "Contact us",
  href = "/contact",
}: {
  heading: string;
  body: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="border-y border-ink/5 bg-ink py-20 dark:border-white/5">
      <div className="container flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{heading}</h2>
          <p className="mt-3 text-white/60">{body}</p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-light"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
