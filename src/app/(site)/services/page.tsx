import type { Metadata } from "next";
import { ButtonLink } from "@/components/common/button-link";
import { CTA } from "@/components/common/cta";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the consulting services Limitless Consulting can provide for student startups and early-stage ventures.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-deep py-20 text-white">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.services.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.services.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.services.description}
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="light">
              Work With Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Capabilities"
            title={siteCopy.services.capabilitiesTitle}
            description={siteCopy.services.capabilitiesDescription}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} showLongDescription />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="How projects work"
            title={siteCopy.services.processTitle}
            description={siteCopy.services.processDescription}
          />
          <div className="grid gap-4">
            {siteCopy.services.processSteps.map(([step, title, description]) => (
              <article key={step} className="grid gap-4 rounded-lg border border-border bg-surface p-5 shadow-subtle sm:grid-cols-[48px_1fr]">
                <div className="flex size-12 items-center justify-center rounded-md bg-brand text-lg font-semibold text-white">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Interested in a student-led engagement?" description="Use the contact form to share your startup, the problem you are working through, and the semester timeline you have in mind." />
    </>
  );
}
