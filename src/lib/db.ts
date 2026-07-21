import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

let prisma: PrismaClient | undefined;

export function getDb() {
  if (!prisma) {
    const libsql = createClient({
      url: process.env.DATABASE_URL as string,
      authToken: process.env.TURSO_AUTH_TOKEN as string,
    });
    const adapter = new PrismaLibSQL(libsql);
    prisma = new PrismaClient({ adapter });
  }
  return prisma;
}
