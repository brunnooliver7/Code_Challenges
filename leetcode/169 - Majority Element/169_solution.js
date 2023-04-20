/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let values = [];

  nums.forEach((item) => {
    if (!values.includes(item)) values.push(item);
  });

  return values.find(
    (value) => nums.filter((item) => item === value).length > nums.length / 2
  );
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let itens = new Map();

  nums.forEach((num) => {
    if (!itens.get(num)) itens.set(num, 1);
    else itens.set(num, itens.get(num) + 1);
  });

  for (let [key, value] of itens) {
    if (value > nums.length / 2) res = key;
  }

  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let itens = new Map();

  let res = Number.MIN_VALUE;

  nums.forEach((num, i, arr) => {
    if (!itens.get(num)) itens.set(num, 1);
    else itens.set(num, itens.get(num) + 1);

    if (itens.get(num) > nums.length / 2) {
      res = num;
      arr.length = i + 1; // break the loop
    }
  });

  return res;
};
