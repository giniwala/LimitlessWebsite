"use client";

import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-lg rounded-lg border border-border bg-surface p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase text-danger">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">This page could not load.</h1>
        <p className="mt-4 text-sm leading-6 text-muted">
          {error.message || "Try refreshing the page. If the issue continues, check the dev server logs."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white"
        >
          <span>Try Again</span>
          <RefreshCcw aria-hidden className="size-4" />
        </button>
      </div>
    </main>
  );
}
