/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (54.82%)
 * Likes:    251
 * Dislikes: 0
 * Total Accepted:    65K
 * Total Submissions: 118.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回锯齿形层次遍历如下：
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const step = [];
  let depth = 0;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    depth += 1;
    const len = queue.length,
      f = [],
      q = [];
    if (depth % 2 === 1) {
      for (let i = 0; i < len; i++) {
        const tmp = queue[i];
        f.push(tmp.val);
        tmp.left && q.push(tmp.left);
        tmp.right && q.push(tmp.right);
      }
    } else {
      for (let i = len - 1; i >= 0; i--) {
        const tmp = queue[i];
        f.push(tmp.val);
      }
      for (let i = 0; i < len; i++) {
        const tmp = queue[i];
        tmp.left && q.push(tmp.left);
        tmp.right && q.push(tmp.right);
      }
    }
    queue = q;
    step.push(f);
  }
  return step;
};
// @lc code=end
