/**
 *
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 *
 *
 *  nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
 */

let arr = [3,3,5,5,6,7];

function slideWidow(arr, k) {
  let queue = [];
  let result = [];
  for (let i = k - 1, j = 0; i < arr.length; ) {
    if (i < j) {
      result.push(queue.shift());
      i++;
      j = i - (k - 1);
      continue;
    }

    while (queue.length && queue[queue.length - 1] < arr[j]) {
        queue.pop();
        queue.push[arr[j]];
    }
    
    queue.push(arr[j]);
    j++;
  }

  return result;
}

console.log(slideWidow(arr, 3));
