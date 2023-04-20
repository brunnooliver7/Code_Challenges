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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let leftDepth = 0;
  if (root.left) {
    leftDepth = maxDepth(root.left) + 1;
  }

  let rightDepth = 0;
  if (root.right) {
    rightDepth = maxDepth(root.right) + 1;
  }

  return Math.max(leftDepth, rightDepth);
};
