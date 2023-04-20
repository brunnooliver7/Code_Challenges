class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root || this.root.value === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        // Right
        if (value > currentNode.value) {
          if (currentNode.right !== null) currentNode = currentNode.right;
          else break;
        }
        // Left
        else {
          if (currentNode.left !== null) currentNode = currentNode.left;
          else break;
        }
      }

      // Right
      if (value > currentNode.value) currentNode.right = newNode;
      // Left
      else currentNode.left = newNode;
    }
  }

  lookup(value) {
    if (!this.root) {
      return null;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value === currentNode.value) {
          return currentNode;
        }
        // Left
        if (value < currentNode.value) {
          if (currentNode.left) currentNode = currentNode.left;
          else return null;
        }
        // Right
        else {
          if (currentNode.right) currentNode = currentNode.right;
          else return null;
        }
      }
    }
  }

  remove(value) {
    let node = this.lookup(value);

    // node is a leaf
    if (!node.left && !node.right) node = null;
    // node has 1 child
    // node has 2 child, replace with successor

    let currentNode = this.root;
    while (true) {
      // if (value === currentNode.value) {
      //   return currentNode;
      // }

      // Left
      if (value < currentNode.value) {
        // found node
        if (currentNode.left.value === value) {
          
          // node is a leaf
          if (!currentNode.left.left && !currentNode.left.right) {
            currentNode.left = null;
            break;
          }

          // node has 1 child: left
          if (currentNode.left.left && !currentNode.left.right) {
            currentNode.left = currentNode.left.left;
            break;
          }

          // node has 1 child: right
          if (!currentNode.left.left && currentNode.left.right) {
            currentNode.left = currentNode.left.right;
            break;
          }

          // node has 2 child, replace with successor
          else if (currentNode.left.left && currentNode.left.right) {
            currentNode.left.right.left = currentNode.left.left;
            currentNode.left = currentNode.left.right;
            break;
          }
        }

        // pass to next left node
        else {
          if (currentNode.left) currentNode = currentNode.left;
        }
      }

      // Right
      if (value > currentNode.value) {
        // found node
        if (currentNode.right.value === value) {
          // node is a leaf
          if (!currentNode.right.left && !currentNode.right.right) {
            currentNode.right = null;
            break;
          }

          // node has 1 child: left
          if (currentNode.right.left && !currentNode.right.right) {
            currentNode.right = currentNode.right.left;
            break;
          }

          // node has 1 child: right
          if (!currentNode.right.left && currentNode.right.right) {
            currentNode.right = currentNode.right.right;
            break;
          }

          // node has 2 child, replace with successor
          else if (currentNode.right.left && currentNode.right.right) {
            currentNode.right.right.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
            break;
          }
        }

        // pass to next right node
        else {
          if (currentNode.right) currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(4);
console.log(tree);
console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(20));

//      9
//   4     20
// 1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const obj = {
  value: 9,
  left: {
    value: 4,
    left: { value: 1, left: null, right: null },
    right: { value: 6, left: null, right: null },
  },
  right: {
    value: 20,
    left: { value: 15, left: null, right: null },
    right: { value: 170, left: null, right: null },
  },
};

// remove 170
const obj2 = {
  value: 9,
  left: {
    value: 4,
    left: { value: 1, left: null, right: null },
    right: { value: 6, left: null, right: null },
  },
  right: {
    value: 20,
    left: { value: 15, left: null, right: null },
    right: null,
  },
};

// remove 15
const obj3 = {
  value: 9,
  left: {
    value: 4,
    left: { value: 1, left: null, right: null },
    right: { value: 6, left: null, right: null },
  },
  right: {
    value: 20,
    left: null,
    right: { value: 170, left: null, right: null },
  },
};

// remove 4
const obj4 = {
  value: 9,
  left: { value: 6, left: { value: 1, left: null, right: null }, right: null },
  right: {
    value: 20,
    left: { value: 15, left: null, right: null },
    right: { value: 170, left: null, right: null },
  },
};
