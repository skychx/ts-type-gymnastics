import { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

// answers
type TupleToObject<T extends readonly string[]> = {
    [K in T[number]]: K;
};

// test cases
// @ts-ignore
type cases = [Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>];
