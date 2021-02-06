/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null;
    }

    printList() {
        let current = this;
        while (current && current.val) {
            console.log(current.val);
            current = current.next
        }
    }
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
function createLinkList(arr) {
    let linkList = new ListNode(arr.shift());
    let current = linkList;

    while (arr.length) {
        current.next = new ListNode(arr.shift());
        current = current.next;
    }

    return linkList;
}

let linkList1 = createLinkList([-10, -3, 0, 5, 9]);
let linkList2 = createLinkList([1, 3, 4]);
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let current = head;
    let stack = [];

    if (!head) {
        return null;
    }
    while (current) {
        stack.push(current.val);
        current = current.next;
    }


    function buildBt(start, end) {
        let mid = (start + end) / 2;

        let root = new TreeNode(stack[mid]);

        root.left = buildBt(start, mid - 1);
        root.right = buildBt(mid + 1, end);
        return root;
    }

    return buildBt(0, stack.length - 1);
};

sortedListToBST(linkList1);

