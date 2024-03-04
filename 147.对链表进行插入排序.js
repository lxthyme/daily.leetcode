/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if(head === null) {
    return head
  }
  debugger
  const dump = new ListNode(0)
  dump.next = head
  let lastSorted = head
  let cur = head.next
  while(cur !== null) {
    if(lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next
    } else {
      let prev = dump
      while(prev.next.val <= cur.val) {
        prev = prev.next
      }
      lastSorted.next = cur.next
      cur.next = prev.next
      prev.next = cur
    }
    cur = lastSorted.next
  }
  return dump.next
};
// @lc code=end
