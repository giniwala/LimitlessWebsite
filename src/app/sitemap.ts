import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const routes = [
  "",
  "/about",
  "/team",
  "/services",
  "/engagements",
  "/media",
  "/join",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
