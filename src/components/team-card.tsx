import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import type { TeamMember } from "@/types/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamCard({ person }: { person: TeamMember }) {
  return (
    <article className="group/team depth-card glow-border flex h-full flex-col rounded-lg border border-border bg-surface/90 p-5 shadow-subtle outline-none ring-offset-2 ring-offset-[var(--surface)] transition-[box-shadow,transform,border-color] focus-within:ring-2 focus-within:ring-accent/35">
      {person.image ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-muted">
          <Image
            src={person.image}
            alt={`Portrait of ${person.name}`}
            fill
            sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover motion-reduce:transform-none motion-reduce:transition-none motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:will-change-transform group-hover/team:scale-[1.04] group-focus-within/team:scale-[1.04]"
            style={{ objectPosition: person.imagePosition ?? "50% 28%" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-brand-deep/35 via-transparent to-transparent opacity-[0.72] motion-safe:transition-opacity motion-safe:duration-500 group-hover/team:opacity-[0.2] group-focus-within/team:opacity-[0.26]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-inset ring-transparent motion-safe:transition-[box-shadow,ring-color] motion-safe:duration-500 group-hover/team:ring-accent/38 group-hover/team:shadow-[0_22px_50px_rgb(15_143_106_/_0.13)] group-focus-within/team:ring-accent/45 group-focus-within/team:shadow-[0_22px_50px_rgb(15_143_106_/_0.14)] motion-reduce:transition-none motion-reduce:shadow-none motion-reduce:ring-accent/42 motion-reduce:group-hover/team:ring-accent/42"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg bg-[linear-gradient(135deg,#d9f0e4,#dceef3)] text-4xl font-semibold text-brand">
          {initials(person.name)}
        </div>
      )}
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
            <p className="mt-1 text-sm font-semibold text-accent">{person.role}</p>
          </div>
          {person.linkedin ? (
            <a
              href={person.linkedin}
              aria-label={`${person.name} LinkedIn profile`}
              className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink aria-hidden className="size-4" />
            </a>
          ) : null}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-muted">
          <span className="rounded-full bg-surface-muted px-2 py-1">{person.category}</span>
          {person.year ? <span className="rounded-full bg-surface-muted px-2 py-1">{person.year}</span> : null}
          {person.major ? <span className="rounded-full bg-surface-muted px-2 py-1">{person.major}</span> : null}
        </div>
        {person.bio ? (
          <p className="mt-4 flex-1 text-sm leading-6 text-muted">{person.bio}</p>
        ) : (
          <p className="mt-4 flex-1 text-sm leading-6 text-muted">
            Student consultant at Michigan State University contributing to Limitless projects, learning, and community.
          </p>
        )}
        {person.email ? (
          <a
            href={`mailto:${person.email}`}
            className="mt-5 inline-flex min-w-0 items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-accent focus-visible:rounded-md focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
          >
            <Mail aria-hidden className="size-4" />
            <span className="break-all">{person.email}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
