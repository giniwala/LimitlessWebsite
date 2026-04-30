import { ExternalLink } from "lucide-react";
import { iconMap } from "@/components/common/icon-map";
import type { PortalResource } from "@/types/content";
import { roleLabels } from "@/utils/roles";

export function ResourceCard({ resource }: { resource: PortalResource }) {
  const Icon = iconMap[resource.icon];

  return (
    <a
      href={resource.href}
      className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-subtle transition-transform hover:-translate-y-1 hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-md bg-surface-muted text-brand">
          <Icon aria-hidden className="size-5" />
        </div>
        <ExternalLink aria-hidden className="size-4 text-muted transition-colors group-hover:text-accent" />
      </div>
      <div className="mt-5 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-foreground">{resource.title}</h3>
          <span className="rounded-md bg-brand-soft px-2 py-1 text-xs font-semibold text-brand-deep">
            {resource.type}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{resource.description}</p>
      </div>
      <p className="mt-5 text-xs text-muted">
        Visible to {resource.roles.map((role) => roleLabels[role]).join(", ")}
      </p>
    </a>
  );
}
