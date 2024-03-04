/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (38.93%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    97.5K
 * Total Submissions: 249.8K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle)
// }

var strStr = function(haystack, needle) {
  if (!needle) {
    return 0
  }
  const f = needle[0]
  for (let i = 0; i < haystack.length; i++) {
    if (f === haystack[i]) {
      if (needle.length === 1) {
        return i
      }
      let j = i + 1
      let k = 1
      while (j < i + needle.length) {
        if (haystack[j] != needle[k]) {
          break
        } else if (j === i + needle.length - 1) {
          return i
        }
        j++
        k++
      }
    }
  }
  return -1
}
// @lc code=end
