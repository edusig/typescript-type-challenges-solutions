// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
];

// ============= Your Code Here =============
type TrimSymbols = ' ' | '\t' | '\n';
type Trim<S extends string> = S extends `${TrimSymbols}${infer rest}`
  ? Trim<rest>
  : S extends `${infer rest}${TrimSymbols}`
  ? Trim<rest>
  : S;
