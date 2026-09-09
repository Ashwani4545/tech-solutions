import Link from "next/link";
import { HeroInfinity } from "@/components/HeroInfinity";
import { StatCounter } from "@/components/StatCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { businessServices, projectDomains, stats, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm font-medium text-emerald">Web · Data · Automation · AI</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl dark:text-white">
              Practical technology, built by people who ship.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-soft">
              We build web platforms, apps, and data products for businesses — and pair students
              with real projects and mentorship instead of tutorials.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark"
              >
                Start a project
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-ink/10 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-emerald/40 hover:text-emerald dark:border-white/15 dark:text-white"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <HeroInfinity />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-paper-alt py-14 dark:border-white/5 dark:bg-paper-darkAlt">
        <div className="container grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-white">Our services</h2>
          <p className="mt-3 text-slate-soft">
            End-to-end technology solutions for businesses, plus freelancing paths for students.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessServices.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Software development services"
        body="Web apps, mobile apps, SaaS, APIs, and UI/UX — built with modern stacks and best practices."
        buttonLabel="Explore software services"
        href="/software-development"
      />

      <section className="container py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-white">Recent projects</h2>
          <p className="mt-3 text-slate-soft">Explore our work across different technology domains.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {projectDomains.map((domain) => (
            <Link
              key={domain.slug}
              href={`/projects/${domain.slug}`}
              className="group rounded-2xl border border-ink/8 bg-white p-7 transition hover:border-emerald/30 dark:border-white/10 dark:bg-paper-darkAlt"
            >
              <h3 className="font-display text-lg font-semibold text-ink dark:text-white">{domain.title}</h3>
              <p className="mt-2 text-sm text-slate-soft">{domain.summary}</p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald">
                View projects
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/5 bg-paper-alt py-20 dark:border-white/5 dark:bg-paper-darkAlt">
        <div className="container">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold text-ink dark:text-white">What people say</h2>
            <p className="mt-3 text-slate-soft">Trusted by students and businesses alike.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to work together?"
        body="Whether you're a student looking for mentorship or a business needing tech solutions — let's connect."
        buttonLabel="Get in touch"
      />
    </>
  );
}
