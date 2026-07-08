import type { MetadataRoute } from "next";
import { NAV_ITEMS, SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_ITEMS.map((item) => ({
    url: new URL(item.route, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: item.route === "/" ? "weekly" : "monthly",
    priority: item.route === "/" ? 1 : 0.8,
  }));
}
