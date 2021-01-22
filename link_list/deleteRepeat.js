/**
 * 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
 * 
 * 
 *  输入: 1->2->3->3->4->4->5
    输出: 1->2->5
    示例 2:
    输入: 1->1->1->2->3
    输出: 2->3
 * 
 * 
 * 
 * 
 * 
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

let linkList = createLinkList([1, 1, 1, 2, 2, 3, 4, 5, 5]);

function deleteRepeat() {
  let dummy = new Node(null);

  if (!linkList || !linkList.next) {
    return linkList;
  }

 
  dummy.next = linkList;
  let current = dummy;
  // 1->1->1->3
  // 1-2-3-4-4
  // 1-1
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
        let val = current.next.val;
        while (current.next && current.next.val === val) {
            current.next = current.next.next;
        }
    } else {
        current = current.next;
    }
  }

  return dummy.next;
}

deleteRepeat().printList();
