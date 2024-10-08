/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.map((el, i) => fn(el, i));
  // return arr.map(fn)
};
