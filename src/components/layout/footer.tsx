import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";
import { SocialLinks } from "@/components/common/social-links";
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
          <p className="mt-4 text-sm leading-6 text-muted">
            Follow Limitless for Townhalls, recruiting updates, and student founder highlights.
          </p>
          <SocialLinks className="mt-4" showEmail variant="compact" />
        </div>
      </div>
      <div className="border-t border-border py-5">
        <div className="container-page flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Limitless Consulting. All rights reserved.</p>
          <p>Contact us at {siteConfig.contact.email}</p>
        </div>
      </div>
    </footer>
  );
}
