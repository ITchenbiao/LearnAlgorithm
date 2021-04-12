/**
*   problem：删除有序数组中的重复项。
*   给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
*   不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
*    
*   示例：
*   输入：nums = [3,2,2,3], val = 3
*   输出：2, nums = [2,2]
*   解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 2021-04-10
 */
 var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
