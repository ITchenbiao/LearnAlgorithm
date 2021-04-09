/**
*   problem：实现 strStr()。
*   给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
*    
*   示例：
*   输入：haystack = "hello", needle = "ll"
*   输出：2
*   解释： 
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 2021-04-09
 */
var strStr = function(haystack, needle) {
    if(needle === '') {
        return 0;
    }
    let reg = new RegExp(needle);
    let res = reg.exec(haystack);
    if(res) {
        return res.index;
    }
    return -1;
};

 