import { FadeIn } from "./FadeIn";
import { processStages } from "@/lib/data";

export function ProcessTimeline() {
  return (
    <section className="border-t border-line py-28">
      <div className="container">
        <FadeIn>
          <h2 className="max-w-xl font-display text-display-lg font-semibold text-white balance">
            From idea to impact.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-0 md:grid-cols-5">
          {processStages.map((stage, i) => (
            <FadeIn key={stage.number} delay={i * 0.06}>
              <div
                className={`border-t-2 border-cyan/40 py-6 pr-6 md:border-t-0 md:border-l-2 md:pl-6 md:pt-0 ${
                  i === 0 ? "md:border-l-2" : ""
                }`}
              >
                <span className="font-display text-sm text-ink-faint">{stage.number}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{stage.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{stage.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
