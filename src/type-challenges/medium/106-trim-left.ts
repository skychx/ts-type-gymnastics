import { Equal, Expect } from '@type-challenges/utils';

// answer

// whitespace chars
type WC = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${WC}${infer Rest}` ? TrimLeft<Rest> : S;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<TrimLeft<'str'>, 'str'>>,
    Expect<Equal<TrimLeft<' str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
    Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>
];
