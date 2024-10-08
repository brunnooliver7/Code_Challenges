/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let ws = 0;
  let we = 0;
  let maxValue = 0;

  for (let i = 0; i < s.length; i++) {
    we = i;

    while (set.has(s[we])) {
      set.delete(s[ws]);
      ws++;
    }

    set.add(s[we]);
    maxValue = Math.max(maxValue, we - ws + 1);
  }

  return maxValue;
};

const t1 = lengthOfLongestSubstring("abcabcbb");
console.log(t1);

const t2 = lengthOfLongestSubstring("bbbbb");
console.log(t2);

const t3 = lengthOfLongestSubstring("pwwkew");
console.log(t3);
