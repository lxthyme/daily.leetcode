/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (68.96%)
 * Likes:    777
 * Dislikes: 0
 * Total Accepted:    116.2K
 * Total Submissions: 167.4K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的数字可以无限制重复被选取。
 *
 * 说明：
 *
 *
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例 1：
 *
 * 输入：candidates = [2,3,6,7], target = 7,
 * 所求解集为：
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * 示例 2：
 *
 * 输入：candidates = [2,3,5], target = 8,
 * 所求解集为：
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= candidates.length <= 30
 * 1 <= candidates[i] <= 200
 * candidate 中的每个元素都是独一无二的。
 * 1 <= target <= 500
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// const subArraySum = (array, target) => {
//   //   console.log("Array: ", { array, target });
//   if (array.length <= 0) return ["0"];
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     const tmp = array[i];
//     if (tmp === target) {
//       //   console.log("Find it: ", { target, tmp, result });
//       result.push(result);
//     //   return tmp;
//     } else if (target > tmp) {
//       console.log("GO: ", {
//         target: target - tmp,
//         originTarget: target,
//         tmp,
//         from: array,
//       });
//       const re = subArraySum(array, target - tmp);
//       console.log("--TMP: ", { re, result, target, tmp });
//       result.push([re, tmp]);
//     } else {
//       // result.push(`${target} < ${tmp}`);
//       break;
//     }
//   }
//   return ['END'];
// };
// combinationSum = function (candidates, target) {
//   const candidatesSort = candidates.sort((t1, t2) => t1 - t2);
//   const result = subArraySum(candidatesSort, target);
//   console.log("Result: ", result);
//   return result;
// };

/// 回溯 + 剪枝✅
combinationSum = function (candidates, target) {
  const candidatesSort = candidates.sort((t1, t2) => t1 - t2);
  const n = candidatesSort.length,
    result = [],
    path = [];
  const backtrack = (path, target, start) => {
    if (target < 0) {
      return;
    } else if (target === 0) {
      result.push(path);
      return;
    }
    for (let i = start; i < candidatesSort.length; i++) {
      path.push(candidatesSort[i]);
      backtrack(path.slice(), target - candidatesSort[i], i);
      path.pop();
    }
  };
  backtrack(path, target, 0);
  console.log("Result: ", result);
  return result;
};

/// DFS ✅
combinationSum = function (candidates, target) {
  const result = [],
    path = [];
  const dfs = (path, target, idx) => {
    if (target === 0) {
      result.push(path);
      return;
    } else if (target < 0) {
      /// 剪枝
      return;
    }
    if (idx >= candidatesSort.length) {
      return;
    }
    /// 可以重复选当前
    path.push(candidatesSort[idx]);
    dfs(path.slice(), target - candidatesSort[idx], idx);

    /// 不选当前选下一个
    path.pop();
    dfs(path.slice(), target, idx + 1);
  };
  const candidatesSort = candidates.sort((t1, t2) => t1 - t2);
  dfs([], target, 0);
  return result;
};

// @lc code=end
