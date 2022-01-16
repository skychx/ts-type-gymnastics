import { Equal, Expect } from '@type-challenges/utils';

// answers
type Concat<T extends unknown[], P extends unknown[]> = [...T, ...P];

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>
];
