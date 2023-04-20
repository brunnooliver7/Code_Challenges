function largestPairSum(numbers) {
  let largest = Math.min(...numbers) + Math.min(...numbers);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] > largest) {
        largest = numbers[i] + numbers[j]
      }
    }
  }

  return largest;
}

let test1 = [10, 14, 2, 23, 19];
let test2 = [-10, -8, -16, -18, -19];
let test3 = [25, -83, 20, 74, 61, 21, 1, 59, 99, -52, -79, 91, 9, 20, -60, -54, -29, -68, 7, 37, 23, -52, -27, -44, -1, 47, 50, 92, -30, 58, 58, 51, -27, -25, 7, 43, 79]; //191
let test4 = [12, -87, -25, 86, -38, -86, -37, 28, 19, -45, 50, 26, -79, -43, 60, 65]; // 151
const res = largestPairSum(test3);
console.log(res);