import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Infinity Tech Nexus — get a free quote for your project.",
};

const infoCards = [
  { title: "Email", body: site.email },
  { title: "Response time", body: site.responseTime },
  { title: "Available", body: "Worldwide — remote first" },
];

export default function ContactPage() {
  return (
    <section className="container py-20">
      <p className="text-sm font-medium text-emerald">Reach out</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink dark:text-white">Get in touch</h1>
      <p className="mt-4 max-w-xl text-slate-soft">
        Tell us about your project or requirement. We&apos;ll get back to you {site.responseTime.toLowerCase()}.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {infoCards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-ink/8 bg-white p-6 text-center dark:border-white/10 dark:bg-paper-darkAlt"
          >
            <h3 className="font-display text-sm font-semibold text-ink dark:text-white">{c.title}</h3>
            <p className="mt-1.5 text-sm text-slate-soft">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 max-w-2xl rounded-2xl border border-ink/8 bg-white p-8 dark:border-white/10 dark:bg-paper-darkAlt">
        <ContactForm />
      </div>
    </section>
  );
}
