/**
 *   problem：0～n-1中缺失的数字。
 *   一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 *   示例：
 *   输入: [0,1,3]
 *   输出: 2
 */

 /**
 * @param {number[]} nums
 * @return {number}
 * 2021-03-19
 */
var missingNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i) return i;
    }
    return nums.length;
};