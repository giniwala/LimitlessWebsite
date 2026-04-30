import { ArrowRight, BriefcaseBusiness, LogIn } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { heroFallbackImage, heroImages } from "@/data/hero";
import { siteConfig } from "@/data/siteConfig";
import { siteCopy } from "@/data/siteCopy";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";

export function Hero() {
  return (
    <section className="relative flex min-h-[76vh] items-center overflow-hidden bg-brand-deep text-white">
      <HeroSlideshow images={heroImages} fallbackImage={heroFallbackImage} />
      <div className="absolute inset-0 bg-brand-deep/75" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-deep/95 to-transparent" />

      <div className="container-page relative z-10 py-24">
        <div className="max-w-3xl animate-reveal">
          <p className="mb-4 inline-flex rounded-md border border-white/22 bg-white/10 px-3 py-2 text-sm font-semibold text-brand-soft backdrop-blur">
            {siteCopy.home.heroEyebrow}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] md:text-7xl">
            {siteCopy.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            {siteCopy.home.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.externalLinks.applyNow} variant="light" icon={ArrowRight}>
              Apply Now
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" icon={BriefcaseBusiness} className="border-white/30 bg-white/8 text-white hover:bg-white hover:text-brand-deep">
              Work With Us
            </ButtonLink>
            <ButtonLink href={siteConfig.externalLinks.memberPortalLogin} variant="ghost" icon={LogIn} className="border-white/18 text-white hover:bg-white/12">
              Member Login
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
