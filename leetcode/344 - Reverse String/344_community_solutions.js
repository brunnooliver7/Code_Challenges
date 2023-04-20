var reverseString = function(s) {
  let i = 0, j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

var reverseString = function(s) {
  let temp;
  
  for (let i = 0; i < s.length / 2; i++) {
      temp = s[i];
      s[i] = s[s.length - 1 - i];
      s[s.length - 1 - i] = temp;
  }
};

