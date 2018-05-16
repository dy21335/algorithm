// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
//     Example 1:
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

var findMedianSortedArrays = function(nums1, nums2) {
    var len1,
        len2,
        totalLen;
    len1 = nums1.length;
    len2 = nums2.length;
    totalLen = len1 + len2;
    if(totalLen & 1){
        return findTopK(nums1, 0, len1-1, nums2, 0, len2-1, parseInt(totalLen/2));
    }
    else {
        var firstNum = findTopK(nums1, 0, len1-1, nums2, 0, len2-1, parseInt(totalLen/2)-1);
        var secondNum = findTopK(nums1, 0, len1-1, nums2, 0, len2-1, parseInt(totalLen/2));
        return (firstNum+secondNum)/2;
    }

}

function findTopK(arr1, start1, end1, arr2, start2, end2, k) {
    //k为假设两个数组有序的组合在一起时，我们需要找的那个中间值的索引号；
    //median1和medain2分别为两个数组的中间值的索引；
    //x1和x2分别两个数组的中间值到数组的开始的地方的长度；
    var median1,
        meidan2,
        x1,
        x2;
    if(start1 > end1 || start2 > end2){
        //出口
        return start1 > end1?arr2[start2 + k]:arr1[start1 + k];
    }

    median1 =start1 + parseInt((end1-start1)/2);
    meidan2 =start2 + parseInt((end2-start2)/2);

    if(arr1[median1] > arr2[meidan2]){
        return findTopK(arr2, start2, end2, arr1, start1, end1, k);
    }
    else {
        x1 = median1 - start1 + 1;
        x2 = meidan2 - start2 + 1;
        var sum = x1 + x2;

        if(sum > (k+1)){
            //因为k为索引号，而数组是从0开始，所以要k+1表示这个中间值是第k+1位；
            return findTopK(arr1, start1, end1, arr2, start2, meidan2-1, k);
        }
        else if(sum <= (k+1)){
            return findTopK(arr1, median1 + 1, end1, arr2, start2, end2, k-x1);
        }
    }

}

console.log(findMedianSortedArrays([3],[1,2,4]));



function findMedian(arr) {
    return arr[parseInt(arr.length/2)];
}
