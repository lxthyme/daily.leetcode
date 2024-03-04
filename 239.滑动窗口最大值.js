/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode-cn.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (47.75%)
 * Likes:    437
 * Dislikes: 0
 * Total Accepted:    58.8K
 * Total Submissions: 122.1K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回滑动窗口中的最大值。
 *
 *
 *
 * 进阶：
 *
 * 你能在线性时间复杂度内解决此题吗？
 *
 *
 *
 * 示例:
 *
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7]
 * 解释:
 *
 * ⁠ 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * ⁠ 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1 -3]  5  3  6  7       3
 * ⁠1 [3  -1  -3 5]  3  6  7       3
 * ⁠1  3 [-1  -3  5 3]  6  7       5
 * ⁠1  3  -1 [-3  5  3 6]  7       5
 * ⁠1  3  -1  -3 [5  3  6 7]       6
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const sub = [];
  let prevMax = Math.max(...nums.slice(0, k));
  sub.push(prevMax);
  for (let i = 1; i < nums.length - k + 1; i++) {
    let max = 0;
    if (prevMax === nums[i - 1]) {
      max = Math.max(...nums.slice(i, i + k));
    } else {
      max = Math.max(nums[i + k - 1], prevMax);
    }
    prevMax = max;
    sub.push(max);
  }
  return sub;
};
// @lc code=end
