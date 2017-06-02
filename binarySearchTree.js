// A binary search tree or a BST is a binary tree in which data with lesser values are stored in left nodes and data with greater values is stored in right nodes. This characteristics provide for very efficient searches and holds for both numeric data and non-numeric data.
// Binary Search Tree Implementation

// A binary search tree is made up of nodes, therefore we need to start with creating a Node object.

function Node (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

// The Node object stores data and links to other nodes (left & right).

// The show( ) function displays the data stored in a node.
function show() {
  return this.data;
}

// // Now we can build a class to represent a BST. The class has to consist of one data member or a Node object that represents the root node. The constructor for the class sets the root node to null, creating an empty node.

// we need an insert function to add new nodes to the tree. This function will initially create a Node object, passing in the data the node will store. Secondly we check the BST for a root node. If a root node doesn't exist, the BST is new and this node is the root node, this completes the function definition.

// If the node being inserted is not the root node, then we have to traverse the BST to find the proper insertion point. The function uses a Node object that is assigned as the current node as the function moves from level to level in the BST. This function also has to position itself inside the BST at the root node.

// Once inside the BST, the next step is to determine where to put the node. This is performed inside a loop that breaks once the correct insertion point is determined.

// The algorithm for determining the correct insertion point for a node is as follows.

//     Set the root node to be the current node.
//     If the data value in the inserted node is less than the data value in the current node, set the new current node to be the left child of the current node. If the data value in the inserted node is greater than the data value in the current node, skip to step 4.
//     If the value of the left child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
//     Set the current node to be the right child of the current node.
//     If the value of the right child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.

// With this algorithm complete, we're ready to implement this part of the BST class.

// BST class
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
} else {
  var current = this.root;
  var parent;
  while (true) {
    parent = current;
    if (data < current.data) {
      current = current.left;
      if (current === null) {
        parent.left = n;
        break;
      }
    } else {
      current = current.right;
      if (current === null) {
        parent.right = n;
        break;
        }
      }
    }
  }