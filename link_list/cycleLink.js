/**
 *
 * 给定一个链表，判断链表中是否有环。
 *
 * [3,2,0,4]（链表结构如下图） 输出：true
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

function createCycle(list, index) {
  let head = list;
  let current = list;
  let i = 0;
  let cycleStart = null;
  while (current.next) {
    if (i === index) {
      cycleStart = current;
    }
    current = current.next;
    i++;
  }

  current.next = cycleStart;
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

linkList1 = createLinkList([1, 2, 3, 4, 5, 5]);
linkList2 = createLinkList([1, 2, 3, 4, 5, 6]);
createCycle(linkList1, 5);

/**
 * return -1 no cycle
 *
 * return i > 1 has cycle
 */
function hasCycle(list) {
  let head = list;
  let current = list;

  let map = new Map();

  if (!current) {
    false;
  }

  if (!current.next) {
    return false;
  }

  let i = 0;
  map.set(head, i);
  while (current.next) {
    current = current.next;

    if (map.has(current)) {
      return map.get(current);
    } else {
      map.set(current, ++i);
    }
  }

  return -1;
}

console.log(hasCycle(linkList1));
// console.log(hasCycle(linkList2));
