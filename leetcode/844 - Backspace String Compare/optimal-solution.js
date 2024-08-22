/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p1--;
          backCount--;

          if (s[p1] === "#") {
            backCount += 2;
          }
        }
      }

      if (t[p2] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;

          if (t[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};

const t1 = backspaceCompare("ab#c", "ad#c");
console.log(t1); // true

const t2 = backspaceCompare("ab##", "c#d#");
console.log(t2); // true

const t3 = backspaceCompare("a#c", "b");
console.log(t3); // false

const t4 = backspaceCompare("xywrrmp", "xywrrmu#p");
console.log(t4); // true
