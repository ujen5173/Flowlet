import { GithubIcon } from "hugeicons-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/lib/site";

const HeroSection = () => {
  return (
    <div className="w-full relative min-h-[70vh]">
      <div className="hero-section"></div>
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="space-y-6 max-w-5xl text-center mx-auto">
          <h1 className="text-5xl font-bold text-slate-700">
            Create, collaborate, and <br /> scale your blogs and articles.
          </h1>
          <p className="text-lg font-medium text-slate-500 max-w-3xl mx-auto">
            Effortlessly build and publish articles, blogs, and product guides
            with Flowlet, with the flexibility of a headless CMS and more.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Button
              asChild
              className="font-medium"
              variant={"secondary"}
              size="lg"
            >
              <Link href="/onboard">Sign up for free</Link>
            </Button>
            <Button
              className="font-medium text-slate-700"
              variant={"outline"}
              icon={GithubIcon}
              iconStyle="size-[15]"
              size="lg"
              asChild
            >
              <Link target="_blank" href={siteConfig.links.github}>
                Contribute on Github
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
