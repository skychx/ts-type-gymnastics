import { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

// answer
// use infer
type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer R
    ? (...args: [...Args, A]) => R
    : never;


// test cases
type cases = [
    Expect<Equal<Case1, Result1>>,
    Expect<Equal<Case2, Result2>>,
]