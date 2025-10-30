import { Bitcount_Single } from "next/font/google";
import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "./_font/helvetica/helvetica-light-587ebe5a59211.ttf",
      weight: "300",
      style: "normal",
    },
    { path: "./_font/helvetica/Helvetica.ttf", weight: "400", style: "normal" },
    {
      path: "./_font/helvetica/Helvetica-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./_font/helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_font/helvetica/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const bitcount = Bitcount_Single({});
