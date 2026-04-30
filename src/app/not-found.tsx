import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-lg rounded-lg border border-border bg-surface p-6 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-muted">
          The page may have moved, or the link may still be a placeholder.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white"
        >
          <ArrowLeft aria-hidden className="size-4" />
          <span>Back Home</span>
        </Link>
      </div>
    </main>
  );
}
