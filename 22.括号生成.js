/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (76.02%)
 * Likes:    1255
 * Dislikes: 0
 * Total Accepted:    167.9K
 * Total Submissions: 220.7K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 * `
 * 示例：
 *
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
if (!String.prototype.splice) {
  /**
   * {JSDoc}
   *
   * The splice() method changes the content of a string by removing a range of
   * characters and/or adding new characters.
   *
   * @this {String}
   * @param {number} start Index at which to start changing the string.
   * @param {number} delCount An integer indicating the number of old chars to remove.
   * @param {string} newSubStr The String that is spliced in.
   * @return {string} A new string with the spliced substring.
   */
  String.prototype.splice = function (start, delCount, newSubStr) {
    return (
      this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount))
    );
  };
}

/// ✅
var generateParenthesis1 = function (n) {
  if (n <= 0) return "";
  else if (n === 1) return ["()"];
  let idx = 1,
    result = ["()"];
  while (idx < n) {
    const len = result.length;
    let j = 0;
    while (j < len) {
      const tmp = result.shift(),
        tlen = tmp.length;
      for (let k = 0; k < tlen; k++) {
        result.push(tmp.splice(k, 0, "()"));
      }
      result = Array.from(new Set(result));
      //   console.log("result: ", result);
      j += 1;
    }

    idx += 1;
  }
  return result;
};

/// ✅ 动态规划法 模型方程
var generateParenthesis2 = function (n) {
  /**F(n) =  for(k:0 -> n-1){ arr.push( '('+F(k)+')' +  F(n-1-k) ) }
   * @param {number} n
   * @return {string[]}
   */
  const F = (n) => {
    if (list[n]) {
      return list[n];
    }
    if (0 === n || 1 === n) {
      list[0] = [""];
      list[1] = ["()"];
      return list[n];
    }
    var result = [];
    /// 最后一对括号的 需要括的括号数目
    for (let i = 0; i <= n - 1; i++) {
      let preF = F(i);
      let aftF = F(n - 1 - i);
      for (let k = 0; k < preF.length; k++) {
        let currrentPre = "(" + preF[k] + ")";
        /// 括了i个括号后，剩余n-1-i个括号需要组合
        for (let j = 0; j < aftF.length; j++) {
          result.push(currrentPre + aftF[j]);
        }
      }
    }
    list[n] = result;
    return list[n];
  };

  const list = new Array(n + 1);
  const result = F(n);
  console.log("Result: ", result);
  return result;
};

/// ✅ 回溯法方程
var generateParenthesis3 = function (n) {
  /**bracket(LR)
   * @param {number[]} LR
   * @param {string} current 下一层的选择
   * @return {string[]} 存放从叶子节点到该层的 拼接的括号 组
   */
  const bracket = (LR, current) => {
    const currentLR = [...LR];
    let leftArr = [],
      rightArr = [];
    if (currentLR[0] > currentLR[1]) {
      return [];
    } else if (currentLR[1] === 0) {
      return [")"];
    } else {
      /// 左边为0，右边不为0 向右→走
      if (currentLR[0] === 0) {
        currentLR[1] -= 1;
        rightArr = bracket(currentLR, ")");
        for (let i = 0; i < rightArr.length; i++) {
          rightArr[i] = current + rightArr[i];
        }
        return rightArr;
      } else {
        /// 左边右边都不为0
        currentLR[0] -= 1;
        leftArr = bracket(currentLR, "(");
        for (let i = 0; i < leftArr.length; i++) {
          leftArr[i] = current + leftArr[i];
        }
        currentLR[0] += 1;
        currentLR[1] -= 1;
        rightArr = bracket(currentLR, ")");
        for (let i = 0; i < rightArr.length; i++) {
          rightArr[i] = current + rightArr[i];
        }
        return leftArr.concat(rightArr);
      }
    }
    return result;
  };

  //     return result;
  //   };

  /// 存剩余的左右括号个数
  const LR = [n, n];
  const result = bracket(LR, "");
  //   console.log("Result: ", result);
  return result;
};

/// ✅暴力解决
/**
 * 8/8 cases passed (104 ms)
 * Your runtime beats 11.35 % of javascript submissions
 * Your memory usage beats 6.19 % of javascript submissions (43.5 MB)
 *
 * @param {*} n
 * @returns
 */
var generateParenthesis4 = function (n) {
  const isValid = (str) => {
    let balance = 0;
    for (let c of str) {
      if (c === "(") {
        balance += 1;
      } else {
        balance -= 1;
        if (balance < 0) {
          return false;
        }
      }
    }
    return balance === 0;
  };

  const generateAll = (current, n, result) => {
    if (current.length === n) {
      isValid(current) && result.push(current);
      return;
    }
    current += "(";
    generateAll(current, n, result);
    current = current.slice(0, -1);
    current += ")";
    generateAll(current, n, result);
    current = current.slice(0, -1);
  };

  const result = [];
  generateAll("", n * 2, result);
  return result;
};

/// ✅回溯法
/**
 * 8/8 cases passed (84 ms)
 * Your runtime beats 46.35 % of javascript submissions
 * Your memory usage beats 20.32 % of javascript submissions (38.6 MB)
 * @param {*} n
 * @returns
 */
var generateParenthesis5 = function (n) {
  const backtrack = (result, cur, open, close, max) => {
    if (cur.length === max * 2) {
      result.push(cur);
      return;
    }
    if (open < max) {
      cur += "(";
      backtrack(result, cur, open + 1, close, max);
      cur = cur.slice(0, -1);
    }
    if (close < open) {
      cur += ")";
      backtrack(result, cur, open, close + 1, max);
      cur = cur.slice(0, -1);
    }
  };

  const result = [];
  backtrack(result, "", 0, 0, n);
  // console.log('Result: ', result);
  return result;
};

/// ✅剪枝法(深度优先变量)
/**
 * 8/8 cases passed (96 ms)
 * Your runtime beats 18.99 % of javascript submissions
 * Your memory usage beats 20.95 % of javascript submissions (38.4 MB)
 * @param {*} n
 * @returns
 */
var generateParenthesis6 = function (n) {
  const dfs = (cur, left, right, result) => {
    if (left === 0 && right === 0) {
      result.push(cur);
      return;
    }
    if (left > right) {
      return;
    }
    if (left > 0) {
      dfs(cur + "(", left - 1, right, result);
    }
    if (right > 0) {
      dfs(cur + ")", left, right - 1, result);
    }
  };

  if (n <= 0) {
    return [];
  }
  const result = [];
  dfs("", n, n, result);
  return result;
};

/// ✅广度优先遍历
/**
 * 8/8 cases passed (104 ms)
 * Your runtime beats 11.35 % of javascript submissions
 * Your memory usage beats 12.06 % of javascript submissions (40.2 MB)
 * @param {*} n
 * @returns
 */
var generateParenthesis = function (n) {
  if (n <= 0) return [];
  if (n === 1) return ["()"];
  const result = [],
    queue = [];
  queue.push({ str: "", left: n, right: n });
  while (queue.length > 0) {
    const tmp = queue.shift();
    if (tmp.left === 0 && tmp.right === 0) {
      result.push(tmp.str);
    }
    if (tmp.left > 0) {
      queue.push({
        str: tmp.str + "(",
        left: tmp.left - 1,
        right: tmp.right,
      });
    }
    if (tmp.right > 0 && tmp.left < tmp.right) {
      queue.push({
        str: tmp.str + ")",
        left: tmp.left,
        right: tmp.right - 1,
      });
    }
  }
  console.log("Result: ", result);
  return result;
};

/// 动态规划
/**
 * dp[i] = '(' + dp[j] + ')' + dp[i - j - 1], j = 0, 1, ..., i-1
 *
 * 8/8 cases passed (84 ms)
 * Your runtime beats 46.35 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (35.7 MB)
 * @param {*} n
 */
var generateParenthesis = function (n) {
  if (n === 0) return [];
  const dp = [];
  /// dp0
  const dp0 = [""];
  dp.push(dp0);

  for (let i = 1; i <= n; i++) {
    const cur = [];
    for (let j = 0; j < i; j++) {
      const str1 = dp[j];
      const str2 = dp[i - j - 1];
      for (let c1 of str1) {
        for (let c2 of str2) {
          cur.push("(" + c1 + ")" + c2);
        }
      }
    }
    dp.push(cur);
  }
  // console.log("dp: ", dp);
  return dp[n];
};
// @lc code=end
