/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

const breadthFirstSearch = (tree, x) => {
  let arr =[];


  }
}

//Reference

// // class Queue {
//   constructor() {
//     this.storage = [];
//   }

//   enqueue(val) {
//     return this.storage.shift(val);
//   }

//   dequeue() {

//     this.storage.unshift();
//   }

//   get size() {
//     return this.storage.length;
//   }
// }

// module.exports = Queue;

// BFS

// queue of keys on a given level
// while queue has things in it
  // take the first item from the queue
  // if queue item matches search term return true
  // if queue item has children add its children to the queue
// return false


const breadthFirstSearch = (tree, searchTerm) => {
  let queue = Object.keys(tree).map(key => {
    return tree[key];
    console.log('queue: ', queue);
  });

  let value;
  while (queue.length > 0) {
    value = queue.shift()
    console.log('value: ', value);
    if (value === searchTerm) return true;
    if (typeof value !== 'number') {
      let keys = Object.keys(value); // [ 'x', 'y', 'z', 'zz' ]
      console.log('keys: ', keys);
                                     // [1, 1, 1, {...}]

      let values = keys.map(key => value[key]); // [1, 1, 1, {...}]
      console.log('values: ', values);
      queue = queue.concat(values);  // [..] + [1, 1, 1, {...}]
      console.log('queue: ', queue);
    }
  }
  return false;
};


const tree = {
  x: 1,
  y: 1,
  z: {
    x: 1,
    y: 1,
    z: 1,
    zz: {
      a: 1,
      b: 1,
      c: 1,
      d: {
        a: 1,
        b: 1,
        c: 1,
        d: {
          a: 1,
          b: 1,
          c: 2,
        },
      },
    },
  },
  a: 1,
};

console.log(breadthFirstSearch(tree, 2));