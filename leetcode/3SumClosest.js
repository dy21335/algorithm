// Given an array nums of n integers and an integer target,
// find three integers in nums such that the sum is closest to target. Return the sum of the three integers.
// You may assume that each input would have exactly one solution.
//
//     Example:
//
// Given array nums = [-1, 2, 1, -4], and target = 1.
//
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var res,
        temp,
        sum;
    res = [];
    j = 0;
    nums.sort((a, b) => a-b);

    while(j<Number.MAX_SAFE_INTEGER){

    for (let i = 0; i < nums.length - 2; ++i){

        if(nums[i] == nums[i-1]) continue;

        sum = twoSum(nums.slice(i+1),(target+j) - nums[i]);

        if(sum.length != 0) {
            // res.push(nums[i]);
            // res = res.concat(sum);
            return target+j;
        }
        else {
            sum = twoSum(nums.slice(i+1), (target-j) - nums[i]);
            if(sum.length != 0) {

                return target-j;
            }
        }
    }

    j++;

    }
    return res;
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

            result = result.concat([nums[i],nums[j]]);

            return result;

        }
        else if( sum > target ){
            --j;
        }
    }
    return result;
}



console.log(threeSumClosest([1,1,1,1],-100));


