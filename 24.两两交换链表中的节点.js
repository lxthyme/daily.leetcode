/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (65.73%)
 * Likes:    546
 * Dislikes: 0
 * Total Accepted:    124K
 * Total Submissions: 187.5K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例:
 *
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
a4 = ListNode(4);
a3 = ListNode(3, a4);
a2 = ListNode(2, a3);
a1 = ListNode(1, a2);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs1 = function (head) {
  let next = head;
  while (next && next.next != null) {
    [next.val, next.next.val] = [next.next.val, next.val];
    // [next, next.next] = [next.next, next]
    next = next.next;
    if (!next.next) {
      break;
    }
    next = next.next;
  }

  return head;
};
var swapPairs = function (head) {
  if(!head || !head.next) return head
  const v1 = head
  const v2 = v1.next
  const v3 = v2.next
  v2.next = v1
  v1.next = swapPairs(v3)
  return v2
};
// @lc code=end
