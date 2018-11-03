// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//
//     Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
//     Note: You are not suppose to use the library's sort function for this problem.
//
// Example:
//
//     Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:
//
//     A rather straight forward solution is a two-pass algorithm using counting sort.
//     First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
//     Could you come up with a one-pass algorithm using only constant space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


//利用三路快排
var sortColors = function(nums) {
    var pivot, //要比较的值
        temp,  //存储nums第一个值

        l,          //游标
        lt,         // < pivot序列的结束位置
        ht;       //大于pivot的元素的开始位置

    pivot = 1;
    temp = nums[0];
    nums[0] = pivot;

    l = 1;
    lt = -1;
    ht = nums.length;
    // console.log(nums)

    while (l < ht){
        if(nums[l] < pivot){
            //eEnd紧挨着相等序列
            swap(nums, ++lt, l);
            l++;
            // console.log("<",nums)
        }else if(nums[l] == pivot){
            ++l;
        }else if(nums[l] > pivot){
            swap(nums, --ht, l)
            // console.log(">",nums)
        }
    }
    if(temp >= pivot){
        nums[ht-1] = temp;
    }else if(temp < pivot){
        nums[lt+1] = temp;
    }
    return nums
};

function swap(arr, a, b) {
    var temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


console.log(sortColors([2,0,2,1,1,0])) //[ 0, 0, 1, 1, 2, 2 ]