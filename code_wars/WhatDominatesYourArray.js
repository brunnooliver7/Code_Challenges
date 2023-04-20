function dominator(arr) {
  let response = -1

  arr.map((item, index) => {
    const count = arr.filter(el => el === item).length

    if (count > arr.length / 2) {
      response = arr[index]
    }
  })

  return response
}

const test1 = [3,4,3,2,3,1,3,3];
const test2 = [1,2,3,4,5];
const test3 = [1,1,1,2,2,2];
const test4 = [1,1,1,2,2,2,2];

const res1 = dominator(test1);
const res2 = dominator(test2);
const res3 = dominator(test3);
const res4 = dominator(test4);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

console.log(typeof res1);
console.log(typeof res2);
console.log(typeof res3);
console.log(typeof res4);