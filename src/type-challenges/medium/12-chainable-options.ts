

import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()

// answer
type Chainable<T extends Record<string, unknown> = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>,
    get(): T,
}

// test cases
type cases = [
    Expect<Alike<typeof result, Expected>>
]

type Expected = {
    foo: number
    bar: {
        value: string
    }
    name: string
}