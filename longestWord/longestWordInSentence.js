/*
 * Given a string that is a sentence find the longest word.
 * Example:
 * 'I love JavaScript' -> 'JavaScript'`
 */
// String.prototype.split
// String.length

const findLongestWord = (sentence) => {
  const strSplit = sentence.split(' ');
  const longestWord = strSplit.sort((a, b) => b.length - a.length);
  return longestWord[0].length;
};


// Test
findLongestWord('The quick brown fox jumped over the lazy dog');
console.log('findLongestWord('quick brown fox jumped over the lazy dog')', findLongestWord('The quick brown fox jumped over the lazy dog'));
// findLongestWord(`The quick brown fox jumped over the lazy dog`)
// findLongestWord(`May the force be with you`)
// findLongestWord(`Google do a barrel roll`)
// findLongestWord(`What is the average airspeed velocity of an unladen swallow`)
// findLongestWord(`What if we try a super-long word such as otorhinolaryngology`)
