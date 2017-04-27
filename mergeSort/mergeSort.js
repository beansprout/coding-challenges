/**
 * Reference https://en.wikipedia.org/wiki/Merge_sort for more detail about how this sorting algorithm works.
 * Sort an array of integers using the merge sort algorithm.
 * First divide the list into its smallest unit (arrays with a single item in them)
 * Then compare each element with the adjacent list and combine them in the proper order.
 * Repeat until the entire array is sorted.
 * [1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]
 */

const merge = (left, right) => {
  // declare result (empty accumulator for sorted array)
  const result = [];
  // while left and right BOTH aren't empty
  while (left.length && right.length) {
    // if 1st index of left is bigger or equal to 1st index of right
    if (left[0] <= right[0]) {
      // move left[0] from left to result. (removed from left)
      result.push(left.shift());
    } else {
      // otherwise move right[0] into result (because it must come
      // before left)
      result.push(right.shift());
    }
  }
  // then on left side
  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  // initialize middle here so that it gets run during recursion
  const middle = (arr.length / 2);
  // middle rounded to closest whole number var left = arr.slice(0, middle); //arr from elem0 to but not including middle

  const left = arr.slice(0, middle);
  // slice takes 2 args but one optional :
      // a start index and an end -1 index and returns a new array
  const right = arr.slice(middle); // arr from middle elem to end
  //
  return merge(mergeSort(left), mergeSort(right));
}; // run merge with the 2 halves you just split


mergeSort([1, 6, 3, 2, 4, 7]);
console.log('mergeSort([1, 6, 3, 2, 4, 7]): ', mergeSort([1, 6, 3, 2, 4, 7]));

/*
 * [1, 6, 3][2, 4, 7]
 * [1][6, 3][2][4, 7]
 * [1][6][3][2][4][7]
 * [1, 3][6][2][4][7]
 * [1, 3][6][2, 4][7]
 * [1, 3, 6][2, 4][7]
 * [1, 3, 6][2, 4, 7]
 * [1, 2, 3, 4, 6, 7]
*/