/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const f = nums.filter(t => t <= target)
//     if (f.length === 2) {
//         if (f[0] + f[1] === target) {
//             return [0, 1]
//         }
//     } else if (f.length > 2) {
//         for (let i = 0; i < f.length; i++) {
//             for (let j = i + 1; j < f.length; j++) {
//                 const a = f[i]
//                 const b = f[j]
//                 if (a + b === target) {
//                     return [i, j]
//                 }
//             }
//         }
//     }
//     return []
// };

// var twoSum = function (nums, target) {
//     // const f = nums.reduce((prev, current, idx) => {
//     //     const rest = target - current
//     //     if (rest in prev) {
//     //         return [prev[rest], idx]
//     //     }
//     //     prev = Object.assign({}, prev, { [current]: idx })
//     //     return prev
//     // }, {})
//     // console.log(`f: `, f)
//     // return []
// };

var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const reset = target - nums[i];
    if (reset in map) {
      return [map[reset], i];
    }
    map = Object.assign({}, map, { [nums[i]]: i });
  }
  return [];
};
