// TC: O(N)
// SC: O(N)

export function fib(n: number): number {
  let res = Array().fill(0, 0, n);

  res[0] = 1;
  res[1] = 1;

  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }

  return res[n - 1];
}
