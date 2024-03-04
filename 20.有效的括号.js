/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (41.72%)
 * Likes:    1605
 * Dislikes: 0
 * Total Accepted:    293.6K
 * Total Submissions: 703.7K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const format = {
  "(": ")",
  "[": "]",
  "{": "}",
};
// var isValid = function (s) {
//   const result = [];
//   const k = Object.keys(format);
//   const v = Object.values(format);
//   for (let i = 0; i < s.length; i++) {
//     const t = s[i];
//     if (k.includes(t)) {
//       result.push(t);
//     } else if (v.includes(t)) {
//       const last = result.slice(-1);
//       if (format[last] === t) {
//         result.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return result.length <= 0;
// };
var isValid = function (s) {
  const queue = [];
  let result = true;
  for (let i = 0; i < s.length; i++) {
    const t = s[i];
    if (t === "(" || t === "{" || t === "[") {
      queue.push(format[t]);
    } else {
      const first = queue.pop();
      if (first !== t) {
        result = false;
        break
      }
    }
  }
  if (result) {
    result = queue.length <= 0;
  }
  return result;
};
// @lc code=end
