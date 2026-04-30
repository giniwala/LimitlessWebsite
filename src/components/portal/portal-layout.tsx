import Link from "next/link";
import { DoorOpen, LogOut } from "lucide-react";
import { portalNav, siteConfig } from "@/data/siteConfig";
import { logoutMemberPortal } from "@/app/(portal)/portal/actions";
import { BrandLogo } from "@/components/layout/brand-logo";

type PortalLayoutProps = {
  children: React.ReactNode;
};

export function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="container-page flex min-h-16 flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <BrandLogo size="sm" />
              <span className="sr-only">Back to public website</span>
            </Link>
            <div>
              <p className="font-semibold text-foreground">{siteConfig.name} Portal</p>
              <p className="text-sm text-muted">Current member resources</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border bg-surface-muted px-3 text-sm font-semibold text-foreground">
              <DoorOpen aria-hidden className="size-4 text-accent" />
              Shared access
            </span>
            <form action={logoutMemberPortal}>
              <button
                type="submit"
                className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-semibold text-muted transition-colors hover:border-danger hover:text-danger sm:w-auto"
              >
                <span>Log Out</span>
                <LogOut aria-hidden className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="container-page grid gap-8 py-8 lg:grid-cols-[230px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav className="rounded-lg border border-border bg-surface p-2 shadow-subtle" aria-label="Member navigation">
            {portalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-3 text-sm font-semibold text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
