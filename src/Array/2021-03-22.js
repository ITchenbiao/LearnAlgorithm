/**
 *   problem：两数之和。
 *   给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 *  
 *   示例：
 *   输入：nums = [2,7,11,15], target = 9
 *   输出：[0,1]
 *   解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 哈希表
 * 2021-03-22
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0, len = nums.length; i < len; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }else{
            map.set(nums[i], i);
        }
    }
    return [];
};

