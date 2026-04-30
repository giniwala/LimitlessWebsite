import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { CTA } from "@/components/common/cta";
import { SectionHeader } from "@/components/common/section-header";
import { engagements } from "@/data/engagements";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Explore sample case study formats and placeholder engagement examples for Limitless Consulting.",
};

export default function EngagementsPage() {
  return (
    <>
      <section className="bg-brand-deep py-20 text-white">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.engagements.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.engagements.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.engagements.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Sample work"
            title={siteCopy.engagements.sectionTitle}
            description={siteCopy.engagements.sectionDescription}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {engagements.map((study) => (
              <CaseStudyCard key={study.name} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Responsible storytelling"
            title={siteCopy.engagements.confidentialityTitle}
            description={siteCopy.engagements.confidentialityDescription}
          />
        </div>
      </section>

      <CTA />
    </>
  );
}
