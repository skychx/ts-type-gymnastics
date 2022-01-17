import { Equal, Expect } from '@type-challenges/utils';

type Foo = {
    name: string;
    age: string;
};

type Bar = {
    name: string;
    age: string;
    gender: number;
};

/**
 * answer1: use `extends` and `Exclude`
 *
 * @url https://juejin.cn/post/6997266181082054664
 */
type MyObject = Record<string, unknown>;
type Diff<O extends MyObject, O1 extends MyObject> = O extends O1
    ? { [K in Exclude<keyof O, keyof O1>]: O[K] }
    : { [K in Exclude<keyof O1, keyof O>]: O1[K] };

// answer2: use `Pick` and `Exclude`
type Diff2<O extends MyObject, O1 extends MyObject> = Pick<O & O1, Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>>;

// test cases
// @ts-ignore
type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>, Expect<Equal<Diff<Bar, Foo>, { gender: number }>>];

// test cases
// @ts-ignore
type cases = [Expect<Equal<Diff2<Foo, Bar>, { gender: number }>>, Expect<Equal<Diff2<Bar, Foo>, { gender: number }>>];
