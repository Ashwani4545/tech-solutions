import { FadeIn } from "./FadeIn";
import { whyUs } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="border-t border-line py-28">
      <div className="container grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <FadeIn>
          <h2 className="font-display text-display-lg font-semibold text-white balance">
            Built around your goals.
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="border-b border-line pb-8 last:border-b-0">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
