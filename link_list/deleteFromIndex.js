/**
 *
 *
 * 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个结点后，链表变为 1->2->3->5
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
function deleteFromIndex(index) {
  let dummy = new Node(null);
  dummy.next = linkList;
  let fast = dummy;
  let slow = dummy;
  while (fast.next) {
    if (index !== 0) {
      index--;
      fast = fast.next;
    }

    if (index === 0) {
      fast = fast.next;
      slow = slow.next;
    }
  }

  slow.next = slow.next.next;
  return dummy.next;
}

deleteFromIndex(4).printList();
