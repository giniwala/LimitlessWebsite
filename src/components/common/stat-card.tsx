import type { Stat } from "@/types/content";

export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="glass-panel rounded-lg p-5">
      <p className="font-mono text-4xl font-semibold text-[var(--neon)]">{stat.value}</p>
      <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
      {stat.description ? (
        <p className="mt-1 text-xs text-white/62">{stat.description}</p>
      ) : null}
    </div>
  );
}
