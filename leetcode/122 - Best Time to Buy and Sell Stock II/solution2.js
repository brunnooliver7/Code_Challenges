/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let amount = 0;
  let hasBuy = false;

  for (let i = 0; i <= prices.length - 1; i++) {
    const curr = prices[i];
    const next = prices[i + 1];

    if (curr == next) continue;

    if (curr < next && !hasBuy) {
      amount -= curr; // buy
      hasBuy = true;
      continue;
    }

    if (curr > next && i > 0 && hasBuy) {
      amount += curr; // sell
      hasBuy = false;
      continue;
    }

    if (!next && hasBuy) {
      amount += curr; // sell
      hasBuy = false;
      continue;
    }
  }

  return amount;
}
