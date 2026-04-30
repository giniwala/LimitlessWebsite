import type { Metadata } from "next";
import { ExternalLink, Mail } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeader } from "@/components/common/section-header";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/siteConfig";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Limitless Consulting for client inquiries, recruiting questions, partnerships, and general information.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-deep py-20 text-white">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.contact.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.contact.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.contact.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Get in touch"
              title={siteCopy.contact.formTitle}
              description={siteCopy.contact.formDescription}
            />
            <div className="mt-8 grid gap-3">
              <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface p-4 text-sm font-semibold text-foreground hover:border-accent">
                <Mail aria-hidden className="size-5 text-accent" />
                {siteConfig.contact.email}
              </a>
              <a href={siteConfig.externalLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface p-4 text-sm font-semibold text-foreground hover:border-accent">
                <ExternalLink aria-hidden className="size-5 text-accent" />
                LinkedIn placeholder
              </a>
              <a href={siteConfig.externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface p-4 text-sm font-semibold text-foreground hover:border-accent">
                <ExternalLink aria-hidden className="size-5 text-accent" />
                Instagram placeholder
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services" variant="secondary">
                Client Services
              </ButtonLink>
              <ButtonLink href="/join" variant="secondary">
                Recruiting Info
              </ButtonLink>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
