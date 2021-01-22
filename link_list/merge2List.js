/**
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
 *
 * 1->2->4, 1->3->4 输出：1->1->2->3->4->4
 *
 *
 */

class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }

  printList() {
    let current = this;
    while(current && current.val) {
      console.log(current.val);
      current = current.next
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

let linkList1 = createLinkList([1, 2, 3]);
let linkList2 = createLinkList([1, 3, 4]);

function merge2List() {
  let head = new Node(null);
  let current = head;

  while (linkList1 && linkList2) {
    if (linkList1.val <= linkList2.val) {
      current.next = linkList1;
      linkList1 = linkList1.next;
    } else {
      current.next = linkList2;
      linkList2 = linkList2.next;
    }
    current = current.next;
  }

  if (linkList1) {
    current.next = linkList1;
  }

  if (linkList2) {
    current.next = linkList2;
  }
  return head.next;
}

merge2List().printList();
