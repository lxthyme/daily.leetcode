/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (43.16%)
 * Likes:    319
 * Dislikes: 0
 * Total Accepted:    103K
 * Total Submissions: 238.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最小深度  2.
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
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const makeTree = () => {
  const r15 = new TreeNode(15);
  const r7 = new TreeNode(7);
  const r9 = new TreeNode(9);
  const r20 = new TreeNode(20);
  r20.left = 15;
  r20.right = 7;
  const r3 = new TreeNode(3);
  r3.left = r9;
  r3.right = r20;
  return r3;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
/// ✅
var minDepth = function (root) {
  if (!root) return 0;
  let depth = 0;
  const queue = [root];
  while (queue.length > 0) {
    depth += 1;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const tmp = queue.shift();
      if (!tmp.left && !tmp.right) {
        return depth;
      } else {
        tmp.left && queue.push(tmp.left);
        tmp.right && queue.push(tmp.right);
      }
    }
  }
};

/// ✅
var minDepth2 = function (root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// @lc code=end
