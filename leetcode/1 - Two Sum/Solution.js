/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let n1 = nums[i];
      let n2 = nums[j];
      if (n1 + n2 === target) {
        return [i, j];
      }
    }
  }
};