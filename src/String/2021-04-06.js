/**
*   problem：仅仅反转字母。
*   给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
*    
*   示例：
*   输入："a-bC-dEf-ghIj"
*   输出："j-Ih-gfE-dCba"
*   解释： 
*/

/**
 * @param {string} S
 * @return {string}
 * 2021-04-06
 * 保留所有字母到数组中，弹栈替换原字符串
 */
 var reverseOnlyLetters = function(S) {
    const arr=S.replace(/[^a-z]/ig,"").split("");
    return S.split("").map(s=>(/[a-z]/i).test(s)?arr.pop():s).join("")
};

