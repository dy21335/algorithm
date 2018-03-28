/*Similar to Problem 1, you are given array A and B. However, you are not required to return a whole sorted array.
Just find the median value of the array Result.
E.g. given array A = [1, 3, 5, 6, 7] and array B = [2, 3, 9], the array Result = [1, 2, 3, 3, 5, 6, 7, 9], the median value is 4.
Requirements:
·You should not change array A and B.
·In order to save memory, array Result is not given and you are not allowed to allocate any other arrays.
·Minimize the time complexity.
You can code in any language you like. Your function may look like this:
int findMedian(int lengthOfA, int A[lengthOfA], int lengthOfB, int B[lengthOfB])*/


function findMedian(arr1, arr2) {
    var len1 = arr1.length,
        len2 = arr2.length,
        sumLen = len1 + len2;
    if (sumLen & 1) {
        return findKth(arr1, 0, len1-1, arr2, 0, len2-1, parseInt(sumLen / 2 + 1));
    }
    return (findKth(arr1, 0, len1-1, arr2, 0, len2-1, parseInt(sumLen / 2)) + findKth(arr1, 0, len1-1, arr2, 0, len2-1, parseInt(sumLen / 2 + 1))) / 2;

}


function findKth(arr1, start1, end1, arr2, start2, end2, k) {

    if (start1 > end1) {
        return arr2[start2 + k - 1];
    }
    if (start2 > end2) {
        return arr1[start1 + k - 1];
    }


    var median1 = parseInt((end1 - start1 + 1) / 2),
        median2 = parseInt((end2 - start2 + 1) / 2),
        key1 = start1 + median1,//如果是偶数个，则key1取得是向上取整的数，如果是基数个，则是刚好在中间
        key2 = start2 + median2,
        sum_len = median1 + median2 + 1;

    console.log("arr1的start1：" + start1 + " end1: " + end1 + " median值： " + median1 + " key1: " + key1 +
        " **arr2的start2： " + start2 + " end2: " + end2 + " median值： " + median2 +" key2 " + key2
        + " k值： " + k + " sum_len值： " + sum_len );
    console.log("~~~~~~~~~~~~~~~~~~~~~");


    if (arr1[key1] <= arr2[key2]) {
        if (sum_len >= k) {
            return findKth(arr1, start1, end1, arr2, start2, key2 - 1, k);
        }
        else {
            return findKth(arr1, key1 + 1, end1, arr2, start2, end2, parseInt(k - median1-1));
        }
    }
    else if (arr2[key2] <= arr1[key1]) {
        if (sum_len >= k) {
            return findKth(arr1, start1, key1 - 1, arr2, start2, end2, k);
        }
        else {
            return findKth(arr1, start1, end1, arr2, key1 + 1, end2, parseInt(k - median2-1));
        }

    }
}

//查找两个排序数组中的第K个元素

var arr1 = [1, 2, 3],
    arr2 = [4, 5, 6, 8, 9];
console.log(findMedian(arr1,arr2));



