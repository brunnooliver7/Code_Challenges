/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  let res = [];
  queue.push({
    node: root,
    level: 0,
  });

  while (queue.length) {
    const { node, level } = queue.shift();

    if (!node) continue;

    if (node.left)
      queue.push({
        node: node.left,
        level: level + 1,
      });

    if (node.right)
      queue.push({
        node: node.right,
        level: level + 1,
      });

    if (res[level]?.length) {
      res[level].push(node.val);
    } else {
      res[level] = [node.val];
    }
  }

  return res;
};
