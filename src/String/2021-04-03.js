/**
*   problem：最长公共子序列。
*   给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
*    
*   示例：
*   输入：text1 = "abcde", text2 = "ace" 
*   输出：3
*   解释：最长公共子序列是 "ace" ，它的长度为 3 。
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * 2021-04-03
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        const c1 = text1[i - 1];
        for (let j = 1; j <= n; j++) {
            const c2 = text2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};
