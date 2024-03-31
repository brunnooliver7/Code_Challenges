export function solution(n, ratings) {
  let map = [];

  ratings.forEach((r) => {
    let id = r[0];
    let value = r[1];

    if (map.some((el) => el.id === id)) {
      const el = map.find((el) => el.id === id);
      const i = map.indexOf(el);
      map[i] = {
        id,
        amount: el.amount + value,
        n: el.n + 1,
        avg: (el.amount + value) / (el.n + 1),
      };
    } else {
      map.push({
        id,
        amount: value,
        n: 1,
        avg: value,
      });
    }
  });

  const avgs = map.map((item) => item.avg);
  const maxAvg = Math.max(...avgs);
  const candidates = map.filter((item) => item.avg === maxAvg);
  const candidatesIds = candidates.map((item) => item.id);
  const minCandidateId = Math.min(...candidatesIds);
  const theOne = candidates.find((item) => item.id === minCandidateId);
  return theOne.id;
}
