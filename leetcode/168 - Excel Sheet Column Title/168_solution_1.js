/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let order1 = 0
  let order2 = 0
  let order3 = 0
  let order4 = 0
  let order5 = 0
  let order6 = 0

  if (n / (letters.length ** 0) > 0) order1 = Math.trunc(n / (letters.length ** 0));
  if (n / (letters.length ** 1) > 0) order2 = Math.trunc(n / (letters.length ** 1));
  if (n / (letters.length ** 2) > 0) order3 = Math.trunc(n / (letters.length ** 2));
  if (n / (letters.length ** 3) > 0) order4 = Math.trunc(n / (letters.length ** 3));
  if (n / (letters.length ** 4) > 0) order5 = Math.trunc(n / (letters.length ** 4));
  if (n / (letters.length ** 5) > 0) order6 = Math.trunc(n / (letters.length ** 5));

  while(order1 > 26) order1 -= 26
  while(order2 > 26) order2 -= 26
  while(order3 > 26) order3 -= 26
  while(order4 > 26) order4 -= 26
  while(order5 > 26) order5 -= 26
  while(order6 > 26) order6 -= 26

  let orders = [];
  if (order6 > 0) orders.push(order6);
  if (order5 > 0) orders.push(order5);
  if (order4 > 0) orders.push(order4);
  if (order3 > 0) orders.push(order3);
  if (order2 > 0) orders.push(order2);
  if (order1 > 0) orders.push(order1);

  console.log(order1, order2, order3, order4, order5, order6)
  console.log(orders)

  let res = "";
  for (let i = 0; i < orders.length; i++) {
    res = res + letters[orders[i] - 1];
  }

  return res;
};

console.log(convertToTitle(676));
