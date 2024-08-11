/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let reversed = reverse(head);

  while (head && reversed) {
    if (head.val != reversed.val) return false;
    head = head.next;
    reversed = reversed.next;
  }

  return true;
};

function reverse(list) {
  let reversed = new ListNode();

  while (list) {
    reversed.val = list.val;
    reversed = new ListNode(null, reversed);
    list = list.next;
  }

  return reversed.next;
}
