/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const nParts = Math.ceil(arr.length / size);
  let res = [];

  for (let i = 0; i < nParts; i++) {
    const offset = i * size;
    const slice = arr.slice(offset, offset + size);
    res.push(slice);
  }

  return res;
};
