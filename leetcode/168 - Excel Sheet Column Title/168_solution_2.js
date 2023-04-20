/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const letters = ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];

  let res = ""
  if (n <= 0) return res;

  while (n > 0) {
    let place = n % 26;
    res = letters[place] + res;
    n = place === 0 ? Math.floor(n / 26) - 1 : Math.floor(n/26);
  }

  return res;
};

console.log(convertToTitle(676));
