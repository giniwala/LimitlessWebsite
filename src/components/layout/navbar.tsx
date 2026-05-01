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
    <header className="sticky top-0 z-[60] bg-transparent px-3 py-3">
      <nav className="container-page flex min-h-16 items-center justify-between gap-4 rounded-full border border-white/12 bg-brand-deep/92 px-4 text-white shadow-soft backdrop-blur-xl" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <BrandLogo size="sm" />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-white">{siteConfig.name}</span>
            <span className="mt-1 text-xs text-white/58">{siteConfig.school}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {publicNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium text-white/62 transition-colors hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/12 text-white",
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href={siteConfig.externalLinks.memberPortal}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-brand-deep transition-colors hover:border-brand-soft hover:bg-brand-soft"
          >
            <span>Member Portal</span>
            <DoorOpen aria-hidden className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white xl:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="container-page mt-3 rounded-lg border border-white/12 bg-brand-deep/96 p-3 text-white shadow-soft backdrop-blur-xl xl:hidden">
          <div className="grid gap-2 py-4">
            {publicNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-3 text-sm font-semibold text-white/68 hover:bg-white/10 hover:text-white",
                  pathname === item.href && "bg-white/12 text-white",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.externalLinks.memberPortal}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-brand-deep"
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
