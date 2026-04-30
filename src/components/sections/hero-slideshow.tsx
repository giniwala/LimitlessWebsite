"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/data/hero";

type HeroSlideshowProps = {
  images: HeroImage[];
  fallbackImage: HeroImage;
};

export function HeroSlideshow({ images, fallbackImage }: HeroSlideshowProps) {
  const slides = images.length > 0 ? images : [fallbackImage];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {slides.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
        />
      ))}
    </>
  );
}
