/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (24.90%)
 * Likes:    742
 * Dislikes: 0
 * Total Accepted:    37.5K
 * Total Submissions: 148.3K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 *
 *
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s === null || p === null) return false;
  const lenS = s.length,
    lenP = p.length;
  const dp = new Array(lenS + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(lenP + 1).fill(false);
  }

  dp[0][0] = true;
  for (let i = 1; i < lenP + 1; i++) {
    if (p[i - 1] === "*") {
      dp[0][i] = dp[0][i - 2];
    }
  }
  for (let i = 1; i < lenS + 1; i++) {
    for (let j = 1; j < lenP + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        if (s[i - 1] === p[j - 2] || p[j - 2] === ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[lenS][lenP];
};
// const tmp = {
//   "{": "}",
//   "(": ")",
// };
// const fn = (s) => {
//   const arr = [];
//   for (let i = 0; i < s.length; i++) {
//     const item = s[i];
//     const t = tmp[item];
//     if ("{(".includes(t)) {
//       arr.push(t);
//     } else if ("})".includes(t) && arr.slice(-1) === t) {
//       arr.shift();
//     } else {
//       console.log("Error: ", { arr, t, last: arr.slice(-1) });
//       break;
//     }
//   }
//   console.log('true')
//   return arr
// };
// @lc code=end
