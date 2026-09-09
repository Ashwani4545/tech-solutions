import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyUs } from "@/components/WhyUs";
import { StudentSolutions } from "@/components/StudentSolutions";
import { FinalCTA } from "@/components/FinalCTA";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Company",
  description: "About Infinity Techies — how we work, why teams choose us, and careers.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="py-24 md:py-28">
        <div className="container">
          <FadeIn>
            <p className="text-sm font-medium text-cyan">Company</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-display text-display-xl font-semibold text-white balance">
              {site.positioning}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-muted">{site.description}</p>
          </FadeIn>
        </div>
      </section>

      <ProcessTimeline />
      <WhyUs />

      <section id="careers" className="border-t border-line py-28">
        <div className="container">
          <FadeIn>
            <p className="text-sm font-medium text-cyan">Careers</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-semibold text-white balance">
              We work with people who care about the craft.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-lg text-ink-muted">
              We&rsquo;re not running open roles publicly right now. If you&rsquo;d like to get in
              touch anyway, reach out via the contact page.
            </p>
          </FadeIn>
        </div>
      </section>

      <StudentSolutions />
      <FinalCTA />
    </>
  );
}
