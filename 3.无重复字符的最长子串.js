/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (31.48%)
 * Likes:    2453
 * Dislikes: 0
 * Total Accepted:    222.8K
 * Total Submissions: 707.8K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const a = s.split("");
  const e = new Set(a);
  const l = e.size;
  if (l <= 2) {
    return l;
  }
  let maxLen = 0;
  let len = 0;
  let n;
  for (let i = 0; i < a.length; i++) {
    len = 0;
    n = new Set(a[i]);
    let j = i + 1;
    while (j < a.length) {
      n.add(a[j]);
      j++;
      if (len < n.size) {
        len = n.size;
      } else {
        break;
      }
      if (len >= e.size) {
        return len;
      }
    }
    if (maxLen < len) {
      maxLen = len;
    }
    if (maxLen >= e.size) {
      return maxLen;
    }
  }
  return maxLen;
};

var lengthOfLongestSubstring = (s) => {
  let left = 0,
    right = -1,
    max = -1;
  const freqMap = new Set();
  while (left < s.length) {
    const tmp = s[right + 1];
    if (freqMap.has(tmp)) {
      freqMap.delete(tmp);
      left += 1;
    } else {
      right += 1;
      freqMap.add(tmp);
    }
    max = Math.max(max, right - left + 1);
    console.log(
      `---[${left}, ${right}]Max: `,
      max,
      "\tF: ",
      freqMap
    );
    if (max > 20) {
      console.log("END");
      break;
    }
  }
};
