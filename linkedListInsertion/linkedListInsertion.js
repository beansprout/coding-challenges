/*
 * Create a linked list that maintains a sorted order to it's elements.
 * When you insert a new element insert it at it's appropriate position.
 * Example: [1] -> [2] -> [3]
 * list.insert(3);
 * [1] -> [2] -> [2] -> [3]
 * Bonus: Write automated tests
 */

// LinkedList ES6 Implementation
// LinkedList.js
class LinkedList {
  constructor() {
    this.hd = null;
    this.tl = null;
    this.count = 0;
  }

  get length() {
    return this.count;
  }

  addLast(data) {
    // Create a new Node
    const node = {
      data,
      next: null,
    };

    if (this.count === 0) {
      // If this is the first Node, assign it to hd
      this.hd = node;
    } else {
      // If not the first node, link it to the last node
      this.tl.next = node;
    }

    this.count += 1;
  }

  addFirst(data) {
    // Create a new Node
    const node = {
      data,
      next: null,
    };

    // Save the first Node
    const temp = this.hd;

    // Point hd to the new Node
    this.hd = node;

    // Add the rest of node behind the new first Node
    this.hd.next = temp;

    this.count += 1;

    if (this.count === 1) {
      // If first node,
      // point tl to it as well
      this.tl = this.hd;
    }
  }

  removeFirst(data) {
    if (this.count > 0) {
      // The hd should point to the second element
      this.hd = this.hd.next;

      this.count -= 1;

      if (this.count === 0) {
        // If list empty, set tl to null
        this.tl = null;
      }
    }
  }

  removeLast(data) {
    if (this.count > 0) {
      if (this.count === 1) {
        this.hd = null;
        this.tl = null;
      } else {
        // Find the Node right before the last Node
        let current = this.hd;
        while (current.next !== this.tl) {
          current = current.next;
        }

        current.next = null;
        this.tl = current;
      }
      this.count -= 1;
    }
  }
}

const myLinkedList = new LinkedList();
this.data = [1, 3, 5, 7];

