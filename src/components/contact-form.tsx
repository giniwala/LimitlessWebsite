"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

type SubmitState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const inquiryType = String(formData.get("inquiryType") ?? "");
    const message = String(formData.get("message") ?? "");
    const website = String(formData.get("website") ?? "");

    setSubmitState({ kind: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, inquiryType, message, website }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; code?: string };

      if (res.ok && data.ok) {
        form.reset();
        setSubmitState({ kind: "success" });
        return;
      }

      const msg =
        typeof data.error === "string"
          ? data.error
          : "Something went wrong. Please try again or email us directly.";

      const withMail =
        data.code === "EMAIL_NOT_CONFIGURED" ? `${msg} ${siteConfig.contact.email}` : msg;
      setSubmitState({ kind: "error", message: withMail });
    } catch {
      setSubmitState({
        kind: "error",
        message: "Could not reach the server. Check your connection or email us directly.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative glow-border rounded-lg border border-border bg-surface p-6 shadow-subtle"
      aria-describedby="contact-form-helper"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-foreground">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            disabled={submitState.kind === "loading"}
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground disabled:opacity-60"
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
            disabled={submitState.kind === "loading"}
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground disabled:opacity-60"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="absolute -left-[10000px] top-0 h-1 w-1 overflow-hidden" aria-hidden>
        <label>
          Leave blank
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="h-1 w-full" />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-foreground">
        Inquiry Type
        <select
          name="inquiryType"
          disabled={submitState.kind === "loading"}
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground disabled:opacity-60"
        >
          <option value="">Select a topic (optional)</option>
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
          disabled={submitState.kind === "loading"}
          className="mt-2 w-full resize-y rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground disabled:opacity-60"
          placeholder="Tell us about your founder question, Townhall idea, Workshop request, or recruiting note."
        />
      </label>
      <button
        type="submit"
        disabled={submitState.kind === "loading"}
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-deep hover:bg-brand-deep disabled:pointer-events-none disabled:opacity-60"
      >
        {submitState.kind === "loading" ? (
          <>
            <Loader2 aria-hidden className="size-4 animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send aria-hidden className="size-4" />
          </>
        )}
      </button>

      <p id="contact-form-helper" className="mt-4 text-xs leading-relaxed text-muted">
        Messages are submitted through this site first.{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-accent underline underline-offset-2 hover:text-brand">
          Email {siteConfig.contact.email} directly
        </a>{" "}
        if you prefer your own inbox.
      </p>

      {submitState.kind === "success" ? (
        <p className="mt-4 text-sm font-medium text-accent" role="status">
          Thanks — your message was sent.
        </p>
      ) : null}
      {submitState.kind === "error" ? (
        <p className="mt-4 text-sm text-danger" role="alert">
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}