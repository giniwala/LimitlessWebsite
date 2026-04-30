import type { Metadata } from "next";
import { SectionHeader } from "@/components/common/section-header";
import { TeamCard } from "@/components/team-card";
import { boardMembers, consultants, generalMembers, projectManagers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the elected board and student consultants behind Limitless Consulting at Michigan State University.",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-brand-deep py-20 text-white">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase text-brand-soft">Team</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            The students leading projects, recruiting, and member development.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Roster information is sourced from the Spring 2026 master workbook and can be updated from src/data/team.ts.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Executive Board"
            title="Organization leadership"
            description="Executive board members appear first and are ordered by the master spreadsheet."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Project Managers"
            title="Engagement team leads"
            description="Project managers guide teams through client work, deliverable planning, and weekly progress."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectManagers.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Consultants"
            title="Student consultants"
            description="Consultants support research, analysis, interviews, synthesis, and client-facing deliverables."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {consultants.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Members"
            title="Additional member roster"
            description="This section includes LBA/member records from the workbook where public roster details are still being reviewed."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {generalMembers.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
