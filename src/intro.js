// Lesson: Writing your first tests
/**
 *
 *
 * @export
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
/**
 * 
 * @param {Number} n 
 * @returns 
 */
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}


/**
 * Calculates factorial of a number.
 *
 * @export
 * @param {number} n - A non-negative number.
 * @returns {number | undefined} Returns the factorial or undefined for negative inputs.
 */
export function factorial(n) {
  if (n < 0) return undefined;

  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

