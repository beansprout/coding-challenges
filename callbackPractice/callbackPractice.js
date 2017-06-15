
/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 greeting('Hey guys', (message) => {
    console.log(message);
 });
  // You would then define the greeting function to make the invocation work.
  // const greeting = (str, cb) => {
  //  cb(str);
 };
 */


// Write a function called firstItem that passes the first
// item of the given array to the callback function

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const firstItem = (list, cb) => {
  cb(list[0]);
};

firstItem(foods, (getFirstItem) => {
  console.log(`The first item is ${getFirstItem}.`);
});


// Write a function called getLength that passes the length of the array into the callback

const getLength = (arr, cb) => {
  cb(arr.length);
};

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});
<<<<<<< HEAD

=======
>>>>>>> 9e3ebd20a77ef7801b11e6a1d2b040d745f339d2

// Write a function called last which passes the last item of the array into the callback

const last = (list, cb) => {
  cb(list[-1]);
};

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback

const sumNums = (x, y, cb) => {
  cb(x + y);
};

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});


// Write a function called multiplyNums that adds two numbers and passes the result to the callback
const multiplyNums = (x, y, cb) => {
  cb(x * y);
};

multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

const contains = (arr, str, cb) => {
  cb(arr.includes(str));
};

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (arr, cb) => {
  // unique foods -> array.filter(duplicates)

}

// put everything into an obj:

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the
// provided array and passes the value and index into the callback.


const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});


