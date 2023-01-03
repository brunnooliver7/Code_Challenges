var solution = function (morsecode) {
  const res = [];

  let length = morsecode.split('').length

  for (let i = 0; i < length; i++) {
    if (morsecode.substring(i, i + 2) == '..') {
      const replacement = morsecode.substring(0, i) + '--' + morsecode.substring(i + 2, length)
      res.push(replacement)
    }
  }

  return res;
};

console.log(solution("...."))
