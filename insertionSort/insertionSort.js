/**
 * Insertion sort is a basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * https://en.wikipedia.org/wiki/Insertion_sort
 **/

// Example usage:
// insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]

const insertionSort = (array) => {
  // let i = 1 (for index1) and loop through going up by 1 each loop
  for (let i = 1; i < array.length; i++) {

    // make a temp holding spot for the element we are looking at - arr[i]
    let temp = array[i];
    // make a j
    let j;
    // j = i-1 because we want to look at index previous to arr[i]
    for (j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

/*
arr = [2, 3, 1]
1. let i = 1 (index1); i is bigger than length(3) so run the loop then incr i by 1
temp = arr[i] // i=1, arr[1] = 3
j = i-1 // j = 0
for if (j > or = 0) and (arr[j] is bigger than temp) yes then decrement j by 1
 { array }
*/

