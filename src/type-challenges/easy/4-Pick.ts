import { Equal, Expect } from '@type-challenges/utils';

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Expected1 {
    title: string;
}

interface Expected2 {
    title: string;
    completed: boolean;
}

// answers
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
];
