const { createClient } = require('@libsql/client');
const fs = require('fs');
const { execSync } = require('child_process');

async function main() {
  console.log("1. Generating SQL from Prisma schema...");
  execSync('npx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script > prisma/schema.sql', { stdio: 'inherit' });
  
  const sql = fs.readFileSync('prisma/schema.sql', 'utf-8');
  
  const client = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  });

  console.log("2. Uploading schema to Turso Database...");
  
  try {
    await client.executeMultiple(sql);
    console.log("✅ Berhasil! Struktur database sukses di-push ke Turso.");
    
    // Mari kita push data 'Master' juga (seeding)
    console.log("3. Seeding data master...");
    execSync('npx tsx prisma/seed.ts', { stdio: 'inherit' });
    console.log("✅ Berhasil! Data kelas dan mapel sudah terisi.");
    
  } catch (e) {
    console.error("Error:", e.message);
  }
}

main().catch(console.error);
