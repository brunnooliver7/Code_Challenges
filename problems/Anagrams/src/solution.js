export function anagram(arr1, arr2) {
  let res = [];

  for (let i = 0; i < arr1.length; i++) {
    let w1 = arr1[i];
    let w2 = arr2[i];
    res.push(compareWords(w1, w2));
  }

  return res;
}

function compareWords(w1, w2) {
  if (w1.length != w2.length) return -1;

  let w1Arr = w1.split("");
  let w2Arr = w2.split("");

  while (w1Arr.some((el1) => w2Arr.includes(el1))) {
    const el = w1Arr.find((el1) => w2Arr.includes(el1));
    const index1 = w1Arr.indexOf(el);
    const index2 = w2Arr.indexOf(el);

    w1Arr.splice(index1, 1);
    w2Arr.splice(index2, 1);
  }

  return w1Arr.length;
}
