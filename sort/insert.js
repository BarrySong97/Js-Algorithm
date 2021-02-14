let nums = [0, 2, 1, 4, 6, 3, 53, 2, 32, 32];



function insertSort() {
    let len = nums.length;
    let temp;
    for (let i = 1; i < len; i++) {

        temp = nums[i];
        let j = i;
        while (j > 0 && nums[j - 1] > temp) {
            nums[j] = nums[j - 1];
            j--;
        }
        nums[j] = temp;
    }
}

insertSort();
console.log(nums);