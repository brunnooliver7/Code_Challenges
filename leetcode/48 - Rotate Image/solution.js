/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let rotated = matrix.map(() => []);
  // or: let rotated = Array(matrix.length).fill([]);

  matrix.forEach((row) => {
    row.forEach((value, j) => {
      rotated[j].unshift(value);
    });
  });

  rotated.forEach((r, i) => r.forEach((v, j) => (matrix[i][j] = v)));
};
