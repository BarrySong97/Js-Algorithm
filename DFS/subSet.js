

/**
 * 
 * 
 * 
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
    说明：解集不能包含重复的子集。
 */
let arr = [1, 2, 3];

let result = [];
function subSets(arr) {
  const dfs = (index, list) => {
    res.push(list.slice()); // 调用子递归前，加入解集
    for (let i = index; i < arr.length; i++) {
      // 枚举出所有可选的数
      list.push(nums[i]); // 选这个数
      dfs(i + 1, list); // 基于选这个数，继续递归，传入的是i+1，不是index+1
      list.pop(); // 撤销选这个数
    }
  };
}
