/**
 *
 * 'yessey'
 */

function isPalindrome1(str) {
  // 缓存字符串的长度
  const len = str.length;
  // 遍历前半部分，判断和后半部分是否对称
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
function isPalindrome2(st, ed) {
  while (st < ed) {
    if (s[st] !== s[ed]) {
      return false;
    }
    st++;
    ed--;
  }
  return true;
}

console.log(isPalindrome2('yessey'));
