import { Equal, Expect } from '@type-challenges/utils'

// answers
type Pop<T extends unknown[]> = T extends [...infer L, infer R] ? L : never;

// test cases
type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<['a', 'b', 'c', 'd',]>, ['a', 'b', 'c']>>,
]