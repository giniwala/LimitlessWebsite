import Link from "next/link";
import { redirect } from "next/navigation";
import { LogOut, ShieldCheck } from "lucide-react";
import { portalNav, siteConfig } from "@/data/siteConfig";
import { createClient } from "@/lib/supabase/server";
import type { Role } from "@/types/content";
import { roleLabels } from "@/utils/roles";

type PortalLayoutProps = {
  children: React.ReactNode;
  userName: string;
  userEmail: string;
  role: Role;
};

async function signOut() {
  "use server";

  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export function PortalLayout({ children, userName, userEmail, role }: PortalLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="container-page flex min-h-16 flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex size-10 items-center justify-center rounded-md bg-brand text-base font-semibold text-white">
              LC
            </Link>
            <div>
              <p className="font-semibold text-foreground">{siteConfig.name} Portal</p>
              <p className="text-sm text-muted">{userName || userEmail}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border bg-surface-muted px-3 text-sm font-semibold text-foreground">
              <ShieldCheck aria-hidden className="size-4 text-accent" />
              {roleLabels[role]}
            </span>
            <form action={signOut}>
              <button
                type="submit"
                className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-semibold text-muted transition-colors hover:border-danger hover:text-danger sm:w-auto"
              >
                <span>Sign Out</span>
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
