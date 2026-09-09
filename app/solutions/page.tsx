import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Capabilities } from "@/components/Capabilities";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI & Intelligent Systems, Software Engineering, Digital Products, Data & Analytics, Web & Mobile, Cloud & DevOps.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="py-24 md:py-28">
        <div className="container">
          <FadeIn>
            <p className="text-sm font-medium text-cyan">Solutions</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-display text-display-xl font-semibold text-white balance">
              Engineering capability, applied to your business.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-muted">
              Six areas of focus, each grounded in real engineering practice — not a checklist of
              buzzwords.
            </p>
          </FadeIn>
        </div>
      </section>
      <Capabilities />
      <FinalCTA />
    </>
  );
}
