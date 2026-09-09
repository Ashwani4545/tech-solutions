"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields, humans don't.
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint || endpoint.includes("your_form_id")) {
      console.warn(
        "NEXT_PUBLIC_FORM_ENDPOINT is not configured. Set it in .env.local to a real Formspree/Web3Forms endpoint."
      );
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
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink dark:text-white">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald dark:border-white/15 dark:bg-paper-darkAlt dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink dark:text-white">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald dark:border-white/15 dark:bg-paper-darkAlt dark:text-white"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink dark:text-white">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald dark:border-white/15 dark:bg-paper-darkAlt dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="user_type" className="text-sm font-medium text-ink dark:text-white">
            I am a
          </label>
          <select
            id="user_type"
            name="user_type"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald dark:border-white/15 dark:bg-paper-darkAlt dark:text-white"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Student">Student</option>
            <option value="Company">Company</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink dark:text-white">
          Message / requirement
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe your project, requirement, or question..."
          className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald dark:border-white/15 dark:bg-paper-darkAlt dark:text-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit request"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-emerald" role="status">
          Thanks — your message is in. We&apos;ll reply within 48 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600" role="status">
          Something went wrong. Please email {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@infinitytechnexus.com"} directly, or try again.
        </p>
      )}
    </form>
  );
}
