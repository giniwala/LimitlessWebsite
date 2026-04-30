import type { Stat } from "@/types/content";

export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5 shadow-subtle">
      <p className="font-mono text-4xl font-semibold text-brand">{stat.value}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
      {stat.description ? (
        <p className="mt-1 text-xs text-muted">{stat.description}</p>
      ) : null}
    </div>
  );
}
