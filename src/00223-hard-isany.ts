// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
];

// ============= Your Code Here =============
type IsAny<T> = true extends false & T ? true : false;
type IsAny2<T> = 0 extends 1 & T ? true : false;
type IsAny3<T> = '' extends 'a' & T ? true : false;
type IsAny4<T> = `` extends `a` & T ? true : false;
type IsAny5<T> = [] extends [1] & T ? true : false;
type IsAny6<T> = {} extends [1] & T ? true : false;
type IsAny7<T> = {} extends { x: 'a' } & T ? true : false;
type IsAny8<T> = 0 extends '' & T ? true : false;
