import { CheckCircle2 } from "lucide-react";
import { iconMap } from "@/components/common/icon-map";
import type { Service } from "@/types/content";

export function ServiceCard({
  service,
  showLongDescription = false,
}: {
  service: Service;
  showLongDescription?: boolean;
}) {
  const Icon = iconMap[service.icon];

  return (
    <article className="depth-card glow-border h-full rounded-lg border border-border bg-surface/90 p-6 shadow-subtle">
      <div className="flex size-12 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Icon aria-hidden className="size-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">
        {showLongDescription ? service.longDescription : service.shortDescription}
      </p>
      <ul className="mt-5 space-y-2">
        {service.exampleDeliverables.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground">
            <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
