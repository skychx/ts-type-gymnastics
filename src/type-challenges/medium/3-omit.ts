import { Equal, Expect } from '@type-challenges/utils';

// answers
type MyOmit<T, U> = {
    // use Exclude: Exclude from T those types that are assignable to U
    [K in Exclude<keyof T, U>]: T[K];
};

// test cases
// @ts-ignore
type cases = [Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>, Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>];

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Expected1 {
    title: string;
    completed: boolean;
}

interface Expected2 {
    title: string;
}
