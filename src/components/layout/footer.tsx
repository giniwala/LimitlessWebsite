import Link from "next/link";
import { BrandWatermark } from "@/components/common/brand-watermark";
import { BrandLogo } from "@/components/layout/brand-logo";
import { SocialLinks } from "@/components/common/social-links";
import { publicNav, siteConfig } from "@/data/siteConfig";
import { siteCopy } from "@/data/siteCopy";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t border-white/10 bg-[#030806] text-white">
      <BrandWatermark surface="dark" position="right" className="translate-y-28 lg:right-[-12%]" />
      <div className="container-page relative z-10 grid gap-12 py-16 md:grid-cols-[1.25fr_0.8fr_1fr] lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <BrandLogo size="sm" />
            <span>
              <span className="block font-semibold text-white">{siteConfig.name}</span>
              <span className="block text-sm text-white/58">{siteConfig.school}</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-4xl font-semibold leading-[1.05] md:text-5xl">
            Student consulting for <span className="text-gradient-light glow-text">student entrepreneurs.</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/62">
            {siteCopy.mission}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-brand-soft">Explore</h2>
          <div className="mt-4 grid gap-2">
            {publicNav.map((item) => (
              <Link key={item.href} href={item.href} className="link-underline w-fit text-sm text-white/62 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-brand-soft">Connect</h2>
          <p className="mt-4 text-sm leading-6 text-white/62">
            Follow Limitless for Townhalls, recruiting updates, and student founder highlights.
          </p>
          <SocialLinks className="mt-4" showEmail variant="light" />
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-2 text-xs text-white/54 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Limitless Consulting. All rights reserved.</p>
          <p>East Lansing, MI</p>
        </div>
      </div>
    </footer>
  );
}
