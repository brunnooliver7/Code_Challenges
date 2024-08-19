/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.original = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let copy = [...this.nums];
  let newNums = [];

  while (copy.length) {
    const randomIndex = randomBetween(0, copy.length);
    const deleted = copy.splice(randomIndex, 1);
    newNums.push(deleted[0]);
  }

  return newNums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
