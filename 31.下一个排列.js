/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (33.71%)
 * Likes:    587
 * Dislikes: 0
 * Total Accepted:    77.5K
 * Total Submissions: 226.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 *
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 *
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    ///              i  j  k
    /// [1, 2, 3, 8, 5, 7, 6, 4]
    /// [1, 2, 3, 8, 6, 7, 5, 4]
    /// result:
    /// [1, 2, 3, 8, 6, 4, 5, 7
  if (nums.length < 2) return nums;
  let len = nums.length,
    i = len - 2,
    j = len - 1;
  while (i >= 0 && nums[i] >= nums[j]) {
    i -= 1;
    j -= 1;
  }
//   console.log("i: ", { i, j });
  if (i < 0) return nums.sort((t1, t2) => t1 - t2);
  let k = len - 1;
  while (k > i && nums[i] >= nums[k]) {
    k -= 1;
  }
//   console.log("i: ", { i, j, k });
  [nums[i], nums[k]] = [nums[k], nums[i]];
  while (len > j) {
    [nums[j], nums[len - 1]] = [nums[len - 1], nums[j]];
    j += 1;
    len -= 1;
  }
  return nums;
};
// @lc code=end
