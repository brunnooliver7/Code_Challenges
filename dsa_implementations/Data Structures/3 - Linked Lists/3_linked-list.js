// Create the below linked list:

// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };

    // modify one property, but still points to this.head, so this.head is also modified
    this.tail.next = newNode;

    // redefine this.tail, does not modify this.head
    // but newNode memory is inside this.head, so this.tail is still inside this.head, but in another location
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: { ...this.head },
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this._traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  remove(index) {
    const leader = this._traverseToIndex(index - 1);
    const item = leader.next;
    leader.next = item.next;
  }

  reverse() {
    // create a copy instead of pointing to this.tail in memory
    let reversedList = { ...this.tail };

    // pointing newTail to reversedList
    let newTail = reversedList;

    for (let i = this.length - 2; i >= 0; i--) {
      const el = this._traverseToIndex(i);

      const newNode = {
        value: el.value,
        next: null,
      };

      // newTail points to reversedList, 
      // and now newNode also points to reversedList,
      // so reverseList is being updated here
      newTail.next = newNode;
      
      // newNode points to reversedList, 
      // so newTail is still pointing to reversedList, but now in another location in memory
      newTail = newNode;
    }

    this.head = reversedList;
    this.tail = newTail;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: { ...this.head },
      prev: null,
    };
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;

    newNode.prev = leader;
    newNode.next = follower;

    leader.next = newNode;
    follower.prev = newNode;

    this.length++;
  }

  remove(index) {
    const leader = this._traverseToIndex(index - 1);
    const item = leader.next;
    leader.next = item.next;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new LinkedList(1);
// console.log(myLinkedList);
myLinkedList.append(2);
// console.log(myLinkedList);
myLinkedList.append(3);
// console.log(myLinkedList);

// myLinkedList.prepend(1);
// console.log(myLinkedList);
// myLinkedList.prepend(2);
// console.log(myLinkedList);

// myLinkedList.insert(1, 2);
// console.log(myLinkedList);

// myLinkedList.remove(1);
// console.log(myLinkedList);

myLinkedList.reverse();
// console.log(myLinkedList);

// let myDoublyLinkedList = new DoublyLinkedList(10);
// console.log(myDoublyLinkedList);
// myDoublyLinkedList.append(5);
// console.log(myDoublyLinkedList);
// myDoublyLinkedList.append(16);
// console.log(myDoublyLinkedList);

// myDoublyLinkedList.prepend(1);
// console.log(myDoublyLinkedList);
// myDoublyLinkedList.prepend(2);
// console.log(myDoublyLinkedList);

// myLinkedList.insert(1, 2);
// console.log(myLinkedList);

// myLinkedList.remove(1)
// console.log(myLinkedList);
