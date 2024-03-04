/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (40.97%)
 * Likes:    761
 * Dislikes: 0
 * Total Accepted:    113.9K
 * Total Submissions: 278K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 *
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [10,2]
 * 输出："210"
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,30,34,5,9]
 * 输出："9534330"
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出："1"
 *
 *
 * 示例 4：
 *
 *
 * 输入：nums = [10]
 * 输出："10"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 *
// a = [3, 30, 34, 5, 9, 31]
a = [111311, 1113]
// a = [432,43243]
// a = [8308,8308,830]
 */
var largestNumber = function (nums) {
    const set = new Set(nums)
    if (set.size === 1) {
        if (nums[0] === 0) {
            return "0"
        } else {
            return nums.join('')
        }
    }
    const sortNum = nums.sort((t1, t2) => {
        const arr1 = `${t1}`.split('').map(t => parseInt(t))//.reverse()
        const arr2 = `${t2}`.split('').map(t => parseInt(t))//.reverse()
        let i = 0, j = 0, max = Math.max(arr1.length, arr2.length) * 2
        let tmp1 = arr1[i], tmp2 = arr2[j]
        while ((i < max && j < max) && (i < arr1.length || j < arr2.length || tmp1 === tmp2)) {
            tmp1 = arr1[i % arr1.length]
            tmp2 = arr2[j % arr2.length]
            if (tmp1 === tmp2) {
                i += 1
                j += 1
            } else {
                return tmp2 - tmp1
            }
        }
        return tmp2 - tmp1
    })
    return sortNum.join('')
};
// @lc code=end
