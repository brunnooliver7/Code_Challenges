/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let res = {};

  arr1.forEach((el) => {
    res[el.id] = el;
  });

  arr2.forEach((el) => {
    let { id } = el;
    if (!res[id]) res[id] = el;
    else Object.assign(res[id], el);
  });

  return Object.values(res).sort((a, b) => a.id - b.id);
};
