
/**
 *   problem：连续子数组的最大和。
 *   输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 *   要求时间复杂度为O(n)。     
 *   示例：
 *   输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 *   输出：6
 *   解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 2021-03-25
 */
 var maxSubArray = function(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        res = Math.max(res, nums[i]);
    }
    return res;

}