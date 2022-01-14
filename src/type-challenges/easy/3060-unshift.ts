import { Equal, Expect } from '@type-challenges/utils'

// answers
type Unshift<T extends unknown[], P> = [P, ...T]

// test cases
type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2,]>>,
    Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]