var longestPalindromeSubseq = function (s) {
    let res = new Array(s.length).fill(0).map(_ => new Array(s.length).fill(false));
    res.map((v, i) => {
        v[i] = true;
    })
    let maxLen = 0;
    let start;
    let end;
    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] === s[j] && (j - i === 1 || res[i + 1][j - 1])) {
                res[i][j] = true;


                if (maxLen < j - i + 1) {
                    maxLen = j - i + 1;
                    start = i;
                    end = j;
                }

            }
        }

    }

    return s.substring(start, end + 1);


};

console.log(longestPalindromeSubseq("aaaaa"));


