import { Equal, Expect } from '@type-challenges/utils'

// answer
// use recursion
type Permutation<T, U = T> = [T] extends [never]
? []
: T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : []

// test cases
type cases = [
    Expect<Equal<Permutation<'A'>, ['A']>>,
    Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
    Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
    Expect<Equal<Permutation<never>, []>>,
]