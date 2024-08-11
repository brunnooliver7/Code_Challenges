// TC: O(N)
// SC: O(N)

let nCalls = 0;

let map: Map<number, number> = new Map();

export function fib(n: number): number {
  nCalls++;

  if (n == 0) return 0;
  if (n == 1) return 1;

  if (map.has(n)) return map.get(n)!;

  const n1 = fib(n - 1);
  const n2 = fib(n - 2);

  map.set(n, n1 + n2);

  return map.get(n)!;
}

export { nCalls };
