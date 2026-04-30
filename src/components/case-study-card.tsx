import { ArrowRight, Building2 } from "lucide-react";
import type { Engagement } from "@/types/content";

export function CaseStudyCard({ study }: { study: Engagement }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-subtle">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-md bg-surface-muted text-brand">
          <Building2 aria-hidden className="size-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{study.name}</h3>
          <p className="text-sm text-muted">{study.industry}</p>
        </div>
      </div>
      <div className="mt-6 space-y-4 text-sm leading-6 text-muted">
        <p>
          <span className="font-semibold text-foreground">Problem: </span>
          {study.problem}
        </p>
        <p>
          <span className="font-semibold text-foreground">Approach: </span>
          {study.approach}
        </p>
        <div>
          <p className="font-semibold text-foreground">Deliverables</p>
          <ul className="mt-2 space-y-2">
            {study.deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <ArrowRight aria-hidden className="mt-1 size-3.5 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 rounded-md border border-brand-soft bg-brand-soft/55 p-4 text-sm leading-6 text-brand-deep">
        {study.impact}
      </p>
      {study.sourceLabel ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-muted">
          Source basis: {study.sourceLabel}
        </p>
      ) : null}
    </article>
  );
}
