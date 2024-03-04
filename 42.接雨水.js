/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (51.16%)
 * Likes:    1508
 * Dislikes: 0
 * Total Accepted:    129.6K
 * Total Submissions: 249.1K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 *
 * 示例:
 *
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/// https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/
/// 方法 1：暴力✅
var trap1 = function (height) {
  let result = 0;
  //   window.p = [];
  for (let i = 0; i < height.length - 1; i++) {
    let max_left = 0,
      max_right = 0;
    for (let j = i; j >= 0; j--) {
      max_left = Math.max(max_left, height[j]);
    }
    for (let j = i; j < height.length; j++) {
      max_right = Math.max(max_right, height[j]);
    }
    result += Math.min(max_left, max_right) - height[i];
    // p.push({
    //   i,
    //   max_left,
    //   max_right,
    //   [`${Math.min(max_left, max_right)} - ${height[i]}`]: Math.min(max_left, max_right) - height[i],
    // });
  }
  //   console.log("P: ", p);
  return result;
};
/// 方法 2：动态编程✅
var trap2 = function (height) {
  const max_left = [],
    max_right = [];
  max_left[0] = height[0];
  max_right[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    max_left[i] = Math.max(max_left[i - 1], height[i]);
  }
  for (let j = height.length - 2; j >= 0; j--) {
    max_right[j] = Math.max(max_right[j + 1], height[j]);
  }
  let size = 0;
  for (let i = 0; i < height.length; i++) {
    size += Math.min(max_left[i], max_right[i]) - height[i];
  }
  //   console.log({ max_left, max_right, size });
  return size;
};
/// 方法 4：使用双指针✅
var trap = function (height) {
  let left = 0,
    right = height.length - 1,
    max_left = 0,
    max_right = 0,
    result = 0;
  while (left < right) {
    const lv = height[left],
      rv = height[right];
    if (lv < rv) {
      if (lv >= max_left) {
        max_left = lv;
      } else {
        result += max_left - lv;
      }
      left += 1;
    } else {
      if (rv >= max_right) {
        max_right = rv;
      } else {
        result += max_right - rv;
      }
      right -= 1;
    }
  }
  return result;
};
// @lc code=end
