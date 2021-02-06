// function isPalindrome(st, ed) {
//     while (st < ed) {
//         if (s[st] !== s[ed]) {
//             return false
//         }
//         st++
//         ed--
//     }
//     return true
// }

// function validPalindrome(str) {
//     let l = 0;
//     let r = str.length - 1;

//     while (l < r && str[l] === str[r]) {
//         l++;
//         r--;
//     }

//     if (str[l + 1] === str[r]) {
//         return true;
//     }

//     if (str[r - 1] === str[l]) {
//         return true;
//     }

//     return false;




// }

// console.log(validPalindrome('abbbca'));

// var isPalindrome = function (s) {
//     if (s.length === 0) {
//         return true;
//     }
//     s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
//     console.log(s);
//     let i = 0;
//     let j = s.length - 1;
//     while (i < j) {
//         if (s[i++] !== s[j--]) {

//             return false;
//         }
//     }

//     return true;
// };

// console.log(isPalindrome("race a car"));


var validPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[r] === s[l]) {
            r--;
            l++;
        } else {
            return isPali(s, l + 1, r);
        }
    }

    return true;
};

function isPali(str, l, r) { // 判断str是否回文
    while (l < r) {
        if (str[l] != str[r]) {  // 指向的字符不一样，不是回文串
            return false;
        }
        l++;                     // 指针相互逼近
        r--;
    }
    return true;               // 始终没有不一样，返回true
}

 console.log(validPalindrome("abc"));