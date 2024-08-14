// Brutal Force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBrutal = function (nums, target) {
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

// Hash Table
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumHashMap(nums, target) {
  let m = new Map()

  for (let i = 0; i < nums.length; i++) {
    const wantedValue = target - nums[i]
    if (m.has(wantedValue)) return [m.get(wantedValue), i]
    m.set(nums[i], i)
  }

  return null
}

const t1 = twoSumHashMap([1, 3, 7, 9, 2], 11)
console.log(t1)

const t2 = twoSumHashMap([], 11)
console.log(t2)
