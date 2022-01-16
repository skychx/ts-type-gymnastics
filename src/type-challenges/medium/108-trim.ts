import { Equal, Expect } from '@type-challenges/utils';

/**
 * answers
 */
type WC = ' ' | '\n' | '\t';

// answer 1
type TrimLeft<S extends string> = S extends `${WC}${infer Rest}` ? TrimLeft<Rest> : S;
type TrimRight<S extends string> = S extends `${infer Rest}${WC}` ? TrimRight<Rest> : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

// answer 2
type Trim2<S extends string> = S extends `${WC}${infer Rest}` | `${infer Rest}${WC}` ? Trim2<Rest> : S;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<Trim<'str'>, 'str'>>,
    Expect<Equal<Trim<' str'>, 'str'>>,
    Expect<Equal<Trim<'     str'>, 'str'>>,
    Expect<Equal<Trim<'str   '>, 'str'>>,
    Expect<Equal<Trim<'     str     '>, 'str'>>,
    Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
];

// @ts-ignore
type cases2 = [
    Expect<Equal<Trim2<'str'>, 'str'>>,
    Expect<Equal<Trim2<' str'>, 'str'>>,
    Expect<Equal<Trim2<'     str'>, 'str'>>,
    Expect<Equal<Trim2<'str   '>, 'str'>>,
    Expect<Equal<Trim2<'     str     '>, 'str'>>,
    Expect<Equal<Trim2<'   \n\t foo bar \t'>, 'foo bar'>>,
];
