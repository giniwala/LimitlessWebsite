"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, PlayCircle } from "lucide-react";
import type { SocialUpdate } from "@/types/content";
import { useCarousel } from "@/hooks/use-carousel";
import { cn } from "@/utils/cn";

type MediaCarouselProps = {
  updates: SocialUpdate[];
  compact?: boolean;
  autoAdvanceMs?: number;
};

export function MediaCarousel({
  updates,
  compact = false,
  autoAdvanceMs = 7000,
}: MediaCarouselProps) {
  const {
    activeIndex,
    goTo,
    goToNext,
    goToPrevious,
    hasMultipleItems,
    pauseHandlers,
    prefersReducedMotion,
  } = useCarousel({ itemCount: updates.length, autoAdvanceMs });

  const activeUpdate = updates[activeIndex];

  if (!activeUpdate) {
    return null;
  }

  return (
    <div
      {...pauseHandlers}
      aria-label="Limitless media carousel"
      className="rounded-lg border border-border bg-surface p-4 shadow-soft md:p-5"
      role="region"
      tabIndex={0}
    >
      <div className={cn("grid gap-5", compact ? "lg:grid-cols-[0.95fr_1fr]" : "lg:grid-cols-[0.9fr_1.1fr]")}>
        <div className="relative overflow-hidden rounded-lg bg-brand-deep">
          <div className={cn("relative", compact ? "aspect-[16/11]" : "aspect-[4/5] max-h-[680px] md:aspect-[16/10] lg:aspect-[9/11]")}>
            {activeUpdate.videoSrc ? (
              <video
                key={activeUpdate.videoSrc}
                src={activeUpdate.videoSrc}
                poster={activeUpdate.thumbnailSrc}
                muted
                playsInline
                controls
                autoPlay={!prefersReducedMotion}
                loop={!prefersReducedMotion}
                className="h-full w-full object-cover"
              />
            ) : (
              <a
                href={activeUpdate.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View LinkedIn post: ${activeUpdate.title}`}
                className="group relative block h-full w-full"
              >
                <Image
                  src={activeUpdate.thumbnailSrc}
                  alt={activeUpdate.thumbnailAlt}
                  fill
                  sizes={compact ? "(min-width: 1024px) 42vw, 92vw" : "(min-width: 1024px) 45vw, 92vw"}
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/82 via-brand-deep/24 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-16 items-center justify-center rounded-full border border-white/35 bg-white/16 text-white shadow-soft backdrop-blur transition-transform group-hover:scale-105">
                    <PlayCircle aria-hidden className="size-8" />
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 rounded-md bg-brand-deep/72 px-3 py-2 text-xs font-semibold uppercase text-white backdrop-blur">
                  View on LinkedIn
                </span>
              </a>
            )}
          </div>

          {hasMultipleItems ? (
            <>
              <button
                type="button"
                aria-label="Previous media update"
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/28 bg-brand-deep/62 text-white shadow-subtle backdrop-blur transition-colors hover:bg-white hover:text-brand-deep"
              >
                <ChevronLeft aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next media update"
                onClick={goToNext}
                className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/28 bg-brand-deep/62 text-white shadow-subtle backdrop-blur transition-colors hover:bg-white hover:text-brand-deep"
              >
                <ChevronRight aria-hidden className="size-5" />
              </button>
            </>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-6 p-1 md:p-2">
          <div aria-live="polite">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#0a66c2]/10 px-2.5 py-1.5 text-xs font-semibold uppercase text-[#0a66c2]">
                {activeUpdate.eyebrow}
              </span>
              {activeUpdate.date ? (
                <span className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-semibold uppercase text-muted">
                  {activeUpdate.date}
                </span>
              ) : null}
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              {activeUpdate.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-muted">{activeUpdate.caption}</p>
            {activeUpdate.summary ? (
              <p className="mt-3 text-sm leading-6 text-muted">{activeUpdate.summary}</p>
            ) : null}
            <a
              href={activeUpdate.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <span>Open LinkedIn post</span>
              <ExternalLink aria-hidden className="size-4" />
            </a>
          </div>

          {hasMultipleItems ? (
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase text-muted">
                  Browse posts
                </p>
                <p className="text-xs font-semibold text-muted">
                  {activeIndex + 1} / {updates.length}
                </p>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-7">
                {updates.map((update, index) => (
                  <button
                    key={update.linkedInUrl}
                    type="button"
                    aria-label={`Show media item: ${update.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => goTo(index)}
                    className={cn(
                      "relative aspect-[4/5] overflow-hidden rounded-md border bg-surface-muted transition",
                      index === activeIndex
                        ? "border-accent ring-2 ring-accent/25"
                        : "border-border hover:border-accent",
                    )}
                  >
                    <Image
                      src={update.thumbnailSrc}
                      alt=""
                      fill
                      sizes="96px"
                      loading={index === activeIndex ? "eager" : "lazy"}
                      className="object-cover"
                    />
                    <span className="absolute inset-0 bg-brand-deep/18" />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
