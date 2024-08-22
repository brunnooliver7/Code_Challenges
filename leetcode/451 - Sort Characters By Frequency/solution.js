/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();

  s.split("").forEach((letter) => {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  });

  let arr = [...map];
  let res = "";

  arr
    .sort((a, b) => {
      const [key1, value1] = a;
      const [key2, value2] = b;
      return value2 - value1;
    })
    .forEach((pair) => {
      const [key, value] = pair;

      for (let i = 0; i < value; i++) {
        res += key;
      }
    });

  return res;
};
