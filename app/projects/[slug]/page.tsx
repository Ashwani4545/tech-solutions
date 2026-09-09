import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DomainProjectCard } from "@/components/DomainProjectCard";
import { CTASection } from "@/components/CTASection";
import { projectDomains } from "@/lib/data";

export function generateStaticParams() {
  return projectDomains.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const domain = projectDomains.find((d) => d.slug === params.slug);
  if (!domain) return {};
  return {
    title: domain.title,
    description: domain.summary,
  };
}

export default function ProjectDomainPage({ params }: { params: { slug: string } }) {
  const domain = projectDomains.find((d) => d.slug === params.slug);
  if (!domain) notFound();

  return (
    <>
      <section className="container py-20">
        <p className="text-sm font-medium text-emerald">Our work</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink dark:text-white">{domain.title}</h1>
        <p className="mt-4 max-w-xl text-slate-soft">{domain.summary}</p>
      </section>

      <section className="container pb-16">
        <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Ongoing projects</h2>
        <p className="mt-2 text-sm text-slate-soft">Projects currently in development.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domain.ongoing.map((p) => (
            <DomainProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-ink/5 bg-paper-alt py-16 dark:border-white/5 dark:bg-paper-darkAlt">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Completed projects</h2>
          <p className="mt-2 text-sm text-slate-soft">Successfully delivered projects.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domain.completed.map((p) => (
              <DomainProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a similar project in mind?"
        body="Tell us about your idea and we'll suggest the fastest path to impact."
        buttonLabel="Contact us"
      />
    </>
  );
}
