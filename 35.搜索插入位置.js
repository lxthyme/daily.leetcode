/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (45.63%)
 * Likes:    550
 * Dislikes: 0
 * Total Accepted:    178.2K
 * Total Submissions: 389.3K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 *
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     let idx = nums.findIndex(t => t >= target)
//     if(idx >= 0 ) {
//         return idx
//     } else {
//         return nums.length
//     }
// };

// var searchInsert = function (nums, target) {
//   if (target <= arr[0]) {
//     return 0;
//   } else if (target > arr[arr.length - 1]) {
//     return arr.length;
//   }
//   return binarySearch(nums, target, 0, nums.length - 1);
// };
// binarySearch = (arr, target, left, right) => {
//   if (left >= right) {
//     return left;
//   }
//   let middle = Math.floor((left + right) / 2);
//   let tmp = arr[middle];
//   if (tmp === target) {
//     return middle;
//   } else if (tmp > target) {
//     return binarySearch(arr, target, left, middle);
//   } else {
//     return binarySearch(arr, target, middle + 1, right);
//   }
//   return -1;
// };

// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let middle = Math.floor((left + right) / 2);
//   while (nums[middle] !== target) {
//     if (nums[middle - 1] === target) return middle - 1;
//     else if (nums[middle + 1] === target) return middle + 1;
//     else if (nums[middle - 1] < target && nums[middle] > target) return middle;
//     else if (nums[middle] < target && nums[middle + 1] > target)
//       return middle + 1;
//     if (nums[middle] < target) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//     middle = Math.floor((left + right) / 2);
//   }
//   return middle
// };
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};
// @lc code=end
