/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use + and - to implement these functions.
 */
//
 const multiply = (x, y) => {
   let result = 0;
   let i;
   if (x === 0 || y === 0) return result;
   if (x === 1) return y;
   if ((x < 0) && (y < 0)) {
     x = Math.abs(x);
     y = Math.abs(y);
   }
   if (x < 0) {
     x = Math.abs(x);
     y *= -1;
   }
   for (i = 0; i < x; i++) {
     result += y;
   }
   return result;
 };

// console.log(multiply(1, 1));// 1
// console.log(multiply(2, 2)); // 4
// console.log(multiply(-8, 7)); // -56
// console.log(multiply(-8, -7)); // 56
// console.log(multiply(2, -2)); // -4
// console.log(multiply(90, -2)); // -180
// console.log(multiply(90, 0)); // 0
// console.log(multiply(0, 0)); // 0
// console.log(multiply(90, -0)); // 0


 const divisionOperations = (x, y) => {
   let acc = 0;
   let count = 0;
   let flagYisNeg = false;
  // can never divide by 0
   if (y === 0 || y === -0) return NaN;
  // anything divided by 0 is 0
   if (x === 0) return 0;
  // anything divided by itself is always 1
   if (y === x) return 1;
  // flag if y is a negative ( but only is x is not a negative because 2 of them cancel out)
   if (y < 0 && x > 0) {
    y = Math.abs(y);
    flagYisNeg = true;
  }
   if (y < 0 && x < 0) {
    y = Math.abs(y);
    x = Math.abs(x);
  }
   if ((acc + y) > x) return console.log('0 and a bit');
   while (acc < x) {
    count += 1;
    console.log('count: ', count);
    acc += y;
    console.log('acc: ', acc);
  }
   result = count;
   if (flagYisNeg) {
    result *= -1;
  }
   if (acc === x) {
     return result;
   }
   // if has a remainder ie. not evenly divisible
   result = result - 1;
   console.log(`count is ${count} and acc is ${acc}`);

   return result;
 };

 const divide = (x, y) => {
   return divisionOperations(x, y);
 };

 const modulo = (x, y) => {
   const quotient = divisionOperations(x, y);
   const z = x - (multiply(y, result));
   return z;
 }

//  console.log(divide(1, 1));// 1
//  console.log(divide(2, 2)); // 1
//  console.log(divide(56, 7)); // 8
//  console.log(divide(56, -7)); // -8
//  console.log(divide(2, -2)); // - 1
//  console.log(divide(90, 2)); // 45
//  console.log(divide(90, 0)); // NaN
//  console.log(divide(0, 0)); // NaN
//  console.log(divide(90, -0)); // NaN
//  console.log(divide(90, 7));
//  console.log(divide(-90, -3)); // 30

 console.log(modulo(90, 7));

