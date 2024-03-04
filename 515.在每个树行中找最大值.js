/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (60.30%)
 * Likes:    74
 * Dislikes: 0
 * Total Accepted:    14.2K
 * Total Submissions: 23.2K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 您需要在二叉树的每一行中找到最大的值。
 *
 * 示例：
 *
 *
 * 输入:
 *
 * ⁠         1
 * ⁠        / \
 * ⁠       3   2
 * ⁠      / \   \
 * ⁠     5   3   9
 *
 * 输出: [1, 3, 9]
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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return []
    const queue = [root]
    let maxTmp = []

    while (queue.length > 0) {
      const len = queue.length
      let max = Number.MIN_SAFE_INTEGER
      for (let i = 0; i < len; i++) {
        const node = queue[i]
        max = Math.max(max, node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }

      for (let i = 0; i < len; i++) {
        queue.shift()
      }

      maxTmp.push(max)
    }

    return maxTmp
};
// @lc code=end
