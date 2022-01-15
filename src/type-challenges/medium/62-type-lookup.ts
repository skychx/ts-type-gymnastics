import { Equal, Expect } from '@type-challenges/utils'

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

// answers
type LookUp<U extends { type: string }, T extends string> = U extends { type: T } ? U : never;

// test cases
type cases = [
    Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
    Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]