import { withOptimize } from "@prisma/extension-optimize";
import { env } from "~/env";
import { PrismaClient } from "../../../generated/prisma/client";

export const prisma = new PrismaClient().$extends(
  withOptimize({ apiKey: env.OPTIMIZE_API_KEY })
);
