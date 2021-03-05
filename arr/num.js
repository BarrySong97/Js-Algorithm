var findContinuousSequence = function(target) {
    let s = 1;
    let e = 2;
    let res = [];

    while (s < e) {
        let sum = 0;
        let tempResult = []
        for (let i = s; i <= e; i++ ) {
            sum += i;
            tempResult.push(i)
        }

        if (sum === target) {
            res.push(tempResult);
            s++;
        } else if (sum < target) {
            e++;
        } else {
            s++;
        }
    }
   return res;
};

console.log(findContinuousSequence(9));
