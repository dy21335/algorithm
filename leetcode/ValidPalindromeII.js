//Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

//    Example 1:
//Input: "aba"
//Output: True
//Example 2:
//Input: "abca"
//Output: True
//Explanation: You could delete the character 'c'.
//    Note:
//The string will only contain lowercase characters a-z. The maximum length of the string is 50000.


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var i,
        j;
    for(i = 0, j = s.length-1; i < j ; i++, j--){
        if(s[i] != s[j]){
            // console.log("i, j", i, j);
            return isValidPalindrome(s, i+1, j)||isValidPalindrome(s, i, j-1)
        }
    }
    return true
};

function isValidPalindrome(str, front, end) {
    // console.log("f,e", front, end);
   for(front, end; front < end; front++, end--){
       if(str[front] != str[end]){
           // console.log(str[front],str[end]);
           return false
       }
   }
   return true
}

// console.log(validPalindrome("cbbcc"));
console.log(validPalindrome("abdca"));