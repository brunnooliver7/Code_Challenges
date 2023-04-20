class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = this.top;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
  }

  pop() {
    if (this.top) {
      this.top = this.top.next;
      this.length--;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
  }

  //isEmpty
}

const myStack = new Stack();

// Discord
// Udemy
// Google

let stack = new Stack();
stack.push("Google");
stack.push("Udemy");
stack.push("Discord");
stack.pop();
console.log(stack);
