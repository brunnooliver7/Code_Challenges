const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function containsCommonItem(arr1, arr2) {
  return arr1.some(a => arr2.some(b => b === a));
}

console.log(containsCommonItem(array1, array2));