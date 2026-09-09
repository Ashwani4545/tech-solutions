import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { businessServices, softwareServices, studentServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, app development, DevOps, IoT, data & automation, branding, and student mentorship services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container py-20">
        <p className="text-sm font-medium text-emerald">What we do</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink dark:text-white">
          Technology solutions for businesses, and real learning for students.
        </h1>
      </section>

      <section className="container pb-20">
        <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">For companies</h2>
        <p className="mt-2 max-w-lg text-slate-soft">Scalable, modern technology solutions to grow your business.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessServices.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="border-y border-ink/5 bg-paper-alt py-20 dark:border-white/5 dark:bg-paper-darkAlt">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Software development</h2>
          <p className="mt-2 max-w-lg text-slate-soft">End-to-end software solutions built with modern stacks.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {softwareServices.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">For students</h2>
        <p className="mt-2 max-w-lg text-slate-soft">Build real skills through hands-on experience and mentorship.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studentServices.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Ready to get started?"
        body="Tell us your requirement and we'll connect with you within 48 hours."
      />
    </>
  );
}
