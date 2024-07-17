/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let result = x;
    functions.reverse().forEach((fn) => {
      result = fn(result);
    });
    return result;
  };
};
