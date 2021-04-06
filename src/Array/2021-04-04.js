/**
*   problem：转置矩阵。
*   给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
*    
*   示例：
*   输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
*   输出：[[1,4,7],[2,5,8],[3,6,9]]
*   解释： 
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 2021-04-04
 */
 var transpose = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const transposed = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
};
