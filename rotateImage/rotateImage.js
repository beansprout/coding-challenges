// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

// Example of a matrix:

// [[9, 9, 9], 
// [5, 5, 5], 
// [1, 1, 1] 

// => 

// [[9, 5, 1], 
// [9, 5, 1], 
// [9, 5, 1]]

// or

// [[1, 5, 9],
// [1, 5, 9],
// [1, 5, 9]
// ]]

/*
 Thoughts:
 - need length of matrixArray
 - need length of rows

 [1,2] -> [3, 1]
 [3,4]    [2, 4]
 
 arr = [ [1, 2], [3, 4]]
 arr[0] = [1, 2]
 arr [1] = [3, 4] 
 
  
*/

  var grid = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ]; 

 
var side = Math.sqrt(grid.length);
  


var rotate = function(d,i){
   return [Math.abs(i % side - side+1), Math.floor(i/side)]
};

grid = grid.map(rotate);
  

