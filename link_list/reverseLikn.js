/**
 *
 * 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }

  printList() {
    let current = this;
    while (current && current.val) {
      console.log(current.val);
      current = current.next;
    }
  }
}

function createLinkList(arr) {
  let linkList = new Node(arr.shift());
  let current = linkList;

  while (arr.length) {
    current.next = new Node(arr.shift());
    current = current.next;
  }

  return linkList;
}

let linkList = createLinkList([1, 2, 3, 4, 5, 5]);

function reverseLink() {
  let current = linkList;

  if (!current || !current.next) {
    return current;
  }

  let tail = current.next;
  let index = 0;
  while (tail.next) {
    let next = tail.next;

    tail.next = current;
    if (index === 0) {
      current.next = null;
      index++;
    }
    current = tail;
    tail = next;
  }
  tail.next = current;

  return tail;
}

reverseLink().printList();
