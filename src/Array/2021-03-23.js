/**
 *   problem：合并两个有序数组。
 *   给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *  
 *   示例：
 *   输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 *   输出：[1,2,2,3,5,6]
 *   
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 2021-03-23
 */
// method 1
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};

// method 1
var merge = function(nums1, m, nums2, n) {
    nums1.length=m;
    nums2.length=n;
      nums1.push(...nums2);
      let arr=nums1.sort((a,b)=>{
         return a-b;
      })
      return arr
};




