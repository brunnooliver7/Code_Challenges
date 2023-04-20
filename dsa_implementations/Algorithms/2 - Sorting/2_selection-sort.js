const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minEl = array[i];
    let indexMinEl = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < minEl) {
        minEl = array[j];
        indexMinEl = j;
      }
    }

    array[indexMinEl] = array[i];
    array[i] = minEl;
  }

  return array;
}

const test = selectionSort(numbers);
console.log(test);
