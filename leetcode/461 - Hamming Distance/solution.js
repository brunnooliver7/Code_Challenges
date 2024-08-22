/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let bit1 = x.toString(2);
  let bit2 = y.toString(2);

  const maxLength = Math.max(bit1.length, bit2.length);

  while (bit1.length < maxLength) {
    bit1 = "0".concat(bit1);
  }
  while (bit2.length < maxLength) {
    bit2 = "0".concat(bit2);
  }

  let res = 0;

  for (let i = 0; i < bit1.length; i++) {
    if (bit1[i] != bit2[i]) res++;
  }

  return res;
};
