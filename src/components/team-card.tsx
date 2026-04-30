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
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-subtle transition-transform hover:-translate-y-1">
      {person.image ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-surface-muted">
          <Image
            src={person.image}
            alt={`Portrait of ${person.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: person.imagePosition ?? "50% 28%" }}
          />
        </div>
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center rounded-md bg-[linear-gradient(135deg,#d9f0e4,#dceef3)] text-4xl font-semibold text-brand">
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
              className="rounded-md border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink aria-hidden className="size-4" />
            </a>
          ) : null}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-muted">
          <span className="rounded-md bg-surface-muted px-2 py-1">{person.category}</span>
          {person.year ? <span className="rounded-md bg-surface-muted px-2 py-1">{person.year}</span> : null}
          {person.major ? <span className="rounded-md bg-surface-muted px-2 py-1">{person.major}</span> : null}
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
            className="mt-5 inline-flex min-w-0 items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-accent"
          >
            <Mail aria-hidden className="size-4" />
            <span className="break-all">{person.email}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
