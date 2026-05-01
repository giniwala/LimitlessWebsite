import { ButtonLink } from "@/components/common/button-link";
import { BrandWatermark } from "@/components/common/brand-watermark";
import { CTA } from "@/components/common/cta";
import { SectionHeader } from "@/components/common/section-header";
import { StatCard } from "@/components/common/stat-card";
import { ClientHighlightCard } from "@/components/client-highlight-card";
import { Hero } from "@/components/sections/hero";
import { LimitlessModel } from "@/components/sections/limitless-model";
import { TeamCard } from "@/components/team-card";
import { publishedClientHighlights } from "@/data/clients";
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
        <div className="container-page">
          <SectionHeader
            eyebrow="Who we are"
            title={siteCopy.home.whoWeAreTitle}
            description={siteCopy.home.whoWeAreDescription}
            className="max-w-3xl [&_p]:mt-4 [&_p]:text-[0.98rem] [&_p]:leading-7 [&_p]:md:text-[1rem]"
          />
        </div>
      </section>

      <LimitlessModel homepageMinimal />

      <section className="section-light py-14 md:py-18">
        <div className="container-page relative rounded-lg md:rounded-xl md:shadow-subtle">
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
