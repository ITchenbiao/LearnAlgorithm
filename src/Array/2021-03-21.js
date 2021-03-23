/**
 *   problem：主要元素。
 *   数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。
 *  
 *   示例：
 *   输入：[1,2,5,9,5,9,5,5,5]
 *   输出：5
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 2021-03-21
 * 时间O(n)
 * 空间O(1)
 * 解析:
 * 变量res为可能的结果，变量hp记录不同的两个数抵消后可能的主要元素出现的次数。
 * 只有当 hp>0 时，res才有效；hp=0, res无效。
 * 当 hp>0 时，同时更新res。
 * 最后需要再遍历一次原数组，判断可能的结果res是否真实有效。
 */
// method 1
var majorityElement = function(nums) {
    var hp = 0, res = null;
    for (var item of nums) {
        if (hp == 0) {
            res = item;
            hp++;
        } else if (item != res) {
            hp--;
        } else {
            hp++;
        }
    }
    var count = 0;
    for (var item of nums) {
        if (item == res) {
            count++;
        }
    }
    return count > nums.length / 2 ? res : -1;
};
// method 2
// 通过 obj 对数组进行计数 判断对象属性的值是否大于数组的一半
var majorityElement = function(nums) {
    let obj = {}
    for(let i of nums){
        obj[i] =! obj[i] ? 1 : ++obj[i]
    }
    for(let i in obj){
        if(obj[i] > Math.floor(nums.length/2) ){
            return i
        }
    }
    return -1
};