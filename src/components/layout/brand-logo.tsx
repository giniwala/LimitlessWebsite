"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/utils/cn";

type BrandLogoProps = {
  size?: "sm" | "md";
  className?: string;
};

export function BrandLogo({ size = "md", className }: BrandLogoProps) {
  const [showImage, setShowImage] = useState(true);
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
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-border",
        size === "sm" ? "size-10" : "size-12",
        className,
      )}
    >
      <Image
        src={siteConfig.brand.logoPath}
        alt={`${siteConfig.name} logo`}
        width={dimension}
        height={dimension}
        className="h-full w-full object-contain"
        onError={() => setShowImage(false)}
        priority={size === "sm"}
      />
    </span>
  );
}
