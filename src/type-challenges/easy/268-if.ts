import { Equal, Expect } from '@type-challenges/utils'

// answers
type If<C extends boolean, T, F> = C extends null
    ? never
    : C extends true ? T : F

// test cases
type cases = [
    Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
    Expect<Equal<If<false, 'a', 2>, 2>>,
]


type error = If<null, 'a', 'b'>