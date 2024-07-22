/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let res = new ListNode(0, head);
  let startWindow = res;
  let endWindow = head;

  for (let i = 0; i < n; i++) {
    endWindow = endWindow.next;
  }

  while (endWindow) {
    startWindow = startWindow.next;
    endWindow = endWindow.next;
  }

  startWindow.next = startWindow?.next?.next;

  return res.next;
};
