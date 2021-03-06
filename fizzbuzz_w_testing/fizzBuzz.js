/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write tests inside of test.js to test this function.
 * The function is already being exported and imported for you.
 * Run your unit tests with the command `npm test` from inside of this folder.
 */

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  else if (num % 3 === 0) return 'fizz';
  else if (num % 5 === 0) return 'buzz';
  return num;
};

module.exports = fizzBuzz;

console.log(fizzBuzz(21));

