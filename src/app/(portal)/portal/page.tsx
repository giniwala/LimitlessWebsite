import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, DoorOpen, Megaphone, Star, UsersRound } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { PortalLayout } from "@/components/portal/portal-layout";
import { ResourceCard } from "@/components/portal/resource-card";
import { announcements, portalEvents, portalResources } from "@/data/portal";
import { siteConfig } from "@/data/siteConfig";
import { hasMemberPortalAccess, hasMemberPortalPassword } from "@/lib/member-portal";
import type { PortalResource } from "@/types/content";
import { unlockMemberPortal } from "@/app/(portal)/portal/actions";

export const metadata: Metadata = {
  title: "Member Portal",
  description: "Shared member resource portal for Limitless Consulting announcements, files, schedules, and links.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

type PortalPageProps = {
  searchParams?: Promise<{
    error?: string | string[];
  }>;
};

const sectionOrder: PortalResource["section"][] = [
  "Important Links",
  "Files / Resources",
  "Meeting Materials",
  "Consulting Toolkit",
  "Templates",
  "Training Resources",
  "Internal Docs",
  "Semester Timeline",
];

function errorMessage(error?: string | string[]) {
  const value = Array.isArray(error) ? error[0] : error;

  if (value === "incorrect") {
    return "That password did not work. Check the current semester password and try again.";
  }

  if (value === "not-configured") {
    return "The portal password has not been configured yet. Add MEMBER_PORTAL_PASSWORD in Vercel and .env.local.";
  }

  return null;
}

function PasswordGate({ error }: { error?: string | string[] }) {
  const message = errorMessage(error);
  const isConfigured = hasMemberPortalPassword();

  return (
    <main className="min-h-screen bg-background">
      <div className="container-page grid min-h-screen gap-10 py-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <section className="min-w-0">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand">
            <ArrowLeft aria-hidden className="size-4" />
            Back to website
          </Link>
          <div className="mt-10 max-w-xl">
            <BrandLogo size="md" />
            <p className="mt-6 text-sm font-semibold uppercase text-accent">Member portal</p>
            <h1 className="mt-3 text-3xl font-semibold text-foreground md:text-5xl">
              Shared resources for current Limitless members.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">
              Enter the current semester password to access meeting materials, consulting templates, internal links, and member resources.
            </p>
            <p className="mt-5 text-sm text-muted">
              Public website content stays open. This portal is only for internal organization materials.
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="flex size-12 items-center justify-center rounded-md bg-brand text-white">
            <DoorOpen aria-hidden className="size-6" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-foreground">Enter portal password</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            The shared password is stored server-side and can be rotated each semester.
          </p>

          {!isConfigured ? (
            <div className="mt-5 rounded-md border border-accent/25 bg-surface-muted p-4 text-sm leading-6 text-muted">
              Add <code className="rounded bg-white px-1.5 py-1">MEMBER_PORTAL_PASSWORD</code> to enable portal access.
            </div>
          ) : null}

          <form action={unlockMemberPortal} className="mt-6 space-y-4">
            <label className="block text-sm font-semibold text-foreground">
              Semester password
              <input
                required
                name="password"
                type="password"
                autoComplete="current-password"
                className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground"
                placeholder="Enter shared password"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-deep hover:bg-brand-deep"
            >
              <span>Open Member Portal</span>
              <DoorOpen aria-hidden className="size-4" />
            </button>
          </form>

          {message ? <p className="mt-4 text-sm font-semibold text-danger">{message}</p> : null}
          <p className="mt-5 text-xs leading-5 text-muted">
            Contact {siteConfig.contact.email} if you are a current member and do not know the password.
          </p>
        </section>
      </div>
    </main>
  );
}

function ResourcesBySection() {
  return (
    <div className="grid gap-8">
      {sectionOrder.map((section) => {
        const resources = portalResources.filter((resource) => resource.section === section);

        if (resources.length === 0) {
          return null;
        }

        return (
          <section key={section}>
            <div className="mb-4 flex items-center gap-3">
              <Star aria-hidden className="size-5 text-accent" />
              <h2 className="text-xl font-semibold text-foreground">{section}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard key={resource.title} resource={resource} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default async function PortalPage({ searchParams }: PortalPageProps) {
  const hasAccess = await hasMemberPortalAccess();
  const params = searchParams ? await searchParams : {};

  if (!hasAccess) {
    return <PasswordGate error={params.error} />;
  }

  return (
    <PortalLayout>
      <div className="space-y-8">
        <section className="rounded-lg border border-border bg-brand-deep p-6 text-white shadow-subtle md:p-8">
          <p className="text-sm font-semibold uppercase text-brand-soft">Dashboard</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Welcome to the member portal.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78">
            Use this page for current member links, announcements, templates, meeting materials, and semester resources.
          </p>
        </section>

        <section id="announcements" className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
            <div className="flex items-center gap-3">
              <Megaphone aria-hidden className="size-5 text-accent" />
              <h2 className="text-xl font-semibold text-foreground">Announcements</h2>
            </div>
            <div className="mt-5 grid gap-4">
              {announcements.map((item) => (
                <article key={item.title} className="rounded-md border border-border bg-background p-4">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 font-mono text-xs text-accent">{item.date}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
            <div className="flex items-center gap-3">
              <Star aria-hidden className="size-5 text-accent-warm" />
              <h2 className="text-xl font-semibold text-foreground">Important Links</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {portalResources
                .filter((resource) => resource.section === "Important Links")
                .slice(0, 5)
                .map((resource) => (
                  <a key={resource.title} href={resource.href} className="rounded-md border border-border bg-background p-4 text-sm font-semibold text-foreground hover:border-accent">
                    {resource.title}
                  </a>
                ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
          <div className="flex items-center gap-3">
            <CalendarDays aria-hidden className="size-5 text-accent" />
            <h2 className="text-xl font-semibold text-foreground">Semester Timeline</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {portalEvents.map((event) => (
              <article key={event.title} className="rounded-md border border-border bg-background p-4">
                <p className="font-semibold text-foreground">{event.title}</p>
                <p className="mt-2 text-sm text-muted">{event.date}</p>
                <p className="mt-1 text-sm text-muted">{event.time}</p>
                <p className="mt-1 text-sm text-muted">{event.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
          <div className="flex items-center gap-3">
            <UsersRound aria-hidden className="size-5 text-accent" />
            <h2 className="text-xl font-semibold text-foreground">Engagement Team Assignments</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Team Alpha", "Team Green", "Team Venture"].map((team) => (
              <article key={team} className="rounded-md border border-border bg-background p-4">
                <p className="font-semibold text-foreground">{team}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Team details are shared through the current semester workspace, including project manager, meeting rhythm, and active milestone.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="resources">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase text-accent">Resources</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">Internal files and templates</h2>
          </div>
          <ResourcesBySection />
        </section>
      </div>
    </PortalLayout>
  );
}
