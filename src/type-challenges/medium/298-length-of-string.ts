import { Equal, Expect } from '@type-challenges/utils';

// answer
// TIPS: S['length'] will return number, A['length'] will return specific figures
type LengthOfString<S extends string, A extends unknown[] = []> = S extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [First, ...A]> : A['length'];

// test cases
// @ts-ignore
type cases = [Expect<Equal<LengthOfString<''>, 0>>, Expect<Equal<LengthOfString<'kumiko'>, 6>>, Expect<Equal<LengthOfString<'reina'>, 5>>, Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>];
