/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

  let itog = 1;

  if (n === 0) return 1;

  for  (let i = 1; i <= n; i++) {
    itog = itog * i;
  }

  return itog;
}
