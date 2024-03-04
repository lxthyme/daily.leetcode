/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (27.24%)
 * Likes:    2430
 * Dislikes: 0
 * Total Accepted:    288.7K
 * Total Submissions: 1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例：
 *
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // 每个人
    for (let j = i + 1; j < nums.length - 1; j++) {
      // 依次拉上其他每个人
      for (let k = j + 1; k < nums.length; k++) {
        // 去问剩下的每个人
        if (nums[i] + nums[j] + nums[k] === 0) {
          // 我们是不是可以一起组队
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
};
var threeSum = function (nums) {
  /// [-4, -1, -1, 0, 1, 2]
  /// [-2, -1, 1, 2]
  if (!nums || nums.length < 3) return [];
  const numsSort = nums.sort((t1, t2) => t1 - t2);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const hashMap = {};
    if (nums[i] > 0) continue;
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 2 && nums[j] === nums[j - 1] && nums[j] === nums[j - 2])
        continue;
      const dif = -(nums[i] + nums[j]);
      if (hashMap[nums[j]] !== undefined) {
        result.push([nums[j]].concat(hashMap[nums[j]]));
        hashMap[nums[j]] = undefined;
      } else {
        hashMap[dif] = [nums[i], nums[j]];
      }
    }
  }
  return result;
};
/// ✅
var threeSum4 = function (nums) {
  let result = [];
  if (!nums || nums.length < 3) return [];

  const numsSort = nums.sort((t1, t2) => t1 - t2);
  for (let i = 0; i < numsSort.length - 2; i++) {
    if (nums[i] > 0) continue;
    else if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] == nums[left + 1] && left < right) left += 1;
        while (nums[right] == nums[right - 1] && left < right) right -= 1;
        left += 1;
        right -= 1;
      }
    }
  }
  return result;
};
/// ✅
var threeSum5 = function (nums) {
  let arr = [];
  if (nums == null || nums.length < 3) return arr;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length - 2; i++) {
    const hashMap = new Map();
    if (nums[i] > 0) break;
    // 去重处理
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (var j = i + 1; j < nums.length; j++) {
      const dif = -(nums[i] + nums[j]);
      // 去重处理
      // 因为hashMap是首次记录第二次才会push到数组，所以需要判断只有三次重复才能continue
      if (j > i + 2 && nums[j] == nums[j - 1] && nums[j] == nums[j - 2])
        continue;
      if (hashMap.has(dif)) {
        arr.push([nums[i], nums[hashMap.get(dif)], nums[j]]);
        hashMap.delete(dif);
      }
      hashMap.set(nums[j], j);
    }
  }
  return arr;
};
// @lc code=end
