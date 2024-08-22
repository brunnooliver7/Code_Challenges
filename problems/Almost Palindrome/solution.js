function solution(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      const case1 = validSubPalindrome(s, left + 1, right);
      const case2 = validSubPalindrome(s, left, right - 1);
      const atLeastOneIsPalindrome = case1 || case2;
      return atLeastOneIsPalindrome;
    }

    left++;
    right--;
  }

  return true;
}

function validSubPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] != s[right]) return false;
    left++;
    right--;
  }
  return true;
}

const t1 = solution("race a car");
console.log(t1); // true

const t2 = solution("abccdba");
console.log(t2); // true

const t3 = solution("abcdefdba");
console.log(t3); // false
