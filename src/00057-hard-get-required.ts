// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
];

// ============= Your Code Here =============
type RemovesOptionalNotUndefined<T> = { [K in keyof T]-?: undefined extends T[K] ? never : T[K] };
type RemovesOptionalUndefined<T> = RemovesOptionalNotUndefined<{
  [K in keyof T]: T[K] extends undefined ? K : K;
}>[keyof T];
type GetRequired<T> = {
  [K in RemovesOptionalUndefined<T>]: T[K];
};
