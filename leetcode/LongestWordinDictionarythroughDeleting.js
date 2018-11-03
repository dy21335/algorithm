// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string.
// If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.
//
//     Example 1:
// Input:
//     s = "abpcplea", d = ["ale","apple","monkey","plea"]
//
// Output:
//     "apple"
// Example 2:
// Input:
//     s = "abpcplea", d = ["a","b","c"]
//
// Output:
//     "a"
// Note:
//     All the strings in the input will only contain lower-case letters.
//     The size of the dictionary won't exceed 1,000.
// The length of all the strings in the input won't exceed 1,000.

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    var arr = s.split("");
    var maxValue = "";
    d = d.sort();
    // arr.forEach((value, index) => {
    //     tempObj[value] = index;
    // })
    // arr = arr.sort();
    d.forEach((value, index) => {
        if(isExist(s, value)){
            // console.log(maxValue);
            maxValue = value.length > maxValue.length ? value : maxValue;
        };
    })
    return maxValue;
};


function isExist(s, value) {
    var lastindex = s.indexOf(value[0]);
    if(lastindex < 0) return false
    for(var i = 1; i <= value.length-1; ++i){
        if(s.indexOf(value[i], lastindex+1) < 0){
            return false
        }
        lastindex = s.indexOf(value[i], lastindex+1);
    }
    return true
}
// console.log("result", findLongestWord("aewfafwafjlwajflwajflwafj", ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]));
console.log("result", findLongestWord("mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq",
["ntgcykxhdfescxxypyew", "ettphsiunoglotjlccurlre"]))