/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let pairs = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let set1 = new Set([...words[i]]);
      let set2 = new Set([...words[j]]);

      if (set1.size !== set2.size) continue;
      const areEqual = [...set1].every((el) => set2.has(el));
      if (areEqual) pairs++;
    }
  }

  return pairs;
};
