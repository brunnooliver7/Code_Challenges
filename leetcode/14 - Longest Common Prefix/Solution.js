/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let i = 0;

  while (strs.every((s) => s.startsWith(prefix + strs[0][i]))) {
    prefix = prefix.concat(strs[0][i]);
    i++;
  }

  return prefix;
};
