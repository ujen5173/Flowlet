import {
  InformationCircleIcon,
  LinkSquare02Icon,
  NoteEditIcon,
} from "hugeicons-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import Logo from "../Logo";

const headerLinks = [
  {
    id: "1",
    label: "Explore",
    link: "/explore",
    external: false,
  },
  {
    id: "2",
    label: "Products",
    link: "#",
    external: false,
    child: [
      {
        label: "Editor",
        description: "Explore the ultimate editor with AI powers.",
        icon: <NoteEditIcon />,
        link: "/editor",
      },
      {
        label: "About",
        description: "Flowlet's story.",
        icon: <InformationCircleIcon />,
        link: "/about",
      },
    ],
  },
  {
    id: "3",
    label: "Pricing",
    link: "/pricing",
    external: false,
  },
  {
    id: "4",
    label: "Github (OS)",
    link: "https://github.com/ujen5173/flowlet",
    external: true,
  },
];

const Header = () => {
  return (
    <header className="w-full bg-transparent p-6">
      <div className="border flex items-center justify-between border-border rounded-full shadow-md p-3 bg-white w-(--header-height) mx-auto">
        <Logo withDot />
        <NavigationMenu delayDuration={100}>
          <NavigationMenuList>
            {headerLinks.map((l) =>
              l.child ? (
                <NavigationMenuItem key={l.id} className="hidden md:block">
                  <Button asChild>
                    <NavigationMenuTrigger>{l.label}</NavigationMenuTrigger>
                  </Button>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        {l.child.map((lc) => (
                          <NavigationMenuLink key={lc.label} asChild>
                            <Link href={lc.link}>
                              <div className="flex gap-3 items-center">
                                <div className="rounded-md border bg-white border-border p-2">
                                  {lc.icon}
                                </div>
                                <div>
                                  <div className="font-medium">{lc.label}</div>
                                  <div className="text-muted-foreground">
                                    {lc.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={l.id}>
                  <Button asChild>
                    <NavigationMenuLink asChild>
                      <Link
                        href={l.link}
                        target={l.external ? "_blank" : "_self"}
                      >
                        <span className="flex items-center gap-2">
                          {l.label}
                          {l.external && <LinkSquare02Icon size={4} />}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="">
          <Button asChild variant={"outline"}>
            <Link href="/onboard">Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
