import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { publicNav, siteConfig } from "@/data/siteConfig";
import { siteCopy } from "@/data/siteCopy";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <BrandLogo size="sm" />
            <span>
              <span className="block font-semibold text-foreground">{siteConfig.name}</span>
              <span className="block text-sm text-muted">{siteConfig.school}</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            {siteCopy.mission}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Explore</h2>
          <div className="mt-4 grid gap-2">
            {publicNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-brand">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Connect</h2>
          <div className="mt-4 grid gap-3">
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand">
              <Mail aria-hidden className="size-4" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a href={siteConfig.externalLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand">
              <ExternalLink aria-hidden className="size-4" />
              <span>LinkedIn</span>
            </a>
            <a href={siteConfig.externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand">
              <ExternalLink aria-hidden className="size-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <div className="container-page flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Limitless Consulting. All rights reserved.</p>
          <p>Student organization website placeholder. Replace policies before launch.</p>
        </div>
      </div>
    </footer>
  );
}
