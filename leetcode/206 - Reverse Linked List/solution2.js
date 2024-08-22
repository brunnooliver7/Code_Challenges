/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;

  let reversed = new ListNode(head.val, null);

  while (head.next) {
    head = head.next;
    reversed.next = { ...reversed };
    reversed.val = head.val;
  }

  return reversed;
};
