"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";
import { aboutContent } from "../../config/siteContent";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const turnstileToken = String(formData.get("cf-turnstile-response") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
          turnstileToken,
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mt-14 max-w-2xl">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <h2 className="text-2xl font-bold">{aboutContent.contactForm.title}</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {aboutContent.contactForm.introduction}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold">
            {aboutContent.contactForm.nameLabel}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-colors focus:border-[var(--accent)] dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold">
            {aboutContent.contactForm.emailLabel}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-colors focus:border-[var(--accent)] dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold">
            {aboutContent.contactForm.messageLabel}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-colors focus:border-[var(--accent)] dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {siteKey ? (
          <div className="cf-turnstile" data-sitekey={siteKey} />
        ) : (
          <p className="text-sm text-amber-700 dark:text-amber-300">
            {aboutContent.contactForm.unavailableMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending" || !siteKey}
          className="rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold !text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending"
            ? aboutContent.contactForm.sendingLabel
            : aboutContent.contactForm.submitLabel}
        </button>

        {status === "success" && (
          <p role="status" className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            {aboutContent.contactForm.successMessage}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-300">
            {aboutContent.contactForm.errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}
