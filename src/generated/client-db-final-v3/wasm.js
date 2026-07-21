
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.SubjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.PhaseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  classes: 'classes'
};

exports.Prisma.CapaianPembelajaranScalarFieldEnum = {
  id: 'id',
  subjectId: 'subjectId',
  phaseId: 'phaseId',
  content: 'content'
};

exports.Prisma.CPElementScalarFieldEnum = {
  id: 'id',
  capaianPembelajaranId: 'capaianPembelajaranId',
  name: 'name',
  content: 'content'
};

exports.Prisma.ClassSetupScalarFieldEnum = {
  userId: 'userId',
  subjectId: 'subjectId',
  phaseId: 'phaseId',
  updatedAt: 'updatedAt'
};

exports.Prisma.TujuanPembelajaranScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subjectId: 'subjectId',
  phaseId: 'phaseId',
  code: 'code',
  element: 'element',
  description: 'description',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PromesAllocationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subjectId: 'subjectId',
  phaseId: 'phaseId',
  tujuanPembelajaranId: 'tujuanPembelajaranId',
  month: 'month',
  week: 'week',
  jp: 'jp'
};

exports.Prisma.CalendarHolidayScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subjectId: 'subjectId',
  phaseId: 'phaseId',
  month: 'month',
  week: 'week',
  description: 'description'
};

exports.Prisma.ModulAjarScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subjectId: 'subjectId',
  phaseId: 'phaseId',
  title: 'title',
  metadata: 'metadata',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LkpdScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  modulAjarId: 'modulAjarId',
  type: 'type',
  difficulty: 'difficulty',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BankSoalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  phaseId: 'phaseId',
  cognitiveLevel: 'cognitiveLevel',
  akmType: 'akmType',
  stimulus: 'stimulus',
  pertanyaan: 'pertanyaan',
  options: 'options',
  kunciJawaban: 'kunciJawaban',
  rubrikPenilaian: 'rubrikPenilaian',
  generateCode: 'generateCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaketUjianScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  soalIds: 'soalIds',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SchoolProfileScalarFieldEnum = {
  userId: 'userId',
  schoolName: 'schoolName',
  headmasterName: 'headmasterName',
  headmasterNip: 'headmasterNip',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserProfileScalarFieldEnum = {
  userId: 'userId',
  fullName: 'fullName',
  nip: 'nip',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  password: 'password',
  role: 'role'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Subject: 'Subject',
  Phase: 'Phase',
  CapaianPembelajaran: 'CapaianPembelajaran',
  CPElement: 'CPElement',
  ClassSetup: 'ClassSetup',
  TujuanPembelajaran: 'TujuanPembelajaran',
  PromesAllocation: 'PromesAllocation',
  CalendarHoliday: 'CalendarHoliday',
  ModulAjar: 'ModulAjar',
  Lkpd: 'Lkpd',
  BankSoal: 'BankSoal',
  PaketUjian: 'PaketUjian',
  SchoolProfile: 'SchoolProfile',
  UserProfile: 'UserProfile',
  User: 'User',
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\WEB\\MASTER\\src\\generated\\client-db-final-v3",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "E:\\WEB\\MASTER\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "file:./dev.db"
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"sqlite\"\n  url      = \"file:./dev.db\"\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\"]\n  output          = \"../src/generated/client-db-final-v3\"\n}\n\nmodel Subject {\n  id                   String                @id @default(uuid())\n  name                 String                @unique\n  description          String?\n  capaianPembelajarans CapaianPembelajaran[]\n}\n\nmodel Phase {\n  id                   String                @id @default(uuid())\n  name                 String                @unique // \"A\", \"B\", \"C\"\n  description          String?\n  classes              String // e.g., \"Kelas 1-2\"\n  capaianPembelajarans CapaianPembelajaran[]\n  bankSoals            BankSoal[]\n}\n\nmodel CapaianPembelajaran {\n  id        String @id @default(uuid())\n  subjectId String\n  phaseId   String\n  content   String\n\n  subject  Subject     @relation(fields: [subjectId], references: [id], onDelete: Cascade)\n  phase    Phase       @relation(fields: [phaseId], references: [id], onDelete: Cascade)\n  elements CPElement[]\n\n  @@unique([subjectId, phaseId])\n}\n\nmodel CPElement {\n  id                    String @id @default(uuid())\n  capaianPembelajaranId String\n  name                  String\n  content               String\n\n  capaianPembelajaran CapaianPembelajaran @relation(fields: [capaianPembelajaranId], references: [id], onDelete: Cascade)\n}\n\n// Per-user active class setup (PK = userId)\nmodel ClassSetup {\n  userId    String   @id\n  subjectId String\n  phaseId   String\n  updatedAt DateTime @updatedAt\n}\n\nmodel TujuanPembelajaran {\n  id                String             @id @default(uuid())\n  userId            String\n  subjectId         String\n  phaseId           String\n  code              String\n  element           String\n  description       String\n  order             Int\n  createdAt         DateTime           @default(now())\n  updatedAt         DateTime           @updatedAt\n  promesAllocations PromesAllocation[]\n  lkpds             Lkpd[]\n  bankSoals         BankSoal[]\n  modulAjars        ModulAjar[]\n\n  @@unique([userId, subjectId, phaseId, code])\n  @@index([userId])\n}\n\nmodel PromesAllocation {\n  id                   String             @id @default(uuid())\n  userId               String\n  subjectId            String\n  phaseId              String\n  tujuanPembelajaranId String\n  month                String\n  week                 Int\n  jp                   Int\n  tujuanPembelajaran   TujuanPembelajaran @relation(fields: [tujuanPembelajaranId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, subjectId, phaseId, tujuanPembelajaranId, month, week])\n  @@index([userId])\n}\n\nmodel CalendarHoliday {\n  id          String @id @default(uuid())\n  userId      String\n  subjectId   String\n  phaseId     String\n  month       String\n  week        Int\n  description String\n\n  @@unique([userId, subjectId, phaseId, month, week])\n  @@index([userId])\n}\n\nmodel ModulAjar {\n  id        String               @id @default(uuid())\n  userId    String\n  subjectId String\n  phaseId   String\n  tps       TujuanPembelajaran[]\n  title     String\n  metadata  String\n  content   String\n  createdAt DateTime             @default(now())\n  updatedAt DateTime             @updatedAt\n  lkpds     Lkpd[]\n\n  @@index([userId])\n}\n\nmodel Lkpd {\n  id          String               @id @default(uuid())\n  userId      String\n  modulAjarId String?\n  tps         TujuanPembelajaran[]\n  type        String\n  difficulty  String\n  content     String\n  createdAt   DateTime             @default(now())\n  updatedAt   DateTime             @updatedAt\n\n  modulAjar ModulAjar? @relation(fields: [modulAjarId], references: [id], onDelete: Cascade)\n\n  @@index([userId])\n}\n\nmodel BankSoal {\n  id              String               @id @default(uuid())\n  userId          String\n  phaseId         String\n  tps             TujuanPembelajaran[]\n  cognitiveLevel  String\n  akmType         String\n  stimulus        String?\n  pertanyaan      String\n  options         String?\n  kunciJawaban    String\n  rubrikPenilaian String?\n  generateCode    String?\n  createdAt       DateTime             @default(now())\n  updatedAt       DateTime             @updatedAt\n\n  phase Phase @relation(fields: [phaseId], references: [id], onDelete: Cascade)\n\n  @@index([userId])\n}\n\nmodel PaketUjian {\n  id        String   @id @default(uuid())\n  userId    String\n  name      String\n  soalIds   String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n}\n\n// Per-user school profile (PK = userId)\nmodel SchoolProfile {\n  userId         String   @id\n  schoolName     String   @default(\"SD Negeri 3 Pringgabaya\")\n  headmasterName String   @default(\"Nama Kepala Sekolah\")\n  headmasterNip  String   @default(\"NIP Kepala Sekolah\")\n  updatedAt      DateTime @updatedAt\n}\n\n// Per-user teacher profile (PK = userId)\nmodel UserProfile {\n  userId    String   @id\n  fullName  String   @default(\"Nama Guru, S.Pd.\")\n  nip       String?  @default(\"\")\n  updatedAt DateTime @updatedAt\n}\n\n// NextAuth Tables\nmodel User {\n  id            String    @id @default(cuid())\n  name          String?\n  email         String?   @unique\n  emailVerified DateTime?\n  image         String?\n  password      String?\n  role          String?   @default(\"user\")\n  accounts      Account[]\n  sessions      Session[]\n}\n\nmodel Account {\n  id                String  @id @default(cuid())\n  userId            String\n  type              String\n  provider          String\n  providerAccountId String\n  refresh_token     String?\n  access_token      String?\n  expires_at        Int?\n  token_type        String?\n  scope             String?\n  id_token          String?\n  session_state     String?\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([provider, providerAccountId])\n}\n\nmodel Session {\n  id           String   @id @default(cuid())\n  sessionToken String   @unique\n  userId       String\n  expires      DateTime\n  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel VerificationToken {\n  identifier String\n  token      String   @unique\n  expires    DateTime\n\n  @@unique([identifier, token])\n}\n",
  "inlineSchemaHash": "31441a8babd97ad810119cbc8d90310c3f36b023c06507b4d2df60c46b4c9581",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Subject\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"capaianPembelajarans\",\"kind\":\"object\",\"type\":\"CapaianPembelajaran\",\"relationName\":\"CapaianPembelajaranToSubject\"}],\"dbName\":null},\"Phase\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"classes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"capaianPembelajarans\",\"kind\":\"object\",\"type\":\"CapaianPembelajaran\",\"relationName\":\"CapaianPembelajaranToPhase\"},{\"name\":\"bankSoals\",\"kind\":\"object\",\"type\":\"BankSoal\",\"relationName\":\"BankSoalToPhase\"}],\"dbName\":null},\"CapaianPembelajaran\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subjectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phaseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subject\",\"kind\":\"object\",\"type\":\"Subject\",\"relationName\":\"CapaianPembelajaranToSubject\"},{\"name\":\"phase\",\"kind\":\"object\",\"type\":\"Phase\",\"relationName\":\"CapaianPembelajaranToPhase\"},{\"name\":\"elements\",\"kind\":\"object\",\"type\":\"CPElement\",\"relationName\":\"CPElementToCapaianPembelajaran\"}],\"dbName\":null},\"CPElement\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"capaianPembelajaranId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"capaianPembelajaran\",\"kind\":\"object\",\"type\":\"CapaianPembelajaran\",\"relationName\":\"CPElementToCapaianPembelajaran\"}],\"dbName\":null},\"ClassSetup\":{\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subjectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phaseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"TujuanPembelajaran\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subjectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phaseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"element\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"promesAllocations\",\"kind\":\"object\",\"type\":\"PromesAllocation\",\"relationName\":\"PromesAllocationToTujuanPembelajaran\"},{\"name\":\"lkpds\",\"kind\":\"object\",\"type\":\"Lkpd\",\"relationName\":\"LkpdToTujuanPembelajaran\"},{\"name\":\"bankSoals\",\"kind\":\"object\",\"type\":\"BankSoal\",\"relationName\":\"BankSoalToTujuanPembelajaran\"},{\"name\":\"modulAjars\",\"kind\":\"object\",\"type\":\"ModulAjar\",\"relationName\":\"ModulAjarToTujuanPembelajaran\"}],\"dbName\":null},\"PromesAllocation\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subjectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phaseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tujuanPembelajaranId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"month\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"week\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"jp\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"tujuanPembelajaran\",\"kind\":\"object\",\"type\":\"TujuanPembelajaran\",\"relationName\":\"PromesAllocationToTujuanPembelajaran\"}],\"dbName\":null},\"CalendarHoliday\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subjectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phaseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"month\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"week\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"ModulAjar\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subjectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phaseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tps\",\"kind\":\"object\",\"type\":\"TujuanPembelajaran\",\"relationName\":\"ModulAjarToTujuanPembelajaran\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lkpds\",\"kind\":\"object\",\"type\":\"Lkpd\",\"relationName\":\"LkpdToModulAjar\"}],\"dbName\":null},\"Lkpd\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modulAjarId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tps\",\"kind\":\"object\",\"type\":\"TujuanPembelajaran\",\"relationName\":\"LkpdToTujuanPembelajaran\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"difficulty\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"modulAjar\",\"kind\":\"object\",\"type\":\"ModulAjar\",\"relationName\":\"LkpdToModulAjar\"}],\"dbName\":null},\"BankSoal\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phaseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tps\",\"kind\":\"object\",\"type\":\"TujuanPembelajaran\",\"relationName\":\"BankSoalToTujuanPembelajaran\"},{\"name\":\"cognitiveLevel\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"akmType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stimulus\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pertanyaan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"options\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kunciJawaban\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rubrikPenilaian\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"generateCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"phase\",\"kind\":\"object\",\"type\":\"Phase\",\"relationName\":\"BankSoalToPhase\"}],\"dbName\":null},\"PaketUjian\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"soalIds\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"SchoolProfile\":{\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"schoolName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"headmasterName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"headmasterNip\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"UserProfile\":{\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fullName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nip\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"accounts\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToUser\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"}],\"dbName\":null},\"Account\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"access_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"token_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"scope\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"id_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"session_state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AccountToUser\"}],\"dbName\":null},\"Session\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"}],\"dbName\":null},\"VerificationToken\":{\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

