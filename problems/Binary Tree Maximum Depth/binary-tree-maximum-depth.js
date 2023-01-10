const solution = (arr) => {
  let depth = 0;
  let length = 0;

  while (arr.length > length) {
    length += 2 ** depth;
    depth++
  }

  return depth;
};

const test1 = solution([3, 9, 20, null, null, 15, 7]);
console.log(test1);
const test2 = solution(new Array(15).fill(1));
console.log(test2);
