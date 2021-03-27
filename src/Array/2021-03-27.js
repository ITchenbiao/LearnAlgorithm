/**
 *   problem： 有序数组的平方。
 *   给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *        
 *   示例：
 *   输入：nums = [-4,-1,0,3,10]
 *   输出：[0,1,9,16,100]
 *   解释：平方后，数组变为 [16,1,0,9,100] 排序后，数组变为 [0,1,9,16,100] 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 2021-03-27
 */
 var sortedSquares = function(A) {
    let start = 0;
    let end = A.length - 1;
    const res = new Array(A.length);
  
    for (let i = A.length - 1; i >= 0; i--) {
      const s = A[start] * A[start];
      const e = A[end] * A[end];
      if (s > e) {
        res[i] = s;
        start++;
      } else {
        res[i] = e;
        end--;
      }
    }
  
    return res;
  };
  