/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const arrS = s.split("");
  let resS = [];

  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] != "#") {
      resS.push(arrS[i]);
    } else {
      resS.pop();
    }
  }

  const arrT = t.split("");
  let resT = [];

  for (let i = 0; i < arrT.length; i++) {
    if (arrT[i] != "#") {
      resT.push(arrT[i]);
    } else {
      resT.pop();
    }
  }

  return resS.join("") === resT.join("");
};

const t1 = backspaceCompare("ab#c", "ad#c");
console.log(t1); // true

const t2 = backspaceCompare("ab##", "c#d#");
console.log(t2); // true

const t3 = backspaceCompare("a#c", "b");
console.log(t3); // false
