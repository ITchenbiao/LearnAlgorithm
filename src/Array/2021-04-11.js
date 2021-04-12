/**
*   problem：移除元素。
*   给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
*   不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
*   元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。    
*   示例：
*   输入：nums = [1,1,2]
*   输出：2, nums = [1,2]
*   解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。 
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 2021-04-11
 */

 var removeElement = function(nums, val) {
    let ans = nums.length;
    for (let i = 0; i < ans;) {
        if (nums[i] == val) {
            nums[i] = nums[ans - 1];
            ans--;
        } else {
            i++;
        }
    }
    return ans;
};
