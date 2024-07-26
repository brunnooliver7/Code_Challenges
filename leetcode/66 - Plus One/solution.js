/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.join("").toString();

  n = BigInt(n) + 1n;

  return n
    .toString()
    .split("")
    .map((n) => +n);
};
