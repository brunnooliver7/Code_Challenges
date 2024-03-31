/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // O(n log n)
  const sorted = nums.sort();

  // O(n)
  for (let i = 0; i < sorted.length; i++) {
    const curr = sorted[i];
    const next = sorted[i + 1];

    if (curr === next) {
      i += 2;
      continue;
    } else {
      return curr;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};

  // O(n)
  nums.forEach((n) => {
    if (obj[n]) obj[n] = obj[n] + 1;
    else obj[n] = 1;
  });

  // O(n)
  for ([key, value] of Object.entries(obj)) {
    if (value === 1) return key;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};

  // O(n)
  nums.forEach((n) => {
    if (obj[n]) obj[n] = obj[n] + 1;
    else obj[n] = 1;
  });

  // O(n)
  for (key in obj) {
    if (obj[key] === 1) return key;
  }
};
