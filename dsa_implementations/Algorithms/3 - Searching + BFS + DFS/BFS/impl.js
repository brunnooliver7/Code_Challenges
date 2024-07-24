const tree = require("../BT");

function bfs(root) {
  let currNode = root;
  let list = [];
  let queue = [];

  queue.push(root);

  while (queue.length) {
    currNode = queue.shift();

    list.push(currNode.value);

    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }

  return list
}

const result = bfs(tree.tree);
console.log(result);
