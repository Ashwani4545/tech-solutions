import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Industries } from "@/components/Industries";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Industries",
  description: "Technology across FinTech, Healthcare, Education, Retail, Startups and Professional Services.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="py-24 md:py-28">
        <div className="container">
          <FadeIn>
            <p className="text-sm font-medium text-cyan">Industries</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-display text-display-xl font-semibold text-white balance">
              Context matters as much as code.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-muted">
              We bring engineering discipline to the specifics of each industry we work in.
            </p>
          </FadeIn>
        </div>
      </section>
      <Industries />
      <FinalCTA />
    </>
  );
}
