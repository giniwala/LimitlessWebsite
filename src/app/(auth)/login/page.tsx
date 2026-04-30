import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { LoginForm } from "@/components/portal/login-form";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Member Login",
  description: "Log in to the Limitless Consulting member portal.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page grid min-h-screen gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section className="min-w-0">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand">
            <ArrowLeft aria-hidden className="size-4" />
            Back to website
          </Link>
          <div className="mt-10 max-w-xl">
            <div className="flex size-12 items-center justify-center rounded-md bg-brand text-white">
              <ShieldCheck aria-hidden className="size-6" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase text-accent">Member portal</p>
            <h1 className="mt-3 text-3xl font-semibold text-foreground md:text-5xl">
              Sign in to access internal resources.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">
              Use this portal for announcements, schedules, project files, templates, and member-only links. New members should be added through Supabase Auth once the project is configured.
            </p>
            <p className="mt-5 text-sm text-muted">
              Organization: {siteConfig.name} at {siteConfig.school}
            </p>
          </div>
        </section>
        <Suspense fallback={<div className="rounded-lg border border-border bg-surface p-6">Loading login...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
