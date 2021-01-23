/**
 * 
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *      输入: [1,2,3]
        输出: [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
        ]
 */

let arr = [1, 2, 3 ,4];

let result = [];
function permute() {
  for (let i = 0; i < arr.length; i++) {
    let origin = arr.slice();
    origin.splice(i, 1);
    let current = [];
    dfs(arr[i], origin, current);
  }

  return result;
}

function dfs(value, temp, current) {
  if (temp.length === 1) {
    current.push(value);
    current.push(temp.pop());
    result.push(current.slice());
    
    return;
  }

  current.push(value);

  for (let i = 0; i < temp.length; i++) {
    
    let origin = temp.slice();
    origin.splice(i, 1);
    let copy = current.slice();
    dfs(temp[i], origin, current);
    current = copy;
    
    
  }
}

console.log(permute());
