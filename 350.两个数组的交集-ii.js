/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (48.56%)
 * Likes:    298
 * Dislikes: 0
 * Total Accepted:    95K
 * Total Submissions: 193.7K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 示例 1:
 *
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 *
 *
 * 示例 2:
 *
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 *
 * 说明：
 *
 *
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 * 进阶:
 *
 *
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const kv1 = {};
  const kv2 = {};
  const kv = {};
  nums1.forEach((t) => (kv1[t] = (kv1[t] || 0) + 1));
  nums2.forEach((t) => (kv2[t] = (kv2[t] || 0) + 1));
  Object.keys(kv1).forEach((t) => (kv[t] = Math.min(kv1[t] || 0, kv2[t] || 0)));
  return Object.keys(kv).reduce(
    (prev, cur) => prev.concat(Array.from({ length: kv[cur] }).fill(cur)),
    []
  );
};
// @lc code=end
