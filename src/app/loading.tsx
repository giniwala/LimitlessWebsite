export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-sm rounded-lg border border-border bg-surface p-6 text-center shadow-subtle">
        <div className="mx-auto size-10 animate-spin rounded-md border-2 border-brand-soft border-t-brand" />
        <p className="mt-4 text-sm font-semibold text-muted">Loading Limitless Consulting...</p>
      </div>
    </div>
  );
}
