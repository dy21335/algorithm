// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
//     Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
//     You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//     Example:
//
// Input:
//     nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// Output: [1,2,2,3,5,6]


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//nums1数组从后往前填写
var merge = function(nums1, m, nums2, n) {
    var i,
        j,
        index;
    i = m-1;
    j = n-1;
    index = m+n-1;
    nums1.length = m + n;
    while (i >= 0 && j >= 0){
        var temp = nums1[i]>=nums2[j]?nums1[i--]:nums2[j--];
        nums1[index--] = temp;
    }
    while (j >= 0){
        nums1[index--] = nums2[j--];
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
