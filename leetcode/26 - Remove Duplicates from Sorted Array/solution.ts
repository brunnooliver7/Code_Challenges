function removeDuplicates(nums: number[]): number {
  let set = new Set(nums);

  const l = nums.length;
  let index = 0;

  set.forEach((v) => {
    nums[index] = v;
    index++;
  });

  for (let i = index; i < l; i++) {
    nums[i] = Number.POSITIVE_INFINITY;
  }

  nums.sort((a, b) => a - b);

  return set.size;
}
