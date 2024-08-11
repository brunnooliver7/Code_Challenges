// TC: O(N)
// SC: O(1)

export function fib(n: number): number {
  let last = 0
  let curr = 1

  for (let i = 1; i < n; i++) {
    const temp = curr
    curr = curr + last
    last = temp
  }

  return curr
}
