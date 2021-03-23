/**
 *   problem：所有奇数长度子数组的和。
 *   给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
 *   子数组 定义为原数组中的一个连续子序列。
 *   请你返回 arr 中 所有奇数长度子数组的和 
 *  
 *   示例：
 *   输入：arr = [10,11,12]
     解释：[10]+[11]+[12]+[10,11,12]
 *   输出：66
 */

 /**  
 * @param {number[]} arr
 * @return {number}
 * 2021-03-20
 */
var sumOddLengthSubarrays = function(arr) {
    let sumOdd = 0;
     for (let i = 1; i <= arr.length; i += 2) {//奇数
         for (let j = 0; j + i <= arr.length; j++) {//有效起点控制边界
         sumOdd+=arr.slice(j,j+i).reduce((pre,cur) => pre +cur);
         }
     }
   return sumOdd;
 };