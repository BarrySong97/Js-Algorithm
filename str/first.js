var firstUniqChar = function(s) {
    let map = new Map();
    s.split("").forEach((v) => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
             map.set(v, 1);
        }
       

    })
    let res = " ";
    for (let i = 0; i < s.length; i++) {
        if(map.get(s[i]) === 1) {
            res = s[i];
            break;
        }
    }
    return res;
};

firstUniqChar("leetcode");