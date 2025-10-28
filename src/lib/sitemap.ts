import { MetadataRoute } from "next";
import sitemap from "~/app/sitemap";

// Sitemap configuration
export const sitemapConfig = {
  baseUrl: sitemap, // Replace with your actual domain
  changeFrequency: "daily" as const,
  priority: 1,
};

// Generate sitemap entries
export function generateSitemapEntries(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: "",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "/editor",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "/explore",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: "/terms",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const dynamicPages: MetadataRoute.Sitemap = [];

  return [...staticPages, ...dynamicPages];
}

export function generateRobotsTxt(): string {
  return `
    User-agent: *
    Allow: /

    # Disallow admin and private areas
    Disallow: /admin/
    Disallow: /api/
    Disallow: /_next/
    Disallow: /onboard/

    # Allow important pages
    Allow: /blog/
    Allow: /@*/
    Allow: /tag/
    Allow: /search

    # Sitemap
    Sitemap: ${sitemapConfig.baseUrl}/sitemap.xml

    # Crawl delay (optional)
    Crawl-delay: 1
    `.trim();
}
