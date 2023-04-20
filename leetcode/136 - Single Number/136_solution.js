/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.find((n) => nums.filter((m) => n === m).length === 1);
};
