/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 *
 * https://leetcode-cn.com/problems/assign-cookies/description/
 *
 * algorithms
 * Easy (54.52%)
 * Likes:    185
 * Dislikes: 0
 * Total Accepted:    43.8K
 * Total Submissions: 79.7K
 * Testcase Example:  '[1,2,3]\n[1,1]'
 *
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi
 * ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i
 * ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 *
 * 注意：
 *
 * 你可以假设胃口值为正。
 * 一个小朋友最多只能拥有一块饼干。
 *
 * 示例 1:
 *
 *
 * 输入: [1,2,3], [1,1]
 *
 * 输出: 1
 *
 * 解释:
 * 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
 * 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
 * 所以你应该输出1。
 *
 *
 * 示例 2:
 *
 *
 * 输入: [1,2], [1,2,3]
 *
 * 输出: 2
 *
 * 解释:
 * 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出2.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const gSort = g.sort((t1, t2) => t1 - t2);
  const sSort = s.sort((t1, t2) => t1 - t2);
  // for(let i = 0; i < gSort[i]; i++) {
  //     for(let j = 0; j < sSort[j]; j++) {
  //         if()
  //     }
  // }
  let i = 0,
    j = 0;
  while (i < gSort.length && j < sSort.length) {
    const gTmp = gSort[i];
    const sTmp = sSort[j];
    if (gTmp <= sTmp) {
      i += 1;
      j += 1;
    } else {
      j += 1;
    }
  }
  //   console.log("Result: ", { i, j });
  return i;
};
// @lc code=end
