/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trimStart();

  let isNegative = false;
  if (s.substring(0, 2) == "+-") return 0;
  if (s[0] == "+") s = s.slice(1);
  if (s[0] == "-") {
    isNegative = true;
    s = s.slice(1);
  }

  s = s.replace(/^0+/, "");

  let str = "";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const regexNumeric = /[0-9]/g;
    if (!c.match(regexNumeric)) break;
    str = str.concat(c);
  }

  let n = +str;
  if (isNegative) n = -n;
  if (n < -Math.pow(2, 31)) n = -Math.pow(2, 31);
  if (n >= Math.pow(2, 31)) n = Math.pow(2, 31) - 1;

  return n;
};
