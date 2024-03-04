/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (36.53%)
 * Likes:    646
 * Dislikes: 0
 * Total Accepted:    74.1K
 * Total Submissions: 199.4K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 示例:
 *
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 *
 *
 * 说明:
 *
 * 假设你总是可以到达数组的最后一个位置。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump1 = function (nums) {
  const len = nums.length,
    dp = Array.from({ length: len }).fill(0);
  for (let i = len - 2; i >= 0; i--) {
    if (i + nums[i] >= len - 1) {
      dp[i] = 1;
    } else {
      for (let j = i + 1; j <= i + nums[i]; j++) {
        dp[i] = Math.min(dp[i], 1 + dp[j]);
      }
    }
  }
  console.log("DP: ", dp);
  return dp[0];
};
/// ✅
var jump2 = function (nums) {
  const len = nums.length,
    dp = Array.from({ length: len }).fill(len + 1);
  dp[0] = 0;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
        break;
      }
    }
  }
  console.log("DP: ", dp);
  return dp[len - 1];
};
/// 正序 DFS
var jump3 = function (nums) {
  let min = Infinity;
  const dfs = (nums, count, step, n) => {
    if (step >= n) {
      return count;
    }
    for (let i = nums[step]; i >= 1; i--) {
      let tmp = dfs(nums, count + 1, step + i, n);
      if (min >= tmp) {
        min = tmp;
      } else {
        return min;
      }
    }
    return min;
  };
  return dfs(nums, 0, 0, nums.length - 1);
};
var jump = function (nums) {
    if(nums.length <= 1) return 0;
    const len = nums.length, visited = []
    visited[0] = 1
    let step = 0, queue = [[0]]
    while(q.length > 0) {
        const len2 = q.length
        while (len2--) {
            const cur = q.
        }
    }
}
// @lc code=end
