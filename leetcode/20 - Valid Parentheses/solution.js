/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
    if (s.includes("()")) s = s.replace("()", "");
    if (s.includes("{}")) s = s.replace("{}", "");
    if (s.includes("[]")) s = s.replace("[]", "");
  }

  return s.length === 0;
};
