/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let res = new ListNode();
  let curr = res;

  while (list1 && list2) {
      const v1 = list1?.val;
      const v2 = list2?.val;

      if (v1 > v2) {
          curr.next = list2;
          list2 = list2.next;
      }

      else {
          curr.next = list1;
          list1 = list1.next;
      }

      curr = curr.next;
  }

  curr.next = list1 || list2;

  return res.next;
};
