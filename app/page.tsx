import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { HeroVisual } from "@/components/HeroVisual";
import { Capabilities } from "@/components/Capabilities";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Industries } from "@/components/Industries";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyUs } from "@/components/WhyUs";
import { StudentSolutions } from "@/components/StudentSolutions";
import { FinalCTA } from "@/components/FinalCTA";
import { featuredProjects } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container grid items-center gap-14 md:grid-cols-2">
          <div>
            <FadeIn>
              <h1 className="font-display text-display-xl font-semibold text-white balance">
                We build technology that moves businesses forward.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-md text-ink-muted">
                From AI-powered products to scalable software platforms, we design, engineer and
                deliver digital solutions built around your goals.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-base transition-all duration-300 ease-premium hover:bg-cyan-bright"
                >
                  Start a Conversation <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan"
                >
                  Explore Our Work <span aria-hidden>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="flex justify-center md:justify-end">
            <HeroVisual />
          </FadeIn>
        </div>
      </section>

      <Capabilities />
      <ProblemSolutionSection />

      {/* FEATURED WORK */}
      <section className="border-t border-line py-28">
        <div className="container">
          <FadeIn>
            <p className="text-sm font-medium text-cyan">Selected work</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 max-w-xl font-display text-display-lg font-semibold text-white balance">
              Built for impact.
            </h2>
          </FadeIn>
          <div className="mt-14">
            <FeaturedWork projects={featuredProjects.slice(0, 2)} />
          </div>
          <FadeIn delay={0.1}>
            <Link
              href="/work"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan"
            >
              View all work <span aria-hidden>→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Industries />
      <ProcessTimeline />
      <WhyUs />
      <StudentSolutions />
      <FinalCTA />
    </>
  );
}
