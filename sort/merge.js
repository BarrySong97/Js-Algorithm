let arr = [0, 2, 1, 4, 6, 3, 53, 2, 32, 32];

function mergeSort(nums) {

    if (nums.length <= 1) {
        return nums;
    }
    let len = nums.length;
    let mid = Math.floor(len / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid, len));
    nums = merge(left, right);
    return nums;
}

function merge(left, right) {


    let res = [];

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            res.push(right.shift());
        } else {
            res.push(left.shift());
        }
    }

    while (left.length) {
        res.push(left.shift());
    }

    while (right.length) {
        res.push(right.shift());
    }

    return res;
}

console.log(mergeSort(arr)); 

