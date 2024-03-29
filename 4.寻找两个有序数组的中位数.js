/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4]
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (35.98%)
 * Likes:    1566
 * Dislikes: 0
 * Total Accepted:    95.3K
 * Total Submissions: 264.8K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 *
 *
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const s = nums1.concat(nums2).sort((x1, x2) => x1 - x2)
    if (s.length % 2 === 0) {
        return (s[s.length / 2 - 1] + s[s.length / 2]) / 2
    } else {
        return s[(s.length - 1) / 2]
    }
};
