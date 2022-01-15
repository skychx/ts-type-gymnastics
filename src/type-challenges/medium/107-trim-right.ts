import { Equal, Expect } from '@type-challenges/utils'

type WC = ' ' | '\n' | '\t';

// answer
type TrimRight<S extends string> = S extends `${infer Rest}${WC}` ? TrimRight<Rest> : S;

// test cases
type cases = [
    Expect<Equal<TrimRight<'str'>, 'str'>>,
    Expect<Equal<TrimRight<'str '>, 'str'>>,
    Expect<Equal<TrimRight<'str     '>, 'str'>>,
    Expect<Equal<TrimRight<'     str     '>, '     str'>>,
    Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
]