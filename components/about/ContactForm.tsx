"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { aboutContent } from "../../config/siteContent";
import { contactSchema, ContactFormData } from "../../config/contactSchema";

type FormStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormData) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error("Contact request failed");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mt-14 max-w-2xl scroll-mt-8">
      <h2 className="text-2xl font-bold">{aboutContent.contactForm.title}</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{aboutContent.contactForm.introduction}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold">{aboutContent.contactForm.nameLabel}</label>
          <input id="contact-name" type="text" autoComplete="name" {...register("name")} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-colors focus:border-[var(--accent)] dark:border-slate-700 dark:bg-slate-900" />
          {errors.name && <p className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold">{aboutContent.contactForm.emailLabel}</label>
          <input id="contact-email" type="email" autoComplete="email" {...register("email")} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-colors focus:border-[var(--accent)] dark:border-slate-700 dark:bg-slate-900" />
          {errors.email && <p className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold">{aboutContent.contactForm.messageLabel}</label>
          <textarea id="contact-message" rows={6} {...register("message")} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-colors focus:border-[var(--accent)] dark:border-slate-700 dark:bg-slate-900" />
          {errors.message && <p className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.message.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold !text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50">
          {isSubmitting ? aboutContent.contactForm.sendingLabel : aboutContent.contactForm.submitLabel}
        </button>
        {status === "success" && <p role="status" className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{aboutContent.contactForm.successMessage}</p>}
        {status === "error" && <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-300">{aboutContent.contactForm.errorMessage}</p>}
      </form>
    </section>
  );
}
