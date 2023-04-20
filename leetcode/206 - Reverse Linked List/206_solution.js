/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list
 * @return {ListNode}
 */
var reverseList = function (list) {
  if (typeof list?.val !== "number") return list;

  // cria uma lista nova
  let currentNode = { ...list };

  // preenche com o primeiro valor
  let reversedList = new ListNode(currentNode.val, null);

  // enquanto tiver um valor pra frente...
  while (typeof currentNode?.next?.val === "number") {
    // ... insere esse valor no começo da lista
    reversedList = new ListNode(currentNode?.next?.val, reversedList);

    // segue para o próximo valor
    currentNode = currentNode?.next;
  }

  return reversedList;
};
