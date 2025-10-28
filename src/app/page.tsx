import type { Metadata } from "next";
import Header from "~/components/rest/layout/header";
import constructSEO from "~/lib/seo";

export const metadata: Metadata = constructSEO({
  title: "Flowlet - Blogging Platform for Developers",
  description:
    "Write, share, and discover technical content. A modern blogging platform built for developers with Markdown support, syntax highlighting, and a thriving tech community.",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans dark:bg-black">
      <Header />
    </div>
  );
}
