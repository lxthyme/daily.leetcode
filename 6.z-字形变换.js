/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (44.97%)
 * Likes:    404
 * Dislikes: 0
 * Total Accepted:    59.6K
 * Total Submissions: 132.4K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 *
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 *
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 * string convert(string s, int numRows);
 *
 * 示例 1:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 *
 *
 * 示例 2:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 *
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 *
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // s = "LEETCODEISHIRING"
    // numRows = 4
    const step = 2 * numRows - 2
    const r = 1
    const a = []

    Array.from({ length: numRows }, (t, idx) => idx + 1).forEach(t => {
        let fStep = 0
        let idx = 0
        const row = []
        if (t === 1) {
            // fStep = step
            fStep = step * t
            let fs = 0
            do {
                row.push(s[fs])
                fs = fs + step
            } while (fs < s.length)
        } else if (t === numRows) {
            // fStep = step
            fStep = step * t + numRows - 1
            let fs = numRows - 1
            do {
                row.push(s[fs])
                fs = fs + step
            } while (fs < s.length)
        } else {
            fStep = step - 2 * (t - 1)
            const fStep2 = 2 * (t - 1)
            let fs1 = t - 1
            let fs2 = fs1 + fStep
            // console.log(`[${t}]fs1: ${fs1}`, `\t\t${fs2}`, `fStep2: ${fStep}-${fStep2}`)
            do {
                if (fs1 < s.length) {
                    row.push(s[fs1])
                } else {
                    break
                }
                if (fs2 < s.length) {
                    row.push(s[fs2])
                } else {
                    break
                }
                fs1 = fs2 + fStep2
                fs2 = fs1 + fStep
                // console.log(`[${t}]fs1: ${fs1}`, `\t\t${fs2}`, `fStep2: ${fStep}-${fStep2}`)
            } while (1 === 1)
        }
        // console.log(`ROW[${t}]: `, row)
        a.push(row)
    })
    return a.reduce((prev, cur) => prev.concat(cur), []).join('')
};
convert()
