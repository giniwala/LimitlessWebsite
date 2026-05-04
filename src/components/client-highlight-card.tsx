import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { ClientHighlight } from "@/types/content";

type ClientHighlightCardProps = {
  client: ClientHighlight;
  showHighlights?: boolean;
};

export function ClientHighlightCard({ client, showHighlights = true }: ClientHighlightCardProps) {
  return (
    <article className="group depth-card glow-border flex h-full flex-col rounded-lg border border-border bg-surface/90 p-6 shadow-subtle">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white shadow-subtle">
            {client.logoSrc ? (
              <Image
                src={client.logoSrc}
                alt={client.logoAlt ?? `${client.name} logo`}
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            ) : (
              <span className="px-2 text-center text-sm font-semibold text-brand-deep">
                {client.name}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-foreground">{client.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase text-accent">{client.category}</p>
          </div>
        </div>
        {client.linkedInUrl ? (
          <a
            href={client.linkedInUrl}
            aria-label={`Open ${client.name} LinkedIn page`}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink aria-hidden className="size-4" />
          </a>
        ) : null}
      </div>

      <p className="mt-5 text-sm leading-6 text-muted">{client.shortDescription}</p>

      {showHighlights ? (
        <ul className="mt-5 flex flex-col items-start gap-2">
          {client.publicHighlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-brand-soft bg-brand-soft/55 px-2.5 py-1.5 text-xs font-semibold text-brand-deep"
            >
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      {client.websiteUrl ? (
        <div className="mt-6">
          <a
            href={client.websiteUrl}
            className="link-underline inline-flex min-h-10 items-center justify-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{client.primaryLinkLabel ?? "Visit Website"}</span>
            <ExternalLink aria-hidden className="size-4" />
          </a>
        </div>
      ) : null}
    </article>
  );
}
