
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model prj_dersler
 * 
 */
export type prj_dersler = $Result.DefaultSelection<Prisma.$prj_derslerPayload>
/**
 * Model prj_kullanicilar
 * 
 */
export type prj_kullanicilar = $Result.DefaultSelection<Prisma.$prj_kullanicilarPayload>
/**
 * Model prj_projeler
 * 
 */
export type prj_projeler = $Result.DefaultSelection<Prisma.$prj_projelerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Prj_derslers
 * const prj_derslers = await prisma.prj_dersler.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Prj_derslers
   * const prj_derslers = await prisma.prj_dersler.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.prj_dersler`: Exposes CRUD operations for the **prj_dersler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prj_derslers
    * const prj_derslers = await prisma.prj_dersler.findMany()
    * ```
    */
  get prj_dersler(): Prisma.prj_derslerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prj_kullanicilar`: Exposes CRUD operations for the **prj_kullanicilar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prj_kullanicilars
    * const prj_kullanicilars = await prisma.prj_kullanicilar.findMany()
    * ```
    */
  get prj_kullanicilar(): Prisma.prj_kullanicilarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prj_projeler`: Exposes CRUD operations for the **prj_projeler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prj_projelers
    * const prj_projelers = await prisma.prj_projeler.findMany()
    * ```
    */
  get prj_projeler(): Prisma.prj_projelerDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    prj_dersler: 'prj_dersler',
    prj_kullanicilar: 'prj_kullanicilar',
    prj_projeler: 'prj_projeler'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "prj_dersler" | "prj_kullanicilar" | "prj_projeler"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      prj_dersler: {
        payload: Prisma.$prj_derslerPayload<ExtArgs>
        fields: Prisma.prj_derslerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prj_derslerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prj_derslerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>
          }
          findFirst: {
            args: Prisma.prj_derslerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prj_derslerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>
          }
          findMany: {
            args: Prisma.prj_derslerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>[]
          }
          create: {
            args: Prisma.prj_derslerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>
          }
          createMany: {
            args: Prisma.prj_derslerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prj_derslerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>[]
          }
          delete: {
            args: Prisma.prj_derslerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>
          }
          update: {
            args: Prisma.prj_derslerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>
          }
          deleteMany: {
            args: Prisma.prj_derslerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prj_derslerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prj_derslerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>[]
          }
          upsert: {
            args: Prisma.prj_derslerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_derslerPayload>
          }
          aggregate: {
            args: Prisma.Prj_derslerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrj_dersler>
          }
          groupBy: {
            args: Prisma.prj_derslerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prj_derslerGroupByOutputType>[]
          }
          count: {
            args: Prisma.prj_derslerCountArgs<ExtArgs>
            result: $Utils.Optional<Prj_derslerCountAggregateOutputType> | number
          }
        }
      }
      prj_kullanicilar: {
        payload: Prisma.$prj_kullanicilarPayload<ExtArgs>
        fields: Prisma.prj_kullanicilarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prj_kullanicilarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prj_kullanicilarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>
          }
          findFirst: {
            args: Prisma.prj_kullanicilarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prj_kullanicilarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>
          }
          findMany: {
            args: Prisma.prj_kullanicilarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>[]
          }
          create: {
            args: Prisma.prj_kullanicilarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>
          }
          createMany: {
            args: Prisma.prj_kullanicilarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prj_kullanicilarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>[]
          }
          delete: {
            args: Prisma.prj_kullanicilarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>
          }
          update: {
            args: Prisma.prj_kullanicilarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>
          }
          deleteMany: {
            args: Prisma.prj_kullanicilarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prj_kullanicilarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prj_kullanicilarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>[]
          }
          upsert: {
            args: Prisma.prj_kullanicilarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_kullanicilarPayload>
          }
          aggregate: {
            args: Prisma.Prj_kullanicilarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrj_kullanicilar>
          }
          groupBy: {
            args: Prisma.prj_kullanicilarGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prj_kullanicilarGroupByOutputType>[]
          }
          count: {
            args: Prisma.prj_kullanicilarCountArgs<ExtArgs>
            result: $Utils.Optional<Prj_kullanicilarCountAggregateOutputType> | number
          }
        }
      }
      prj_projeler: {
        payload: Prisma.$prj_projelerPayload<ExtArgs>
        fields: Prisma.prj_projelerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prj_projelerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prj_projelerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>
          }
          findFirst: {
            args: Prisma.prj_projelerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prj_projelerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>
          }
          findMany: {
            args: Prisma.prj_projelerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>[]
          }
          create: {
            args: Prisma.prj_projelerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>
          }
          createMany: {
            args: Prisma.prj_projelerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prj_projelerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>[]
          }
          delete: {
            args: Prisma.prj_projelerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>
          }
          update: {
            args: Prisma.prj_projelerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>
          }
          deleteMany: {
            args: Prisma.prj_projelerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prj_projelerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prj_projelerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>[]
          }
          upsert: {
            args: Prisma.prj_projelerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prj_projelerPayload>
          }
          aggregate: {
            args: Prisma.Prj_projelerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrj_projeler>
          }
          groupBy: {
            args: Prisma.prj_projelerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prj_projelerGroupByOutputType>[]
          }
          count: {
            args: Prisma.prj_projelerCountArgs<ExtArgs>
            result: $Utils.Optional<Prj_projelerCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    prj_dersler?: prj_derslerOmit
    prj_kullanicilar?: prj_kullanicilarOmit
    prj_projeler?: prj_projelerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type Prj_derslerCountOutputType
   */

  export type Prj_derslerCountOutputType = {
    prj_projeler: number
  }

  export type Prj_derslerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prj_projeler?: boolean | Prj_derslerCountOutputTypeCountPrj_projelerArgs
  }

  // Custom InputTypes
  /**
   * Prj_derslerCountOutputType without action
   */
  export type Prj_derslerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prj_derslerCountOutputType
     */
    select?: Prj_derslerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Prj_derslerCountOutputType without action
   */
  export type Prj_derslerCountOutputTypeCountPrj_projelerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prj_projelerWhereInput
  }


  /**
   * Count Type Prj_kullanicilarCountOutputType
   */

  export type Prj_kullanicilarCountOutputType = {
    prj_projeler: number
  }

  export type Prj_kullanicilarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prj_projeler?: boolean | Prj_kullanicilarCountOutputTypeCountPrj_projelerArgs
  }

  // Custom InputTypes
  /**
   * Prj_kullanicilarCountOutputType without action
   */
  export type Prj_kullanicilarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prj_kullanicilarCountOutputType
     */
    select?: Prj_kullanicilarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Prj_kullanicilarCountOutputType without action
   */
  export type Prj_kullanicilarCountOutputTypeCountPrj_projelerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prj_projelerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model prj_dersler
   */

  export type AggregatePrj_dersler = {
    _count: Prj_derslerCountAggregateOutputType | null
    _avg: Prj_derslerAvgAggregateOutputType | null
    _sum: Prj_derslerSumAggregateOutputType | null
    _min: Prj_derslerMinAggregateOutputType | null
    _max: Prj_derslerMaxAggregateOutputType | null
  }

  export type Prj_derslerAvgAggregateOutputType = {
    id: number | null
  }

  export type Prj_derslerSumAggregateOutputType = {
    id: number | null
  }

  export type Prj_derslerMinAggregateOutputType = {
    id: number | null
    ders_adi: string | null
    url_etiketi: string | null
  }

  export type Prj_derslerMaxAggregateOutputType = {
    id: number | null
    ders_adi: string | null
    url_etiketi: string | null
  }

  export type Prj_derslerCountAggregateOutputType = {
    id: number
    ders_adi: number
    url_etiketi: number
    _all: number
  }


  export type Prj_derslerAvgAggregateInputType = {
    id?: true
  }

  export type Prj_derslerSumAggregateInputType = {
    id?: true
  }

  export type Prj_derslerMinAggregateInputType = {
    id?: true
    ders_adi?: true
    url_etiketi?: true
  }

  export type Prj_derslerMaxAggregateInputType = {
    id?: true
    ders_adi?: true
    url_etiketi?: true
  }

  export type Prj_derslerCountAggregateInputType = {
    id?: true
    ders_adi?: true
    url_etiketi?: true
    _all?: true
  }

  export type Prj_derslerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prj_dersler to aggregate.
     */
    where?: prj_derslerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_derslers to fetch.
     */
    orderBy?: prj_derslerOrderByWithRelationInput | prj_derslerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prj_derslerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_derslers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_derslers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prj_derslers
    **/
    _count?: true | Prj_derslerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prj_derslerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prj_derslerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prj_derslerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prj_derslerMaxAggregateInputType
  }

  export type GetPrj_derslerAggregateType<T extends Prj_derslerAggregateArgs> = {
        [P in keyof T & keyof AggregatePrj_dersler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrj_dersler[P]>
      : GetScalarType<T[P], AggregatePrj_dersler[P]>
  }




  export type prj_derslerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prj_derslerWhereInput
    orderBy?: prj_derslerOrderByWithAggregationInput | prj_derslerOrderByWithAggregationInput[]
    by: Prj_derslerScalarFieldEnum[] | Prj_derslerScalarFieldEnum
    having?: prj_derslerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prj_derslerCountAggregateInputType | true
    _avg?: Prj_derslerAvgAggregateInputType
    _sum?: Prj_derslerSumAggregateInputType
    _min?: Prj_derslerMinAggregateInputType
    _max?: Prj_derslerMaxAggregateInputType
  }

  export type Prj_derslerGroupByOutputType = {
    id: number
    ders_adi: string
    url_etiketi: string
    _count: Prj_derslerCountAggregateOutputType | null
    _avg: Prj_derslerAvgAggregateOutputType | null
    _sum: Prj_derslerSumAggregateOutputType | null
    _min: Prj_derslerMinAggregateOutputType | null
    _max: Prj_derslerMaxAggregateOutputType | null
  }

  type GetPrj_derslerGroupByPayload<T extends prj_derslerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prj_derslerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prj_derslerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prj_derslerGroupByOutputType[P]>
            : GetScalarType<T[P], Prj_derslerGroupByOutputType[P]>
        }
      >
    >


  export type prj_derslerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ders_adi?: boolean
    url_etiketi?: boolean
    prj_projeler?: boolean | prj_dersler$prj_projelerArgs<ExtArgs>
    _count?: boolean | Prj_derslerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prj_dersler"]>

  export type prj_derslerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ders_adi?: boolean
    url_etiketi?: boolean
  }, ExtArgs["result"]["prj_dersler"]>

  export type prj_derslerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ders_adi?: boolean
    url_etiketi?: boolean
  }, ExtArgs["result"]["prj_dersler"]>

  export type prj_derslerSelectScalar = {
    id?: boolean
    ders_adi?: boolean
    url_etiketi?: boolean
  }

  export type prj_derslerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ders_adi" | "url_etiketi", ExtArgs["result"]["prj_dersler"]>
  export type prj_derslerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prj_projeler?: boolean | prj_dersler$prj_projelerArgs<ExtArgs>
    _count?: boolean | Prj_derslerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prj_derslerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type prj_derslerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $prj_derslerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prj_dersler"
    objects: {
      prj_projeler: Prisma.$prj_projelerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ders_adi: string
      url_etiketi: string
    }, ExtArgs["result"]["prj_dersler"]>
    composites: {}
  }

  type prj_derslerGetPayload<S extends boolean | null | undefined | prj_derslerDefaultArgs> = $Result.GetResult<Prisma.$prj_derslerPayload, S>

  type prj_derslerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prj_derslerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prj_derslerCountAggregateInputType | true
    }

  export interface prj_derslerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prj_dersler'], meta: { name: 'prj_dersler' } }
    /**
     * Find zero or one Prj_dersler that matches the filter.
     * @param {prj_derslerFindUniqueArgs} args - Arguments to find a Prj_dersler
     * @example
     * // Get one Prj_dersler
     * const prj_dersler = await prisma.prj_dersler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prj_derslerFindUniqueArgs>(args: SelectSubset<T, prj_derslerFindUniqueArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prj_dersler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prj_derslerFindUniqueOrThrowArgs} args - Arguments to find a Prj_dersler
     * @example
     * // Get one Prj_dersler
     * const prj_dersler = await prisma.prj_dersler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prj_derslerFindUniqueOrThrowArgs>(args: SelectSubset<T, prj_derslerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prj_dersler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_derslerFindFirstArgs} args - Arguments to find a Prj_dersler
     * @example
     * // Get one Prj_dersler
     * const prj_dersler = await prisma.prj_dersler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prj_derslerFindFirstArgs>(args?: SelectSubset<T, prj_derslerFindFirstArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prj_dersler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_derslerFindFirstOrThrowArgs} args - Arguments to find a Prj_dersler
     * @example
     * // Get one Prj_dersler
     * const prj_dersler = await prisma.prj_dersler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prj_derslerFindFirstOrThrowArgs>(args?: SelectSubset<T, prj_derslerFindFirstOrThrowArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prj_derslers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_derslerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prj_derslers
     * const prj_derslers = await prisma.prj_dersler.findMany()
     * 
     * // Get first 10 Prj_derslers
     * const prj_derslers = await prisma.prj_dersler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prj_derslerWithIdOnly = await prisma.prj_dersler.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prj_derslerFindManyArgs>(args?: SelectSubset<T, prj_derslerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prj_dersler.
     * @param {prj_derslerCreateArgs} args - Arguments to create a Prj_dersler.
     * @example
     * // Create one Prj_dersler
     * const Prj_dersler = await prisma.prj_dersler.create({
     *   data: {
     *     // ... data to create a Prj_dersler
     *   }
     * })
     * 
     */
    create<T extends prj_derslerCreateArgs>(args: SelectSubset<T, prj_derslerCreateArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prj_derslers.
     * @param {prj_derslerCreateManyArgs} args - Arguments to create many Prj_derslers.
     * @example
     * // Create many Prj_derslers
     * const prj_dersler = await prisma.prj_dersler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prj_derslerCreateManyArgs>(args?: SelectSubset<T, prj_derslerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prj_derslers and returns the data saved in the database.
     * @param {prj_derslerCreateManyAndReturnArgs} args - Arguments to create many Prj_derslers.
     * @example
     * // Create many Prj_derslers
     * const prj_dersler = await prisma.prj_dersler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prj_derslers and only return the `id`
     * const prj_derslerWithIdOnly = await prisma.prj_dersler.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prj_derslerCreateManyAndReturnArgs>(args?: SelectSubset<T, prj_derslerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prj_dersler.
     * @param {prj_derslerDeleteArgs} args - Arguments to delete one Prj_dersler.
     * @example
     * // Delete one Prj_dersler
     * const Prj_dersler = await prisma.prj_dersler.delete({
     *   where: {
     *     // ... filter to delete one Prj_dersler
     *   }
     * })
     * 
     */
    delete<T extends prj_derslerDeleteArgs>(args: SelectSubset<T, prj_derslerDeleteArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prj_dersler.
     * @param {prj_derslerUpdateArgs} args - Arguments to update one Prj_dersler.
     * @example
     * // Update one Prj_dersler
     * const prj_dersler = await prisma.prj_dersler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prj_derslerUpdateArgs>(args: SelectSubset<T, prj_derslerUpdateArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prj_derslers.
     * @param {prj_derslerDeleteManyArgs} args - Arguments to filter Prj_derslers to delete.
     * @example
     * // Delete a few Prj_derslers
     * const { count } = await prisma.prj_dersler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prj_derslerDeleteManyArgs>(args?: SelectSubset<T, prj_derslerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prj_derslers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_derslerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prj_derslers
     * const prj_dersler = await prisma.prj_dersler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prj_derslerUpdateManyArgs>(args: SelectSubset<T, prj_derslerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prj_derslers and returns the data updated in the database.
     * @param {prj_derslerUpdateManyAndReturnArgs} args - Arguments to update many Prj_derslers.
     * @example
     * // Update many Prj_derslers
     * const prj_dersler = await prisma.prj_dersler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prj_derslers and only return the `id`
     * const prj_derslerWithIdOnly = await prisma.prj_dersler.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prj_derslerUpdateManyAndReturnArgs>(args: SelectSubset<T, prj_derslerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prj_dersler.
     * @param {prj_derslerUpsertArgs} args - Arguments to update or create a Prj_dersler.
     * @example
     * // Update or create a Prj_dersler
     * const prj_dersler = await prisma.prj_dersler.upsert({
     *   create: {
     *     // ... data to create a Prj_dersler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prj_dersler we want to update
     *   }
     * })
     */
    upsert<T extends prj_derslerUpsertArgs>(args: SelectSubset<T, prj_derslerUpsertArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prj_derslers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_derslerCountArgs} args - Arguments to filter Prj_derslers to count.
     * @example
     * // Count the number of Prj_derslers
     * const count = await prisma.prj_dersler.count({
     *   where: {
     *     // ... the filter for the Prj_derslers we want to count
     *   }
     * })
    **/
    count<T extends prj_derslerCountArgs>(
      args?: Subset<T, prj_derslerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prj_derslerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prj_dersler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prj_derslerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Prj_derslerAggregateArgs>(args: Subset<T, Prj_derslerAggregateArgs>): Prisma.PrismaPromise<GetPrj_derslerAggregateType<T>>

    /**
     * Group by Prj_dersler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_derslerGroupByArgs} args - Group by arguments.
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
      T extends prj_derslerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prj_derslerGroupByArgs['orderBy'] }
        : { orderBy?: prj_derslerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prj_derslerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrj_derslerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prj_dersler model
   */
  readonly fields: prj_derslerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prj_dersler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prj_derslerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prj_projeler<T extends prj_dersler$prj_projelerArgs<ExtArgs> = {}>(args?: Subset<T, prj_dersler$prj_projelerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the prj_dersler model
   */
  interface prj_derslerFieldRefs {
    readonly id: FieldRef<"prj_dersler", 'Int'>
    readonly ders_adi: FieldRef<"prj_dersler", 'String'>
    readonly url_etiketi: FieldRef<"prj_dersler", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prj_dersler findUnique
   */
  export type prj_derslerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * Filter, which prj_dersler to fetch.
     */
    where: prj_derslerWhereUniqueInput
  }

  /**
   * prj_dersler findUniqueOrThrow
   */
  export type prj_derslerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * Filter, which prj_dersler to fetch.
     */
    where: prj_derslerWhereUniqueInput
  }

  /**
   * prj_dersler findFirst
   */
  export type prj_derslerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * Filter, which prj_dersler to fetch.
     */
    where?: prj_derslerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_derslers to fetch.
     */
    orderBy?: prj_derslerOrderByWithRelationInput | prj_derslerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prj_derslers.
     */
    cursor?: prj_derslerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_derslers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_derslers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_derslers.
     */
    distinct?: Prj_derslerScalarFieldEnum | Prj_derslerScalarFieldEnum[]
  }

  /**
   * prj_dersler findFirstOrThrow
   */
  export type prj_derslerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * Filter, which prj_dersler to fetch.
     */
    where?: prj_derslerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_derslers to fetch.
     */
    orderBy?: prj_derslerOrderByWithRelationInput | prj_derslerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prj_derslers.
     */
    cursor?: prj_derslerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_derslers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_derslers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_derslers.
     */
    distinct?: Prj_derslerScalarFieldEnum | Prj_derslerScalarFieldEnum[]
  }

  /**
   * prj_dersler findMany
   */
  export type prj_derslerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * Filter, which prj_derslers to fetch.
     */
    where?: prj_derslerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_derslers to fetch.
     */
    orderBy?: prj_derslerOrderByWithRelationInput | prj_derslerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prj_derslers.
     */
    cursor?: prj_derslerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_derslers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_derslers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_derslers.
     */
    distinct?: Prj_derslerScalarFieldEnum | Prj_derslerScalarFieldEnum[]
  }

  /**
   * prj_dersler create
   */
  export type prj_derslerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * The data needed to create a prj_dersler.
     */
    data: XOR<prj_derslerCreateInput, prj_derslerUncheckedCreateInput>
  }

  /**
   * prj_dersler createMany
   */
  export type prj_derslerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prj_derslers.
     */
    data: prj_derslerCreateManyInput | prj_derslerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prj_dersler createManyAndReturn
   */
  export type prj_derslerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * The data used to create many prj_derslers.
     */
    data: prj_derslerCreateManyInput | prj_derslerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prj_dersler update
   */
  export type prj_derslerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * The data needed to update a prj_dersler.
     */
    data: XOR<prj_derslerUpdateInput, prj_derslerUncheckedUpdateInput>
    /**
     * Choose, which prj_dersler to update.
     */
    where: prj_derslerWhereUniqueInput
  }

  /**
   * prj_dersler updateMany
   */
  export type prj_derslerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prj_derslers.
     */
    data: XOR<prj_derslerUpdateManyMutationInput, prj_derslerUncheckedUpdateManyInput>
    /**
     * Filter which prj_derslers to update
     */
    where?: prj_derslerWhereInput
    /**
     * Limit how many prj_derslers to update.
     */
    limit?: number
  }

  /**
   * prj_dersler updateManyAndReturn
   */
  export type prj_derslerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * The data used to update prj_derslers.
     */
    data: XOR<prj_derslerUpdateManyMutationInput, prj_derslerUncheckedUpdateManyInput>
    /**
     * Filter which prj_derslers to update
     */
    where?: prj_derslerWhereInput
    /**
     * Limit how many prj_derslers to update.
     */
    limit?: number
  }

  /**
   * prj_dersler upsert
   */
  export type prj_derslerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * The filter to search for the prj_dersler to update in case it exists.
     */
    where: prj_derslerWhereUniqueInput
    /**
     * In case the prj_dersler found by the `where` argument doesn't exist, create a new prj_dersler with this data.
     */
    create: XOR<prj_derslerCreateInput, prj_derslerUncheckedCreateInput>
    /**
     * In case the prj_dersler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prj_derslerUpdateInput, prj_derslerUncheckedUpdateInput>
  }

  /**
   * prj_dersler delete
   */
  export type prj_derslerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    /**
     * Filter which prj_dersler to delete.
     */
    where: prj_derslerWhereUniqueInput
  }

  /**
   * prj_dersler deleteMany
   */
  export type prj_derslerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prj_derslers to delete
     */
    where?: prj_derslerWhereInput
    /**
     * Limit how many prj_derslers to delete.
     */
    limit?: number
  }

  /**
   * prj_dersler.prj_projeler
   */
  export type prj_dersler$prj_projelerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    where?: prj_projelerWhereInput
    orderBy?: prj_projelerOrderByWithRelationInput | prj_projelerOrderByWithRelationInput[]
    cursor?: prj_projelerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prj_projelerScalarFieldEnum | Prj_projelerScalarFieldEnum[]
  }

  /**
   * prj_dersler without action
   */
  export type prj_derslerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
  }


  /**
   * Model prj_kullanicilar
   */

  export type AggregatePrj_kullanicilar = {
    _count: Prj_kullanicilarCountAggregateOutputType | null
    _avg: Prj_kullanicilarAvgAggregateOutputType | null
    _sum: Prj_kullanicilarSumAggregateOutputType | null
    _min: Prj_kullanicilarMinAggregateOutputType | null
    _max: Prj_kullanicilarMaxAggregateOutputType | null
  }

  export type Prj_kullanicilarAvgAggregateOutputType = {
    id: number | null
  }

  export type Prj_kullanicilarSumAggregateOutputType = {
    id: number | null
  }

  export type Prj_kullanicilarMinAggregateOutputType = {
    id: number | null
    ad_soyad: string | null
    eposta: string | null
    sifre_hash: string | null
    rol: string | null
    kayit_tarihi: Date | null
    guvenlik_sorusu: string | null
    guvenlik_cevabi: string | null
  }

  export type Prj_kullanicilarMaxAggregateOutputType = {
    id: number | null
    ad_soyad: string | null
    eposta: string | null
    sifre_hash: string | null
    rol: string | null
    kayit_tarihi: Date | null
    guvenlik_sorusu: string | null
    guvenlik_cevabi: string | null
  }

  export type Prj_kullanicilarCountAggregateOutputType = {
    id: number
    ad_soyad: number
    eposta: number
    sifre_hash: number
    rol: number
    kayit_tarihi: number
    guvenlik_sorusu: number
    guvenlik_cevabi: number
    _all: number
  }


  export type Prj_kullanicilarAvgAggregateInputType = {
    id?: true
  }

  export type Prj_kullanicilarSumAggregateInputType = {
    id?: true
  }

  export type Prj_kullanicilarMinAggregateInputType = {
    id?: true
    ad_soyad?: true
    eposta?: true
    sifre_hash?: true
    rol?: true
    kayit_tarihi?: true
    guvenlik_sorusu?: true
    guvenlik_cevabi?: true
  }

  export type Prj_kullanicilarMaxAggregateInputType = {
    id?: true
    ad_soyad?: true
    eposta?: true
    sifre_hash?: true
    rol?: true
    kayit_tarihi?: true
    guvenlik_sorusu?: true
    guvenlik_cevabi?: true
  }

  export type Prj_kullanicilarCountAggregateInputType = {
    id?: true
    ad_soyad?: true
    eposta?: true
    sifre_hash?: true
    rol?: true
    kayit_tarihi?: true
    guvenlik_sorusu?: true
    guvenlik_cevabi?: true
    _all?: true
  }

  export type Prj_kullanicilarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prj_kullanicilar to aggregate.
     */
    where?: prj_kullanicilarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_kullanicilars to fetch.
     */
    orderBy?: prj_kullanicilarOrderByWithRelationInput | prj_kullanicilarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prj_kullanicilarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_kullanicilars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_kullanicilars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prj_kullanicilars
    **/
    _count?: true | Prj_kullanicilarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prj_kullanicilarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prj_kullanicilarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prj_kullanicilarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prj_kullanicilarMaxAggregateInputType
  }

  export type GetPrj_kullanicilarAggregateType<T extends Prj_kullanicilarAggregateArgs> = {
        [P in keyof T & keyof AggregatePrj_kullanicilar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrj_kullanicilar[P]>
      : GetScalarType<T[P], AggregatePrj_kullanicilar[P]>
  }




  export type prj_kullanicilarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prj_kullanicilarWhereInput
    orderBy?: prj_kullanicilarOrderByWithAggregationInput | prj_kullanicilarOrderByWithAggregationInput[]
    by: Prj_kullanicilarScalarFieldEnum[] | Prj_kullanicilarScalarFieldEnum
    having?: prj_kullanicilarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prj_kullanicilarCountAggregateInputType | true
    _avg?: Prj_kullanicilarAvgAggregateInputType
    _sum?: Prj_kullanicilarSumAggregateInputType
    _min?: Prj_kullanicilarMinAggregateInputType
    _max?: Prj_kullanicilarMaxAggregateInputType
  }

  export type Prj_kullanicilarGroupByOutputType = {
    id: number
    ad_soyad: string
    eposta: string
    sifre_hash: string
    rol: string | null
    kayit_tarihi: Date | null
    guvenlik_sorusu: string | null
    guvenlik_cevabi: string | null
    _count: Prj_kullanicilarCountAggregateOutputType | null
    _avg: Prj_kullanicilarAvgAggregateOutputType | null
    _sum: Prj_kullanicilarSumAggregateOutputType | null
    _min: Prj_kullanicilarMinAggregateOutputType | null
    _max: Prj_kullanicilarMaxAggregateOutputType | null
  }

  type GetPrj_kullanicilarGroupByPayload<T extends prj_kullanicilarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prj_kullanicilarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prj_kullanicilarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prj_kullanicilarGroupByOutputType[P]>
            : GetScalarType<T[P], Prj_kullanicilarGroupByOutputType[P]>
        }
      >
    >


  export type prj_kullanicilarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ad_soyad?: boolean
    eposta?: boolean
    sifre_hash?: boolean
    rol?: boolean
    kayit_tarihi?: boolean
    guvenlik_sorusu?: boolean
    guvenlik_cevabi?: boolean
    prj_projeler?: boolean | prj_kullanicilar$prj_projelerArgs<ExtArgs>
    _count?: boolean | Prj_kullanicilarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prj_kullanicilar"]>

  export type prj_kullanicilarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ad_soyad?: boolean
    eposta?: boolean
    sifre_hash?: boolean
    rol?: boolean
    kayit_tarihi?: boolean
    guvenlik_sorusu?: boolean
    guvenlik_cevabi?: boolean
  }, ExtArgs["result"]["prj_kullanicilar"]>

  export type prj_kullanicilarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ad_soyad?: boolean
    eposta?: boolean
    sifre_hash?: boolean
    rol?: boolean
    kayit_tarihi?: boolean
    guvenlik_sorusu?: boolean
    guvenlik_cevabi?: boolean
  }, ExtArgs["result"]["prj_kullanicilar"]>

  export type prj_kullanicilarSelectScalar = {
    id?: boolean
    ad_soyad?: boolean
    eposta?: boolean
    sifre_hash?: boolean
    rol?: boolean
    kayit_tarihi?: boolean
    guvenlik_sorusu?: boolean
    guvenlik_cevabi?: boolean
  }

  export type prj_kullanicilarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ad_soyad" | "eposta" | "sifre_hash" | "rol" | "kayit_tarihi" | "guvenlik_sorusu" | "guvenlik_cevabi", ExtArgs["result"]["prj_kullanicilar"]>
  export type prj_kullanicilarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prj_projeler?: boolean | prj_kullanicilar$prj_projelerArgs<ExtArgs>
    _count?: boolean | Prj_kullanicilarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prj_kullanicilarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type prj_kullanicilarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $prj_kullanicilarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prj_kullanicilar"
    objects: {
      prj_projeler: Prisma.$prj_projelerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ad_soyad: string
      eposta: string
      sifre_hash: string
      rol: string | null
      kayit_tarihi: Date | null
      guvenlik_sorusu: string | null
      guvenlik_cevabi: string | null
    }, ExtArgs["result"]["prj_kullanicilar"]>
    composites: {}
  }

  type prj_kullanicilarGetPayload<S extends boolean | null | undefined | prj_kullanicilarDefaultArgs> = $Result.GetResult<Prisma.$prj_kullanicilarPayload, S>

  type prj_kullanicilarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prj_kullanicilarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prj_kullanicilarCountAggregateInputType | true
    }

  export interface prj_kullanicilarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prj_kullanicilar'], meta: { name: 'prj_kullanicilar' } }
    /**
     * Find zero or one Prj_kullanicilar that matches the filter.
     * @param {prj_kullanicilarFindUniqueArgs} args - Arguments to find a Prj_kullanicilar
     * @example
     * // Get one Prj_kullanicilar
     * const prj_kullanicilar = await prisma.prj_kullanicilar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prj_kullanicilarFindUniqueArgs>(args: SelectSubset<T, prj_kullanicilarFindUniqueArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prj_kullanicilar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prj_kullanicilarFindUniqueOrThrowArgs} args - Arguments to find a Prj_kullanicilar
     * @example
     * // Get one Prj_kullanicilar
     * const prj_kullanicilar = await prisma.prj_kullanicilar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prj_kullanicilarFindUniqueOrThrowArgs>(args: SelectSubset<T, prj_kullanicilarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prj_kullanicilar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_kullanicilarFindFirstArgs} args - Arguments to find a Prj_kullanicilar
     * @example
     * // Get one Prj_kullanicilar
     * const prj_kullanicilar = await prisma.prj_kullanicilar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prj_kullanicilarFindFirstArgs>(args?: SelectSubset<T, prj_kullanicilarFindFirstArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prj_kullanicilar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_kullanicilarFindFirstOrThrowArgs} args - Arguments to find a Prj_kullanicilar
     * @example
     * // Get one Prj_kullanicilar
     * const prj_kullanicilar = await prisma.prj_kullanicilar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prj_kullanicilarFindFirstOrThrowArgs>(args?: SelectSubset<T, prj_kullanicilarFindFirstOrThrowArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prj_kullanicilars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_kullanicilarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prj_kullanicilars
     * const prj_kullanicilars = await prisma.prj_kullanicilar.findMany()
     * 
     * // Get first 10 Prj_kullanicilars
     * const prj_kullanicilars = await prisma.prj_kullanicilar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prj_kullanicilarWithIdOnly = await prisma.prj_kullanicilar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prj_kullanicilarFindManyArgs>(args?: SelectSubset<T, prj_kullanicilarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prj_kullanicilar.
     * @param {prj_kullanicilarCreateArgs} args - Arguments to create a Prj_kullanicilar.
     * @example
     * // Create one Prj_kullanicilar
     * const Prj_kullanicilar = await prisma.prj_kullanicilar.create({
     *   data: {
     *     // ... data to create a Prj_kullanicilar
     *   }
     * })
     * 
     */
    create<T extends prj_kullanicilarCreateArgs>(args: SelectSubset<T, prj_kullanicilarCreateArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prj_kullanicilars.
     * @param {prj_kullanicilarCreateManyArgs} args - Arguments to create many Prj_kullanicilars.
     * @example
     * // Create many Prj_kullanicilars
     * const prj_kullanicilar = await prisma.prj_kullanicilar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prj_kullanicilarCreateManyArgs>(args?: SelectSubset<T, prj_kullanicilarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prj_kullanicilars and returns the data saved in the database.
     * @param {prj_kullanicilarCreateManyAndReturnArgs} args - Arguments to create many Prj_kullanicilars.
     * @example
     * // Create many Prj_kullanicilars
     * const prj_kullanicilar = await prisma.prj_kullanicilar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prj_kullanicilars and only return the `id`
     * const prj_kullanicilarWithIdOnly = await prisma.prj_kullanicilar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prj_kullanicilarCreateManyAndReturnArgs>(args?: SelectSubset<T, prj_kullanicilarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prj_kullanicilar.
     * @param {prj_kullanicilarDeleteArgs} args - Arguments to delete one Prj_kullanicilar.
     * @example
     * // Delete one Prj_kullanicilar
     * const Prj_kullanicilar = await prisma.prj_kullanicilar.delete({
     *   where: {
     *     // ... filter to delete one Prj_kullanicilar
     *   }
     * })
     * 
     */
    delete<T extends prj_kullanicilarDeleteArgs>(args: SelectSubset<T, prj_kullanicilarDeleteArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prj_kullanicilar.
     * @param {prj_kullanicilarUpdateArgs} args - Arguments to update one Prj_kullanicilar.
     * @example
     * // Update one Prj_kullanicilar
     * const prj_kullanicilar = await prisma.prj_kullanicilar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prj_kullanicilarUpdateArgs>(args: SelectSubset<T, prj_kullanicilarUpdateArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prj_kullanicilars.
     * @param {prj_kullanicilarDeleteManyArgs} args - Arguments to filter Prj_kullanicilars to delete.
     * @example
     * // Delete a few Prj_kullanicilars
     * const { count } = await prisma.prj_kullanicilar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prj_kullanicilarDeleteManyArgs>(args?: SelectSubset<T, prj_kullanicilarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prj_kullanicilars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_kullanicilarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prj_kullanicilars
     * const prj_kullanicilar = await prisma.prj_kullanicilar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prj_kullanicilarUpdateManyArgs>(args: SelectSubset<T, prj_kullanicilarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prj_kullanicilars and returns the data updated in the database.
     * @param {prj_kullanicilarUpdateManyAndReturnArgs} args - Arguments to update many Prj_kullanicilars.
     * @example
     * // Update many Prj_kullanicilars
     * const prj_kullanicilar = await prisma.prj_kullanicilar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prj_kullanicilars and only return the `id`
     * const prj_kullanicilarWithIdOnly = await prisma.prj_kullanicilar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prj_kullanicilarUpdateManyAndReturnArgs>(args: SelectSubset<T, prj_kullanicilarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prj_kullanicilar.
     * @param {prj_kullanicilarUpsertArgs} args - Arguments to update or create a Prj_kullanicilar.
     * @example
     * // Update or create a Prj_kullanicilar
     * const prj_kullanicilar = await prisma.prj_kullanicilar.upsert({
     *   create: {
     *     // ... data to create a Prj_kullanicilar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prj_kullanicilar we want to update
     *   }
     * })
     */
    upsert<T extends prj_kullanicilarUpsertArgs>(args: SelectSubset<T, prj_kullanicilarUpsertArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prj_kullanicilars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_kullanicilarCountArgs} args - Arguments to filter Prj_kullanicilars to count.
     * @example
     * // Count the number of Prj_kullanicilars
     * const count = await prisma.prj_kullanicilar.count({
     *   where: {
     *     // ... the filter for the Prj_kullanicilars we want to count
     *   }
     * })
    **/
    count<T extends prj_kullanicilarCountArgs>(
      args?: Subset<T, prj_kullanicilarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prj_kullanicilarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prj_kullanicilar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prj_kullanicilarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Prj_kullanicilarAggregateArgs>(args: Subset<T, Prj_kullanicilarAggregateArgs>): Prisma.PrismaPromise<GetPrj_kullanicilarAggregateType<T>>

    /**
     * Group by Prj_kullanicilar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_kullanicilarGroupByArgs} args - Group by arguments.
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
      T extends prj_kullanicilarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prj_kullanicilarGroupByArgs['orderBy'] }
        : { orderBy?: prj_kullanicilarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prj_kullanicilarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrj_kullanicilarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prj_kullanicilar model
   */
  readonly fields: prj_kullanicilarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prj_kullanicilar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prj_kullanicilarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prj_projeler<T extends prj_kullanicilar$prj_projelerArgs<ExtArgs> = {}>(args?: Subset<T, prj_kullanicilar$prj_projelerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the prj_kullanicilar model
   */
  interface prj_kullanicilarFieldRefs {
    readonly id: FieldRef<"prj_kullanicilar", 'Int'>
    readonly ad_soyad: FieldRef<"prj_kullanicilar", 'String'>
    readonly eposta: FieldRef<"prj_kullanicilar", 'String'>
    readonly sifre_hash: FieldRef<"prj_kullanicilar", 'String'>
    readonly rol: FieldRef<"prj_kullanicilar", 'String'>
    readonly kayit_tarihi: FieldRef<"prj_kullanicilar", 'DateTime'>
    readonly guvenlik_sorusu: FieldRef<"prj_kullanicilar", 'String'>
    readonly guvenlik_cevabi: FieldRef<"prj_kullanicilar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prj_kullanicilar findUnique
   */
  export type prj_kullanicilarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * Filter, which prj_kullanicilar to fetch.
     */
    where: prj_kullanicilarWhereUniqueInput
  }

  /**
   * prj_kullanicilar findUniqueOrThrow
   */
  export type prj_kullanicilarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * Filter, which prj_kullanicilar to fetch.
     */
    where: prj_kullanicilarWhereUniqueInput
  }

  /**
   * prj_kullanicilar findFirst
   */
  export type prj_kullanicilarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * Filter, which prj_kullanicilar to fetch.
     */
    where?: prj_kullanicilarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_kullanicilars to fetch.
     */
    orderBy?: prj_kullanicilarOrderByWithRelationInput | prj_kullanicilarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prj_kullanicilars.
     */
    cursor?: prj_kullanicilarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_kullanicilars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_kullanicilars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_kullanicilars.
     */
    distinct?: Prj_kullanicilarScalarFieldEnum | Prj_kullanicilarScalarFieldEnum[]
  }

  /**
   * prj_kullanicilar findFirstOrThrow
   */
  export type prj_kullanicilarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * Filter, which prj_kullanicilar to fetch.
     */
    where?: prj_kullanicilarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_kullanicilars to fetch.
     */
    orderBy?: prj_kullanicilarOrderByWithRelationInput | prj_kullanicilarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prj_kullanicilars.
     */
    cursor?: prj_kullanicilarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_kullanicilars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_kullanicilars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_kullanicilars.
     */
    distinct?: Prj_kullanicilarScalarFieldEnum | Prj_kullanicilarScalarFieldEnum[]
  }

  /**
   * prj_kullanicilar findMany
   */
  export type prj_kullanicilarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * Filter, which prj_kullanicilars to fetch.
     */
    where?: prj_kullanicilarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_kullanicilars to fetch.
     */
    orderBy?: prj_kullanicilarOrderByWithRelationInput | prj_kullanicilarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prj_kullanicilars.
     */
    cursor?: prj_kullanicilarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_kullanicilars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_kullanicilars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_kullanicilars.
     */
    distinct?: Prj_kullanicilarScalarFieldEnum | Prj_kullanicilarScalarFieldEnum[]
  }

  /**
   * prj_kullanicilar create
   */
  export type prj_kullanicilarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * The data needed to create a prj_kullanicilar.
     */
    data: XOR<prj_kullanicilarCreateInput, prj_kullanicilarUncheckedCreateInput>
  }

  /**
   * prj_kullanicilar createMany
   */
  export type prj_kullanicilarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prj_kullanicilars.
     */
    data: prj_kullanicilarCreateManyInput | prj_kullanicilarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prj_kullanicilar createManyAndReturn
   */
  export type prj_kullanicilarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * The data used to create many prj_kullanicilars.
     */
    data: prj_kullanicilarCreateManyInput | prj_kullanicilarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prj_kullanicilar update
   */
  export type prj_kullanicilarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * The data needed to update a prj_kullanicilar.
     */
    data: XOR<prj_kullanicilarUpdateInput, prj_kullanicilarUncheckedUpdateInput>
    /**
     * Choose, which prj_kullanicilar to update.
     */
    where: prj_kullanicilarWhereUniqueInput
  }

  /**
   * prj_kullanicilar updateMany
   */
  export type prj_kullanicilarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prj_kullanicilars.
     */
    data: XOR<prj_kullanicilarUpdateManyMutationInput, prj_kullanicilarUncheckedUpdateManyInput>
    /**
     * Filter which prj_kullanicilars to update
     */
    where?: prj_kullanicilarWhereInput
    /**
     * Limit how many prj_kullanicilars to update.
     */
    limit?: number
  }

  /**
   * prj_kullanicilar updateManyAndReturn
   */
  export type prj_kullanicilarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * The data used to update prj_kullanicilars.
     */
    data: XOR<prj_kullanicilarUpdateManyMutationInput, prj_kullanicilarUncheckedUpdateManyInput>
    /**
     * Filter which prj_kullanicilars to update
     */
    where?: prj_kullanicilarWhereInput
    /**
     * Limit how many prj_kullanicilars to update.
     */
    limit?: number
  }

  /**
   * prj_kullanicilar upsert
   */
  export type prj_kullanicilarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * The filter to search for the prj_kullanicilar to update in case it exists.
     */
    where: prj_kullanicilarWhereUniqueInput
    /**
     * In case the prj_kullanicilar found by the `where` argument doesn't exist, create a new prj_kullanicilar with this data.
     */
    create: XOR<prj_kullanicilarCreateInput, prj_kullanicilarUncheckedCreateInput>
    /**
     * In case the prj_kullanicilar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prj_kullanicilarUpdateInput, prj_kullanicilarUncheckedUpdateInput>
  }

  /**
   * prj_kullanicilar delete
   */
  export type prj_kullanicilarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    /**
     * Filter which prj_kullanicilar to delete.
     */
    where: prj_kullanicilarWhereUniqueInput
  }

  /**
   * prj_kullanicilar deleteMany
   */
  export type prj_kullanicilarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prj_kullanicilars to delete
     */
    where?: prj_kullanicilarWhereInput
    /**
     * Limit how many prj_kullanicilars to delete.
     */
    limit?: number
  }

  /**
   * prj_kullanicilar.prj_projeler
   */
  export type prj_kullanicilar$prj_projelerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    where?: prj_projelerWhereInput
    orderBy?: prj_projelerOrderByWithRelationInput | prj_projelerOrderByWithRelationInput[]
    cursor?: prj_projelerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prj_projelerScalarFieldEnum | Prj_projelerScalarFieldEnum[]
  }

  /**
   * prj_kullanicilar without action
   */
  export type prj_kullanicilarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
  }


  /**
   * Model prj_projeler
   */

  export type AggregatePrj_projeler = {
    _count: Prj_projelerCountAggregateOutputType | null
    _avg: Prj_projelerAvgAggregateOutputType | null
    _sum: Prj_projelerSumAggregateOutputType | null
    _min: Prj_projelerMinAggregateOutputType | null
    _max: Prj_projelerMaxAggregateOutputType | null
  }

  export type Prj_projelerAvgAggregateOutputType = {
    id: number | null
    ders_id: number | null
    yazar_id: number | null
  }

  export type Prj_projelerSumAggregateOutputType = {
    id: number | null
    ders_id: number | null
    yazar_id: number | null
  }

  export type Prj_projelerMinAggregateOutputType = {
    id: number | null
    baslik: string | null
    ozet: string | null
    icerik: string | null
    kapak_resmi_url: string | null
    ders_id: number | null
    yazar_id: number | null
    durum: string | null
    olusturma_tarihi: Date | null
    ad_soyad: string | null
  }

  export type Prj_projelerMaxAggregateOutputType = {
    id: number | null
    baslik: string | null
    ozet: string | null
    icerik: string | null
    kapak_resmi_url: string | null
    ders_id: number | null
    yazar_id: number | null
    durum: string | null
    olusturma_tarihi: Date | null
    ad_soyad: string | null
  }

  export type Prj_projelerCountAggregateOutputType = {
    id: number
    baslik: number
    ozet: number
    icerik: number
    kapak_resmi_url: number
    detay_fotolari: number
    dosya_linkleri: number
    ders_id: number
    yazar_id: number
    durum: number
    olusturma_tarihi: number
    ad_soyad: number
    _all: number
  }


  export type Prj_projelerAvgAggregateInputType = {
    id?: true
    ders_id?: true
    yazar_id?: true
  }

  export type Prj_projelerSumAggregateInputType = {
    id?: true
    ders_id?: true
    yazar_id?: true
  }

  export type Prj_projelerMinAggregateInputType = {
    id?: true
    baslik?: true
    ozet?: true
    icerik?: true
    kapak_resmi_url?: true
    ders_id?: true
    yazar_id?: true
    durum?: true
    olusturma_tarihi?: true
    ad_soyad?: true
  }

  export type Prj_projelerMaxAggregateInputType = {
    id?: true
    baslik?: true
    ozet?: true
    icerik?: true
    kapak_resmi_url?: true
    ders_id?: true
    yazar_id?: true
    durum?: true
    olusturma_tarihi?: true
    ad_soyad?: true
  }

  export type Prj_projelerCountAggregateInputType = {
    id?: true
    baslik?: true
    ozet?: true
    icerik?: true
    kapak_resmi_url?: true
    detay_fotolari?: true
    dosya_linkleri?: true
    ders_id?: true
    yazar_id?: true
    durum?: true
    olusturma_tarihi?: true
    ad_soyad?: true
    _all?: true
  }

  export type Prj_projelerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prj_projeler to aggregate.
     */
    where?: prj_projelerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_projelers to fetch.
     */
    orderBy?: prj_projelerOrderByWithRelationInput | prj_projelerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prj_projelerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_projelers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_projelers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prj_projelers
    **/
    _count?: true | Prj_projelerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prj_projelerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prj_projelerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prj_projelerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prj_projelerMaxAggregateInputType
  }

  export type GetPrj_projelerAggregateType<T extends Prj_projelerAggregateArgs> = {
        [P in keyof T & keyof AggregatePrj_projeler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrj_projeler[P]>
      : GetScalarType<T[P], AggregatePrj_projeler[P]>
  }




  export type prj_projelerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prj_projelerWhereInput
    orderBy?: prj_projelerOrderByWithAggregationInput | prj_projelerOrderByWithAggregationInput[]
    by: Prj_projelerScalarFieldEnum[] | Prj_projelerScalarFieldEnum
    having?: prj_projelerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prj_projelerCountAggregateInputType | true
    _avg?: Prj_projelerAvgAggregateInputType
    _sum?: Prj_projelerSumAggregateInputType
    _min?: Prj_projelerMinAggregateInputType
    _max?: Prj_projelerMaxAggregateInputType
  }

  export type Prj_projelerGroupByOutputType = {
    id: number
    baslik: string
    ozet: string | null
    icerik: string | null
    kapak_resmi_url: string | null
    detay_fotolari: string[]
    dosya_linkleri: string[]
    ders_id: number | null
    yazar_id: number | null
    durum: string | null
    olusturma_tarihi: Date | null
    ad_soyad: string | null
    _count: Prj_projelerCountAggregateOutputType | null
    _avg: Prj_projelerAvgAggregateOutputType | null
    _sum: Prj_projelerSumAggregateOutputType | null
    _min: Prj_projelerMinAggregateOutputType | null
    _max: Prj_projelerMaxAggregateOutputType | null
  }

  type GetPrj_projelerGroupByPayload<T extends prj_projelerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prj_projelerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prj_projelerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prj_projelerGroupByOutputType[P]>
            : GetScalarType<T[P], Prj_projelerGroupByOutputType[P]>
        }
      >
    >


  export type prj_projelerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baslik?: boolean
    ozet?: boolean
    icerik?: boolean
    kapak_resmi_url?: boolean
    detay_fotolari?: boolean
    dosya_linkleri?: boolean
    ders_id?: boolean
    yazar_id?: boolean
    durum?: boolean
    olusturma_tarihi?: boolean
    ad_soyad?: boolean
    prj_dersler?: boolean | prj_projeler$prj_derslerArgs<ExtArgs>
    prj_kullanicilar?: boolean | prj_projeler$prj_kullanicilarArgs<ExtArgs>
  }, ExtArgs["result"]["prj_projeler"]>

  export type prj_projelerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baslik?: boolean
    ozet?: boolean
    icerik?: boolean
    kapak_resmi_url?: boolean
    detay_fotolari?: boolean
    dosya_linkleri?: boolean
    ders_id?: boolean
    yazar_id?: boolean
    durum?: boolean
    olusturma_tarihi?: boolean
    ad_soyad?: boolean
    prj_dersler?: boolean | prj_projeler$prj_derslerArgs<ExtArgs>
    prj_kullanicilar?: boolean | prj_projeler$prj_kullanicilarArgs<ExtArgs>
  }, ExtArgs["result"]["prj_projeler"]>

  export type prj_projelerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baslik?: boolean
    ozet?: boolean
    icerik?: boolean
    kapak_resmi_url?: boolean
    detay_fotolari?: boolean
    dosya_linkleri?: boolean
    ders_id?: boolean
    yazar_id?: boolean
    durum?: boolean
    olusturma_tarihi?: boolean
    ad_soyad?: boolean
    prj_dersler?: boolean | prj_projeler$prj_derslerArgs<ExtArgs>
    prj_kullanicilar?: boolean | prj_projeler$prj_kullanicilarArgs<ExtArgs>
  }, ExtArgs["result"]["prj_projeler"]>

  export type prj_projelerSelectScalar = {
    id?: boolean
    baslik?: boolean
    ozet?: boolean
    icerik?: boolean
    kapak_resmi_url?: boolean
    detay_fotolari?: boolean
    dosya_linkleri?: boolean
    ders_id?: boolean
    yazar_id?: boolean
    durum?: boolean
    olusturma_tarihi?: boolean
    ad_soyad?: boolean
  }

  export type prj_projelerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baslik" | "ozet" | "icerik" | "kapak_resmi_url" | "detay_fotolari" | "dosya_linkleri" | "ders_id" | "yazar_id" | "durum" | "olusturma_tarihi" | "ad_soyad", ExtArgs["result"]["prj_projeler"]>
  export type prj_projelerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prj_dersler?: boolean | prj_projeler$prj_derslerArgs<ExtArgs>
    prj_kullanicilar?: boolean | prj_projeler$prj_kullanicilarArgs<ExtArgs>
  }
  export type prj_projelerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prj_dersler?: boolean | prj_projeler$prj_derslerArgs<ExtArgs>
    prj_kullanicilar?: boolean | prj_projeler$prj_kullanicilarArgs<ExtArgs>
  }
  export type prj_projelerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prj_dersler?: boolean | prj_projeler$prj_derslerArgs<ExtArgs>
    prj_kullanicilar?: boolean | prj_projeler$prj_kullanicilarArgs<ExtArgs>
  }

  export type $prj_projelerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prj_projeler"
    objects: {
      prj_dersler: Prisma.$prj_derslerPayload<ExtArgs> | null
      prj_kullanicilar: Prisma.$prj_kullanicilarPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      baslik: string
      ozet: string | null
      icerik: string | null
      kapak_resmi_url: string | null
      detay_fotolari: string[]
      dosya_linkleri: string[]
      ders_id: number | null
      yazar_id: number | null
      durum: string | null
      olusturma_tarihi: Date | null
      ad_soyad: string | null
    }, ExtArgs["result"]["prj_projeler"]>
    composites: {}
  }

  type prj_projelerGetPayload<S extends boolean | null | undefined | prj_projelerDefaultArgs> = $Result.GetResult<Prisma.$prj_projelerPayload, S>

  type prj_projelerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prj_projelerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prj_projelerCountAggregateInputType | true
    }

  export interface prj_projelerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prj_projeler'], meta: { name: 'prj_projeler' } }
    /**
     * Find zero or one Prj_projeler that matches the filter.
     * @param {prj_projelerFindUniqueArgs} args - Arguments to find a Prj_projeler
     * @example
     * // Get one Prj_projeler
     * const prj_projeler = await prisma.prj_projeler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prj_projelerFindUniqueArgs>(args: SelectSubset<T, prj_projelerFindUniqueArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prj_projeler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prj_projelerFindUniqueOrThrowArgs} args - Arguments to find a Prj_projeler
     * @example
     * // Get one Prj_projeler
     * const prj_projeler = await prisma.prj_projeler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prj_projelerFindUniqueOrThrowArgs>(args: SelectSubset<T, prj_projelerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prj_projeler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_projelerFindFirstArgs} args - Arguments to find a Prj_projeler
     * @example
     * // Get one Prj_projeler
     * const prj_projeler = await prisma.prj_projeler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prj_projelerFindFirstArgs>(args?: SelectSubset<T, prj_projelerFindFirstArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prj_projeler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_projelerFindFirstOrThrowArgs} args - Arguments to find a Prj_projeler
     * @example
     * // Get one Prj_projeler
     * const prj_projeler = await prisma.prj_projeler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prj_projelerFindFirstOrThrowArgs>(args?: SelectSubset<T, prj_projelerFindFirstOrThrowArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prj_projelers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_projelerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prj_projelers
     * const prj_projelers = await prisma.prj_projeler.findMany()
     * 
     * // Get first 10 Prj_projelers
     * const prj_projelers = await prisma.prj_projeler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prj_projelerWithIdOnly = await prisma.prj_projeler.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prj_projelerFindManyArgs>(args?: SelectSubset<T, prj_projelerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prj_projeler.
     * @param {prj_projelerCreateArgs} args - Arguments to create a Prj_projeler.
     * @example
     * // Create one Prj_projeler
     * const Prj_projeler = await prisma.prj_projeler.create({
     *   data: {
     *     // ... data to create a Prj_projeler
     *   }
     * })
     * 
     */
    create<T extends prj_projelerCreateArgs>(args: SelectSubset<T, prj_projelerCreateArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prj_projelers.
     * @param {prj_projelerCreateManyArgs} args - Arguments to create many Prj_projelers.
     * @example
     * // Create many Prj_projelers
     * const prj_projeler = await prisma.prj_projeler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prj_projelerCreateManyArgs>(args?: SelectSubset<T, prj_projelerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prj_projelers and returns the data saved in the database.
     * @param {prj_projelerCreateManyAndReturnArgs} args - Arguments to create many Prj_projelers.
     * @example
     * // Create many Prj_projelers
     * const prj_projeler = await prisma.prj_projeler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prj_projelers and only return the `id`
     * const prj_projelerWithIdOnly = await prisma.prj_projeler.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prj_projelerCreateManyAndReturnArgs>(args?: SelectSubset<T, prj_projelerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prj_projeler.
     * @param {prj_projelerDeleteArgs} args - Arguments to delete one Prj_projeler.
     * @example
     * // Delete one Prj_projeler
     * const Prj_projeler = await prisma.prj_projeler.delete({
     *   where: {
     *     // ... filter to delete one Prj_projeler
     *   }
     * })
     * 
     */
    delete<T extends prj_projelerDeleteArgs>(args: SelectSubset<T, prj_projelerDeleteArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prj_projeler.
     * @param {prj_projelerUpdateArgs} args - Arguments to update one Prj_projeler.
     * @example
     * // Update one Prj_projeler
     * const prj_projeler = await prisma.prj_projeler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prj_projelerUpdateArgs>(args: SelectSubset<T, prj_projelerUpdateArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prj_projelers.
     * @param {prj_projelerDeleteManyArgs} args - Arguments to filter Prj_projelers to delete.
     * @example
     * // Delete a few Prj_projelers
     * const { count } = await prisma.prj_projeler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prj_projelerDeleteManyArgs>(args?: SelectSubset<T, prj_projelerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prj_projelers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_projelerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prj_projelers
     * const prj_projeler = await prisma.prj_projeler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prj_projelerUpdateManyArgs>(args: SelectSubset<T, prj_projelerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prj_projelers and returns the data updated in the database.
     * @param {prj_projelerUpdateManyAndReturnArgs} args - Arguments to update many Prj_projelers.
     * @example
     * // Update many Prj_projelers
     * const prj_projeler = await prisma.prj_projeler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prj_projelers and only return the `id`
     * const prj_projelerWithIdOnly = await prisma.prj_projeler.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prj_projelerUpdateManyAndReturnArgs>(args: SelectSubset<T, prj_projelerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prj_projeler.
     * @param {prj_projelerUpsertArgs} args - Arguments to update or create a Prj_projeler.
     * @example
     * // Update or create a Prj_projeler
     * const prj_projeler = await prisma.prj_projeler.upsert({
     *   create: {
     *     // ... data to create a Prj_projeler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prj_projeler we want to update
     *   }
     * })
     */
    upsert<T extends prj_projelerUpsertArgs>(args: SelectSubset<T, prj_projelerUpsertArgs<ExtArgs>>): Prisma__prj_projelerClient<$Result.GetResult<Prisma.$prj_projelerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prj_projelers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_projelerCountArgs} args - Arguments to filter Prj_projelers to count.
     * @example
     * // Count the number of Prj_projelers
     * const count = await prisma.prj_projeler.count({
     *   where: {
     *     // ... the filter for the Prj_projelers we want to count
     *   }
     * })
    **/
    count<T extends prj_projelerCountArgs>(
      args?: Subset<T, prj_projelerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prj_projelerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prj_projeler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prj_projelerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Prj_projelerAggregateArgs>(args: Subset<T, Prj_projelerAggregateArgs>): Prisma.PrismaPromise<GetPrj_projelerAggregateType<T>>

    /**
     * Group by Prj_projeler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prj_projelerGroupByArgs} args - Group by arguments.
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
      T extends prj_projelerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prj_projelerGroupByArgs['orderBy'] }
        : { orderBy?: prj_projelerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prj_projelerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrj_projelerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prj_projeler model
   */
  readonly fields: prj_projelerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prj_projeler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prj_projelerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prj_dersler<T extends prj_projeler$prj_derslerArgs<ExtArgs> = {}>(args?: Subset<T, prj_projeler$prj_derslerArgs<ExtArgs>>): Prisma__prj_derslerClient<$Result.GetResult<Prisma.$prj_derslerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prj_kullanicilar<T extends prj_projeler$prj_kullanicilarArgs<ExtArgs> = {}>(args?: Subset<T, prj_projeler$prj_kullanicilarArgs<ExtArgs>>): Prisma__prj_kullanicilarClient<$Result.GetResult<Prisma.$prj_kullanicilarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the prj_projeler model
   */
  interface prj_projelerFieldRefs {
    readonly id: FieldRef<"prj_projeler", 'Int'>
    readonly baslik: FieldRef<"prj_projeler", 'String'>
    readonly ozet: FieldRef<"prj_projeler", 'String'>
    readonly icerik: FieldRef<"prj_projeler", 'String'>
    readonly kapak_resmi_url: FieldRef<"prj_projeler", 'String'>
    readonly detay_fotolari: FieldRef<"prj_projeler", 'String[]'>
    readonly dosya_linkleri: FieldRef<"prj_projeler", 'String[]'>
    readonly ders_id: FieldRef<"prj_projeler", 'Int'>
    readonly yazar_id: FieldRef<"prj_projeler", 'Int'>
    readonly durum: FieldRef<"prj_projeler", 'String'>
    readonly olusturma_tarihi: FieldRef<"prj_projeler", 'DateTime'>
    readonly ad_soyad: FieldRef<"prj_projeler", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prj_projeler findUnique
   */
  export type prj_projelerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * Filter, which prj_projeler to fetch.
     */
    where: prj_projelerWhereUniqueInput
  }

  /**
   * prj_projeler findUniqueOrThrow
   */
  export type prj_projelerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * Filter, which prj_projeler to fetch.
     */
    where: prj_projelerWhereUniqueInput
  }

  /**
   * prj_projeler findFirst
   */
  export type prj_projelerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * Filter, which prj_projeler to fetch.
     */
    where?: prj_projelerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_projelers to fetch.
     */
    orderBy?: prj_projelerOrderByWithRelationInput | prj_projelerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prj_projelers.
     */
    cursor?: prj_projelerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_projelers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_projelers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_projelers.
     */
    distinct?: Prj_projelerScalarFieldEnum | Prj_projelerScalarFieldEnum[]
  }

  /**
   * prj_projeler findFirstOrThrow
   */
  export type prj_projelerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * Filter, which prj_projeler to fetch.
     */
    where?: prj_projelerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_projelers to fetch.
     */
    orderBy?: prj_projelerOrderByWithRelationInput | prj_projelerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prj_projelers.
     */
    cursor?: prj_projelerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_projelers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_projelers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_projelers.
     */
    distinct?: Prj_projelerScalarFieldEnum | Prj_projelerScalarFieldEnum[]
  }

  /**
   * prj_projeler findMany
   */
  export type prj_projelerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * Filter, which prj_projelers to fetch.
     */
    where?: prj_projelerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prj_projelers to fetch.
     */
    orderBy?: prj_projelerOrderByWithRelationInput | prj_projelerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prj_projelers.
     */
    cursor?: prj_projelerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prj_projelers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prj_projelers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prj_projelers.
     */
    distinct?: Prj_projelerScalarFieldEnum | Prj_projelerScalarFieldEnum[]
  }

  /**
   * prj_projeler create
   */
  export type prj_projelerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * The data needed to create a prj_projeler.
     */
    data: XOR<prj_projelerCreateInput, prj_projelerUncheckedCreateInput>
  }

  /**
   * prj_projeler createMany
   */
  export type prj_projelerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prj_projelers.
     */
    data: prj_projelerCreateManyInput | prj_projelerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prj_projeler createManyAndReturn
   */
  export type prj_projelerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * The data used to create many prj_projelers.
     */
    data: prj_projelerCreateManyInput | prj_projelerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prj_projeler update
   */
  export type prj_projelerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * The data needed to update a prj_projeler.
     */
    data: XOR<prj_projelerUpdateInput, prj_projelerUncheckedUpdateInput>
    /**
     * Choose, which prj_projeler to update.
     */
    where: prj_projelerWhereUniqueInput
  }

  /**
   * prj_projeler updateMany
   */
  export type prj_projelerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prj_projelers.
     */
    data: XOR<prj_projelerUpdateManyMutationInput, prj_projelerUncheckedUpdateManyInput>
    /**
     * Filter which prj_projelers to update
     */
    where?: prj_projelerWhereInput
    /**
     * Limit how many prj_projelers to update.
     */
    limit?: number
  }

  /**
   * prj_projeler updateManyAndReturn
   */
  export type prj_projelerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * The data used to update prj_projelers.
     */
    data: XOR<prj_projelerUpdateManyMutationInput, prj_projelerUncheckedUpdateManyInput>
    /**
     * Filter which prj_projelers to update
     */
    where?: prj_projelerWhereInput
    /**
     * Limit how many prj_projelers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prj_projeler upsert
   */
  export type prj_projelerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * The filter to search for the prj_projeler to update in case it exists.
     */
    where: prj_projelerWhereUniqueInput
    /**
     * In case the prj_projeler found by the `where` argument doesn't exist, create a new prj_projeler with this data.
     */
    create: XOR<prj_projelerCreateInput, prj_projelerUncheckedCreateInput>
    /**
     * In case the prj_projeler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prj_projelerUpdateInput, prj_projelerUncheckedUpdateInput>
  }

  /**
   * prj_projeler delete
   */
  export type prj_projelerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
    /**
     * Filter which prj_projeler to delete.
     */
    where: prj_projelerWhereUniqueInput
  }

  /**
   * prj_projeler deleteMany
   */
  export type prj_projelerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prj_projelers to delete
     */
    where?: prj_projelerWhereInput
    /**
     * Limit how many prj_projelers to delete.
     */
    limit?: number
  }

  /**
   * prj_projeler.prj_dersler
   */
  export type prj_projeler$prj_derslerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_dersler
     */
    select?: prj_derslerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_dersler
     */
    omit?: prj_derslerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_derslerInclude<ExtArgs> | null
    where?: prj_derslerWhereInput
  }

  /**
   * prj_projeler.prj_kullanicilar
   */
  export type prj_projeler$prj_kullanicilarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_kullanicilar
     */
    select?: prj_kullanicilarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_kullanicilar
     */
    omit?: prj_kullanicilarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_kullanicilarInclude<ExtArgs> | null
    where?: prj_kullanicilarWhereInput
  }

  /**
   * prj_projeler without action
   */
  export type prj_projelerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prj_projeler
     */
    select?: prj_projelerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prj_projeler
     */
    omit?: prj_projelerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prj_projelerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Prj_derslerScalarFieldEnum: {
    id: 'id',
    ders_adi: 'ders_adi',
    url_etiketi: 'url_etiketi'
  };

  export type Prj_derslerScalarFieldEnum = (typeof Prj_derslerScalarFieldEnum)[keyof typeof Prj_derslerScalarFieldEnum]


  export const Prj_kullanicilarScalarFieldEnum: {
    id: 'id',
    ad_soyad: 'ad_soyad',
    eposta: 'eposta',
    sifre_hash: 'sifre_hash',
    rol: 'rol',
    kayit_tarihi: 'kayit_tarihi',
    guvenlik_sorusu: 'guvenlik_sorusu',
    guvenlik_cevabi: 'guvenlik_cevabi'
  };

  export type Prj_kullanicilarScalarFieldEnum = (typeof Prj_kullanicilarScalarFieldEnum)[keyof typeof Prj_kullanicilarScalarFieldEnum]


  export const Prj_projelerScalarFieldEnum: {
    id: 'id',
    baslik: 'baslik',
    ozet: 'ozet',
    icerik: 'icerik',
    kapak_resmi_url: 'kapak_resmi_url',
    detay_fotolari: 'detay_fotolari',
    dosya_linkleri: 'dosya_linkleri',
    ders_id: 'ders_id',
    yazar_id: 'yazar_id',
    durum: 'durum',
    olusturma_tarihi: 'olusturma_tarihi',
    ad_soyad: 'ad_soyad'
  };

  export type Prj_projelerScalarFieldEnum = (typeof Prj_projelerScalarFieldEnum)[keyof typeof Prj_projelerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type prj_derslerWhereInput = {
    AND?: prj_derslerWhereInput | prj_derslerWhereInput[]
    OR?: prj_derslerWhereInput[]
    NOT?: prj_derslerWhereInput | prj_derslerWhereInput[]
    id?: IntFilter<"prj_dersler"> | number
    ders_adi?: StringFilter<"prj_dersler"> | string
    url_etiketi?: StringFilter<"prj_dersler"> | string
    prj_projeler?: Prj_projelerListRelationFilter
  }

  export type prj_derslerOrderByWithRelationInput = {
    id?: SortOrder
    ders_adi?: SortOrder
    url_etiketi?: SortOrder
    prj_projeler?: prj_projelerOrderByRelationAggregateInput
  }

  export type prj_derslerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ders_adi?: string
    url_etiketi?: string
    AND?: prj_derslerWhereInput | prj_derslerWhereInput[]
    OR?: prj_derslerWhereInput[]
    NOT?: prj_derslerWhereInput | prj_derslerWhereInput[]
    prj_projeler?: Prj_projelerListRelationFilter
  }, "id" | "ders_adi" | "url_etiketi">

  export type prj_derslerOrderByWithAggregationInput = {
    id?: SortOrder
    ders_adi?: SortOrder
    url_etiketi?: SortOrder
    _count?: prj_derslerCountOrderByAggregateInput
    _avg?: prj_derslerAvgOrderByAggregateInput
    _max?: prj_derslerMaxOrderByAggregateInput
    _min?: prj_derslerMinOrderByAggregateInput
    _sum?: prj_derslerSumOrderByAggregateInput
  }

  export type prj_derslerScalarWhereWithAggregatesInput = {
    AND?: prj_derslerScalarWhereWithAggregatesInput | prj_derslerScalarWhereWithAggregatesInput[]
    OR?: prj_derslerScalarWhereWithAggregatesInput[]
    NOT?: prj_derslerScalarWhereWithAggregatesInput | prj_derslerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prj_dersler"> | number
    ders_adi?: StringWithAggregatesFilter<"prj_dersler"> | string
    url_etiketi?: StringWithAggregatesFilter<"prj_dersler"> | string
  }

  export type prj_kullanicilarWhereInput = {
    AND?: prj_kullanicilarWhereInput | prj_kullanicilarWhereInput[]
    OR?: prj_kullanicilarWhereInput[]
    NOT?: prj_kullanicilarWhereInput | prj_kullanicilarWhereInput[]
    id?: IntFilter<"prj_kullanicilar"> | number
    ad_soyad?: StringFilter<"prj_kullanicilar"> | string
    eposta?: StringFilter<"prj_kullanicilar"> | string
    sifre_hash?: StringFilter<"prj_kullanicilar"> | string
    rol?: StringNullableFilter<"prj_kullanicilar"> | string | null
    kayit_tarihi?: DateTimeNullableFilter<"prj_kullanicilar"> | Date | string | null
    guvenlik_sorusu?: StringNullableFilter<"prj_kullanicilar"> | string | null
    guvenlik_cevabi?: StringNullableFilter<"prj_kullanicilar"> | string | null
    prj_projeler?: Prj_projelerListRelationFilter
  }

  export type prj_kullanicilarOrderByWithRelationInput = {
    id?: SortOrder
    ad_soyad?: SortOrder
    eposta?: SortOrder
    sifre_hash?: SortOrder
    rol?: SortOrderInput | SortOrder
    kayit_tarihi?: SortOrderInput | SortOrder
    guvenlik_sorusu?: SortOrderInput | SortOrder
    guvenlik_cevabi?: SortOrderInput | SortOrder
    prj_projeler?: prj_projelerOrderByRelationAggregateInput
  }

  export type prj_kullanicilarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    eposta?: string
    AND?: prj_kullanicilarWhereInput | prj_kullanicilarWhereInput[]
    OR?: prj_kullanicilarWhereInput[]
    NOT?: prj_kullanicilarWhereInput | prj_kullanicilarWhereInput[]
    ad_soyad?: StringFilter<"prj_kullanicilar"> | string
    sifre_hash?: StringFilter<"prj_kullanicilar"> | string
    rol?: StringNullableFilter<"prj_kullanicilar"> | string | null
    kayit_tarihi?: DateTimeNullableFilter<"prj_kullanicilar"> | Date | string | null
    guvenlik_sorusu?: StringNullableFilter<"prj_kullanicilar"> | string | null
    guvenlik_cevabi?: StringNullableFilter<"prj_kullanicilar"> | string | null
    prj_projeler?: Prj_projelerListRelationFilter
  }, "id" | "eposta">

  export type prj_kullanicilarOrderByWithAggregationInput = {
    id?: SortOrder
    ad_soyad?: SortOrder
    eposta?: SortOrder
    sifre_hash?: SortOrder
    rol?: SortOrderInput | SortOrder
    kayit_tarihi?: SortOrderInput | SortOrder
    guvenlik_sorusu?: SortOrderInput | SortOrder
    guvenlik_cevabi?: SortOrderInput | SortOrder
    _count?: prj_kullanicilarCountOrderByAggregateInput
    _avg?: prj_kullanicilarAvgOrderByAggregateInput
    _max?: prj_kullanicilarMaxOrderByAggregateInput
    _min?: prj_kullanicilarMinOrderByAggregateInput
    _sum?: prj_kullanicilarSumOrderByAggregateInput
  }

  export type prj_kullanicilarScalarWhereWithAggregatesInput = {
    AND?: prj_kullanicilarScalarWhereWithAggregatesInput | prj_kullanicilarScalarWhereWithAggregatesInput[]
    OR?: prj_kullanicilarScalarWhereWithAggregatesInput[]
    NOT?: prj_kullanicilarScalarWhereWithAggregatesInput | prj_kullanicilarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prj_kullanicilar"> | number
    ad_soyad?: StringWithAggregatesFilter<"prj_kullanicilar"> | string
    eposta?: StringWithAggregatesFilter<"prj_kullanicilar"> | string
    sifre_hash?: StringWithAggregatesFilter<"prj_kullanicilar"> | string
    rol?: StringNullableWithAggregatesFilter<"prj_kullanicilar"> | string | null
    kayit_tarihi?: DateTimeNullableWithAggregatesFilter<"prj_kullanicilar"> | Date | string | null
    guvenlik_sorusu?: StringNullableWithAggregatesFilter<"prj_kullanicilar"> | string | null
    guvenlik_cevabi?: StringNullableWithAggregatesFilter<"prj_kullanicilar"> | string | null
  }

  export type prj_projelerWhereInput = {
    AND?: prj_projelerWhereInput | prj_projelerWhereInput[]
    OR?: prj_projelerWhereInput[]
    NOT?: prj_projelerWhereInput | prj_projelerWhereInput[]
    id?: IntFilter<"prj_projeler"> | number
    baslik?: StringFilter<"prj_projeler"> | string
    ozet?: StringNullableFilter<"prj_projeler"> | string | null
    icerik?: StringNullableFilter<"prj_projeler"> | string | null
    kapak_resmi_url?: StringNullableFilter<"prj_projeler"> | string | null
    detay_fotolari?: StringNullableListFilter<"prj_projeler">
    dosya_linkleri?: StringNullableListFilter<"prj_projeler">
    ders_id?: IntNullableFilter<"prj_projeler"> | number | null
    yazar_id?: IntNullableFilter<"prj_projeler"> | number | null
    durum?: StringNullableFilter<"prj_projeler"> | string | null
    olusturma_tarihi?: DateTimeNullableFilter<"prj_projeler"> | Date | string | null
    ad_soyad?: StringNullableFilter<"prj_projeler"> | string | null
    prj_dersler?: XOR<Prj_derslerNullableScalarRelationFilter, prj_derslerWhereInput> | null
    prj_kullanicilar?: XOR<Prj_kullanicilarNullableScalarRelationFilter, prj_kullanicilarWhereInput> | null
  }

  export type prj_projelerOrderByWithRelationInput = {
    id?: SortOrder
    baslik?: SortOrder
    ozet?: SortOrderInput | SortOrder
    icerik?: SortOrderInput | SortOrder
    kapak_resmi_url?: SortOrderInput | SortOrder
    detay_fotolari?: SortOrder
    dosya_linkleri?: SortOrder
    ders_id?: SortOrderInput | SortOrder
    yazar_id?: SortOrderInput | SortOrder
    durum?: SortOrderInput | SortOrder
    olusturma_tarihi?: SortOrderInput | SortOrder
    ad_soyad?: SortOrderInput | SortOrder
    prj_dersler?: prj_derslerOrderByWithRelationInput
    prj_kullanicilar?: prj_kullanicilarOrderByWithRelationInput
  }

  export type prj_projelerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: prj_projelerWhereInput | prj_projelerWhereInput[]
    OR?: prj_projelerWhereInput[]
    NOT?: prj_projelerWhereInput | prj_projelerWhereInput[]
    baslik?: StringFilter<"prj_projeler"> | string
    ozet?: StringNullableFilter<"prj_projeler"> | string | null
    icerik?: StringNullableFilter<"prj_projeler"> | string | null
    kapak_resmi_url?: StringNullableFilter<"prj_projeler"> | string | null
    detay_fotolari?: StringNullableListFilter<"prj_projeler">
    dosya_linkleri?: StringNullableListFilter<"prj_projeler">
    ders_id?: IntNullableFilter<"prj_projeler"> | number | null
    yazar_id?: IntNullableFilter<"prj_projeler"> | number | null
    durum?: StringNullableFilter<"prj_projeler"> | string | null
    olusturma_tarihi?: DateTimeNullableFilter<"prj_projeler"> | Date | string | null
    ad_soyad?: StringNullableFilter<"prj_projeler"> | string | null
    prj_dersler?: XOR<Prj_derslerNullableScalarRelationFilter, prj_derslerWhereInput> | null
    prj_kullanicilar?: XOR<Prj_kullanicilarNullableScalarRelationFilter, prj_kullanicilarWhereInput> | null
  }, "id">

  export type prj_projelerOrderByWithAggregationInput = {
    id?: SortOrder
    baslik?: SortOrder
    ozet?: SortOrderInput | SortOrder
    icerik?: SortOrderInput | SortOrder
    kapak_resmi_url?: SortOrderInput | SortOrder
    detay_fotolari?: SortOrder
    dosya_linkleri?: SortOrder
    ders_id?: SortOrderInput | SortOrder
    yazar_id?: SortOrderInput | SortOrder
    durum?: SortOrderInput | SortOrder
    olusturma_tarihi?: SortOrderInput | SortOrder
    ad_soyad?: SortOrderInput | SortOrder
    _count?: prj_projelerCountOrderByAggregateInput
    _avg?: prj_projelerAvgOrderByAggregateInput
    _max?: prj_projelerMaxOrderByAggregateInput
    _min?: prj_projelerMinOrderByAggregateInput
    _sum?: prj_projelerSumOrderByAggregateInput
  }

  export type prj_projelerScalarWhereWithAggregatesInput = {
    AND?: prj_projelerScalarWhereWithAggregatesInput | prj_projelerScalarWhereWithAggregatesInput[]
    OR?: prj_projelerScalarWhereWithAggregatesInput[]
    NOT?: prj_projelerScalarWhereWithAggregatesInput | prj_projelerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prj_projeler"> | number
    baslik?: StringWithAggregatesFilter<"prj_projeler"> | string
    ozet?: StringNullableWithAggregatesFilter<"prj_projeler"> | string | null
    icerik?: StringNullableWithAggregatesFilter<"prj_projeler"> | string | null
    kapak_resmi_url?: StringNullableWithAggregatesFilter<"prj_projeler"> | string | null
    detay_fotolari?: StringNullableListFilter<"prj_projeler">
    dosya_linkleri?: StringNullableListFilter<"prj_projeler">
    ders_id?: IntNullableWithAggregatesFilter<"prj_projeler"> | number | null
    yazar_id?: IntNullableWithAggregatesFilter<"prj_projeler"> | number | null
    durum?: StringNullableWithAggregatesFilter<"prj_projeler"> | string | null
    olusturma_tarihi?: DateTimeNullableWithAggregatesFilter<"prj_projeler"> | Date | string | null
    ad_soyad?: StringNullableWithAggregatesFilter<"prj_projeler"> | string | null
  }

  export type prj_derslerCreateInput = {
    ders_adi: string
    url_etiketi: string
    prj_projeler?: prj_projelerCreateNestedManyWithoutPrj_derslerInput
  }

  export type prj_derslerUncheckedCreateInput = {
    id?: number
    ders_adi: string
    url_etiketi: string
    prj_projeler?: prj_projelerUncheckedCreateNestedManyWithoutPrj_derslerInput
  }

  export type prj_derslerUpdateInput = {
    ders_adi?: StringFieldUpdateOperationsInput | string
    url_etiketi?: StringFieldUpdateOperationsInput | string
    prj_projeler?: prj_projelerUpdateManyWithoutPrj_derslerNestedInput
  }

  export type prj_derslerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ders_adi?: StringFieldUpdateOperationsInput | string
    url_etiketi?: StringFieldUpdateOperationsInput | string
    prj_projeler?: prj_projelerUncheckedUpdateManyWithoutPrj_derslerNestedInput
  }

  export type prj_derslerCreateManyInput = {
    id?: number
    ders_adi: string
    url_etiketi: string
  }

  export type prj_derslerUpdateManyMutationInput = {
    ders_adi?: StringFieldUpdateOperationsInput | string
    url_etiketi?: StringFieldUpdateOperationsInput | string
  }

  export type prj_derslerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ders_adi?: StringFieldUpdateOperationsInput | string
    url_etiketi?: StringFieldUpdateOperationsInput | string
  }

  export type prj_kullanicilarCreateInput = {
    ad_soyad: string
    eposta: string
    sifre_hash: string
    rol?: string | null
    kayit_tarihi?: Date | string | null
    guvenlik_sorusu?: string | null
    guvenlik_cevabi?: string | null
    prj_projeler?: prj_projelerCreateNestedManyWithoutPrj_kullanicilarInput
  }

  export type prj_kullanicilarUncheckedCreateInput = {
    id?: number
    ad_soyad: string
    eposta: string
    sifre_hash: string
    rol?: string | null
    kayit_tarihi?: Date | string | null
    guvenlik_sorusu?: string | null
    guvenlik_cevabi?: string | null
    prj_projeler?: prj_projelerUncheckedCreateNestedManyWithoutPrj_kullanicilarInput
  }

  export type prj_kullanicilarUpdateInput = {
    ad_soyad?: StringFieldUpdateOperationsInput | string
    eposta?: StringFieldUpdateOperationsInput | string
    sifre_hash?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guvenlik_sorusu?: NullableStringFieldUpdateOperationsInput | string | null
    guvenlik_cevabi?: NullableStringFieldUpdateOperationsInput | string | null
    prj_projeler?: prj_projelerUpdateManyWithoutPrj_kullanicilarNestedInput
  }

  export type prj_kullanicilarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ad_soyad?: StringFieldUpdateOperationsInput | string
    eposta?: StringFieldUpdateOperationsInput | string
    sifre_hash?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guvenlik_sorusu?: NullableStringFieldUpdateOperationsInput | string | null
    guvenlik_cevabi?: NullableStringFieldUpdateOperationsInput | string | null
    prj_projeler?: prj_projelerUncheckedUpdateManyWithoutPrj_kullanicilarNestedInput
  }

  export type prj_kullanicilarCreateManyInput = {
    id?: number
    ad_soyad: string
    eposta: string
    sifre_hash: string
    rol?: string | null
    kayit_tarihi?: Date | string | null
    guvenlik_sorusu?: string | null
    guvenlik_cevabi?: string | null
  }

  export type prj_kullanicilarUpdateManyMutationInput = {
    ad_soyad?: StringFieldUpdateOperationsInput | string
    eposta?: StringFieldUpdateOperationsInput | string
    sifre_hash?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guvenlik_sorusu?: NullableStringFieldUpdateOperationsInput | string | null
    guvenlik_cevabi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_kullanicilarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ad_soyad?: StringFieldUpdateOperationsInput | string
    eposta?: StringFieldUpdateOperationsInput | string
    sifre_hash?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guvenlik_sorusu?: NullableStringFieldUpdateOperationsInput | string | null
    guvenlik_cevabi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_projelerCreateInput = {
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
    prj_dersler?: prj_derslerCreateNestedOneWithoutPrj_projelerInput
    prj_kullanicilar?: prj_kullanicilarCreateNestedOneWithoutPrj_projelerInput
  }

  export type prj_projelerUncheckedCreateInput = {
    id?: number
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    ders_id?: number | null
    yazar_id?: number | null
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
  }

  export type prj_projelerUpdateInput = {
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
    prj_dersler?: prj_derslerUpdateOneWithoutPrj_projelerNestedInput
    prj_kullanicilar?: prj_kullanicilarUpdateOneWithoutPrj_projelerNestedInput
  }

  export type prj_projelerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    ders_id?: NullableIntFieldUpdateOperationsInput | number | null
    yazar_id?: NullableIntFieldUpdateOperationsInput | number | null
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_projelerCreateManyInput = {
    id?: number
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    ders_id?: number | null
    yazar_id?: number | null
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
  }

  export type prj_projelerUpdateManyMutationInput = {
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_projelerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    ders_id?: NullableIntFieldUpdateOperationsInput | number | null
    yazar_id?: NullableIntFieldUpdateOperationsInput | number | null
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Prj_projelerListRelationFilter = {
    every?: prj_projelerWhereInput
    some?: prj_projelerWhereInput
    none?: prj_projelerWhereInput
  }

  export type prj_projelerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prj_derslerCountOrderByAggregateInput = {
    id?: SortOrder
    ders_adi?: SortOrder
    url_etiketi?: SortOrder
  }

  export type prj_derslerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type prj_derslerMaxOrderByAggregateInput = {
    id?: SortOrder
    ders_adi?: SortOrder
    url_etiketi?: SortOrder
  }

  export type prj_derslerMinOrderByAggregateInput = {
    id?: SortOrder
    ders_adi?: SortOrder
    url_etiketi?: SortOrder
  }

  export type prj_derslerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type prj_kullanicilarCountOrderByAggregateInput = {
    id?: SortOrder
    ad_soyad?: SortOrder
    eposta?: SortOrder
    sifre_hash?: SortOrder
    rol?: SortOrder
    kayit_tarihi?: SortOrder
    guvenlik_sorusu?: SortOrder
    guvenlik_cevabi?: SortOrder
  }

  export type prj_kullanicilarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type prj_kullanicilarMaxOrderByAggregateInput = {
    id?: SortOrder
    ad_soyad?: SortOrder
    eposta?: SortOrder
    sifre_hash?: SortOrder
    rol?: SortOrder
    kayit_tarihi?: SortOrder
    guvenlik_sorusu?: SortOrder
    guvenlik_cevabi?: SortOrder
  }

  export type prj_kullanicilarMinOrderByAggregateInput = {
    id?: SortOrder
    ad_soyad?: SortOrder
    eposta?: SortOrder
    sifre_hash?: SortOrder
    rol?: SortOrder
    kayit_tarihi?: SortOrder
    guvenlik_sorusu?: SortOrder
    guvenlik_cevabi?: SortOrder
  }

  export type prj_kullanicilarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Prj_derslerNullableScalarRelationFilter = {
    is?: prj_derslerWhereInput | null
    isNot?: prj_derslerWhereInput | null
  }

  export type Prj_kullanicilarNullableScalarRelationFilter = {
    is?: prj_kullanicilarWhereInput | null
    isNot?: prj_kullanicilarWhereInput | null
  }

  export type prj_projelerCountOrderByAggregateInput = {
    id?: SortOrder
    baslik?: SortOrder
    ozet?: SortOrder
    icerik?: SortOrder
    kapak_resmi_url?: SortOrder
    detay_fotolari?: SortOrder
    dosya_linkleri?: SortOrder
    ders_id?: SortOrder
    yazar_id?: SortOrder
    durum?: SortOrder
    olusturma_tarihi?: SortOrder
    ad_soyad?: SortOrder
  }

  export type prj_projelerAvgOrderByAggregateInput = {
    id?: SortOrder
    ders_id?: SortOrder
    yazar_id?: SortOrder
  }

  export type prj_projelerMaxOrderByAggregateInput = {
    id?: SortOrder
    baslik?: SortOrder
    ozet?: SortOrder
    icerik?: SortOrder
    kapak_resmi_url?: SortOrder
    ders_id?: SortOrder
    yazar_id?: SortOrder
    durum?: SortOrder
    olusturma_tarihi?: SortOrder
    ad_soyad?: SortOrder
  }

  export type prj_projelerMinOrderByAggregateInput = {
    id?: SortOrder
    baslik?: SortOrder
    ozet?: SortOrder
    icerik?: SortOrder
    kapak_resmi_url?: SortOrder
    ders_id?: SortOrder
    yazar_id?: SortOrder
    durum?: SortOrder
    olusturma_tarihi?: SortOrder
    ad_soyad?: SortOrder
  }

  export type prj_projelerSumOrderByAggregateInput = {
    id?: SortOrder
    ders_id?: SortOrder
    yazar_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type prj_projelerCreateNestedManyWithoutPrj_derslerInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_derslerInput, prj_projelerUncheckedCreateWithoutPrj_derslerInput> | prj_projelerCreateWithoutPrj_derslerInput[] | prj_projelerUncheckedCreateWithoutPrj_derslerInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_derslerInput | prj_projelerCreateOrConnectWithoutPrj_derslerInput[]
    createMany?: prj_projelerCreateManyPrj_derslerInputEnvelope
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
  }

  export type prj_projelerUncheckedCreateNestedManyWithoutPrj_derslerInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_derslerInput, prj_projelerUncheckedCreateWithoutPrj_derslerInput> | prj_projelerCreateWithoutPrj_derslerInput[] | prj_projelerUncheckedCreateWithoutPrj_derslerInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_derslerInput | prj_projelerCreateOrConnectWithoutPrj_derslerInput[]
    createMany?: prj_projelerCreateManyPrj_derslerInputEnvelope
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type prj_projelerUpdateManyWithoutPrj_derslerNestedInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_derslerInput, prj_projelerUncheckedCreateWithoutPrj_derslerInput> | prj_projelerCreateWithoutPrj_derslerInput[] | prj_projelerUncheckedCreateWithoutPrj_derslerInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_derslerInput | prj_projelerCreateOrConnectWithoutPrj_derslerInput[]
    upsert?: prj_projelerUpsertWithWhereUniqueWithoutPrj_derslerInput | prj_projelerUpsertWithWhereUniqueWithoutPrj_derslerInput[]
    createMany?: prj_projelerCreateManyPrj_derslerInputEnvelope
    set?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    disconnect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    delete?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    update?: prj_projelerUpdateWithWhereUniqueWithoutPrj_derslerInput | prj_projelerUpdateWithWhereUniqueWithoutPrj_derslerInput[]
    updateMany?: prj_projelerUpdateManyWithWhereWithoutPrj_derslerInput | prj_projelerUpdateManyWithWhereWithoutPrj_derslerInput[]
    deleteMany?: prj_projelerScalarWhereInput | prj_projelerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type prj_projelerUncheckedUpdateManyWithoutPrj_derslerNestedInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_derslerInput, prj_projelerUncheckedCreateWithoutPrj_derslerInput> | prj_projelerCreateWithoutPrj_derslerInput[] | prj_projelerUncheckedCreateWithoutPrj_derslerInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_derslerInput | prj_projelerCreateOrConnectWithoutPrj_derslerInput[]
    upsert?: prj_projelerUpsertWithWhereUniqueWithoutPrj_derslerInput | prj_projelerUpsertWithWhereUniqueWithoutPrj_derslerInput[]
    createMany?: prj_projelerCreateManyPrj_derslerInputEnvelope
    set?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    disconnect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    delete?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    update?: prj_projelerUpdateWithWhereUniqueWithoutPrj_derslerInput | prj_projelerUpdateWithWhereUniqueWithoutPrj_derslerInput[]
    updateMany?: prj_projelerUpdateManyWithWhereWithoutPrj_derslerInput | prj_projelerUpdateManyWithWhereWithoutPrj_derslerInput[]
    deleteMany?: prj_projelerScalarWhereInput | prj_projelerScalarWhereInput[]
  }

  export type prj_projelerCreateNestedManyWithoutPrj_kullanicilarInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_kullanicilarInput, prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput> | prj_projelerCreateWithoutPrj_kullanicilarInput[] | prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput | prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput[]
    createMany?: prj_projelerCreateManyPrj_kullanicilarInputEnvelope
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
  }

  export type prj_projelerUncheckedCreateNestedManyWithoutPrj_kullanicilarInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_kullanicilarInput, prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput> | prj_projelerCreateWithoutPrj_kullanicilarInput[] | prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput | prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput[]
    createMany?: prj_projelerCreateManyPrj_kullanicilarInputEnvelope
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type prj_projelerUpdateManyWithoutPrj_kullanicilarNestedInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_kullanicilarInput, prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput> | prj_projelerCreateWithoutPrj_kullanicilarInput[] | prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput | prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput[]
    upsert?: prj_projelerUpsertWithWhereUniqueWithoutPrj_kullanicilarInput | prj_projelerUpsertWithWhereUniqueWithoutPrj_kullanicilarInput[]
    createMany?: prj_projelerCreateManyPrj_kullanicilarInputEnvelope
    set?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    disconnect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    delete?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    update?: prj_projelerUpdateWithWhereUniqueWithoutPrj_kullanicilarInput | prj_projelerUpdateWithWhereUniqueWithoutPrj_kullanicilarInput[]
    updateMany?: prj_projelerUpdateManyWithWhereWithoutPrj_kullanicilarInput | prj_projelerUpdateManyWithWhereWithoutPrj_kullanicilarInput[]
    deleteMany?: prj_projelerScalarWhereInput | prj_projelerScalarWhereInput[]
  }

  export type prj_projelerUncheckedUpdateManyWithoutPrj_kullanicilarNestedInput = {
    create?: XOR<prj_projelerCreateWithoutPrj_kullanicilarInput, prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput> | prj_projelerCreateWithoutPrj_kullanicilarInput[] | prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput[]
    connectOrCreate?: prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput | prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput[]
    upsert?: prj_projelerUpsertWithWhereUniqueWithoutPrj_kullanicilarInput | prj_projelerUpsertWithWhereUniqueWithoutPrj_kullanicilarInput[]
    createMany?: prj_projelerCreateManyPrj_kullanicilarInputEnvelope
    set?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    disconnect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    delete?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    connect?: prj_projelerWhereUniqueInput | prj_projelerWhereUniqueInput[]
    update?: prj_projelerUpdateWithWhereUniqueWithoutPrj_kullanicilarInput | prj_projelerUpdateWithWhereUniqueWithoutPrj_kullanicilarInput[]
    updateMany?: prj_projelerUpdateManyWithWhereWithoutPrj_kullanicilarInput | prj_projelerUpdateManyWithWhereWithoutPrj_kullanicilarInput[]
    deleteMany?: prj_projelerScalarWhereInput | prj_projelerScalarWhereInput[]
  }

  export type prj_projelerCreatedetay_fotolariInput = {
    set: string[]
  }

  export type prj_projelerCreatedosya_linkleriInput = {
    set: string[]
  }

  export type prj_derslerCreateNestedOneWithoutPrj_projelerInput = {
    create?: XOR<prj_derslerCreateWithoutPrj_projelerInput, prj_derslerUncheckedCreateWithoutPrj_projelerInput>
    connectOrCreate?: prj_derslerCreateOrConnectWithoutPrj_projelerInput
    connect?: prj_derslerWhereUniqueInput
  }

  export type prj_kullanicilarCreateNestedOneWithoutPrj_projelerInput = {
    create?: XOR<prj_kullanicilarCreateWithoutPrj_projelerInput, prj_kullanicilarUncheckedCreateWithoutPrj_projelerInput>
    connectOrCreate?: prj_kullanicilarCreateOrConnectWithoutPrj_projelerInput
    connect?: prj_kullanicilarWhereUniqueInput
  }

  export type prj_projelerUpdatedetay_fotolariInput = {
    set?: string[]
    push?: string | string[]
  }

  export type prj_projelerUpdatedosya_linkleriInput = {
    set?: string[]
    push?: string | string[]
  }

  export type prj_derslerUpdateOneWithoutPrj_projelerNestedInput = {
    create?: XOR<prj_derslerCreateWithoutPrj_projelerInput, prj_derslerUncheckedCreateWithoutPrj_projelerInput>
    connectOrCreate?: prj_derslerCreateOrConnectWithoutPrj_projelerInput
    upsert?: prj_derslerUpsertWithoutPrj_projelerInput
    disconnect?: prj_derslerWhereInput | boolean
    delete?: prj_derslerWhereInput | boolean
    connect?: prj_derslerWhereUniqueInput
    update?: XOR<XOR<prj_derslerUpdateToOneWithWhereWithoutPrj_projelerInput, prj_derslerUpdateWithoutPrj_projelerInput>, prj_derslerUncheckedUpdateWithoutPrj_projelerInput>
  }

  export type prj_kullanicilarUpdateOneWithoutPrj_projelerNestedInput = {
    create?: XOR<prj_kullanicilarCreateWithoutPrj_projelerInput, prj_kullanicilarUncheckedCreateWithoutPrj_projelerInput>
    connectOrCreate?: prj_kullanicilarCreateOrConnectWithoutPrj_projelerInput
    upsert?: prj_kullanicilarUpsertWithoutPrj_projelerInput
    disconnect?: prj_kullanicilarWhereInput | boolean
    delete?: prj_kullanicilarWhereInput | boolean
    connect?: prj_kullanicilarWhereUniqueInput
    update?: XOR<XOR<prj_kullanicilarUpdateToOneWithWhereWithoutPrj_projelerInput, prj_kullanicilarUpdateWithoutPrj_projelerInput>, prj_kullanicilarUncheckedUpdateWithoutPrj_projelerInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type prj_projelerCreateWithoutPrj_derslerInput = {
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
    prj_kullanicilar?: prj_kullanicilarCreateNestedOneWithoutPrj_projelerInput
  }

  export type prj_projelerUncheckedCreateWithoutPrj_derslerInput = {
    id?: number
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    yazar_id?: number | null
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
  }

  export type prj_projelerCreateOrConnectWithoutPrj_derslerInput = {
    where: prj_projelerWhereUniqueInput
    create: XOR<prj_projelerCreateWithoutPrj_derslerInput, prj_projelerUncheckedCreateWithoutPrj_derslerInput>
  }

  export type prj_projelerCreateManyPrj_derslerInputEnvelope = {
    data: prj_projelerCreateManyPrj_derslerInput | prj_projelerCreateManyPrj_derslerInput[]
    skipDuplicates?: boolean
  }

  export type prj_projelerUpsertWithWhereUniqueWithoutPrj_derslerInput = {
    where: prj_projelerWhereUniqueInput
    update: XOR<prj_projelerUpdateWithoutPrj_derslerInput, prj_projelerUncheckedUpdateWithoutPrj_derslerInput>
    create: XOR<prj_projelerCreateWithoutPrj_derslerInput, prj_projelerUncheckedCreateWithoutPrj_derslerInput>
  }

  export type prj_projelerUpdateWithWhereUniqueWithoutPrj_derslerInput = {
    where: prj_projelerWhereUniqueInput
    data: XOR<prj_projelerUpdateWithoutPrj_derslerInput, prj_projelerUncheckedUpdateWithoutPrj_derslerInput>
  }

  export type prj_projelerUpdateManyWithWhereWithoutPrj_derslerInput = {
    where: prj_projelerScalarWhereInput
    data: XOR<prj_projelerUpdateManyMutationInput, prj_projelerUncheckedUpdateManyWithoutPrj_derslerInput>
  }

  export type prj_projelerScalarWhereInput = {
    AND?: prj_projelerScalarWhereInput | prj_projelerScalarWhereInput[]
    OR?: prj_projelerScalarWhereInput[]
    NOT?: prj_projelerScalarWhereInput | prj_projelerScalarWhereInput[]
    id?: IntFilter<"prj_projeler"> | number
    baslik?: StringFilter<"prj_projeler"> | string
    ozet?: StringNullableFilter<"prj_projeler"> | string | null
    icerik?: StringNullableFilter<"prj_projeler"> | string | null
    kapak_resmi_url?: StringNullableFilter<"prj_projeler"> | string | null
    detay_fotolari?: StringNullableListFilter<"prj_projeler">
    dosya_linkleri?: StringNullableListFilter<"prj_projeler">
    ders_id?: IntNullableFilter<"prj_projeler"> | number | null
    yazar_id?: IntNullableFilter<"prj_projeler"> | number | null
    durum?: StringNullableFilter<"prj_projeler"> | string | null
    olusturma_tarihi?: DateTimeNullableFilter<"prj_projeler"> | Date | string | null
    ad_soyad?: StringNullableFilter<"prj_projeler"> | string | null
  }

  export type prj_projelerCreateWithoutPrj_kullanicilarInput = {
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
    prj_dersler?: prj_derslerCreateNestedOneWithoutPrj_projelerInput
  }

  export type prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput = {
    id?: number
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    ders_id?: number | null
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
  }

  export type prj_projelerCreateOrConnectWithoutPrj_kullanicilarInput = {
    where: prj_projelerWhereUniqueInput
    create: XOR<prj_projelerCreateWithoutPrj_kullanicilarInput, prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput>
  }

  export type prj_projelerCreateManyPrj_kullanicilarInputEnvelope = {
    data: prj_projelerCreateManyPrj_kullanicilarInput | prj_projelerCreateManyPrj_kullanicilarInput[]
    skipDuplicates?: boolean
  }

  export type prj_projelerUpsertWithWhereUniqueWithoutPrj_kullanicilarInput = {
    where: prj_projelerWhereUniqueInput
    update: XOR<prj_projelerUpdateWithoutPrj_kullanicilarInput, prj_projelerUncheckedUpdateWithoutPrj_kullanicilarInput>
    create: XOR<prj_projelerCreateWithoutPrj_kullanicilarInput, prj_projelerUncheckedCreateWithoutPrj_kullanicilarInput>
  }

  export type prj_projelerUpdateWithWhereUniqueWithoutPrj_kullanicilarInput = {
    where: prj_projelerWhereUniqueInput
    data: XOR<prj_projelerUpdateWithoutPrj_kullanicilarInput, prj_projelerUncheckedUpdateWithoutPrj_kullanicilarInput>
  }

  export type prj_projelerUpdateManyWithWhereWithoutPrj_kullanicilarInput = {
    where: prj_projelerScalarWhereInput
    data: XOR<prj_projelerUpdateManyMutationInput, prj_projelerUncheckedUpdateManyWithoutPrj_kullanicilarInput>
  }

  export type prj_derslerCreateWithoutPrj_projelerInput = {
    ders_adi: string
    url_etiketi: string
  }

  export type prj_derslerUncheckedCreateWithoutPrj_projelerInput = {
    id?: number
    ders_adi: string
    url_etiketi: string
  }

  export type prj_derslerCreateOrConnectWithoutPrj_projelerInput = {
    where: prj_derslerWhereUniqueInput
    create: XOR<prj_derslerCreateWithoutPrj_projelerInput, prj_derslerUncheckedCreateWithoutPrj_projelerInput>
  }

  export type prj_kullanicilarCreateWithoutPrj_projelerInput = {
    ad_soyad: string
    eposta: string
    sifre_hash: string
    rol?: string | null
    kayit_tarihi?: Date | string | null
    guvenlik_sorusu?: string | null
    guvenlik_cevabi?: string | null
  }

  export type prj_kullanicilarUncheckedCreateWithoutPrj_projelerInput = {
    id?: number
    ad_soyad: string
    eposta: string
    sifre_hash: string
    rol?: string | null
    kayit_tarihi?: Date | string | null
    guvenlik_sorusu?: string | null
    guvenlik_cevabi?: string | null
  }

  export type prj_kullanicilarCreateOrConnectWithoutPrj_projelerInput = {
    where: prj_kullanicilarWhereUniqueInput
    create: XOR<prj_kullanicilarCreateWithoutPrj_projelerInput, prj_kullanicilarUncheckedCreateWithoutPrj_projelerInput>
  }

  export type prj_derslerUpsertWithoutPrj_projelerInput = {
    update: XOR<prj_derslerUpdateWithoutPrj_projelerInput, prj_derslerUncheckedUpdateWithoutPrj_projelerInput>
    create: XOR<prj_derslerCreateWithoutPrj_projelerInput, prj_derslerUncheckedCreateWithoutPrj_projelerInput>
    where?: prj_derslerWhereInput
  }

  export type prj_derslerUpdateToOneWithWhereWithoutPrj_projelerInput = {
    where?: prj_derslerWhereInput
    data: XOR<prj_derslerUpdateWithoutPrj_projelerInput, prj_derslerUncheckedUpdateWithoutPrj_projelerInput>
  }

  export type prj_derslerUpdateWithoutPrj_projelerInput = {
    ders_adi?: StringFieldUpdateOperationsInput | string
    url_etiketi?: StringFieldUpdateOperationsInput | string
  }

  export type prj_derslerUncheckedUpdateWithoutPrj_projelerInput = {
    id?: IntFieldUpdateOperationsInput | number
    ders_adi?: StringFieldUpdateOperationsInput | string
    url_etiketi?: StringFieldUpdateOperationsInput | string
  }

  export type prj_kullanicilarUpsertWithoutPrj_projelerInput = {
    update: XOR<prj_kullanicilarUpdateWithoutPrj_projelerInput, prj_kullanicilarUncheckedUpdateWithoutPrj_projelerInput>
    create: XOR<prj_kullanicilarCreateWithoutPrj_projelerInput, prj_kullanicilarUncheckedCreateWithoutPrj_projelerInput>
    where?: prj_kullanicilarWhereInput
  }

  export type prj_kullanicilarUpdateToOneWithWhereWithoutPrj_projelerInput = {
    where?: prj_kullanicilarWhereInput
    data: XOR<prj_kullanicilarUpdateWithoutPrj_projelerInput, prj_kullanicilarUncheckedUpdateWithoutPrj_projelerInput>
  }

  export type prj_kullanicilarUpdateWithoutPrj_projelerInput = {
    ad_soyad?: StringFieldUpdateOperationsInput | string
    eposta?: StringFieldUpdateOperationsInput | string
    sifre_hash?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guvenlik_sorusu?: NullableStringFieldUpdateOperationsInput | string | null
    guvenlik_cevabi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_kullanicilarUncheckedUpdateWithoutPrj_projelerInput = {
    id?: IntFieldUpdateOperationsInput | number
    ad_soyad?: StringFieldUpdateOperationsInput | string
    eposta?: StringFieldUpdateOperationsInput | string
    sifre_hash?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guvenlik_sorusu?: NullableStringFieldUpdateOperationsInput | string | null
    guvenlik_cevabi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_projelerCreateManyPrj_derslerInput = {
    id?: number
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    yazar_id?: number | null
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
  }

  export type prj_projelerUpdateWithoutPrj_derslerInput = {
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
    prj_kullanicilar?: prj_kullanicilarUpdateOneWithoutPrj_projelerNestedInput
  }

  export type prj_projelerUncheckedUpdateWithoutPrj_derslerInput = {
    id?: IntFieldUpdateOperationsInput | number
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    yazar_id?: NullableIntFieldUpdateOperationsInput | number | null
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_projelerUncheckedUpdateManyWithoutPrj_derslerInput = {
    id?: IntFieldUpdateOperationsInput | number
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    yazar_id?: NullableIntFieldUpdateOperationsInput | number | null
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_projelerCreateManyPrj_kullanicilarInput = {
    id?: number
    baslik: string
    ozet?: string | null
    icerik?: string | null
    kapak_resmi_url?: string | null
    detay_fotolari?: prj_projelerCreatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerCreatedosya_linkleriInput | string[]
    ders_id?: number | null
    durum?: string | null
    olusturma_tarihi?: Date | string | null
    ad_soyad?: string | null
  }

  export type prj_projelerUpdateWithoutPrj_kullanicilarInput = {
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
    prj_dersler?: prj_derslerUpdateOneWithoutPrj_projelerNestedInput
  }

  export type prj_projelerUncheckedUpdateWithoutPrj_kullanicilarInput = {
    id?: IntFieldUpdateOperationsInput | number
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    ders_id?: NullableIntFieldUpdateOperationsInput | number | null
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prj_projelerUncheckedUpdateManyWithoutPrj_kullanicilarInput = {
    id?: IntFieldUpdateOperationsInput | number
    baslik?: StringFieldUpdateOperationsInput | string
    ozet?: NullableStringFieldUpdateOperationsInput | string | null
    icerik?: NullableStringFieldUpdateOperationsInput | string | null
    kapak_resmi_url?: NullableStringFieldUpdateOperationsInput | string | null
    detay_fotolari?: prj_projelerUpdatedetay_fotolariInput | string[]
    dosya_linkleri?: prj_projelerUpdatedosya_linkleriInput | string[]
    ders_id?: NullableIntFieldUpdateOperationsInput | number | null
    durum?: NullableStringFieldUpdateOperationsInput | string | null
    olusturma_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ad_soyad?: NullableStringFieldUpdateOperationsInput | string | null
  }



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