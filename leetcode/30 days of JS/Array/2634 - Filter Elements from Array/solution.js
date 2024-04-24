/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let res = [];

  arr.forEach((el, i) => {
    let value = fn(el, i);
    if (Boolean(value)) res.push(el);
  });

  return res;
};
