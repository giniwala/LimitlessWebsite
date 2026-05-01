import { ArrowRight, BriefcaseBusiness, DoorOpen } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { heroFallbackImage, heroImages } from "@/data/hero";
import { siteConfig } from "@/data/siteConfig";
import { siteCopy } from "@/data/siteCopy";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";

export function Hero() {
  const [heroLead, ...heroTailParts] = siteCopy.home.heroTitle.split(" ");
  const heroTail = heroTailParts.join(" ");

  return (
    <section className="-mt-[var(--navbar-stack-height)] grain relative isolate z-0 flex min-h-[calc(100dvh-var(--navbar-stack-height)+1px)] items-center overflow-hidden bg-brand-deep pt-[calc(var(--navbar-stack-height)+6rem)] pb-24 text-white md:pb-28">
      <HeroSlideshow images={heroImages} fallbackImage={heroFallbackImage} />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgb(3_8_6_/_0.96),rgb(7_21_16_/_0.82)_44%,rgb(24_77_58_/_0.54))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(3_8_6_/_0.2),rgb(3_8_6_/_0.78))]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-deep to-transparent" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteConfig.brand.logoPath}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-20 hidden size-[520px] opacity-[0.08] mix-blend-screen motion-safe:animate-infinity-float lg:block"
      />

      <div className="container-page relative z-10 mx-auto grid max-w-4xl animate-reveal gap-10 lg:justify-items-start">
        <div className="w-full">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-soft backdrop-blur">
            <span aria-hidden className="h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_22px_rgb(54_240_160_/_0.8)]" />
            <span>{siteCopy.home.heroEyebrow}</span>
          </p>
          <h1 className="text-6xl font-semibold leading-[0.95] md:text-8xl">
            <span className="block">{heroLead}</span>
            {heroTail ? <span className="text-gradient-light glow-text block">{heroTail}</span> : null}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            {siteCopy.home.heroDescription}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={siteConfig.externalLinks.applyNow} variant="light" icon={ArrowRight}>
              Apply Now
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              icon={BriefcaseBusiness}
              className="border-white/30 bg-white/8 text-white hover:bg-white hover:text-brand-deep"
            >
              Work With Us
            </ButtonLink>
            <ButtonLink href={siteConfig.externalLinks.memberPortal} variant="ghost" icon={DoorOpen}>
              Member Portal
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
