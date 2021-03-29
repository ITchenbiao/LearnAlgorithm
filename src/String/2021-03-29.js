/**
 *   problem：字符串压缩。
 *   字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。     
 *   示例：
 *   输入："aabcccccaaa"
 *   输出："a2b1c5a3"
 *   
 */

/**
 * @param {string} S
 * @return {string}
 * 2021-03-29
 */
 var compressString = function(S) {
    let count=1;
    let str = "";
    for(let i = 1 ; i < S.length+1 ; i++){
        if(S[i-1] === S[i]){
            count++
        }else{
            str +=S.slice(i-1,i )+ count
            count = 1
        }
    }
    return S.length > str.length ? str : S
};
