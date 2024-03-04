/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (38.36%)
 * Likes:    693
 * Dislikes: 0
 * Total Accepted:    79.9K
 * Total Submissions: 198.8K
 * Testcase Example:  '[1,2,0]'
 *
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [1,2,0]
 * 输出: 3
 *
 *
 * 示例 2:
 *
 * 输入: [3,4,-1,1]
 * 输出: 2
 *
 *
 * 示例 3:
 *
 * 输入: [7,8,9,11,12]
 * 输出: 1
 *
 *
 *
 *
 * 提示：
 *
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length <= 0) return 1;
  const numsSort = nums.sort((t1, t2) => t1 - t2);
  const posNumsSort = numsSort.filter((t) => t > 0);
  if (posNumsSort.length <= 0) return 1;
  let result = -1,
    idx = 1;
  for (let i = 0; i < posNumsSort.length; i++) {
    if (posNumsSort[i] === posNumsSort[i - 1]) {
      continue;
    } else if (posNumsSort[i] !== idx) {
      result = idx;
      break;
    } else {
      idx += 1;
    }
  }
  //   console.log("Result: ", result);
  if (result === -1) {
    result = idx;
  }
  return result;
};
firstMissingPositive = function (nums) {
  const len = nums.length + 1;
  let result = -1;
  //   for (let i = 0; i < nums.length; i++) {
  //     const item = nums[i];
  //     if (item <= 0) {
  //       nums[i] = len + 1;
  //     }else if (item <= len) {
  //       nums[i] = -nums[i];
  //     }
  //     if (nums[i] > 0) {
  //       result = i + 1;
  //       break;
  //     }
  //   }
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (item <= 0) {
      nums[i] = len + 1;
    }
  }
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (item <= len && nums[item] > 0) {
      nums[item] = -nums[item];
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      result = i + 1;
      break;
    }
  }
  console.log("nums: ", { nums, result });
};

firstMissingPositive = function (nums) {
  const numsSort = nums.sort((t1, t2) => t1 - t2).filter((t) => t > 0);
  const binarySearch = (arr, target) => {
    let destIdx = -1;
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const tmp = arr[middle];
      if (tmp === target) {
        destIdx = middle;
        break;
      } else if (tmp < target) {
        left += 1;
      } else if (tmp > target) {
        right -= 1;
      }
    }
    return destIdx;
  };
  let destIdx = -1;
  for (let i = 0; i < numsSort.length; i++) {
    const idx = binarySearch(numsSort, i + 1);
    if (idx === -1) {
      // console.log(`for: ${i} -> ${idx}`);
      destIdx = i + 1;
      break;
    }
  }
  if (destIdx === -1) {
    // console.log(`estIdx: ${i} -> ${destIdx}`);
    destIdx = numsSort.length + 1;
  }
  return destIdx;
};
// @lc code=end
