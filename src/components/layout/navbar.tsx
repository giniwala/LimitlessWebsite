"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorOpen, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { publicNav, siteConfig } from "@/data/siteConfig";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <BrandLogo size="sm" />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-foreground">{siteConfig.name}</span>
            <span className="mt-1 text-xs text-muted">{siteConfig.school}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {publicNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground",
                pathname === item.href && "bg-surface-muted text-foreground",
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.externalLinks.memberPortal}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-deep hover:bg-brand-deep"
          >
            <span>Member Portal</span>
            <DoorOpen aria-hidden className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-foreground lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {publicNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold text-muted hover:bg-surface-muted hover:text-foreground",
                  pathname === item.href && "bg-surface-muted text-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.externalLinks.memberPortal}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              <span>Member Portal</span>
              <DoorOpen aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
