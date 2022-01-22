import { Equal, Expect } from '@type-challenges/utils';

// answer
type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
    Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
    Expect<Equal<EndsWith<'abc', 'd'>, false>>,
];
