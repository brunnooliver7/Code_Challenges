export function solution(n, ratings) {
  const ratingMap = getRatingMap(ratings);
  const avgs = getAvgsArr(ratingMap);
  const maxAvgRating = getMaxRating(avgs);
  const candidates = avgs.filter((item) => item[1] === maxAvgRating);
  const minIdCandidate = Math.min(...candidates.map((c) => c[0]));
  const theOne = candidates.find((item) => item[0] === minIdCandidate);
  return theOne[0];
}

function getRatingMap(ratings) {
  let ratingMap = new Map();

  ratings.forEach((r) => {
    let id = r[0];
    let rating = r[1];

    if (ratingMap.has(id)) {
      let item = ratingMap.get(id);

      ratingMap.set(id, {
        totalRating: item.totalRating + rating,
        n: item.n + 1,
      });
    } else {
      ratingMap.set(id, {
        totalRating: rating,
        n: 1,
      });
    }
  });

  return ratingMap;
}

function getAvgsArr(ratingMap) {
  let avgs = [];

  for (let [id, value] of ratingMap) {
    const avg = value.totalRating / value.n;
    avgs.push([id, avg]);
  }

  return avgs;
}

function getMaxRating(avgs) {
  let avgsRatings = avgs.map((item) => item[1]);
  let maxAvgRating = Math.max(...avgsRatings);
  return maxAvgRating;
}
