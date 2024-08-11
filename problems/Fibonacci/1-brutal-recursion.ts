// TC: O(2^N)
// SC: O(?)

let nCalls = 0;

export function fib(n: number): number {
  nCalls++;

  if (n == 0) return 0;
  if (n == 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

export { nCalls };
