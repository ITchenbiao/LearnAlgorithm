/**
*   problem：俄罗斯套娃信封问题（抖音面试题）。
*   给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
*   当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
*   请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
*    
*   示例：
*   输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
*   输出：3
*   解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。 
*/

/**
 * @param {number[][]} envelopes
 * @return {number}
 * 2021-04-07
 */
 var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 1) return 1;
      envelopes.sort((a, b) => {
          if (a[0] !== b[0]) return a[0] - b[0];
          else return b[1] - a[1];
      });
      let LISArr = [];
      for (let [key, value] of envelopes) {
        LISArr.push(value);
      }
      console.log( LISArr);
      return LIS(LISArr);
  };
  function LIS(arr) {
    let dp = [];
    let maxAns = 0;
    for (let i = 0; i < arr.length; i++) {
      dp[i] = 1;
    }
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (arr[i] > arr[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        maxAns = Math.max(maxAns, dp[i]);
      }
    }
    return maxAns;
  }
  
  