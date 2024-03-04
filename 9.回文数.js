/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.56%)
 * Likes:    1057
 * Dislikes: 0
 * Total Accepted:    337.6K
 * Total Submissions: 586.2K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let xTmp = x;
  let reverseNum = 0;
  while (xTmp > reverseNum) {
    reverseNum = reverseNum * 10 + (xTmp % 10);
    xTmp /= 10;
    xTmp = Math.floor(xTmp);
  }
  return xTmp === reverseNum || xTmp === Math.floor(reverseNum / 10);
};
var isPalindrome2 = function (x) {
  const sign = Math.sign(x);
  if (sign === 0) {
    return true;
  } else if (sign !== 1) {
    return false;
  }
  const tmp = ("" + x).split("");
  const middle = Math.floor(tmp.length / 2);
  let x1;
  let x2;
  if (tmp.length % 2 === 0) {
    x1 = tmp.slice(0, middle);
    x2 = tmp.slice(middle).reverse();
  } else {
    x1 = tmp.slice(0, middle);
    x2 = tmp.slice(middle + 1).reverse();
  }
  return arraysEqual(x1, x2);
};
const arraysEqual = function (a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
// @lc code=end
