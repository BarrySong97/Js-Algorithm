/**
 *
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

let map = new Map();
map.set('[', ']');
map.set('{', '}');
map.set('(', ')');

function isValid(str) {
  if (!str) {
    return true;
  }
  str.trim();
  let stack = [];
  let i = 0;
  while (str.length != i) {
    if (map.has(str[i])) {
      stack.push(map.get(str[i]));
      ++i;
    } else {
   
      if ( stack.pop() !==  str[i++]) {
        return false;
      }

    }
  }

  return true;
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
