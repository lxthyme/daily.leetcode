/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (51.32%)
 * Likes:    2147
 * Dislikes: 0
 * Total Accepted:    271.1K
 * Total Submissions: 525.1K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   const tmp = [...nums];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       let result = nums[j];
//       let result2 = [nums[j]];
//       for (let k = 0; k < nums.length - j - 1; k++) {
//         result += nums[j + k];
//         result2.push(nums[j + k]);
//       }
//       // tmp.push(result);
//       tmp.push({ [result]: result2 });
//     }
//   }
//   return tmp;
// };
var maxSubArray = function (nums) {
  let pre = 0,
    maxSub = nums[0];
  nums.forEach((t, idx) => {
    pre = Math.max(pre + t, t);
    maxSub = Math.max(maxSub, pre);
    console.log(`[${idx}]: `, { pre, maxSub, t });
  });
  return maxSub;
};
// @lc code=end
