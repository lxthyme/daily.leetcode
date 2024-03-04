/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 *
 * https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/description/
 *
 * algorithms
 * Hard (46.15%)
 * Likes:    309
 * Dislikes: 0
 * Total Accepted:    32K
 * Total Submissions: 69.4K
 * Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
 *
 * 给定一个整数矩阵，找出最长递增路径的长度。
 *
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
 *
 * 示例 1:
 *
 * 输入: nums =
 * [
 * ⁠ [9,9,4],
 * ⁠ [6,6,8],
 * ⁠ [2,1,1]
 * ]
 * 输出: 4
 * 解释: 最长递增路径为 [1, 2, 6, 9]。
 *
 * 示例 2:
 *
 * 输入: nums =
 * [
 * ⁠ [3,4,5],
 * ⁠ [3,2,6],
 * ⁠ [2,2,1]
 * ]
 * 输出: 4
 * 解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
/// 9 9 4
/// 6 6 8
/// 2 1 1
const rule = [
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
];
/// Time Limit Exceeded
var longestIncreasingPath = function (matrix) {
  const axisX = matrix.length;
  if (axisX <= 0) return 0;
  const axisY = matrix[0].length;

  const allStep = []
  const dfs = (graph, searched, step, x, y) => {
    const maxStep = [];
    for (let i = 0; i < 4; i++) {
      const r = rule[i],
        newX = x + r.x,
        newY = y + r.y,
        tmp = [...step];
      // step.splice(0, step.length, ...tmp);
      if (
        newX >= 0 &&
        newX < axisX &&
        newY >= 0 &&
        newY < axisY &&
        // searched[newX][newY] < 0
        graph[newX][newY] > graph[x][y]
      ) {
        tmp.push(graph[newX][newY]);
        // maxStep.push(
          dfs(graph, searched, tmp, newX, newY)
        // )
      }
    }
    // console.log('Step: ', step);
    searched[x][y] = step.length
    allStep.push(step)
    // maxStep.push(step);
    // searched[newX][newY] = maxStep;
    // return maxStep
  };

  // const allStep = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const searched = Array.from({ length: axisX }, () =>
        Array.from({ length: axisY }, (t, idx) => -1)
      );
      dfs(matrix, searched, [matrix[i][j]], i, j);
      //   if (maxStep.length < step.length) {
      //     maxStep = step;
      //   }
      // max = Math.max(max, result.length);
      // console.log('---Result: ', result);
      // allStep.push(result)
    }
  }
  // console.log('allStep: ', allStep);
  let max = 0
  for(let i = 0; i < allStep.length; i++) {
    max = Math.max(max, allStep[i].length || 0)
  }
  return max;
};

/// ✅
var longestIncreasingPath2 = function (matrix) {
  const axisX = matrix.length;
  if (axisX <= 0) return 0;
  const axisY = matrix[0].length;
  const dfs = (graph, searched, x, y) => {
    /// 已经查找过
    if (searched[x][y] !== -1) return searched[x][y];
    let max = 1;
    for (let i = 0; i < 4; i++) {
      const r = rule[i],
        newX = x + r.x,
        newY = y + r.y;
      if (
        newX >= 0 &&
        newX < axisX &&
        newY >= 0 &&
        newY < axisY &&
        graph[newX][newY] > graph[x][y]
      ) {
        max = Math.max(max, 1 + dfs(graph, searched, newX, newY));
      }
    }
    searched[x][y] = max;
    return max;
  };
  const searched = Array.from({ length: axisX }, () =>
    Array.from({ length: axisY }, (t, idx) => -1)
  );
  let maxStep = 1;
  for (let i = 0; i < axisX; i++) {
    for (let j = 0; j < axisY; j++) {
      maxStep = Math.max(maxStep, dfs(matrix, searched, i, j));
    }
  }
  console.log("Step: ", maxStep);
  return maxStep;
};

/// Time Limit Exceeded
var longestIncreasingPath3 = function (matrix) {
  const axisX = matrix.length;
  if (axisX <= 0) return 0;
  const axisY = matrix[0].length;

  const dp = [],
    summary = Array.from({ length: axisX }, () =>
      Array.from({ length: axisY }, (t, idx) => -1)
    );
  for (let x = 0; x < axisX; x++) {
    for (let y = 0; y < axisY; y++) {
      for (let k = 0; k < rule.length; k++) {
        const r = rule[k],
          newX = x + r.x,
          newY = y + r.y;
        if (
          newX >= 0 &&
          newX < axisX &&
          newY >= 0 &&
          newY < axisY &&
          matrix[newX][newY] > matrix[x][y]
        ) {
          summary[x][y] += 1;
        }
      }
      if (summary[x][y] <= 0) {
        dp.push({ x, y });
      }
    }
  }

  if (dp.length <= 0) return 1;

  let result = 0;
  while (dp.length > 0) {
    result += 1;

    let len = dp.length;
    for (let i = 0; i < len; i++) {
      const { x, y } = dp.shift();
      for (let j = 0; j < rule.length; j++) {
        const r = rule[j],
          preX = x - r.x,
          preY = y - r.y;
        if (
          preX >= 0 &&
          preX < axisX &&
          preY >= 0 &&
          preY < axisY &&
          matrix[preX][preY] < matrix[x][y]
        ) {
          summary[preX][preY] -= 1;

          if (summary[preX][preY] <= 0) {
            dp.push({ x: preX, y: preY });
          }
        }
      }
    }
  }

  return result;
};
// @lc code=end
