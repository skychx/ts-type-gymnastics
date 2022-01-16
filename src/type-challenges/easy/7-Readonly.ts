import { Equal, Expect } from '@type-challenges/utils';

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}

// answers
type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

// test cases
// @ts-ignore
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];
