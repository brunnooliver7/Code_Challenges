const firstRecurringCharacter1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]
      }
    }
  }

  return undefined
};

const firstRecurringCharacter2 = (arr) => {
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      return arr[i]
    } else {
      obj[arr[i]] = i
    }
  }

  return undefined
}

const testA1 = firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4]);
const testA2 = firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(testA1);
console.log(testA2);

const testB1 = firstRecurringCharacter1([2, 1, 1, 2, 3, 5, 1, 2, 4]);
const testB2 = firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]);
console.log(testB1);
console.log(testB2);

const testC1 = firstRecurringCharacter1([2, 3, 4, 5]);
const testC2 = firstRecurringCharacter2([2, 3, 4, 5]);
console.log(testC1);
console.log(testC2);
