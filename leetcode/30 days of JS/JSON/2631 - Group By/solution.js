/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let res = {};

  this.forEach((el) => {
    const key = fn(el);
    if (res[key]) res[key].push(el);
    else res[key] = [el];
  });

  return res;
};
