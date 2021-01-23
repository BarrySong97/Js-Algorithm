/**
 *
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 */

class Queue {
  stack1 = [];
  stack2 = [];

  /**
   * 
   * push(x) -- 将一个元素放入队列的尾部。
     pop() -- 从队列首部移除元素。
     peek() -- 返回队列首部的元素。
     empty() -- 返回队列是否为空
   */

  push(value) {
    this.stack1.push(value);
  }

  pop() {
    this.transform();

    return this.stack2.pop();
  }

  transform() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }

  peek() {
    this.transform();

    return this.stack2[this.stack2.length - 1];
  }

  empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
  }
}


let myQueue = new Queue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.push(4);

console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.peek());
console.log(myQueue.empty());
console.log(myQueue.pop());
console.log(myQueue.empty());
