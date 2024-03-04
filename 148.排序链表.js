/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (66.77%)
 * Likes:    1253
 * Dislikes: 0
 * Total Accepted:    195.8K
 * Total Submissions: 293.2K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 *
 * 进阶：
 *
 *
 * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 
 *
 *
 */
s = new ListNode(-1)
s1 = new ListNode(5)
s2 = new ListNode(3)
s3 = new ListNode(4)
s4 = new ListNode(0)
s.next = s1
s1.next = s2
s2.next = s3
s3.next = s4
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
ListNode.prototype.preappend = function(node) {
    node.next = this
    return node
}
ListNode.prototype.append = function(node) {
    this.next = node
    return this
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let sort = new ListNode()
    sort.val = head.val
    let hNext = head.next
    if(sort.val > hNext.val) {
        sort = new ListNode(hNext.val, sort.next)
    } else {
        sort.next = new ListNode(hNext.val, sort.next)
    }
    while (hNext != undefined) {
        let sNext = sort, hasFind = false
        while (sNext.next != undefined) {
            if(hNext.next.val < sNext.next.val) {
                hasFind = true
                sNext.next = new ListNode(hNext.val, sNext.next.next)
                sNext = sNext.next
                break
            }
            sNext = sNext.next
        }
        if(!hasFind) {
            sNext.next = new ListNode(hNext.val, undefined)
        }
        hNext = hNext.next
    }
    return sort
};
// @lc code=end
