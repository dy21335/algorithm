var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var str = [];
var distance = 0;


rl.on('line', function(line){ // javascript每行数据的回调接口
    str = line;
    console.log(res(str));
});

// function res(str) {
//     if(str[0] == str[str.length - 1]){
//         return searchLen(str);
//     }
// }
//
// function searchLen(str) {
//     var len1 = 0;
//     var len2 = 0;
//     var reg1 = /(bw)+/g;
//     var reg2 = /(wb)+/g;
//     var min = Number.MAX_SAFE_INTEGER;
//     len1 = str.match(reg1).length;
//     len2 = str.match(reg2).length;
//     return len1 < len2? len1 : len2;
//
// }


console.log('wbbbbbwbwbwbwbwbwbwbwb'.match(/(bw)+/g))
console.log('wbbbbbwbwbwbwbwbwbwbwb'.match(/(wb)+/g))