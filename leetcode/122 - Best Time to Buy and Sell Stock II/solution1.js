/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const groups = mountGroup(prices);
  return calcProfit(groups);
};

function mountGroup(prices) {
  let groups = [];
  let ref = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) continue;

    groups.push(prices.slice(ref, i + 1));
    ref = i + 1;
  }

  return groups;
}

function calcProfit(groups) {
  let profit = 0;

  groups.forEach((group) => {
    if (group.length > 1) {
      profit += group[group.length - 1] - group[0];
    }
  });

  return profit;
}
