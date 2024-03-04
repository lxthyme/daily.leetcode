/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (44.18%)
 * Likes:    504
 * Dislikes: 0
 * Total Accepted:    132.8K
 * Total Submissions: 290.2K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 *
 *
 * 示例：
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length === 3) {
    return nums.reduce((prev, cur) => prev + cur, 0);
  }
  const numsSort = nums.sort((n1, n2) => n1 - n2);
  let result = {};
  let diff = Infinity;
  for (let i = 0; i <= numsSort.length - 3; i++) {
    let left = i + 1;
    let right = numsSort.length - 1;
    while (left < right) {
      const tmp = numsSort[left] + numsSort[i] + numsSort[right];
      const di = Math.abs(target - tmp);
      result[di] = tmp;
      if (tmp < target) {
        left += 1;
      } else if (tmp > target) {
        right -= 1;
      } else {
        // console.log("Result: ", result);
        return target;
      }
    }
  }
  //   console.log("Result: ", result);
  const minDiff = Math.min(...Object.keys(result).map((t) => parseInt(t)));
  return result[minDiff];
};
var threeSumClosest2 = function (nums, target) {
  if (nums.length === 3) {
    return nums.reduce((prev, cur) => prev + cur, 0);
  }
  const numsSort = nums.sort((n1, n2) => n1 - n2);
  let result = target;
  let minDiff = Infinity;
  for (let i = 0; i <= numsSort.length - 3; i++) {
    let left = i + 1;
    let right = numsSort.length - 1;
    while (left < right) {
      const tmp = numsSort[left] + numsSort[i] + numsSort[right];
      const di = Math.abs(target - tmp);
      if (di < minDiff) {
        minDiff = di;
        result = tmp;
      }
      if (tmp < target) {
        left += 1;
      } else if (tmp > target) {
        right -= 1;
      } else {
        return target;
      }
    }
  }
  return result;
};
// @lc code=end
