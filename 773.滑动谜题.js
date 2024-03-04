/*
 * @lc app=leetcode.cn id=773 lang=javascript
 *
 * [773] 滑动谜题
 *
 * https://leetcode-cn.com/problems/sliding-puzzle/description/
 *
 * algorithms
 * Hard (59.22%)
 * Likes:    73
 * Dislikes: 0
 * Total Accepted:    3.4K
 * Total Submissions: 5.6K
 * Testcase Example:  '[[1,2,3],[4,0,5]]'
 *
 * 在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示.
 *
 * 一次移动定义为选择 0 与一个相邻的数字（上下左右）进行交换.
 *
 * 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。
 *
 * 给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。
 *
 * 示例：
 *
 *
 * 输入：board = [[1,2,3],[4,0,5]]
 * 输出：1
 * 解释：交换 0 和 5 ，1 步完成
 *
 *
 *
 * 输入：board = [[1,2,3],[5,4,0]]
 * 输出：-1
 * 解释：没有办法完成谜板
 *
 *
 *
 * 输入：board = [[4,1,2],[5,0,3]]
 * 输出：5
 * 解释：
 * 最少完成谜板的最少移动次数是 5 ，
 * 一种移动路径:
 * 尚未移动: [[4,1,2],[5,0,3]]
 * 移动 1 次: [[4,1,2],[0,5,3]]
 * 移动 2 次: [[0,1,2],[4,5,3]]
 * 移动 3 次: [[1,0,2],[4,5,3]]
 * 移动 4 次: [[1,2,0],[4,5,3]]
 * 移动 5 次: [[1,2,3],[4,5,0]]
 *
 *
 *
 * 输入：board = [[3,2,4],[1,5,0]]
 * 输出：14
 *
 *
 * 提示：
 *
 *
 * board 是一个如上所述的 2 x 3 的数组.
 * board[i][j] 是一个 [0, 1, 2, 3, 4, 5] 的排列.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */

/**
 * 为了跟踪算法的进展，我们对图进行搜索的时候会对图中的顶点进行涂色，
 *      白色: 默认
 *      灰色: 当第一次发现某个节点时
 *      黑色: 当对某个节点访问完成后
 * 每个节点都有五个属性:
 *      color: 表示节点的颜色，
 *      pi: 表示前驱结点，
 *      d: 表示广度优先搜索中从源节点到当前节点的距离，
 *      edges: 表示从当前节点发出的所有边，
 *      value: 表示节点存放的数据
 *
 * @returns
 */
var slidingPuzzle = function (board) {};
// @lc code=end

/**
  ----- Managed workflow -----
  blank                 a minimal app as clean as an empty canvas
  blank (TypeScript)    same as blank but with TypeScript configuration
  tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript
  ----- Bare workflow -----
  minimal               bare and minimal, just the essentials to get you started
❯ minimal (TypeScript)  same as minimal but with TypeScript configuration
 */
