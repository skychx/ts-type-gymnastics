/* eslint @typescript-eslint/no-explicit-any: off */
import { Equal, Expect } from '@type-challenges/utils';

// @ts-ignore
const foo = (arg1: string, arg2: number): void => {};
// @ts-ignore
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

// answers
type MyParameters<T extends (...args: any[]) => unknown> = T extends (...args: infer P) => unknown ? P : never;

// test cases
// @ts-ignore
type cases = [Expect<Equal<MyParameters<typeof foo>, [string, number]>>, Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>, Expect<Equal<MyParameters<typeof baz>, []>>];
