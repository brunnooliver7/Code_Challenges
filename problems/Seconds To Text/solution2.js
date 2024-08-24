function solution(seconds) {
  let time = seconds;

  if (time === 0) return "now";

  let s = 0;
  let m = 0;
  let h = 0;
  let d = 0;
  let y = 0;

  const oneMinute = 60;
  const oneHour = 60 * 60;
  const oneDay = 60 * 60 * 24;
  const oneYear = 60 * 60 * 24 * 365;

  if (time >= oneYear) {
    y = Math.floor(time / oneYear);
    time = time % oneYear;
  }

  if (time >= oneDay) {
    d = Math.floor(time / oneDay);
    time = time % oneDay;
  }

  if (time >= oneHour) {
    h = Math.floor(time / oneHour);
    time = time % oneHour;
  }

  if (time >= oneMinute) {
    m = Math.floor(time / oneMinute);
    time = time % oneMinute;
  }

  if (time > 0) {
    s = time;
  }

  let res = "";

  if (y > 0) {
    res += y.toString();
    if (y === 1) res += " year";
    else res += " years";
  }

  if (d > 0) {
    if (res.length) res += ", ";
    res += d.toString();
    if (d === 1) res += " day";
    else res += " days";
  }

  if (h > 0) {
    if (res.length) res += ", ";
    res += h.toString();
    if (h === 1) res += " hour";
    else res += " hours";
  }

  if (m > 0) {
    if (res.length) res += ", ";
    res += m.toString();
    if (m === 1) res += " minute";
    else res += " minutes";
  }

  if (s > 0) {
    if (res.length) res += ", ";
    res += s.toString();
    if (s === 1) res += " seccond";
    else res += " secconds";
  }

  const lastComma = res.lastIndexOf(",");
  if (lastComma > 0) {
    const replacement = " and";
    const beforeLastComma = res.substring(0, lastComma);
    const afterLastComma = res.substring(lastComma + 1);
    res = beforeLastComma + replacement + afterLastComma;
  }

  return res;
}

const t1 = solution(62);
console.log(t1); // 1 minute and 2 seconds

const t2 = solution(3662);
console.log(t2); // 1 hour, 1 minute and 2 seconds

const t3 = solution(0);
console.log(t3); // now

const t4 = solution(1);
console.log(t4); // 1 seccond

const t5 = solution(60);
console.log(t5); // 1 minute

const t6 = solution(60 * 60);
console.log(t6); // 1 hour

const t7 = solution(60 * 60 * 24);
console.log(t7); // 1 day

const t8 = solution(60 * 60 * 24 * 365);
console.log(t8); // 1 year

const t9 = solution(60 * 60 * 24 * 365 + 1);
console.log(t9); // 1 year and 1 seccond
