// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
];

// ============= Your Code Here =============
type GetOptional<T> = Omit<T, RemovesOptionalUndefined<T>>;

type RemovesOptionalNotUndefined<T> = { [K in keyof T]-?: undefined extends T[K] ? never : T[K] };
type RemovesOptionalUndefined<T> = RemovesOptionalNotUndefined<{
  [K in keyof T]: T[K] extends undefined ? K : K;
}>[keyof T];
