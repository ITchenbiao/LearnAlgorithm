/**
*   problem：字符串解码。(腾讯面试题)
*   递归的思路，一旦遇到[，立马进入新的递归程序，扫描到对应的]为止。也就是说，凡是遇到括号，括号里面的事情，全部交给子程序完成。
*/

/**
 * @param {string[]} 
 * @return {string[]}
 * 2021-04-20
 */
var decodeString = function (s) {
    // 从第 0 个元素开始处理
    return dfs(s, 0);
  };
  
  let dfs = (s, n) => {
    let res = "";
    // 保存起始索引
    let i = n;
    // 同上，表示重复的次数
    let multi = 0;
    while(i < s.length) {
      let cur = s.charAt(i);
      // 遇到数字，累积 multi 值
      if(cur >= '0' && cur <= '9') 
        multi = multi * 10 + (cur - '0');
      else if(cur === '[') {
        // 划重点！给子程序，把对应的 ] 索引和括号包裹的字符串返回
        // 即tmp 的格式为 [索引，字符串]
        let tmp = dfs(s, i + 1);
        // 这样下次遍历就是从对应的 ] 后面遍历了，因为当前已经把括号里面的处理完了
        i = tmp[0];
        // 需要重复的字符串已经返回来了
        let repeatStr = tmp[1];
        for(let j = 0; j < multi; j++) {
          res += repeatStr;
        }
        // 当前已经把括号里面的处理完，multi 置零，为下一轮遍历准备
        multi = 0;
      }else if(cur === ']') {
        // 遇到了对应的 ] ，返回 ] 索引和括号包裹的字符串
        return [i, res];
      } else {
        res += cur;
      }
      // 继续遍历
      i++;
    }
    return res;
  }
  