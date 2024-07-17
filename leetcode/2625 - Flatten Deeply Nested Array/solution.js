/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = arr;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < res.length; j++) {
      const el = res[j];
      if (Array.isArray(el)) {
        res.splice(j, 1, ...el);
        j += el.length - 1;
      }
    }
  }

  return res;
};
