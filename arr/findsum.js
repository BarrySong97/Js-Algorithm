/**
 * 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 */

let arr = [2, 4, 5, 6, 7];


function findSum(sum) {
  let map = new Map();
  map.set(arr[0], 0)
  console.log(map);
  for (let i = 1; i < arr.length; i++) {
    if (map.get(sum - arr[i]) !== undefined) {
      return `[${map.get(sum - arr[i])}, ${i}]`;
    }
    map.set(arr[i], i);
  }
}

console.log(findSum(9));


var twoSum = function (nums, target) {
  let len = nums.length;

  if (!len) {
    return [];
  }

  if (len === 2 && nums[0] + nums[1] === target) {
    return nums;
  }

  let map = new Map();
  map.set(nums[0], 0);
  let res = [];
  for (let i = 1; i < len;  ++i) {
    if (map.has(target - nums[i])) {
      res = res.concat([map.get(target - nums[i]), i]);
    }
    map.set(nums[i], i);
  }

  return res;
};
console.log(twoSum([3, 2, 4], 6));


