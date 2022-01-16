import { Equal, Expect } from '@type-challenges/utils'

// answer
type ReplaceAll<S extends string, From extends string, To extends string> =
From extends ''
    ? S
    : S extends `${infer Front}${From}${infer Last}`
        ? `${Front}${To}${ReplaceAll<Last, From, To>}` // use recursion
        : S;

// test cases
type cases = [
    Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
    Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
    Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
    Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
    Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
    Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
    Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]