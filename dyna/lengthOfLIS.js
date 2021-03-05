var lengthOfLIS = function (nums) {

    let res = new Array(nums.length);
    res.fill(1);
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                res[i] = Math.max(res[i], res[j] + 1);
            }

        }
        max = Math.max(res[i], max);
    }

    return max;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 18, 101, 7]));
