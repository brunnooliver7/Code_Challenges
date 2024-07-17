/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  function generate(fns, x) {
    if (fns.length === 0) return x;

    const sliceFns = fns.slice(1);
    return fns[0](generate(sliceFns, x));
  }

  return function (x) {
    return generate(functions, x);
  };
};
