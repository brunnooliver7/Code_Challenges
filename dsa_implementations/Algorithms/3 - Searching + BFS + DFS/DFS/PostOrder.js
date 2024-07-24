const tree = require("../BT");

function traversePreOrder(node, list) {
  if (node.left) {
    traversePreOrder(node.left, list);
  }

  if (node.right) {
    traversePreOrder(node.right, list);
  }

  list.push(node.value);

  return list;
}

const result = traversePreOrder(tree.tree, []);
console.log(result)
