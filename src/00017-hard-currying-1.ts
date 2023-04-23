// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true,
);
const curried3 = Currying(() => true);

type cases = [
  Expect<Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>>,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string,
      ) => (
        b: number,
      ) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >,
  Expect<Equal<typeof curried3, () => true>>,
];

// ============= Your Code Here =============
declare function Currying<T extends Function>(
  fn: T,
): T extends (...args: infer Args) => infer Return
  ? Args extends never[]
    ? () => Return
    : Curried<Args, Return>
  : never;

type Curried<Args extends any[] = any[], Return = any> = Args extends [infer Fn, ...infer Rest]
  ? (a: Fn) => Rest extends never ? Return : Curried<Rest, Return>
  : Return;
