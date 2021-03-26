/**
 *   problem： 数组中出现次数超过一半的数字。
 *   数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 *   你可以假设数组是非空的，并且给定的数组总是存在多数元素。。     
 *   示例：
 *   输入：[1, 2, 3, 2, 2, 2, 5, 4, 2]
 *   输出：2
 *    
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 2021-03-26
 */
 var majorityElement = function(nums) {
    let count = 1;
    let majority = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count ++;
        } else {
            count --;
        }
    }
    return majority;
};