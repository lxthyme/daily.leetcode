/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var startIdx = 0
  var endIdx = nums.length
  while (startIdx <= endIdx) {
    const midIdx = startIdx + parseInt((endIdx - startIdx) / 2)
    if (nums[midIdx] == target) {
      return midIdx;
    } else if (nums[midIdx] < target) {
      startIdx = midIdx + 1
    } else {
      endIdx = midIdx - 1
    }
  }
  return -1
};
// @lc code=end
