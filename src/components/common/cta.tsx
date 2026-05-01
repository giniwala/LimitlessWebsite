import { ArrowRight, Mail } from "lucide-react";
import { LogoMotionPanel } from "@/components/brand/logo-motion-panel";
import { BrandWatermark } from "@/components/common/brand-watermark";
import { ButtonLink } from "@/components/common/button-link";
import { SocialLinks } from "@/components/common/social-links";
import { siteConfig } from "@/data/siteConfig";

type CTAProps = {
  title?: string;
  description?: string;
};

export function CTA({
  title = "Ready to build something practical?",
  description = "Whether you are a student founder looking for support or a student ready to learn by doing, Limitless Consulting is built around real problems and useful work.",
}: CTAProps) {
  return (
    <section className="section-dark grain relative overflow-hidden py-16 text-white md:py-20">
      <BrandWatermark surface="dark" position="left" className="-top-20 translate-x-[-20%] lg:translate-x-0" />
      <div className="container-page relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.45fr_0.55fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase text-brand-soft">
            <span aria-hidden className="h-px w-8 bg-brand-soft/70" />
            Get started
          </p>
          <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
            {description}
          </p>
        </div>
        <LogoMotionPanel className="hidden lg:block" />
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <ButtonLink href={siteConfig.externalLinks.applyNow} variant="light" icon={ArrowRight}>
            Apply Now
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" icon={Mail} className="border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-deep">
            Work With Us
          </ButtonLink>
        </div>
        <div className="lg:col-span-3">
          <p className="mb-3 text-sm font-semibold text-brand-soft">Follow our work</p>
          <SocialLinks variant="light" />
        </div>
      </div>
    </section>
  );
}
