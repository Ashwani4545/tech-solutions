import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { studentServices } from "@/lib/data";

export function StudentSolutions() {
  return (
    <section id="students" className="border-y border-line bg-base-raised py-28">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <FadeIn>
            <p className="text-sm font-medium text-cyan">A separate pathway</p>
            <h2 className="mt-4 font-display text-display-md font-semibold text-white balance">
              Building your future?
            </h2>
            <p className="mt-4 max-w-md text-ink-muted">
              Technical support for students with ambitious project ideas — real engineering
              guidance, not just tutorials.
            </p>
            <Link
              href="/contact?type=student"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan"
            >
              Explore Student Solutions <span aria-hidden>→</span>
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-8">
              {studentServices.map((s) => (
                <li key={s} className="text-sm text-ink-muted">
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
