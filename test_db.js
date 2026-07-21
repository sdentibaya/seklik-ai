const { PrismaClient } = require('./src/generated/client-db-final-v3');
const prisma = new PrismaClient();
async function main() {
  try {
    const res = await prisma.modulAjar.findMany({ include: { tps: true } });
    console.log('Modul Ajar success', res.length);
    const tps = await prisma.tujuanPembelajaran.findMany({ orderBy: { order: "asc" } });
    console.log('TP success', tps.length);
  } catch(e) {
    console.error('ERROR DB', e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
