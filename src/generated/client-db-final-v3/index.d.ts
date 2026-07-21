
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Phase
 * 
 */
export type Phase = $Result.DefaultSelection<Prisma.$PhasePayload>
/**
 * Model CapaianPembelajaran
 * 
 */
export type CapaianPembelajaran = $Result.DefaultSelection<Prisma.$CapaianPembelajaranPayload>
/**
 * Model CPElement
 * 
 */
export type CPElement = $Result.DefaultSelection<Prisma.$CPElementPayload>
/**
 * Model ClassSetup
 * 
 */
export type ClassSetup = $Result.DefaultSelection<Prisma.$ClassSetupPayload>
/**
 * Model TujuanPembelajaran
 * 
 */
export type TujuanPembelajaran = $Result.DefaultSelection<Prisma.$TujuanPembelajaranPayload>
/**
 * Model PromesAllocation
 * 
 */
export type PromesAllocation = $Result.DefaultSelection<Prisma.$PromesAllocationPayload>
/**
 * Model CalendarHoliday
 * 
 */
export type CalendarHoliday = $Result.DefaultSelection<Prisma.$CalendarHolidayPayload>
/**
 * Model ModulAjar
 * 
 */
export type ModulAjar = $Result.DefaultSelection<Prisma.$ModulAjarPayload>
/**
 * Model Lkpd
 * 
 */
export type Lkpd = $Result.DefaultSelection<Prisma.$LkpdPayload>
/**
 * Model BankSoal
 * 
 */
export type BankSoal = $Result.DefaultSelection<Prisma.$BankSoalPayload>
/**
 * Model PaketUjian
 * 
 */
export type PaketUjian = $Result.DefaultSelection<Prisma.$PaketUjianPayload>
/**
 * Model SchoolProfile
 * 
 */
export type SchoolProfile = $Result.DefaultSelection<Prisma.$SchoolProfilePayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Subjects
 * const subjects = await prisma.subject.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Subjects
   * const subjects = await prisma.subject.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs>;

  /**
   * `prisma.phase`: Exposes CRUD operations for the **Phase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phases
    * const phases = await prisma.phase.findMany()
    * ```
    */
  get phase(): Prisma.PhaseDelegate<ExtArgs>;

  /**
   * `prisma.capaianPembelajaran`: Exposes CRUD operations for the **CapaianPembelajaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapaianPembelajarans
    * const capaianPembelajarans = await prisma.capaianPembelajaran.findMany()
    * ```
    */
  get capaianPembelajaran(): Prisma.CapaianPembelajaranDelegate<ExtArgs>;

  /**
   * `prisma.cPElement`: Exposes CRUD operations for the **CPElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CPElements
    * const cPElements = await prisma.cPElement.findMany()
    * ```
    */
  get cPElement(): Prisma.CPElementDelegate<ExtArgs>;

  /**
   * `prisma.classSetup`: Exposes CRUD operations for the **ClassSetup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSetups
    * const classSetups = await prisma.classSetup.findMany()
    * ```
    */
  get classSetup(): Prisma.ClassSetupDelegate<ExtArgs>;

  /**
   * `prisma.tujuanPembelajaran`: Exposes CRUD operations for the **TujuanPembelajaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TujuanPembelajarans
    * const tujuanPembelajarans = await prisma.tujuanPembelajaran.findMany()
    * ```
    */
  get tujuanPembelajaran(): Prisma.TujuanPembelajaranDelegate<ExtArgs>;

  /**
   * `prisma.promesAllocation`: Exposes CRUD operations for the **PromesAllocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromesAllocations
    * const promesAllocations = await prisma.promesAllocation.findMany()
    * ```
    */
  get promesAllocation(): Prisma.PromesAllocationDelegate<ExtArgs>;

  /**
   * `prisma.calendarHoliday`: Exposes CRUD operations for the **CalendarHoliday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarHolidays
    * const calendarHolidays = await prisma.calendarHoliday.findMany()
    * ```
    */
  get calendarHoliday(): Prisma.CalendarHolidayDelegate<ExtArgs>;

  /**
   * `prisma.modulAjar`: Exposes CRUD operations for the **ModulAjar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModulAjars
    * const modulAjars = await prisma.modulAjar.findMany()
    * ```
    */
  get modulAjar(): Prisma.ModulAjarDelegate<ExtArgs>;

  /**
   * `prisma.lkpd`: Exposes CRUD operations for the **Lkpd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lkpds
    * const lkpds = await prisma.lkpd.findMany()
    * ```
    */
  get lkpd(): Prisma.LkpdDelegate<ExtArgs>;

  /**
   * `prisma.bankSoal`: Exposes CRUD operations for the **BankSoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankSoals
    * const bankSoals = await prisma.bankSoal.findMany()
    * ```
    */
  get bankSoal(): Prisma.BankSoalDelegate<ExtArgs>;

  /**
   * `prisma.paketUjian`: Exposes CRUD operations for the **PaketUjian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaketUjians
    * const paketUjians = await prisma.paketUjian.findMany()
    * ```
    */
  get paketUjian(): Prisma.PaketUjianDelegate<ExtArgs>;

  /**
   * `prisma.schoolProfile`: Exposes CRUD operations for the **SchoolProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolProfiles
    * const schoolProfiles = await prisma.schoolProfile.findMany()
    * ```
    */
  get schoolProfile(): Prisma.SchoolProfileDelegate<ExtArgs>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "subject" | "phase" | "capaianPembelajaran" | "cPElement" | "classSetup" | "tujuanPembelajaran" | "promesAllocation" | "calendarHoliday" | "modulAjar" | "lkpd" | "bankSoal" | "paketUjian" | "schoolProfile" | "userProfile" | "user" | "account" | "session" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Phase: {
        payload: Prisma.$PhasePayload<ExtArgs>
        fields: Prisma.PhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          findFirst: {
            args: Prisma.PhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          findMany: {
            args: Prisma.PhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>[]
          }
          create: {
            args: Prisma.PhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          createMany: {
            args: Prisma.PhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>[]
          }
          delete: {
            args: Prisma.PhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          update: {
            args: Prisma.PhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          deleteMany: {
            args: Prisma.PhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhasePayload>
          }
          aggregate: {
            args: Prisma.PhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhase>
          }
          groupBy: {
            args: Prisma.PhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhaseCountArgs<ExtArgs>
            result: $Utils.Optional<PhaseCountAggregateOutputType> | number
          }
        }
      }
      CapaianPembelajaran: {
        payload: Prisma.$CapaianPembelajaranPayload<ExtArgs>
        fields: Prisma.CapaianPembelajaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapaianPembelajaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapaianPembelajaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>
          }
          findFirst: {
            args: Prisma.CapaianPembelajaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapaianPembelajaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>
          }
          findMany: {
            args: Prisma.CapaianPembelajaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>[]
          }
          create: {
            args: Prisma.CapaianPembelajaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>
          }
          createMany: {
            args: Prisma.CapaianPembelajaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapaianPembelajaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>[]
          }
          delete: {
            args: Prisma.CapaianPembelajaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>
          }
          update: {
            args: Prisma.CapaianPembelajaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>
          }
          deleteMany: {
            args: Prisma.CapaianPembelajaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapaianPembelajaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CapaianPembelajaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapaianPembelajaranPayload>
          }
          aggregate: {
            args: Prisma.CapaianPembelajaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapaianPembelajaran>
          }
          groupBy: {
            args: Prisma.CapaianPembelajaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapaianPembelajaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapaianPembelajaranCountArgs<ExtArgs>
            result: $Utils.Optional<CapaianPembelajaranCountAggregateOutputType> | number
          }
        }
      }
      CPElement: {
        payload: Prisma.$CPElementPayload<ExtArgs>
        fields: Prisma.CPElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CPElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CPElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>
          }
          findFirst: {
            args: Prisma.CPElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CPElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>
          }
          findMany: {
            args: Prisma.CPElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>[]
          }
          create: {
            args: Prisma.CPElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>
          }
          createMany: {
            args: Prisma.CPElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CPElementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>[]
          }
          delete: {
            args: Prisma.CPElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>
          }
          update: {
            args: Prisma.CPElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>
          }
          deleteMany: {
            args: Prisma.CPElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CPElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CPElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CPElementPayload>
          }
          aggregate: {
            args: Prisma.CPElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCPElement>
          }
          groupBy: {
            args: Prisma.CPElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<CPElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.CPElementCountArgs<ExtArgs>
            result: $Utils.Optional<CPElementCountAggregateOutputType> | number
          }
        }
      }
      ClassSetup: {
        payload: Prisma.$ClassSetupPayload<ExtArgs>
        fields: Prisma.ClassSetupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassSetupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassSetupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>
          }
          findFirst: {
            args: Prisma.ClassSetupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassSetupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>
          }
          findMany: {
            args: Prisma.ClassSetupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>[]
          }
          create: {
            args: Prisma.ClassSetupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>
          }
          createMany: {
            args: Prisma.ClassSetupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassSetupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>[]
          }
          delete: {
            args: Prisma.ClassSetupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>
          }
          update: {
            args: Prisma.ClassSetupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>
          }
          deleteMany: {
            args: Prisma.ClassSetupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassSetupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassSetupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSetupPayload>
          }
          aggregate: {
            args: Prisma.ClassSetupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSetup>
          }
          groupBy: {
            args: Prisma.ClassSetupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassSetupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassSetupCountArgs<ExtArgs>
            result: $Utils.Optional<ClassSetupCountAggregateOutputType> | number
          }
        }
      }
      TujuanPembelajaran: {
        payload: Prisma.$TujuanPembelajaranPayload<ExtArgs>
        fields: Prisma.TujuanPembelajaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TujuanPembelajaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TujuanPembelajaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>
          }
          findFirst: {
            args: Prisma.TujuanPembelajaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TujuanPembelajaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>
          }
          findMany: {
            args: Prisma.TujuanPembelajaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>[]
          }
          create: {
            args: Prisma.TujuanPembelajaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>
          }
          createMany: {
            args: Prisma.TujuanPembelajaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TujuanPembelajaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>[]
          }
          delete: {
            args: Prisma.TujuanPembelajaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>
          }
          update: {
            args: Prisma.TujuanPembelajaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>
          }
          deleteMany: {
            args: Prisma.TujuanPembelajaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TujuanPembelajaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TujuanPembelajaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TujuanPembelajaranPayload>
          }
          aggregate: {
            args: Prisma.TujuanPembelajaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTujuanPembelajaran>
          }
          groupBy: {
            args: Prisma.TujuanPembelajaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<TujuanPembelajaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.TujuanPembelajaranCountArgs<ExtArgs>
            result: $Utils.Optional<TujuanPembelajaranCountAggregateOutputType> | number
          }
        }
      }
      PromesAllocation: {
        payload: Prisma.$PromesAllocationPayload<ExtArgs>
        fields: Prisma.PromesAllocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromesAllocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromesAllocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>
          }
          findFirst: {
            args: Prisma.PromesAllocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromesAllocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>
          }
          findMany: {
            args: Prisma.PromesAllocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>[]
          }
          create: {
            args: Prisma.PromesAllocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>
          }
          createMany: {
            args: Prisma.PromesAllocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromesAllocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>[]
          }
          delete: {
            args: Prisma.PromesAllocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>
          }
          update: {
            args: Prisma.PromesAllocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>
          }
          deleteMany: {
            args: Prisma.PromesAllocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromesAllocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromesAllocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromesAllocationPayload>
          }
          aggregate: {
            args: Prisma.PromesAllocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromesAllocation>
          }
          groupBy: {
            args: Prisma.PromesAllocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromesAllocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromesAllocationCountArgs<ExtArgs>
            result: $Utils.Optional<PromesAllocationCountAggregateOutputType> | number
          }
        }
      }
      CalendarHoliday: {
        payload: Prisma.$CalendarHolidayPayload<ExtArgs>
        fields: Prisma.CalendarHolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarHolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarHolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>
          }
          findFirst: {
            args: Prisma.CalendarHolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarHolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>
          }
          findMany: {
            args: Prisma.CalendarHolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>[]
          }
          create: {
            args: Prisma.CalendarHolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>
          }
          createMany: {
            args: Prisma.CalendarHolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarHolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>[]
          }
          delete: {
            args: Prisma.CalendarHolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>
          }
          update: {
            args: Prisma.CalendarHolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>
          }
          deleteMany: {
            args: Prisma.CalendarHolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarHolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CalendarHolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarHolidayPayload>
          }
          aggregate: {
            args: Prisma.CalendarHolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarHoliday>
          }
          groupBy: {
            args: Prisma.CalendarHolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarHolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarHolidayCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarHolidayCountAggregateOutputType> | number
          }
        }
      }
      ModulAjar: {
        payload: Prisma.$ModulAjarPayload<ExtArgs>
        fields: Prisma.ModulAjarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModulAjarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModulAjarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>
          }
          findFirst: {
            args: Prisma.ModulAjarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModulAjarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>
          }
          findMany: {
            args: Prisma.ModulAjarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>[]
          }
          create: {
            args: Prisma.ModulAjarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>
          }
          createMany: {
            args: Prisma.ModulAjarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModulAjarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>[]
          }
          delete: {
            args: Prisma.ModulAjarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>
          }
          update: {
            args: Prisma.ModulAjarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>
          }
          deleteMany: {
            args: Prisma.ModulAjarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModulAjarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModulAjarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulAjarPayload>
          }
          aggregate: {
            args: Prisma.ModulAjarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulAjar>
          }
          groupBy: {
            args: Prisma.ModulAjarGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModulAjarGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModulAjarCountArgs<ExtArgs>
            result: $Utils.Optional<ModulAjarCountAggregateOutputType> | number
          }
        }
      }
      Lkpd: {
        payload: Prisma.$LkpdPayload<ExtArgs>
        fields: Prisma.LkpdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LkpdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LkpdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>
          }
          findFirst: {
            args: Prisma.LkpdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LkpdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>
          }
          findMany: {
            args: Prisma.LkpdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>[]
          }
          create: {
            args: Prisma.LkpdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>
          }
          createMany: {
            args: Prisma.LkpdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LkpdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>[]
          }
          delete: {
            args: Prisma.LkpdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>
          }
          update: {
            args: Prisma.LkpdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>
          }
          deleteMany: {
            args: Prisma.LkpdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LkpdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LkpdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LkpdPayload>
          }
          aggregate: {
            args: Prisma.LkpdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLkpd>
          }
          groupBy: {
            args: Prisma.LkpdGroupByArgs<ExtArgs>
            result: $Utils.Optional<LkpdGroupByOutputType>[]
          }
          count: {
            args: Prisma.LkpdCountArgs<ExtArgs>
            result: $Utils.Optional<LkpdCountAggregateOutputType> | number
          }
        }
      }
      BankSoal: {
        payload: Prisma.$BankSoalPayload<ExtArgs>
        fields: Prisma.BankSoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankSoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankSoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>
          }
          findFirst: {
            args: Prisma.BankSoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankSoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>
          }
          findMany: {
            args: Prisma.BankSoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>[]
          }
          create: {
            args: Prisma.BankSoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>
          }
          createMany: {
            args: Prisma.BankSoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankSoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>[]
          }
          delete: {
            args: Prisma.BankSoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>
          }
          update: {
            args: Prisma.BankSoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>
          }
          deleteMany: {
            args: Prisma.BankSoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankSoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BankSoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSoalPayload>
          }
          aggregate: {
            args: Prisma.BankSoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankSoal>
          }
          groupBy: {
            args: Prisma.BankSoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankSoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankSoalCountArgs<ExtArgs>
            result: $Utils.Optional<BankSoalCountAggregateOutputType> | number
          }
        }
      }
      PaketUjian: {
        payload: Prisma.$PaketUjianPayload<ExtArgs>
        fields: Prisma.PaketUjianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaketUjianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaketUjianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>
          }
          findFirst: {
            args: Prisma.PaketUjianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaketUjianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>
          }
          findMany: {
            args: Prisma.PaketUjianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>[]
          }
          create: {
            args: Prisma.PaketUjianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>
          }
          createMany: {
            args: Prisma.PaketUjianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaketUjianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>[]
          }
          delete: {
            args: Prisma.PaketUjianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>
          }
          update: {
            args: Prisma.PaketUjianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>
          }
          deleteMany: {
            args: Prisma.PaketUjianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaketUjianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaketUjianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketUjianPayload>
          }
          aggregate: {
            args: Prisma.PaketUjianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaketUjian>
          }
          groupBy: {
            args: Prisma.PaketUjianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaketUjianGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaketUjianCountArgs<ExtArgs>
            result: $Utils.Optional<PaketUjianCountAggregateOutputType> | number
          }
        }
      }
      SchoolProfile: {
        payload: Prisma.$SchoolProfilePayload<ExtArgs>
        fields: Prisma.SchoolProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          findFirst: {
            args: Prisma.SchoolProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          findMany: {
            args: Prisma.SchoolProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>[]
          }
          create: {
            args: Prisma.SchoolProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          createMany: {
            args: Prisma.SchoolProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>[]
          }
          delete: {
            args: Prisma.SchoolProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          update: {
            args: Prisma.SchoolProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          deleteMany: {
            args: Prisma.SchoolProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolProfilePayload>
          }
          aggregate: {
            args: Prisma.SchoolProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolProfile>
          }
          groupBy: {
            args: Prisma.SchoolProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolProfileCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    capaianPembelajarans: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capaianPembelajarans?: boolean | SubjectCountOutputTypeCountCapaianPembelajaransArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountCapaianPembelajaransArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianPembelajaranWhereInput
  }


  /**
   * Count Type PhaseCountOutputType
   */

  export type PhaseCountOutputType = {
    capaianPembelajarans: number
    bankSoals: number
  }

  export type PhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capaianPembelajarans?: boolean | PhaseCountOutputTypeCountCapaianPembelajaransArgs
    bankSoals?: boolean | PhaseCountOutputTypeCountBankSoalsArgs
  }

  // Custom InputTypes
  /**
   * PhaseCountOutputType without action
   */
  export type PhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhaseCountOutputType
     */
    select?: PhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhaseCountOutputType without action
   */
  export type PhaseCountOutputTypeCountCapaianPembelajaransArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianPembelajaranWhereInput
  }

  /**
   * PhaseCountOutputType without action
   */
  export type PhaseCountOutputTypeCountBankSoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankSoalWhereInput
  }


  /**
   * Count Type CapaianPembelajaranCountOutputType
   */

  export type CapaianPembelajaranCountOutputType = {
    elements: number
  }

  export type CapaianPembelajaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | CapaianPembelajaranCountOutputTypeCountElementsArgs
  }

  // Custom InputTypes
  /**
   * CapaianPembelajaranCountOutputType without action
   */
  export type CapaianPembelajaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaranCountOutputType
     */
    select?: CapaianPembelajaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CapaianPembelajaranCountOutputType without action
   */
  export type CapaianPembelajaranCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CPElementWhereInput
  }


  /**
   * Count Type TujuanPembelajaranCountOutputType
   */

  export type TujuanPembelajaranCountOutputType = {
    promesAllocations: number
    lkpds: number
    bankSoals: number
    modulAjars: number
  }

  export type TujuanPembelajaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promesAllocations?: boolean | TujuanPembelajaranCountOutputTypeCountPromesAllocationsArgs
    lkpds?: boolean | TujuanPembelajaranCountOutputTypeCountLkpdsArgs
    bankSoals?: boolean | TujuanPembelajaranCountOutputTypeCountBankSoalsArgs
    modulAjars?: boolean | TujuanPembelajaranCountOutputTypeCountModulAjarsArgs
  }

  // Custom InputTypes
  /**
   * TujuanPembelajaranCountOutputType without action
   */
  export type TujuanPembelajaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaranCountOutputType
     */
    select?: TujuanPembelajaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TujuanPembelajaranCountOutputType without action
   */
  export type TujuanPembelajaranCountOutputTypeCountPromesAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromesAllocationWhereInput
  }

  /**
   * TujuanPembelajaranCountOutputType without action
   */
  export type TujuanPembelajaranCountOutputTypeCountLkpdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LkpdWhereInput
  }

  /**
   * TujuanPembelajaranCountOutputType without action
   */
  export type TujuanPembelajaranCountOutputTypeCountBankSoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankSoalWhereInput
  }

  /**
   * TujuanPembelajaranCountOutputType without action
   */
  export type TujuanPembelajaranCountOutputTypeCountModulAjarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModulAjarWhereInput
  }


  /**
   * Count Type ModulAjarCountOutputType
   */

  export type ModulAjarCountOutputType = {
    tps: number
    lkpds: number
  }

  export type ModulAjarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tps?: boolean | ModulAjarCountOutputTypeCountTpsArgs
    lkpds?: boolean | ModulAjarCountOutputTypeCountLkpdsArgs
  }

  // Custom InputTypes
  /**
   * ModulAjarCountOutputType without action
   */
  export type ModulAjarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjarCountOutputType
     */
    select?: ModulAjarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModulAjarCountOutputType without action
   */
  export type ModulAjarCountOutputTypeCountTpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TujuanPembelajaranWhereInput
  }

  /**
   * ModulAjarCountOutputType without action
   */
  export type ModulAjarCountOutputTypeCountLkpdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LkpdWhereInput
  }


  /**
   * Count Type LkpdCountOutputType
   */

  export type LkpdCountOutputType = {
    tps: number
  }

  export type LkpdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tps?: boolean | LkpdCountOutputTypeCountTpsArgs
  }

  // Custom InputTypes
  /**
   * LkpdCountOutputType without action
   */
  export type LkpdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LkpdCountOutputType
     */
    select?: LkpdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LkpdCountOutputType without action
   */
  export type LkpdCountOutputTypeCountTpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TujuanPembelajaranWhereInput
  }


  /**
   * Count Type BankSoalCountOutputType
   */

  export type BankSoalCountOutputType = {
    tps: number
  }

  export type BankSoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tps?: boolean | BankSoalCountOutputTypeCountTpsArgs
  }

  // Custom InputTypes
  /**
   * BankSoalCountOutputType without action
   */
  export type BankSoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoalCountOutputType
     */
    select?: BankSoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankSoalCountOutputType without action
   */
  export type BankSoalCountOutputTypeCountTpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TujuanPembelajaranWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    capaianPembelajarans?: boolean | Subject$capaianPembelajaransArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capaianPembelajarans?: boolean | Subject$capaianPembelajaransArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      capaianPembelajarans: Prisma.$CapaianPembelajaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    capaianPembelajarans<T extends Subject$capaianPembelajaransArgs<ExtArgs> = {}>(args?: Subset<T, Subject$capaianPembelajaransArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */ 
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly description: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject.capaianPembelajarans
   */
  export type Subject$capaianPembelajaransArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    where?: CapaianPembelajaranWhereInput
    orderBy?: CapaianPembelajaranOrderByWithRelationInput | CapaianPembelajaranOrderByWithRelationInput[]
    cursor?: CapaianPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapaianPembelajaranScalarFieldEnum | CapaianPembelajaranScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Phase
   */

  export type AggregatePhase = {
    _count: PhaseCountAggregateOutputType | null
    _min: PhaseMinAggregateOutputType | null
    _max: PhaseMaxAggregateOutputType | null
  }

  export type PhaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    classes: string | null
  }

  export type PhaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    classes: string | null
  }

  export type PhaseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    classes: number
    _all: number
  }


  export type PhaseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    classes?: true
  }

  export type PhaseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    classes?: true
  }

  export type PhaseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    classes?: true
    _all?: true
  }

  export type PhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phase to aggregate.
     */
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phases
    **/
    _count?: true | PhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhaseMaxAggregateInputType
  }

  export type GetPhaseAggregateType<T extends PhaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhase[P]>
      : GetScalarType<T[P], AggregatePhase[P]>
  }




  export type PhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhaseWhereInput
    orderBy?: PhaseOrderByWithAggregationInput | PhaseOrderByWithAggregationInput[]
    by: PhaseScalarFieldEnum[] | PhaseScalarFieldEnum
    having?: PhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhaseCountAggregateInputType | true
    _min?: PhaseMinAggregateInputType
    _max?: PhaseMaxAggregateInputType
  }

  export type PhaseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    classes: string
    _count: PhaseCountAggregateOutputType | null
    _min: PhaseMinAggregateOutputType | null
    _max: PhaseMaxAggregateOutputType | null
  }

  type GetPhaseGroupByPayload<T extends PhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhaseGroupByOutputType[P]>
            : GetScalarType<T[P], PhaseGroupByOutputType[P]>
        }
      >
    >


  export type PhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    classes?: boolean
    capaianPembelajarans?: boolean | Phase$capaianPembelajaransArgs<ExtArgs>
    bankSoals?: boolean | Phase$bankSoalsArgs<ExtArgs>
    _count?: boolean | PhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    classes?: boolean
  }, ExtArgs["result"]["phase"]>

  export type PhaseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    classes?: boolean
  }

  export type PhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capaianPembelajarans?: boolean | Phase$capaianPembelajaransArgs<ExtArgs>
    bankSoals?: boolean | Phase$bankSoalsArgs<ExtArgs>
    _count?: boolean | PhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phase"
    objects: {
      capaianPembelajarans: Prisma.$CapaianPembelajaranPayload<ExtArgs>[]
      bankSoals: Prisma.$BankSoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      classes: string
    }, ExtArgs["result"]["phase"]>
    composites: {}
  }

  type PhaseGetPayload<S extends boolean | null | undefined | PhaseDefaultArgs> = $Result.GetResult<Prisma.$PhasePayload, S>

  type PhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhaseCountAggregateInputType | true
    }

  export interface PhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phase'], meta: { name: 'Phase' } }
    /**
     * Find zero or one Phase that matches the filter.
     * @param {PhaseFindUniqueArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhaseFindUniqueArgs>(args: SelectSubset<T, PhaseFindUniqueArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Phase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhaseFindUniqueOrThrowArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Phase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseFindFirstArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhaseFindFirstArgs>(args?: SelectSubset<T, PhaseFindFirstArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Phase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseFindFirstOrThrowArgs} args - Arguments to find a Phase
     * @example
     * // Get one Phase
     * const phase = await prisma.phase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Phases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phases
     * const phases = await prisma.phase.findMany()
     * 
     * // Get first 10 Phases
     * const phases = await prisma.phase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phaseWithIdOnly = await prisma.phase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhaseFindManyArgs>(args?: SelectSubset<T, PhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Phase.
     * @param {PhaseCreateArgs} args - Arguments to create a Phase.
     * @example
     * // Create one Phase
     * const Phase = await prisma.phase.create({
     *   data: {
     *     // ... data to create a Phase
     *   }
     * })
     * 
     */
    create<T extends PhaseCreateArgs>(args: SelectSubset<T, PhaseCreateArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Phases.
     * @param {PhaseCreateManyArgs} args - Arguments to create many Phases.
     * @example
     * // Create many Phases
     * const phase = await prisma.phase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhaseCreateManyArgs>(args?: SelectSubset<T, PhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phases and returns the data saved in the database.
     * @param {PhaseCreateManyAndReturnArgs} args - Arguments to create many Phases.
     * @example
     * // Create many Phases
     * const phase = await prisma.phase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phases and only return the `id`
     * const phaseWithIdOnly = await prisma.phase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Phase.
     * @param {PhaseDeleteArgs} args - Arguments to delete one Phase.
     * @example
     * // Delete one Phase
     * const Phase = await prisma.phase.delete({
     *   where: {
     *     // ... filter to delete one Phase
     *   }
     * })
     * 
     */
    delete<T extends PhaseDeleteArgs>(args: SelectSubset<T, PhaseDeleteArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Phase.
     * @param {PhaseUpdateArgs} args - Arguments to update one Phase.
     * @example
     * // Update one Phase
     * const phase = await prisma.phase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhaseUpdateArgs>(args: SelectSubset<T, PhaseUpdateArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Phases.
     * @param {PhaseDeleteManyArgs} args - Arguments to filter Phases to delete.
     * @example
     * // Delete a few Phases
     * const { count } = await prisma.phase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhaseDeleteManyArgs>(args?: SelectSubset<T, PhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phases
     * const phase = await prisma.phase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhaseUpdateManyArgs>(args: SelectSubset<T, PhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phase.
     * @param {PhaseUpsertArgs} args - Arguments to update or create a Phase.
     * @example
     * // Update or create a Phase
     * const phase = await prisma.phase.upsert({
     *   create: {
     *     // ... data to create a Phase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phase we want to update
     *   }
     * })
     */
    upsert<T extends PhaseUpsertArgs>(args: SelectSubset<T, PhaseUpsertArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Phases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseCountArgs} args - Arguments to filter Phases to count.
     * @example
     * // Count the number of Phases
     * const count = await prisma.phase.count({
     *   where: {
     *     // ... the filter for the Phases we want to count
     *   }
     * })
    **/
    count<T extends PhaseCountArgs>(
      args?: Subset<T, PhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhaseAggregateArgs>(args: Subset<T, PhaseAggregateArgs>): Prisma.PrismaPromise<GetPhaseAggregateType<T>>

    /**
     * Group by Phase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhaseGroupByArgs['orderBy'] }
        : { orderBy?: PhaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phase model
   */
  readonly fields: PhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    capaianPembelajarans<T extends Phase$capaianPembelajaransArgs<ExtArgs> = {}>(args?: Subset<T, Phase$capaianPembelajaransArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    bankSoals<T extends Phase$bankSoalsArgs<ExtArgs> = {}>(args?: Subset<T, Phase$bankSoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Phase model
   */ 
  interface PhaseFieldRefs {
    readonly id: FieldRef<"Phase", 'String'>
    readonly name: FieldRef<"Phase", 'String'>
    readonly description: FieldRef<"Phase", 'String'>
    readonly classes: FieldRef<"Phase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Phase findUnique
   */
  export type PhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase findUniqueOrThrow
   */
  export type PhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase findFirst
   */
  export type PhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phases.
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[]
  }

  /**
   * Phase findFirstOrThrow
   */
  export type PhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phase to fetch.
     */
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phases.
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phases.
     */
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[]
  }

  /**
   * Phase findMany
   */
  export type PhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter, which Phases to fetch.
     */
    where?: PhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phases to fetch.
     */
    orderBy?: PhaseOrderByWithRelationInput | PhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phases.
     */
    cursor?: PhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phases.
     */
    skip?: number
    distinct?: PhaseScalarFieldEnum | PhaseScalarFieldEnum[]
  }

  /**
   * Phase create
   */
  export type PhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Phase.
     */
    data: XOR<PhaseCreateInput, PhaseUncheckedCreateInput>
  }

  /**
   * Phase createMany
   */
  export type PhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phases.
     */
    data: PhaseCreateManyInput | PhaseCreateManyInput[]
  }

  /**
   * Phase createManyAndReturn
   */
  export type PhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Phases.
     */
    data: PhaseCreateManyInput | PhaseCreateManyInput[]
  }

  /**
   * Phase update
   */
  export type PhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Phase.
     */
    data: XOR<PhaseUpdateInput, PhaseUncheckedUpdateInput>
    /**
     * Choose, which Phase to update.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase updateMany
   */
  export type PhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phases.
     */
    data: XOR<PhaseUpdateManyMutationInput, PhaseUncheckedUpdateManyInput>
    /**
     * Filter which Phases to update
     */
    where?: PhaseWhereInput
  }

  /**
   * Phase upsert
   */
  export type PhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Phase to update in case it exists.
     */
    where: PhaseWhereUniqueInput
    /**
     * In case the Phase found by the `where` argument doesn't exist, create a new Phase with this data.
     */
    create: XOR<PhaseCreateInput, PhaseUncheckedCreateInput>
    /**
     * In case the Phase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhaseUpdateInput, PhaseUncheckedUpdateInput>
  }

  /**
   * Phase delete
   */
  export type PhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
    /**
     * Filter which Phase to delete.
     */
    where: PhaseWhereUniqueInput
  }

  /**
   * Phase deleteMany
   */
  export type PhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phases to delete
     */
    where?: PhaseWhereInput
  }

  /**
   * Phase.capaianPembelajarans
   */
  export type Phase$capaianPembelajaransArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    where?: CapaianPembelajaranWhereInput
    orderBy?: CapaianPembelajaranOrderByWithRelationInput | CapaianPembelajaranOrderByWithRelationInput[]
    cursor?: CapaianPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapaianPembelajaranScalarFieldEnum | CapaianPembelajaranScalarFieldEnum[]
  }

  /**
   * Phase.bankSoals
   */
  export type Phase$bankSoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    where?: BankSoalWhereInput
    orderBy?: BankSoalOrderByWithRelationInput | BankSoalOrderByWithRelationInput[]
    cursor?: BankSoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankSoalScalarFieldEnum | BankSoalScalarFieldEnum[]
  }

  /**
   * Phase without action
   */
  export type PhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phase
     */
    select?: PhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhaseInclude<ExtArgs> | null
  }


  /**
   * Model CapaianPembelajaran
   */

  export type AggregateCapaianPembelajaran = {
    _count: CapaianPembelajaranCountAggregateOutputType | null
    _min: CapaianPembelajaranMinAggregateOutputType | null
    _max: CapaianPembelajaranMaxAggregateOutputType | null
  }

  export type CapaianPembelajaranMinAggregateOutputType = {
    id: string | null
    subjectId: string | null
    phaseId: string | null
    content: string | null
  }

  export type CapaianPembelajaranMaxAggregateOutputType = {
    id: string | null
    subjectId: string | null
    phaseId: string | null
    content: string | null
  }

  export type CapaianPembelajaranCountAggregateOutputType = {
    id: number
    subjectId: number
    phaseId: number
    content: number
    _all: number
  }


  export type CapaianPembelajaranMinAggregateInputType = {
    id?: true
    subjectId?: true
    phaseId?: true
    content?: true
  }

  export type CapaianPembelajaranMaxAggregateInputType = {
    id?: true
    subjectId?: true
    phaseId?: true
    content?: true
  }

  export type CapaianPembelajaranCountAggregateInputType = {
    id?: true
    subjectId?: true
    phaseId?: true
    content?: true
    _all?: true
  }

  export type CapaianPembelajaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapaianPembelajaran to aggregate.
     */
    where?: CapaianPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianPembelajarans to fetch.
     */
    orderBy?: CapaianPembelajaranOrderByWithRelationInput | CapaianPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapaianPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapaianPembelajarans
    **/
    _count?: true | CapaianPembelajaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapaianPembelajaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapaianPembelajaranMaxAggregateInputType
  }

  export type GetCapaianPembelajaranAggregateType<T extends CapaianPembelajaranAggregateArgs> = {
        [P in keyof T & keyof AggregateCapaianPembelajaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapaianPembelajaran[P]>
      : GetScalarType<T[P], AggregateCapaianPembelajaran[P]>
  }




  export type CapaianPembelajaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapaianPembelajaranWhereInput
    orderBy?: CapaianPembelajaranOrderByWithAggregationInput | CapaianPembelajaranOrderByWithAggregationInput[]
    by: CapaianPembelajaranScalarFieldEnum[] | CapaianPembelajaranScalarFieldEnum
    having?: CapaianPembelajaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapaianPembelajaranCountAggregateInputType | true
    _min?: CapaianPembelajaranMinAggregateInputType
    _max?: CapaianPembelajaranMaxAggregateInputType
  }

  export type CapaianPembelajaranGroupByOutputType = {
    id: string
    subjectId: string
    phaseId: string
    content: string
    _count: CapaianPembelajaranCountAggregateOutputType | null
    _min: CapaianPembelajaranMinAggregateOutputType | null
    _max: CapaianPembelajaranMaxAggregateOutputType | null
  }

  type GetCapaianPembelajaranGroupByPayload<T extends CapaianPembelajaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapaianPembelajaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapaianPembelajaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapaianPembelajaranGroupByOutputType[P]>
            : GetScalarType<T[P], CapaianPembelajaranGroupByOutputType[P]>
        }
      >
    >


  export type CapaianPembelajaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    phaseId?: boolean
    content?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
    elements?: boolean | CapaianPembelajaran$elementsArgs<ExtArgs>
    _count?: boolean | CapaianPembelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaianPembelajaran"]>

  export type CapaianPembelajaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    phaseId?: boolean
    content?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capaianPembelajaran"]>

  export type CapaianPembelajaranSelectScalar = {
    id?: boolean
    subjectId?: boolean
    phaseId?: boolean
    content?: boolean
  }

  export type CapaianPembelajaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
    elements?: boolean | CapaianPembelajaran$elementsArgs<ExtArgs>
    _count?: boolean | CapaianPembelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CapaianPembelajaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
  }

  export type $CapaianPembelajaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapaianPembelajaran"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      phase: Prisma.$PhasePayload<ExtArgs>
      elements: Prisma.$CPElementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectId: string
      phaseId: string
      content: string
    }, ExtArgs["result"]["capaianPembelajaran"]>
    composites: {}
  }

  type CapaianPembelajaranGetPayload<S extends boolean | null | undefined | CapaianPembelajaranDefaultArgs> = $Result.GetResult<Prisma.$CapaianPembelajaranPayload, S>

  type CapaianPembelajaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CapaianPembelajaranFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CapaianPembelajaranCountAggregateInputType | true
    }

  export interface CapaianPembelajaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapaianPembelajaran'], meta: { name: 'CapaianPembelajaran' } }
    /**
     * Find zero or one CapaianPembelajaran that matches the filter.
     * @param {CapaianPembelajaranFindUniqueArgs} args - Arguments to find a CapaianPembelajaran
     * @example
     * // Get one CapaianPembelajaran
     * const capaianPembelajaran = await prisma.capaianPembelajaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapaianPembelajaranFindUniqueArgs>(args: SelectSubset<T, CapaianPembelajaranFindUniqueArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CapaianPembelajaran that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CapaianPembelajaranFindUniqueOrThrowArgs} args - Arguments to find a CapaianPembelajaran
     * @example
     * // Get one CapaianPembelajaran
     * const capaianPembelajaran = await prisma.capaianPembelajaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapaianPembelajaranFindUniqueOrThrowArgs>(args: SelectSubset<T, CapaianPembelajaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CapaianPembelajaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianPembelajaranFindFirstArgs} args - Arguments to find a CapaianPembelajaran
     * @example
     * // Get one CapaianPembelajaran
     * const capaianPembelajaran = await prisma.capaianPembelajaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapaianPembelajaranFindFirstArgs>(args?: SelectSubset<T, CapaianPembelajaranFindFirstArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CapaianPembelajaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianPembelajaranFindFirstOrThrowArgs} args - Arguments to find a CapaianPembelajaran
     * @example
     * // Get one CapaianPembelajaran
     * const capaianPembelajaran = await prisma.capaianPembelajaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapaianPembelajaranFindFirstOrThrowArgs>(args?: SelectSubset<T, CapaianPembelajaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CapaianPembelajarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianPembelajaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapaianPembelajarans
     * const capaianPembelajarans = await prisma.capaianPembelajaran.findMany()
     * 
     * // Get first 10 CapaianPembelajarans
     * const capaianPembelajarans = await prisma.capaianPembelajaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capaianPembelajaranWithIdOnly = await prisma.capaianPembelajaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapaianPembelajaranFindManyArgs>(args?: SelectSubset<T, CapaianPembelajaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CapaianPembelajaran.
     * @param {CapaianPembelajaranCreateArgs} args - Arguments to create a CapaianPembelajaran.
     * @example
     * // Create one CapaianPembelajaran
     * const CapaianPembelajaran = await prisma.capaianPembelajaran.create({
     *   data: {
     *     // ... data to create a CapaianPembelajaran
     *   }
     * })
     * 
     */
    create<T extends CapaianPembelajaranCreateArgs>(args: SelectSubset<T, CapaianPembelajaranCreateArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CapaianPembelajarans.
     * @param {CapaianPembelajaranCreateManyArgs} args - Arguments to create many CapaianPembelajarans.
     * @example
     * // Create many CapaianPembelajarans
     * const capaianPembelajaran = await prisma.capaianPembelajaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapaianPembelajaranCreateManyArgs>(args?: SelectSubset<T, CapaianPembelajaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CapaianPembelajarans and returns the data saved in the database.
     * @param {CapaianPembelajaranCreateManyAndReturnArgs} args - Arguments to create many CapaianPembelajarans.
     * @example
     * // Create many CapaianPembelajarans
     * const capaianPembelajaran = await prisma.capaianPembelajaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CapaianPembelajarans and only return the `id`
     * const capaianPembelajaranWithIdOnly = await prisma.capaianPembelajaran.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapaianPembelajaranCreateManyAndReturnArgs>(args?: SelectSubset<T, CapaianPembelajaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CapaianPembelajaran.
     * @param {CapaianPembelajaranDeleteArgs} args - Arguments to delete one CapaianPembelajaran.
     * @example
     * // Delete one CapaianPembelajaran
     * const CapaianPembelajaran = await prisma.capaianPembelajaran.delete({
     *   where: {
     *     // ... filter to delete one CapaianPembelajaran
     *   }
     * })
     * 
     */
    delete<T extends CapaianPembelajaranDeleteArgs>(args: SelectSubset<T, CapaianPembelajaranDeleteArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CapaianPembelajaran.
     * @param {CapaianPembelajaranUpdateArgs} args - Arguments to update one CapaianPembelajaran.
     * @example
     * // Update one CapaianPembelajaran
     * const capaianPembelajaran = await prisma.capaianPembelajaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapaianPembelajaranUpdateArgs>(args: SelectSubset<T, CapaianPembelajaranUpdateArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CapaianPembelajarans.
     * @param {CapaianPembelajaranDeleteManyArgs} args - Arguments to filter CapaianPembelajarans to delete.
     * @example
     * // Delete a few CapaianPembelajarans
     * const { count } = await prisma.capaianPembelajaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapaianPembelajaranDeleteManyArgs>(args?: SelectSubset<T, CapaianPembelajaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapaianPembelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianPembelajaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapaianPembelajarans
     * const capaianPembelajaran = await prisma.capaianPembelajaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapaianPembelajaranUpdateManyArgs>(args: SelectSubset<T, CapaianPembelajaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CapaianPembelajaran.
     * @param {CapaianPembelajaranUpsertArgs} args - Arguments to update or create a CapaianPembelajaran.
     * @example
     * // Update or create a CapaianPembelajaran
     * const capaianPembelajaran = await prisma.capaianPembelajaran.upsert({
     *   create: {
     *     // ... data to create a CapaianPembelajaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapaianPembelajaran we want to update
     *   }
     * })
     */
    upsert<T extends CapaianPembelajaranUpsertArgs>(args: SelectSubset<T, CapaianPembelajaranUpsertArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CapaianPembelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianPembelajaranCountArgs} args - Arguments to filter CapaianPembelajarans to count.
     * @example
     * // Count the number of CapaianPembelajarans
     * const count = await prisma.capaianPembelajaran.count({
     *   where: {
     *     // ... the filter for the CapaianPembelajarans we want to count
     *   }
     * })
    **/
    count<T extends CapaianPembelajaranCountArgs>(
      args?: Subset<T, CapaianPembelajaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapaianPembelajaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapaianPembelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianPembelajaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapaianPembelajaranAggregateArgs>(args: Subset<T, CapaianPembelajaranAggregateArgs>): Prisma.PrismaPromise<GetCapaianPembelajaranAggregateType<T>>

    /**
     * Group by CapaianPembelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapaianPembelajaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapaianPembelajaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapaianPembelajaranGroupByArgs['orderBy'] }
        : { orderBy?: CapaianPembelajaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapaianPembelajaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapaianPembelajaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapaianPembelajaran model
   */
  readonly fields: CapaianPembelajaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapaianPembelajaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapaianPembelajaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    phase<T extends PhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhaseDefaultArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    elements<T extends CapaianPembelajaran$elementsArgs<ExtArgs> = {}>(args?: Subset<T, CapaianPembelajaran$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CapaianPembelajaran model
   */ 
  interface CapaianPembelajaranFieldRefs {
    readonly id: FieldRef<"CapaianPembelajaran", 'String'>
    readonly subjectId: FieldRef<"CapaianPembelajaran", 'String'>
    readonly phaseId: FieldRef<"CapaianPembelajaran", 'String'>
    readonly content: FieldRef<"CapaianPembelajaran", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CapaianPembelajaran findUnique
   */
  export type CapaianPembelajaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which CapaianPembelajaran to fetch.
     */
    where: CapaianPembelajaranWhereUniqueInput
  }

  /**
   * CapaianPembelajaran findUniqueOrThrow
   */
  export type CapaianPembelajaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which CapaianPembelajaran to fetch.
     */
    where: CapaianPembelajaranWhereUniqueInput
  }

  /**
   * CapaianPembelajaran findFirst
   */
  export type CapaianPembelajaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which CapaianPembelajaran to fetch.
     */
    where?: CapaianPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianPembelajarans to fetch.
     */
    orderBy?: CapaianPembelajaranOrderByWithRelationInput | CapaianPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapaianPembelajarans.
     */
    cursor?: CapaianPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapaianPembelajarans.
     */
    distinct?: CapaianPembelajaranScalarFieldEnum | CapaianPembelajaranScalarFieldEnum[]
  }

  /**
   * CapaianPembelajaran findFirstOrThrow
   */
  export type CapaianPembelajaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which CapaianPembelajaran to fetch.
     */
    where?: CapaianPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianPembelajarans to fetch.
     */
    orderBy?: CapaianPembelajaranOrderByWithRelationInput | CapaianPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapaianPembelajarans.
     */
    cursor?: CapaianPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapaianPembelajarans.
     */
    distinct?: CapaianPembelajaranScalarFieldEnum | CapaianPembelajaranScalarFieldEnum[]
  }

  /**
   * CapaianPembelajaran findMany
   */
  export type CapaianPembelajaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which CapaianPembelajarans to fetch.
     */
    where?: CapaianPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapaianPembelajarans to fetch.
     */
    orderBy?: CapaianPembelajaranOrderByWithRelationInput | CapaianPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapaianPembelajarans.
     */
    cursor?: CapaianPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapaianPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapaianPembelajarans.
     */
    skip?: number
    distinct?: CapaianPembelajaranScalarFieldEnum | CapaianPembelajaranScalarFieldEnum[]
  }

  /**
   * CapaianPembelajaran create
   */
  export type CapaianPembelajaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * The data needed to create a CapaianPembelajaran.
     */
    data: XOR<CapaianPembelajaranCreateInput, CapaianPembelajaranUncheckedCreateInput>
  }

  /**
   * CapaianPembelajaran createMany
   */
  export type CapaianPembelajaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapaianPembelajarans.
     */
    data: CapaianPembelajaranCreateManyInput | CapaianPembelajaranCreateManyInput[]
  }

  /**
   * CapaianPembelajaran createManyAndReturn
   */
  export type CapaianPembelajaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CapaianPembelajarans.
     */
    data: CapaianPembelajaranCreateManyInput | CapaianPembelajaranCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CapaianPembelajaran update
   */
  export type CapaianPembelajaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * The data needed to update a CapaianPembelajaran.
     */
    data: XOR<CapaianPembelajaranUpdateInput, CapaianPembelajaranUncheckedUpdateInput>
    /**
     * Choose, which CapaianPembelajaran to update.
     */
    where: CapaianPembelajaranWhereUniqueInput
  }

  /**
   * CapaianPembelajaran updateMany
   */
  export type CapaianPembelajaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapaianPembelajarans.
     */
    data: XOR<CapaianPembelajaranUpdateManyMutationInput, CapaianPembelajaranUncheckedUpdateManyInput>
    /**
     * Filter which CapaianPembelajarans to update
     */
    where?: CapaianPembelajaranWhereInput
  }

  /**
   * CapaianPembelajaran upsert
   */
  export type CapaianPembelajaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * The filter to search for the CapaianPembelajaran to update in case it exists.
     */
    where: CapaianPembelajaranWhereUniqueInput
    /**
     * In case the CapaianPembelajaran found by the `where` argument doesn't exist, create a new CapaianPembelajaran with this data.
     */
    create: XOR<CapaianPembelajaranCreateInput, CapaianPembelajaranUncheckedCreateInput>
    /**
     * In case the CapaianPembelajaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapaianPembelajaranUpdateInput, CapaianPembelajaranUncheckedUpdateInput>
  }

  /**
   * CapaianPembelajaran delete
   */
  export type CapaianPembelajaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
    /**
     * Filter which CapaianPembelajaran to delete.
     */
    where: CapaianPembelajaranWhereUniqueInput
  }

  /**
   * CapaianPembelajaran deleteMany
   */
  export type CapaianPembelajaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapaianPembelajarans to delete
     */
    where?: CapaianPembelajaranWhereInput
  }

  /**
   * CapaianPembelajaran.elements
   */
  export type CapaianPembelajaran$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    where?: CPElementWhereInput
    orderBy?: CPElementOrderByWithRelationInput | CPElementOrderByWithRelationInput[]
    cursor?: CPElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CPElementScalarFieldEnum | CPElementScalarFieldEnum[]
  }

  /**
   * CapaianPembelajaran without action
   */
  export type CapaianPembelajaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapaianPembelajaran
     */
    select?: CapaianPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapaianPembelajaranInclude<ExtArgs> | null
  }


  /**
   * Model CPElement
   */

  export type AggregateCPElement = {
    _count: CPElementCountAggregateOutputType | null
    _min: CPElementMinAggregateOutputType | null
    _max: CPElementMaxAggregateOutputType | null
  }

  export type CPElementMinAggregateOutputType = {
    id: string | null
    capaianPembelajaranId: string | null
    name: string | null
    content: string | null
  }

  export type CPElementMaxAggregateOutputType = {
    id: string | null
    capaianPembelajaranId: string | null
    name: string | null
    content: string | null
  }

  export type CPElementCountAggregateOutputType = {
    id: number
    capaianPembelajaranId: number
    name: number
    content: number
    _all: number
  }


  export type CPElementMinAggregateInputType = {
    id?: true
    capaianPembelajaranId?: true
    name?: true
    content?: true
  }

  export type CPElementMaxAggregateInputType = {
    id?: true
    capaianPembelajaranId?: true
    name?: true
    content?: true
  }

  export type CPElementCountAggregateInputType = {
    id?: true
    capaianPembelajaranId?: true
    name?: true
    content?: true
    _all?: true
  }

  export type CPElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CPElement to aggregate.
     */
    where?: CPElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CPElements to fetch.
     */
    orderBy?: CPElementOrderByWithRelationInput | CPElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CPElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CPElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CPElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CPElements
    **/
    _count?: true | CPElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CPElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CPElementMaxAggregateInputType
  }

  export type GetCPElementAggregateType<T extends CPElementAggregateArgs> = {
        [P in keyof T & keyof AggregateCPElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCPElement[P]>
      : GetScalarType<T[P], AggregateCPElement[P]>
  }




  export type CPElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CPElementWhereInput
    orderBy?: CPElementOrderByWithAggregationInput | CPElementOrderByWithAggregationInput[]
    by: CPElementScalarFieldEnum[] | CPElementScalarFieldEnum
    having?: CPElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CPElementCountAggregateInputType | true
    _min?: CPElementMinAggregateInputType
    _max?: CPElementMaxAggregateInputType
  }

  export type CPElementGroupByOutputType = {
    id: string
    capaianPembelajaranId: string
    name: string
    content: string
    _count: CPElementCountAggregateOutputType | null
    _min: CPElementMinAggregateOutputType | null
    _max: CPElementMaxAggregateOutputType | null
  }

  type GetCPElementGroupByPayload<T extends CPElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CPElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CPElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CPElementGroupByOutputType[P]>
            : GetScalarType<T[P], CPElementGroupByOutputType[P]>
        }
      >
    >


  export type CPElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capaianPembelajaranId?: boolean
    name?: boolean
    content?: boolean
    capaianPembelajaran?: boolean | CapaianPembelajaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cPElement"]>

  export type CPElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capaianPembelajaranId?: boolean
    name?: boolean
    content?: boolean
    capaianPembelajaran?: boolean | CapaianPembelajaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cPElement"]>

  export type CPElementSelectScalar = {
    id?: boolean
    capaianPembelajaranId?: boolean
    name?: boolean
    content?: boolean
  }

  export type CPElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capaianPembelajaran?: boolean | CapaianPembelajaranDefaultArgs<ExtArgs>
  }
  export type CPElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capaianPembelajaran?: boolean | CapaianPembelajaranDefaultArgs<ExtArgs>
  }

  export type $CPElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CPElement"
    objects: {
      capaianPembelajaran: Prisma.$CapaianPembelajaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      capaianPembelajaranId: string
      name: string
      content: string
    }, ExtArgs["result"]["cPElement"]>
    composites: {}
  }

  type CPElementGetPayload<S extends boolean | null | undefined | CPElementDefaultArgs> = $Result.GetResult<Prisma.$CPElementPayload, S>

  type CPElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CPElementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CPElementCountAggregateInputType | true
    }

  export interface CPElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CPElement'], meta: { name: 'CPElement' } }
    /**
     * Find zero or one CPElement that matches the filter.
     * @param {CPElementFindUniqueArgs} args - Arguments to find a CPElement
     * @example
     * // Get one CPElement
     * const cPElement = await prisma.cPElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CPElementFindUniqueArgs>(args: SelectSubset<T, CPElementFindUniqueArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CPElement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CPElementFindUniqueOrThrowArgs} args - Arguments to find a CPElement
     * @example
     * // Get one CPElement
     * const cPElement = await prisma.cPElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CPElementFindUniqueOrThrowArgs>(args: SelectSubset<T, CPElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CPElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPElementFindFirstArgs} args - Arguments to find a CPElement
     * @example
     * // Get one CPElement
     * const cPElement = await prisma.cPElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CPElementFindFirstArgs>(args?: SelectSubset<T, CPElementFindFirstArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CPElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPElementFindFirstOrThrowArgs} args - Arguments to find a CPElement
     * @example
     * // Get one CPElement
     * const cPElement = await prisma.cPElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CPElementFindFirstOrThrowArgs>(args?: SelectSubset<T, CPElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CPElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CPElements
     * const cPElements = await prisma.cPElement.findMany()
     * 
     * // Get first 10 CPElements
     * const cPElements = await prisma.cPElement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cPElementWithIdOnly = await prisma.cPElement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CPElementFindManyArgs>(args?: SelectSubset<T, CPElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CPElement.
     * @param {CPElementCreateArgs} args - Arguments to create a CPElement.
     * @example
     * // Create one CPElement
     * const CPElement = await prisma.cPElement.create({
     *   data: {
     *     // ... data to create a CPElement
     *   }
     * })
     * 
     */
    create<T extends CPElementCreateArgs>(args: SelectSubset<T, CPElementCreateArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CPElements.
     * @param {CPElementCreateManyArgs} args - Arguments to create many CPElements.
     * @example
     * // Create many CPElements
     * const cPElement = await prisma.cPElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CPElementCreateManyArgs>(args?: SelectSubset<T, CPElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CPElements and returns the data saved in the database.
     * @param {CPElementCreateManyAndReturnArgs} args - Arguments to create many CPElements.
     * @example
     * // Create many CPElements
     * const cPElement = await prisma.cPElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CPElements and only return the `id`
     * const cPElementWithIdOnly = await prisma.cPElement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CPElementCreateManyAndReturnArgs>(args?: SelectSubset<T, CPElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CPElement.
     * @param {CPElementDeleteArgs} args - Arguments to delete one CPElement.
     * @example
     * // Delete one CPElement
     * const CPElement = await prisma.cPElement.delete({
     *   where: {
     *     // ... filter to delete one CPElement
     *   }
     * })
     * 
     */
    delete<T extends CPElementDeleteArgs>(args: SelectSubset<T, CPElementDeleteArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CPElement.
     * @param {CPElementUpdateArgs} args - Arguments to update one CPElement.
     * @example
     * // Update one CPElement
     * const cPElement = await prisma.cPElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CPElementUpdateArgs>(args: SelectSubset<T, CPElementUpdateArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CPElements.
     * @param {CPElementDeleteManyArgs} args - Arguments to filter CPElements to delete.
     * @example
     * // Delete a few CPElements
     * const { count } = await prisma.cPElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CPElementDeleteManyArgs>(args?: SelectSubset<T, CPElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CPElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CPElements
     * const cPElement = await prisma.cPElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CPElementUpdateManyArgs>(args: SelectSubset<T, CPElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CPElement.
     * @param {CPElementUpsertArgs} args - Arguments to update or create a CPElement.
     * @example
     * // Update or create a CPElement
     * const cPElement = await prisma.cPElement.upsert({
     *   create: {
     *     // ... data to create a CPElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CPElement we want to update
     *   }
     * })
     */
    upsert<T extends CPElementUpsertArgs>(args: SelectSubset<T, CPElementUpsertArgs<ExtArgs>>): Prisma__CPElementClient<$Result.GetResult<Prisma.$CPElementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CPElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPElementCountArgs} args - Arguments to filter CPElements to count.
     * @example
     * // Count the number of CPElements
     * const count = await prisma.cPElement.count({
     *   where: {
     *     // ... the filter for the CPElements we want to count
     *   }
     * })
    **/
    count<T extends CPElementCountArgs>(
      args?: Subset<T, CPElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CPElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CPElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CPElementAggregateArgs>(args: Subset<T, CPElementAggregateArgs>): Prisma.PrismaPromise<GetCPElementAggregateType<T>>

    /**
     * Group by CPElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CPElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CPElementGroupByArgs['orderBy'] }
        : { orderBy?: CPElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CPElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCPElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CPElement model
   */
  readonly fields: CPElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CPElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CPElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    capaianPembelajaran<T extends CapaianPembelajaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CapaianPembelajaranDefaultArgs<ExtArgs>>): Prisma__CapaianPembelajaranClient<$Result.GetResult<Prisma.$CapaianPembelajaranPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CPElement model
   */ 
  interface CPElementFieldRefs {
    readonly id: FieldRef<"CPElement", 'String'>
    readonly capaianPembelajaranId: FieldRef<"CPElement", 'String'>
    readonly name: FieldRef<"CPElement", 'String'>
    readonly content: FieldRef<"CPElement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CPElement findUnique
   */
  export type CPElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * Filter, which CPElement to fetch.
     */
    where: CPElementWhereUniqueInput
  }

  /**
   * CPElement findUniqueOrThrow
   */
  export type CPElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * Filter, which CPElement to fetch.
     */
    where: CPElementWhereUniqueInput
  }

  /**
   * CPElement findFirst
   */
  export type CPElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * Filter, which CPElement to fetch.
     */
    where?: CPElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CPElements to fetch.
     */
    orderBy?: CPElementOrderByWithRelationInput | CPElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CPElements.
     */
    cursor?: CPElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CPElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CPElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CPElements.
     */
    distinct?: CPElementScalarFieldEnum | CPElementScalarFieldEnum[]
  }

  /**
   * CPElement findFirstOrThrow
   */
  export type CPElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * Filter, which CPElement to fetch.
     */
    where?: CPElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CPElements to fetch.
     */
    orderBy?: CPElementOrderByWithRelationInput | CPElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CPElements.
     */
    cursor?: CPElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CPElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CPElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CPElements.
     */
    distinct?: CPElementScalarFieldEnum | CPElementScalarFieldEnum[]
  }

  /**
   * CPElement findMany
   */
  export type CPElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * Filter, which CPElements to fetch.
     */
    where?: CPElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CPElements to fetch.
     */
    orderBy?: CPElementOrderByWithRelationInput | CPElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CPElements.
     */
    cursor?: CPElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CPElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CPElements.
     */
    skip?: number
    distinct?: CPElementScalarFieldEnum | CPElementScalarFieldEnum[]
  }

  /**
   * CPElement create
   */
  export type CPElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * The data needed to create a CPElement.
     */
    data: XOR<CPElementCreateInput, CPElementUncheckedCreateInput>
  }

  /**
   * CPElement createMany
   */
  export type CPElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CPElements.
     */
    data: CPElementCreateManyInput | CPElementCreateManyInput[]
  }

  /**
   * CPElement createManyAndReturn
   */
  export type CPElementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CPElements.
     */
    data: CPElementCreateManyInput | CPElementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CPElement update
   */
  export type CPElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * The data needed to update a CPElement.
     */
    data: XOR<CPElementUpdateInput, CPElementUncheckedUpdateInput>
    /**
     * Choose, which CPElement to update.
     */
    where: CPElementWhereUniqueInput
  }

  /**
   * CPElement updateMany
   */
  export type CPElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CPElements.
     */
    data: XOR<CPElementUpdateManyMutationInput, CPElementUncheckedUpdateManyInput>
    /**
     * Filter which CPElements to update
     */
    where?: CPElementWhereInput
  }

  /**
   * CPElement upsert
   */
  export type CPElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * The filter to search for the CPElement to update in case it exists.
     */
    where: CPElementWhereUniqueInput
    /**
     * In case the CPElement found by the `where` argument doesn't exist, create a new CPElement with this data.
     */
    create: XOR<CPElementCreateInput, CPElementUncheckedCreateInput>
    /**
     * In case the CPElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CPElementUpdateInput, CPElementUncheckedUpdateInput>
  }

  /**
   * CPElement delete
   */
  export type CPElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
    /**
     * Filter which CPElement to delete.
     */
    where: CPElementWhereUniqueInput
  }

  /**
   * CPElement deleteMany
   */
  export type CPElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CPElements to delete
     */
    where?: CPElementWhereInput
  }

  /**
   * CPElement without action
   */
  export type CPElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CPElement
     */
    select?: CPElementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CPElementInclude<ExtArgs> | null
  }


  /**
   * Model ClassSetup
   */

  export type AggregateClassSetup = {
    _count: ClassSetupCountAggregateOutputType | null
    _min: ClassSetupMinAggregateOutputType | null
    _max: ClassSetupMaxAggregateOutputType | null
  }

  export type ClassSetupMinAggregateOutputType = {
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    updatedAt: Date | null
  }

  export type ClassSetupMaxAggregateOutputType = {
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    updatedAt: Date | null
  }

  export type ClassSetupCountAggregateOutputType = {
    userId: number
    subjectId: number
    phaseId: number
    updatedAt: number
    _all: number
  }


  export type ClassSetupMinAggregateInputType = {
    userId?: true
    subjectId?: true
    phaseId?: true
    updatedAt?: true
  }

  export type ClassSetupMaxAggregateInputType = {
    userId?: true
    subjectId?: true
    phaseId?: true
    updatedAt?: true
  }

  export type ClassSetupCountAggregateInputType = {
    userId?: true
    subjectId?: true
    phaseId?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassSetupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSetup to aggregate.
     */
    where?: ClassSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSetups to fetch.
     */
    orderBy?: ClassSetupOrderByWithRelationInput | ClassSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSetups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSetups
    **/
    _count?: true | ClassSetupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassSetupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassSetupMaxAggregateInputType
  }

  export type GetClassSetupAggregateType<T extends ClassSetupAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSetup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSetup[P]>
      : GetScalarType<T[P], AggregateClassSetup[P]>
  }




  export type ClassSetupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSetupWhereInput
    orderBy?: ClassSetupOrderByWithAggregationInput | ClassSetupOrderByWithAggregationInput[]
    by: ClassSetupScalarFieldEnum[] | ClassSetupScalarFieldEnum
    having?: ClassSetupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassSetupCountAggregateInputType | true
    _min?: ClassSetupMinAggregateInputType
    _max?: ClassSetupMaxAggregateInputType
  }

  export type ClassSetupGroupByOutputType = {
    userId: string
    subjectId: string
    phaseId: string
    updatedAt: Date
    _count: ClassSetupCountAggregateOutputType | null
    _min: ClassSetupMinAggregateOutputType | null
    _max: ClassSetupMaxAggregateOutputType | null
  }

  type GetClassSetupGroupByPayload<T extends ClassSetupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassSetupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassSetupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassSetupGroupByOutputType[P]>
            : GetScalarType<T[P], ClassSetupGroupByOutputType[P]>
        }
      >
    >


  export type ClassSetupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classSetup"]>

  export type ClassSetupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classSetup"]>

  export type ClassSetupSelectScalar = {
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    updatedAt?: boolean
  }


  export type $ClassSetupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSetup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      subjectId: string
      phaseId: string
      updatedAt: Date
    }, ExtArgs["result"]["classSetup"]>
    composites: {}
  }

  type ClassSetupGetPayload<S extends boolean | null | undefined | ClassSetupDefaultArgs> = $Result.GetResult<Prisma.$ClassSetupPayload, S>

  type ClassSetupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClassSetupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClassSetupCountAggregateInputType | true
    }

  export interface ClassSetupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSetup'], meta: { name: 'ClassSetup' } }
    /**
     * Find zero or one ClassSetup that matches the filter.
     * @param {ClassSetupFindUniqueArgs} args - Arguments to find a ClassSetup
     * @example
     * // Get one ClassSetup
     * const classSetup = await prisma.classSetup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassSetupFindUniqueArgs>(args: SelectSubset<T, ClassSetupFindUniqueArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClassSetup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClassSetupFindUniqueOrThrowArgs} args - Arguments to find a ClassSetup
     * @example
     * // Get one ClassSetup
     * const classSetup = await prisma.classSetup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassSetupFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassSetupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClassSetup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSetupFindFirstArgs} args - Arguments to find a ClassSetup
     * @example
     * // Get one ClassSetup
     * const classSetup = await prisma.classSetup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassSetupFindFirstArgs>(args?: SelectSubset<T, ClassSetupFindFirstArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClassSetup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSetupFindFirstOrThrowArgs} args - Arguments to find a ClassSetup
     * @example
     * // Get one ClassSetup
     * const classSetup = await prisma.classSetup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassSetupFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassSetupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClassSetups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSetupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSetups
     * const classSetups = await prisma.classSetup.findMany()
     * 
     * // Get first 10 ClassSetups
     * const classSetups = await prisma.classSetup.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const classSetupWithUserIdOnly = await prisma.classSetup.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ClassSetupFindManyArgs>(args?: SelectSubset<T, ClassSetupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClassSetup.
     * @param {ClassSetupCreateArgs} args - Arguments to create a ClassSetup.
     * @example
     * // Create one ClassSetup
     * const ClassSetup = await prisma.classSetup.create({
     *   data: {
     *     // ... data to create a ClassSetup
     *   }
     * })
     * 
     */
    create<T extends ClassSetupCreateArgs>(args: SelectSubset<T, ClassSetupCreateArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClassSetups.
     * @param {ClassSetupCreateManyArgs} args - Arguments to create many ClassSetups.
     * @example
     * // Create many ClassSetups
     * const classSetup = await prisma.classSetup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassSetupCreateManyArgs>(args?: SelectSubset<T, ClassSetupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassSetups and returns the data saved in the database.
     * @param {ClassSetupCreateManyAndReturnArgs} args - Arguments to create many ClassSetups.
     * @example
     * // Create many ClassSetups
     * const classSetup = await prisma.classSetup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassSetups and only return the `userId`
     * const classSetupWithUserIdOnly = await prisma.classSetup.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassSetupCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassSetupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClassSetup.
     * @param {ClassSetupDeleteArgs} args - Arguments to delete one ClassSetup.
     * @example
     * // Delete one ClassSetup
     * const ClassSetup = await prisma.classSetup.delete({
     *   where: {
     *     // ... filter to delete one ClassSetup
     *   }
     * })
     * 
     */
    delete<T extends ClassSetupDeleteArgs>(args: SelectSubset<T, ClassSetupDeleteArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClassSetup.
     * @param {ClassSetupUpdateArgs} args - Arguments to update one ClassSetup.
     * @example
     * // Update one ClassSetup
     * const classSetup = await prisma.classSetup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassSetupUpdateArgs>(args: SelectSubset<T, ClassSetupUpdateArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClassSetups.
     * @param {ClassSetupDeleteManyArgs} args - Arguments to filter ClassSetups to delete.
     * @example
     * // Delete a few ClassSetups
     * const { count } = await prisma.classSetup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassSetupDeleteManyArgs>(args?: SelectSubset<T, ClassSetupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSetups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSetupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSetups
     * const classSetup = await prisma.classSetup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassSetupUpdateManyArgs>(args: SelectSubset<T, ClassSetupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClassSetup.
     * @param {ClassSetupUpsertArgs} args - Arguments to update or create a ClassSetup.
     * @example
     * // Update or create a ClassSetup
     * const classSetup = await prisma.classSetup.upsert({
     *   create: {
     *     // ... data to create a ClassSetup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSetup we want to update
     *   }
     * })
     */
    upsert<T extends ClassSetupUpsertArgs>(args: SelectSubset<T, ClassSetupUpsertArgs<ExtArgs>>): Prisma__ClassSetupClient<$Result.GetResult<Prisma.$ClassSetupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClassSetups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSetupCountArgs} args - Arguments to filter ClassSetups to count.
     * @example
     * // Count the number of ClassSetups
     * const count = await prisma.classSetup.count({
     *   where: {
     *     // ... the filter for the ClassSetups we want to count
     *   }
     * })
    **/
    count<T extends ClassSetupCountArgs>(
      args?: Subset<T, ClassSetupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassSetupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSetup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSetupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassSetupAggregateArgs>(args: Subset<T, ClassSetupAggregateArgs>): Prisma.PrismaPromise<GetClassSetupAggregateType<T>>

    /**
     * Group by ClassSetup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSetupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassSetupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassSetupGroupByArgs['orderBy'] }
        : { orderBy?: ClassSetupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassSetupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassSetupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSetup model
   */
  readonly fields: ClassSetupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSetup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassSetupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassSetup model
   */ 
  interface ClassSetupFieldRefs {
    readonly userId: FieldRef<"ClassSetup", 'String'>
    readonly subjectId: FieldRef<"ClassSetup", 'String'>
    readonly phaseId: FieldRef<"ClassSetup", 'String'>
    readonly updatedAt: FieldRef<"ClassSetup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassSetup findUnique
   */
  export type ClassSetupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * Filter, which ClassSetup to fetch.
     */
    where: ClassSetupWhereUniqueInput
  }

  /**
   * ClassSetup findUniqueOrThrow
   */
  export type ClassSetupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * Filter, which ClassSetup to fetch.
     */
    where: ClassSetupWhereUniqueInput
  }

  /**
   * ClassSetup findFirst
   */
  export type ClassSetupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * Filter, which ClassSetup to fetch.
     */
    where?: ClassSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSetups to fetch.
     */
    orderBy?: ClassSetupOrderByWithRelationInput | ClassSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSetups.
     */
    cursor?: ClassSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSetups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSetups.
     */
    distinct?: ClassSetupScalarFieldEnum | ClassSetupScalarFieldEnum[]
  }

  /**
   * ClassSetup findFirstOrThrow
   */
  export type ClassSetupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * Filter, which ClassSetup to fetch.
     */
    where?: ClassSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSetups to fetch.
     */
    orderBy?: ClassSetupOrderByWithRelationInput | ClassSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSetups.
     */
    cursor?: ClassSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSetups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSetups.
     */
    distinct?: ClassSetupScalarFieldEnum | ClassSetupScalarFieldEnum[]
  }

  /**
   * ClassSetup findMany
   */
  export type ClassSetupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * Filter, which ClassSetups to fetch.
     */
    where?: ClassSetupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSetups to fetch.
     */
    orderBy?: ClassSetupOrderByWithRelationInput | ClassSetupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSetups.
     */
    cursor?: ClassSetupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSetups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSetups.
     */
    skip?: number
    distinct?: ClassSetupScalarFieldEnum | ClassSetupScalarFieldEnum[]
  }

  /**
   * ClassSetup create
   */
  export type ClassSetupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * The data needed to create a ClassSetup.
     */
    data: XOR<ClassSetupCreateInput, ClassSetupUncheckedCreateInput>
  }

  /**
   * ClassSetup createMany
   */
  export type ClassSetupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSetups.
     */
    data: ClassSetupCreateManyInput | ClassSetupCreateManyInput[]
  }

  /**
   * ClassSetup createManyAndReturn
   */
  export type ClassSetupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClassSetups.
     */
    data: ClassSetupCreateManyInput | ClassSetupCreateManyInput[]
  }

  /**
   * ClassSetup update
   */
  export type ClassSetupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * The data needed to update a ClassSetup.
     */
    data: XOR<ClassSetupUpdateInput, ClassSetupUncheckedUpdateInput>
    /**
     * Choose, which ClassSetup to update.
     */
    where: ClassSetupWhereUniqueInput
  }

  /**
   * ClassSetup updateMany
   */
  export type ClassSetupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSetups.
     */
    data: XOR<ClassSetupUpdateManyMutationInput, ClassSetupUncheckedUpdateManyInput>
    /**
     * Filter which ClassSetups to update
     */
    where?: ClassSetupWhereInput
  }

  /**
   * ClassSetup upsert
   */
  export type ClassSetupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * The filter to search for the ClassSetup to update in case it exists.
     */
    where: ClassSetupWhereUniqueInput
    /**
     * In case the ClassSetup found by the `where` argument doesn't exist, create a new ClassSetup with this data.
     */
    create: XOR<ClassSetupCreateInput, ClassSetupUncheckedCreateInput>
    /**
     * In case the ClassSetup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassSetupUpdateInput, ClassSetupUncheckedUpdateInput>
  }

  /**
   * ClassSetup delete
   */
  export type ClassSetupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
    /**
     * Filter which ClassSetup to delete.
     */
    where: ClassSetupWhereUniqueInput
  }

  /**
   * ClassSetup deleteMany
   */
  export type ClassSetupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSetups to delete
     */
    where?: ClassSetupWhereInput
  }

  /**
   * ClassSetup without action
   */
  export type ClassSetupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSetup
     */
    select?: ClassSetupSelect<ExtArgs> | null
  }


  /**
   * Model TujuanPembelajaran
   */

  export type AggregateTujuanPembelajaran = {
    _count: TujuanPembelajaranCountAggregateOutputType | null
    _avg: TujuanPembelajaranAvgAggregateOutputType | null
    _sum: TujuanPembelajaranSumAggregateOutputType | null
    _min: TujuanPembelajaranMinAggregateOutputType | null
    _max: TujuanPembelajaranMaxAggregateOutputType | null
  }

  export type TujuanPembelajaranAvgAggregateOutputType = {
    order: number | null
  }

  export type TujuanPembelajaranSumAggregateOutputType = {
    order: number | null
  }

  export type TujuanPembelajaranMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    code: string | null
    element: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TujuanPembelajaranMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    code: string | null
    element: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TujuanPembelajaranCountAggregateOutputType = {
    id: number
    userId: number
    subjectId: number
    phaseId: number
    code: number
    element: number
    description: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TujuanPembelajaranAvgAggregateInputType = {
    order?: true
  }

  export type TujuanPembelajaranSumAggregateInputType = {
    order?: true
  }

  export type TujuanPembelajaranMinAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    code?: true
    element?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TujuanPembelajaranMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    code?: true
    element?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TujuanPembelajaranCountAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    code?: true
    element?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TujuanPembelajaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TujuanPembelajaran to aggregate.
     */
    where?: TujuanPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TujuanPembelajarans to fetch.
     */
    orderBy?: TujuanPembelajaranOrderByWithRelationInput | TujuanPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TujuanPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TujuanPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TujuanPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TujuanPembelajarans
    **/
    _count?: true | TujuanPembelajaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TujuanPembelajaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TujuanPembelajaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TujuanPembelajaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TujuanPembelajaranMaxAggregateInputType
  }

  export type GetTujuanPembelajaranAggregateType<T extends TujuanPembelajaranAggregateArgs> = {
        [P in keyof T & keyof AggregateTujuanPembelajaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTujuanPembelajaran[P]>
      : GetScalarType<T[P], AggregateTujuanPembelajaran[P]>
  }




  export type TujuanPembelajaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TujuanPembelajaranWhereInput
    orderBy?: TujuanPembelajaranOrderByWithAggregationInput | TujuanPembelajaranOrderByWithAggregationInput[]
    by: TujuanPembelajaranScalarFieldEnum[] | TujuanPembelajaranScalarFieldEnum
    having?: TujuanPembelajaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TujuanPembelajaranCountAggregateInputType | true
    _avg?: TujuanPembelajaranAvgAggregateInputType
    _sum?: TujuanPembelajaranSumAggregateInputType
    _min?: TujuanPembelajaranMinAggregateInputType
    _max?: TujuanPembelajaranMaxAggregateInputType
  }

  export type TujuanPembelajaranGroupByOutputType = {
    id: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: TujuanPembelajaranCountAggregateOutputType | null
    _avg: TujuanPembelajaranAvgAggregateOutputType | null
    _sum: TujuanPembelajaranSumAggregateOutputType | null
    _min: TujuanPembelajaranMinAggregateOutputType | null
    _max: TujuanPembelajaranMaxAggregateOutputType | null
  }

  type GetTujuanPembelajaranGroupByPayload<T extends TujuanPembelajaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TujuanPembelajaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TujuanPembelajaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TujuanPembelajaranGroupByOutputType[P]>
            : GetScalarType<T[P], TujuanPembelajaranGroupByOutputType[P]>
        }
      >
    >


  export type TujuanPembelajaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    code?: boolean
    element?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promesAllocations?: boolean | TujuanPembelajaran$promesAllocationsArgs<ExtArgs>
    lkpds?: boolean | TujuanPembelajaran$lkpdsArgs<ExtArgs>
    bankSoals?: boolean | TujuanPembelajaran$bankSoalsArgs<ExtArgs>
    modulAjars?: boolean | TujuanPembelajaran$modulAjarsArgs<ExtArgs>
    _count?: boolean | TujuanPembelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tujuanPembelajaran"]>

  export type TujuanPembelajaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    code?: boolean
    element?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tujuanPembelajaran"]>

  export type TujuanPembelajaranSelectScalar = {
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    code?: boolean
    element?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TujuanPembelajaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promesAllocations?: boolean | TujuanPembelajaran$promesAllocationsArgs<ExtArgs>
    lkpds?: boolean | TujuanPembelajaran$lkpdsArgs<ExtArgs>
    bankSoals?: boolean | TujuanPembelajaran$bankSoalsArgs<ExtArgs>
    modulAjars?: boolean | TujuanPembelajaran$modulAjarsArgs<ExtArgs>
    _count?: boolean | TujuanPembelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TujuanPembelajaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TujuanPembelajaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TujuanPembelajaran"
    objects: {
      promesAllocations: Prisma.$PromesAllocationPayload<ExtArgs>[]
      lkpds: Prisma.$LkpdPayload<ExtArgs>[]
      bankSoals: Prisma.$BankSoalPayload<ExtArgs>[]
      modulAjars: Prisma.$ModulAjarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subjectId: string
      phaseId: string
      code: string
      element: string
      description: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tujuanPembelajaran"]>
    composites: {}
  }

  type TujuanPembelajaranGetPayload<S extends boolean | null | undefined | TujuanPembelajaranDefaultArgs> = $Result.GetResult<Prisma.$TujuanPembelajaranPayload, S>

  type TujuanPembelajaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TujuanPembelajaranFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TujuanPembelajaranCountAggregateInputType | true
    }

  export interface TujuanPembelajaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TujuanPembelajaran'], meta: { name: 'TujuanPembelajaran' } }
    /**
     * Find zero or one TujuanPembelajaran that matches the filter.
     * @param {TujuanPembelajaranFindUniqueArgs} args - Arguments to find a TujuanPembelajaran
     * @example
     * // Get one TujuanPembelajaran
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TujuanPembelajaranFindUniqueArgs>(args: SelectSubset<T, TujuanPembelajaranFindUniqueArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TujuanPembelajaran that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TujuanPembelajaranFindUniqueOrThrowArgs} args - Arguments to find a TujuanPembelajaran
     * @example
     * // Get one TujuanPembelajaran
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TujuanPembelajaranFindUniqueOrThrowArgs>(args: SelectSubset<T, TujuanPembelajaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TujuanPembelajaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TujuanPembelajaranFindFirstArgs} args - Arguments to find a TujuanPembelajaran
     * @example
     * // Get one TujuanPembelajaran
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TujuanPembelajaranFindFirstArgs>(args?: SelectSubset<T, TujuanPembelajaranFindFirstArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TujuanPembelajaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TujuanPembelajaranFindFirstOrThrowArgs} args - Arguments to find a TujuanPembelajaran
     * @example
     * // Get one TujuanPembelajaran
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TujuanPembelajaranFindFirstOrThrowArgs>(args?: SelectSubset<T, TujuanPembelajaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TujuanPembelajarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TujuanPembelajaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TujuanPembelajarans
     * const tujuanPembelajarans = await prisma.tujuanPembelajaran.findMany()
     * 
     * // Get first 10 TujuanPembelajarans
     * const tujuanPembelajarans = await prisma.tujuanPembelajaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tujuanPembelajaranWithIdOnly = await prisma.tujuanPembelajaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TujuanPembelajaranFindManyArgs>(args?: SelectSubset<T, TujuanPembelajaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TujuanPembelajaran.
     * @param {TujuanPembelajaranCreateArgs} args - Arguments to create a TujuanPembelajaran.
     * @example
     * // Create one TujuanPembelajaran
     * const TujuanPembelajaran = await prisma.tujuanPembelajaran.create({
     *   data: {
     *     // ... data to create a TujuanPembelajaran
     *   }
     * })
     * 
     */
    create<T extends TujuanPembelajaranCreateArgs>(args: SelectSubset<T, TujuanPembelajaranCreateArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TujuanPembelajarans.
     * @param {TujuanPembelajaranCreateManyArgs} args - Arguments to create many TujuanPembelajarans.
     * @example
     * // Create many TujuanPembelajarans
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TujuanPembelajaranCreateManyArgs>(args?: SelectSubset<T, TujuanPembelajaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TujuanPembelajarans and returns the data saved in the database.
     * @param {TujuanPembelajaranCreateManyAndReturnArgs} args - Arguments to create many TujuanPembelajarans.
     * @example
     * // Create many TujuanPembelajarans
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TujuanPembelajarans and only return the `id`
     * const tujuanPembelajaranWithIdOnly = await prisma.tujuanPembelajaran.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TujuanPembelajaranCreateManyAndReturnArgs>(args?: SelectSubset<T, TujuanPembelajaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TujuanPembelajaran.
     * @param {TujuanPembelajaranDeleteArgs} args - Arguments to delete one TujuanPembelajaran.
     * @example
     * // Delete one TujuanPembelajaran
     * const TujuanPembelajaran = await prisma.tujuanPembelajaran.delete({
     *   where: {
     *     // ... filter to delete one TujuanPembelajaran
     *   }
     * })
     * 
     */
    delete<T extends TujuanPembelajaranDeleteArgs>(args: SelectSubset<T, TujuanPembelajaranDeleteArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TujuanPembelajaran.
     * @param {TujuanPembelajaranUpdateArgs} args - Arguments to update one TujuanPembelajaran.
     * @example
     * // Update one TujuanPembelajaran
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TujuanPembelajaranUpdateArgs>(args: SelectSubset<T, TujuanPembelajaranUpdateArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TujuanPembelajarans.
     * @param {TujuanPembelajaranDeleteManyArgs} args - Arguments to filter TujuanPembelajarans to delete.
     * @example
     * // Delete a few TujuanPembelajarans
     * const { count } = await prisma.tujuanPembelajaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TujuanPembelajaranDeleteManyArgs>(args?: SelectSubset<T, TujuanPembelajaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TujuanPembelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TujuanPembelajaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TujuanPembelajarans
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TujuanPembelajaranUpdateManyArgs>(args: SelectSubset<T, TujuanPembelajaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TujuanPembelajaran.
     * @param {TujuanPembelajaranUpsertArgs} args - Arguments to update or create a TujuanPembelajaran.
     * @example
     * // Update or create a TujuanPembelajaran
     * const tujuanPembelajaran = await prisma.tujuanPembelajaran.upsert({
     *   create: {
     *     // ... data to create a TujuanPembelajaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TujuanPembelajaran we want to update
     *   }
     * })
     */
    upsert<T extends TujuanPembelajaranUpsertArgs>(args: SelectSubset<T, TujuanPembelajaranUpsertArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TujuanPembelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TujuanPembelajaranCountArgs} args - Arguments to filter TujuanPembelajarans to count.
     * @example
     * // Count the number of TujuanPembelajarans
     * const count = await prisma.tujuanPembelajaran.count({
     *   where: {
     *     // ... the filter for the TujuanPembelajarans we want to count
     *   }
     * })
    **/
    count<T extends TujuanPembelajaranCountArgs>(
      args?: Subset<T, TujuanPembelajaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TujuanPembelajaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TujuanPembelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TujuanPembelajaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TujuanPembelajaranAggregateArgs>(args: Subset<T, TujuanPembelajaranAggregateArgs>): Prisma.PrismaPromise<GetTujuanPembelajaranAggregateType<T>>

    /**
     * Group by TujuanPembelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TujuanPembelajaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TujuanPembelajaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TujuanPembelajaranGroupByArgs['orderBy'] }
        : { orderBy?: TujuanPembelajaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TujuanPembelajaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTujuanPembelajaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TujuanPembelajaran model
   */
  readonly fields: TujuanPembelajaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TujuanPembelajaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TujuanPembelajaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promesAllocations<T extends TujuanPembelajaran$promesAllocationsArgs<ExtArgs> = {}>(args?: Subset<T, TujuanPembelajaran$promesAllocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "findMany"> | Null>
    lkpds<T extends TujuanPembelajaran$lkpdsArgs<ExtArgs> = {}>(args?: Subset<T, TujuanPembelajaran$lkpdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "findMany"> | Null>
    bankSoals<T extends TujuanPembelajaran$bankSoalsArgs<ExtArgs> = {}>(args?: Subset<T, TujuanPembelajaran$bankSoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "findMany"> | Null>
    modulAjars<T extends TujuanPembelajaran$modulAjarsArgs<ExtArgs> = {}>(args?: Subset<T, TujuanPembelajaran$modulAjarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TujuanPembelajaran model
   */ 
  interface TujuanPembelajaranFieldRefs {
    readonly id: FieldRef<"TujuanPembelajaran", 'String'>
    readonly userId: FieldRef<"TujuanPembelajaran", 'String'>
    readonly subjectId: FieldRef<"TujuanPembelajaran", 'String'>
    readonly phaseId: FieldRef<"TujuanPembelajaran", 'String'>
    readonly code: FieldRef<"TujuanPembelajaran", 'String'>
    readonly element: FieldRef<"TujuanPembelajaran", 'String'>
    readonly description: FieldRef<"TujuanPembelajaran", 'String'>
    readonly order: FieldRef<"TujuanPembelajaran", 'Int'>
    readonly createdAt: FieldRef<"TujuanPembelajaran", 'DateTime'>
    readonly updatedAt: FieldRef<"TujuanPembelajaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TujuanPembelajaran findUnique
   */
  export type TujuanPembelajaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which TujuanPembelajaran to fetch.
     */
    where: TujuanPembelajaranWhereUniqueInput
  }

  /**
   * TujuanPembelajaran findUniqueOrThrow
   */
  export type TujuanPembelajaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which TujuanPembelajaran to fetch.
     */
    where: TujuanPembelajaranWhereUniqueInput
  }

  /**
   * TujuanPembelajaran findFirst
   */
  export type TujuanPembelajaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which TujuanPembelajaran to fetch.
     */
    where?: TujuanPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TujuanPembelajarans to fetch.
     */
    orderBy?: TujuanPembelajaranOrderByWithRelationInput | TujuanPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TujuanPembelajarans.
     */
    cursor?: TujuanPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TujuanPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TujuanPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TujuanPembelajarans.
     */
    distinct?: TujuanPembelajaranScalarFieldEnum | TujuanPembelajaranScalarFieldEnum[]
  }

  /**
   * TujuanPembelajaran findFirstOrThrow
   */
  export type TujuanPembelajaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which TujuanPembelajaran to fetch.
     */
    where?: TujuanPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TujuanPembelajarans to fetch.
     */
    orderBy?: TujuanPembelajaranOrderByWithRelationInput | TujuanPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TujuanPembelajarans.
     */
    cursor?: TujuanPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TujuanPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TujuanPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TujuanPembelajarans.
     */
    distinct?: TujuanPembelajaranScalarFieldEnum | TujuanPembelajaranScalarFieldEnum[]
  }

  /**
   * TujuanPembelajaran findMany
   */
  export type TujuanPembelajaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which TujuanPembelajarans to fetch.
     */
    where?: TujuanPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TujuanPembelajarans to fetch.
     */
    orderBy?: TujuanPembelajaranOrderByWithRelationInput | TujuanPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TujuanPembelajarans.
     */
    cursor?: TujuanPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TujuanPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TujuanPembelajarans.
     */
    skip?: number
    distinct?: TujuanPembelajaranScalarFieldEnum | TujuanPembelajaranScalarFieldEnum[]
  }

  /**
   * TujuanPembelajaran create
   */
  export type TujuanPembelajaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * The data needed to create a TujuanPembelajaran.
     */
    data: XOR<TujuanPembelajaranCreateInput, TujuanPembelajaranUncheckedCreateInput>
  }

  /**
   * TujuanPembelajaran createMany
   */
  export type TujuanPembelajaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TujuanPembelajarans.
     */
    data: TujuanPembelajaranCreateManyInput | TujuanPembelajaranCreateManyInput[]
  }

  /**
   * TujuanPembelajaran createManyAndReturn
   */
  export type TujuanPembelajaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TujuanPembelajarans.
     */
    data: TujuanPembelajaranCreateManyInput | TujuanPembelajaranCreateManyInput[]
  }

  /**
   * TujuanPembelajaran update
   */
  export type TujuanPembelajaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * The data needed to update a TujuanPembelajaran.
     */
    data: XOR<TujuanPembelajaranUpdateInput, TujuanPembelajaranUncheckedUpdateInput>
    /**
     * Choose, which TujuanPembelajaran to update.
     */
    where: TujuanPembelajaranWhereUniqueInput
  }

  /**
   * TujuanPembelajaran updateMany
   */
  export type TujuanPembelajaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TujuanPembelajarans.
     */
    data: XOR<TujuanPembelajaranUpdateManyMutationInput, TujuanPembelajaranUncheckedUpdateManyInput>
    /**
     * Filter which TujuanPembelajarans to update
     */
    where?: TujuanPembelajaranWhereInput
  }

  /**
   * TujuanPembelajaran upsert
   */
  export type TujuanPembelajaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * The filter to search for the TujuanPembelajaran to update in case it exists.
     */
    where: TujuanPembelajaranWhereUniqueInput
    /**
     * In case the TujuanPembelajaran found by the `where` argument doesn't exist, create a new TujuanPembelajaran with this data.
     */
    create: XOR<TujuanPembelajaranCreateInput, TujuanPembelajaranUncheckedCreateInput>
    /**
     * In case the TujuanPembelajaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TujuanPembelajaranUpdateInput, TujuanPembelajaranUncheckedUpdateInput>
  }

  /**
   * TujuanPembelajaran delete
   */
  export type TujuanPembelajaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    /**
     * Filter which TujuanPembelajaran to delete.
     */
    where: TujuanPembelajaranWhereUniqueInput
  }

  /**
   * TujuanPembelajaran deleteMany
   */
  export type TujuanPembelajaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TujuanPembelajarans to delete
     */
    where?: TujuanPembelajaranWhereInput
  }

  /**
   * TujuanPembelajaran.promesAllocations
   */
  export type TujuanPembelajaran$promesAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    where?: PromesAllocationWhereInput
    orderBy?: PromesAllocationOrderByWithRelationInput | PromesAllocationOrderByWithRelationInput[]
    cursor?: PromesAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromesAllocationScalarFieldEnum | PromesAllocationScalarFieldEnum[]
  }

  /**
   * TujuanPembelajaran.lkpds
   */
  export type TujuanPembelajaran$lkpdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    where?: LkpdWhereInput
    orderBy?: LkpdOrderByWithRelationInput | LkpdOrderByWithRelationInput[]
    cursor?: LkpdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LkpdScalarFieldEnum | LkpdScalarFieldEnum[]
  }

  /**
   * TujuanPembelajaran.bankSoals
   */
  export type TujuanPembelajaran$bankSoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    where?: BankSoalWhereInput
    orderBy?: BankSoalOrderByWithRelationInput | BankSoalOrderByWithRelationInput[]
    cursor?: BankSoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankSoalScalarFieldEnum | BankSoalScalarFieldEnum[]
  }

  /**
   * TujuanPembelajaran.modulAjars
   */
  export type TujuanPembelajaran$modulAjarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    where?: ModulAjarWhereInput
    orderBy?: ModulAjarOrderByWithRelationInput | ModulAjarOrderByWithRelationInput[]
    cursor?: ModulAjarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModulAjarScalarFieldEnum | ModulAjarScalarFieldEnum[]
  }

  /**
   * TujuanPembelajaran without action
   */
  export type TujuanPembelajaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
  }


  /**
   * Model PromesAllocation
   */

  export type AggregatePromesAllocation = {
    _count: PromesAllocationCountAggregateOutputType | null
    _avg: PromesAllocationAvgAggregateOutputType | null
    _sum: PromesAllocationSumAggregateOutputType | null
    _min: PromesAllocationMinAggregateOutputType | null
    _max: PromesAllocationMaxAggregateOutputType | null
  }

  export type PromesAllocationAvgAggregateOutputType = {
    week: number | null
    jp: number | null
  }

  export type PromesAllocationSumAggregateOutputType = {
    week: number | null
    jp: number | null
  }

  export type PromesAllocationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    tujuanPembelajaranId: string | null
    month: string | null
    week: number | null
    jp: number | null
  }

  export type PromesAllocationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    tujuanPembelajaranId: string | null
    month: string | null
    week: number | null
    jp: number | null
  }

  export type PromesAllocationCountAggregateOutputType = {
    id: number
    userId: number
    subjectId: number
    phaseId: number
    tujuanPembelajaranId: number
    month: number
    week: number
    jp: number
    _all: number
  }


  export type PromesAllocationAvgAggregateInputType = {
    week?: true
    jp?: true
  }

  export type PromesAllocationSumAggregateInputType = {
    week?: true
    jp?: true
  }

  export type PromesAllocationMinAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    tujuanPembelajaranId?: true
    month?: true
    week?: true
    jp?: true
  }

  export type PromesAllocationMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    tujuanPembelajaranId?: true
    month?: true
    week?: true
    jp?: true
  }

  export type PromesAllocationCountAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    tujuanPembelajaranId?: true
    month?: true
    week?: true
    jp?: true
    _all?: true
  }

  export type PromesAllocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromesAllocation to aggregate.
     */
    where?: PromesAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromesAllocations to fetch.
     */
    orderBy?: PromesAllocationOrderByWithRelationInput | PromesAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromesAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromesAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromesAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromesAllocations
    **/
    _count?: true | PromesAllocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromesAllocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromesAllocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromesAllocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromesAllocationMaxAggregateInputType
  }

  export type GetPromesAllocationAggregateType<T extends PromesAllocationAggregateArgs> = {
        [P in keyof T & keyof AggregatePromesAllocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromesAllocation[P]>
      : GetScalarType<T[P], AggregatePromesAllocation[P]>
  }




  export type PromesAllocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromesAllocationWhereInput
    orderBy?: PromesAllocationOrderByWithAggregationInput | PromesAllocationOrderByWithAggregationInput[]
    by: PromesAllocationScalarFieldEnum[] | PromesAllocationScalarFieldEnum
    having?: PromesAllocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromesAllocationCountAggregateInputType | true
    _avg?: PromesAllocationAvgAggregateInputType
    _sum?: PromesAllocationSumAggregateInputType
    _min?: PromesAllocationMinAggregateInputType
    _max?: PromesAllocationMaxAggregateInputType
  }

  export type PromesAllocationGroupByOutputType = {
    id: string
    userId: string
    subjectId: string
    phaseId: string
    tujuanPembelajaranId: string
    month: string
    week: number
    jp: number
    _count: PromesAllocationCountAggregateOutputType | null
    _avg: PromesAllocationAvgAggregateOutputType | null
    _sum: PromesAllocationSumAggregateOutputType | null
    _min: PromesAllocationMinAggregateOutputType | null
    _max: PromesAllocationMaxAggregateOutputType | null
  }

  type GetPromesAllocationGroupByPayload<T extends PromesAllocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromesAllocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromesAllocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromesAllocationGroupByOutputType[P]>
            : GetScalarType<T[P], PromesAllocationGroupByOutputType[P]>
        }
      >
    >


  export type PromesAllocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    tujuanPembelajaranId?: boolean
    month?: boolean
    week?: boolean
    jp?: boolean
    tujuanPembelajaran?: boolean | TujuanPembelajaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promesAllocation"]>

  export type PromesAllocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    tujuanPembelajaranId?: boolean
    month?: boolean
    week?: boolean
    jp?: boolean
    tujuanPembelajaran?: boolean | TujuanPembelajaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promesAllocation"]>

  export type PromesAllocationSelectScalar = {
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    tujuanPembelajaranId?: boolean
    month?: boolean
    week?: boolean
    jp?: boolean
  }

  export type PromesAllocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tujuanPembelajaran?: boolean | TujuanPembelajaranDefaultArgs<ExtArgs>
  }
  export type PromesAllocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tujuanPembelajaran?: boolean | TujuanPembelajaranDefaultArgs<ExtArgs>
  }

  export type $PromesAllocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromesAllocation"
    objects: {
      tujuanPembelajaran: Prisma.$TujuanPembelajaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subjectId: string
      phaseId: string
      tujuanPembelajaranId: string
      month: string
      week: number
      jp: number
    }, ExtArgs["result"]["promesAllocation"]>
    composites: {}
  }

  type PromesAllocationGetPayload<S extends boolean | null | undefined | PromesAllocationDefaultArgs> = $Result.GetResult<Prisma.$PromesAllocationPayload, S>

  type PromesAllocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromesAllocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromesAllocationCountAggregateInputType | true
    }

  export interface PromesAllocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromesAllocation'], meta: { name: 'PromesAllocation' } }
    /**
     * Find zero or one PromesAllocation that matches the filter.
     * @param {PromesAllocationFindUniqueArgs} args - Arguments to find a PromesAllocation
     * @example
     * // Get one PromesAllocation
     * const promesAllocation = await prisma.promesAllocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromesAllocationFindUniqueArgs>(args: SelectSubset<T, PromesAllocationFindUniqueArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PromesAllocation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromesAllocationFindUniqueOrThrowArgs} args - Arguments to find a PromesAllocation
     * @example
     * // Get one PromesAllocation
     * const promesAllocation = await prisma.promesAllocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromesAllocationFindUniqueOrThrowArgs>(args: SelectSubset<T, PromesAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PromesAllocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromesAllocationFindFirstArgs} args - Arguments to find a PromesAllocation
     * @example
     * // Get one PromesAllocation
     * const promesAllocation = await prisma.promesAllocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromesAllocationFindFirstArgs>(args?: SelectSubset<T, PromesAllocationFindFirstArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PromesAllocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromesAllocationFindFirstOrThrowArgs} args - Arguments to find a PromesAllocation
     * @example
     * // Get one PromesAllocation
     * const promesAllocation = await prisma.promesAllocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromesAllocationFindFirstOrThrowArgs>(args?: SelectSubset<T, PromesAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PromesAllocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromesAllocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromesAllocations
     * const promesAllocations = await prisma.promesAllocation.findMany()
     * 
     * // Get first 10 PromesAllocations
     * const promesAllocations = await prisma.promesAllocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promesAllocationWithIdOnly = await prisma.promesAllocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromesAllocationFindManyArgs>(args?: SelectSubset<T, PromesAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PromesAllocation.
     * @param {PromesAllocationCreateArgs} args - Arguments to create a PromesAllocation.
     * @example
     * // Create one PromesAllocation
     * const PromesAllocation = await prisma.promesAllocation.create({
     *   data: {
     *     // ... data to create a PromesAllocation
     *   }
     * })
     * 
     */
    create<T extends PromesAllocationCreateArgs>(args: SelectSubset<T, PromesAllocationCreateArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PromesAllocations.
     * @param {PromesAllocationCreateManyArgs} args - Arguments to create many PromesAllocations.
     * @example
     * // Create many PromesAllocations
     * const promesAllocation = await prisma.promesAllocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromesAllocationCreateManyArgs>(args?: SelectSubset<T, PromesAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromesAllocations and returns the data saved in the database.
     * @param {PromesAllocationCreateManyAndReturnArgs} args - Arguments to create many PromesAllocations.
     * @example
     * // Create many PromesAllocations
     * const promesAllocation = await prisma.promesAllocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromesAllocations and only return the `id`
     * const promesAllocationWithIdOnly = await prisma.promesAllocation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromesAllocationCreateManyAndReturnArgs>(args?: SelectSubset<T, PromesAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PromesAllocation.
     * @param {PromesAllocationDeleteArgs} args - Arguments to delete one PromesAllocation.
     * @example
     * // Delete one PromesAllocation
     * const PromesAllocation = await prisma.promesAllocation.delete({
     *   where: {
     *     // ... filter to delete one PromesAllocation
     *   }
     * })
     * 
     */
    delete<T extends PromesAllocationDeleteArgs>(args: SelectSubset<T, PromesAllocationDeleteArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PromesAllocation.
     * @param {PromesAllocationUpdateArgs} args - Arguments to update one PromesAllocation.
     * @example
     * // Update one PromesAllocation
     * const promesAllocation = await prisma.promesAllocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromesAllocationUpdateArgs>(args: SelectSubset<T, PromesAllocationUpdateArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PromesAllocations.
     * @param {PromesAllocationDeleteManyArgs} args - Arguments to filter PromesAllocations to delete.
     * @example
     * // Delete a few PromesAllocations
     * const { count } = await prisma.promesAllocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromesAllocationDeleteManyArgs>(args?: SelectSubset<T, PromesAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromesAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromesAllocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromesAllocations
     * const promesAllocation = await prisma.promesAllocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromesAllocationUpdateManyArgs>(args: SelectSubset<T, PromesAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromesAllocation.
     * @param {PromesAllocationUpsertArgs} args - Arguments to update or create a PromesAllocation.
     * @example
     * // Update or create a PromesAllocation
     * const promesAllocation = await prisma.promesAllocation.upsert({
     *   create: {
     *     // ... data to create a PromesAllocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromesAllocation we want to update
     *   }
     * })
     */
    upsert<T extends PromesAllocationUpsertArgs>(args: SelectSubset<T, PromesAllocationUpsertArgs<ExtArgs>>): Prisma__PromesAllocationClient<$Result.GetResult<Prisma.$PromesAllocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PromesAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromesAllocationCountArgs} args - Arguments to filter PromesAllocations to count.
     * @example
     * // Count the number of PromesAllocations
     * const count = await prisma.promesAllocation.count({
     *   where: {
     *     // ... the filter for the PromesAllocations we want to count
     *   }
     * })
    **/
    count<T extends PromesAllocationCountArgs>(
      args?: Subset<T, PromesAllocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromesAllocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromesAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromesAllocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromesAllocationAggregateArgs>(args: Subset<T, PromesAllocationAggregateArgs>): Prisma.PrismaPromise<GetPromesAllocationAggregateType<T>>

    /**
     * Group by PromesAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromesAllocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromesAllocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromesAllocationGroupByArgs['orderBy'] }
        : { orderBy?: PromesAllocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromesAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromesAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromesAllocation model
   */
  readonly fields: PromesAllocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromesAllocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromesAllocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tujuanPembelajaran<T extends TujuanPembelajaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TujuanPembelajaranDefaultArgs<ExtArgs>>): Prisma__TujuanPembelajaranClient<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromesAllocation model
   */ 
  interface PromesAllocationFieldRefs {
    readonly id: FieldRef<"PromesAllocation", 'String'>
    readonly userId: FieldRef<"PromesAllocation", 'String'>
    readonly subjectId: FieldRef<"PromesAllocation", 'String'>
    readonly phaseId: FieldRef<"PromesAllocation", 'String'>
    readonly tujuanPembelajaranId: FieldRef<"PromesAllocation", 'String'>
    readonly month: FieldRef<"PromesAllocation", 'String'>
    readonly week: FieldRef<"PromesAllocation", 'Int'>
    readonly jp: FieldRef<"PromesAllocation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PromesAllocation findUnique
   */
  export type PromesAllocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PromesAllocation to fetch.
     */
    where: PromesAllocationWhereUniqueInput
  }

  /**
   * PromesAllocation findUniqueOrThrow
   */
  export type PromesAllocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PromesAllocation to fetch.
     */
    where: PromesAllocationWhereUniqueInput
  }

  /**
   * PromesAllocation findFirst
   */
  export type PromesAllocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PromesAllocation to fetch.
     */
    where?: PromesAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromesAllocations to fetch.
     */
    orderBy?: PromesAllocationOrderByWithRelationInput | PromesAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromesAllocations.
     */
    cursor?: PromesAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromesAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromesAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromesAllocations.
     */
    distinct?: PromesAllocationScalarFieldEnum | PromesAllocationScalarFieldEnum[]
  }

  /**
   * PromesAllocation findFirstOrThrow
   */
  export type PromesAllocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PromesAllocation to fetch.
     */
    where?: PromesAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromesAllocations to fetch.
     */
    orderBy?: PromesAllocationOrderByWithRelationInput | PromesAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromesAllocations.
     */
    cursor?: PromesAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromesAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromesAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromesAllocations.
     */
    distinct?: PromesAllocationScalarFieldEnum | PromesAllocationScalarFieldEnum[]
  }

  /**
   * PromesAllocation findMany
   */
  export type PromesAllocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PromesAllocations to fetch.
     */
    where?: PromesAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromesAllocations to fetch.
     */
    orderBy?: PromesAllocationOrderByWithRelationInput | PromesAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromesAllocations.
     */
    cursor?: PromesAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromesAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromesAllocations.
     */
    skip?: number
    distinct?: PromesAllocationScalarFieldEnum | PromesAllocationScalarFieldEnum[]
  }

  /**
   * PromesAllocation create
   */
  export type PromesAllocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * The data needed to create a PromesAllocation.
     */
    data: XOR<PromesAllocationCreateInput, PromesAllocationUncheckedCreateInput>
  }

  /**
   * PromesAllocation createMany
   */
  export type PromesAllocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromesAllocations.
     */
    data: PromesAllocationCreateManyInput | PromesAllocationCreateManyInput[]
  }

  /**
   * PromesAllocation createManyAndReturn
   */
  export type PromesAllocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PromesAllocations.
     */
    data: PromesAllocationCreateManyInput | PromesAllocationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromesAllocation update
   */
  export type PromesAllocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * The data needed to update a PromesAllocation.
     */
    data: XOR<PromesAllocationUpdateInput, PromesAllocationUncheckedUpdateInput>
    /**
     * Choose, which PromesAllocation to update.
     */
    where: PromesAllocationWhereUniqueInput
  }

  /**
   * PromesAllocation updateMany
   */
  export type PromesAllocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromesAllocations.
     */
    data: XOR<PromesAllocationUpdateManyMutationInput, PromesAllocationUncheckedUpdateManyInput>
    /**
     * Filter which PromesAllocations to update
     */
    where?: PromesAllocationWhereInput
  }

  /**
   * PromesAllocation upsert
   */
  export type PromesAllocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * The filter to search for the PromesAllocation to update in case it exists.
     */
    where: PromesAllocationWhereUniqueInput
    /**
     * In case the PromesAllocation found by the `where` argument doesn't exist, create a new PromesAllocation with this data.
     */
    create: XOR<PromesAllocationCreateInput, PromesAllocationUncheckedCreateInput>
    /**
     * In case the PromesAllocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromesAllocationUpdateInput, PromesAllocationUncheckedUpdateInput>
  }

  /**
   * PromesAllocation delete
   */
  export type PromesAllocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
    /**
     * Filter which PromesAllocation to delete.
     */
    where: PromesAllocationWhereUniqueInput
  }

  /**
   * PromesAllocation deleteMany
   */
  export type PromesAllocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromesAllocations to delete
     */
    where?: PromesAllocationWhereInput
  }

  /**
   * PromesAllocation without action
   */
  export type PromesAllocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromesAllocation
     */
    select?: PromesAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromesAllocationInclude<ExtArgs> | null
  }


  /**
   * Model CalendarHoliday
   */

  export type AggregateCalendarHoliday = {
    _count: CalendarHolidayCountAggregateOutputType | null
    _avg: CalendarHolidayAvgAggregateOutputType | null
    _sum: CalendarHolidaySumAggregateOutputType | null
    _min: CalendarHolidayMinAggregateOutputType | null
    _max: CalendarHolidayMaxAggregateOutputType | null
  }

  export type CalendarHolidayAvgAggregateOutputType = {
    week: number | null
  }

  export type CalendarHolidaySumAggregateOutputType = {
    week: number | null
  }

  export type CalendarHolidayMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    month: string | null
    week: number | null
    description: string | null
  }

  export type CalendarHolidayMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    month: string | null
    week: number | null
    description: string | null
  }

  export type CalendarHolidayCountAggregateOutputType = {
    id: number
    userId: number
    subjectId: number
    phaseId: number
    month: number
    week: number
    description: number
    _all: number
  }


  export type CalendarHolidayAvgAggregateInputType = {
    week?: true
  }

  export type CalendarHolidaySumAggregateInputType = {
    week?: true
  }

  export type CalendarHolidayMinAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    month?: true
    week?: true
    description?: true
  }

  export type CalendarHolidayMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    month?: true
    week?: true
    description?: true
  }

  export type CalendarHolidayCountAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    month?: true
    week?: true
    description?: true
    _all?: true
  }

  export type CalendarHolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarHoliday to aggregate.
     */
    where?: CalendarHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarHolidays to fetch.
     */
    orderBy?: CalendarHolidayOrderByWithRelationInput | CalendarHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarHolidays
    **/
    _count?: true | CalendarHolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarHolidayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarHolidaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarHolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarHolidayMaxAggregateInputType
  }

  export type GetCalendarHolidayAggregateType<T extends CalendarHolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarHoliday[P]>
      : GetScalarType<T[P], AggregateCalendarHoliday[P]>
  }




  export type CalendarHolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarHolidayWhereInput
    orderBy?: CalendarHolidayOrderByWithAggregationInput | CalendarHolidayOrderByWithAggregationInput[]
    by: CalendarHolidayScalarFieldEnum[] | CalendarHolidayScalarFieldEnum
    having?: CalendarHolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarHolidayCountAggregateInputType | true
    _avg?: CalendarHolidayAvgAggregateInputType
    _sum?: CalendarHolidaySumAggregateInputType
    _min?: CalendarHolidayMinAggregateInputType
    _max?: CalendarHolidayMaxAggregateInputType
  }

  export type CalendarHolidayGroupByOutputType = {
    id: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    description: string
    _count: CalendarHolidayCountAggregateOutputType | null
    _avg: CalendarHolidayAvgAggregateOutputType | null
    _sum: CalendarHolidaySumAggregateOutputType | null
    _min: CalendarHolidayMinAggregateOutputType | null
    _max: CalendarHolidayMaxAggregateOutputType | null
  }

  type GetCalendarHolidayGroupByPayload<T extends CalendarHolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarHolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarHolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarHolidayGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarHolidayGroupByOutputType[P]>
        }
      >
    >


  export type CalendarHolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    month?: boolean
    week?: boolean
    description?: boolean
  }, ExtArgs["result"]["calendarHoliday"]>

  export type CalendarHolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    month?: boolean
    week?: boolean
    description?: boolean
  }, ExtArgs["result"]["calendarHoliday"]>

  export type CalendarHolidaySelectScalar = {
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    month?: boolean
    week?: boolean
    description?: boolean
  }


  export type $CalendarHolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarHoliday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subjectId: string
      phaseId: string
      month: string
      week: number
      description: string
    }, ExtArgs["result"]["calendarHoliday"]>
    composites: {}
  }

  type CalendarHolidayGetPayload<S extends boolean | null | undefined | CalendarHolidayDefaultArgs> = $Result.GetResult<Prisma.$CalendarHolidayPayload, S>

  type CalendarHolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CalendarHolidayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CalendarHolidayCountAggregateInputType | true
    }

  export interface CalendarHolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarHoliday'], meta: { name: 'CalendarHoliday' } }
    /**
     * Find zero or one CalendarHoliday that matches the filter.
     * @param {CalendarHolidayFindUniqueArgs} args - Arguments to find a CalendarHoliday
     * @example
     * // Get one CalendarHoliday
     * const calendarHoliday = await prisma.calendarHoliday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarHolidayFindUniqueArgs>(args: SelectSubset<T, CalendarHolidayFindUniqueArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CalendarHoliday that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CalendarHolidayFindUniqueOrThrowArgs} args - Arguments to find a CalendarHoliday
     * @example
     * // Get one CalendarHoliday
     * const calendarHoliday = await prisma.calendarHoliday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarHolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarHolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CalendarHoliday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarHolidayFindFirstArgs} args - Arguments to find a CalendarHoliday
     * @example
     * // Get one CalendarHoliday
     * const calendarHoliday = await prisma.calendarHoliday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarHolidayFindFirstArgs>(args?: SelectSubset<T, CalendarHolidayFindFirstArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CalendarHoliday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarHolidayFindFirstOrThrowArgs} args - Arguments to find a CalendarHoliday
     * @example
     * // Get one CalendarHoliday
     * const calendarHoliday = await prisma.calendarHoliday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarHolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarHolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CalendarHolidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarHolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarHolidays
     * const calendarHolidays = await prisma.calendarHoliday.findMany()
     * 
     * // Get first 10 CalendarHolidays
     * const calendarHolidays = await prisma.calendarHoliday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarHolidayWithIdOnly = await prisma.calendarHoliday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarHolidayFindManyArgs>(args?: SelectSubset<T, CalendarHolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CalendarHoliday.
     * @param {CalendarHolidayCreateArgs} args - Arguments to create a CalendarHoliday.
     * @example
     * // Create one CalendarHoliday
     * const CalendarHoliday = await prisma.calendarHoliday.create({
     *   data: {
     *     // ... data to create a CalendarHoliday
     *   }
     * })
     * 
     */
    create<T extends CalendarHolidayCreateArgs>(args: SelectSubset<T, CalendarHolidayCreateArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CalendarHolidays.
     * @param {CalendarHolidayCreateManyArgs} args - Arguments to create many CalendarHolidays.
     * @example
     * // Create many CalendarHolidays
     * const calendarHoliday = await prisma.calendarHoliday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarHolidayCreateManyArgs>(args?: SelectSubset<T, CalendarHolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarHolidays and returns the data saved in the database.
     * @param {CalendarHolidayCreateManyAndReturnArgs} args - Arguments to create many CalendarHolidays.
     * @example
     * // Create many CalendarHolidays
     * const calendarHoliday = await prisma.calendarHoliday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarHolidays and only return the `id`
     * const calendarHolidayWithIdOnly = await prisma.calendarHoliday.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarHolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarHolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CalendarHoliday.
     * @param {CalendarHolidayDeleteArgs} args - Arguments to delete one CalendarHoliday.
     * @example
     * // Delete one CalendarHoliday
     * const CalendarHoliday = await prisma.calendarHoliday.delete({
     *   where: {
     *     // ... filter to delete one CalendarHoliday
     *   }
     * })
     * 
     */
    delete<T extends CalendarHolidayDeleteArgs>(args: SelectSubset<T, CalendarHolidayDeleteArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CalendarHoliday.
     * @param {CalendarHolidayUpdateArgs} args - Arguments to update one CalendarHoliday.
     * @example
     * // Update one CalendarHoliday
     * const calendarHoliday = await prisma.calendarHoliday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarHolidayUpdateArgs>(args: SelectSubset<T, CalendarHolidayUpdateArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CalendarHolidays.
     * @param {CalendarHolidayDeleteManyArgs} args - Arguments to filter CalendarHolidays to delete.
     * @example
     * // Delete a few CalendarHolidays
     * const { count } = await prisma.calendarHoliday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarHolidayDeleteManyArgs>(args?: SelectSubset<T, CalendarHolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarHolidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarHolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarHolidays
     * const calendarHoliday = await prisma.calendarHoliday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarHolidayUpdateManyArgs>(args: SelectSubset<T, CalendarHolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CalendarHoliday.
     * @param {CalendarHolidayUpsertArgs} args - Arguments to update or create a CalendarHoliday.
     * @example
     * // Update or create a CalendarHoliday
     * const calendarHoliday = await prisma.calendarHoliday.upsert({
     *   create: {
     *     // ... data to create a CalendarHoliday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarHoliday we want to update
     *   }
     * })
     */
    upsert<T extends CalendarHolidayUpsertArgs>(args: SelectSubset<T, CalendarHolidayUpsertArgs<ExtArgs>>): Prisma__CalendarHolidayClient<$Result.GetResult<Prisma.$CalendarHolidayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CalendarHolidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarHolidayCountArgs} args - Arguments to filter CalendarHolidays to count.
     * @example
     * // Count the number of CalendarHolidays
     * const count = await prisma.calendarHoliday.count({
     *   where: {
     *     // ... the filter for the CalendarHolidays we want to count
     *   }
     * })
    **/
    count<T extends CalendarHolidayCountArgs>(
      args?: Subset<T, CalendarHolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarHolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarHoliday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarHolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarHolidayAggregateArgs>(args: Subset<T, CalendarHolidayAggregateArgs>): Prisma.PrismaPromise<GetCalendarHolidayAggregateType<T>>

    /**
     * Group by CalendarHoliday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarHolidayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarHolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarHolidayGroupByArgs['orderBy'] }
        : { orderBy?: CalendarHolidayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarHolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarHoliday model
   */
  readonly fields: CalendarHolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarHoliday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarHolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CalendarHoliday model
   */ 
  interface CalendarHolidayFieldRefs {
    readonly id: FieldRef<"CalendarHoliday", 'String'>
    readonly userId: FieldRef<"CalendarHoliday", 'String'>
    readonly subjectId: FieldRef<"CalendarHoliday", 'String'>
    readonly phaseId: FieldRef<"CalendarHoliday", 'String'>
    readonly month: FieldRef<"CalendarHoliday", 'String'>
    readonly week: FieldRef<"CalendarHoliday", 'Int'>
    readonly description: FieldRef<"CalendarHoliday", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CalendarHoliday findUnique
   */
  export type CalendarHolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * Filter, which CalendarHoliday to fetch.
     */
    where: CalendarHolidayWhereUniqueInput
  }

  /**
   * CalendarHoliday findUniqueOrThrow
   */
  export type CalendarHolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * Filter, which CalendarHoliday to fetch.
     */
    where: CalendarHolidayWhereUniqueInput
  }

  /**
   * CalendarHoliday findFirst
   */
  export type CalendarHolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * Filter, which CalendarHoliday to fetch.
     */
    where?: CalendarHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarHolidays to fetch.
     */
    orderBy?: CalendarHolidayOrderByWithRelationInput | CalendarHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarHolidays.
     */
    cursor?: CalendarHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarHolidays.
     */
    distinct?: CalendarHolidayScalarFieldEnum | CalendarHolidayScalarFieldEnum[]
  }

  /**
   * CalendarHoliday findFirstOrThrow
   */
  export type CalendarHolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * Filter, which CalendarHoliday to fetch.
     */
    where?: CalendarHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarHolidays to fetch.
     */
    orderBy?: CalendarHolidayOrderByWithRelationInput | CalendarHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarHolidays.
     */
    cursor?: CalendarHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarHolidays.
     */
    distinct?: CalendarHolidayScalarFieldEnum | CalendarHolidayScalarFieldEnum[]
  }

  /**
   * CalendarHoliday findMany
   */
  export type CalendarHolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * Filter, which CalendarHolidays to fetch.
     */
    where?: CalendarHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarHolidays to fetch.
     */
    orderBy?: CalendarHolidayOrderByWithRelationInput | CalendarHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarHolidays.
     */
    cursor?: CalendarHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarHolidays.
     */
    skip?: number
    distinct?: CalendarHolidayScalarFieldEnum | CalendarHolidayScalarFieldEnum[]
  }

  /**
   * CalendarHoliday create
   */
  export type CalendarHolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * The data needed to create a CalendarHoliday.
     */
    data: XOR<CalendarHolidayCreateInput, CalendarHolidayUncheckedCreateInput>
  }

  /**
   * CalendarHoliday createMany
   */
  export type CalendarHolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarHolidays.
     */
    data: CalendarHolidayCreateManyInput | CalendarHolidayCreateManyInput[]
  }

  /**
   * CalendarHoliday createManyAndReturn
   */
  export type CalendarHolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CalendarHolidays.
     */
    data: CalendarHolidayCreateManyInput | CalendarHolidayCreateManyInput[]
  }

  /**
   * CalendarHoliday update
   */
  export type CalendarHolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * The data needed to update a CalendarHoliday.
     */
    data: XOR<CalendarHolidayUpdateInput, CalendarHolidayUncheckedUpdateInput>
    /**
     * Choose, which CalendarHoliday to update.
     */
    where: CalendarHolidayWhereUniqueInput
  }

  /**
   * CalendarHoliday updateMany
   */
  export type CalendarHolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarHolidays.
     */
    data: XOR<CalendarHolidayUpdateManyMutationInput, CalendarHolidayUncheckedUpdateManyInput>
    /**
     * Filter which CalendarHolidays to update
     */
    where?: CalendarHolidayWhereInput
  }

  /**
   * CalendarHoliday upsert
   */
  export type CalendarHolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * The filter to search for the CalendarHoliday to update in case it exists.
     */
    where: CalendarHolidayWhereUniqueInput
    /**
     * In case the CalendarHoliday found by the `where` argument doesn't exist, create a new CalendarHoliday with this data.
     */
    create: XOR<CalendarHolidayCreateInput, CalendarHolidayUncheckedCreateInput>
    /**
     * In case the CalendarHoliday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarHolidayUpdateInput, CalendarHolidayUncheckedUpdateInput>
  }

  /**
   * CalendarHoliday delete
   */
  export type CalendarHolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
    /**
     * Filter which CalendarHoliday to delete.
     */
    where: CalendarHolidayWhereUniqueInput
  }

  /**
   * CalendarHoliday deleteMany
   */
  export type CalendarHolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarHolidays to delete
     */
    where?: CalendarHolidayWhereInput
  }

  /**
   * CalendarHoliday without action
   */
  export type CalendarHolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarHoliday
     */
    select?: CalendarHolidaySelect<ExtArgs> | null
  }


  /**
   * Model ModulAjar
   */

  export type AggregateModulAjar = {
    _count: ModulAjarCountAggregateOutputType | null
    _min: ModulAjarMinAggregateOutputType | null
    _max: ModulAjarMaxAggregateOutputType | null
  }

  export type ModulAjarMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    title: string | null
    metadata: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModulAjarMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    phaseId: string | null
    title: string | null
    metadata: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModulAjarCountAggregateOutputType = {
    id: number
    userId: number
    subjectId: number
    phaseId: number
    title: number
    metadata: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModulAjarMinAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    title?: true
    metadata?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModulAjarMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    title?: true
    metadata?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModulAjarCountAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    phaseId?: true
    title?: true
    metadata?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModulAjarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModulAjar to aggregate.
     */
    where?: ModulAjarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulAjars to fetch.
     */
    orderBy?: ModulAjarOrderByWithRelationInput | ModulAjarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModulAjarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulAjars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulAjars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModulAjars
    **/
    _count?: true | ModulAjarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModulAjarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModulAjarMaxAggregateInputType
  }

  export type GetModulAjarAggregateType<T extends ModulAjarAggregateArgs> = {
        [P in keyof T & keyof AggregateModulAjar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulAjar[P]>
      : GetScalarType<T[P], AggregateModulAjar[P]>
  }




  export type ModulAjarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModulAjarWhereInput
    orderBy?: ModulAjarOrderByWithAggregationInput | ModulAjarOrderByWithAggregationInput[]
    by: ModulAjarScalarFieldEnum[] | ModulAjarScalarFieldEnum
    having?: ModulAjarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModulAjarCountAggregateInputType | true
    _min?: ModulAjarMinAggregateInputType
    _max?: ModulAjarMaxAggregateInputType
  }

  export type ModulAjarGroupByOutputType = {
    id: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: ModulAjarCountAggregateOutputType | null
    _min: ModulAjarMinAggregateOutputType | null
    _max: ModulAjarMaxAggregateOutputType | null
  }

  type GetModulAjarGroupByPayload<T extends ModulAjarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModulAjarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModulAjarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModulAjarGroupByOutputType[P]>
            : GetScalarType<T[P], ModulAjarGroupByOutputType[P]>
        }
      >
    >


  export type ModulAjarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    title?: boolean
    metadata?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tps?: boolean | ModulAjar$tpsArgs<ExtArgs>
    lkpds?: boolean | ModulAjar$lkpdsArgs<ExtArgs>
    _count?: boolean | ModulAjarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulAjar"]>

  export type ModulAjarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    title?: boolean
    metadata?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modulAjar"]>

  export type ModulAjarSelectScalar = {
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    phaseId?: boolean
    title?: boolean
    metadata?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModulAjarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tps?: boolean | ModulAjar$tpsArgs<ExtArgs>
    lkpds?: boolean | ModulAjar$lkpdsArgs<ExtArgs>
    _count?: boolean | ModulAjarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModulAjarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModulAjarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModulAjar"
    objects: {
      tps: Prisma.$TujuanPembelajaranPayload<ExtArgs>[]
      lkpds: Prisma.$LkpdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subjectId: string
      phaseId: string
      title: string
      metadata: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modulAjar"]>
    composites: {}
  }

  type ModulAjarGetPayload<S extends boolean | null | undefined | ModulAjarDefaultArgs> = $Result.GetResult<Prisma.$ModulAjarPayload, S>

  type ModulAjarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModulAjarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModulAjarCountAggregateInputType | true
    }

  export interface ModulAjarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModulAjar'], meta: { name: 'ModulAjar' } }
    /**
     * Find zero or one ModulAjar that matches the filter.
     * @param {ModulAjarFindUniqueArgs} args - Arguments to find a ModulAjar
     * @example
     * // Get one ModulAjar
     * const modulAjar = await prisma.modulAjar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModulAjarFindUniqueArgs>(args: SelectSubset<T, ModulAjarFindUniqueArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ModulAjar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModulAjarFindUniqueOrThrowArgs} args - Arguments to find a ModulAjar
     * @example
     * // Get one ModulAjar
     * const modulAjar = await prisma.modulAjar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModulAjarFindUniqueOrThrowArgs>(args: SelectSubset<T, ModulAjarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ModulAjar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulAjarFindFirstArgs} args - Arguments to find a ModulAjar
     * @example
     * // Get one ModulAjar
     * const modulAjar = await prisma.modulAjar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModulAjarFindFirstArgs>(args?: SelectSubset<T, ModulAjarFindFirstArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ModulAjar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulAjarFindFirstOrThrowArgs} args - Arguments to find a ModulAjar
     * @example
     * // Get one ModulAjar
     * const modulAjar = await prisma.modulAjar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModulAjarFindFirstOrThrowArgs>(args?: SelectSubset<T, ModulAjarFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ModulAjars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulAjarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModulAjars
     * const modulAjars = await prisma.modulAjar.findMany()
     * 
     * // Get first 10 ModulAjars
     * const modulAjars = await prisma.modulAjar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modulAjarWithIdOnly = await prisma.modulAjar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModulAjarFindManyArgs>(args?: SelectSubset<T, ModulAjarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ModulAjar.
     * @param {ModulAjarCreateArgs} args - Arguments to create a ModulAjar.
     * @example
     * // Create one ModulAjar
     * const ModulAjar = await prisma.modulAjar.create({
     *   data: {
     *     // ... data to create a ModulAjar
     *   }
     * })
     * 
     */
    create<T extends ModulAjarCreateArgs>(args: SelectSubset<T, ModulAjarCreateArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ModulAjars.
     * @param {ModulAjarCreateManyArgs} args - Arguments to create many ModulAjars.
     * @example
     * // Create many ModulAjars
     * const modulAjar = await prisma.modulAjar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModulAjarCreateManyArgs>(args?: SelectSubset<T, ModulAjarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModulAjars and returns the data saved in the database.
     * @param {ModulAjarCreateManyAndReturnArgs} args - Arguments to create many ModulAjars.
     * @example
     * // Create many ModulAjars
     * const modulAjar = await prisma.modulAjar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModulAjars and only return the `id`
     * const modulAjarWithIdOnly = await prisma.modulAjar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModulAjarCreateManyAndReturnArgs>(args?: SelectSubset<T, ModulAjarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ModulAjar.
     * @param {ModulAjarDeleteArgs} args - Arguments to delete one ModulAjar.
     * @example
     * // Delete one ModulAjar
     * const ModulAjar = await prisma.modulAjar.delete({
     *   where: {
     *     // ... filter to delete one ModulAjar
     *   }
     * })
     * 
     */
    delete<T extends ModulAjarDeleteArgs>(args: SelectSubset<T, ModulAjarDeleteArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ModulAjar.
     * @param {ModulAjarUpdateArgs} args - Arguments to update one ModulAjar.
     * @example
     * // Update one ModulAjar
     * const modulAjar = await prisma.modulAjar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModulAjarUpdateArgs>(args: SelectSubset<T, ModulAjarUpdateArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ModulAjars.
     * @param {ModulAjarDeleteManyArgs} args - Arguments to filter ModulAjars to delete.
     * @example
     * // Delete a few ModulAjars
     * const { count } = await prisma.modulAjar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModulAjarDeleteManyArgs>(args?: SelectSubset<T, ModulAjarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModulAjars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulAjarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModulAjars
     * const modulAjar = await prisma.modulAjar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModulAjarUpdateManyArgs>(args: SelectSubset<T, ModulAjarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModulAjar.
     * @param {ModulAjarUpsertArgs} args - Arguments to update or create a ModulAjar.
     * @example
     * // Update or create a ModulAjar
     * const modulAjar = await prisma.modulAjar.upsert({
     *   create: {
     *     // ... data to create a ModulAjar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModulAjar we want to update
     *   }
     * })
     */
    upsert<T extends ModulAjarUpsertArgs>(args: SelectSubset<T, ModulAjarUpsertArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ModulAjars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulAjarCountArgs} args - Arguments to filter ModulAjars to count.
     * @example
     * // Count the number of ModulAjars
     * const count = await prisma.modulAjar.count({
     *   where: {
     *     // ... the filter for the ModulAjars we want to count
     *   }
     * })
    **/
    count<T extends ModulAjarCountArgs>(
      args?: Subset<T, ModulAjarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModulAjarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModulAjar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulAjarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModulAjarAggregateArgs>(args: Subset<T, ModulAjarAggregateArgs>): Prisma.PrismaPromise<GetModulAjarAggregateType<T>>

    /**
     * Group by ModulAjar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulAjarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModulAjarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModulAjarGroupByArgs['orderBy'] }
        : { orderBy?: ModulAjarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModulAjarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModulAjarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModulAjar model
   */
  readonly fields: ModulAjarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModulAjar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModulAjarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tps<T extends ModulAjar$tpsArgs<ExtArgs> = {}>(args?: Subset<T, ModulAjar$tpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    lkpds<T extends ModulAjar$lkpdsArgs<ExtArgs> = {}>(args?: Subset<T, ModulAjar$lkpdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModulAjar model
   */ 
  interface ModulAjarFieldRefs {
    readonly id: FieldRef<"ModulAjar", 'String'>
    readonly userId: FieldRef<"ModulAjar", 'String'>
    readonly subjectId: FieldRef<"ModulAjar", 'String'>
    readonly phaseId: FieldRef<"ModulAjar", 'String'>
    readonly title: FieldRef<"ModulAjar", 'String'>
    readonly metadata: FieldRef<"ModulAjar", 'String'>
    readonly content: FieldRef<"ModulAjar", 'String'>
    readonly createdAt: FieldRef<"ModulAjar", 'DateTime'>
    readonly updatedAt: FieldRef<"ModulAjar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModulAjar findUnique
   */
  export type ModulAjarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * Filter, which ModulAjar to fetch.
     */
    where: ModulAjarWhereUniqueInput
  }

  /**
   * ModulAjar findUniqueOrThrow
   */
  export type ModulAjarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * Filter, which ModulAjar to fetch.
     */
    where: ModulAjarWhereUniqueInput
  }

  /**
   * ModulAjar findFirst
   */
  export type ModulAjarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * Filter, which ModulAjar to fetch.
     */
    where?: ModulAjarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulAjars to fetch.
     */
    orderBy?: ModulAjarOrderByWithRelationInput | ModulAjarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModulAjars.
     */
    cursor?: ModulAjarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulAjars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulAjars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModulAjars.
     */
    distinct?: ModulAjarScalarFieldEnum | ModulAjarScalarFieldEnum[]
  }

  /**
   * ModulAjar findFirstOrThrow
   */
  export type ModulAjarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * Filter, which ModulAjar to fetch.
     */
    where?: ModulAjarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulAjars to fetch.
     */
    orderBy?: ModulAjarOrderByWithRelationInput | ModulAjarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModulAjars.
     */
    cursor?: ModulAjarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulAjars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulAjars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModulAjars.
     */
    distinct?: ModulAjarScalarFieldEnum | ModulAjarScalarFieldEnum[]
  }

  /**
   * ModulAjar findMany
   */
  export type ModulAjarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * Filter, which ModulAjars to fetch.
     */
    where?: ModulAjarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulAjars to fetch.
     */
    orderBy?: ModulAjarOrderByWithRelationInput | ModulAjarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModulAjars.
     */
    cursor?: ModulAjarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulAjars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulAjars.
     */
    skip?: number
    distinct?: ModulAjarScalarFieldEnum | ModulAjarScalarFieldEnum[]
  }

  /**
   * ModulAjar create
   */
  export type ModulAjarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * The data needed to create a ModulAjar.
     */
    data: XOR<ModulAjarCreateInput, ModulAjarUncheckedCreateInput>
  }

  /**
   * ModulAjar createMany
   */
  export type ModulAjarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModulAjars.
     */
    data: ModulAjarCreateManyInput | ModulAjarCreateManyInput[]
  }

  /**
   * ModulAjar createManyAndReturn
   */
  export type ModulAjarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ModulAjars.
     */
    data: ModulAjarCreateManyInput | ModulAjarCreateManyInput[]
  }

  /**
   * ModulAjar update
   */
  export type ModulAjarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * The data needed to update a ModulAjar.
     */
    data: XOR<ModulAjarUpdateInput, ModulAjarUncheckedUpdateInput>
    /**
     * Choose, which ModulAjar to update.
     */
    where: ModulAjarWhereUniqueInput
  }

  /**
   * ModulAjar updateMany
   */
  export type ModulAjarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModulAjars.
     */
    data: XOR<ModulAjarUpdateManyMutationInput, ModulAjarUncheckedUpdateManyInput>
    /**
     * Filter which ModulAjars to update
     */
    where?: ModulAjarWhereInput
  }

  /**
   * ModulAjar upsert
   */
  export type ModulAjarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * The filter to search for the ModulAjar to update in case it exists.
     */
    where: ModulAjarWhereUniqueInput
    /**
     * In case the ModulAjar found by the `where` argument doesn't exist, create a new ModulAjar with this data.
     */
    create: XOR<ModulAjarCreateInput, ModulAjarUncheckedCreateInput>
    /**
     * In case the ModulAjar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModulAjarUpdateInput, ModulAjarUncheckedUpdateInput>
  }

  /**
   * ModulAjar delete
   */
  export type ModulAjarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    /**
     * Filter which ModulAjar to delete.
     */
    where: ModulAjarWhereUniqueInput
  }

  /**
   * ModulAjar deleteMany
   */
  export type ModulAjarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModulAjars to delete
     */
    where?: ModulAjarWhereInput
  }

  /**
   * ModulAjar.tps
   */
  export type ModulAjar$tpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    where?: TujuanPembelajaranWhereInput
    orderBy?: TujuanPembelajaranOrderByWithRelationInput | TujuanPembelajaranOrderByWithRelationInput[]
    cursor?: TujuanPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TujuanPembelajaranScalarFieldEnum | TujuanPembelajaranScalarFieldEnum[]
  }

  /**
   * ModulAjar.lkpds
   */
  export type ModulAjar$lkpdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    where?: LkpdWhereInput
    orderBy?: LkpdOrderByWithRelationInput | LkpdOrderByWithRelationInput[]
    cursor?: LkpdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LkpdScalarFieldEnum | LkpdScalarFieldEnum[]
  }

  /**
   * ModulAjar without action
   */
  export type ModulAjarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
  }


  /**
   * Model Lkpd
   */

  export type AggregateLkpd = {
    _count: LkpdCountAggregateOutputType | null
    _min: LkpdMinAggregateOutputType | null
    _max: LkpdMaxAggregateOutputType | null
  }

  export type LkpdMinAggregateOutputType = {
    id: string | null
    userId: string | null
    modulAjarId: string | null
    type: string | null
    difficulty: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LkpdMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    modulAjarId: string | null
    type: string | null
    difficulty: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LkpdCountAggregateOutputType = {
    id: number
    userId: number
    modulAjarId: number
    type: number
    difficulty: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LkpdMinAggregateInputType = {
    id?: true
    userId?: true
    modulAjarId?: true
    type?: true
    difficulty?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LkpdMaxAggregateInputType = {
    id?: true
    userId?: true
    modulAjarId?: true
    type?: true
    difficulty?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LkpdCountAggregateInputType = {
    id?: true
    userId?: true
    modulAjarId?: true
    type?: true
    difficulty?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LkpdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lkpd to aggregate.
     */
    where?: LkpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lkpds to fetch.
     */
    orderBy?: LkpdOrderByWithRelationInput | LkpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LkpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lkpds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lkpds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lkpds
    **/
    _count?: true | LkpdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LkpdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LkpdMaxAggregateInputType
  }

  export type GetLkpdAggregateType<T extends LkpdAggregateArgs> = {
        [P in keyof T & keyof AggregateLkpd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLkpd[P]>
      : GetScalarType<T[P], AggregateLkpd[P]>
  }




  export type LkpdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LkpdWhereInput
    orderBy?: LkpdOrderByWithAggregationInput | LkpdOrderByWithAggregationInput[]
    by: LkpdScalarFieldEnum[] | LkpdScalarFieldEnum
    having?: LkpdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LkpdCountAggregateInputType | true
    _min?: LkpdMinAggregateInputType
    _max?: LkpdMaxAggregateInputType
  }

  export type LkpdGroupByOutputType = {
    id: string
    userId: string
    modulAjarId: string | null
    type: string
    difficulty: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: LkpdCountAggregateOutputType | null
    _min: LkpdMinAggregateOutputType | null
    _max: LkpdMaxAggregateOutputType | null
  }

  type GetLkpdGroupByPayload<T extends LkpdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LkpdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LkpdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LkpdGroupByOutputType[P]>
            : GetScalarType<T[P], LkpdGroupByOutputType[P]>
        }
      >
    >


  export type LkpdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    modulAjarId?: boolean
    type?: boolean
    difficulty?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tps?: boolean | Lkpd$tpsArgs<ExtArgs>
    modulAjar?: boolean | Lkpd$modulAjarArgs<ExtArgs>
    _count?: boolean | LkpdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lkpd"]>

  export type LkpdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    modulAjarId?: boolean
    type?: boolean
    difficulty?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modulAjar?: boolean | Lkpd$modulAjarArgs<ExtArgs>
  }, ExtArgs["result"]["lkpd"]>

  export type LkpdSelectScalar = {
    id?: boolean
    userId?: boolean
    modulAjarId?: boolean
    type?: boolean
    difficulty?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LkpdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tps?: boolean | Lkpd$tpsArgs<ExtArgs>
    modulAjar?: boolean | Lkpd$modulAjarArgs<ExtArgs>
    _count?: boolean | LkpdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LkpdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulAjar?: boolean | Lkpd$modulAjarArgs<ExtArgs>
  }

  export type $LkpdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lkpd"
    objects: {
      tps: Prisma.$TujuanPembelajaranPayload<ExtArgs>[]
      modulAjar: Prisma.$ModulAjarPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      modulAjarId: string | null
      type: string
      difficulty: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lkpd"]>
    composites: {}
  }

  type LkpdGetPayload<S extends boolean | null | undefined | LkpdDefaultArgs> = $Result.GetResult<Prisma.$LkpdPayload, S>

  type LkpdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LkpdFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LkpdCountAggregateInputType | true
    }

  export interface LkpdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lkpd'], meta: { name: 'Lkpd' } }
    /**
     * Find zero or one Lkpd that matches the filter.
     * @param {LkpdFindUniqueArgs} args - Arguments to find a Lkpd
     * @example
     * // Get one Lkpd
     * const lkpd = await prisma.lkpd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LkpdFindUniqueArgs>(args: SelectSubset<T, LkpdFindUniqueArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lkpd that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LkpdFindUniqueOrThrowArgs} args - Arguments to find a Lkpd
     * @example
     * // Get one Lkpd
     * const lkpd = await prisma.lkpd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LkpdFindUniqueOrThrowArgs>(args: SelectSubset<T, LkpdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lkpd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LkpdFindFirstArgs} args - Arguments to find a Lkpd
     * @example
     * // Get one Lkpd
     * const lkpd = await prisma.lkpd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LkpdFindFirstArgs>(args?: SelectSubset<T, LkpdFindFirstArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lkpd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LkpdFindFirstOrThrowArgs} args - Arguments to find a Lkpd
     * @example
     * // Get one Lkpd
     * const lkpd = await prisma.lkpd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LkpdFindFirstOrThrowArgs>(args?: SelectSubset<T, LkpdFindFirstOrThrowArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lkpds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LkpdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lkpds
     * const lkpds = await prisma.lkpd.findMany()
     * 
     * // Get first 10 Lkpds
     * const lkpds = await prisma.lkpd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lkpdWithIdOnly = await prisma.lkpd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LkpdFindManyArgs>(args?: SelectSubset<T, LkpdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lkpd.
     * @param {LkpdCreateArgs} args - Arguments to create a Lkpd.
     * @example
     * // Create one Lkpd
     * const Lkpd = await prisma.lkpd.create({
     *   data: {
     *     // ... data to create a Lkpd
     *   }
     * })
     * 
     */
    create<T extends LkpdCreateArgs>(args: SelectSubset<T, LkpdCreateArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lkpds.
     * @param {LkpdCreateManyArgs} args - Arguments to create many Lkpds.
     * @example
     * // Create many Lkpds
     * const lkpd = await prisma.lkpd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LkpdCreateManyArgs>(args?: SelectSubset<T, LkpdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lkpds and returns the data saved in the database.
     * @param {LkpdCreateManyAndReturnArgs} args - Arguments to create many Lkpds.
     * @example
     * // Create many Lkpds
     * const lkpd = await prisma.lkpd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lkpds and only return the `id`
     * const lkpdWithIdOnly = await prisma.lkpd.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LkpdCreateManyAndReturnArgs>(args?: SelectSubset<T, LkpdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lkpd.
     * @param {LkpdDeleteArgs} args - Arguments to delete one Lkpd.
     * @example
     * // Delete one Lkpd
     * const Lkpd = await prisma.lkpd.delete({
     *   where: {
     *     // ... filter to delete one Lkpd
     *   }
     * })
     * 
     */
    delete<T extends LkpdDeleteArgs>(args: SelectSubset<T, LkpdDeleteArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lkpd.
     * @param {LkpdUpdateArgs} args - Arguments to update one Lkpd.
     * @example
     * // Update one Lkpd
     * const lkpd = await prisma.lkpd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LkpdUpdateArgs>(args: SelectSubset<T, LkpdUpdateArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lkpds.
     * @param {LkpdDeleteManyArgs} args - Arguments to filter Lkpds to delete.
     * @example
     * // Delete a few Lkpds
     * const { count } = await prisma.lkpd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LkpdDeleteManyArgs>(args?: SelectSubset<T, LkpdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lkpds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LkpdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lkpds
     * const lkpd = await prisma.lkpd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LkpdUpdateManyArgs>(args: SelectSubset<T, LkpdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lkpd.
     * @param {LkpdUpsertArgs} args - Arguments to update or create a Lkpd.
     * @example
     * // Update or create a Lkpd
     * const lkpd = await prisma.lkpd.upsert({
     *   create: {
     *     // ... data to create a Lkpd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lkpd we want to update
     *   }
     * })
     */
    upsert<T extends LkpdUpsertArgs>(args: SelectSubset<T, LkpdUpsertArgs<ExtArgs>>): Prisma__LkpdClient<$Result.GetResult<Prisma.$LkpdPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lkpds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LkpdCountArgs} args - Arguments to filter Lkpds to count.
     * @example
     * // Count the number of Lkpds
     * const count = await prisma.lkpd.count({
     *   where: {
     *     // ... the filter for the Lkpds we want to count
     *   }
     * })
    **/
    count<T extends LkpdCountArgs>(
      args?: Subset<T, LkpdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LkpdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lkpd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LkpdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LkpdAggregateArgs>(args: Subset<T, LkpdAggregateArgs>): Prisma.PrismaPromise<GetLkpdAggregateType<T>>

    /**
     * Group by Lkpd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LkpdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LkpdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LkpdGroupByArgs['orderBy'] }
        : { orderBy?: LkpdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LkpdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLkpdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lkpd model
   */
  readonly fields: LkpdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lkpd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LkpdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tps<T extends Lkpd$tpsArgs<ExtArgs> = {}>(args?: Subset<T, Lkpd$tpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    modulAjar<T extends Lkpd$modulAjarArgs<ExtArgs> = {}>(args?: Subset<T, Lkpd$modulAjarArgs<ExtArgs>>): Prisma__ModulAjarClient<$Result.GetResult<Prisma.$ModulAjarPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lkpd model
   */ 
  interface LkpdFieldRefs {
    readonly id: FieldRef<"Lkpd", 'String'>
    readonly userId: FieldRef<"Lkpd", 'String'>
    readonly modulAjarId: FieldRef<"Lkpd", 'String'>
    readonly type: FieldRef<"Lkpd", 'String'>
    readonly difficulty: FieldRef<"Lkpd", 'String'>
    readonly content: FieldRef<"Lkpd", 'String'>
    readonly createdAt: FieldRef<"Lkpd", 'DateTime'>
    readonly updatedAt: FieldRef<"Lkpd", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lkpd findUnique
   */
  export type LkpdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * Filter, which Lkpd to fetch.
     */
    where: LkpdWhereUniqueInput
  }

  /**
   * Lkpd findUniqueOrThrow
   */
  export type LkpdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * Filter, which Lkpd to fetch.
     */
    where: LkpdWhereUniqueInput
  }

  /**
   * Lkpd findFirst
   */
  export type LkpdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * Filter, which Lkpd to fetch.
     */
    where?: LkpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lkpds to fetch.
     */
    orderBy?: LkpdOrderByWithRelationInput | LkpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lkpds.
     */
    cursor?: LkpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lkpds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lkpds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lkpds.
     */
    distinct?: LkpdScalarFieldEnum | LkpdScalarFieldEnum[]
  }

  /**
   * Lkpd findFirstOrThrow
   */
  export type LkpdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * Filter, which Lkpd to fetch.
     */
    where?: LkpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lkpds to fetch.
     */
    orderBy?: LkpdOrderByWithRelationInput | LkpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lkpds.
     */
    cursor?: LkpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lkpds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lkpds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lkpds.
     */
    distinct?: LkpdScalarFieldEnum | LkpdScalarFieldEnum[]
  }

  /**
   * Lkpd findMany
   */
  export type LkpdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * Filter, which Lkpds to fetch.
     */
    where?: LkpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lkpds to fetch.
     */
    orderBy?: LkpdOrderByWithRelationInput | LkpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lkpds.
     */
    cursor?: LkpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lkpds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lkpds.
     */
    skip?: number
    distinct?: LkpdScalarFieldEnum | LkpdScalarFieldEnum[]
  }

  /**
   * Lkpd create
   */
  export type LkpdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * The data needed to create a Lkpd.
     */
    data: XOR<LkpdCreateInput, LkpdUncheckedCreateInput>
  }

  /**
   * Lkpd createMany
   */
  export type LkpdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lkpds.
     */
    data: LkpdCreateManyInput | LkpdCreateManyInput[]
  }

  /**
   * Lkpd createManyAndReturn
   */
  export type LkpdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Lkpds.
     */
    data: LkpdCreateManyInput | LkpdCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lkpd update
   */
  export type LkpdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * The data needed to update a Lkpd.
     */
    data: XOR<LkpdUpdateInput, LkpdUncheckedUpdateInput>
    /**
     * Choose, which Lkpd to update.
     */
    where: LkpdWhereUniqueInput
  }

  /**
   * Lkpd updateMany
   */
  export type LkpdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lkpds.
     */
    data: XOR<LkpdUpdateManyMutationInput, LkpdUncheckedUpdateManyInput>
    /**
     * Filter which Lkpds to update
     */
    where?: LkpdWhereInput
  }

  /**
   * Lkpd upsert
   */
  export type LkpdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * The filter to search for the Lkpd to update in case it exists.
     */
    where: LkpdWhereUniqueInput
    /**
     * In case the Lkpd found by the `where` argument doesn't exist, create a new Lkpd with this data.
     */
    create: XOR<LkpdCreateInput, LkpdUncheckedCreateInput>
    /**
     * In case the Lkpd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LkpdUpdateInput, LkpdUncheckedUpdateInput>
  }

  /**
   * Lkpd delete
   */
  export type LkpdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
    /**
     * Filter which Lkpd to delete.
     */
    where: LkpdWhereUniqueInput
  }

  /**
   * Lkpd deleteMany
   */
  export type LkpdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lkpds to delete
     */
    where?: LkpdWhereInput
  }

  /**
   * Lkpd.tps
   */
  export type Lkpd$tpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    where?: TujuanPembelajaranWhereInput
    orderBy?: TujuanPembelajaranOrderByWithRelationInput | TujuanPembelajaranOrderByWithRelationInput[]
    cursor?: TujuanPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TujuanPembelajaranScalarFieldEnum | TujuanPembelajaranScalarFieldEnum[]
  }

  /**
   * Lkpd.modulAjar
   */
  export type Lkpd$modulAjarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulAjar
     */
    select?: ModulAjarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulAjarInclude<ExtArgs> | null
    where?: ModulAjarWhereInput
  }

  /**
   * Lkpd without action
   */
  export type LkpdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lkpd
     */
    select?: LkpdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LkpdInclude<ExtArgs> | null
  }


  /**
   * Model BankSoal
   */

  export type AggregateBankSoal = {
    _count: BankSoalCountAggregateOutputType | null
    _min: BankSoalMinAggregateOutputType | null
    _max: BankSoalMaxAggregateOutputType | null
  }

  export type BankSoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phaseId: string | null
    cognitiveLevel: string | null
    akmType: string | null
    stimulus: string | null
    pertanyaan: string | null
    options: string | null
    kunciJawaban: string | null
    rubrikPenilaian: string | null
    generateCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankSoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phaseId: string | null
    cognitiveLevel: string | null
    akmType: string | null
    stimulus: string | null
    pertanyaan: string | null
    options: string | null
    kunciJawaban: string | null
    rubrikPenilaian: string | null
    generateCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankSoalCountAggregateOutputType = {
    id: number
    userId: number
    phaseId: number
    cognitiveLevel: number
    akmType: number
    stimulus: number
    pertanyaan: number
    options: number
    kunciJawaban: number
    rubrikPenilaian: number
    generateCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankSoalMinAggregateInputType = {
    id?: true
    userId?: true
    phaseId?: true
    cognitiveLevel?: true
    akmType?: true
    stimulus?: true
    pertanyaan?: true
    options?: true
    kunciJawaban?: true
    rubrikPenilaian?: true
    generateCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankSoalMaxAggregateInputType = {
    id?: true
    userId?: true
    phaseId?: true
    cognitiveLevel?: true
    akmType?: true
    stimulus?: true
    pertanyaan?: true
    options?: true
    kunciJawaban?: true
    rubrikPenilaian?: true
    generateCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankSoalCountAggregateInputType = {
    id?: true
    userId?: true
    phaseId?: true
    cognitiveLevel?: true
    akmType?: true
    stimulus?: true
    pertanyaan?: true
    options?: true
    kunciJawaban?: true
    rubrikPenilaian?: true
    generateCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankSoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankSoal to aggregate.
     */
    where?: BankSoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSoals to fetch.
     */
    orderBy?: BankSoalOrderByWithRelationInput | BankSoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankSoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankSoals
    **/
    _count?: true | BankSoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankSoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankSoalMaxAggregateInputType
  }

  export type GetBankSoalAggregateType<T extends BankSoalAggregateArgs> = {
        [P in keyof T & keyof AggregateBankSoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankSoal[P]>
      : GetScalarType<T[P], AggregateBankSoal[P]>
  }




  export type BankSoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankSoalWhereInput
    orderBy?: BankSoalOrderByWithAggregationInput | BankSoalOrderByWithAggregationInput[]
    by: BankSoalScalarFieldEnum[] | BankSoalScalarFieldEnum
    having?: BankSoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankSoalCountAggregateInputType | true
    _min?: BankSoalMinAggregateInputType
    _max?: BankSoalMaxAggregateInputType
  }

  export type BankSoalGroupByOutputType = {
    id: string
    userId: string
    phaseId: string
    cognitiveLevel: string
    akmType: string
    stimulus: string | null
    pertanyaan: string
    options: string | null
    kunciJawaban: string
    rubrikPenilaian: string | null
    generateCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: BankSoalCountAggregateOutputType | null
    _min: BankSoalMinAggregateOutputType | null
    _max: BankSoalMaxAggregateOutputType | null
  }

  type GetBankSoalGroupByPayload<T extends BankSoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankSoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankSoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankSoalGroupByOutputType[P]>
            : GetScalarType<T[P], BankSoalGroupByOutputType[P]>
        }
      >
    >


  export type BankSoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phaseId?: boolean
    cognitiveLevel?: boolean
    akmType?: boolean
    stimulus?: boolean
    pertanyaan?: boolean
    options?: boolean
    kunciJawaban?: boolean
    rubrikPenilaian?: boolean
    generateCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tps?: boolean | BankSoal$tpsArgs<ExtArgs>
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
    _count?: boolean | BankSoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankSoal"]>

  export type BankSoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phaseId?: boolean
    cognitiveLevel?: boolean
    akmType?: boolean
    stimulus?: boolean
    pertanyaan?: boolean
    options?: boolean
    kunciJawaban?: boolean
    rubrikPenilaian?: boolean
    generateCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankSoal"]>

  export type BankSoalSelectScalar = {
    id?: boolean
    userId?: boolean
    phaseId?: boolean
    cognitiveLevel?: boolean
    akmType?: boolean
    stimulus?: boolean
    pertanyaan?: boolean
    options?: boolean
    kunciJawaban?: boolean
    rubrikPenilaian?: boolean
    generateCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankSoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tps?: boolean | BankSoal$tpsArgs<ExtArgs>
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
    _count?: boolean | BankSoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankSoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase?: boolean | PhaseDefaultArgs<ExtArgs>
  }

  export type $BankSoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankSoal"
    objects: {
      tps: Prisma.$TujuanPembelajaranPayload<ExtArgs>[]
      phase: Prisma.$PhasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phaseId: string
      cognitiveLevel: string
      akmType: string
      stimulus: string | null
      pertanyaan: string
      options: string | null
      kunciJawaban: string
      rubrikPenilaian: string | null
      generateCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankSoal"]>
    composites: {}
  }

  type BankSoalGetPayload<S extends boolean | null | undefined | BankSoalDefaultArgs> = $Result.GetResult<Prisma.$BankSoalPayload, S>

  type BankSoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BankSoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BankSoalCountAggregateInputType | true
    }

  export interface BankSoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankSoal'], meta: { name: 'BankSoal' } }
    /**
     * Find zero or one BankSoal that matches the filter.
     * @param {BankSoalFindUniqueArgs} args - Arguments to find a BankSoal
     * @example
     * // Get one BankSoal
     * const bankSoal = await prisma.bankSoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankSoalFindUniqueArgs>(args: SelectSubset<T, BankSoalFindUniqueArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BankSoal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BankSoalFindUniqueOrThrowArgs} args - Arguments to find a BankSoal
     * @example
     * // Get one BankSoal
     * const bankSoal = await prisma.bankSoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankSoalFindUniqueOrThrowArgs>(args: SelectSubset<T, BankSoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BankSoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSoalFindFirstArgs} args - Arguments to find a BankSoal
     * @example
     * // Get one BankSoal
     * const bankSoal = await prisma.bankSoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankSoalFindFirstArgs>(args?: SelectSubset<T, BankSoalFindFirstArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BankSoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSoalFindFirstOrThrowArgs} args - Arguments to find a BankSoal
     * @example
     * // Get one BankSoal
     * const bankSoal = await prisma.bankSoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankSoalFindFirstOrThrowArgs>(args?: SelectSubset<T, BankSoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BankSoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankSoals
     * const bankSoals = await prisma.bankSoal.findMany()
     * 
     * // Get first 10 BankSoals
     * const bankSoals = await prisma.bankSoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankSoalWithIdOnly = await prisma.bankSoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankSoalFindManyArgs>(args?: SelectSubset<T, BankSoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BankSoal.
     * @param {BankSoalCreateArgs} args - Arguments to create a BankSoal.
     * @example
     * // Create one BankSoal
     * const BankSoal = await prisma.bankSoal.create({
     *   data: {
     *     // ... data to create a BankSoal
     *   }
     * })
     * 
     */
    create<T extends BankSoalCreateArgs>(args: SelectSubset<T, BankSoalCreateArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BankSoals.
     * @param {BankSoalCreateManyArgs} args - Arguments to create many BankSoals.
     * @example
     * // Create many BankSoals
     * const bankSoal = await prisma.bankSoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankSoalCreateManyArgs>(args?: SelectSubset<T, BankSoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankSoals and returns the data saved in the database.
     * @param {BankSoalCreateManyAndReturnArgs} args - Arguments to create many BankSoals.
     * @example
     * // Create many BankSoals
     * const bankSoal = await prisma.bankSoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankSoals and only return the `id`
     * const bankSoalWithIdOnly = await prisma.bankSoal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankSoalCreateManyAndReturnArgs>(args?: SelectSubset<T, BankSoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BankSoal.
     * @param {BankSoalDeleteArgs} args - Arguments to delete one BankSoal.
     * @example
     * // Delete one BankSoal
     * const BankSoal = await prisma.bankSoal.delete({
     *   where: {
     *     // ... filter to delete one BankSoal
     *   }
     * })
     * 
     */
    delete<T extends BankSoalDeleteArgs>(args: SelectSubset<T, BankSoalDeleteArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BankSoal.
     * @param {BankSoalUpdateArgs} args - Arguments to update one BankSoal.
     * @example
     * // Update one BankSoal
     * const bankSoal = await prisma.bankSoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankSoalUpdateArgs>(args: SelectSubset<T, BankSoalUpdateArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BankSoals.
     * @param {BankSoalDeleteManyArgs} args - Arguments to filter BankSoals to delete.
     * @example
     * // Delete a few BankSoals
     * const { count } = await prisma.bankSoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankSoalDeleteManyArgs>(args?: SelectSubset<T, BankSoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankSoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankSoals
     * const bankSoal = await prisma.bankSoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankSoalUpdateManyArgs>(args: SelectSubset<T, BankSoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankSoal.
     * @param {BankSoalUpsertArgs} args - Arguments to update or create a BankSoal.
     * @example
     * // Update or create a BankSoal
     * const bankSoal = await prisma.bankSoal.upsert({
     *   create: {
     *     // ... data to create a BankSoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankSoal we want to update
     *   }
     * })
     */
    upsert<T extends BankSoalUpsertArgs>(args: SelectSubset<T, BankSoalUpsertArgs<ExtArgs>>): Prisma__BankSoalClient<$Result.GetResult<Prisma.$BankSoalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BankSoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSoalCountArgs} args - Arguments to filter BankSoals to count.
     * @example
     * // Count the number of BankSoals
     * const count = await prisma.bankSoal.count({
     *   where: {
     *     // ... the filter for the BankSoals we want to count
     *   }
     * })
    **/
    count<T extends BankSoalCountArgs>(
      args?: Subset<T, BankSoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankSoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankSoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankSoalAggregateArgs>(args: Subset<T, BankSoalAggregateArgs>): Prisma.PrismaPromise<GetBankSoalAggregateType<T>>

    /**
     * Group by BankSoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankSoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankSoalGroupByArgs['orderBy'] }
        : { orderBy?: BankSoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankSoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankSoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankSoal model
   */
  readonly fields: BankSoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankSoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankSoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tps<T extends BankSoal$tpsArgs<ExtArgs> = {}>(args?: Subset<T, BankSoal$tpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TujuanPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    phase<T extends PhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhaseDefaultArgs<ExtArgs>>): Prisma__PhaseClient<$Result.GetResult<Prisma.$PhasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankSoal model
   */ 
  interface BankSoalFieldRefs {
    readonly id: FieldRef<"BankSoal", 'String'>
    readonly userId: FieldRef<"BankSoal", 'String'>
    readonly phaseId: FieldRef<"BankSoal", 'String'>
    readonly cognitiveLevel: FieldRef<"BankSoal", 'String'>
    readonly akmType: FieldRef<"BankSoal", 'String'>
    readonly stimulus: FieldRef<"BankSoal", 'String'>
    readonly pertanyaan: FieldRef<"BankSoal", 'String'>
    readonly options: FieldRef<"BankSoal", 'String'>
    readonly kunciJawaban: FieldRef<"BankSoal", 'String'>
    readonly rubrikPenilaian: FieldRef<"BankSoal", 'String'>
    readonly generateCode: FieldRef<"BankSoal", 'String'>
    readonly createdAt: FieldRef<"BankSoal", 'DateTime'>
    readonly updatedAt: FieldRef<"BankSoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankSoal findUnique
   */
  export type BankSoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * Filter, which BankSoal to fetch.
     */
    where: BankSoalWhereUniqueInput
  }

  /**
   * BankSoal findUniqueOrThrow
   */
  export type BankSoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * Filter, which BankSoal to fetch.
     */
    where: BankSoalWhereUniqueInput
  }

  /**
   * BankSoal findFirst
   */
  export type BankSoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * Filter, which BankSoal to fetch.
     */
    where?: BankSoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSoals to fetch.
     */
    orderBy?: BankSoalOrderByWithRelationInput | BankSoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankSoals.
     */
    cursor?: BankSoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankSoals.
     */
    distinct?: BankSoalScalarFieldEnum | BankSoalScalarFieldEnum[]
  }

  /**
   * BankSoal findFirstOrThrow
   */
  export type BankSoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * Filter, which BankSoal to fetch.
     */
    where?: BankSoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSoals to fetch.
     */
    orderBy?: BankSoalOrderByWithRelationInput | BankSoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankSoals.
     */
    cursor?: BankSoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankSoals.
     */
    distinct?: BankSoalScalarFieldEnum | BankSoalScalarFieldEnum[]
  }

  /**
   * BankSoal findMany
   */
  export type BankSoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * Filter, which BankSoals to fetch.
     */
    where?: BankSoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSoals to fetch.
     */
    orderBy?: BankSoalOrderByWithRelationInput | BankSoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankSoals.
     */
    cursor?: BankSoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSoals.
     */
    skip?: number
    distinct?: BankSoalScalarFieldEnum | BankSoalScalarFieldEnum[]
  }

  /**
   * BankSoal create
   */
  export type BankSoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * The data needed to create a BankSoal.
     */
    data: XOR<BankSoalCreateInput, BankSoalUncheckedCreateInput>
  }

  /**
   * BankSoal createMany
   */
  export type BankSoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankSoals.
     */
    data: BankSoalCreateManyInput | BankSoalCreateManyInput[]
  }

  /**
   * BankSoal createManyAndReturn
   */
  export type BankSoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BankSoals.
     */
    data: BankSoalCreateManyInput | BankSoalCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankSoal update
   */
  export type BankSoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * The data needed to update a BankSoal.
     */
    data: XOR<BankSoalUpdateInput, BankSoalUncheckedUpdateInput>
    /**
     * Choose, which BankSoal to update.
     */
    where: BankSoalWhereUniqueInput
  }

  /**
   * BankSoal updateMany
   */
  export type BankSoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankSoals.
     */
    data: XOR<BankSoalUpdateManyMutationInput, BankSoalUncheckedUpdateManyInput>
    /**
     * Filter which BankSoals to update
     */
    where?: BankSoalWhereInput
  }

  /**
   * BankSoal upsert
   */
  export type BankSoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * The filter to search for the BankSoal to update in case it exists.
     */
    where: BankSoalWhereUniqueInput
    /**
     * In case the BankSoal found by the `where` argument doesn't exist, create a new BankSoal with this data.
     */
    create: XOR<BankSoalCreateInput, BankSoalUncheckedCreateInput>
    /**
     * In case the BankSoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankSoalUpdateInput, BankSoalUncheckedUpdateInput>
  }

  /**
   * BankSoal delete
   */
  export type BankSoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
    /**
     * Filter which BankSoal to delete.
     */
    where: BankSoalWhereUniqueInput
  }

  /**
   * BankSoal deleteMany
   */
  export type BankSoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankSoals to delete
     */
    where?: BankSoalWhereInput
  }

  /**
   * BankSoal.tps
   */
  export type BankSoal$tpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TujuanPembelajaran
     */
    select?: TujuanPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TujuanPembelajaranInclude<ExtArgs> | null
    where?: TujuanPembelajaranWhereInput
    orderBy?: TujuanPembelajaranOrderByWithRelationInput | TujuanPembelajaranOrderByWithRelationInput[]
    cursor?: TujuanPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TujuanPembelajaranScalarFieldEnum | TujuanPembelajaranScalarFieldEnum[]
  }

  /**
   * BankSoal without action
   */
  export type BankSoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSoal
     */
    select?: BankSoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankSoalInclude<ExtArgs> | null
  }


  /**
   * Model PaketUjian
   */

  export type AggregatePaketUjian = {
    _count: PaketUjianCountAggregateOutputType | null
    _min: PaketUjianMinAggregateOutputType | null
    _max: PaketUjianMaxAggregateOutputType | null
  }

  export type PaketUjianMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    soalIds: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaketUjianMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    soalIds: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaketUjianCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    soalIds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaketUjianMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    soalIds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaketUjianMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    soalIds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaketUjianCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    soalIds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaketUjianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaketUjian to aggregate.
     */
    where?: PaketUjianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketUjians to fetch.
     */
    orderBy?: PaketUjianOrderByWithRelationInput | PaketUjianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaketUjianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketUjians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketUjians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaketUjians
    **/
    _count?: true | PaketUjianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaketUjianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaketUjianMaxAggregateInputType
  }

  export type GetPaketUjianAggregateType<T extends PaketUjianAggregateArgs> = {
        [P in keyof T & keyof AggregatePaketUjian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaketUjian[P]>
      : GetScalarType<T[P], AggregatePaketUjian[P]>
  }




  export type PaketUjianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketUjianWhereInput
    orderBy?: PaketUjianOrderByWithAggregationInput | PaketUjianOrderByWithAggregationInput[]
    by: PaketUjianScalarFieldEnum[] | PaketUjianScalarFieldEnum
    having?: PaketUjianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaketUjianCountAggregateInputType | true
    _min?: PaketUjianMinAggregateInputType
    _max?: PaketUjianMaxAggregateInputType
  }

  export type PaketUjianGroupByOutputType = {
    id: string
    userId: string
    name: string
    soalIds: string
    createdAt: Date
    updatedAt: Date
    _count: PaketUjianCountAggregateOutputType | null
    _min: PaketUjianMinAggregateOutputType | null
    _max: PaketUjianMaxAggregateOutputType | null
  }

  type GetPaketUjianGroupByPayload<T extends PaketUjianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaketUjianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaketUjianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaketUjianGroupByOutputType[P]>
            : GetScalarType<T[P], PaketUjianGroupByOutputType[P]>
        }
      >
    >


  export type PaketUjianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    soalIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paketUjian"]>

  export type PaketUjianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    soalIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paketUjian"]>

  export type PaketUjianSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    soalIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PaketUjianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaketUjian"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      soalIds: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paketUjian"]>
    composites: {}
  }

  type PaketUjianGetPayload<S extends boolean | null | undefined | PaketUjianDefaultArgs> = $Result.GetResult<Prisma.$PaketUjianPayload, S>

  type PaketUjianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaketUjianFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaketUjianCountAggregateInputType | true
    }

  export interface PaketUjianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaketUjian'], meta: { name: 'PaketUjian' } }
    /**
     * Find zero or one PaketUjian that matches the filter.
     * @param {PaketUjianFindUniqueArgs} args - Arguments to find a PaketUjian
     * @example
     * // Get one PaketUjian
     * const paketUjian = await prisma.paketUjian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaketUjianFindUniqueArgs>(args: SelectSubset<T, PaketUjianFindUniqueArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaketUjian that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaketUjianFindUniqueOrThrowArgs} args - Arguments to find a PaketUjian
     * @example
     * // Get one PaketUjian
     * const paketUjian = await prisma.paketUjian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaketUjianFindUniqueOrThrowArgs>(args: SelectSubset<T, PaketUjianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaketUjian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUjianFindFirstArgs} args - Arguments to find a PaketUjian
     * @example
     * // Get one PaketUjian
     * const paketUjian = await prisma.paketUjian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaketUjianFindFirstArgs>(args?: SelectSubset<T, PaketUjianFindFirstArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaketUjian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUjianFindFirstOrThrowArgs} args - Arguments to find a PaketUjian
     * @example
     * // Get one PaketUjian
     * const paketUjian = await prisma.paketUjian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaketUjianFindFirstOrThrowArgs>(args?: SelectSubset<T, PaketUjianFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaketUjians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUjianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaketUjians
     * const paketUjians = await prisma.paketUjian.findMany()
     * 
     * // Get first 10 PaketUjians
     * const paketUjians = await prisma.paketUjian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paketUjianWithIdOnly = await prisma.paketUjian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaketUjianFindManyArgs>(args?: SelectSubset<T, PaketUjianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaketUjian.
     * @param {PaketUjianCreateArgs} args - Arguments to create a PaketUjian.
     * @example
     * // Create one PaketUjian
     * const PaketUjian = await prisma.paketUjian.create({
     *   data: {
     *     // ... data to create a PaketUjian
     *   }
     * })
     * 
     */
    create<T extends PaketUjianCreateArgs>(args: SelectSubset<T, PaketUjianCreateArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaketUjians.
     * @param {PaketUjianCreateManyArgs} args - Arguments to create many PaketUjians.
     * @example
     * // Create many PaketUjians
     * const paketUjian = await prisma.paketUjian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaketUjianCreateManyArgs>(args?: SelectSubset<T, PaketUjianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaketUjians and returns the data saved in the database.
     * @param {PaketUjianCreateManyAndReturnArgs} args - Arguments to create many PaketUjians.
     * @example
     * // Create many PaketUjians
     * const paketUjian = await prisma.paketUjian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaketUjians and only return the `id`
     * const paketUjianWithIdOnly = await prisma.paketUjian.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaketUjianCreateManyAndReturnArgs>(args?: SelectSubset<T, PaketUjianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaketUjian.
     * @param {PaketUjianDeleteArgs} args - Arguments to delete one PaketUjian.
     * @example
     * // Delete one PaketUjian
     * const PaketUjian = await prisma.paketUjian.delete({
     *   where: {
     *     // ... filter to delete one PaketUjian
     *   }
     * })
     * 
     */
    delete<T extends PaketUjianDeleteArgs>(args: SelectSubset<T, PaketUjianDeleteArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaketUjian.
     * @param {PaketUjianUpdateArgs} args - Arguments to update one PaketUjian.
     * @example
     * // Update one PaketUjian
     * const paketUjian = await prisma.paketUjian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaketUjianUpdateArgs>(args: SelectSubset<T, PaketUjianUpdateArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaketUjians.
     * @param {PaketUjianDeleteManyArgs} args - Arguments to filter PaketUjians to delete.
     * @example
     * // Delete a few PaketUjians
     * const { count } = await prisma.paketUjian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaketUjianDeleteManyArgs>(args?: SelectSubset<T, PaketUjianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaketUjians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUjianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaketUjians
     * const paketUjian = await prisma.paketUjian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaketUjianUpdateManyArgs>(args: SelectSubset<T, PaketUjianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaketUjian.
     * @param {PaketUjianUpsertArgs} args - Arguments to update or create a PaketUjian.
     * @example
     * // Update or create a PaketUjian
     * const paketUjian = await prisma.paketUjian.upsert({
     *   create: {
     *     // ... data to create a PaketUjian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaketUjian we want to update
     *   }
     * })
     */
    upsert<T extends PaketUjianUpsertArgs>(args: SelectSubset<T, PaketUjianUpsertArgs<ExtArgs>>): Prisma__PaketUjianClient<$Result.GetResult<Prisma.$PaketUjianPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaketUjians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUjianCountArgs} args - Arguments to filter PaketUjians to count.
     * @example
     * // Count the number of PaketUjians
     * const count = await prisma.paketUjian.count({
     *   where: {
     *     // ... the filter for the PaketUjians we want to count
     *   }
     * })
    **/
    count<T extends PaketUjianCountArgs>(
      args?: Subset<T, PaketUjianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaketUjianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaketUjian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUjianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaketUjianAggregateArgs>(args: Subset<T, PaketUjianAggregateArgs>): Prisma.PrismaPromise<GetPaketUjianAggregateType<T>>

    /**
     * Group by PaketUjian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUjianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaketUjianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaketUjianGroupByArgs['orderBy'] }
        : { orderBy?: PaketUjianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaketUjianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaketUjianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaketUjian model
   */
  readonly fields: PaketUjianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaketUjian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaketUjianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaketUjian model
   */ 
  interface PaketUjianFieldRefs {
    readonly id: FieldRef<"PaketUjian", 'String'>
    readonly userId: FieldRef<"PaketUjian", 'String'>
    readonly name: FieldRef<"PaketUjian", 'String'>
    readonly soalIds: FieldRef<"PaketUjian", 'String'>
    readonly createdAt: FieldRef<"PaketUjian", 'DateTime'>
    readonly updatedAt: FieldRef<"PaketUjian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaketUjian findUnique
   */
  export type PaketUjianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * Filter, which PaketUjian to fetch.
     */
    where: PaketUjianWhereUniqueInput
  }

  /**
   * PaketUjian findUniqueOrThrow
   */
  export type PaketUjianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * Filter, which PaketUjian to fetch.
     */
    where: PaketUjianWhereUniqueInput
  }

  /**
   * PaketUjian findFirst
   */
  export type PaketUjianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * Filter, which PaketUjian to fetch.
     */
    where?: PaketUjianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketUjians to fetch.
     */
    orderBy?: PaketUjianOrderByWithRelationInput | PaketUjianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaketUjians.
     */
    cursor?: PaketUjianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketUjians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketUjians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaketUjians.
     */
    distinct?: PaketUjianScalarFieldEnum | PaketUjianScalarFieldEnum[]
  }

  /**
   * PaketUjian findFirstOrThrow
   */
  export type PaketUjianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * Filter, which PaketUjian to fetch.
     */
    where?: PaketUjianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketUjians to fetch.
     */
    orderBy?: PaketUjianOrderByWithRelationInput | PaketUjianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaketUjians.
     */
    cursor?: PaketUjianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketUjians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketUjians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaketUjians.
     */
    distinct?: PaketUjianScalarFieldEnum | PaketUjianScalarFieldEnum[]
  }

  /**
   * PaketUjian findMany
   */
  export type PaketUjianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * Filter, which PaketUjians to fetch.
     */
    where?: PaketUjianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketUjians to fetch.
     */
    orderBy?: PaketUjianOrderByWithRelationInput | PaketUjianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaketUjians.
     */
    cursor?: PaketUjianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketUjians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketUjians.
     */
    skip?: number
    distinct?: PaketUjianScalarFieldEnum | PaketUjianScalarFieldEnum[]
  }

  /**
   * PaketUjian create
   */
  export type PaketUjianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * The data needed to create a PaketUjian.
     */
    data: XOR<PaketUjianCreateInput, PaketUjianUncheckedCreateInput>
  }

  /**
   * PaketUjian createMany
   */
  export type PaketUjianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaketUjians.
     */
    data: PaketUjianCreateManyInput | PaketUjianCreateManyInput[]
  }

  /**
   * PaketUjian createManyAndReturn
   */
  export type PaketUjianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaketUjians.
     */
    data: PaketUjianCreateManyInput | PaketUjianCreateManyInput[]
  }

  /**
   * PaketUjian update
   */
  export type PaketUjianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * The data needed to update a PaketUjian.
     */
    data: XOR<PaketUjianUpdateInput, PaketUjianUncheckedUpdateInput>
    /**
     * Choose, which PaketUjian to update.
     */
    where: PaketUjianWhereUniqueInput
  }

  /**
   * PaketUjian updateMany
   */
  export type PaketUjianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaketUjians.
     */
    data: XOR<PaketUjianUpdateManyMutationInput, PaketUjianUncheckedUpdateManyInput>
    /**
     * Filter which PaketUjians to update
     */
    where?: PaketUjianWhereInput
  }

  /**
   * PaketUjian upsert
   */
  export type PaketUjianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * The filter to search for the PaketUjian to update in case it exists.
     */
    where: PaketUjianWhereUniqueInput
    /**
     * In case the PaketUjian found by the `where` argument doesn't exist, create a new PaketUjian with this data.
     */
    create: XOR<PaketUjianCreateInput, PaketUjianUncheckedCreateInput>
    /**
     * In case the PaketUjian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaketUjianUpdateInput, PaketUjianUncheckedUpdateInput>
  }

  /**
   * PaketUjian delete
   */
  export type PaketUjianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
    /**
     * Filter which PaketUjian to delete.
     */
    where: PaketUjianWhereUniqueInput
  }

  /**
   * PaketUjian deleteMany
   */
  export type PaketUjianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaketUjians to delete
     */
    where?: PaketUjianWhereInput
  }

  /**
   * PaketUjian without action
   */
  export type PaketUjianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketUjian
     */
    select?: PaketUjianSelect<ExtArgs> | null
  }


  /**
   * Model SchoolProfile
   */

  export type AggregateSchoolProfile = {
    _count: SchoolProfileCountAggregateOutputType | null
    _min: SchoolProfileMinAggregateOutputType | null
    _max: SchoolProfileMaxAggregateOutputType | null
  }

  export type SchoolProfileMinAggregateOutputType = {
    userId: string | null
    schoolName: string | null
    headmasterName: string | null
    headmasterNip: string | null
    updatedAt: Date | null
  }

  export type SchoolProfileMaxAggregateOutputType = {
    userId: string | null
    schoolName: string | null
    headmasterName: string | null
    headmasterNip: string | null
    updatedAt: Date | null
  }

  export type SchoolProfileCountAggregateOutputType = {
    userId: number
    schoolName: number
    headmasterName: number
    headmasterNip: number
    updatedAt: number
    _all: number
  }


  export type SchoolProfileMinAggregateInputType = {
    userId?: true
    schoolName?: true
    headmasterName?: true
    headmasterNip?: true
    updatedAt?: true
  }

  export type SchoolProfileMaxAggregateInputType = {
    userId?: true
    schoolName?: true
    headmasterName?: true
    headmasterNip?: true
    updatedAt?: true
  }

  export type SchoolProfileCountAggregateInputType = {
    userId?: true
    schoolName?: true
    headmasterName?: true
    headmasterNip?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolProfile to aggregate.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolProfiles
    **/
    _count?: true | SchoolProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolProfileMaxAggregateInputType
  }

  export type GetSchoolProfileAggregateType<T extends SchoolProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolProfile[P]>
      : GetScalarType<T[P], AggregateSchoolProfile[P]>
  }




  export type SchoolProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolProfileWhereInput
    orderBy?: SchoolProfileOrderByWithAggregationInput | SchoolProfileOrderByWithAggregationInput[]
    by: SchoolProfileScalarFieldEnum[] | SchoolProfileScalarFieldEnum
    having?: SchoolProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolProfileCountAggregateInputType | true
    _min?: SchoolProfileMinAggregateInputType
    _max?: SchoolProfileMaxAggregateInputType
  }

  export type SchoolProfileGroupByOutputType = {
    userId: string
    schoolName: string
    headmasterName: string
    headmasterNip: string
    updatedAt: Date
    _count: SchoolProfileCountAggregateOutputType | null
    _min: SchoolProfileMinAggregateOutputType | null
    _max: SchoolProfileMaxAggregateOutputType | null
  }

  type GetSchoolProfileGroupByPayload<T extends SchoolProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolProfileGroupByOutputType[P]>
        }
      >
    >


  export type SchoolProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    schoolName?: boolean
    headmasterName?: boolean
    headmasterNip?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolProfile"]>

  export type SchoolProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    schoolName?: boolean
    headmasterName?: boolean
    headmasterNip?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolProfile"]>

  export type SchoolProfileSelectScalar = {
    userId?: boolean
    schoolName?: boolean
    headmasterName?: boolean
    headmasterNip?: boolean
    updatedAt?: boolean
  }


  export type $SchoolProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      schoolName: string
      headmasterName: string
      headmasterNip: string
      updatedAt: Date
    }, ExtArgs["result"]["schoolProfile"]>
    composites: {}
  }

  type SchoolProfileGetPayload<S extends boolean | null | undefined | SchoolProfileDefaultArgs> = $Result.GetResult<Prisma.$SchoolProfilePayload, S>

  type SchoolProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchoolProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchoolProfileCountAggregateInputType | true
    }

  export interface SchoolProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolProfile'], meta: { name: 'SchoolProfile' } }
    /**
     * Find zero or one SchoolProfile that matches the filter.
     * @param {SchoolProfileFindUniqueArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolProfileFindUniqueArgs>(args: SelectSubset<T, SchoolProfileFindUniqueArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SchoolProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SchoolProfileFindUniqueOrThrowArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SchoolProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileFindFirstArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolProfileFindFirstArgs>(args?: SelectSubset<T, SchoolProfileFindFirstArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SchoolProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileFindFirstOrThrowArgs} args - Arguments to find a SchoolProfile
     * @example
     * // Get one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SchoolProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolProfiles
     * const schoolProfiles = await prisma.schoolProfile.findMany()
     * 
     * // Get first 10 SchoolProfiles
     * const schoolProfiles = await prisma.schoolProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const schoolProfileWithUserIdOnly = await prisma.schoolProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SchoolProfileFindManyArgs>(args?: SelectSubset<T, SchoolProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SchoolProfile.
     * @param {SchoolProfileCreateArgs} args - Arguments to create a SchoolProfile.
     * @example
     * // Create one SchoolProfile
     * const SchoolProfile = await prisma.schoolProfile.create({
     *   data: {
     *     // ... data to create a SchoolProfile
     *   }
     * })
     * 
     */
    create<T extends SchoolProfileCreateArgs>(args: SelectSubset<T, SchoolProfileCreateArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SchoolProfiles.
     * @param {SchoolProfileCreateManyArgs} args - Arguments to create many SchoolProfiles.
     * @example
     * // Create many SchoolProfiles
     * const schoolProfile = await prisma.schoolProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolProfileCreateManyArgs>(args?: SelectSubset<T, SchoolProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolProfiles and returns the data saved in the database.
     * @param {SchoolProfileCreateManyAndReturnArgs} args - Arguments to create many SchoolProfiles.
     * @example
     * // Create many SchoolProfiles
     * const schoolProfile = await prisma.schoolProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolProfiles and only return the `userId`
     * const schoolProfileWithUserIdOnly = await prisma.schoolProfile.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SchoolProfile.
     * @param {SchoolProfileDeleteArgs} args - Arguments to delete one SchoolProfile.
     * @example
     * // Delete one SchoolProfile
     * const SchoolProfile = await prisma.schoolProfile.delete({
     *   where: {
     *     // ... filter to delete one SchoolProfile
     *   }
     * })
     * 
     */
    delete<T extends SchoolProfileDeleteArgs>(args: SelectSubset<T, SchoolProfileDeleteArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SchoolProfile.
     * @param {SchoolProfileUpdateArgs} args - Arguments to update one SchoolProfile.
     * @example
     * // Update one SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolProfileUpdateArgs>(args: SelectSubset<T, SchoolProfileUpdateArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SchoolProfiles.
     * @param {SchoolProfileDeleteManyArgs} args - Arguments to filter SchoolProfiles to delete.
     * @example
     * // Delete a few SchoolProfiles
     * const { count } = await prisma.schoolProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolProfileDeleteManyArgs>(args?: SelectSubset<T, SchoolProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolProfiles
     * const schoolProfile = await prisma.schoolProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolProfileUpdateManyArgs>(args: SelectSubset<T, SchoolProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchoolProfile.
     * @param {SchoolProfileUpsertArgs} args - Arguments to update or create a SchoolProfile.
     * @example
     * // Update or create a SchoolProfile
     * const schoolProfile = await prisma.schoolProfile.upsert({
     *   create: {
     *     // ... data to create a SchoolProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolProfile we want to update
     *   }
     * })
     */
    upsert<T extends SchoolProfileUpsertArgs>(args: SelectSubset<T, SchoolProfileUpsertArgs<ExtArgs>>): Prisma__SchoolProfileClient<$Result.GetResult<Prisma.$SchoolProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SchoolProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileCountArgs} args - Arguments to filter SchoolProfiles to count.
     * @example
     * // Count the number of SchoolProfiles
     * const count = await prisma.schoolProfile.count({
     *   where: {
     *     // ... the filter for the SchoolProfiles we want to count
     *   }
     * })
    **/
    count<T extends SchoolProfileCountArgs>(
      args?: Subset<T, SchoolProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolProfileAggregateArgs>(args: Subset<T, SchoolProfileAggregateArgs>): Prisma.PrismaPromise<GetSchoolProfileAggregateType<T>>

    /**
     * Group by SchoolProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolProfileGroupByArgs['orderBy'] }
        : { orderBy?: SchoolProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolProfile model
   */
  readonly fields: SchoolProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SchoolProfile model
   */ 
  interface SchoolProfileFieldRefs {
    readonly userId: FieldRef<"SchoolProfile", 'String'>
    readonly schoolName: FieldRef<"SchoolProfile", 'String'>
    readonly headmasterName: FieldRef<"SchoolProfile", 'String'>
    readonly headmasterNip: FieldRef<"SchoolProfile", 'String'>
    readonly updatedAt: FieldRef<"SchoolProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchoolProfile findUnique
   */
  export type SchoolProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile findUniqueOrThrow
   */
  export type SchoolProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile findFirst
   */
  export type SchoolProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolProfiles.
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolProfiles.
     */
    distinct?: SchoolProfileScalarFieldEnum | SchoolProfileScalarFieldEnum[]
  }

  /**
   * SchoolProfile findFirstOrThrow
   */
  export type SchoolProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Filter, which SchoolProfile to fetch.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolProfiles.
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolProfiles.
     */
    distinct?: SchoolProfileScalarFieldEnum | SchoolProfileScalarFieldEnum[]
  }

  /**
   * SchoolProfile findMany
   */
  export type SchoolProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Filter, which SchoolProfiles to fetch.
     */
    where?: SchoolProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolProfiles to fetch.
     */
    orderBy?: SchoolProfileOrderByWithRelationInput | SchoolProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolProfiles.
     */
    cursor?: SchoolProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolProfiles.
     */
    skip?: number
    distinct?: SchoolProfileScalarFieldEnum | SchoolProfileScalarFieldEnum[]
  }

  /**
   * SchoolProfile create
   */
  export type SchoolProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a SchoolProfile.
     */
    data: XOR<SchoolProfileCreateInput, SchoolProfileUncheckedCreateInput>
  }

  /**
   * SchoolProfile createMany
   */
  export type SchoolProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolProfiles.
     */
    data: SchoolProfileCreateManyInput | SchoolProfileCreateManyInput[]
  }

  /**
   * SchoolProfile createManyAndReturn
   */
  export type SchoolProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SchoolProfiles.
     */
    data: SchoolProfileCreateManyInput | SchoolProfileCreateManyInput[]
  }

  /**
   * SchoolProfile update
   */
  export type SchoolProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a SchoolProfile.
     */
    data: XOR<SchoolProfileUpdateInput, SchoolProfileUncheckedUpdateInput>
    /**
     * Choose, which SchoolProfile to update.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile updateMany
   */
  export type SchoolProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolProfiles.
     */
    data: XOR<SchoolProfileUpdateManyMutationInput, SchoolProfileUncheckedUpdateManyInput>
    /**
     * Filter which SchoolProfiles to update
     */
    where?: SchoolProfileWhereInput
  }

  /**
   * SchoolProfile upsert
   */
  export type SchoolProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the SchoolProfile to update in case it exists.
     */
    where: SchoolProfileWhereUniqueInput
    /**
     * In case the SchoolProfile found by the `where` argument doesn't exist, create a new SchoolProfile with this data.
     */
    create: XOR<SchoolProfileCreateInput, SchoolProfileUncheckedCreateInput>
    /**
     * In case the SchoolProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolProfileUpdateInput, SchoolProfileUncheckedUpdateInput>
  }

  /**
   * SchoolProfile delete
   */
  export type SchoolProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
    /**
     * Filter which SchoolProfile to delete.
     */
    where: SchoolProfileWhereUniqueInput
  }

  /**
   * SchoolProfile deleteMany
   */
  export type SchoolProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolProfiles to delete
     */
    where?: SchoolProfileWhereInput
  }

  /**
   * SchoolProfile without action
   */
  export type SchoolProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolProfile
     */
    select?: SchoolProfileSelect<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    fullName: string | null
    nip: string | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    fullName: string | null
    nip: string | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    fullName: number
    nip: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    userId?: true
    fullName?: true
    nip?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    fullName?: true
    nip?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    fullName?: true
    nip?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: string
    fullName: string
    nip: string | null
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    nip?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    nip?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    fullName?: boolean
    nip?: boolean
    updatedAt?: boolean
  }


  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      fullName: string
      nip: string | null
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly fullName: FieldRef<"UserProfile", 'String'>
    readonly nip: FieldRef<"UserProfile", 'String'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const PhaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    classes: 'classes'
  };

  export type PhaseScalarFieldEnum = (typeof PhaseScalarFieldEnum)[keyof typeof PhaseScalarFieldEnum]


  export const CapaianPembelajaranScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    phaseId: 'phaseId',
    content: 'content'
  };

  export type CapaianPembelajaranScalarFieldEnum = (typeof CapaianPembelajaranScalarFieldEnum)[keyof typeof CapaianPembelajaranScalarFieldEnum]


  export const CPElementScalarFieldEnum: {
    id: 'id',
    capaianPembelajaranId: 'capaianPembelajaranId',
    name: 'name',
    content: 'content'
  };

  export type CPElementScalarFieldEnum = (typeof CPElementScalarFieldEnum)[keyof typeof CPElementScalarFieldEnum]


  export const ClassSetupScalarFieldEnum: {
    userId: 'userId',
    subjectId: 'subjectId',
    phaseId: 'phaseId',
    updatedAt: 'updatedAt'
  };

  export type ClassSetupScalarFieldEnum = (typeof ClassSetupScalarFieldEnum)[keyof typeof ClassSetupScalarFieldEnum]


  export const TujuanPembelajaranScalarFieldEnum: {
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

  export type TujuanPembelajaranScalarFieldEnum = (typeof TujuanPembelajaranScalarFieldEnum)[keyof typeof TujuanPembelajaranScalarFieldEnum]


  export const PromesAllocationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subjectId: 'subjectId',
    phaseId: 'phaseId',
    tujuanPembelajaranId: 'tujuanPembelajaranId',
    month: 'month',
    week: 'week',
    jp: 'jp'
  };

  export type PromesAllocationScalarFieldEnum = (typeof PromesAllocationScalarFieldEnum)[keyof typeof PromesAllocationScalarFieldEnum]


  export const CalendarHolidayScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subjectId: 'subjectId',
    phaseId: 'phaseId',
    month: 'month',
    week: 'week',
    description: 'description'
  };

  export type CalendarHolidayScalarFieldEnum = (typeof CalendarHolidayScalarFieldEnum)[keyof typeof CalendarHolidayScalarFieldEnum]


  export const ModulAjarScalarFieldEnum: {
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

  export type ModulAjarScalarFieldEnum = (typeof ModulAjarScalarFieldEnum)[keyof typeof ModulAjarScalarFieldEnum]


  export const LkpdScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    modulAjarId: 'modulAjarId',
    type: 'type',
    difficulty: 'difficulty',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LkpdScalarFieldEnum = (typeof LkpdScalarFieldEnum)[keyof typeof LkpdScalarFieldEnum]


  export const BankSoalScalarFieldEnum: {
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

  export type BankSoalScalarFieldEnum = (typeof BankSoalScalarFieldEnum)[keyof typeof BankSoalScalarFieldEnum]


  export const PaketUjianScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    soalIds: 'soalIds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaketUjianScalarFieldEnum = (typeof PaketUjianScalarFieldEnum)[keyof typeof PaketUjianScalarFieldEnum]


  export const SchoolProfileScalarFieldEnum: {
    userId: 'userId',
    schoolName: 'schoolName',
    headmasterName: 'headmasterName',
    headmasterNip: 'headmasterNip',
    updatedAt: 'updatedAt'
  };

  export type SchoolProfileScalarFieldEnum = (typeof SchoolProfileScalarFieldEnum)[keyof typeof SchoolProfileScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    fullName: 'fullName',
    nip: 'nip',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    capaianPembelajarans?: CapaianPembelajaranListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    capaianPembelajarans?: CapaianPembelajaranOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    description?: StringNullableFilter<"Subject"> | string | null
    capaianPembelajarans?: CapaianPembelajaranListRelationFilter
  }, "id" | "name">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    description?: StringNullableWithAggregatesFilter<"Subject"> | string | null
  }

  export type PhaseWhereInput = {
    AND?: PhaseWhereInput | PhaseWhereInput[]
    OR?: PhaseWhereInput[]
    NOT?: PhaseWhereInput | PhaseWhereInput[]
    id?: StringFilter<"Phase"> | string
    name?: StringFilter<"Phase"> | string
    description?: StringNullableFilter<"Phase"> | string | null
    classes?: StringFilter<"Phase"> | string
    capaianPembelajarans?: CapaianPembelajaranListRelationFilter
    bankSoals?: BankSoalListRelationFilter
  }

  export type PhaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    classes?: SortOrder
    capaianPembelajarans?: CapaianPembelajaranOrderByRelationAggregateInput
    bankSoals?: BankSoalOrderByRelationAggregateInput
  }

  export type PhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PhaseWhereInput | PhaseWhereInput[]
    OR?: PhaseWhereInput[]
    NOT?: PhaseWhereInput | PhaseWhereInput[]
    description?: StringNullableFilter<"Phase"> | string | null
    classes?: StringFilter<"Phase"> | string
    capaianPembelajarans?: CapaianPembelajaranListRelationFilter
    bankSoals?: BankSoalListRelationFilter
  }, "id" | "name">

  export type PhaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    classes?: SortOrder
    _count?: PhaseCountOrderByAggregateInput
    _max?: PhaseMaxOrderByAggregateInput
    _min?: PhaseMinOrderByAggregateInput
  }

  export type PhaseScalarWhereWithAggregatesInput = {
    AND?: PhaseScalarWhereWithAggregatesInput | PhaseScalarWhereWithAggregatesInput[]
    OR?: PhaseScalarWhereWithAggregatesInput[]
    NOT?: PhaseScalarWhereWithAggregatesInput | PhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Phase"> | string
    name?: StringWithAggregatesFilter<"Phase"> | string
    description?: StringNullableWithAggregatesFilter<"Phase"> | string | null
    classes?: StringWithAggregatesFilter<"Phase"> | string
  }

  export type CapaianPembelajaranWhereInput = {
    AND?: CapaianPembelajaranWhereInput | CapaianPembelajaranWhereInput[]
    OR?: CapaianPembelajaranWhereInput[]
    NOT?: CapaianPembelajaranWhereInput | CapaianPembelajaranWhereInput[]
    id?: StringFilter<"CapaianPembelajaran"> | string
    subjectId?: StringFilter<"CapaianPembelajaran"> | string
    phaseId?: StringFilter<"CapaianPembelajaran"> | string
    content?: StringFilter<"CapaianPembelajaran"> | string
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    phase?: XOR<PhaseRelationFilter, PhaseWhereInput>
    elements?: CPElementListRelationFilter
  }

  export type CapaianPembelajaranOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    content?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    phase?: PhaseOrderByWithRelationInput
    elements?: CPElementOrderByRelationAggregateInput
  }

  export type CapaianPembelajaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subjectId_phaseId?: CapaianPembelajaranSubjectIdPhaseIdCompoundUniqueInput
    AND?: CapaianPembelajaranWhereInput | CapaianPembelajaranWhereInput[]
    OR?: CapaianPembelajaranWhereInput[]
    NOT?: CapaianPembelajaranWhereInput | CapaianPembelajaranWhereInput[]
    subjectId?: StringFilter<"CapaianPembelajaran"> | string
    phaseId?: StringFilter<"CapaianPembelajaran"> | string
    content?: StringFilter<"CapaianPembelajaran"> | string
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    phase?: XOR<PhaseRelationFilter, PhaseWhereInput>
    elements?: CPElementListRelationFilter
  }, "id" | "subjectId_phaseId">

  export type CapaianPembelajaranOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    content?: SortOrder
    _count?: CapaianPembelajaranCountOrderByAggregateInput
    _max?: CapaianPembelajaranMaxOrderByAggregateInput
    _min?: CapaianPembelajaranMinOrderByAggregateInput
  }

  export type CapaianPembelajaranScalarWhereWithAggregatesInput = {
    AND?: CapaianPembelajaranScalarWhereWithAggregatesInput | CapaianPembelajaranScalarWhereWithAggregatesInput[]
    OR?: CapaianPembelajaranScalarWhereWithAggregatesInput[]
    NOT?: CapaianPembelajaranScalarWhereWithAggregatesInput | CapaianPembelajaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CapaianPembelajaran"> | string
    subjectId?: StringWithAggregatesFilter<"CapaianPembelajaran"> | string
    phaseId?: StringWithAggregatesFilter<"CapaianPembelajaran"> | string
    content?: StringWithAggregatesFilter<"CapaianPembelajaran"> | string
  }

  export type CPElementWhereInput = {
    AND?: CPElementWhereInput | CPElementWhereInput[]
    OR?: CPElementWhereInput[]
    NOT?: CPElementWhereInput | CPElementWhereInput[]
    id?: StringFilter<"CPElement"> | string
    capaianPembelajaranId?: StringFilter<"CPElement"> | string
    name?: StringFilter<"CPElement"> | string
    content?: StringFilter<"CPElement"> | string
    capaianPembelajaran?: XOR<CapaianPembelajaranRelationFilter, CapaianPembelajaranWhereInput>
  }

  export type CPElementOrderByWithRelationInput = {
    id?: SortOrder
    capaianPembelajaranId?: SortOrder
    name?: SortOrder
    content?: SortOrder
    capaianPembelajaran?: CapaianPembelajaranOrderByWithRelationInput
  }

  export type CPElementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CPElementWhereInput | CPElementWhereInput[]
    OR?: CPElementWhereInput[]
    NOT?: CPElementWhereInput | CPElementWhereInput[]
    capaianPembelajaranId?: StringFilter<"CPElement"> | string
    name?: StringFilter<"CPElement"> | string
    content?: StringFilter<"CPElement"> | string
    capaianPembelajaran?: XOR<CapaianPembelajaranRelationFilter, CapaianPembelajaranWhereInput>
  }, "id">

  export type CPElementOrderByWithAggregationInput = {
    id?: SortOrder
    capaianPembelajaranId?: SortOrder
    name?: SortOrder
    content?: SortOrder
    _count?: CPElementCountOrderByAggregateInput
    _max?: CPElementMaxOrderByAggregateInput
    _min?: CPElementMinOrderByAggregateInput
  }

  export type CPElementScalarWhereWithAggregatesInput = {
    AND?: CPElementScalarWhereWithAggregatesInput | CPElementScalarWhereWithAggregatesInput[]
    OR?: CPElementScalarWhereWithAggregatesInput[]
    NOT?: CPElementScalarWhereWithAggregatesInput | CPElementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CPElement"> | string
    capaianPembelajaranId?: StringWithAggregatesFilter<"CPElement"> | string
    name?: StringWithAggregatesFilter<"CPElement"> | string
    content?: StringWithAggregatesFilter<"CPElement"> | string
  }

  export type ClassSetupWhereInput = {
    AND?: ClassSetupWhereInput | ClassSetupWhereInput[]
    OR?: ClassSetupWhereInput[]
    NOT?: ClassSetupWhereInput | ClassSetupWhereInput[]
    userId?: StringFilter<"ClassSetup"> | string
    subjectId?: StringFilter<"ClassSetup"> | string
    phaseId?: StringFilter<"ClassSetup"> | string
    updatedAt?: DateTimeFilter<"ClassSetup"> | Date | string
  }

  export type ClassSetupOrderByWithRelationInput = {
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSetupWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: ClassSetupWhereInput | ClassSetupWhereInput[]
    OR?: ClassSetupWhereInput[]
    NOT?: ClassSetupWhereInput | ClassSetupWhereInput[]
    subjectId?: StringFilter<"ClassSetup"> | string
    phaseId?: StringFilter<"ClassSetup"> | string
    updatedAt?: DateTimeFilter<"ClassSetup"> | Date | string
  }, "userId">

  export type ClassSetupOrderByWithAggregationInput = {
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassSetupCountOrderByAggregateInput
    _max?: ClassSetupMaxOrderByAggregateInput
    _min?: ClassSetupMinOrderByAggregateInput
  }

  export type ClassSetupScalarWhereWithAggregatesInput = {
    AND?: ClassSetupScalarWhereWithAggregatesInput | ClassSetupScalarWhereWithAggregatesInput[]
    OR?: ClassSetupScalarWhereWithAggregatesInput[]
    NOT?: ClassSetupScalarWhereWithAggregatesInput | ClassSetupScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ClassSetup"> | string
    subjectId?: StringWithAggregatesFilter<"ClassSetup"> | string
    phaseId?: StringWithAggregatesFilter<"ClassSetup"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassSetup"> | Date | string
  }

  export type TujuanPembelajaranWhereInput = {
    AND?: TujuanPembelajaranWhereInput | TujuanPembelajaranWhereInput[]
    OR?: TujuanPembelajaranWhereInput[]
    NOT?: TujuanPembelajaranWhereInput | TujuanPembelajaranWhereInput[]
    id?: StringFilter<"TujuanPembelajaran"> | string
    userId?: StringFilter<"TujuanPembelajaran"> | string
    subjectId?: StringFilter<"TujuanPembelajaran"> | string
    phaseId?: StringFilter<"TujuanPembelajaran"> | string
    code?: StringFilter<"TujuanPembelajaran"> | string
    element?: StringFilter<"TujuanPembelajaran"> | string
    description?: StringFilter<"TujuanPembelajaran"> | string
    order?: IntFilter<"TujuanPembelajaran"> | number
    createdAt?: DateTimeFilter<"TujuanPembelajaran"> | Date | string
    updatedAt?: DateTimeFilter<"TujuanPembelajaran"> | Date | string
    promesAllocations?: PromesAllocationListRelationFilter
    lkpds?: LkpdListRelationFilter
    bankSoals?: BankSoalListRelationFilter
    modulAjars?: ModulAjarListRelationFilter
  }

  export type TujuanPembelajaranOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    code?: SortOrder
    element?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promesAllocations?: PromesAllocationOrderByRelationAggregateInput
    lkpds?: LkpdOrderByRelationAggregateInput
    bankSoals?: BankSoalOrderByRelationAggregateInput
    modulAjars?: ModulAjarOrderByRelationAggregateInput
  }

  export type TujuanPembelajaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_subjectId_phaseId_code?: TujuanPembelajaranUserIdSubjectIdPhaseIdCodeCompoundUniqueInput
    AND?: TujuanPembelajaranWhereInput | TujuanPembelajaranWhereInput[]
    OR?: TujuanPembelajaranWhereInput[]
    NOT?: TujuanPembelajaranWhereInput | TujuanPembelajaranWhereInput[]
    userId?: StringFilter<"TujuanPembelajaran"> | string
    subjectId?: StringFilter<"TujuanPembelajaran"> | string
    phaseId?: StringFilter<"TujuanPembelajaran"> | string
    code?: StringFilter<"TujuanPembelajaran"> | string
    element?: StringFilter<"TujuanPembelajaran"> | string
    description?: StringFilter<"TujuanPembelajaran"> | string
    order?: IntFilter<"TujuanPembelajaran"> | number
    createdAt?: DateTimeFilter<"TujuanPembelajaran"> | Date | string
    updatedAt?: DateTimeFilter<"TujuanPembelajaran"> | Date | string
    promesAllocations?: PromesAllocationListRelationFilter
    lkpds?: LkpdListRelationFilter
    bankSoals?: BankSoalListRelationFilter
    modulAjars?: ModulAjarListRelationFilter
  }, "id" | "userId_subjectId_phaseId_code">

  export type TujuanPembelajaranOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    code?: SortOrder
    element?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TujuanPembelajaranCountOrderByAggregateInput
    _avg?: TujuanPembelajaranAvgOrderByAggregateInput
    _max?: TujuanPembelajaranMaxOrderByAggregateInput
    _min?: TujuanPembelajaranMinOrderByAggregateInput
    _sum?: TujuanPembelajaranSumOrderByAggregateInput
  }

  export type TujuanPembelajaranScalarWhereWithAggregatesInput = {
    AND?: TujuanPembelajaranScalarWhereWithAggregatesInput | TujuanPembelajaranScalarWhereWithAggregatesInput[]
    OR?: TujuanPembelajaranScalarWhereWithAggregatesInput[]
    NOT?: TujuanPembelajaranScalarWhereWithAggregatesInput | TujuanPembelajaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TujuanPembelajaran"> | string
    userId?: StringWithAggregatesFilter<"TujuanPembelajaran"> | string
    subjectId?: StringWithAggregatesFilter<"TujuanPembelajaran"> | string
    phaseId?: StringWithAggregatesFilter<"TujuanPembelajaran"> | string
    code?: StringWithAggregatesFilter<"TujuanPembelajaran"> | string
    element?: StringWithAggregatesFilter<"TujuanPembelajaran"> | string
    description?: StringWithAggregatesFilter<"TujuanPembelajaran"> | string
    order?: IntWithAggregatesFilter<"TujuanPembelajaran"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TujuanPembelajaran"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TujuanPembelajaran"> | Date | string
  }

  export type PromesAllocationWhereInput = {
    AND?: PromesAllocationWhereInput | PromesAllocationWhereInput[]
    OR?: PromesAllocationWhereInput[]
    NOT?: PromesAllocationWhereInput | PromesAllocationWhereInput[]
    id?: StringFilter<"PromesAllocation"> | string
    userId?: StringFilter<"PromesAllocation"> | string
    subjectId?: StringFilter<"PromesAllocation"> | string
    phaseId?: StringFilter<"PromesAllocation"> | string
    tujuanPembelajaranId?: StringFilter<"PromesAllocation"> | string
    month?: StringFilter<"PromesAllocation"> | string
    week?: IntFilter<"PromesAllocation"> | number
    jp?: IntFilter<"PromesAllocation"> | number
    tujuanPembelajaran?: XOR<TujuanPembelajaranRelationFilter, TujuanPembelajaranWhereInput>
  }

  export type PromesAllocationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    tujuanPembelajaranId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    jp?: SortOrder
    tujuanPembelajaran?: TujuanPembelajaranOrderByWithRelationInput
  }

  export type PromesAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_subjectId_phaseId_tujuanPembelajaranId_month_week?: PromesAllocationUserIdSubjectIdPhaseIdTujuanPembelajaranIdMonthWeekCompoundUniqueInput
    AND?: PromesAllocationWhereInput | PromesAllocationWhereInput[]
    OR?: PromesAllocationWhereInput[]
    NOT?: PromesAllocationWhereInput | PromesAllocationWhereInput[]
    userId?: StringFilter<"PromesAllocation"> | string
    subjectId?: StringFilter<"PromesAllocation"> | string
    phaseId?: StringFilter<"PromesAllocation"> | string
    tujuanPembelajaranId?: StringFilter<"PromesAllocation"> | string
    month?: StringFilter<"PromesAllocation"> | string
    week?: IntFilter<"PromesAllocation"> | number
    jp?: IntFilter<"PromesAllocation"> | number
    tujuanPembelajaran?: XOR<TujuanPembelajaranRelationFilter, TujuanPembelajaranWhereInput>
  }, "id" | "userId_subjectId_phaseId_tujuanPembelajaranId_month_week">

  export type PromesAllocationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    tujuanPembelajaranId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    jp?: SortOrder
    _count?: PromesAllocationCountOrderByAggregateInput
    _avg?: PromesAllocationAvgOrderByAggregateInput
    _max?: PromesAllocationMaxOrderByAggregateInput
    _min?: PromesAllocationMinOrderByAggregateInput
    _sum?: PromesAllocationSumOrderByAggregateInput
  }

  export type PromesAllocationScalarWhereWithAggregatesInput = {
    AND?: PromesAllocationScalarWhereWithAggregatesInput | PromesAllocationScalarWhereWithAggregatesInput[]
    OR?: PromesAllocationScalarWhereWithAggregatesInput[]
    NOT?: PromesAllocationScalarWhereWithAggregatesInput | PromesAllocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromesAllocation"> | string
    userId?: StringWithAggregatesFilter<"PromesAllocation"> | string
    subjectId?: StringWithAggregatesFilter<"PromesAllocation"> | string
    phaseId?: StringWithAggregatesFilter<"PromesAllocation"> | string
    tujuanPembelajaranId?: StringWithAggregatesFilter<"PromesAllocation"> | string
    month?: StringWithAggregatesFilter<"PromesAllocation"> | string
    week?: IntWithAggregatesFilter<"PromesAllocation"> | number
    jp?: IntWithAggregatesFilter<"PromesAllocation"> | number
  }

  export type CalendarHolidayWhereInput = {
    AND?: CalendarHolidayWhereInput | CalendarHolidayWhereInput[]
    OR?: CalendarHolidayWhereInput[]
    NOT?: CalendarHolidayWhereInput | CalendarHolidayWhereInput[]
    id?: StringFilter<"CalendarHoliday"> | string
    userId?: StringFilter<"CalendarHoliday"> | string
    subjectId?: StringFilter<"CalendarHoliday"> | string
    phaseId?: StringFilter<"CalendarHoliday"> | string
    month?: StringFilter<"CalendarHoliday"> | string
    week?: IntFilter<"CalendarHoliday"> | number
    description?: StringFilter<"CalendarHoliday"> | string
  }

  export type CalendarHolidayOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    description?: SortOrder
  }

  export type CalendarHolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_subjectId_phaseId_month_week?: CalendarHolidayUserIdSubjectIdPhaseIdMonthWeekCompoundUniqueInput
    AND?: CalendarHolidayWhereInput | CalendarHolidayWhereInput[]
    OR?: CalendarHolidayWhereInput[]
    NOT?: CalendarHolidayWhereInput | CalendarHolidayWhereInput[]
    userId?: StringFilter<"CalendarHoliday"> | string
    subjectId?: StringFilter<"CalendarHoliday"> | string
    phaseId?: StringFilter<"CalendarHoliday"> | string
    month?: StringFilter<"CalendarHoliday"> | string
    week?: IntFilter<"CalendarHoliday"> | number
    description?: StringFilter<"CalendarHoliday"> | string
  }, "id" | "userId_subjectId_phaseId_month_week">

  export type CalendarHolidayOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    description?: SortOrder
    _count?: CalendarHolidayCountOrderByAggregateInput
    _avg?: CalendarHolidayAvgOrderByAggregateInput
    _max?: CalendarHolidayMaxOrderByAggregateInput
    _min?: CalendarHolidayMinOrderByAggregateInput
    _sum?: CalendarHolidaySumOrderByAggregateInput
  }

  export type CalendarHolidayScalarWhereWithAggregatesInput = {
    AND?: CalendarHolidayScalarWhereWithAggregatesInput | CalendarHolidayScalarWhereWithAggregatesInput[]
    OR?: CalendarHolidayScalarWhereWithAggregatesInput[]
    NOT?: CalendarHolidayScalarWhereWithAggregatesInput | CalendarHolidayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarHoliday"> | string
    userId?: StringWithAggregatesFilter<"CalendarHoliday"> | string
    subjectId?: StringWithAggregatesFilter<"CalendarHoliday"> | string
    phaseId?: StringWithAggregatesFilter<"CalendarHoliday"> | string
    month?: StringWithAggregatesFilter<"CalendarHoliday"> | string
    week?: IntWithAggregatesFilter<"CalendarHoliday"> | number
    description?: StringWithAggregatesFilter<"CalendarHoliday"> | string
  }

  export type ModulAjarWhereInput = {
    AND?: ModulAjarWhereInput | ModulAjarWhereInput[]
    OR?: ModulAjarWhereInput[]
    NOT?: ModulAjarWhereInput | ModulAjarWhereInput[]
    id?: StringFilter<"ModulAjar"> | string
    userId?: StringFilter<"ModulAjar"> | string
    subjectId?: StringFilter<"ModulAjar"> | string
    phaseId?: StringFilter<"ModulAjar"> | string
    title?: StringFilter<"ModulAjar"> | string
    metadata?: StringFilter<"ModulAjar"> | string
    content?: StringFilter<"ModulAjar"> | string
    createdAt?: DateTimeFilter<"ModulAjar"> | Date | string
    updatedAt?: DateTimeFilter<"ModulAjar"> | Date | string
    tps?: TujuanPembelajaranListRelationFilter
    lkpds?: LkpdListRelationFilter
  }

  export type ModulAjarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    title?: SortOrder
    metadata?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tps?: TujuanPembelajaranOrderByRelationAggregateInput
    lkpds?: LkpdOrderByRelationAggregateInput
  }

  export type ModulAjarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModulAjarWhereInput | ModulAjarWhereInput[]
    OR?: ModulAjarWhereInput[]
    NOT?: ModulAjarWhereInput | ModulAjarWhereInput[]
    userId?: StringFilter<"ModulAjar"> | string
    subjectId?: StringFilter<"ModulAjar"> | string
    phaseId?: StringFilter<"ModulAjar"> | string
    title?: StringFilter<"ModulAjar"> | string
    metadata?: StringFilter<"ModulAjar"> | string
    content?: StringFilter<"ModulAjar"> | string
    createdAt?: DateTimeFilter<"ModulAjar"> | Date | string
    updatedAt?: DateTimeFilter<"ModulAjar"> | Date | string
    tps?: TujuanPembelajaranListRelationFilter
    lkpds?: LkpdListRelationFilter
  }, "id">

  export type ModulAjarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    title?: SortOrder
    metadata?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModulAjarCountOrderByAggregateInput
    _max?: ModulAjarMaxOrderByAggregateInput
    _min?: ModulAjarMinOrderByAggregateInput
  }

  export type ModulAjarScalarWhereWithAggregatesInput = {
    AND?: ModulAjarScalarWhereWithAggregatesInput | ModulAjarScalarWhereWithAggregatesInput[]
    OR?: ModulAjarScalarWhereWithAggregatesInput[]
    NOT?: ModulAjarScalarWhereWithAggregatesInput | ModulAjarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModulAjar"> | string
    userId?: StringWithAggregatesFilter<"ModulAjar"> | string
    subjectId?: StringWithAggregatesFilter<"ModulAjar"> | string
    phaseId?: StringWithAggregatesFilter<"ModulAjar"> | string
    title?: StringWithAggregatesFilter<"ModulAjar"> | string
    metadata?: StringWithAggregatesFilter<"ModulAjar"> | string
    content?: StringWithAggregatesFilter<"ModulAjar"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ModulAjar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModulAjar"> | Date | string
  }

  export type LkpdWhereInput = {
    AND?: LkpdWhereInput | LkpdWhereInput[]
    OR?: LkpdWhereInput[]
    NOT?: LkpdWhereInput | LkpdWhereInput[]
    id?: StringFilter<"Lkpd"> | string
    userId?: StringFilter<"Lkpd"> | string
    modulAjarId?: StringNullableFilter<"Lkpd"> | string | null
    type?: StringFilter<"Lkpd"> | string
    difficulty?: StringFilter<"Lkpd"> | string
    content?: StringFilter<"Lkpd"> | string
    createdAt?: DateTimeFilter<"Lkpd"> | Date | string
    updatedAt?: DateTimeFilter<"Lkpd"> | Date | string
    tps?: TujuanPembelajaranListRelationFilter
    modulAjar?: XOR<ModulAjarNullableRelationFilter, ModulAjarWhereInput> | null
  }

  export type LkpdOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    modulAjarId?: SortOrderInput | SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tps?: TujuanPembelajaranOrderByRelationAggregateInput
    modulAjar?: ModulAjarOrderByWithRelationInput
  }

  export type LkpdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LkpdWhereInput | LkpdWhereInput[]
    OR?: LkpdWhereInput[]
    NOT?: LkpdWhereInput | LkpdWhereInput[]
    userId?: StringFilter<"Lkpd"> | string
    modulAjarId?: StringNullableFilter<"Lkpd"> | string | null
    type?: StringFilter<"Lkpd"> | string
    difficulty?: StringFilter<"Lkpd"> | string
    content?: StringFilter<"Lkpd"> | string
    createdAt?: DateTimeFilter<"Lkpd"> | Date | string
    updatedAt?: DateTimeFilter<"Lkpd"> | Date | string
    tps?: TujuanPembelajaranListRelationFilter
    modulAjar?: XOR<ModulAjarNullableRelationFilter, ModulAjarWhereInput> | null
  }, "id">

  export type LkpdOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    modulAjarId?: SortOrderInput | SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LkpdCountOrderByAggregateInput
    _max?: LkpdMaxOrderByAggregateInput
    _min?: LkpdMinOrderByAggregateInput
  }

  export type LkpdScalarWhereWithAggregatesInput = {
    AND?: LkpdScalarWhereWithAggregatesInput | LkpdScalarWhereWithAggregatesInput[]
    OR?: LkpdScalarWhereWithAggregatesInput[]
    NOT?: LkpdScalarWhereWithAggregatesInput | LkpdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lkpd"> | string
    userId?: StringWithAggregatesFilter<"Lkpd"> | string
    modulAjarId?: StringNullableWithAggregatesFilter<"Lkpd"> | string | null
    type?: StringWithAggregatesFilter<"Lkpd"> | string
    difficulty?: StringWithAggregatesFilter<"Lkpd"> | string
    content?: StringWithAggregatesFilter<"Lkpd"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lkpd"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lkpd"> | Date | string
  }

  export type BankSoalWhereInput = {
    AND?: BankSoalWhereInput | BankSoalWhereInput[]
    OR?: BankSoalWhereInput[]
    NOT?: BankSoalWhereInput | BankSoalWhereInput[]
    id?: StringFilter<"BankSoal"> | string
    userId?: StringFilter<"BankSoal"> | string
    phaseId?: StringFilter<"BankSoal"> | string
    cognitiveLevel?: StringFilter<"BankSoal"> | string
    akmType?: StringFilter<"BankSoal"> | string
    stimulus?: StringNullableFilter<"BankSoal"> | string | null
    pertanyaan?: StringFilter<"BankSoal"> | string
    options?: StringNullableFilter<"BankSoal"> | string | null
    kunciJawaban?: StringFilter<"BankSoal"> | string
    rubrikPenilaian?: StringNullableFilter<"BankSoal"> | string | null
    generateCode?: StringNullableFilter<"BankSoal"> | string | null
    createdAt?: DateTimeFilter<"BankSoal"> | Date | string
    updatedAt?: DateTimeFilter<"BankSoal"> | Date | string
    tps?: TujuanPembelajaranListRelationFilter
    phase?: XOR<PhaseRelationFilter, PhaseWhereInput>
  }

  export type BankSoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phaseId?: SortOrder
    cognitiveLevel?: SortOrder
    akmType?: SortOrder
    stimulus?: SortOrderInput | SortOrder
    pertanyaan?: SortOrder
    options?: SortOrderInput | SortOrder
    kunciJawaban?: SortOrder
    rubrikPenilaian?: SortOrderInput | SortOrder
    generateCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tps?: TujuanPembelajaranOrderByRelationAggregateInput
    phase?: PhaseOrderByWithRelationInput
  }

  export type BankSoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BankSoalWhereInput | BankSoalWhereInput[]
    OR?: BankSoalWhereInput[]
    NOT?: BankSoalWhereInput | BankSoalWhereInput[]
    userId?: StringFilter<"BankSoal"> | string
    phaseId?: StringFilter<"BankSoal"> | string
    cognitiveLevel?: StringFilter<"BankSoal"> | string
    akmType?: StringFilter<"BankSoal"> | string
    stimulus?: StringNullableFilter<"BankSoal"> | string | null
    pertanyaan?: StringFilter<"BankSoal"> | string
    options?: StringNullableFilter<"BankSoal"> | string | null
    kunciJawaban?: StringFilter<"BankSoal"> | string
    rubrikPenilaian?: StringNullableFilter<"BankSoal"> | string | null
    generateCode?: StringNullableFilter<"BankSoal"> | string | null
    createdAt?: DateTimeFilter<"BankSoal"> | Date | string
    updatedAt?: DateTimeFilter<"BankSoal"> | Date | string
    tps?: TujuanPembelajaranListRelationFilter
    phase?: XOR<PhaseRelationFilter, PhaseWhereInput>
  }, "id">

  export type BankSoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phaseId?: SortOrder
    cognitiveLevel?: SortOrder
    akmType?: SortOrder
    stimulus?: SortOrderInput | SortOrder
    pertanyaan?: SortOrder
    options?: SortOrderInput | SortOrder
    kunciJawaban?: SortOrder
    rubrikPenilaian?: SortOrderInput | SortOrder
    generateCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankSoalCountOrderByAggregateInput
    _max?: BankSoalMaxOrderByAggregateInput
    _min?: BankSoalMinOrderByAggregateInput
  }

  export type BankSoalScalarWhereWithAggregatesInput = {
    AND?: BankSoalScalarWhereWithAggregatesInput | BankSoalScalarWhereWithAggregatesInput[]
    OR?: BankSoalScalarWhereWithAggregatesInput[]
    NOT?: BankSoalScalarWhereWithAggregatesInput | BankSoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankSoal"> | string
    userId?: StringWithAggregatesFilter<"BankSoal"> | string
    phaseId?: StringWithAggregatesFilter<"BankSoal"> | string
    cognitiveLevel?: StringWithAggregatesFilter<"BankSoal"> | string
    akmType?: StringWithAggregatesFilter<"BankSoal"> | string
    stimulus?: StringNullableWithAggregatesFilter<"BankSoal"> | string | null
    pertanyaan?: StringWithAggregatesFilter<"BankSoal"> | string
    options?: StringNullableWithAggregatesFilter<"BankSoal"> | string | null
    kunciJawaban?: StringWithAggregatesFilter<"BankSoal"> | string
    rubrikPenilaian?: StringNullableWithAggregatesFilter<"BankSoal"> | string | null
    generateCode?: StringNullableWithAggregatesFilter<"BankSoal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BankSoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankSoal"> | Date | string
  }

  export type PaketUjianWhereInput = {
    AND?: PaketUjianWhereInput | PaketUjianWhereInput[]
    OR?: PaketUjianWhereInput[]
    NOT?: PaketUjianWhereInput | PaketUjianWhereInput[]
    id?: StringFilter<"PaketUjian"> | string
    userId?: StringFilter<"PaketUjian"> | string
    name?: StringFilter<"PaketUjian"> | string
    soalIds?: StringFilter<"PaketUjian"> | string
    createdAt?: DateTimeFilter<"PaketUjian"> | Date | string
    updatedAt?: DateTimeFilter<"PaketUjian"> | Date | string
  }

  export type PaketUjianOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    soalIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaketUjianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaketUjianWhereInput | PaketUjianWhereInput[]
    OR?: PaketUjianWhereInput[]
    NOT?: PaketUjianWhereInput | PaketUjianWhereInput[]
    userId?: StringFilter<"PaketUjian"> | string
    name?: StringFilter<"PaketUjian"> | string
    soalIds?: StringFilter<"PaketUjian"> | string
    createdAt?: DateTimeFilter<"PaketUjian"> | Date | string
    updatedAt?: DateTimeFilter<"PaketUjian"> | Date | string
  }, "id">

  export type PaketUjianOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    soalIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaketUjianCountOrderByAggregateInput
    _max?: PaketUjianMaxOrderByAggregateInput
    _min?: PaketUjianMinOrderByAggregateInput
  }

  export type PaketUjianScalarWhereWithAggregatesInput = {
    AND?: PaketUjianScalarWhereWithAggregatesInput | PaketUjianScalarWhereWithAggregatesInput[]
    OR?: PaketUjianScalarWhereWithAggregatesInput[]
    NOT?: PaketUjianScalarWhereWithAggregatesInput | PaketUjianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaketUjian"> | string
    userId?: StringWithAggregatesFilter<"PaketUjian"> | string
    name?: StringWithAggregatesFilter<"PaketUjian"> | string
    soalIds?: StringWithAggregatesFilter<"PaketUjian"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaketUjian"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaketUjian"> | Date | string
  }

  export type SchoolProfileWhereInput = {
    AND?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    OR?: SchoolProfileWhereInput[]
    NOT?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    userId?: StringFilter<"SchoolProfile"> | string
    schoolName?: StringFilter<"SchoolProfile"> | string
    headmasterName?: StringFilter<"SchoolProfile"> | string
    headmasterNip?: StringFilter<"SchoolProfile"> | string
    updatedAt?: DateTimeFilter<"SchoolProfile"> | Date | string
  }

  export type SchoolProfileOrderByWithRelationInput = {
    userId?: SortOrder
    schoolName?: SortOrder
    headmasterName?: SortOrder
    headmasterNip?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    OR?: SchoolProfileWhereInput[]
    NOT?: SchoolProfileWhereInput | SchoolProfileWhereInput[]
    schoolName?: StringFilter<"SchoolProfile"> | string
    headmasterName?: StringFilter<"SchoolProfile"> | string
    headmasterNip?: StringFilter<"SchoolProfile"> | string
    updatedAt?: DateTimeFilter<"SchoolProfile"> | Date | string
  }, "userId">

  export type SchoolProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    schoolName?: SortOrder
    headmasterName?: SortOrder
    headmasterNip?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolProfileCountOrderByAggregateInput
    _max?: SchoolProfileMaxOrderByAggregateInput
    _min?: SchoolProfileMinOrderByAggregateInput
  }

  export type SchoolProfileScalarWhereWithAggregatesInput = {
    AND?: SchoolProfileScalarWhereWithAggregatesInput | SchoolProfileScalarWhereWithAggregatesInput[]
    OR?: SchoolProfileScalarWhereWithAggregatesInput[]
    NOT?: SchoolProfileScalarWhereWithAggregatesInput | SchoolProfileScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"SchoolProfile"> | string
    schoolName?: StringWithAggregatesFilter<"SchoolProfile"> | string
    headmasterName?: StringWithAggregatesFilter<"SchoolProfile"> | string
    headmasterNip?: StringWithAggregatesFilter<"SchoolProfile"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SchoolProfile"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: StringFilter<"UserProfile"> | string
    fullName?: StringFilter<"UserProfile"> | string
    nip?: StringNullableFilter<"UserProfile"> | string | null
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    nip?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    fullName?: StringFilter<"UserProfile"> | string
    nip?: StringNullableFilter<"UserProfile"> | string | null
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }, "userId">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    nip?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    fullName?: StringWithAggregatesFilter<"UserProfile"> | string
    nip?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    capaianPembelajarans?: CapaianPembelajaranCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    capaianPembelajarans?: CapaianPembelajaranUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capaianPembelajarans?: CapaianPembelajaranUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capaianPembelajarans?: CapaianPembelajaranUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhaseCreateInput = {
    id?: string
    name: string
    description?: string | null
    classes: string
    capaianPembelajarans?: CapaianPembelajaranCreateNestedManyWithoutPhaseInput
    bankSoals?: BankSoalCreateNestedManyWithoutPhaseInput
  }

  export type PhaseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    classes: string
    capaianPembelajarans?: CapaianPembelajaranUncheckedCreateNestedManyWithoutPhaseInput
    bankSoals?: BankSoalUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type PhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
    capaianPembelajarans?: CapaianPembelajaranUpdateManyWithoutPhaseNestedInput
    bankSoals?: BankSoalUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
    capaianPembelajarans?: CapaianPembelajaranUncheckedUpdateManyWithoutPhaseNestedInput
    bankSoals?: BankSoalUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    classes: string
  }

  export type PhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
  }

  export type PhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
  }

  export type CapaianPembelajaranCreateInput = {
    id?: string
    content: string
    subject: SubjectCreateNestedOneWithoutCapaianPembelajaransInput
    phase: PhaseCreateNestedOneWithoutCapaianPembelajaransInput
    elements?: CPElementCreateNestedManyWithoutCapaianPembelajaranInput
  }

  export type CapaianPembelajaranUncheckedCreateInput = {
    id?: string
    subjectId: string
    phaseId: string
    content: string
    elements?: CPElementUncheckedCreateNestedManyWithoutCapaianPembelajaranInput
  }

  export type CapaianPembelajaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutCapaianPembelajaransNestedInput
    phase?: PhaseUpdateOneRequiredWithoutCapaianPembelajaransNestedInput
    elements?: CPElementUpdateManyWithoutCapaianPembelajaranNestedInput
  }

  export type CapaianPembelajaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    elements?: CPElementUncheckedUpdateManyWithoutCapaianPembelajaranNestedInput
  }

  export type CapaianPembelajaranCreateManyInput = {
    id?: string
    subjectId: string
    phaseId: string
    content: string
  }

  export type CapaianPembelajaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CapaianPembelajaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CPElementCreateInput = {
    id?: string
    name: string
    content: string
    capaianPembelajaran: CapaianPembelajaranCreateNestedOneWithoutElementsInput
  }

  export type CPElementUncheckedCreateInput = {
    id?: string
    capaianPembelajaranId: string
    name: string
    content: string
  }

  export type CPElementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    capaianPembelajaran?: CapaianPembelajaranUpdateOneRequiredWithoutElementsNestedInput
  }

  export type CPElementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    capaianPembelajaranId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CPElementCreateManyInput = {
    id?: string
    capaianPembelajaranId: string
    name: string
    content: string
  }

  export type CPElementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CPElementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    capaianPembelajaranId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSetupCreateInput = {
    userId: string
    subjectId: string
    phaseId: string
    updatedAt?: Date | string
  }

  export type ClassSetupUncheckedCreateInput = {
    userId: string
    subjectId: string
    phaseId: string
    updatedAt?: Date | string
  }

  export type ClassSetupUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSetupUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSetupCreateManyInput = {
    userId: string
    subjectId: string
    phaseId: string
    updatedAt?: Date | string
  }

  export type ClassSetupUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSetupUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TujuanPembelajaranCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationCreateNestedManyWithoutTujuanPembelajaranInput
    lkpds?: LkpdCreateNestedManyWithoutTpsInput
    bankSoals?: BankSoalCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranUncheckedCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationUncheckedCreateNestedManyWithoutTujuanPembelajaranInput
    lkpds?: LkpdUncheckedCreateNestedManyWithoutTpsInput
    bankSoals?: BankSoalUncheckedCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarUncheckedCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUpdateManyWithoutTujuanPembelajaranNestedInput
    lkpds?: LkpdUpdateManyWithoutTpsNestedInput
    bankSoals?: BankSoalUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUncheckedUpdateManyWithoutTujuanPembelajaranNestedInput
    lkpds?: LkpdUncheckedUpdateManyWithoutTpsNestedInput
    bankSoals?: BankSoalUncheckedUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUncheckedUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranCreateManyInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TujuanPembelajaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TujuanPembelajaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromesAllocationCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    jp: number
    tujuanPembelajaran: TujuanPembelajaranCreateNestedOneWithoutPromesAllocationsInput
  }

  export type PromesAllocationUncheckedCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    tujuanPembelajaranId: string
    month: string
    week: number
    jp: number
  }

  export type PromesAllocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    jp?: IntFieldUpdateOperationsInput | number
    tujuanPembelajaran?: TujuanPembelajaranUpdateOneRequiredWithoutPromesAllocationsNestedInput
  }

  export type PromesAllocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    tujuanPembelajaranId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    jp?: IntFieldUpdateOperationsInput | number
  }

  export type PromesAllocationCreateManyInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    tujuanPembelajaranId: string
    month: string
    week: number
    jp: number
  }

  export type PromesAllocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    jp?: IntFieldUpdateOperationsInput | number
  }

  export type PromesAllocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    tujuanPembelajaranId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    jp?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarHolidayCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    description: string
  }

  export type CalendarHolidayUncheckedCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    description: string
  }

  export type CalendarHolidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarHolidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarHolidayCreateManyInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    description: string
  }

  export type CalendarHolidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarHolidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ModulAjarCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranCreateNestedManyWithoutModulAjarsInput
    lkpds?: LkpdCreateNestedManyWithoutModulAjarInput
  }

  export type ModulAjarUncheckedCreateInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranUncheckedCreateNestedManyWithoutModulAjarsInput
    lkpds?: LkpdUncheckedCreateNestedManyWithoutModulAjarInput
  }

  export type ModulAjarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUpdateManyWithoutModulAjarsNestedInput
    lkpds?: LkpdUpdateManyWithoutModulAjarNestedInput
  }

  export type ModulAjarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUncheckedUpdateManyWithoutModulAjarsNestedInput
    lkpds?: LkpdUncheckedUpdateManyWithoutModulAjarNestedInput
  }

  export type ModulAjarCreateManyInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModulAjarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulAjarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LkpdCreateInput = {
    id?: string
    userId: string
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranCreateNestedManyWithoutLkpdsInput
    modulAjar?: ModulAjarCreateNestedOneWithoutLkpdsInput
  }

  export type LkpdUncheckedCreateInput = {
    id?: string
    userId: string
    modulAjarId?: string | null
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranUncheckedCreateNestedManyWithoutLkpdsInput
  }

  export type LkpdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUpdateManyWithoutLkpdsNestedInput
    modulAjar?: ModulAjarUpdateOneWithoutLkpdsNestedInput
  }

  export type LkpdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modulAjarId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUncheckedUpdateManyWithoutLkpdsNestedInput
  }

  export type LkpdCreateManyInput = {
    id?: string
    userId: string
    modulAjarId?: string | null
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LkpdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LkpdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modulAjarId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankSoalCreateInput = {
    id?: string
    userId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranCreateNestedManyWithoutBankSoalsInput
    phase: PhaseCreateNestedOneWithoutBankSoalsInput
  }

  export type BankSoalUncheckedCreateInput = {
    id?: string
    userId: string
    phaseId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranUncheckedCreateNestedManyWithoutBankSoalsInput
  }

  export type BankSoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUpdateManyWithoutBankSoalsNestedInput
    phase?: PhaseUpdateOneRequiredWithoutBankSoalsNestedInput
  }

  export type BankSoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUncheckedUpdateManyWithoutBankSoalsNestedInput
  }

  export type BankSoalCreateManyInput = {
    id?: string
    userId: string
    phaseId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankSoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankSoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketUjianCreateInput = {
    id?: string
    userId: string
    name: string
    soalIds: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaketUjianUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    soalIds: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaketUjianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    soalIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketUjianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    soalIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketUjianCreateManyInput = {
    id?: string
    userId: string
    name: string
    soalIds: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaketUjianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    soalIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketUjianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    soalIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolProfileCreateInput = {
    userId: string
    schoolName?: string
    headmasterName?: string
    headmasterNip?: string
    updatedAt?: Date | string
  }

  export type SchoolProfileUncheckedCreateInput = {
    userId: string
    schoolName?: string
    headmasterName?: string
    headmasterNip?: string
    updatedAt?: Date | string
  }

  export type SchoolProfileUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    headmasterName?: StringFieldUpdateOperationsInput | string
    headmasterNip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    headmasterName?: StringFieldUpdateOperationsInput | string
    headmasterNip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolProfileCreateManyInput = {
    userId: string
    schoolName?: string
    headmasterName?: string
    headmasterNip?: string
    updatedAt?: Date | string
  }

  export type SchoolProfileUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    headmasterName?: StringFieldUpdateOperationsInput | string
    headmasterNip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    headmasterName?: StringFieldUpdateOperationsInput | string
    headmasterNip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    userId: string
    fullName?: string
    nip?: string | null
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    fullName?: string
    nip?: string | null
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    userId: string
    fullName?: string
    nip?: string | null
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CapaianPembelajaranListRelationFilter = {
    every?: CapaianPembelajaranWhereInput
    some?: CapaianPembelajaranWhereInput
    none?: CapaianPembelajaranWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CapaianPembelajaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BankSoalListRelationFilter = {
    every?: BankSoalWhereInput
    some?: BankSoalWhereInput
    none?: BankSoalWhereInput
  }

  export type BankSoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    classes?: SortOrder
  }

  export type PhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    classes?: SortOrder
  }

  export type PhaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    classes?: SortOrder
  }

  export type SubjectRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type PhaseRelationFilter = {
    is?: PhaseWhereInput
    isNot?: PhaseWhereInput
  }

  export type CPElementListRelationFilter = {
    every?: CPElementWhereInput
    some?: CPElementWhereInput
    none?: CPElementWhereInput
  }

  export type CPElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapaianPembelajaranSubjectIdPhaseIdCompoundUniqueInput = {
    subjectId: string
    phaseId: string
  }

  export type CapaianPembelajaranCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    content?: SortOrder
  }

  export type CapaianPembelajaranMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    content?: SortOrder
  }

  export type CapaianPembelajaranMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    content?: SortOrder
  }

  export type CapaianPembelajaranRelationFilter = {
    is?: CapaianPembelajaranWhereInput
    isNot?: CapaianPembelajaranWhereInput
  }

  export type CPElementCountOrderByAggregateInput = {
    id?: SortOrder
    capaianPembelajaranId?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type CPElementMaxOrderByAggregateInput = {
    id?: SortOrder
    capaianPembelajaranId?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type CPElementMinOrderByAggregateInput = {
    id?: SortOrder
    capaianPembelajaranId?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClassSetupCountOrderByAggregateInput = {
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSetupMaxOrderByAggregateInput = {
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSetupMinOrderByAggregateInput = {
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PromesAllocationListRelationFilter = {
    every?: PromesAllocationWhereInput
    some?: PromesAllocationWhereInput
    none?: PromesAllocationWhereInput
  }

  export type LkpdListRelationFilter = {
    every?: LkpdWhereInput
    some?: LkpdWhereInput
    none?: LkpdWhereInput
  }

  export type ModulAjarListRelationFilter = {
    every?: ModulAjarWhereInput
    some?: ModulAjarWhereInput
    none?: ModulAjarWhereInput
  }

  export type PromesAllocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LkpdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModulAjarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TujuanPembelajaranUserIdSubjectIdPhaseIdCodeCompoundUniqueInput = {
    userId: string
    subjectId: string
    phaseId: string
    code: string
  }

  export type TujuanPembelajaranCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    code?: SortOrder
    element?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TujuanPembelajaranAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TujuanPembelajaranMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    code?: SortOrder
    element?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TujuanPembelajaranMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    code?: SortOrder
    element?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TujuanPembelajaranSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TujuanPembelajaranRelationFilter = {
    is?: TujuanPembelajaranWhereInput
    isNot?: TujuanPembelajaranWhereInput
  }

  export type PromesAllocationUserIdSubjectIdPhaseIdTujuanPembelajaranIdMonthWeekCompoundUniqueInput = {
    userId: string
    subjectId: string
    phaseId: string
    tujuanPembelajaranId: string
    month: string
    week: number
  }

  export type PromesAllocationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    tujuanPembelajaranId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    jp?: SortOrder
  }

  export type PromesAllocationAvgOrderByAggregateInput = {
    week?: SortOrder
    jp?: SortOrder
  }

  export type PromesAllocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    tujuanPembelajaranId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    jp?: SortOrder
  }

  export type PromesAllocationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    tujuanPembelajaranId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    jp?: SortOrder
  }

  export type PromesAllocationSumOrderByAggregateInput = {
    week?: SortOrder
    jp?: SortOrder
  }

  export type CalendarHolidayUserIdSubjectIdPhaseIdMonthWeekCompoundUniqueInput = {
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
  }

  export type CalendarHolidayCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    description?: SortOrder
  }

  export type CalendarHolidayAvgOrderByAggregateInput = {
    week?: SortOrder
  }

  export type CalendarHolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    description?: SortOrder
  }

  export type CalendarHolidayMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    month?: SortOrder
    week?: SortOrder
    description?: SortOrder
  }

  export type CalendarHolidaySumOrderByAggregateInput = {
    week?: SortOrder
  }

  export type TujuanPembelajaranListRelationFilter = {
    every?: TujuanPembelajaranWhereInput
    some?: TujuanPembelajaranWhereInput
    none?: TujuanPembelajaranWhereInput
  }

  export type TujuanPembelajaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModulAjarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    title?: SortOrder
    metadata?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModulAjarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    title?: SortOrder
    metadata?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModulAjarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    phaseId?: SortOrder
    title?: SortOrder
    metadata?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModulAjarNullableRelationFilter = {
    is?: ModulAjarWhereInput | null
    isNot?: ModulAjarWhereInput | null
  }

  export type LkpdCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modulAjarId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LkpdMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modulAjarId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LkpdMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modulAjarId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankSoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phaseId?: SortOrder
    cognitiveLevel?: SortOrder
    akmType?: SortOrder
    stimulus?: SortOrder
    pertanyaan?: SortOrder
    options?: SortOrder
    kunciJawaban?: SortOrder
    rubrikPenilaian?: SortOrder
    generateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankSoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phaseId?: SortOrder
    cognitiveLevel?: SortOrder
    akmType?: SortOrder
    stimulus?: SortOrder
    pertanyaan?: SortOrder
    options?: SortOrder
    kunciJawaban?: SortOrder
    rubrikPenilaian?: SortOrder
    generateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankSoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phaseId?: SortOrder
    cognitiveLevel?: SortOrder
    akmType?: SortOrder
    stimulus?: SortOrder
    pertanyaan?: SortOrder
    options?: SortOrder
    kunciJawaban?: SortOrder
    rubrikPenilaian?: SortOrder
    generateCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaketUjianCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    soalIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaketUjianMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    soalIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaketUjianMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    soalIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    schoolName?: SortOrder
    headmasterName?: SortOrder
    headmasterNip?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    schoolName?: SortOrder
    headmasterName?: SortOrder
    headmasterNip?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    schoolName?: SortOrder
    headmasterName?: SortOrder
    headmasterNip?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    nip?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    nip?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    nip?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type CapaianPembelajaranCreateNestedManyWithoutSubjectInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutSubjectInput, CapaianPembelajaranUncheckedCreateWithoutSubjectInput> | CapaianPembelajaranCreateWithoutSubjectInput[] | CapaianPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutSubjectInput | CapaianPembelajaranCreateOrConnectWithoutSubjectInput[]
    createMany?: CapaianPembelajaranCreateManySubjectInputEnvelope
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
  }

  export type CapaianPembelajaranUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutSubjectInput, CapaianPembelajaranUncheckedCreateWithoutSubjectInput> | CapaianPembelajaranCreateWithoutSubjectInput[] | CapaianPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutSubjectInput | CapaianPembelajaranCreateOrConnectWithoutSubjectInput[]
    createMany?: CapaianPembelajaranCreateManySubjectInputEnvelope
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CapaianPembelajaranUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutSubjectInput, CapaianPembelajaranUncheckedCreateWithoutSubjectInput> | CapaianPembelajaranCreateWithoutSubjectInput[] | CapaianPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutSubjectInput | CapaianPembelajaranCreateOrConnectWithoutSubjectInput[]
    upsert?: CapaianPembelajaranUpsertWithWhereUniqueWithoutSubjectInput | CapaianPembelajaranUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: CapaianPembelajaranCreateManySubjectInputEnvelope
    set?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    disconnect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    delete?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    update?: CapaianPembelajaranUpdateWithWhereUniqueWithoutSubjectInput | CapaianPembelajaranUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: CapaianPembelajaranUpdateManyWithWhereWithoutSubjectInput | CapaianPembelajaranUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: CapaianPembelajaranScalarWhereInput | CapaianPembelajaranScalarWhereInput[]
  }

  export type CapaianPembelajaranUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutSubjectInput, CapaianPembelajaranUncheckedCreateWithoutSubjectInput> | CapaianPembelajaranCreateWithoutSubjectInput[] | CapaianPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutSubjectInput | CapaianPembelajaranCreateOrConnectWithoutSubjectInput[]
    upsert?: CapaianPembelajaranUpsertWithWhereUniqueWithoutSubjectInput | CapaianPembelajaranUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: CapaianPembelajaranCreateManySubjectInputEnvelope
    set?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    disconnect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    delete?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    update?: CapaianPembelajaranUpdateWithWhereUniqueWithoutSubjectInput | CapaianPembelajaranUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: CapaianPembelajaranUpdateManyWithWhereWithoutSubjectInput | CapaianPembelajaranUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: CapaianPembelajaranScalarWhereInput | CapaianPembelajaranScalarWhereInput[]
  }

  export type CapaianPembelajaranCreateNestedManyWithoutPhaseInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutPhaseInput, CapaianPembelajaranUncheckedCreateWithoutPhaseInput> | CapaianPembelajaranCreateWithoutPhaseInput[] | CapaianPembelajaranUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutPhaseInput | CapaianPembelajaranCreateOrConnectWithoutPhaseInput[]
    createMany?: CapaianPembelajaranCreateManyPhaseInputEnvelope
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
  }

  export type BankSoalCreateNestedManyWithoutPhaseInput = {
    create?: XOR<BankSoalCreateWithoutPhaseInput, BankSoalUncheckedCreateWithoutPhaseInput> | BankSoalCreateWithoutPhaseInput[] | BankSoalUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutPhaseInput | BankSoalCreateOrConnectWithoutPhaseInput[]
    createMany?: BankSoalCreateManyPhaseInputEnvelope
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
  }

  export type CapaianPembelajaranUncheckedCreateNestedManyWithoutPhaseInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutPhaseInput, CapaianPembelajaranUncheckedCreateWithoutPhaseInput> | CapaianPembelajaranCreateWithoutPhaseInput[] | CapaianPembelajaranUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutPhaseInput | CapaianPembelajaranCreateOrConnectWithoutPhaseInput[]
    createMany?: CapaianPembelajaranCreateManyPhaseInputEnvelope
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
  }

  export type BankSoalUncheckedCreateNestedManyWithoutPhaseInput = {
    create?: XOR<BankSoalCreateWithoutPhaseInput, BankSoalUncheckedCreateWithoutPhaseInput> | BankSoalCreateWithoutPhaseInput[] | BankSoalUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutPhaseInput | BankSoalCreateOrConnectWithoutPhaseInput[]
    createMany?: BankSoalCreateManyPhaseInputEnvelope
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
  }

  export type CapaianPembelajaranUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutPhaseInput, CapaianPembelajaranUncheckedCreateWithoutPhaseInput> | CapaianPembelajaranCreateWithoutPhaseInput[] | CapaianPembelajaranUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutPhaseInput | CapaianPembelajaranCreateOrConnectWithoutPhaseInput[]
    upsert?: CapaianPembelajaranUpsertWithWhereUniqueWithoutPhaseInput | CapaianPembelajaranUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: CapaianPembelajaranCreateManyPhaseInputEnvelope
    set?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    disconnect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    delete?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    update?: CapaianPembelajaranUpdateWithWhereUniqueWithoutPhaseInput | CapaianPembelajaranUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: CapaianPembelajaranUpdateManyWithWhereWithoutPhaseInput | CapaianPembelajaranUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: CapaianPembelajaranScalarWhereInput | CapaianPembelajaranScalarWhereInput[]
  }

  export type BankSoalUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<BankSoalCreateWithoutPhaseInput, BankSoalUncheckedCreateWithoutPhaseInput> | BankSoalCreateWithoutPhaseInput[] | BankSoalUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutPhaseInput | BankSoalCreateOrConnectWithoutPhaseInput[]
    upsert?: BankSoalUpsertWithWhereUniqueWithoutPhaseInput | BankSoalUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: BankSoalCreateManyPhaseInputEnvelope
    set?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    disconnect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    delete?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    update?: BankSoalUpdateWithWhereUniqueWithoutPhaseInput | BankSoalUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: BankSoalUpdateManyWithWhereWithoutPhaseInput | BankSoalUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: BankSoalScalarWhereInput | BankSoalScalarWhereInput[]
  }

  export type CapaianPembelajaranUncheckedUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutPhaseInput, CapaianPembelajaranUncheckedCreateWithoutPhaseInput> | CapaianPembelajaranCreateWithoutPhaseInput[] | CapaianPembelajaranUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutPhaseInput | CapaianPembelajaranCreateOrConnectWithoutPhaseInput[]
    upsert?: CapaianPembelajaranUpsertWithWhereUniqueWithoutPhaseInput | CapaianPembelajaranUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: CapaianPembelajaranCreateManyPhaseInputEnvelope
    set?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    disconnect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    delete?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    connect?: CapaianPembelajaranWhereUniqueInput | CapaianPembelajaranWhereUniqueInput[]
    update?: CapaianPembelajaranUpdateWithWhereUniqueWithoutPhaseInput | CapaianPembelajaranUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: CapaianPembelajaranUpdateManyWithWhereWithoutPhaseInput | CapaianPembelajaranUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: CapaianPembelajaranScalarWhereInput | CapaianPembelajaranScalarWhereInput[]
  }

  export type BankSoalUncheckedUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<BankSoalCreateWithoutPhaseInput, BankSoalUncheckedCreateWithoutPhaseInput> | BankSoalCreateWithoutPhaseInput[] | BankSoalUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutPhaseInput | BankSoalCreateOrConnectWithoutPhaseInput[]
    upsert?: BankSoalUpsertWithWhereUniqueWithoutPhaseInput | BankSoalUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: BankSoalCreateManyPhaseInputEnvelope
    set?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    disconnect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    delete?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    update?: BankSoalUpdateWithWhereUniqueWithoutPhaseInput | BankSoalUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: BankSoalUpdateManyWithWhereWithoutPhaseInput | BankSoalUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: BankSoalScalarWhereInput | BankSoalScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutCapaianPembelajaransInput = {
    create?: XOR<SubjectCreateWithoutCapaianPembelajaransInput, SubjectUncheckedCreateWithoutCapaianPembelajaransInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutCapaianPembelajaransInput
    connect?: SubjectWhereUniqueInput
  }

  export type PhaseCreateNestedOneWithoutCapaianPembelajaransInput = {
    create?: XOR<PhaseCreateWithoutCapaianPembelajaransInput, PhaseUncheckedCreateWithoutCapaianPembelajaransInput>
    connectOrCreate?: PhaseCreateOrConnectWithoutCapaianPembelajaransInput
    connect?: PhaseWhereUniqueInput
  }

  export type CPElementCreateNestedManyWithoutCapaianPembelajaranInput = {
    create?: XOR<CPElementCreateWithoutCapaianPembelajaranInput, CPElementUncheckedCreateWithoutCapaianPembelajaranInput> | CPElementCreateWithoutCapaianPembelajaranInput[] | CPElementUncheckedCreateWithoutCapaianPembelajaranInput[]
    connectOrCreate?: CPElementCreateOrConnectWithoutCapaianPembelajaranInput | CPElementCreateOrConnectWithoutCapaianPembelajaranInput[]
    createMany?: CPElementCreateManyCapaianPembelajaranInputEnvelope
    connect?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
  }

  export type CPElementUncheckedCreateNestedManyWithoutCapaianPembelajaranInput = {
    create?: XOR<CPElementCreateWithoutCapaianPembelajaranInput, CPElementUncheckedCreateWithoutCapaianPembelajaranInput> | CPElementCreateWithoutCapaianPembelajaranInput[] | CPElementUncheckedCreateWithoutCapaianPembelajaranInput[]
    connectOrCreate?: CPElementCreateOrConnectWithoutCapaianPembelajaranInput | CPElementCreateOrConnectWithoutCapaianPembelajaranInput[]
    createMany?: CPElementCreateManyCapaianPembelajaranInputEnvelope
    connect?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
  }

  export type SubjectUpdateOneRequiredWithoutCapaianPembelajaransNestedInput = {
    create?: XOR<SubjectCreateWithoutCapaianPembelajaransInput, SubjectUncheckedCreateWithoutCapaianPembelajaransInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutCapaianPembelajaransInput
    upsert?: SubjectUpsertWithoutCapaianPembelajaransInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutCapaianPembelajaransInput, SubjectUpdateWithoutCapaianPembelajaransInput>, SubjectUncheckedUpdateWithoutCapaianPembelajaransInput>
  }

  export type PhaseUpdateOneRequiredWithoutCapaianPembelajaransNestedInput = {
    create?: XOR<PhaseCreateWithoutCapaianPembelajaransInput, PhaseUncheckedCreateWithoutCapaianPembelajaransInput>
    connectOrCreate?: PhaseCreateOrConnectWithoutCapaianPembelajaransInput
    upsert?: PhaseUpsertWithoutCapaianPembelajaransInput
    connect?: PhaseWhereUniqueInput
    update?: XOR<XOR<PhaseUpdateToOneWithWhereWithoutCapaianPembelajaransInput, PhaseUpdateWithoutCapaianPembelajaransInput>, PhaseUncheckedUpdateWithoutCapaianPembelajaransInput>
  }

  export type CPElementUpdateManyWithoutCapaianPembelajaranNestedInput = {
    create?: XOR<CPElementCreateWithoutCapaianPembelajaranInput, CPElementUncheckedCreateWithoutCapaianPembelajaranInput> | CPElementCreateWithoutCapaianPembelajaranInput[] | CPElementUncheckedCreateWithoutCapaianPembelajaranInput[]
    connectOrCreate?: CPElementCreateOrConnectWithoutCapaianPembelajaranInput | CPElementCreateOrConnectWithoutCapaianPembelajaranInput[]
    upsert?: CPElementUpsertWithWhereUniqueWithoutCapaianPembelajaranInput | CPElementUpsertWithWhereUniqueWithoutCapaianPembelajaranInput[]
    createMany?: CPElementCreateManyCapaianPembelajaranInputEnvelope
    set?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    disconnect?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    delete?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    connect?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    update?: CPElementUpdateWithWhereUniqueWithoutCapaianPembelajaranInput | CPElementUpdateWithWhereUniqueWithoutCapaianPembelajaranInput[]
    updateMany?: CPElementUpdateManyWithWhereWithoutCapaianPembelajaranInput | CPElementUpdateManyWithWhereWithoutCapaianPembelajaranInput[]
    deleteMany?: CPElementScalarWhereInput | CPElementScalarWhereInput[]
  }

  export type CPElementUncheckedUpdateManyWithoutCapaianPembelajaranNestedInput = {
    create?: XOR<CPElementCreateWithoutCapaianPembelajaranInput, CPElementUncheckedCreateWithoutCapaianPembelajaranInput> | CPElementCreateWithoutCapaianPembelajaranInput[] | CPElementUncheckedCreateWithoutCapaianPembelajaranInput[]
    connectOrCreate?: CPElementCreateOrConnectWithoutCapaianPembelajaranInput | CPElementCreateOrConnectWithoutCapaianPembelajaranInput[]
    upsert?: CPElementUpsertWithWhereUniqueWithoutCapaianPembelajaranInput | CPElementUpsertWithWhereUniqueWithoutCapaianPembelajaranInput[]
    createMany?: CPElementCreateManyCapaianPembelajaranInputEnvelope
    set?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    disconnect?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    delete?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    connect?: CPElementWhereUniqueInput | CPElementWhereUniqueInput[]
    update?: CPElementUpdateWithWhereUniqueWithoutCapaianPembelajaranInput | CPElementUpdateWithWhereUniqueWithoutCapaianPembelajaranInput[]
    updateMany?: CPElementUpdateManyWithWhereWithoutCapaianPembelajaranInput | CPElementUpdateManyWithWhereWithoutCapaianPembelajaranInput[]
    deleteMany?: CPElementScalarWhereInput | CPElementScalarWhereInput[]
  }

  export type CapaianPembelajaranCreateNestedOneWithoutElementsInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutElementsInput, CapaianPembelajaranUncheckedCreateWithoutElementsInput>
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutElementsInput
    connect?: CapaianPembelajaranWhereUniqueInput
  }

  export type CapaianPembelajaranUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<CapaianPembelajaranCreateWithoutElementsInput, CapaianPembelajaranUncheckedCreateWithoutElementsInput>
    connectOrCreate?: CapaianPembelajaranCreateOrConnectWithoutElementsInput
    upsert?: CapaianPembelajaranUpsertWithoutElementsInput
    connect?: CapaianPembelajaranWhereUniqueInput
    update?: XOR<XOR<CapaianPembelajaranUpdateToOneWithWhereWithoutElementsInput, CapaianPembelajaranUpdateWithoutElementsInput>, CapaianPembelajaranUncheckedUpdateWithoutElementsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PromesAllocationCreateNestedManyWithoutTujuanPembelajaranInput = {
    create?: XOR<PromesAllocationCreateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput> | PromesAllocationCreateWithoutTujuanPembelajaranInput[] | PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput[]
    connectOrCreate?: PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput | PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput[]
    createMany?: PromesAllocationCreateManyTujuanPembelajaranInputEnvelope
    connect?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
  }

  export type LkpdCreateNestedManyWithoutTpsInput = {
    create?: XOR<LkpdCreateWithoutTpsInput, LkpdUncheckedCreateWithoutTpsInput> | LkpdCreateWithoutTpsInput[] | LkpdUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutTpsInput | LkpdCreateOrConnectWithoutTpsInput[]
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
  }

  export type BankSoalCreateNestedManyWithoutTpsInput = {
    create?: XOR<BankSoalCreateWithoutTpsInput, BankSoalUncheckedCreateWithoutTpsInput> | BankSoalCreateWithoutTpsInput[] | BankSoalUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutTpsInput | BankSoalCreateOrConnectWithoutTpsInput[]
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
  }

  export type ModulAjarCreateNestedManyWithoutTpsInput = {
    create?: XOR<ModulAjarCreateWithoutTpsInput, ModulAjarUncheckedCreateWithoutTpsInput> | ModulAjarCreateWithoutTpsInput[] | ModulAjarUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: ModulAjarCreateOrConnectWithoutTpsInput | ModulAjarCreateOrConnectWithoutTpsInput[]
    connect?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
  }

  export type PromesAllocationUncheckedCreateNestedManyWithoutTujuanPembelajaranInput = {
    create?: XOR<PromesAllocationCreateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput> | PromesAllocationCreateWithoutTujuanPembelajaranInput[] | PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput[]
    connectOrCreate?: PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput | PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput[]
    createMany?: PromesAllocationCreateManyTujuanPembelajaranInputEnvelope
    connect?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
  }

  export type LkpdUncheckedCreateNestedManyWithoutTpsInput = {
    create?: XOR<LkpdCreateWithoutTpsInput, LkpdUncheckedCreateWithoutTpsInput> | LkpdCreateWithoutTpsInput[] | LkpdUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutTpsInput | LkpdCreateOrConnectWithoutTpsInput[]
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
  }

  export type BankSoalUncheckedCreateNestedManyWithoutTpsInput = {
    create?: XOR<BankSoalCreateWithoutTpsInput, BankSoalUncheckedCreateWithoutTpsInput> | BankSoalCreateWithoutTpsInput[] | BankSoalUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutTpsInput | BankSoalCreateOrConnectWithoutTpsInput[]
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
  }

  export type ModulAjarUncheckedCreateNestedManyWithoutTpsInput = {
    create?: XOR<ModulAjarCreateWithoutTpsInput, ModulAjarUncheckedCreateWithoutTpsInput> | ModulAjarCreateWithoutTpsInput[] | ModulAjarUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: ModulAjarCreateOrConnectWithoutTpsInput | ModulAjarCreateOrConnectWithoutTpsInput[]
    connect?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PromesAllocationUpdateManyWithoutTujuanPembelajaranNestedInput = {
    create?: XOR<PromesAllocationCreateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput> | PromesAllocationCreateWithoutTujuanPembelajaranInput[] | PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput[]
    connectOrCreate?: PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput | PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput[]
    upsert?: PromesAllocationUpsertWithWhereUniqueWithoutTujuanPembelajaranInput | PromesAllocationUpsertWithWhereUniqueWithoutTujuanPembelajaranInput[]
    createMany?: PromesAllocationCreateManyTujuanPembelajaranInputEnvelope
    set?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    disconnect?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    delete?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    connect?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    update?: PromesAllocationUpdateWithWhereUniqueWithoutTujuanPembelajaranInput | PromesAllocationUpdateWithWhereUniqueWithoutTujuanPembelajaranInput[]
    updateMany?: PromesAllocationUpdateManyWithWhereWithoutTujuanPembelajaranInput | PromesAllocationUpdateManyWithWhereWithoutTujuanPembelajaranInput[]
    deleteMany?: PromesAllocationScalarWhereInput | PromesAllocationScalarWhereInput[]
  }

  export type LkpdUpdateManyWithoutTpsNestedInput = {
    create?: XOR<LkpdCreateWithoutTpsInput, LkpdUncheckedCreateWithoutTpsInput> | LkpdCreateWithoutTpsInput[] | LkpdUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutTpsInput | LkpdCreateOrConnectWithoutTpsInput[]
    upsert?: LkpdUpsertWithWhereUniqueWithoutTpsInput | LkpdUpsertWithWhereUniqueWithoutTpsInput[]
    set?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    disconnect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    delete?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    update?: LkpdUpdateWithWhereUniqueWithoutTpsInput | LkpdUpdateWithWhereUniqueWithoutTpsInput[]
    updateMany?: LkpdUpdateManyWithWhereWithoutTpsInput | LkpdUpdateManyWithWhereWithoutTpsInput[]
    deleteMany?: LkpdScalarWhereInput | LkpdScalarWhereInput[]
  }

  export type BankSoalUpdateManyWithoutTpsNestedInput = {
    create?: XOR<BankSoalCreateWithoutTpsInput, BankSoalUncheckedCreateWithoutTpsInput> | BankSoalCreateWithoutTpsInput[] | BankSoalUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutTpsInput | BankSoalCreateOrConnectWithoutTpsInput[]
    upsert?: BankSoalUpsertWithWhereUniqueWithoutTpsInput | BankSoalUpsertWithWhereUniqueWithoutTpsInput[]
    set?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    disconnect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    delete?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    update?: BankSoalUpdateWithWhereUniqueWithoutTpsInput | BankSoalUpdateWithWhereUniqueWithoutTpsInput[]
    updateMany?: BankSoalUpdateManyWithWhereWithoutTpsInput | BankSoalUpdateManyWithWhereWithoutTpsInput[]
    deleteMany?: BankSoalScalarWhereInput | BankSoalScalarWhereInput[]
  }

  export type ModulAjarUpdateManyWithoutTpsNestedInput = {
    create?: XOR<ModulAjarCreateWithoutTpsInput, ModulAjarUncheckedCreateWithoutTpsInput> | ModulAjarCreateWithoutTpsInput[] | ModulAjarUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: ModulAjarCreateOrConnectWithoutTpsInput | ModulAjarCreateOrConnectWithoutTpsInput[]
    upsert?: ModulAjarUpsertWithWhereUniqueWithoutTpsInput | ModulAjarUpsertWithWhereUniqueWithoutTpsInput[]
    set?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    disconnect?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    delete?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    connect?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    update?: ModulAjarUpdateWithWhereUniqueWithoutTpsInput | ModulAjarUpdateWithWhereUniqueWithoutTpsInput[]
    updateMany?: ModulAjarUpdateManyWithWhereWithoutTpsInput | ModulAjarUpdateManyWithWhereWithoutTpsInput[]
    deleteMany?: ModulAjarScalarWhereInput | ModulAjarScalarWhereInput[]
  }

  export type PromesAllocationUncheckedUpdateManyWithoutTujuanPembelajaranNestedInput = {
    create?: XOR<PromesAllocationCreateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput> | PromesAllocationCreateWithoutTujuanPembelajaranInput[] | PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput[]
    connectOrCreate?: PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput | PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput[]
    upsert?: PromesAllocationUpsertWithWhereUniqueWithoutTujuanPembelajaranInput | PromesAllocationUpsertWithWhereUniqueWithoutTujuanPembelajaranInput[]
    createMany?: PromesAllocationCreateManyTujuanPembelajaranInputEnvelope
    set?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    disconnect?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    delete?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    connect?: PromesAllocationWhereUniqueInput | PromesAllocationWhereUniqueInput[]
    update?: PromesAllocationUpdateWithWhereUniqueWithoutTujuanPembelajaranInput | PromesAllocationUpdateWithWhereUniqueWithoutTujuanPembelajaranInput[]
    updateMany?: PromesAllocationUpdateManyWithWhereWithoutTujuanPembelajaranInput | PromesAllocationUpdateManyWithWhereWithoutTujuanPembelajaranInput[]
    deleteMany?: PromesAllocationScalarWhereInput | PromesAllocationScalarWhereInput[]
  }

  export type LkpdUncheckedUpdateManyWithoutTpsNestedInput = {
    create?: XOR<LkpdCreateWithoutTpsInput, LkpdUncheckedCreateWithoutTpsInput> | LkpdCreateWithoutTpsInput[] | LkpdUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutTpsInput | LkpdCreateOrConnectWithoutTpsInput[]
    upsert?: LkpdUpsertWithWhereUniqueWithoutTpsInput | LkpdUpsertWithWhereUniqueWithoutTpsInput[]
    set?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    disconnect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    delete?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    update?: LkpdUpdateWithWhereUniqueWithoutTpsInput | LkpdUpdateWithWhereUniqueWithoutTpsInput[]
    updateMany?: LkpdUpdateManyWithWhereWithoutTpsInput | LkpdUpdateManyWithWhereWithoutTpsInput[]
    deleteMany?: LkpdScalarWhereInput | LkpdScalarWhereInput[]
  }

  export type BankSoalUncheckedUpdateManyWithoutTpsNestedInput = {
    create?: XOR<BankSoalCreateWithoutTpsInput, BankSoalUncheckedCreateWithoutTpsInput> | BankSoalCreateWithoutTpsInput[] | BankSoalUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: BankSoalCreateOrConnectWithoutTpsInput | BankSoalCreateOrConnectWithoutTpsInput[]
    upsert?: BankSoalUpsertWithWhereUniqueWithoutTpsInput | BankSoalUpsertWithWhereUniqueWithoutTpsInput[]
    set?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    disconnect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    delete?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    connect?: BankSoalWhereUniqueInput | BankSoalWhereUniqueInput[]
    update?: BankSoalUpdateWithWhereUniqueWithoutTpsInput | BankSoalUpdateWithWhereUniqueWithoutTpsInput[]
    updateMany?: BankSoalUpdateManyWithWhereWithoutTpsInput | BankSoalUpdateManyWithWhereWithoutTpsInput[]
    deleteMany?: BankSoalScalarWhereInput | BankSoalScalarWhereInput[]
  }

  export type ModulAjarUncheckedUpdateManyWithoutTpsNestedInput = {
    create?: XOR<ModulAjarCreateWithoutTpsInput, ModulAjarUncheckedCreateWithoutTpsInput> | ModulAjarCreateWithoutTpsInput[] | ModulAjarUncheckedCreateWithoutTpsInput[]
    connectOrCreate?: ModulAjarCreateOrConnectWithoutTpsInput | ModulAjarCreateOrConnectWithoutTpsInput[]
    upsert?: ModulAjarUpsertWithWhereUniqueWithoutTpsInput | ModulAjarUpsertWithWhereUniqueWithoutTpsInput[]
    set?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    disconnect?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    delete?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    connect?: ModulAjarWhereUniqueInput | ModulAjarWhereUniqueInput[]
    update?: ModulAjarUpdateWithWhereUniqueWithoutTpsInput | ModulAjarUpdateWithWhereUniqueWithoutTpsInput[]
    updateMany?: ModulAjarUpdateManyWithWhereWithoutTpsInput | ModulAjarUpdateManyWithWhereWithoutTpsInput[]
    deleteMany?: ModulAjarScalarWhereInput | ModulAjarScalarWhereInput[]
  }

  export type TujuanPembelajaranCreateNestedOneWithoutPromesAllocationsInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutPromesAllocationsInput, TujuanPembelajaranUncheckedCreateWithoutPromesAllocationsInput>
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutPromesAllocationsInput
    connect?: TujuanPembelajaranWhereUniqueInput
  }

  export type TujuanPembelajaranUpdateOneRequiredWithoutPromesAllocationsNestedInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutPromesAllocationsInput, TujuanPembelajaranUncheckedCreateWithoutPromesAllocationsInput>
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutPromesAllocationsInput
    upsert?: TujuanPembelajaranUpsertWithoutPromesAllocationsInput
    connect?: TujuanPembelajaranWhereUniqueInput
    update?: XOR<XOR<TujuanPembelajaranUpdateToOneWithWhereWithoutPromesAllocationsInput, TujuanPembelajaranUpdateWithoutPromesAllocationsInput>, TujuanPembelajaranUncheckedUpdateWithoutPromesAllocationsInput>
  }

  export type TujuanPembelajaranCreateNestedManyWithoutModulAjarsInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutModulAjarsInput, TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput> | TujuanPembelajaranCreateWithoutModulAjarsInput[] | TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput | TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
  }

  export type LkpdCreateNestedManyWithoutModulAjarInput = {
    create?: XOR<LkpdCreateWithoutModulAjarInput, LkpdUncheckedCreateWithoutModulAjarInput> | LkpdCreateWithoutModulAjarInput[] | LkpdUncheckedCreateWithoutModulAjarInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutModulAjarInput | LkpdCreateOrConnectWithoutModulAjarInput[]
    createMany?: LkpdCreateManyModulAjarInputEnvelope
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
  }

  export type TujuanPembelajaranUncheckedCreateNestedManyWithoutModulAjarsInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutModulAjarsInput, TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput> | TujuanPembelajaranCreateWithoutModulAjarsInput[] | TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput | TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
  }

  export type LkpdUncheckedCreateNestedManyWithoutModulAjarInput = {
    create?: XOR<LkpdCreateWithoutModulAjarInput, LkpdUncheckedCreateWithoutModulAjarInput> | LkpdCreateWithoutModulAjarInput[] | LkpdUncheckedCreateWithoutModulAjarInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutModulAjarInput | LkpdCreateOrConnectWithoutModulAjarInput[]
    createMany?: LkpdCreateManyModulAjarInputEnvelope
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
  }

  export type TujuanPembelajaranUpdateManyWithoutModulAjarsNestedInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutModulAjarsInput, TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput> | TujuanPembelajaranCreateWithoutModulAjarsInput[] | TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput | TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput[]
    upsert?: TujuanPembelajaranUpsertWithWhereUniqueWithoutModulAjarsInput | TujuanPembelajaranUpsertWithWhereUniqueWithoutModulAjarsInput[]
    set?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    disconnect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    delete?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    update?: TujuanPembelajaranUpdateWithWhereUniqueWithoutModulAjarsInput | TujuanPembelajaranUpdateWithWhereUniqueWithoutModulAjarsInput[]
    updateMany?: TujuanPembelajaranUpdateManyWithWhereWithoutModulAjarsInput | TujuanPembelajaranUpdateManyWithWhereWithoutModulAjarsInput[]
    deleteMany?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
  }

  export type LkpdUpdateManyWithoutModulAjarNestedInput = {
    create?: XOR<LkpdCreateWithoutModulAjarInput, LkpdUncheckedCreateWithoutModulAjarInput> | LkpdCreateWithoutModulAjarInput[] | LkpdUncheckedCreateWithoutModulAjarInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutModulAjarInput | LkpdCreateOrConnectWithoutModulAjarInput[]
    upsert?: LkpdUpsertWithWhereUniqueWithoutModulAjarInput | LkpdUpsertWithWhereUniqueWithoutModulAjarInput[]
    createMany?: LkpdCreateManyModulAjarInputEnvelope
    set?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    disconnect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    delete?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    update?: LkpdUpdateWithWhereUniqueWithoutModulAjarInput | LkpdUpdateWithWhereUniqueWithoutModulAjarInput[]
    updateMany?: LkpdUpdateManyWithWhereWithoutModulAjarInput | LkpdUpdateManyWithWhereWithoutModulAjarInput[]
    deleteMany?: LkpdScalarWhereInput | LkpdScalarWhereInput[]
  }

  export type TujuanPembelajaranUncheckedUpdateManyWithoutModulAjarsNestedInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutModulAjarsInput, TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput> | TujuanPembelajaranCreateWithoutModulAjarsInput[] | TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput | TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput[]
    upsert?: TujuanPembelajaranUpsertWithWhereUniqueWithoutModulAjarsInput | TujuanPembelajaranUpsertWithWhereUniqueWithoutModulAjarsInput[]
    set?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    disconnect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    delete?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    update?: TujuanPembelajaranUpdateWithWhereUniqueWithoutModulAjarsInput | TujuanPembelajaranUpdateWithWhereUniqueWithoutModulAjarsInput[]
    updateMany?: TujuanPembelajaranUpdateManyWithWhereWithoutModulAjarsInput | TujuanPembelajaranUpdateManyWithWhereWithoutModulAjarsInput[]
    deleteMany?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
  }

  export type LkpdUncheckedUpdateManyWithoutModulAjarNestedInput = {
    create?: XOR<LkpdCreateWithoutModulAjarInput, LkpdUncheckedCreateWithoutModulAjarInput> | LkpdCreateWithoutModulAjarInput[] | LkpdUncheckedCreateWithoutModulAjarInput[]
    connectOrCreate?: LkpdCreateOrConnectWithoutModulAjarInput | LkpdCreateOrConnectWithoutModulAjarInput[]
    upsert?: LkpdUpsertWithWhereUniqueWithoutModulAjarInput | LkpdUpsertWithWhereUniqueWithoutModulAjarInput[]
    createMany?: LkpdCreateManyModulAjarInputEnvelope
    set?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    disconnect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    delete?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    connect?: LkpdWhereUniqueInput | LkpdWhereUniqueInput[]
    update?: LkpdUpdateWithWhereUniqueWithoutModulAjarInput | LkpdUpdateWithWhereUniqueWithoutModulAjarInput[]
    updateMany?: LkpdUpdateManyWithWhereWithoutModulAjarInput | LkpdUpdateManyWithWhereWithoutModulAjarInput[]
    deleteMany?: LkpdScalarWhereInput | LkpdScalarWhereInput[]
  }

  export type TujuanPembelajaranCreateNestedManyWithoutLkpdsInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutLkpdsInput, TujuanPembelajaranUncheckedCreateWithoutLkpdsInput> | TujuanPembelajaranCreateWithoutLkpdsInput[] | TujuanPembelajaranUncheckedCreateWithoutLkpdsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutLkpdsInput | TujuanPembelajaranCreateOrConnectWithoutLkpdsInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
  }

  export type ModulAjarCreateNestedOneWithoutLkpdsInput = {
    create?: XOR<ModulAjarCreateWithoutLkpdsInput, ModulAjarUncheckedCreateWithoutLkpdsInput>
    connectOrCreate?: ModulAjarCreateOrConnectWithoutLkpdsInput
    connect?: ModulAjarWhereUniqueInput
  }

  export type TujuanPembelajaranUncheckedCreateNestedManyWithoutLkpdsInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutLkpdsInput, TujuanPembelajaranUncheckedCreateWithoutLkpdsInput> | TujuanPembelajaranCreateWithoutLkpdsInput[] | TujuanPembelajaranUncheckedCreateWithoutLkpdsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutLkpdsInput | TujuanPembelajaranCreateOrConnectWithoutLkpdsInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
  }

  export type TujuanPembelajaranUpdateManyWithoutLkpdsNestedInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutLkpdsInput, TujuanPembelajaranUncheckedCreateWithoutLkpdsInput> | TujuanPembelajaranCreateWithoutLkpdsInput[] | TujuanPembelajaranUncheckedCreateWithoutLkpdsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutLkpdsInput | TujuanPembelajaranCreateOrConnectWithoutLkpdsInput[]
    upsert?: TujuanPembelajaranUpsertWithWhereUniqueWithoutLkpdsInput | TujuanPembelajaranUpsertWithWhereUniqueWithoutLkpdsInput[]
    set?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    disconnect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    delete?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    update?: TujuanPembelajaranUpdateWithWhereUniqueWithoutLkpdsInput | TujuanPembelajaranUpdateWithWhereUniqueWithoutLkpdsInput[]
    updateMany?: TujuanPembelajaranUpdateManyWithWhereWithoutLkpdsInput | TujuanPembelajaranUpdateManyWithWhereWithoutLkpdsInput[]
    deleteMany?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
  }

  export type ModulAjarUpdateOneWithoutLkpdsNestedInput = {
    create?: XOR<ModulAjarCreateWithoutLkpdsInput, ModulAjarUncheckedCreateWithoutLkpdsInput>
    connectOrCreate?: ModulAjarCreateOrConnectWithoutLkpdsInput
    upsert?: ModulAjarUpsertWithoutLkpdsInput
    disconnect?: ModulAjarWhereInput | boolean
    delete?: ModulAjarWhereInput | boolean
    connect?: ModulAjarWhereUniqueInput
    update?: XOR<XOR<ModulAjarUpdateToOneWithWhereWithoutLkpdsInput, ModulAjarUpdateWithoutLkpdsInput>, ModulAjarUncheckedUpdateWithoutLkpdsInput>
  }

  export type TujuanPembelajaranUncheckedUpdateManyWithoutLkpdsNestedInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutLkpdsInput, TujuanPembelajaranUncheckedCreateWithoutLkpdsInput> | TujuanPembelajaranCreateWithoutLkpdsInput[] | TujuanPembelajaranUncheckedCreateWithoutLkpdsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutLkpdsInput | TujuanPembelajaranCreateOrConnectWithoutLkpdsInput[]
    upsert?: TujuanPembelajaranUpsertWithWhereUniqueWithoutLkpdsInput | TujuanPembelajaranUpsertWithWhereUniqueWithoutLkpdsInput[]
    set?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    disconnect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    delete?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    update?: TujuanPembelajaranUpdateWithWhereUniqueWithoutLkpdsInput | TujuanPembelajaranUpdateWithWhereUniqueWithoutLkpdsInput[]
    updateMany?: TujuanPembelajaranUpdateManyWithWhereWithoutLkpdsInput | TujuanPembelajaranUpdateManyWithWhereWithoutLkpdsInput[]
    deleteMany?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
  }

  export type TujuanPembelajaranCreateNestedManyWithoutBankSoalsInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutBankSoalsInput, TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput> | TujuanPembelajaranCreateWithoutBankSoalsInput[] | TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput | TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
  }

  export type PhaseCreateNestedOneWithoutBankSoalsInput = {
    create?: XOR<PhaseCreateWithoutBankSoalsInput, PhaseUncheckedCreateWithoutBankSoalsInput>
    connectOrCreate?: PhaseCreateOrConnectWithoutBankSoalsInput
    connect?: PhaseWhereUniqueInput
  }

  export type TujuanPembelajaranUncheckedCreateNestedManyWithoutBankSoalsInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutBankSoalsInput, TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput> | TujuanPembelajaranCreateWithoutBankSoalsInput[] | TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput | TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
  }

  export type TujuanPembelajaranUpdateManyWithoutBankSoalsNestedInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutBankSoalsInput, TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput> | TujuanPembelajaranCreateWithoutBankSoalsInput[] | TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput | TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput[]
    upsert?: TujuanPembelajaranUpsertWithWhereUniqueWithoutBankSoalsInput | TujuanPembelajaranUpsertWithWhereUniqueWithoutBankSoalsInput[]
    set?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    disconnect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    delete?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    update?: TujuanPembelajaranUpdateWithWhereUniqueWithoutBankSoalsInput | TujuanPembelajaranUpdateWithWhereUniqueWithoutBankSoalsInput[]
    updateMany?: TujuanPembelajaranUpdateManyWithWhereWithoutBankSoalsInput | TujuanPembelajaranUpdateManyWithWhereWithoutBankSoalsInput[]
    deleteMany?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
  }

  export type PhaseUpdateOneRequiredWithoutBankSoalsNestedInput = {
    create?: XOR<PhaseCreateWithoutBankSoalsInput, PhaseUncheckedCreateWithoutBankSoalsInput>
    connectOrCreate?: PhaseCreateOrConnectWithoutBankSoalsInput
    upsert?: PhaseUpsertWithoutBankSoalsInput
    connect?: PhaseWhereUniqueInput
    update?: XOR<XOR<PhaseUpdateToOneWithWhereWithoutBankSoalsInput, PhaseUpdateWithoutBankSoalsInput>, PhaseUncheckedUpdateWithoutBankSoalsInput>
  }

  export type TujuanPembelajaranUncheckedUpdateManyWithoutBankSoalsNestedInput = {
    create?: XOR<TujuanPembelajaranCreateWithoutBankSoalsInput, TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput> | TujuanPembelajaranCreateWithoutBankSoalsInput[] | TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput[]
    connectOrCreate?: TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput | TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput[]
    upsert?: TujuanPembelajaranUpsertWithWhereUniqueWithoutBankSoalsInput | TujuanPembelajaranUpsertWithWhereUniqueWithoutBankSoalsInput[]
    set?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    disconnect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    delete?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    connect?: TujuanPembelajaranWhereUniqueInput | TujuanPembelajaranWhereUniqueInput[]
    update?: TujuanPembelajaranUpdateWithWhereUniqueWithoutBankSoalsInput | TujuanPembelajaranUpdateWithWhereUniqueWithoutBankSoalsInput[]
    updateMany?: TujuanPembelajaranUpdateManyWithWhereWithoutBankSoalsInput | TujuanPembelajaranUpdateManyWithWhereWithoutBankSoalsInput[]
    deleteMany?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CapaianPembelajaranCreateWithoutSubjectInput = {
    id?: string
    content: string
    phase: PhaseCreateNestedOneWithoutCapaianPembelajaransInput
    elements?: CPElementCreateNestedManyWithoutCapaianPembelajaranInput
  }

  export type CapaianPembelajaranUncheckedCreateWithoutSubjectInput = {
    id?: string
    phaseId: string
    content: string
    elements?: CPElementUncheckedCreateNestedManyWithoutCapaianPembelajaranInput
  }

  export type CapaianPembelajaranCreateOrConnectWithoutSubjectInput = {
    where: CapaianPembelajaranWhereUniqueInput
    create: XOR<CapaianPembelajaranCreateWithoutSubjectInput, CapaianPembelajaranUncheckedCreateWithoutSubjectInput>
  }

  export type CapaianPembelajaranCreateManySubjectInputEnvelope = {
    data: CapaianPembelajaranCreateManySubjectInput | CapaianPembelajaranCreateManySubjectInput[]
  }

  export type CapaianPembelajaranUpsertWithWhereUniqueWithoutSubjectInput = {
    where: CapaianPembelajaranWhereUniqueInput
    update: XOR<CapaianPembelajaranUpdateWithoutSubjectInput, CapaianPembelajaranUncheckedUpdateWithoutSubjectInput>
    create: XOR<CapaianPembelajaranCreateWithoutSubjectInput, CapaianPembelajaranUncheckedCreateWithoutSubjectInput>
  }

  export type CapaianPembelajaranUpdateWithWhereUniqueWithoutSubjectInput = {
    where: CapaianPembelajaranWhereUniqueInput
    data: XOR<CapaianPembelajaranUpdateWithoutSubjectInput, CapaianPembelajaranUncheckedUpdateWithoutSubjectInput>
  }

  export type CapaianPembelajaranUpdateManyWithWhereWithoutSubjectInput = {
    where: CapaianPembelajaranScalarWhereInput
    data: XOR<CapaianPembelajaranUpdateManyMutationInput, CapaianPembelajaranUncheckedUpdateManyWithoutSubjectInput>
  }

  export type CapaianPembelajaranScalarWhereInput = {
    AND?: CapaianPembelajaranScalarWhereInput | CapaianPembelajaranScalarWhereInput[]
    OR?: CapaianPembelajaranScalarWhereInput[]
    NOT?: CapaianPembelajaranScalarWhereInput | CapaianPembelajaranScalarWhereInput[]
    id?: StringFilter<"CapaianPembelajaran"> | string
    subjectId?: StringFilter<"CapaianPembelajaran"> | string
    phaseId?: StringFilter<"CapaianPembelajaran"> | string
    content?: StringFilter<"CapaianPembelajaran"> | string
  }

  export type CapaianPembelajaranCreateWithoutPhaseInput = {
    id?: string
    content: string
    subject: SubjectCreateNestedOneWithoutCapaianPembelajaransInput
    elements?: CPElementCreateNestedManyWithoutCapaianPembelajaranInput
  }

  export type CapaianPembelajaranUncheckedCreateWithoutPhaseInput = {
    id?: string
    subjectId: string
    content: string
    elements?: CPElementUncheckedCreateNestedManyWithoutCapaianPembelajaranInput
  }

  export type CapaianPembelajaranCreateOrConnectWithoutPhaseInput = {
    where: CapaianPembelajaranWhereUniqueInput
    create: XOR<CapaianPembelajaranCreateWithoutPhaseInput, CapaianPembelajaranUncheckedCreateWithoutPhaseInput>
  }

  export type CapaianPembelajaranCreateManyPhaseInputEnvelope = {
    data: CapaianPembelajaranCreateManyPhaseInput | CapaianPembelajaranCreateManyPhaseInput[]
  }

  export type BankSoalCreateWithoutPhaseInput = {
    id?: string
    userId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranCreateNestedManyWithoutBankSoalsInput
  }

  export type BankSoalUncheckedCreateWithoutPhaseInput = {
    id?: string
    userId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranUncheckedCreateNestedManyWithoutBankSoalsInput
  }

  export type BankSoalCreateOrConnectWithoutPhaseInput = {
    where: BankSoalWhereUniqueInput
    create: XOR<BankSoalCreateWithoutPhaseInput, BankSoalUncheckedCreateWithoutPhaseInput>
  }

  export type BankSoalCreateManyPhaseInputEnvelope = {
    data: BankSoalCreateManyPhaseInput | BankSoalCreateManyPhaseInput[]
  }

  export type CapaianPembelajaranUpsertWithWhereUniqueWithoutPhaseInput = {
    where: CapaianPembelajaranWhereUniqueInput
    update: XOR<CapaianPembelajaranUpdateWithoutPhaseInput, CapaianPembelajaranUncheckedUpdateWithoutPhaseInput>
    create: XOR<CapaianPembelajaranCreateWithoutPhaseInput, CapaianPembelajaranUncheckedCreateWithoutPhaseInput>
  }

  export type CapaianPembelajaranUpdateWithWhereUniqueWithoutPhaseInput = {
    where: CapaianPembelajaranWhereUniqueInput
    data: XOR<CapaianPembelajaranUpdateWithoutPhaseInput, CapaianPembelajaranUncheckedUpdateWithoutPhaseInput>
  }

  export type CapaianPembelajaranUpdateManyWithWhereWithoutPhaseInput = {
    where: CapaianPembelajaranScalarWhereInput
    data: XOR<CapaianPembelajaranUpdateManyMutationInput, CapaianPembelajaranUncheckedUpdateManyWithoutPhaseInput>
  }

  export type BankSoalUpsertWithWhereUniqueWithoutPhaseInput = {
    where: BankSoalWhereUniqueInput
    update: XOR<BankSoalUpdateWithoutPhaseInput, BankSoalUncheckedUpdateWithoutPhaseInput>
    create: XOR<BankSoalCreateWithoutPhaseInput, BankSoalUncheckedCreateWithoutPhaseInput>
  }

  export type BankSoalUpdateWithWhereUniqueWithoutPhaseInput = {
    where: BankSoalWhereUniqueInput
    data: XOR<BankSoalUpdateWithoutPhaseInput, BankSoalUncheckedUpdateWithoutPhaseInput>
  }

  export type BankSoalUpdateManyWithWhereWithoutPhaseInput = {
    where: BankSoalScalarWhereInput
    data: XOR<BankSoalUpdateManyMutationInput, BankSoalUncheckedUpdateManyWithoutPhaseInput>
  }

  export type BankSoalScalarWhereInput = {
    AND?: BankSoalScalarWhereInput | BankSoalScalarWhereInput[]
    OR?: BankSoalScalarWhereInput[]
    NOT?: BankSoalScalarWhereInput | BankSoalScalarWhereInput[]
    id?: StringFilter<"BankSoal"> | string
    userId?: StringFilter<"BankSoal"> | string
    phaseId?: StringFilter<"BankSoal"> | string
    cognitiveLevel?: StringFilter<"BankSoal"> | string
    akmType?: StringFilter<"BankSoal"> | string
    stimulus?: StringNullableFilter<"BankSoal"> | string | null
    pertanyaan?: StringFilter<"BankSoal"> | string
    options?: StringNullableFilter<"BankSoal"> | string | null
    kunciJawaban?: StringFilter<"BankSoal"> | string
    rubrikPenilaian?: StringNullableFilter<"BankSoal"> | string | null
    generateCode?: StringNullableFilter<"BankSoal"> | string | null
    createdAt?: DateTimeFilter<"BankSoal"> | Date | string
    updatedAt?: DateTimeFilter<"BankSoal"> | Date | string
  }

  export type SubjectCreateWithoutCapaianPembelajaransInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type SubjectUncheckedCreateWithoutCapaianPembelajaransInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type SubjectCreateOrConnectWithoutCapaianPembelajaransInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutCapaianPembelajaransInput, SubjectUncheckedCreateWithoutCapaianPembelajaransInput>
  }

  export type PhaseCreateWithoutCapaianPembelajaransInput = {
    id?: string
    name: string
    description?: string | null
    classes: string
    bankSoals?: BankSoalCreateNestedManyWithoutPhaseInput
  }

  export type PhaseUncheckedCreateWithoutCapaianPembelajaransInput = {
    id?: string
    name: string
    description?: string | null
    classes: string
    bankSoals?: BankSoalUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type PhaseCreateOrConnectWithoutCapaianPembelajaransInput = {
    where: PhaseWhereUniqueInput
    create: XOR<PhaseCreateWithoutCapaianPembelajaransInput, PhaseUncheckedCreateWithoutCapaianPembelajaransInput>
  }

  export type CPElementCreateWithoutCapaianPembelajaranInput = {
    id?: string
    name: string
    content: string
  }

  export type CPElementUncheckedCreateWithoutCapaianPembelajaranInput = {
    id?: string
    name: string
    content: string
  }

  export type CPElementCreateOrConnectWithoutCapaianPembelajaranInput = {
    where: CPElementWhereUniqueInput
    create: XOR<CPElementCreateWithoutCapaianPembelajaranInput, CPElementUncheckedCreateWithoutCapaianPembelajaranInput>
  }

  export type CPElementCreateManyCapaianPembelajaranInputEnvelope = {
    data: CPElementCreateManyCapaianPembelajaranInput | CPElementCreateManyCapaianPembelajaranInput[]
  }

  export type SubjectUpsertWithoutCapaianPembelajaransInput = {
    update: XOR<SubjectUpdateWithoutCapaianPembelajaransInput, SubjectUncheckedUpdateWithoutCapaianPembelajaransInput>
    create: XOR<SubjectCreateWithoutCapaianPembelajaransInput, SubjectUncheckedCreateWithoutCapaianPembelajaransInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutCapaianPembelajaransInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutCapaianPembelajaransInput, SubjectUncheckedUpdateWithoutCapaianPembelajaransInput>
  }

  export type SubjectUpdateWithoutCapaianPembelajaransInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectUncheckedUpdateWithoutCapaianPembelajaransInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhaseUpsertWithoutCapaianPembelajaransInput = {
    update: XOR<PhaseUpdateWithoutCapaianPembelajaransInput, PhaseUncheckedUpdateWithoutCapaianPembelajaransInput>
    create: XOR<PhaseCreateWithoutCapaianPembelajaransInput, PhaseUncheckedCreateWithoutCapaianPembelajaransInput>
    where?: PhaseWhereInput
  }

  export type PhaseUpdateToOneWithWhereWithoutCapaianPembelajaransInput = {
    where?: PhaseWhereInput
    data: XOR<PhaseUpdateWithoutCapaianPembelajaransInput, PhaseUncheckedUpdateWithoutCapaianPembelajaransInput>
  }

  export type PhaseUpdateWithoutCapaianPembelajaransInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
    bankSoals?: BankSoalUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseUncheckedUpdateWithoutCapaianPembelajaransInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
    bankSoals?: BankSoalUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type CPElementUpsertWithWhereUniqueWithoutCapaianPembelajaranInput = {
    where: CPElementWhereUniqueInput
    update: XOR<CPElementUpdateWithoutCapaianPembelajaranInput, CPElementUncheckedUpdateWithoutCapaianPembelajaranInput>
    create: XOR<CPElementCreateWithoutCapaianPembelajaranInput, CPElementUncheckedCreateWithoutCapaianPembelajaranInput>
  }

  export type CPElementUpdateWithWhereUniqueWithoutCapaianPembelajaranInput = {
    where: CPElementWhereUniqueInput
    data: XOR<CPElementUpdateWithoutCapaianPembelajaranInput, CPElementUncheckedUpdateWithoutCapaianPembelajaranInput>
  }

  export type CPElementUpdateManyWithWhereWithoutCapaianPembelajaranInput = {
    where: CPElementScalarWhereInput
    data: XOR<CPElementUpdateManyMutationInput, CPElementUncheckedUpdateManyWithoutCapaianPembelajaranInput>
  }

  export type CPElementScalarWhereInput = {
    AND?: CPElementScalarWhereInput | CPElementScalarWhereInput[]
    OR?: CPElementScalarWhereInput[]
    NOT?: CPElementScalarWhereInput | CPElementScalarWhereInput[]
    id?: StringFilter<"CPElement"> | string
    capaianPembelajaranId?: StringFilter<"CPElement"> | string
    name?: StringFilter<"CPElement"> | string
    content?: StringFilter<"CPElement"> | string
  }

  export type CapaianPembelajaranCreateWithoutElementsInput = {
    id?: string
    content: string
    subject: SubjectCreateNestedOneWithoutCapaianPembelajaransInput
    phase: PhaseCreateNestedOneWithoutCapaianPembelajaransInput
  }

  export type CapaianPembelajaranUncheckedCreateWithoutElementsInput = {
    id?: string
    subjectId: string
    phaseId: string
    content: string
  }

  export type CapaianPembelajaranCreateOrConnectWithoutElementsInput = {
    where: CapaianPembelajaranWhereUniqueInput
    create: XOR<CapaianPembelajaranCreateWithoutElementsInput, CapaianPembelajaranUncheckedCreateWithoutElementsInput>
  }

  export type CapaianPembelajaranUpsertWithoutElementsInput = {
    update: XOR<CapaianPembelajaranUpdateWithoutElementsInput, CapaianPembelajaranUncheckedUpdateWithoutElementsInput>
    create: XOR<CapaianPembelajaranCreateWithoutElementsInput, CapaianPembelajaranUncheckedCreateWithoutElementsInput>
    where?: CapaianPembelajaranWhereInput
  }

  export type CapaianPembelajaranUpdateToOneWithWhereWithoutElementsInput = {
    where?: CapaianPembelajaranWhereInput
    data: XOR<CapaianPembelajaranUpdateWithoutElementsInput, CapaianPembelajaranUncheckedUpdateWithoutElementsInput>
  }

  export type CapaianPembelajaranUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutCapaianPembelajaransNestedInput
    phase?: PhaseUpdateOneRequiredWithoutCapaianPembelajaransNestedInput
  }

  export type CapaianPembelajaranUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PromesAllocationCreateWithoutTujuanPembelajaranInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    jp: number
  }

  export type PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    jp: number
  }

  export type PromesAllocationCreateOrConnectWithoutTujuanPembelajaranInput = {
    where: PromesAllocationWhereUniqueInput
    create: XOR<PromesAllocationCreateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput>
  }

  export type PromesAllocationCreateManyTujuanPembelajaranInputEnvelope = {
    data: PromesAllocationCreateManyTujuanPembelajaranInput | PromesAllocationCreateManyTujuanPembelajaranInput[]
  }

  export type LkpdCreateWithoutTpsInput = {
    id?: string
    userId: string
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modulAjar?: ModulAjarCreateNestedOneWithoutLkpdsInput
  }

  export type LkpdUncheckedCreateWithoutTpsInput = {
    id?: string
    userId: string
    modulAjarId?: string | null
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LkpdCreateOrConnectWithoutTpsInput = {
    where: LkpdWhereUniqueInput
    create: XOR<LkpdCreateWithoutTpsInput, LkpdUncheckedCreateWithoutTpsInput>
  }

  export type BankSoalCreateWithoutTpsInput = {
    id?: string
    userId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phase: PhaseCreateNestedOneWithoutBankSoalsInput
  }

  export type BankSoalUncheckedCreateWithoutTpsInput = {
    id?: string
    userId: string
    phaseId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankSoalCreateOrConnectWithoutTpsInput = {
    where: BankSoalWhereUniqueInput
    create: XOR<BankSoalCreateWithoutTpsInput, BankSoalUncheckedCreateWithoutTpsInput>
  }

  export type ModulAjarCreateWithoutTpsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lkpds?: LkpdCreateNestedManyWithoutModulAjarInput
  }

  export type ModulAjarUncheckedCreateWithoutTpsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lkpds?: LkpdUncheckedCreateNestedManyWithoutModulAjarInput
  }

  export type ModulAjarCreateOrConnectWithoutTpsInput = {
    where: ModulAjarWhereUniqueInput
    create: XOR<ModulAjarCreateWithoutTpsInput, ModulAjarUncheckedCreateWithoutTpsInput>
  }

  export type PromesAllocationUpsertWithWhereUniqueWithoutTujuanPembelajaranInput = {
    where: PromesAllocationWhereUniqueInput
    update: XOR<PromesAllocationUpdateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedUpdateWithoutTujuanPembelajaranInput>
    create: XOR<PromesAllocationCreateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedCreateWithoutTujuanPembelajaranInput>
  }

  export type PromesAllocationUpdateWithWhereUniqueWithoutTujuanPembelajaranInput = {
    where: PromesAllocationWhereUniqueInput
    data: XOR<PromesAllocationUpdateWithoutTujuanPembelajaranInput, PromesAllocationUncheckedUpdateWithoutTujuanPembelajaranInput>
  }

  export type PromesAllocationUpdateManyWithWhereWithoutTujuanPembelajaranInput = {
    where: PromesAllocationScalarWhereInput
    data: XOR<PromesAllocationUpdateManyMutationInput, PromesAllocationUncheckedUpdateManyWithoutTujuanPembelajaranInput>
  }

  export type PromesAllocationScalarWhereInput = {
    AND?: PromesAllocationScalarWhereInput | PromesAllocationScalarWhereInput[]
    OR?: PromesAllocationScalarWhereInput[]
    NOT?: PromesAllocationScalarWhereInput | PromesAllocationScalarWhereInput[]
    id?: StringFilter<"PromesAllocation"> | string
    userId?: StringFilter<"PromesAllocation"> | string
    subjectId?: StringFilter<"PromesAllocation"> | string
    phaseId?: StringFilter<"PromesAllocation"> | string
    tujuanPembelajaranId?: StringFilter<"PromesAllocation"> | string
    month?: StringFilter<"PromesAllocation"> | string
    week?: IntFilter<"PromesAllocation"> | number
    jp?: IntFilter<"PromesAllocation"> | number
  }

  export type LkpdUpsertWithWhereUniqueWithoutTpsInput = {
    where: LkpdWhereUniqueInput
    update: XOR<LkpdUpdateWithoutTpsInput, LkpdUncheckedUpdateWithoutTpsInput>
    create: XOR<LkpdCreateWithoutTpsInput, LkpdUncheckedCreateWithoutTpsInput>
  }

  export type LkpdUpdateWithWhereUniqueWithoutTpsInput = {
    where: LkpdWhereUniqueInput
    data: XOR<LkpdUpdateWithoutTpsInput, LkpdUncheckedUpdateWithoutTpsInput>
  }

  export type LkpdUpdateManyWithWhereWithoutTpsInput = {
    where: LkpdScalarWhereInput
    data: XOR<LkpdUpdateManyMutationInput, LkpdUncheckedUpdateManyWithoutTpsInput>
  }

  export type LkpdScalarWhereInput = {
    AND?: LkpdScalarWhereInput | LkpdScalarWhereInput[]
    OR?: LkpdScalarWhereInput[]
    NOT?: LkpdScalarWhereInput | LkpdScalarWhereInput[]
    id?: StringFilter<"Lkpd"> | string
    userId?: StringFilter<"Lkpd"> | string
    modulAjarId?: StringNullableFilter<"Lkpd"> | string | null
    type?: StringFilter<"Lkpd"> | string
    difficulty?: StringFilter<"Lkpd"> | string
    content?: StringFilter<"Lkpd"> | string
    createdAt?: DateTimeFilter<"Lkpd"> | Date | string
    updatedAt?: DateTimeFilter<"Lkpd"> | Date | string
  }

  export type BankSoalUpsertWithWhereUniqueWithoutTpsInput = {
    where: BankSoalWhereUniqueInput
    update: XOR<BankSoalUpdateWithoutTpsInput, BankSoalUncheckedUpdateWithoutTpsInput>
    create: XOR<BankSoalCreateWithoutTpsInput, BankSoalUncheckedCreateWithoutTpsInput>
  }

  export type BankSoalUpdateWithWhereUniqueWithoutTpsInput = {
    where: BankSoalWhereUniqueInput
    data: XOR<BankSoalUpdateWithoutTpsInput, BankSoalUncheckedUpdateWithoutTpsInput>
  }

  export type BankSoalUpdateManyWithWhereWithoutTpsInput = {
    where: BankSoalScalarWhereInput
    data: XOR<BankSoalUpdateManyMutationInput, BankSoalUncheckedUpdateManyWithoutTpsInput>
  }

  export type ModulAjarUpsertWithWhereUniqueWithoutTpsInput = {
    where: ModulAjarWhereUniqueInput
    update: XOR<ModulAjarUpdateWithoutTpsInput, ModulAjarUncheckedUpdateWithoutTpsInput>
    create: XOR<ModulAjarCreateWithoutTpsInput, ModulAjarUncheckedCreateWithoutTpsInput>
  }

  export type ModulAjarUpdateWithWhereUniqueWithoutTpsInput = {
    where: ModulAjarWhereUniqueInput
    data: XOR<ModulAjarUpdateWithoutTpsInput, ModulAjarUncheckedUpdateWithoutTpsInput>
  }

  export type ModulAjarUpdateManyWithWhereWithoutTpsInput = {
    where: ModulAjarScalarWhereInput
    data: XOR<ModulAjarUpdateManyMutationInput, ModulAjarUncheckedUpdateManyWithoutTpsInput>
  }

  export type ModulAjarScalarWhereInput = {
    AND?: ModulAjarScalarWhereInput | ModulAjarScalarWhereInput[]
    OR?: ModulAjarScalarWhereInput[]
    NOT?: ModulAjarScalarWhereInput | ModulAjarScalarWhereInput[]
    id?: StringFilter<"ModulAjar"> | string
    userId?: StringFilter<"ModulAjar"> | string
    subjectId?: StringFilter<"ModulAjar"> | string
    phaseId?: StringFilter<"ModulAjar"> | string
    title?: StringFilter<"ModulAjar"> | string
    metadata?: StringFilter<"ModulAjar"> | string
    content?: StringFilter<"ModulAjar"> | string
    createdAt?: DateTimeFilter<"ModulAjar"> | Date | string
    updatedAt?: DateTimeFilter<"ModulAjar"> | Date | string
  }

  export type TujuanPembelajaranCreateWithoutPromesAllocationsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lkpds?: LkpdCreateNestedManyWithoutTpsInput
    bankSoals?: BankSoalCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranUncheckedCreateWithoutPromesAllocationsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lkpds?: LkpdUncheckedCreateNestedManyWithoutTpsInput
    bankSoals?: BankSoalUncheckedCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarUncheckedCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranCreateOrConnectWithoutPromesAllocationsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    create: XOR<TujuanPembelajaranCreateWithoutPromesAllocationsInput, TujuanPembelajaranUncheckedCreateWithoutPromesAllocationsInput>
  }

  export type TujuanPembelajaranUpsertWithoutPromesAllocationsInput = {
    update: XOR<TujuanPembelajaranUpdateWithoutPromesAllocationsInput, TujuanPembelajaranUncheckedUpdateWithoutPromesAllocationsInput>
    create: XOR<TujuanPembelajaranCreateWithoutPromesAllocationsInput, TujuanPembelajaranUncheckedCreateWithoutPromesAllocationsInput>
    where?: TujuanPembelajaranWhereInput
  }

  export type TujuanPembelajaranUpdateToOneWithWhereWithoutPromesAllocationsInput = {
    where?: TujuanPembelajaranWhereInput
    data: XOR<TujuanPembelajaranUpdateWithoutPromesAllocationsInput, TujuanPembelajaranUncheckedUpdateWithoutPromesAllocationsInput>
  }

  export type TujuanPembelajaranUpdateWithoutPromesAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lkpds?: LkpdUpdateManyWithoutTpsNestedInput
    bankSoals?: BankSoalUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateWithoutPromesAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lkpds?: LkpdUncheckedUpdateManyWithoutTpsNestedInput
    bankSoals?: BankSoalUncheckedUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUncheckedUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranCreateWithoutModulAjarsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationCreateNestedManyWithoutTujuanPembelajaranInput
    lkpds?: LkpdCreateNestedManyWithoutTpsInput
    bankSoals?: BankSoalCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationUncheckedCreateNestedManyWithoutTujuanPembelajaranInput
    lkpds?: LkpdUncheckedCreateNestedManyWithoutTpsInput
    bankSoals?: BankSoalUncheckedCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranCreateOrConnectWithoutModulAjarsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    create: XOR<TujuanPembelajaranCreateWithoutModulAjarsInput, TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput>
  }

  export type LkpdCreateWithoutModulAjarInput = {
    id?: string
    userId: string
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranCreateNestedManyWithoutLkpdsInput
  }

  export type LkpdUncheckedCreateWithoutModulAjarInput = {
    id?: string
    userId: string
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranUncheckedCreateNestedManyWithoutLkpdsInput
  }

  export type LkpdCreateOrConnectWithoutModulAjarInput = {
    where: LkpdWhereUniqueInput
    create: XOR<LkpdCreateWithoutModulAjarInput, LkpdUncheckedCreateWithoutModulAjarInput>
  }

  export type LkpdCreateManyModulAjarInputEnvelope = {
    data: LkpdCreateManyModulAjarInput | LkpdCreateManyModulAjarInput[]
  }

  export type TujuanPembelajaranUpsertWithWhereUniqueWithoutModulAjarsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    update: XOR<TujuanPembelajaranUpdateWithoutModulAjarsInput, TujuanPembelajaranUncheckedUpdateWithoutModulAjarsInput>
    create: XOR<TujuanPembelajaranCreateWithoutModulAjarsInput, TujuanPembelajaranUncheckedCreateWithoutModulAjarsInput>
  }

  export type TujuanPembelajaranUpdateWithWhereUniqueWithoutModulAjarsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    data: XOR<TujuanPembelajaranUpdateWithoutModulAjarsInput, TujuanPembelajaranUncheckedUpdateWithoutModulAjarsInput>
  }

  export type TujuanPembelajaranUpdateManyWithWhereWithoutModulAjarsInput = {
    where: TujuanPembelajaranScalarWhereInput
    data: XOR<TujuanPembelajaranUpdateManyMutationInput, TujuanPembelajaranUncheckedUpdateManyWithoutModulAjarsInput>
  }

  export type TujuanPembelajaranScalarWhereInput = {
    AND?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
    OR?: TujuanPembelajaranScalarWhereInput[]
    NOT?: TujuanPembelajaranScalarWhereInput | TujuanPembelajaranScalarWhereInput[]
    id?: StringFilter<"TujuanPembelajaran"> | string
    userId?: StringFilter<"TujuanPembelajaran"> | string
    subjectId?: StringFilter<"TujuanPembelajaran"> | string
    phaseId?: StringFilter<"TujuanPembelajaran"> | string
    code?: StringFilter<"TujuanPembelajaran"> | string
    element?: StringFilter<"TujuanPembelajaran"> | string
    description?: StringFilter<"TujuanPembelajaran"> | string
    order?: IntFilter<"TujuanPembelajaran"> | number
    createdAt?: DateTimeFilter<"TujuanPembelajaran"> | Date | string
    updatedAt?: DateTimeFilter<"TujuanPembelajaran"> | Date | string
  }

  export type LkpdUpsertWithWhereUniqueWithoutModulAjarInput = {
    where: LkpdWhereUniqueInput
    update: XOR<LkpdUpdateWithoutModulAjarInput, LkpdUncheckedUpdateWithoutModulAjarInput>
    create: XOR<LkpdCreateWithoutModulAjarInput, LkpdUncheckedCreateWithoutModulAjarInput>
  }

  export type LkpdUpdateWithWhereUniqueWithoutModulAjarInput = {
    where: LkpdWhereUniqueInput
    data: XOR<LkpdUpdateWithoutModulAjarInput, LkpdUncheckedUpdateWithoutModulAjarInput>
  }

  export type LkpdUpdateManyWithWhereWithoutModulAjarInput = {
    where: LkpdScalarWhereInput
    data: XOR<LkpdUpdateManyMutationInput, LkpdUncheckedUpdateManyWithoutModulAjarInput>
  }

  export type TujuanPembelajaranCreateWithoutLkpdsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationCreateNestedManyWithoutTujuanPembelajaranInput
    bankSoals?: BankSoalCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranUncheckedCreateWithoutLkpdsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationUncheckedCreateNestedManyWithoutTujuanPembelajaranInput
    bankSoals?: BankSoalUncheckedCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarUncheckedCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranCreateOrConnectWithoutLkpdsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    create: XOR<TujuanPembelajaranCreateWithoutLkpdsInput, TujuanPembelajaranUncheckedCreateWithoutLkpdsInput>
  }

  export type ModulAjarCreateWithoutLkpdsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranCreateNestedManyWithoutModulAjarsInput
  }

  export type ModulAjarUncheckedCreateWithoutLkpdsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    title: string
    metadata: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tps?: TujuanPembelajaranUncheckedCreateNestedManyWithoutModulAjarsInput
  }

  export type ModulAjarCreateOrConnectWithoutLkpdsInput = {
    where: ModulAjarWhereUniqueInput
    create: XOR<ModulAjarCreateWithoutLkpdsInput, ModulAjarUncheckedCreateWithoutLkpdsInput>
  }

  export type TujuanPembelajaranUpsertWithWhereUniqueWithoutLkpdsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    update: XOR<TujuanPembelajaranUpdateWithoutLkpdsInput, TujuanPembelajaranUncheckedUpdateWithoutLkpdsInput>
    create: XOR<TujuanPembelajaranCreateWithoutLkpdsInput, TujuanPembelajaranUncheckedCreateWithoutLkpdsInput>
  }

  export type TujuanPembelajaranUpdateWithWhereUniqueWithoutLkpdsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    data: XOR<TujuanPembelajaranUpdateWithoutLkpdsInput, TujuanPembelajaranUncheckedUpdateWithoutLkpdsInput>
  }

  export type TujuanPembelajaranUpdateManyWithWhereWithoutLkpdsInput = {
    where: TujuanPembelajaranScalarWhereInput
    data: XOR<TujuanPembelajaranUpdateManyMutationInput, TujuanPembelajaranUncheckedUpdateManyWithoutLkpdsInput>
  }

  export type ModulAjarUpsertWithoutLkpdsInput = {
    update: XOR<ModulAjarUpdateWithoutLkpdsInput, ModulAjarUncheckedUpdateWithoutLkpdsInput>
    create: XOR<ModulAjarCreateWithoutLkpdsInput, ModulAjarUncheckedCreateWithoutLkpdsInput>
    where?: ModulAjarWhereInput
  }

  export type ModulAjarUpdateToOneWithWhereWithoutLkpdsInput = {
    where?: ModulAjarWhereInput
    data: XOR<ModulAjarUpdateWithoutLkpdsInput, ModulAjarUncheckedUpdateWithoutLkpdsInput>
  }

  export type ModulAjarUpdateWithoutLkpdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUpdateManyWithoutModulAjarsNestedInput
  }

  export type ModulAjarUncheckedUpdateWithoutLkpdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUncheckedUpdateManyWithoutModulAjarsNestedInput
  }

  export type TujuanPembelajaranCreateWithoutBankSoalsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationCreateNestedManyWithoutTujuanPembelajaranInput
    lkpds?: LkpdCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    code: string
    element: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promesAllocations?: PromesAllocationUncheckedCreateNestedManyWithoutTujuanPembelajaranInput
    lkpds?: LkpdUncheckedCreateNestedManyWithoutTpsInput
    modulAjars?: ModulAjarUncheckedCreateNestedManyWithoutTpsInput
  }

  export type TujuanPembelajaranCreateOrConnectWithoutBankSoalsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    create: XOR<TujuanPembelajaranCreateWithoutBankSoalsInput, TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput>
  }

  export type PhaseCreateWithoutBankSoalsInput = {
    id?: string
    name: string
    description?: string | null
    classes: string
    capaianPembelajarans?: CapaianPembelajaranCreateNestedManyWithoutPhaseInput
  }

  export type PhaseUncheckedCreateWithoutBankSoalsInput = {
    id?: string
    name: string
    description?: string | null
    classes: string
    capaianPembelajarans?: CapaianPembelajaranUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type PhaseCreateOrConnectWithoutBankSoalsInput = {
    where: PhaseWhereUniqueInput
    create: XOR<PhaseCreateWithoutBankSoalsInput, PhaseUncheckedCreateWithoutBankSoalsInput>
  }

  export type TujuanPembelajaranUpsertWithWhereUniqueWithoutBankSoalsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    update: XOR<TujuanPembelajaranUpdateWithoutBankSoalsInput, TujuanPembelajaranUncheckedUpdateWithoutBankSoalsInput>
    create: XOR<TujuanPembelajaranCreateWithoutBankSoalsInput, TujuanPembelajaranUncheckedCreateWithoutBankSoalsInput>
  }

  export type TujuanPembelajaranUpdateWithWhereUniqueWithoutBankSoalsInput = {
    where: TujuanPembelajaranWhereUniqueInput
    data: XOR<TujuanPembelajaranUpdateWithoutBankSoalsInput, TujuanPembelajaranUncheckedUpdateWithoutBankSoalsInput>
  }

  export type TujuanPembelajaranUpdateManyWithWhereWithoutBankSoalsInput = {
    where: TujuanPembelajaranScalarWhereInput
    data: XOR<TujuanPembelajaranUpdateManyMutationInput, TujuanPembelajaranUncheckedUpdateManyWithoutBankSoalsInput>
  }

  export type PhaseUpsertWithoutBankSoalsInput = {
    update: XOR<PhaseUpdateWithoutBankSoalsInput, PhaseUncheckedUpdateWithoutBankSoalsInput>
    create: XOR<PhaseCreateWithoutBankSoalsInput, PhaseUncheckedCreateWithoutBankSoalsInput>
    where?: PhaseWhereInput
  }

  export type PhaseUpdateToOneWithWhereWithoutBankSoalsInput = {
    where?: PhaseWhereInput
    data: XOR<PhaseUpdateWithoutBankSoalsInput, PhaseUncheckedUpdateWithoutBankSoalsInput>
  }

  export type PhaseUpdateWithoutBankSoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
    capaianPembelajarans?: CapaianPembelajaranUpdateManyWithoutPhaseNestedInput
  }

  export type PhaseUncheckedUpdateWithoutBankSoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: StringFieldUpdateOperationsInput | string
    capaianPembelajarans?: CapaianPembelajaranUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CapaianPembelajaranCreateManySubjectInput = {
    id?: string
    phaseId: string
    content: string
  }

  export type CapaianPembelajaranUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    phase?: PhaseUpdateOneRequiredWithoutCapaianPembelajaransNestedInput
    elements?: CPElementUpdateManyWithoutCapaianPembelajaranNestedInput
  }

  export type CapaianPembelajaranUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    elements?: CPElementUncheckedUpdateManyWithoutCapaianPembelajaranNestedInput
  }

  export type CapaianPembelajaranUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CapaianPembelajaranCreateManyPhaseInput = {
    id?: string
    subjectId: string
    content: string
  }

  export type BankSoalCreateManyPhaseInput = {
    id?: string
    userId: string
    cognitiveLevel: string
    akmType: string
    stimulus?: string | null
    pertanyaan: string
    options?: string | null
    kunciJawaban: string
    rubrikPenilaian?: string | null
    generateCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapaianPembelajaranUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutCapaianPembelajaransNestedInput
    elements?: CPElementUpdateManyWithoutCapaianPembelajaranNestedInput
  }

  export type CapaianPembelajaranUncheckedUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    elements?: CPElementUncheckedUpdateManyWithoutCapaianPembelajaranNestedInput
  }

  export type CapaianPembelajaranUncheckedUpdateManyWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BankSoalUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUpdateManyWithoutBankSoalsNestedInput
  }

  export type BankSoalUncheckedUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUncheckedUpdateManyWithoutBankSoalsNestedInput
  }

  export type BankSoalUncheckedUpdateManyWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CPElementCreateManyCapaianPembelajaranInput = {
    id?: string
    name: string
    content: string
  }

  export type CPElementUpdateWithoutCapaianPembelajaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CPElementUncheckedUpdateWithoutCapaianPembelajaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CPElementUncheckedUpdateManyWithoutCapaianPembelajaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PromesAllocationCreateManyTujuanPembelajaranInput = {
    id?: string
    userId: string
    subjectId: string
    phaseId: string
    month: string
    week: number
    jp: number
  }

  export type PromesAllocationUpdateWithoutTujuanPembelajaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    jp?: IntFieldUpdateOperationsInput | number
  }

  export type PromesAllocationUncheckedUpdateWithoutTujuanPembelajaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    jp?: IntFieldUpdateOperationsInput | number
  }

  export type PromesAllocationUncheckedUpdateManyWithoutTujuanPembelajaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    jp?: IntFieldUpdateOperationsInput | number
  }

  export type LkpdUpdateWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulAjar?: ModulAjarUpdateOneWithoutLkpdsNestedInput
  }

  export type LkpdUncheckedUpdateWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modulAjarId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LkpdUncheckedUpdateManyWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modulAjarId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankSoalUpdateWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phase?: PhaseUpdateOneRequiredWithoutBankSoalsNestedInput
  }

  export type BankSoalUncheckedUpdateWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankSoalUncheckedUpdateManyWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    cognitiveLevel?: StringFieldUpdateOperationsInput | string
    akmType?: StringFieldUpdateOperationsInput | string
    stimulus?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    kunciJawaban?: StringFieldUpdateOperationsInput | string
    rubrikPenilaian?: NullableStringFieldUpdateOperationsInput | string | null
    generateCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulAjarUpdateWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lkpds?: LkpdUpdateManyWithoutModulAjarNestedInput
  }

  export type ModulAjarUncheckedUpdateWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lkpds?: LkpdUncheckedUpdateManyWithoutModulAjarNestedInput
  }

  export type ModulAjarUncheckedUpdateManyWithoutTpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LkpdCreateManyModulAjarInput = {
    id?: string
    userId: string
    type: string
    difficulty: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TujuanPembelajaranUpdateWithoutModulAjarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUpdateManyWithoutTujuanPembelajaranNestedInput
    lkpds?: LkpdUpdateManyWithoutTpsNestedInput
    bankSoals?: BankSoalUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateWithoutModulAjarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUncheckedUpdateManyWithoutTujuanPembelajaranNestedInput
    lkpds?: LkpdUncheckedUpdateManyWithoutTpsNestedInput
    bankSoals?: BankSoalUncheckedUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateManyWithoutModulAjarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LkpdUpdateWithoutModulAjarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUpdateManyWithoutLkpdsNestedInput
  }

  export type LkpdUncheckedUpdateWithoutModulAjarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tps?: TujuanPembelajaranUncheckedUpdateManyWithoutLkpdsNestedInput
  }

  export type LkpdUncheckedUpdateManyWithoutModulAjarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TujuanPembelajaranUpdateWithoutLkpdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUpdateManyWithoutTujuanPembelajaranNestedInput
    bankSoals?: BankSoalUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateWithoutLkpdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUncheckedUpdateManyWithoutTujuanPembelajaranNestedInput
    bankSoals?: BankSoalUncheckedUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUncheckedUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateManyWithoutLkpdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TujuanPembelajaranUpdateWithoutBankSoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUpdateManyWithoutTujuanPembelajaranNestedInput
    lkpds?: LkpdUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateWithoutBankSoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promesAllocations?: PromesAllocationUncheckedUpdateManyWithoutTujuanPembelajaranNestedInput
    lkpds?: LkpdUncheckedUpdateManyWithoutTpsNestedInput
    modulAjars?: ModulAjarUncheckedUpdateManyWithoutTpsNestedInput
  }

  export type TujuanPembelajaranUncheckedUpdateManyWithoutBankSoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    phaseId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SubjectCountOutputTypeDefaultArgs instead
     */
    export type SubjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhaseCountOutputTypeDefaultArgs instead
     */
    export type PhaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapaianPembelajaranCountOutputTypeDefaultArgs instead
     */
    export type CapaianPembelajaranCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapaianPembelajaranCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TujuanPembelajaranCountOutputTypeDefaultArgs instead
     */
    export type TujuanPembelajaranCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TujuanPembelajaranCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModulAjarCountOutputTypeDefaultArgs instead
     */
    export type ModulAjarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModulAjarCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LkpdCountOutputTypeDefaultArgs instead
     */
    export type LkpdCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LkpdCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BankSoalCountOutputTypeDefaultArgs instead
     */
    export type BankSoalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BankSoalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectDefaultArgs instead
     */
    export type SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhaseDefaultArgs instead
     */
    export type PhaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapaianPembelajaranDefaultArgs instead
     */
    export type CapaianPembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapaianPembelajaranDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CPElementDefaultArgs instead
     */
    export type CPElementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CPElementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassSetupDefaultArgs instead
     */
    export type ClassSetupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassSetupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TujuanPembelajaranDefaultArgs instead
     */
    export type TujuanPembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TujuanPembelajaranDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromesAllocationDefaultArgs instead
     */
    export type PromesAllocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromesAllocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CalendarHolidayDefaultArgs instead
     */
    export type CalendarHolidayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CalendarHolidayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModulAjarDefaultArgs instead
     */
    export type ModulAjarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModulAjarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LkpdDefaultArgs instead
     */
    export type LkpdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LkpdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BankSoalDefaultArgs instead
     */
    export type BankSoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BankSoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaketUjianDefaultArgs instead
     */
    export type PaketUjianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaketUjianDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchoolProfileDefaultArgs instead
     */
    export type SchoolProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}