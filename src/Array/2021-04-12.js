
/**
*   problem：多数元素。
*   给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
*   不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
*   元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。    
*   示例：
*   输入：[3,2,3]
*   输出：3
*   解释：  
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 2021-04-12
 */
// method 1：排序：因为大于一半, 所以排序后的 中间那个数必是
var majorityElement = function(nums) {
    nums.sort((a,b) => a - b)
    return nums[Math.floor(nums.length / 2)]
};
// method 2：对象：用对象记录数出现的次数, 大于一半的就是了
var majorityElement = function(nums) {
    let half = nums.length / 2
    let obj = {}
    for(let num of nums){
       obj[num] = (obj[num] || 0) + 1
       if(obj[num] > half) return num
    }
};