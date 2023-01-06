const solution = (arr) => {
  const originalArr = [...arr].sort((a, b) => a - b);

  let res = originalArr;
  let k = 0;

  while (!arraysAreEquals(arr, res)) {
    res = rotate(res);
    k++;
    if (k >= arr.length) {
      k = -1;
      break;
    }
  }

  return k;
};

const rotate = (arr) => {
  const lastElement = arr[arr.length - 1];
  arr.splice(arr.length - 1, 1);
  arr.unshift(lastElement);
  return arr;
};

const arraysAreEquals = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const test1 = solution([15, 18, 2, 3, 6, 12]);
console.log(test1);
const test2 = solution([7, 9, 11, 12, 5]);
console.log(test2);
const test3 = solution([5, 6, 9, 0, 2, 3]);
console.log(test3);
const test4 = solution([0, 1, 2, 3]);
console.log(test4);
// no solution, must return -1
const test5 = solution([1, 2, 3, 13, 12, 11, 16, 15, 14]);
console.log(test5);
