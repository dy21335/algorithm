// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

//
//     Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//     Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */

var res = [];
var curArr = [];
var letterCombinations = function(digits) {
    var map,
        arr,
        tempArr;
    arr = [['2','abc'],['3','def'],['4','ghi'],['5','jkl'],['6','mno'],
            ['7','pqrs'],['8','tuv'],['9','wxyz']];
    res = [];
    map = new Map(arr);
    tempArr = [],
    curArr = [];

    if(!digits) return res;

    for (let i = 0; i<digits.length; ++i){
        //数字转成对应的字符串
        tempArr.push(map.get(digits[i]));

    }

    digui(tempArr, 0, curArr);
    return res;

};

function digui(digits, index, curArr) {

    if(index == digits.length - 1){
        for(let i = 0; i<digits[index].length; ++i){
            curArr.push(digits[index][i]);
            res.push(curArr.slice().join(""));
            curArr.pop();
        }
        return;
    }
    else {
        for(let i = 0; i<digits[index].length; ++i){
            curArr.push(digits[index][i]);

            digui(digits, index+1, curArr);

            curArr.pop();
        }

    }

}

console.log(letterCombinations(''));