/*
 * Implement a function to check if a binary tree is a binary search tree.
 * Assume that each node of the tree has an integer as its value.
 * In order for a binary tree to be qualified as a BST it must store all
 * values in sorted order.
 *
 */
// A binary tree:
{
  value: 15,
  left: {
          value: 7,
          left: {
                  value: 1,
                  left: null,
                  right: null
                 },
          right: {
                   value: 12,
                   left: null,
                   right: null
                 }
        },
  right: null
}

//a binary tree as an array of tuples
var tree = [15, [7, [1, null, null], [12, null, null]], null]
//each tuple is structured as [value, left, right]:

// check each branch of the tree

/* treeObj = {
             left: {
                lnode1: val,
                lnode2: val
                lnode3: {
                  ln3left: {
                    node4: val,
                    node5: val
                  },
                  ln3right: {
                    n6: val
                  }
                },
                right: {
                  rnode1: {
                    rn1left: {
                      rn4: val,
                      rn5: val,
                      rn6: val
                    },
                    rn1right: {
                      rn7: val
                    }
                  },
                  rnode2: val
                }
              }



const validateBST = (tree) => {

}

