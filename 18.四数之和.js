/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (37.64%)
 * Likes:    528
 * Dislikes: 0
 * Total Accepted:    95.2K
 * Total Submissions: 249.7K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  /// -2 -1 0 0 1 2
  if (!nums || nums.length < 4) return [];
  const numsSort = nums.sort((t1, t2) => t1 - t2);
  const result = [];
  for (let i = 0; i < numsSort.length - 3; i++) {
    if (i > 0 && numsSort[i] == numsSort[i - 1]) continue;
    for (let j = i + 1; j < numsSort.length - 2; j++) {
      if (j > i + 1 && numsSort[j] == numsSort[j - 1]) continue;
      let left = j + 1,
        right = numsSort.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        // console.log(`${nums[i]}+${nums[j]}+${nums[left]}+${nums[right]} = ${sum}`)
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left += 1;
          while (nums[right] === nums[right - 1]) right -= 1;
          left += 1;
          right -= 1;
        } else if (sum < target) {
          left += 1;
        } else if (sum > target) {
          right -= 1;
        }
      }
    }
  }
  //   return Array.from(new Set(result.map((t) => t.join(",")))).map((t) =>
  //     t.split(",").map((t) => parseInt(t))
  //   );
  return result;
};
// @lc code=end
