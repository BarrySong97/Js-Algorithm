/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *  1->2->3->4->5->NULL, m = 2, n = 4
 *  1->4->3->2->5->NULL
 *
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

function reverseLinkPart(start, end) {
  let current = linkList;
  let head = linkList;
  if (!current || !current.next) {
    return current;
  }


  if (start === end && start === 1) {
    return current;
  }
  let i = 0;
  let startNode = new Node(null);

  if (start > 1) {
    while (current.next) {
      if (start - 2 === i) {
        startNode = current;
      }
      if (start - 1 === i) {
        break;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  let tail = current.next;
  let leftNode = current;

  for (let k = i; k < end - 1; k++) {
    let next = tail.next;

    tail.next = current;

    current = tail;

    tail = next;
  }

  if (start === 1 && current.next) {
    head.next = null;
    return current;
  } else {
    startNode.next = current;
    leftNode.next = tail;

    return head;
  }

  
}

reverseLinkPart(1, 1).printList();
