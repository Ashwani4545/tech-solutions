"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const params = useSearchParams();
  const isStudent = params.get("type") === "student";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("company_website")) {
      // honeypot
      setStatus("success");
      form.reset();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint || endpoint.includes("your_form_id")) {
      console.warn("NEXT_PUBLIC_FORM_ENDPOINT is not configured.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-white outline-none transition focus:border-cyan"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-white outline-none transition focus:border-cyan"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Company / Institution (optional)
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-white outline-none transition focus:border-cyan"
          />
        </div>
        <div>
          <label htmlFor="inquiry_type" className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            I&rsquo;m reaching out as a
          </label>
          <select
            id="inquiry_type"
            name="inquiry_type"
            defaultValue={isStudent ? "Student" : ""}
            required
            className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-white outline-none transition focus:border-cyan"
          >
            <option value="" disabled className="bg-base">
              Select one
            </option>
            <option value="Business" className="bg-base">Business / Organization</option>
            <option value="Startup" className="bg-base">Startup / Founder</option>
            <option value="Student" className="bg-base">Student</option>
            <option value="Other" className="bg-base">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-white outline-none transition focus:border-cyan"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-4 text-sm font-semibold text-base transition-all duration-300 ease-premium hover:bg-cyan-bright disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Start a Conversation"} <span aria-hidden>→</span>
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-cyan" role="status">
          Thanks — your message is in. We&rsquo;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-400" role="status">
          Something went wrong. Please email us directly instead.
        </p>
      )}
    </form>
  );
}
