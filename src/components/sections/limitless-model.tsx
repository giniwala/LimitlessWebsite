import { iconMap } from "@/components/common/icon-map";
import { SectionHeader } from "@/components/common/section-header";
import { PhotoCarousel } from "@/components/sections/photo-carousel";
import { limitlessModelSteps } from "@/data/limitlessModel";
import { homepageTeamPhotos } from "@/data/teamPhotos";

type LimitlessModelProps = {
  compact?: boolean;
};

export function LimitlessModel({ compact = false }: LimitlessModelProps) {
  const steps = compact ? limitlessModelSteps.slice(0, 4) : limitlessModelSteps;

  return (
    <section className={compact ? "py-20" : "bg-surface-muted py-20"}>
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="The Limitless model"
              title="From founder challenge to student strategy."
              description="Townhalls make the work public, specific, and useful. Workshops give founders and consultants a place to keep going."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = iconMap[step.icon];
                return (
                  <article
                    key={step.title}
                    className="depth-card rounded-lg border border-border bg-surface p-5 shadow-subtle"
                    style={{ transitionDelay: `${index * 35}ms` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <Icon aria-hidden className="size-5" />
                      </div>
                      <span className="rounded-md border border-border bg-background px-2 py-1 text-xs font-semibold uppercase text-muted">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border bg-brand-deep p-5 shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/limitless-logo.svg"
              alt=""
              className="pointer-events-none absolute -right-24 -top-24 size-[420px] opacity-[0.08] mix-blend-screen motion-safe:animate-infinity-float"
            />
            <PhotoCarousel
              slides={homepageTeamPhotos}
              ariaLabel="Limitless Townhall and Workshop photo carousel"
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
