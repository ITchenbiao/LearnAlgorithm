/**
*   problem：两个相同字符之间的最长子字符串。
*   给你一个字符串 s，请你返回 两个相同字符之间的最长子字符串的长度 ，计算长度时不含这两个字符。如果不存在这样的子字符串，返回 -1 。
*    
*   示例：
*   输入：s = "abca"
*   输出：2
*   解释：最优的子字符串是 "bc" 。
*/

/**
 * @param {string} s
 * @return {number}
 * 2021-04-05
 */
 var maxLengthBetweenEqualCharacters = function (s) {
    let map = {}, res = 0;
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]] !== undefined) {
        res = Math.max(res, i - map[s[i]]);
      } else {
        map[s[i]] = i;
      }
    }
    return res - 1;
  };
  
