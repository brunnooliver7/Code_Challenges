/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [[1]];

  for (let i = 1; i < numRows; i++) {
    const last = res[i - 1];

    let curr = [1];

    for (let j = 0; j < last.length - 1; j++) {
      curr.push(last[j] + last[j + 1]);
    }

    curr.push(1);

    res.push(curr);
  }

  return res;
};
