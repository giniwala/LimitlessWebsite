"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const inquiryType = String(formData.get("inquiryType") ?? "General inquiry");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Limitless Consulting: ${inquiryType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry type: ${inquiryType}\n\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a prepared message.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-foreground">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-semibold text-foreground">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold text-foreground">
        Inquiry Type
        <select
          name="inquiryType"
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground"
        >
          <option>Client inquiry</option>
          <option>Recruiting question</option>
          <option>Alumni or partnership</option>
          <option>General inquiry</option>
        </select>
      </label>
      <label className="mt-5 block text-sm font-semibold text-foreground">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full resize-y rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground"
          placeholder="Tell us about your founder question, Townhall idea, Workshop request, or recruiting note."
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-deep hover:bg-brand-deep"
      >
        <span>Prepare Email</span>
        <Send aria-hidden className="size-4" />
      </button>
      {status ? <p className="mt-4 text-sm text-accent">{status}</p> : null}
    </form>
  );
}
