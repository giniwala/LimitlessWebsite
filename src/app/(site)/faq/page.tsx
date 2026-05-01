import type { Metadata } from "next";
import { SectionHeader } from "@/components/common/section-header";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common applicant, member experience, client service, and general questions.",
};

export default function FAQPage() {
  return (
    <>
      <section className="page-hero page-hero-soft-bottom grain text-white">
        <div className="container-page relative z-10">
          <p className="text-sm font-semibold uppercase text-brand-soft">FAQ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            Questions from applicants, founders, clients, and campus partners.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Quick answers for people exploring membership, client support, partnerships, or general organization details.
          </p>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Answers"
            title="What visitors usually want to know"
            description="Browse common questions on recruiting, member experience, client services, and general topics."
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
