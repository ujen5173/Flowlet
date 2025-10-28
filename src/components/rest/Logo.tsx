import { Bitcount_Single } from "next/font/google";
import Image from "next/image";
import { cn } from "~/lib/utils";

const bitcount = Bitcount_Single({});

const SIZES = {
  sm: {
    icon: 25,
    text: "text-xl font-medium",
  },
  md: {
    icon: 30,
    text: "text-2xl font-semibold",
  },
  lg: {
    icon: 40,
    text: "text-3xl font-semibold",
  },
} as const;

type PROPS = {
  size?: "sm" | "md" | "lg";
  withDot?: boolean;
  onlyIcon?: boolean;
  color?: string;
};

const Logo = ({
  size = "md",
  withDot = false,
  onlyIcon = false,
  color,
}: PROPS) => {
  return (
    <div className="flex items-center select-none">
      <Image
        className="select-none object-cover"
        src="/logo.svg"
        alt="Flowlet logo"
        draggable={false}
        width={SIZES[size].icon}
        height={SIZES[size].icon}
        priority
      />
      {!onlyIcon && (
        <h1
          className={cn(
            "mt-1",
            bitcount.className,
            SIZES[size].text,
            color ?? "text-slate-800"
          )}
        >
          flowlet
          {withDot ? "." : ""}
        </h1>
      )}
    </div>
  );
};

export default Logo;
