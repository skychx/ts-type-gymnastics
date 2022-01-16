import { Equal, Expect } from '@type-challenges/utils';

// answer
type NumberLike = number | bigint | string;
type Absolute<T extends NumberLike> = `${T}` extends `-${infer N}` ? N : `${T}`;

// test cases
// @ts-ignore
type cases = [
    Expect<Equal<Absolute<0>, '0'>>,
    Expect<Equal<Absolute<-0>, '0'>>,
    Expect<Equal<Absolute<10>, '10'>>,
    Expect<Equal<Absolute<-5>, '5'>>,
    Expect<Equal<Absolute<'0'>, '0'>>,
    Expect<Equal<Absolute<'-0'>, '0'>>,
    Expect<Equal<Absolute<'10'>, '10'>>,
    Expect<Equal<Absolute<'-5'>, '5'>>,
    Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
    Expect<Equal<Absolute<9_999n>, '9999'>>
];
