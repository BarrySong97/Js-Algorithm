/**
 * 
 */
let nums = [0, 2, 1, 4, 6, 3, 53, 2, 32, 32];
function selectSort() {
    let len = nums.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i; j < len; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
        }


    }
}

selectSort();
console.log(nums);