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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return isSame(root.left, root.right);
};

function isSame(left, right) {
  // tem um mas não o outro
  if ((!left && !!right) || (!!left && !right)) return false;

  // os valores são diferentes
  if (left?.val != right?.val) return false;

  // chegou no fim
  if (!left && !right) return true;

  return isSame(left?.left, right?.right) && isSame(left?.right, right?.left);
}
