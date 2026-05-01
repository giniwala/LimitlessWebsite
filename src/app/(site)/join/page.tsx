import type { Metadata } from "next";
import { ArrowRight, CalendarDays, CheckCircle2, Mail } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeader } from "@/components/common/section-header";
import { TeamPhotoCollage } from "@/components/sections/team-photo-collage";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";
import { siteCopy } from "@/data/siteCopy";
import { joinTeamPhotos } from "@/data/teamPhotos";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Learn about recruitment, application steps, and member expectations for Limitless Consulting.",
};

export default function JoinPage() {
  const recruitingFaqs = faqs.filter((faq) => faq.category === "Recruiting").slice(0, 3);

  return (
    <>
      <section className="page-hero page-hero-soft-bottom grain text-white">
        <div className="container-page relative z-10">
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.join.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.join.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.join.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.externalLinks.applyNow} variant="light" icon={ArrowRight}>
              Apply Now
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.contact.email}`} variant="secondary" icon={Mail} className="border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-deep">
              Ask Recruiting
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Who should apply"
            title={siteCopy.join.whoShouldApplyTitle}
            description={siteCopy.join.whoShouldApplyDescription}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {siteCopy.join.applicantTraits.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-surface p-4">
                <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                <p className="text-sm font-semibold leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamPhotoCollage
        photos={joinTeamPhotos}
        eyebrow="Student experience"
        title="You learn by sitting close to real startup uncertainty."
        description="Townhall gives any student a low-pressure way to listen and contribute. Membership adds Workshop support, project responsibility, and more reps with founders."
      />

      <section className="section-soft py-14 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Timeline"
            title={siteCopy.join.timelineTitle}
            description={siteCopy.join.timelineDescription}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteCopy.join.timeline.map((item) => (
              <article key={item.date} className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
                <CalendarDays aria-hidden className="size-6 text-accent" />
                <p className="mt-5 font-mono text-sm font-semibold text-brand">{item.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Application process"
            title={siteCopy.join.processTitle}
            description={siteCopy.join.processDescription}
          />
          <div className="grid gap-4">
            {siteCopy.join.processSteps.map((step, index) => (
              <article key={step.title} className="grid gap-4 rounded-lg border border-border bg-surface p-5 shadow-subtle sm:grid-cols-[48px_1fr]">
                <div className="flex size-12 items-center justify-center rounded-md bg-brand text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Applicant questions"
            title="Common recruiting questions"
            description="See the full FAQ page for client, member experience, and general questions."
          />
          <div className="mt-10">
            <FAQAccordion items={recruitingFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
