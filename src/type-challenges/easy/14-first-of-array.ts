import { Equal, Expect } from '@type-challenges/utils'

// answers
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First2<T extends any[]> = T extends [] ? never : T[0];
// use infer
type First3<T extends any[]> = T extends [infer a, ...infer b] ? a : never;


// test cases
type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>
]

type cases2 = [
    Expect<Equal<First2<[3, 2, 1]>, 3>>,
    Expect<Equal<First2<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First2<[]>, never>>,
    Expect<Equal<First2<[undefined]>, undefined>>
]

type cases3 = [
    Expect<Equal<First3<[3, 2, 1]>, 3>>,
    Expect<Equal<First3<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First3<[]>, never>>,
    Expect<Equal<First3<[undefined]>, undefined>>
]