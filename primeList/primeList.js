/* Write a function that generates a list of all prime numbers
 * in a specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia.
 *
 * —algorithm suggested on wikipedia
 *
 * Let A be an array of Boolean values, indexed by integers 2 to n,
 initially all set to true.

 for i = 2, 3, 4, ..., not exceeding √n:
   if A[i] is true:
     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
       A[j] := false.

 Output: all i such that A[i] is true.
*/

/*PSEUDOCODE:
1. create a list of all the numbers starting at 2
  create list of all numbers (associative array [0:true, 1:true, n:true]
2. iterate over array cross out all even numbers
  if num % 2 === 0 then num value = false
3. remove all false
4. repeat step 2 with next num after previous
  (i.e. 3)
5. repeat steps 2 and 3 until


*/
const range = (start, end) => {
  const a = [];
  if (start > end) {
    let s = start;
    let e = end;
  } else {
    s = end;
    e = start;
  }
  for (let i = start; i === end; i++) {
    a.push(i);
  }
  return a;
}

const primeSieve = (start, end) => {
  let a = Math.range(start || 2, end);



};

