/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let m = new Map();

  for (w of words) {
    let s = new Set([...w]);
    let val = [...s].sort().join("");
    m.set(val, (m.get(val) ?? 0) + 1);
  }

  let counter = 0;

  m.forEach((v) => {
    if (v > 1) {
      counter += (v * (v - 1)) / 2;
    }
  });

  return counter;
};
