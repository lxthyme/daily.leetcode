/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.05%)
 * Likes:    1347
 * Dislikes: 0
 * Total Accepted:    191.1K
 * Total Submissions: 578.3K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = Math.sign(x) == -1 ? true : false;
  let nX = ("" + Math.abs(x)).split("").reverse().join("");
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  nX = isNegative ? -nX : nX
  if (nX > max || nX < min) {
    return 0;
  }
  return nX;
};

var reverse2 = function (x) {
  const isNegative = x < 0;
  const reverseX = ("" + Math.abs(x)).split("").reverse().join("");
  let nX = parseFloat(reverseX);
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  if (isNegative) {
    nX = -nX;
  }
  if ((!isNegative && nX > max) || (isNegative && nX < min)) {
    return 0;
  }
  return nX;
};
