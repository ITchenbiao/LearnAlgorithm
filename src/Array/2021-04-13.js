/**
*   problem：搜索插入位置。
*   给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
*        
*   示例：
*   输入：[1,3,5,6], 5
*   输出：2
*   解释：  
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 2021-04-13
 */
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

 