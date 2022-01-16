import { Equal, Expect } from '@type-challenges/utils';

// answer
export type StringToUnion<S extends string> = S extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<StringToUnion<''>, never>>,
    Expect<Equal<StringToUnion<'t'>, 't'>>,
    Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
    Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>
];
