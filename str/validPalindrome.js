function isPalindrome(st, ed) {
    while(st<ed) {
        if(s[st] !== s[ed]) {
            return false
        }
        st++
        ed--
    } 
    return true
}

function validPalindrome(str) {
    let l = 0;
    let r = str.length - 1;

    while (l < r && str[l] === str[r]) {
        l++;
        r--;
    }

    if (str[l + 1] === str[r]) {
        return true;
    }

    if (str[r - 1] === str[l]) {
        return true;
    }

    return false;




}

console.log(validPalindrome('yebssey'));