// Given a string, sort it in decreasing order based on the frequency of characters.
//
//     Example 1:
//
// Input:
//     "tree"
//
// Output:
//     "eert"
//
// Explanation:
//     'e' appears twice while 'r' and 't' both appear once.
//     So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var temObj = new Object();
    var temArr = new Array();
    var res = "";
    for(let i = 0; i < s.length; i++){
        if(temObj.hasOwnProperty(s[i])){
            temObj[s[i]]++
        }else {
            temObj[s[i]] = 1;
        }
    }
    // console.log("temA", temObj);

    Object.keys(temObj).forEach((value, index) => {
        temArr.push({
            key : value,
            value : temObj[value]
        })
    })

    temArr.sort(function (a, b) {
        return a.value - b.value
    })
    console.log(temArr)
    for (let i = temArr.length - 1; i >= 0; i--){
        res += temArr[i].key.repeat(temArr[i].value)
    }
    // console.log(res);
    return res
};

frequencySort("tree")