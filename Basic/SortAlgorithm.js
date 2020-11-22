const test = [2, 1, 5, 6, 2, 65, 2, 5];

//冒泡排序
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
//选择排序
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swap(arr, i, minIndex);
  }
}
//插入排序
function insertSort(arr) {
  let preIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    preIndex = i - 1;
    while (preIndex >= 0 && current < arr[preIndex]) {
      arr[i] = arr[preIndex--];
    }
    arr[preIndex + 1] = current;
  }
}
//归并排序
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let l = arr.slice(0, mid);
  let r = arr.slice(mid);
  //   console.log(l, r);
  return merge(mergeSort(l), mergeSort(r));
}

function merge(l, r) {
  let assitant = [];
  while (l.length && r.length) {
    if (l[0] <= r[0]) {
      assitant.push(l.shift());
    } else {
      assitant.push(r.shift());
    }
  }

  if (l.length) {
    assitant = assitant.concat(l);
  }

  if (r.length) {
    assitant = assitant.concat(r);
  }
  return assitant;
}

/**
 *
 * @param {*} arr 操作数组
 * @param {*} x 要交换的两个index
 * @param {*} y
 */
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// selectSort(test);
// bubbleSort(test);
// insertSort(test);
console.log(mergeSort(test));
// console.log(test);
// mergeSort(test);
