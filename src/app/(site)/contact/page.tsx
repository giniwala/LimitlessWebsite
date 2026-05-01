import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { BrandWatermark } from "@/components/common/brand-watermark";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeader } from "@/components/common/section-header";
import { SocialLinks } from "@/components/common/social-links";
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
      <section className="page-hero page-hero-soft-bottom grain relative text-white">
        <BrandWatermark surface="dark" position="right" className="-top-6 right-[-6%]" />
        <div className="container-page relative z-10">
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.contact.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.contact.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.contact.description}
          </p>
        </div>
      </section>

      <section className="section-light relative overflow-hidden py-14 md:py-18">
        <BrandWatermark blend className="top-[-10%]" />
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
            </div>
            <div className="mt-8 rounded-lg border border-border bg-surface p-5 shadow-subtle">
              <p className="text-sm font-semibold uppercase text-accent">Follow our work</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                See public Townhall updates, recruiting reminders, and organization news on our official social channels.
              </p>
              <SocialLinks className="mt-4" />
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
