import { FadeIn } from "./FadeIn";
import { problemSolutions } from "@/lib/data";

export function ProblemSolutionSection() {
  return (
    <section className="border-t border-line py-28">
      <div className="container">
        <FadeIn>
          <h2 className="max-w-2xl font-display text-display-lg font-semibold text-white balance">
            Technology should solve something.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {problemSolutions.map((ps, i) => (
            <FadeIn key={ps.problem} delay={i * 0.05} className="bg-base p-9">
              <p className="font-display text-lg font-medium text-white md:text-xl">{ps.problem}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{ps.solution}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
