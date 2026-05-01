"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/utils/cn";

type BrandLogoProps = {
  size?: "sm" | "md";
  className?: string;
};

export function BrandLogo({ size = "md", className }: BrandLogoProps) {
  const [showImage, setShowImage] = useState(true);
  const [useFallbackImage, setUseFallbackImage] = useState(false);
  const dimension = size === "sm" ? 40 : 48;

  if (!showImage) {
    return (
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-md bg-brand font-semibold text-white",
          size === "sm" ? "size-10 text-base" : "size-12 text-lg",
          className,
        )}
      >
        {siteConfig.brand.fallbackInitials}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-transparent ring-1 ring-white/14 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] backdrop-blur-[1px]",
        size === "sm" ? "size-10" : "size-12",
        className,
      )}
    >
      {/* Static SVG/PNG brand assets render more predictably here than Next Image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={useFallbackImage ? siteConfig.brand.logoFallbackPath : siteConfig.brand.logoPath}
        alt={`${siteConfig.name} logo`}
        width={dimension}
        height={dimension}
        className="h-full w-full object-contain p-0.5"
        onError={() => {
          if (!useFallbackImage) {
            setUseFallbackImage(true);
            return;
          }

          setShowImage(false);
        }}
      />
    </span>
  );
}
