import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/_next/", "/onboard/"],
    },
    sitemap: "https://flowlet.dev/sitemap.xml", // Replace with your actual domain
  };
}
