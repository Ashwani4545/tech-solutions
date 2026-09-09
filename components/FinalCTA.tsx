import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function FinalCTA() {
  return (
    <section className="border-t border-line py-32">
      <div className="container text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl font-display text-display-lg font-semibold text-white balance">
            Have an idea worth building?
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-ink-muted">
            Tell us what you&rsquo;re trying to achieve. Whether you&rsquo;re launching a product,
            automating a process, modernizing software or exploring AI, let&rsquo;s build it together.
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-4 text-sm font-semibold text-base transition-all duration-300 ease-premium hover:bg-cyan-bright"
          >
            Start a Conversation <span aria-hidden>→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
