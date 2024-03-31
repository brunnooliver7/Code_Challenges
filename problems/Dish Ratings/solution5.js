export function solution(n, ratings) {
  let obj = {};

  ratings.forEach((r) => {
    let id = r[0];
    let value = r[1];

    if (obj[id]) {
      obj[id] = {
        id,
        amount: obj[id].amount + value,
        n: obj[id].n + 1,
        avg: (obj[id].amount + value) / (obj[id].n + 1),
      };
    } else {
      obj[id] = {
        id,
        amount: value,
        n: 1,
        avg: value,
      };
    }
  });

  const sorted = Object.values(obj).sort((a, b) => {
    if (a.avg === b.avg) return a.id - b.id;
    return b.avg - a.avg;
  });

  return sorted[0].id;
}
