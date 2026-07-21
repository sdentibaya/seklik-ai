import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getRequestContext } from "@cloudflare/next-on-pages";

let prisma: PrismaClient | undefined;

export function getDb() {
  if (process.env.NODE_ENV === "development") {
    if (!prisma) {
       try {
         const { env } = getRequestContext();
         if (env && env.DB) {
           const adapter = new PrismaD1(env.DB);
           prisma = new PrismaClient({ adapter });
         } else {
           prisma = new PrismaClient();
         }
       } catch (e) {
         prisma = new PrismaClient();
       }
    }
    return prisma;
  }

  // Production (Cloudflare Pages)
  if (!prisma) {
    try {
      const { env } = getRequestContext();
      const adapter = new PrismaD1(env.DB);
      prisma = new PrismaClient({ adapter });
    } catch (error) {
      console.error("Failed to init Prisma D1:", error);
      prisma = new PrismaClient();
    }
  }

  return prisma;
}
