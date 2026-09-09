import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CTASection } from "@/components/CTASection";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work spanning web platforms, data products, and automation by Infinity Tech Nexus.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="container py-20">
        <p className="text-sm font-medium text-emerald">Portfolio</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink dark:text-white">
          Practical, impactful work.
        </h1>
        <p className="mt-4 max-w-xl text-slate-soft">
          A snapshot of recent projects across software engineering and data science, built with
          modern stacks and delivered end-to-end.
        </p>
      </section>

      <section className="container pb-24">
        <PortfolioGrid items={portfolioItems} />
      </section>

      <CTASection
        heading="Let's build your next launch"
        body="Tell us about your idea, and we'll suggest the fastest path to impact."
      />
    </>
  );
}
