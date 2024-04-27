/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  let isArray = Array.isArray(obj);
  if (isArray) return !obj.length;
  else return !Object.entries(obj).length;
};
