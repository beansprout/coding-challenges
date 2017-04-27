/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 *
 Binary search works on sorted arrays.

 Binary search begins by comparing the middle element of the array with the target value.
 If the target value matches the middle element, its position in the array is returned.
 If the target value is less than or greater than the middle element, the search continues in the lower or upper half of the array, respectively, eliminating the other half from consideration
*/

// if nums is the sorted array, find the position of target using binary search
const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return null;
    }
  }
};


const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
console.log(index); // 1

