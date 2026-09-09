import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { FeaturedWork } from "@/components/FeaturedWork";
import { FinalCTA } from "@/components/FinalCTA";
import { featuredProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects across AI, software engineering and data platforms.",
};

export default function WorkPage() {
  return (
    <>
      <section className="py-24 md:py-28">
        <div className="container">
          <FadeIn>
            <p className="text-sm font-medium text-cyan">Selected work</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-display text-display-xl font-semibold text-white balance">
              Built for impact.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="container">
          <FeaturedWork projects={featuredProjects} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
