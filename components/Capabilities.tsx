import { FadeIn } from "./FadeIn";
import { capabilities } from "@/lib/data";

export function Capabilities() {
  return (
    <section className="border-t border-line py-28">
      <div className="container">
        <FadeIn>
          <p className="text-sm font-medium text-cyan">What we do</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 max-w-xl font-display text-display-lg font-semibold text-white balance">
            Six capabilities. One engineering discipline.
          </h2>
        </FadeIn>

        <div className="mt-16 divide-y divide-line border-t border-line">
          {capabilities.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[80px_1fr_1fr] md:items-baseline md:gap-8">
                <span className="font-display text-sm text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{c.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-ink-muted">{c.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
