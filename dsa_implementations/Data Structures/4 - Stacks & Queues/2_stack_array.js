class Stack {
  constructor() {
    this.values = [];
  }

  peek() {
    return this.values[this.values.length - 1];
  }

  push(value) {
    this.values.push(value);
  }

  pop() {
    this.values.pop();
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
