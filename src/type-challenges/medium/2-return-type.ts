/* eslint @typescript-eslint/no-explicit-any: off */
import { Equal, Expect } from '@type-challenges/utils';

type ComplexObject = {
    a: [12, 'foo'];
    bar: 'hello';
    prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
// @ts-ignore
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

// answers
type MyReturnType<T extends (...args: any[]) => unknown> = T extends (...args: any[]) => infer R ? R : never;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<string, MyReturnType<() => string>>>,
    Expect<Equal<123, MyReturnType<() => 123>>>,
    Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
    Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
];
