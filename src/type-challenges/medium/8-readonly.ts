import { Alike, Expect } from '@type-challenges/utils'

// answers
// 1.use type defalut value
// 2.use Omit<T, K>
type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P]
} & Omit<T, K>

type test = MyReadonly2<Todo1>

// test cases
type cases = [
    Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
    Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
    title: string
    description?: string
    completed: boolean
}

interface Todo2 {
    readonly title: string
    description?: string
    completed: boolean
}

interface Expected {
    readonly title: string
    readonly description?: string
    completed: boolean
}