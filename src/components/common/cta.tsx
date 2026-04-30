import { ArrowRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
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
    <section className="bg-brand-deep py-16 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-soft">
            Get started
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <ButtonLink href={siteConfig.externalLinks.applyNow} variant="light" icon={ArrowRight}>
            Apply Now
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" icon={Mail} className="border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-deep">
            Work With Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
