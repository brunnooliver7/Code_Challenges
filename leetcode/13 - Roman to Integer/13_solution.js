/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // base cases
  let base = new Map();
  base.set("I", 1);
  base.set("V", 5);
  base.set("X", 10);
  base.set("L", 50);
  base.set("C", 100);
  base.set("D", 500);
  base.set("M", 1000);

  // special cases
  let special = new Map();
  special.set("IV", 4);
  special.set("IX", 9);
  special.set("XL", 40);
  special.set("XC", 90);
  special.set("CD", 400);
  special.set("CM", 900);

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (special.has(s.charAt(i) + s.charAt(i + 1))) {
      res += special.get(s.charAt(i) + s.charAt(i + 1));
      i++;
      continue;
    }

    res += base.get(s.charAt(i));
  }

  return res;
};
