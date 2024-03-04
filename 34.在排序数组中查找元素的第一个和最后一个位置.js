/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (39.61%)
 * Likes:    531
 * Dislikes: 0
 * Total Accepted:    116.5K
 * Total Submissions: 291K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 示例 1:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 *
 * 示例 2:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
  const binarySearch = (nums, target) => {
    let left = 0,
      right = nums.length - 1,
      destIdx = -1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const tmp = nums[middle];
      if (tmp === target) {
        destIdx = middle;
        break;
      } else if (tmp < middle) {
        left += 1;
      } else if (tmp > middle) {
        right -= 1;
      }
    }
    return destIdx;
  };
};

var searchRange2 = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    from = -1,
    to = -1;
  while (left <= right) {
    const fromTmp = nums[left];
    const rightTmp = nums[right];
    if (from === -1) {
      if (fromTmp === target) {
        from = left;
      } else {
        left += 1;
      }
    }
    if (to === -1) {
      if (rightTmp === target) {
        to = right;
      } else {
        right -= 1;
      }
    }
    if (from >= 0 && to >= 0) {
      break;
    }
  }
  return [from, to];
};

/// ✅
var searchRange3 = function (nums, target) {
  const binarySearch = (nums, target, isLeft = true) => {
    let left = 0,
      right = nums.length - 1,
      from = -1,
      to = -1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const tmp = nums[middle];
      if (tmp === target) {
        if (isLeft) {
          from = middle;
          right = middle - 1;
        } else {
          to = middle;
          left = middle + 1;
        }
      } else if (tmp < target) {
        left = left + 1;
      } else if (tmp > target) {
        right = right - 1;
      }
    }
    return isLeft ? from : to;
  };
  const from = binarySearch(nums, target, true);
  const to = binarySearch(nums, target, false);
  // console.log("result: ", { from, to });
  return [from, to];
};

/// ✅
var searchRange = function (nums, target) {
  const binarySearch = (nums, target, isLeft = true, ffrom) => {
    let left = 0,
      right = nums.length - 1,
      from = -1,
      to = -1;
    if (!isLeft) {
      left = ffrom;
    }
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const tmp = nums[middle];
      if (tmp === target) {
        if (isLeft) {
          from = middle;
          right = middle - 1;
        } else {
          to = middle;
          left = middle + 1;
        }
      } else if (tmp < target) {
        left = left + 1;
      } else if (tmp > target) {
        right = right - 1;
      }
    }
    return isLeft ? from : to;
  };
  const from = binarySearch(nums, target, true);
  let to = -1;
  if (from !== -1) {
    to = binarySearch(nums, target, false, from);
  }
  // console.log("result: ", { from, to });
  return [from, to];
};
// @lc code=end
