import { Equal, Expect } from '@type-challenges/utils';
import { StringToUnion } from "./531-string-to-union";

// answer
type UpperCases = StringToUnion<'ABCDEFGHIJKLMNOPQRSTUVXYZ'>
type KebabCase<Text extends string, Result extends string = ''> =
Text extends `${infer First}${infer Rest}`
    ? First extends UpperCases
        ? Result extends ''
            ? KebabCase<Rest, `${Result}${Lowercase<First>}`>
            : KebabCase<Rest, `${Result}-${Lowercase<First>}`>
        : KebabCase<Rest, `${Result}${Lowercase<First>}`>
    : Result

// test cases
type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
]