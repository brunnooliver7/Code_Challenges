function solution(observedPin) {
  const m = generateMap();
  let res = new Set();
  let nums = observedPin.split("");

  nums.forEach((n) => {
    const alternatives = m.get(n);

    if (!res.size) {
      alternatives.forEach((a) => res.add(a));
    } else {
      [...res].forEach((r) => {
        res.delete(r);
        alternatives.forEach((a) => res.add(r + a));
      });
    }
  });

  return [...res];
}

function generateMap() {
  let m = new Map();

  m.set("1", ["1", "2", "4"]);
  m.set("2", ["2", "1", "3", "5"]);
  m.set("3", ["3", "2", "6"]);
  m.set("4", ["4", "1", "5", "7"]);
  m.set("5", ["5", "2", "4", "6", "8"]);
  m.set("6", ["6", "3", "5", "9"]);
  m.set("7", ["7", "4", "8"]);
  m.set("8", ["8", "5", "7", "9", "0"]);
  m.set("9", ["9", "6", "8"]);
  m.set("0", ["0", "8"]);

  return m;
}

const t1 = solution("8");
console.log(t1);
/* [ '8', '5', '7', '9', '0' ] */

const t2 = solution("11");
console.log(t2);
/* [
  '11', '12', '14',
  '21', '22', '24',
  '41', '42', '44'
] */

const t3 = solution("124");
console.log(t3);
/* [
  '111', '114', '115', '117',
  '121', '124', '125', '127',
  '131', '134', '135', '137',
  '151', '154', '155', '157',
  '211', '214', '215', '217',
  '221', '224', '225', '227',
  '231', '234', '235', '237',
  '251', '254', '255', '257',
  '411', '414', '415', '417',
  '421', '424', '425', '427',
  '431', '434', '435', '437',
  '451', '454', '455', '457'
] */
