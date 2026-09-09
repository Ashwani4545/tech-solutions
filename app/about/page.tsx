import type { Metadata } from "next";
import { StatCounter } from "@/components/StatCounter";
import { CTASection } from "@/components/CTASection";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Infinity Tech Nexus — bridging students and industry through real-world projects and mentorship.",
};

const values = [
  {
    title: "Our vision",
    body: "Build industry-ready talent through practical exposure and real-world project experience that bridges the gap between academia and industry.",
  },
  {
    title: "Our mission",
    body: "Deliver affordable, high-quality tech solutions globally while empowering the next generation of developers, designers, and data scientists.",
  },
  {
    title: "Our approach",
    body: "Learn by building. Build for impact. We create solutions that make a real difference for businesses and students alike.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container py-20">
        <p className="text-sm font-medium text-emerald">Who we are</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink dark:text-white">
          Who We Are
        </h1>
        <p className="mt-4 max-w-2xl text-slate-soft">
          We are a technology-focused initiative bridging the gap between students and industry by
          delivering real-world projects, mentorship, and scalable tech solutions.
        </p>
      </section>

      <section className="border-y border-ink/5 bg-paper-alt py-14 dark:border-white/5 dark:bg-paper-darkAlt">
        <div className="container grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <section className="container py-20">
        <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Our core values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-ink/8 bg-white p-7 dark:border-white/10 dark:bg-paper-darkAlt"
            >
              <h3 className="font-display text-lg font-semibold text-ink dark:text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/5 bg-paper-alt py-20 dark:border-white/5 dark:bg-paper-darkAlt">
        <div className="container max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Our team</h2>
          <p className="mt-4 leading-relaxed text-slate-soft">
            We are a diverse group of student designers, developers, and enthusiasts passionate about
            technology and education. Our team combines industry expertise with a commitment to
            nurturing talent and delivering excellence.
          </p>
        </div>
      </section>

      <CTASection
        heading="Ready to work together?"
        body="Whether you're a student looking for mentorship or a business needing tech solutions — let's connect."
      />
    </>
  );
}
