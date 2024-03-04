/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (45.37%)
 * Likes:    341
 * Dislikes: 0
 * Total Accepted:    82K
 * Total Submissions: 179.5K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 *
 * 说明:
 *
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *
 * 示例:
 *
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出: [1,2,2,3,5,6]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   for(let idx2 = 0; idx2 < n; idx2++) {
//     const v2 = nums2[idx2]
//     for(let idx1 = 0; idx1 < m; idx1++) {
//       const v1 = nums1[idx1]
//       if(v1 > v2) {
//         m += 1
//         n -= 1
//         idx2 -= 1
//         nums2.shift()
//         nums1.splice(idx1, 0, v2)
//         break
//       }
//       }
//     }
//     nums1.splice(m)
//     if(nums2.length > 0) {
//       nums1.splice(nums1.length, 0, ...nums2)
//     }
// };
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let p = nums1.length - 1
  while(i >= 0 && j >= 0) {
    if(nums1[i] > nums2[j]) {
      nums1[p] = nums1[i]
      i -= 1
    } else {
      nums1[p] = nums2[j]
      j -= 1
    }
    p -= 1
  }
  while(j >= 0) {
    nums1[p] = nums2[j]
    j -= 1
    p -= 1
  }
}
// @lc code=end
