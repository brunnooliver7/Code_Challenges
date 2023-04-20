/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const charCodeAlphabetStart = 64;
  const alphabetLength = 26;
  let columnNumber = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const n = columnTitle.charCodeAt(i) - charCodeAlphabetStart;
    const order = columnTitle.length - 1 - i;
    columnNumber += n * alphabetLength ** order;
  }

  return columnNumber;
};

/**
 * 

First, I just come with a for loop, and the most obvious thing that we have to do is adjust charCode number to make A be equal to 1, B equal to 2, and so on. So we use ```columnTitle.charCodeAt(i) - 64```

Then, the plan is: each character must contribute with some value to the sum (```columnNumber```).

I realized that the format of the formular should be something like this: ```n * 26 ** order```, where ```n``` is the corresponding value of the character, 26 is the length of alphabet and ```order``` is the exponential order depending on the position of the character. Each character has different exponential orders to increase ```columnNumber```, and this increase also depends on the corresponding value of the character. Each time we go n+1, we add ```26 ** order``` to ```columnNumber```. 

Then, I had to examine the exponential order of each character, and this depends on how many characters the input has and the position of the character, so I have to calculate the order this way: ```order = columnTitle.length - 1 - i```. 

To understand this, imagine if we go backwards. When we are at the last item in the loop, the value of order will be 0, so the increase to ```columnNumber``` will be just the value of ```n```. When we are at the penultimate item in the loop, the value of order will be 1, 
so the increase to ```columnNumber``` will be ```n``` times the length of alphabet. And so on, until the end of the loop.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
var titleToNumber = function(columnTitle) {
  let columnNumber = 0;
  
  for (let i = 0 ; i < columnTitle.length ; i++) {
    const n = columnTitle.charCodeAt(i) - 64;
    const order = columnTitle.length - 1 - i;
    columnNumber += n * 26 ** order;
  }
  
  return columnNumber;
};
```
*/
