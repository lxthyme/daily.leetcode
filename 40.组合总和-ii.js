/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (61.69%)
 * Likes:    320
 * Dislikes: 0
 * Total Accepted:    71.5K
 * Total Submissions: 114.7K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 说明：
 *
 *
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例 1:
 *
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 *
 *
 * 示例 2:
 *
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const candidatesSort = candidates.sort((t1, t2) => t1 - t2);
  const result = [],
    path = [];
  const DFS = (path, target, idx) => {
    if (target === 0) {
      result.push(path);
      return;
    } else if (target < 0) {
      return;
    }
    if (idx >= candidatesSort.length) {
      return;
    }
    // path.push(candidatesSort[idx]);
    // DFS(path.slice(), target - candidatesSort[idx], idx + 1);

    // path.pop();
    // DFS(path.slice(), target, idx + 1);
    for (let i = idx; i < candidatesSort.length; i++) {
      if (i > idx && candidatesSort[i] === candidatesSort[i - 1]) {
        continue;
      }
      const tmp = target - candidatesSort[i];
      if (tmp < 0) {
        return;
      } else {
        path.push(candidatesSort[i]);
        DFS(path.slice(), tmp, i + 1);

        path.pop();
      }
    }
  };

  DFS([], target, 0);
  return result;
};

// combinationSum2 = function (candidates, target) {
//   const candidatesSort = candidates.sort((t1, t2) => t1 - t2);
//   const result = [],
//     path = [];
//   const DFS = (path, target, idx) => {
//     if (target === 0) {
//       result.push(path);
//       return;
//     } else if (target < 0) {
//       return;
//     }
//     if (idx >= candidatesSort.length) {
//       return;
//     }
//     if (idx > 0 && candidatesSort[idx] === candidatesSort[idx - 1]) {
//       DFS([], target, idx + 1);
//       return;
//     }
//     path.push(candidatesSort[idx]);
//     DFS(path.slice(), target - candidatesSort[idx], idx + 1);

//     path.pop();
//     DFS(path.slice(), target, idx + 1);
//   };

//   DFS([], target, 0);
//   return result;
// };
// @lc code=end
