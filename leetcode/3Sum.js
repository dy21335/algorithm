// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//     Note:
//
// The solution set must not contain duplicate triplets.
//
//     Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
//     A solution set is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var result;
var threeSum = nums => {
    //result为所有结果;
    var result;
    result = [];

    nums.sort((a,b)=>a-b);
    for(let i = 0; i < nums.length - 2; ++i){
        //此两步可以节省时间；
        if(nums[i] == nums[i-1]) continue;
        if(nums[i] > 0 ) break;

        var temp = twoSum(nums.slice(i+1), -nums[i]);
        if(temp){
            result = result.concat(temp);
        }
    }

    return result;
};

function twoSum(nums, target) {
    //返回一个结果数组；
    var result,
        sum;
    result = [];
    for(let i = 0, j = nums.length - 1; i < j; i,j){
        sum = nums[i] + nums[j];
        if(nums[i] == nums[i-1] || sum<target){
            ++i;
            continue
        }

        if(sum == target){

            result.push([-target,nums[i],nums[j]]);
            ++i;
        }
        else if( sum > target ){
            --j;
        }
    }
    return result;
}



console.log(threeSum([0]));


