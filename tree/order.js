// 先序遍历
// 中序遍历
// 后序遍历
const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};

let arr = [1, 2, 3,]


function preOrder() {

    const res = [];
    const temp = [];
    temp.push(root);
    while (temp.length) {
        let popNode = temp.pop();
        res.push(popNode.val);
        if (popNode.right) {
            temp.push(popNode.right);
        }
        if (popNode.left) {
            temp.push(popNode.left);
        }
    }

    return res;
}


function midOrder() {
    const res = [];
    const temp = [];
    let cur = root;
    temp.push(root)
    while (cur || temp.length) {

        while (cur) {
            temp.push(cur);
            cur = cur.left;
        }
        let popNode = temp.pop();
        res.push(popNode.val);
        // cur = cur.right;

    }

    return temp;
}

function backOrder() {
    const res = [];
    const temp = [];
    temp.push(root);
    while (temp.length) {
        let popNode = temp.pop();
        res.unshift(popNode.val);
        if (popNode.left) {
            temp.push(popNode.left);
        }
        if (popNode.right) {
            temp.push(popNode.right);
        }

    }
    return res;
}

// console.log(preOrder());
// console.log(backOrder());
// console.log(midOrder());


var levelOrder = function (root) {
    let res = [];
    if (!root) {
        return res;
    }
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let shift = queue.shift();
        res.push(shift.val);
        if (shift.left) {
            let l = shift.left;
            queue.push(l);
        }
        if (shift.right) {
            let r = shift.right;
            queue.push(r);
        }
    }

    return res;
}; 

// console.log(levelOrder(root));

var invertTree = function(root) {
   
    if (!root) {
        return root;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);

};
invertTree(root);
console.log(levelOrder(root));