// Write a function to find the longest common prefix string amongst an array of strings.
//
//     If there is no common prefix, return an empty string "".
//
//     Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//     Note:
//
// All given inputs are in lowercase letters a-z.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var res ='';
    var j = 0;
    if(strs.length == 1){
        return strs[0];
    }
    if(strs.length == 0) return res;
    while (j < strs[0].length){
        for(let i = 1; i<strs.length; ++i){
            if(j < strs[i].length && (strs[i][j] == strs[0][j])){
                if(i == strs.length - 1){
                    res += strs[0][j];
                }
                continue;
            }
            else return res;
        }
        ++j;
    }

    return res;

};

console.log(longestCommonPrefix([]));
console.log([""].length);
