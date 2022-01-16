import { Equal, Expect } from '@type-challenges/utils';

type Foo = {
    a: number;
    b: string;
};
type Bar = {
    b: number;
    c: boolean;
};

// answer
type MyObject = Record<string, unknown>;
type Merge<F extends MyObject, B extends MyObject> = {
    [K in keyof F | keyof B]: K extends keyof B ? B[K] : K extends keyof F ? F[K] : never;
};

type test = Merge<Foo, Bar>;

// test cases
// @ts-ignore
type cases = [
    Expect<
        Equal<
            Merge<Foo, Bar>,
            {
                a: number;
                b: number;
                c: boolean;
            }
        >
    >
];
