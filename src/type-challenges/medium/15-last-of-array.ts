import { Equal, Expect } from '@type-challenges/utils'

// answer
type Last<T extends unknown[]> = T extends [...infer R, infer L] ? L : never;

// test cases
type cases = [
    Expect<Equal<Last<[3, 2, 1]>, 1>>,
    Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]