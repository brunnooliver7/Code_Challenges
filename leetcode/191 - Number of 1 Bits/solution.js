/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  const sn = n.toString(2);

  let res = 0;

  for (let i = 0; i < sn.length; i++) {
    if (sn[i] == "1") res++;
  }

  return res;
};
