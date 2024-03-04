/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 *
 * https://leetcode-cn.com/problems/friend-circles/description/
 *
 * algorithms
 * Medium (57.76%)
 * Likes:    292
 * Dislikes: 0
 * Total Accepted:    58.3K
 * Total Submissions: 101K
 * Testcase Example:  '[[1,1,0],[1,1,0],[0,0,1]]'
 *
 * 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是
 * C 的朋友。所谓的朋友圈，是指所有朋友的集合。
 *
 * 给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j
 * 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。
 *
 *
 *
 * 示例 1：
 *
 * 输入：
 * [[1,1,0],
 * ⁠[1,1,0],
 * ⁠[0,0,1]]
 * 输出：2
 * 解释：已知学生 0 和学生 1 互为朋友，他们在一个朋友圈。
 * 第2个学生自己在一个朋友圈。所以返回 2 。
 *
 *
 * 示例 2：
 *
 * 输入：
 * [[1,1,0],
 * ⁠[1,1,1],
 * ⁠[0,1,1]]
 * 输出：1
 * 解释：已知学生 0 和学生 1 互为朋友，学生 1 和学生 2 互为朋友，所以学生 0 和学生 2 也是朋友，所以他们三个在一个朋友圈，返回 1
 * 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= N <= 200
 * M[i][i] == 1
 * M[i][j] == M[j][i]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
/// 0: []
/// 1: 0
/// 2: []

/// 0: [0]
/// 1: [0, 1]
/// 2: [1, 2]

/**[ 0  1  2  3
 *  [1, 0, 0, 1],
 *  [0, 1, 1, 0],
 *  [0, 1, 1, 1],
 *  [1, 0, 1, 1]
 * ]
 */
var findCircleNum1 = function (M) {
  const pyq = [];
  for (let i = 0; i < M.length; i++) {
    const q = [i];
    for (let j = 0; j < i; j++) {
      const py = M[i][j];
      if (py === 1) {
        q.push(j);
      }
    }
    pyq.push(q);
  }
  const allPyq = [];
  for (let i = 0; i < M.length; i++) {
    // const py = pyq.filter((t) => t.includes(0)).flat();
    // allPyq.push(py);
    const len = pyq.length;
    let j = 0;
    while (i < len) {
      if (pyq[j].includes(i)) {
        pyq.allPyq.push(...py[j]);
      }
    }
  }
  console.log("Result: ", { pyq, allPyq });
};
/// ✅ - DFS
var findCircleNum2 = function (M) {
  if (M.length === 1) {
    return 1;
  }
  const n = M.length;
  const DFS = (M, visited, step, cur) => {
    for (let i = 0; i < n; i++) {
      if (visited[cur][i] !== -1) continue;
      if (M[cur][i] === 1) {
        visited[cur][i] = 1;
        step.push(i);
        DFS(M, visited, step, i);
      }
    }
  };
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, (t, idx) => -1)
  );
  const pyq = [];
  for (let i = 0; i < n; i++) {
    if (pyq.flat().includes(i)) {
      continue;
    }
    const step = [i];
    DFS(M, visited, step, i);
    pyq.push(step);
  }

  //   console.log("pyq: ", pyq);
  return pyq.length;
};
/// ✅ - DFS
var findCircleNum = function (M) {
  const n = M.length,
    visited = Array.from({ length: n }, (t, idx) => -1);
  const dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (i !== j && visited[j] === -1 && M[i][j] === 1) {
        visited[j] = 1;
        dfs(j);
      }
    }
  };
  let pyq = 0;
//   visited[0] = 0
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === -1) {
      visited[i] = 1;
      dfs(i);
      pyq += 1;
    }
  }
  return pyq;
};
/// ✅ - BFS
var findCircleNum4 = function (M) {
  const n = M.length,
    visited = Array.from({ length: n }, (t, idx) => -1),
    queue = [];
  let pyq = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] === -1) {
      visited[i] = 1;
      pyq += 1;
      queue.push(i);
    }

    while (queue.length > 0) {
      const py = queue.shift();
      for (let j = 0; j < n; j++) {
        if (py !== j && M[py][j] === 1 && visited[j] === -1) {
          queue.push(j);
          visited[j] = 1;
        }
      }
    }
  }
  return pyq;
};
// @lc code=end
