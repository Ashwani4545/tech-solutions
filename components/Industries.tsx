import { FadeIn } from "./FadeIn";
import { industries } from "@/lib/data";

export function Industries() {
  return (
    <section className="border-t border-line py-28">
      <div className="container">
        <FadeIn>
          <p className="text-sm font-medium text-cyan">Where we work</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 max-w-xl font-display text-display-lg font-semibold text-white balance">
            Technology across industries.
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
          {industries.map((ind, i) => (
            <FadeIn key={ind} delay={i * 0.04}>
              <span className="font-display text-2xl font-medium text-ink-muted transition-colors hover:text-white md:text-3xl">
                {ind}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
