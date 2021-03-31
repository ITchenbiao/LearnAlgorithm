/**
*   problem：计算器。
*   给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。
*    表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。     
*   示例：
*   输入："3+2*2"
*   输出：7
*    
*/

/**
* @param {string} s
* @return {number}
* 2021-03-31
*/
var calculate = function(s) {
    let sign = '+', n = 0, c, stack = [];
    for (let i = 0; i <= s.length; i++) {
        c = s.charAt(i);
        if (c === ' ') continue;
        if (c <= '9' && c >= '0') {
            n = n * 10 + parseInt(c);
            continue;
        }
        if (sign === '+') {
            stack.push(n);
        } else if (sign === '-') {
            stack.push(-n);
        } else if (sign === '*') {
            stack.push(stack.pop() * n)
        } else if (sign === '/') {
            stack.push(Math.trunc(stack.pop() / n))
        }
        sign = c;
        n = 0;
    }
    return stack.reduce((acc, n) => acc + n, 0);
};
