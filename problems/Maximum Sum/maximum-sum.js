const maxSum = (arr, k) => {
  let s = -1;

  if (arr.length <= 1 || typeof k != "number" || k < 0) return s;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum > s && sum < k) s = sum;
    }
  }

  return s;
};

const arr1 = [34, 23, 1, 24, 75, 33, 54, 8];
const k1 = 60;
console.log(maxSum(arr1, k1));

const arr2 = [10, 20, 30];
const k2 = 15;
console.log(maxSum(arr2, k2));
