/**
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *  nums1 = [1,2,3,0,0,0], m = 3
 *  nums2 = [2,5,6], n = 3
 *  输出: [1,2,2,3,5,6]
 *
 */

let arr1 = [1, 2, 3, 4, 5, 6, 7];

let arr2 = [3, 4, 7, 20, 12];

function merge() {
  
  let result = new Array();

  while(arr1.length && arr2.length) {
      if (arr1[0] > arr2[0]) {
        result.push(arr2.shift());
      } else {
        result.push(arr1.shift());
      }
  }

  while (arr1.length) {
    result.push(arr1.shift());
  }

  while (arr2.length) {
    result.push(arr2.shift());

  }

  return result;
}

console.log(merge());
