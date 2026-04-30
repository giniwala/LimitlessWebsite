"use client";

import { useCallback, useEffect, useMemo, useState, type KeyboardEventHandler } from "react";

type UseCarouselOptions = {
  itemCount: number;
  autoAdvanceMs?: number;
};

export function useCarousel({ itemCount, autoAdvanceMs = 0 }: UseCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasMultipleItems = itemCount > 1;
  const safeActiveIndex = itemCount > 0 ? activeIndex % itemCount : 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (itemCount <= 0) {
        return;
      }

      setActiveIndex(((index % itemCount) + itemCount) % itemCount);
    },
    [itemCount],
  );

  const goToPrevious = useCallback(() => {
    goTo(safeActiveIndex - 1);
  }, [goTo, safeActiveIndex]);

  const goToNext = useCallback(() => {
    goTo(safeActiveIndex + 1);
  }, [goTo, safeActiveIndex]);

  useEffect(() => {
    if (!hasMultipleItems || autoAdvanceMs <= 0 || isPaused || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [autoAdvanceMs, hasMultipleItems, isPaused, itemCount, prefersReducedMotion]);

  const onKeyDown: KeyboardEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    },
    [goToNext, goToPrevious],
  );

  const pauseHandlers = useMemo(
    () => ({
      onBlurCapture: () => setIsPaused(false),
      onFocusCapture: () => setIsPaused(true),
      onKeyDown,
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
    }),
    [onKeyDown],
  );

  return {
    activeIndex: safeActiveIndex,
    goTo,
    goToNext,
    goToPrevious,
    hasMultipleItems,
    pauseHandlers,
    prefersReducedMotion,
  };
}
