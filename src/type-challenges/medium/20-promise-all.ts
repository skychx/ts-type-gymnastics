import { Equal, Expect } from '@type-challenges/utils';

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll([promise1, promise2, promise3]);

// answer
declare function PromiseAll<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
    Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
    Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
    Expect<Equal<typeof promiseAllTest4, Promise<[number, number, string]>>>
];
