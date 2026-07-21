import { PrismaClient } from "@/generated/client-db-final-v3/edge";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const db = new Proxy({} as PrismaClient, {
  get(target, prop) {
    let client = (globalThis as any)._prismaClient;
    
    if (!client) {
      const { env } = process.env.NODE_ENV === "development" 
        ? { env: globalThis as any } 
        : (typeof getRequestContext === "function" ? getRequestContext() : { env: {} });
      
      if (!env || !env.DB) {
        // Fallback untuk local build/dev yang mungkin belum binding D1
        client = new PrismaClient();
      } else {
        const adapter = new PrismaD1(env.DB);
        client = new PrismaClient({ adapter });
      }
      (globalThis as any)._prismaClient = client;
    }
    
    return client[prop];
  }
});
