/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class Stack {
  constructor() {
    this.storage = [];
    // storage always an array
  }
  add(val) {
    return this.storage.push(val);
    // use array method to add to end
  }
  remove() {
    return this.storage.pop();
    // use pop array method to pop off last element in
  }
  get size() {
    return this.storage.length;
    // get allows this.stack.size to become a property rather than a method (uses a getter)
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(x, y) {
    // where x is a stack and y is a stack
    // and both are arrays
    return x.concatenate(y);
  }
}

const queue = new Queue();
console.log(queue);
console.log(typeof queue);

