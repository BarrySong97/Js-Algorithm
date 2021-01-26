// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例: 输入: n = 4, k = 2
// 输出:
// [
// [2,4],
// [3,4],
// [2,3],
// [1,2],
// [1,3],
// [1,4],
// ]

let arr = [1, 2, 4, 5]

function combineSubset( k) {

    let result = [];

    const dfs = (index, list) => {

        if (list.length === k) {
            result.push(list.slice());
            reutrn;
        }

        for (let i = index; i < arr.length; i++) {
            list.push(arr[i]);
            dfs(i + 1, list);
            list.pop();
        }
    }

    dfs(0, []);

}

