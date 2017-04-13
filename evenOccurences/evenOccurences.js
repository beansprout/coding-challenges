/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one. 
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
// const onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 //  4
 *    */

const evenOccurence = (arr) => {
  let newArr = arr.sort();
  let evens = [];
  let len = newArr.length;
  let i = 0;
  let j = 0;
  let oCount = 0;
  console.log('newArr: ', newArr);
  for (i = 0; i < len; i++) {
    let search = newArr[i];
    for (j = 0; j < len; j++ )
      if (search === newArr[i]) {
        oCount++;
      } if (oCount !== 0 && oCount % 2 === 0) {
        evens.push(search);
      }
    } if (evens === []) {
      return null;
    } else if (evens.length === 1) {
      return evens[0];
    } else {
      for (let i = 0; i < len; i++ ) {
        let val = evens[i];
        console.log('val: ', val);
        for (let j = 0; j < evens.length; j++) {
          if (val === arr[j]) {
            console.log('val: ', val);
            return val;
          }
        }
      }
    }
  }
  


console.log(evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])); // 4
console.log(evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 4])); // null
