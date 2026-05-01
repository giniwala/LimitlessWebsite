import { ButtonLink } from "@/components/common/button-link";
import { BrandWatermark } from "@/components/common/brand-watermark";
import { CTA } from "@/components/common/cta";
import { iconMap } from "@/components/common/icon-map";
import { SectionHeader } from "@/components/common/section-header";
import { StatCard } from "@/components/common/stat-card";
import { ClientHighlightCard } from "@/components/client-highlight-card";
import { ServiceCard } from "@/components/service-card";
import { Hero } from "@/components/sections/hero";
import { LimitlessModel } from "@/components/sections/limitless-model";
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

      <section className="section-stats-deep relative overflow-hidden pb-12 pt-10 text-white md:pb-14 md:pt-12">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      <section className="marquee-soft-bottom-glow section-band-marquee-soft relative overflow-hidden border-y border-white/12 py-7 text-white md:py-8">
        <div className="marquee-track flex whitespace-nowrap">
          {[...publishedClientHighlights, ...publishedClientHighlights].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-8 px-6 text-lg font-semibold text-white/72 md:text-2xl"
              aria-hidden={index >= publishedClientHighlights.length}
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_18px_rgb(54_240_160_/_0.6)]"
              />
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-after-deep section-light py-14 md:py-18">
        <div className="container-page grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeader
            eyebrow="Who we are"
            title={siteCopy.home.whoWeAreTitle}
            description={siteCopy.home.whoWeAreDescription}
            className="max-w-xl [&_p]:mt-4 [&_p]:text-[0.975rem] [&_p]:leading-7 [&_p]:md:text-[1rem]"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {siteCopy.home.audienceCards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <article
                  key={card.title}
                  className="depth-card glow-border rounded-lg border border-border bg-surface/90 p-5 shadow-subtle md:p-6"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground md:mt-5">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted md:mt-3">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <LimitlessModel />

      <section className="section-bridge-muted relative py-14 md:py-18">
        <BrandWatermark blend className="hidden lg:block" />
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow={siteCopy.home.servicesPreview.eyebrow}
              title={siteCopy.home.servicesPreview.title}
              description={siteCopy.home.servicesPreview.description}
              className="max-w-xl [&_p]:mt-3 [&_p]:text-[0.975rem]"
            />
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-14 md:py-18">
        <div className="container-page relative overflow-hidden rounded-lg md:rounded-xl md:shadow-subtle">
          <BrandWatermark position="left" className="-top-24 hidden lg:block xl:-left-8" />
          <div className="relative z-[1]">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow={siteCopy.home.engagementsPreview.eyebrow}
                title={siteCopy.home.engagementsPreview.title}
                description={siteCopy.home.engagementsPreview.description}
                className="max-w-2xl [&_p]:mt-3 [&_p]:text-[0.975rem]"
              />
              <ButtonLink href="/engagements" variant="secondary">
                View Engagements
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
              {publishedClientHighlights.slice(0, 4).map((client) => (
                <ClientHighlightCard key={client.name} client={client} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft py-14 md:py-18">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow={siteCopy.home.teamPreview.eyebrow}
              title={siteCopy.home.teamPreview.title}
              description={siteCopy.home.teamPreview.description}
              className="max-w-2xl [&_p]:mt-3 [&_p]:text-[0.975rem]"
            />
            <ButtonLink href="/team" variant="secondary">
              Meet the Team
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
            {boardMembers.slice(0, 4).map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <CTA title={siteCopy.home.ctaBanner.title} description={siteCopy.home.ctaBanner.description} />
    </>
  );
}
