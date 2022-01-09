function Stack() {
  this.arr = [];
  this.top = 0;
}

Stack.prototype.push = function (val) {
  this.arr[this.top] = val;
  this.top = this.top + 1;
}

Stack.prototype.pop = function () {
  if (this.is_empty()) {
    throw new Error("Underflow, stack is empty");
  }

  var topEl = this.arr[this.top - 1];

  this.top = this.top - 1;
  this.arr.pop();

  return topEl;
}

Stack.prototype.is_empty = function () {
  return this.top === 0;
}

Stack.prototype.reverse = function () {
  if (this.is_empty()) {
    throw new Error("Underflow, stack is empty");
  }

  var revStr = '';

  for (var i = this.top - 1; i >= 0; i--) {
    revStr += this.arr[i];
  }

  return revStr;
}

Stack.prototype.reverseV1 = function () {
  if (this.is_empty()) {
    throw new Error("Underflow, stack is empty");
  }

  var revStr = '';

  while(!this.is_empty()) {
    revStr += this.pop();
  }

  return revStr;
}

var stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');

console.log(stack.reverse()); // cba
console.log(stack.reverseV1()); // cba
