/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (62.71%)
 * Likes:    1095
 * Dislikes: 0
 * Total Accepted:    283.8K
 * Total Submissions: 452.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  //   return {
  //     val: undefined ? 0 : val,
  //     next: next === undefined ? null : next,
  //   };
}
ListNode.prototype.insert = (node) => {
  this.next = node;
  return node;
};
ListNode.prototype.delete = (node) => {
  this.val = node.val;
  this.next = node.next;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function compare(l1, l2) {
  if (l1.val > l2.val) {
    l1.next = l2;
    return l1;
  } else {
    l2.next = l1;
    return l2;
  }
}
const n4 = new ListNode(4, undefined);
const n2 = new ListNode(2, node4);
const n1 = new ListNode(1, node2);
const m4 = new ListNode(4, undefined);
const m3 = new ListNode(3, mode4);
const m1 = new ListNode(1, mode3);
var mergeTwoLists = function (l1, l2) {
  console.log("l1: ", l1, "\t\tl2: ", l2);
  if (!l1.next) {
    return l1;
  } else if (!l2.next) {
    return l2;
  } else if (l1.val < l2.val) {
    l1.next = l2;
    return mergeTwoLists(l1.next, l2.next);
  } else if (l1.val > l2.val) {
    l2.next = l1;
    return mergeTwoLists(l1.next, l2.next);
  }
};
// @lc code=end
