import { Equal, Expect } from '@type-challenges/utils';

// answer
type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
    Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
    Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
];
