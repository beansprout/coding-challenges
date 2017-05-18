/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write tests inside of test.js to test this function.
 * The function is already being exported and imported for you.
 * Run your unit tests with the command `npm test` from inside of this folder.
 */
const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz(num)', () => {
  it('should return "fizz" if num is divisable by 3 with no remainder'),
     expect(fizzBuzz(21).toBe('fizz'));
});

const sum = require('./jesttest');

test('adds 1 + 2  equals 3', () => {
  expect(sum(1,2)).toBe(3);
});
