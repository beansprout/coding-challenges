/**
  * Write a function that, given two arrays, returns whether or not the two
  * are deeply equivalent--meaning the contents of the two arrays is the
  * same.  Assume there will be no objects.
  *
  * Examples:
  *
  * deepEquals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // true
  * deepEquals([1, 2, 3, 4, 5],[1, 3, 4, 5, 6]); // false
  */
// callback function
const checkForNestedArrays = (arr) => {
  let newArr = arr;
  //
}

const deepEquals = (arr1, arr2) => {
  if (arr1 !== arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    if (typeof arr1 !== typeof arr2) {
      return false;
    }
    if (arr1.sort() === arr2.sort()) {
      console.log('sort ===');
      return true
    }
    if (arr1 === arr2) {
      console.log( '===' );
      return true;
    }
  }
  return console.log('Dunno');
}
      // test for type of elements
      // sort the arrays and
      // test if they match element for element
    const a = [0, 1];
    const b = [0, -1];
console.log(deepEquals(a, b));