/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primes = [];

  p: for (let i = 2; i < n; i++) {
    let limit = Infinity;

    s: for (let j = 0; j < primes.length; j++) {
      // tests
      if (primes[j] > limit) break s;
      if (i % primes[j] == 0) continue p;
      // prepare for next
      else limit = i / primes[j];
    }

    primes.push(i);
  }

  return primes.length;
};
