let value = [3, 4, 5, 6, 10, 3];
let weight = [10, 4, 5, 6, 6, 1];


function dp_knapsack(value, weight, c) {
    let arr = new Array(value.length).fill(0).map(_ => new Array(c + 1).fill(0));
    arr[0].map((v, i) => {

        if (weight[0] <= i) {
            arr[0][i] = value[0];
        }
    })
    // for (let i = 1; i < weight.length; i++) {
    //     for (let j = 1; j <= c; j++) {
    //         if (weight[i] > j) {
    //             arr[i][j] = arr[i - 1][j];
    //         } else {
    //             let a = arr[i - 1][j - weight[i]] + value[i];
    //             let b = arr[i - 1][j];
    //             arr[i][j] = Math.max(a, b);
    //         }
    //     }
    // }
    // return arr[arr.length - 1][c];
    let res = new Array(c + 1);
    res.fill(0)
    for (let i = 1; i < weight.length; i++) {
        for (let j = c; j >= weight[i]; j--) {
            res[j] = Math.max(res[j], res[j - weight[i]] + value[i])
        }   
    }
    return res[c];
   
}
console.log(dp_knapsack(value, weight, 20));
