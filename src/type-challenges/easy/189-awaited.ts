import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

// answers
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R>
    ? (R extends Promise<unknown> ? MyAwaited<R> : R) // use recursion
    : never;

// test cases
type cases = [
    Expect<Equal<MyAwaited<X>, string>>,
    Expect<Equal<MyAwaited<Y>, { field: number }>>,
    Expect<Equal<MyAwaited<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>