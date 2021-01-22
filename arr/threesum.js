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

arr = [-8,-8, -2, -2, 0, 1, 2, -1, -1, -4, 3, 3, 6, 4];

function threeSum() {
  arr = arr.sort((a, b) => {
    return a - b;
  });

  console.log(arr);
  let result = [];

  let len = arr.length;
  let k = 0;
  let r = len - 1;
  let l = 1;

  let m = -1;

  while (arr.length > 3) {
    if (r === l) {
      arr.shift();
      l = 1;
      r = arr.length - 1;
    }

    if (arr[k] + arr[l] + arr[r] === 0) {
      result.push([arr[k], arr[l], arr[r]]);
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

    arr[l] + arr[r] + arr[k] > 0 ? r-- : l++;
  }
  return result;
}

console.log(threeSum());
