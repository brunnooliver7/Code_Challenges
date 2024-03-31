export function solution(n, ratings) {
  const ratingValues = ratings.map((item) => item[1]);
  const maxRating = Math.max(...ratingValues);
  const candidates = ratings.filter((item) => item[1] === maxRating);
  const candidatesIds = candidates.map((item) => item[0]);
  const minCandidateId = Math.min(...candidatesIds);
  const theOne = candidates.find((c) => c[0] === minCandidateId);
  return theOne[0];
}
