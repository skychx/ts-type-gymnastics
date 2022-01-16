import { Equal, Expect } from '@type-challenges/utils';

// answers
type TupleToUnion<T extends unknown[]> = T[number];

// test cases
// @ts-ignore
type cases = [Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>, Expect<Equal<TupleToUnion<[123]>, 123>>];
