import { Equal, Expect } from '@type-challenges/utils';

// answer
// use infer and recursion
type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest] ? (First extends unknown[] ? [...Flatten<First>, ...Flatten<Rest>] : [First, ...Flatten<Rest>]) : [];

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<Flatten<[]>, []>>,
    Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
    Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
    Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
];
