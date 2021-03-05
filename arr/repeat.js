var search = function (nums, target) {
    let l = 0;
    let len = nums.length;
    let r = len - 1;
    let count = 0;

    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (target > nums[m]) {
            l = m + 1;

        } else if (target < nums[m]) {
            r = m - 1;

        } else {
            l = m;
            break;
        }
    }

    let copy = l;
    while (copy - 1 >= 0 && nums[copy - 1] === target) {
        count++;
        l--;
    }


    while (l < len && nums[l] === target) {
        count++;
        l++;
    }


    return count;
};


console.log(search([5, 7, 7, 8, 8, 10], 8));