/**
 *    problem：有重复字符串的排列组合。
 *    编写一种方法，计算某字符串的所有排列组合。
 *    示例： 输入：S = "qqe"
 *    输出：["eqq","qeq","qqe"]
 */

/**
 * @param {string} S
 * @return {string[]}
 * 2021-03-17
 */
var permutation = function(S) {
    let result=new Set();
    if(S.length <= 1){
        result.add(S);
    }else{
        for(let i = 0;i < S.length; i++){
            let left=S[i];
            let newStr=S.slice(0,i) + S.slice(i+1,S.length);
            let right=permutation(newStr);
            for(let j= 0;j < right.length;j++){
                let end=left + right[j];
                result.add(end);
            }
        }
    };
    return Array.from(result);
};