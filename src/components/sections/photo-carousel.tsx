"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TeamPhoto } from "@/types/content";
import { useCarousel } from "@/hooks/use-carousel";
import { cn } from "@/utils/cn";

type PhotoCarouselProps = {
  slides: TeamPhoto[];
  autoAdvanceMs?: number;
  ariaLabel?: string;
  className?: string;
};

export function PhotoCarousel({
  slides,
  autoAdvanceMs = 6500,
  ariaLabel = "Limitless photo carousel",
  className,
}: PhotoCarouselProps) {
  const {
    activeIndex,
    goTo,
    goToNext,
    goToPrevious,
    hasMultipleItems,
    pauseHandlers,
    prefersReducedMotion,
  } = useCarousel({ itemCount: slides.length, autoAdvanceMs });

  const activeSlide = slides[activeIndex];

  if (!activeSlide) {
    return null;
  }

  return (
    <div
      {...pauseHandlers}
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/14 bg-brand-deep shadow-soft",
        className,
      )}
      role="region"
      tabIndex={0}
    >
      <div className="relative aspect-[4/3] min-h-[320px] sm:min-h-[390px]">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={index !== activeIndex}
            fill
            sizes="(min-width: 1024px) 45vw, 92vw"
            priority={index === 0}
            className={cn(
              "object-cover",
              prefersReducedMotion ? "" : "transition-opacity duration-700 ease-out",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
            style={{ objectPosition: slide.objectPosition ?? "50% 50%" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/88 via-brand-deep/18 to-transparent" />

        {hasMultipleItems ? (
          <>
            <button
              type="button"
              aria-label="Previous Limitless photo"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/28 bg-brand-deep/62 text-white shadow-subtle backdrop-blur transition-colors hover:bg-white hover:text-brand-deep"
            >
              <ChevronLeft aria-hidden className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next Limitless photo"
              onClick={goToNext}
              className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/28 bg-brand-deep/62 text-white shadow-subtle backdrop-blur transition-colors hover:bg-white hover:text-brand-deep"
            >
              <ChevronRight aria-hidden className="size-5" />
            </button>
          </>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6" aria-live="polite">
          <p className="text-xs font-semibold uppercase text-brand-soft">
            {activeSlide.label}
          </p>
          {activeSlide.description ? (
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/84">
              {activeSlide.description}
            </p>
          ) : null}
        </div>
      </div>

      {hasMultipleItems ? (
        <div className="flex items-center justify-center gap-2 bg-brand-deep px-4 py-4">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show ${slide.label ?? `photo ${index + 1}`}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                index === activeIndex
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/72",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
