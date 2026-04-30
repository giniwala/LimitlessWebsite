import type { Metadata } from "next";
import { CalendarDays, Megaphone, Star, UsersRound } from "lucide-react";
import { ResourceCard } from "@/components/portal/resource-card";
import { announcements, portalEvents, portalResources } from "@/data/portal";
import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import { canAccess, normalizeRole, roleLabels } from "@/utils/roles";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Member Portal",
  description: "Member-only dashboard for Limitless Consulting announcements, files, schedules, and resources.",
};

export const dynamic = "force-dynamic";

export default async function PortalPage() {
  if (!hasSupabaseConfig) {
    redirect("/login?setup=required&next=/portal");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const role = normalizeRole(user?.app_metadata?.role ?? user?.user_metadata?.role);
  const visibleAnnouncements = announcements.filter((item) => canAccess(role, item.audience));
  const visibleEvents = portalEvents.filter((item) => canAccess(role, item.audience));
  const visibleResources = portalResources.filter((item) => canAccess(role, item.roles));
  const handbook = visibleResources.find((item) => item.title === "Member Handbook");

  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-border bg-brand-deep p-6 text-white shadow-subtle md:p-8">
        <p className="text-sm font-semibold uppercase text-brand-soft">Dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
          Welcome back, {user?.user_metadata?.full_name || user?.email || "member"}.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78">
          This starter portal is wired for Supabase Auth and shows role-aware placeholder content for {roleLabels[role].toLowerCase()} access.
        </p>
      </section>

      <section id="announcements" className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
          <div className="flex items-center gap-3">
            <Megaphone aria-hidden className="size-5 text-accent" />
            <h2 className="text-xl font-semibold text-foreground">Announcements</h2>
          </div>
          <div className="mt-5 grid gap-4">
            {visibleAnnouncements.map((item) => (
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
            {visibleResources.slice(0, 4).map((resource) => (
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
          <h2 className="text-xl font-semibold text-foreground">Project and Team Schedule</h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {visibleEvents.map((event) => (
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
                Placeholder assignment. Add project manager, consultants, client, weekly meeting time, and current milestone.
              </p>
            </article>
          ))}
        </div>
      </section>

      {handbook ? (
        <section className="rounded-lg border border-brand-soft bg-brand-soft/55 p-6">
          <h2 className="text-xl font-semibold text-brand-deep">Member handbook placeholder</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-deep">
            Link this section to the official handbook once it exists. For now, the resource card below points to a placeholder.
          </p>
        </section>
      ) : null}

      <section id="resources">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase text-accent">Resources</p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">Internal files and templates</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleResources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}
