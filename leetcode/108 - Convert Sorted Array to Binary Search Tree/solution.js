/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const el = nums[mid];

  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1, nums.length);

  return new TreeNode(el, sortedArrayToBST(left), sortedArrayToBST(right));
};
