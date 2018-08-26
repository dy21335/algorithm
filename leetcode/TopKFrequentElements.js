// Given a non-empty array of integers, return the k most frequent elements.
//
//     Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
//
// Input: nums = [1], k = 1
// Output: [1]
// Note:
//
//     You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//     Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //tempMap1的key和value分别记录nums中key出现的次数
    //tempArr2是对象数组，对象的key对应temMap的key和value与tempMap1的key和value相对应，主要是为了排序
    var tempMap1 = new Map(); //使用map结构是因为方便遍历，并且可以存储基本类型为key
    var tempArr2 = new Array();
    var res = [];
    for(let i = 0; i < nums.length; ++i){
        if(tempMap1.has(nums[i])){
            tempMap1.set(nums[i], tempMap1.get(nums[i]) + 1)
        }else {
            tempMap1.set(nums[i], 1)
        }
    }


    tempMap1.forEach((value, key, map) => {
        tempArr2.push({
            key : key,
            value : value
        })
    })

    tempArr2.sort(function (a, b) {
        return a.value - b.value;
    })


    for(let i = tempArr2.length - 1; i >= 0 && k-- > 0; --i){
      res.push(tempArr2[i].key);
    }
    return res;
};

console.log("res", topKFrequent([1,1,1,2,2,3], 2))
console.log("res", topKFrequent([1], 1))
console.log("res", topKFrequent([5,3,1,1,1,3,73,1], 1))