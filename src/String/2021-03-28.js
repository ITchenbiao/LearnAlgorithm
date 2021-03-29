/**
 *   problem： 替换所有的问号。
 *   给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。
 *   注意：你 不能 修改非 '?' 字符。      
 *   示例：
 *   输入：s = "?zs"
 *   输出："azs"
 *   
 */

/**
 * @param {string} s
 * @return {string}
 * 2021-03-28
 */
 var modifyString = function (s) {
    s = ['a', ...s.split(''), 'a']
    let i = 0, j = 1
    const gen = (w1, w2) => ['a', 'b', 'c', 'd'].filter(i => i != w1 && i != w2) 

    while (j < s.length) {
        while (s[i + 1] && s[i + 1] != '?') i++
        j = i + 1
        while (s[j] == '?') j++
        let [c1, c2] = gen(s[i], s[j])
        for (let k = i + 1; k < j; k++)  s[k] = k & 1 ? c1 : c2
    }
    return s.slice(1, -1).join('')
}
// 
const alpha = ["a","b","c"];
var modifyString = function(s) {
   let items = s.split("");
   for(let i=0;i<items.length;i++){
       if(items[i]==="?"){
           alpha.forEach(item=>{
            if(item !== items[i-1] && item !== items[i+1]){
                items[i]=item
            }
           })
       }
   }
   return items.join("")
};




