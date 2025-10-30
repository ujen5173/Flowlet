import type { Metadata } from "next";
import Header from "~/components/rest/layout/header";
import HeroSection from "~/components/rest/layout/hero-section";
import { prisma } from "~/lib/_server/db";
import constructSEO from "~/lib/seo";

export const metadata: Metadata = constructSEO({
  title: "Flowlet - Blogging Platform for Developers by Developers",
  removeSiteName: true,
  description:
    "Write, share, and discover technical content. A modern blogging platform built for developers with Markdown support, syntax highlighting, and a thriving tech community.",
});

export default async function Home() {
  const data = await prisma.publication.findMany();

  return (
    <section className="bg-[oklch(98.4% 0.019 200.873)]">
      <Header />
      <HeroSection />
      {data.map((e) => (
        <span key={e.id}>{e.title}</span>
      ))}
    </section>
  );
}
