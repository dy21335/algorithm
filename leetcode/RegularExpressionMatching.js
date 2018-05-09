// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
//
// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
//     The matching should cover the entire input string (not partial).
//
// Note:
//
//     s could be empty and contains only lowercase letters a-z.
//     p could be empty and contains only lowercase letters a-z, and characters like . or *.
// Example 1:
//
// Input:
//     s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
//     Example 2:
//
// Input:
//     s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
//     Example 3:
//
// Input:
//     s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = "^"+p+"$";
    var reg = new RegExp(p,"g");
    var result = reg.test(s);
    return result;
};

console.log(isMatch("bb",".*"));