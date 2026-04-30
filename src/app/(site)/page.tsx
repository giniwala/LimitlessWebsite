import { Mail } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/common/button-link";
import { CTA } from "@/components/common/cta";
import { iconMap } from "@/components/common/icon-map";
import { SectionHeader } from "@/components/common/section-header";
import { StatCard } from "@/components/common/stat-card";
import { ClientHighlightCard } from "@/components/client-highlight-card";
import { ServiceCard } from "@/components/service-card";
import { Hero } from "@/components/sections/hero";
import { LimitlessModel } from "@/components/sections/limitless-model";
import { SocialUpdateShowcase } from "@/components/sections/social-update-showcase";
import { TeamCard } from "@/components/team-card";
import { publishedClientHighlights } from "@/data/clients";
import { services } from "@/data/services";
import { siteCopy } from "@/data/siteCopy";
import { stats } from "@/data/stats";
import { boardMembers } from "@/data/team";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-brand-deep pb-10 text-white">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Who we are"
            title={siteCopy.home.whoWeAreTitle}
            description={siteCopy.home.whoWeAreDescription}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {siteCopy.home.audienceCards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <article key={card.title} className="rounded-lg border border-border bg-surface p-5 shadow-subtle">
                  <div className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-brand">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <LimitlessModel />

      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow={siteCopy.home.servicesPreview.eyebrow}
              title={siteCopy.home.servicesPreview.title}
              description={siteCopy.home.servicesPreview.description}
            />
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -left-24 top-12 hidden size-80 opacity-[0.035] lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/limitless-logo.svg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow={siteCopy.home.engagementsPreview.eyebrow}
              title={siteCopy.home.engagementsPreview.title}
              description={siteCopy.home.engagementsPreview.description}
            />
            <ButtonLink href="/engagements" variant="secondary">
              View Engagements
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {publishedClientHighlights.slice(0, 6).map((client) => (
              <ClientHighlightCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      </section>

      <SocialUpdateShowcase />

      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow={siteCopy.home.teamPreview.eyebrow}
              title={siteCopy.home.teamPreview.title}
              description={siteCopy.home.teamPreview.description}
            />
            <ButtonLink href="/team" variant="secondary">
              Meet the Team
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.slice(0, 3).map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-page rounded-lg border border-border bg-surface p-6 shadow-subtle md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{siteCopy.home.contactCta.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                {siteCopy.home.contactCta.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-deep hover:bg-brand-deep"
            >
              <span>Contact Us</span>
              <Mail aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
