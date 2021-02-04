/**
 *
 *
 *
 * 给你一个包含 n 个整数的数组 arr，判断 arr 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 *
 * 给定数组 arr = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 *
 *
 * [-1, -1, 0, 1, 2]
 */

arr = [-2,-3,0,0,-2];

function threeSum(nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });

  let result = [];

  let len = nums.length;
  let k = 0;
  let r = len - 1;
  let l = 1;

  let m = -1;

  while (nums.length >= 3) {
    if (r === l) {
      let shift = nums.shift();
      while (shift === nums[k]) {
        shift = nums.shift();

      }  
      l = 1;
      r = nums.length - 1;
    }
    if (nums[k] > 0 || nums.length < 3) {
      break;
    }

    if (nums[k] + nums[l] + nums[r] === 0) {
      result.push([nums[k], nums[l], nums[r]]);
      m++;
      if (
        m >= 1 &&
        result[m][0] === result[m - 1][0] &&
        result[m][1] === result[m - 1][1]
      ) {
        {
          result.pop();
          m--;
        }
      }
    }

    nums[l] + nums[r] + nums[k] > 0 ? r-- : l++;
  }
  return result;
}

console.log(threeSum(arr));


