/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
      total += i + 1
      sum += nums[i]
  }

  return total - sum
};
