/**
*   problem：反转字符串。
*   编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
*    
*   示例：
*   输入：["h","e","l","l","o"]
*   输出：["o","l","l","e","h"]
*    
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 2021-04-01
 */
// 双指针
 const reverseString = (s) => {
    // 1. 设置尾部指针
    let end = s.length - 1;
  
    // 2. 遍历数组
    for (let i = 0; i < end; i++) {
  
      // 3. swap 交换
      const temp = s[i];
      s[i] = s[end];
      s[end] = temp;
  
      // swap 第二种方法：[s[i], s[end]] = [s[end], s[i]]
  
      // 4. 尾部指针缩减
      end--;
    }
  };

//   原生api
  const reverseString = (s) => {
    s.reverse();
  };