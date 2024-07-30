/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] > sum) sum = nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};
