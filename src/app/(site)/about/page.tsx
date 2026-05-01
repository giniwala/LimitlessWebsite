import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { CTA } from "@/components/common/cta";
import { iconMap } from "@/components/common/icon-map";
import { SectionHeader } from "@/components/common/section-header";
import { LimitlessModel } from "@/components/sections/limitless-model";
import { TeamPhotoCollage } from "@/components/sections/team-photo-collage";
import { siteCopy } from "@/data/siteCopy";
import { aboutTeamPhotos } from "@/data/teamPhotos";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the mission, vision, values, and member development focus of Limitless Consulting at Michigan State University.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-soft-bottom grain text-white">
        <div className="container-page relative z-10">
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.about.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.about.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.about.description}
          </p>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          {siteCopy.about.cards.map((card) => (
            <article key={card.title} className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
              <h2 className="text-2xl font-semibold text-foreground">{card.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <TeamPhotoCollage
        photos={aboutTeamPhotos}
        title="The work feels different because the founders are in the room."
        description="Limitless meetings are not just slide decks. They are founder pitches, live questions, student discussion, and practical next-step thinking."
      />

      <LimitlessModel compact />

      <section className="section-soft py-14 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Values"
            title="What makes Limitless different"
            description={siteCopy.about.valuesIntro}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {siteCopy.about.values.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <article key={value.title} className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
                  <div className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-brand">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Development"
            title={siteCopy.about.developmentTitle}
            description={siteCopy.about.developmentDescription}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {siteCopy.about.developmentSkills.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
                <Compass aria-hidden className="size-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
