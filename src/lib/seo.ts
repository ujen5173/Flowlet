import type { Metadata } from "next";
import { siteConfig } from "./site";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile" | "book";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: Array<{
    name: string;
    url?: string;
  }>;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  removeSiteName?: boolean;
  canonical?: string;
}

export function constructSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags = [],
  noIndex = false,
  removeSiteName = false,
  canonical,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? removeSiteName
      ? title
      : `${title} | ${siteConfig.name}`
    : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const fullImage = image || siteConfig.ogImage;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const fullKeywords = [...siteConfig.keywords, ...keywords];

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: authors || siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      type: type,
      locale: "en_US",
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors: authors.map((author) => author.name) }),
      ...(section && { section }),
      ...(tags && tags.length > 0 && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: "@flowlet",
      site: "@flowlet",
    },
    alternates: {
      canonical: canonical || fullUrl,
    },
    verification: {
      // google: "",
      // yandex: "",
      // yahoo: "",
    },
    category: "technology",
    classification: "Blogging Platform",
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": siteConfig.name,
      "application-name": siteConfig.name,
      "msapplication-TileColor": "#000000",
      "theme-color": "#000000",
    },
  };

  return metadata;
}

export const seoUtils = {
  generateArticleStructuredData: (article: {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    updatedAt?: string;
    author: { name: string; username: string; avatar?: string };
    tags: string[];
    image?: string;
    wordCount?: number;
  }) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      url: `${siteConfig.url}/blog/${article.slug}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      author: {
        "@type": "Person",
        name: article.author.name,
        url: `${siteConfig.url}/@${article.author.username}`,
        ...(article.author.avatar && { image: article.author.avatar }),
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
        },
      },
      ...(article.image && {
        image: {
          "@type": "ImageObject",
          url: article.image,
        },
      }),
      ...(article.wordCount && { wordCount: article.wordCount }),
      keywords: article.tags.join(", "),
      articleSection: "Technology",
      inLanguage: "en-US",
    };
  },

  generateOrganizationStructuredData: () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      description: siteConfig.description,
      sameAs: [
        siteConfig.links.twitter,
        siteConfig.links.github,
        siteConfig.links.linkedin,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@flowletapp.vercel.app",
      },
    };
  },

  generateBreadcrumbStructuredData: (
    items: Array<{ name: string; url: string }>
  ) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${siteConfig.url}${item.url}`,
      })),
    };
  },
};

export default constructSEO;
