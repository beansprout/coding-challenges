/*
 * Find the greatest contiguous sum of numbers in an array of numbers.
 *
 * example 1: largestContiguousSum([1, 2, 3]); // => 6
 * example 2: largestContiguousSum([4, -1, 5]); // => 8
 * example 3: largestContiguousSum([10, -11, 11]); // 11
 *
1) Divide the given array in two halves
2) Return the maximum of following three
….a) Maximum subarray sum in left half (Make a recursive call)
….b) Maximum subarray sum in right half (Make a recursive call)
….c) Maximum subarray sum such that the subarray crosses the midpoint

 *
*/
// Divide and Conquer

const largestContiguousSum = (arr) => {
  if (arr.length < 2) return arr;

  // helper func to find max of 2 numbers
  const findMax = (arr, start, stop) => {
    let max = 0;
    let sum = 0;
    for (let i = start; i < stop; i++) {
      sum += arr[i];
      max = Math.max(max, sum);
    }
    return max;
}
  // divide arr in half
  const mid = Math.floor(arr.length / 2);

  const maxLeft = findMax (arr, mid-1, 0);
  const maxRight = findMax (arr, 0, mid);

  const center = maxLeft + maxRight;
  const left = largestContiguousSum(arr.slice(0, mid));
  const right = largestContiguousSum(arr.slice, mid);

return Math.max(left, center, right)
}

largestContiguousSum([1, 2, 3]);
console.log('largestContiguousSum([1, 2, 3]): ', largestContiguousSum([1, 2, 3]));
