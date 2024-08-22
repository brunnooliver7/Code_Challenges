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
  if (!head || !head?.next) return head;

  let currentNode = head;
  let reversedList = null;

  while (currentNode) {
    reversedList = new ListNode(currentNode.val, reversedList);
    currentNode = currentNode.next;
  }

  return reversedList;
};
