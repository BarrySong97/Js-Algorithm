let nums = [0, 2, 1, 4, 6, 3, 53, 2, 32, 32];

function quickSort(l, r) {
    if (l >= r) { return }
    let p = partition(l, r);
    quickSort(l, p - 1);
    quickSort(p + 1, r);
}

function partition(l, r) {
    let v = nums[l];
    let j = l;
    for (let i = l + 1; i < r; i++) {
        if (nums[i] < v) {
            [nums[j + 1], nums[i]] = [nums[i], nums[j + 1]];
            j++;
        }
    }
    [nums[j], nums[l]] = [nums[l], nums[j]];
    return j;
}


quickSort(0, nums.length);
console.log(nums);