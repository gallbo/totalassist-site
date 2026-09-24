import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://totalclaimassist.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: "2026-09-23",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/agentes-de-seguros`,
      lastModified: "2026-09-23",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/terminos`,
      lastModified: "2026-08-10",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: "2026-08-10",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/avisodeprivacidadagentes`,
      lastModified: "2026-08-10",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
