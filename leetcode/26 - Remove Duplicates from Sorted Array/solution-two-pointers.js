// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space;
// after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function removeDuplicates(arr) {
  //shift the elements left when we encounter duplicates

  //one pointer for iterating
  let i = 1;

  //one pointer for placing this next non-duplicate
  let nextNonDupe = 1;

  while (i < arr.length) {
    if (arr[nextNonDupe - 1] !== arr[i]) {
      arr[nextNonDupe] = arr[i];
      nextNonDupe++;
    }
    i++;
    console.log(arr)
  }
  return nextNonDupe;
}

removeDuplicates([2, 3, 3, 3, 6, 9, 9]);
//4, The first four elements after removing the duplicates will be [2, 3, 6, 9].

removeDuplicates([2, 2, 2, 11]);
//2, The first two elements after removing the duplicates will be [2, 11].
