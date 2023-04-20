var MyQueue = function () {
  this.values = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.values.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const firstElement = this.values[0];
  this.values.shift();
  return firstElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.values.length) {
    return this.values[0];
  } else {
    return null;
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.values.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj);
obj.pop();
console.log(obj);
console.log(obj.peek());
//  var param_2 = obj.pop()
//  var param_3 = obj.peek()
//  var param_4 = obj.empty()
