// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  let answer = number * findFactorialRecursive(number - 1);

  return answer;
}

function findFactorialIterative(number) {
  //code here
  return answer;
}
