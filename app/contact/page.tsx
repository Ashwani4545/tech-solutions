import type { Metadata } from "next";
import { Suspense } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Infinity Techies about your project.",
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-28">
      <div className="container grid gap-16 md:grid-cols-[1fr_1.3fr]">
        <div>
          <FadeIn>
            <p className="text-sm font-medium text-cyan">Let&rsquo;s talk</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-4 font-display text-display-lg font-semibold text-white balance">
              Have an idea worth building?
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-sm text-ink-muted">
              Tell us what you&rsquo;re trying to achieve. We typically reply within a couple of
              business days.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 space-y-1 text-sm text-ink-muted">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Email</p>
              <p>{site.email}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </FadeIn>
      </div>
    </section>
  );
}
