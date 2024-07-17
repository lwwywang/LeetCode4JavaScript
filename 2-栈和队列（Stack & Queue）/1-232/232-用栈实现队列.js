var MyQueue = function() {

    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0; 
};

// 使用示例
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());  // 输出: 1
console.log(queue.pop());   // 输出: 1
console.log(queue.empty()); // 输出: false
