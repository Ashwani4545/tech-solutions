import type { Metadata } from "next";
import Link from "next/link";
import { StatCounter } from "@/components/StatCounter";
import { CTASection } from "@/components/CTASection";
import { softwareServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Software Development",
  description: "Web apps, mobile apps, SaaS, APIs, and UI/UX design — built with modern stacks and best practices.",
};

const swStats = [
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 10, suffix: "+", label: "Tech stacks" },
  { value: 99, suffix: "%", label: "On-time delivery" },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <section className="container py-20">
        <p className="text-sm font-medium text-emerald">Software development</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink dark:text-white">
          Build. Scale. Deliver.
        </h1>
        <p className="mt-4 max-w-xl text-slate-soft">
          End-to-end software development — from MVPs to enterprise platforms — built with modern
          stacks and best practices.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark"
          >
            Start your project
          </Link>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-paper-alt py-14 dark:border-white/5 dark:bg-paper-darkAlt">
        <div className="container grid grid-cols-3 gap-8">
          {swStats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <section className="container py-20">
        <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Our software services</h2>
        <p className="mt-2 max-w-lg text-slate-soft">Five core areas where we deliver exceptional results.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {softwareServices.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-ink/8 bg-white p-8 dark:border-white/10 dark:bg-paper-darkAlt"
            >
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">{s.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tech?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/8 px-2.5 py-1 text-xs text-slate-soft dark:border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-emerald">
                Get started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Ready to build something great?"
        body="Tell us about your idea — from MVP to enterprise, we'll bring it to life."
        buttonLabel="Get a free quote"
      />
    </>
  );
}
