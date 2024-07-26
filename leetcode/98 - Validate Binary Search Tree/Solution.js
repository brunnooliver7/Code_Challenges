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
var isValidBST = function (root) {
  return isValid(root);
};

function isValid(root, arr = []) {
  if (!root) return true;

  // repeated values
  if (arr.includes(root.val)) return false;

  // validate node
  if (root.left?.val >= root.val || root.right?.val <= root.val) return false;

  // validate each child value
  // arr contains all parent values,
  // if the child (left of right) should be in some of the parents, the tree is not valid
  if (
    arr &&
    root.left?.val &&
    arr.some((v) => root.left?.val < v && root.val > v)
  )
    return false;
  if (
    arr &&
    root.right?.val &&
    arr.some((v) => root.right?.val > v && root.val < v)
  )
    return false;

  // update arr
  arr.push(root.val);

  // validate childs
  const l = isValid(root.left, arr);
  const r = isValid(root.right, arr);

  return l && r;
}


// try again with NeetCode solution
