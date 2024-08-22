/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let firstIndex = s.indexOf(s[i]);
    let lastIndex = s.lastIndexOf(s[i]);
    if (firstIndex == lastIndex) return firstIndex;
  }

  return -1;
};
