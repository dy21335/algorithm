// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
//     Example 1:
//
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:
//
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
//     You may assume k is always valid, 1 ≤ k ≤ array's length.

//利用快速排序实现排序再选择

var arr = [2,4,6,2,7,8];



function multiquickSort(arr, low, high) {
    if(low < high){
        let pivotIndex = quickSort(arr, low, high);
        multiquickSort(arr, low, pivotIndex - 1);
        multiquickSort(arr, pivotIndex + 1, high);
    }else {
        return;
    }
}

function quickSort(arr, low, high) {
    let pivot = arr[low];
    while (low < high){
        while (arr[high] > pivot && low < high){
            high--
        }
        arr[low] = arr[high];
        while (arr[low] <= pivot && low < high){
            low++
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}
multiquickSort(arr, 0, arr.length-1);
console.log(arr);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    multiquickSort(nums, 0, nums.length - 1);
    return nums[nums.length - k];
};
console.log(findKthLargest(arr, 3));