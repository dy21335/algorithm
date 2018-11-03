var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
var inputArr = [];
rl.on('line', function(line){ // javascript每行数据的回调接口
    if (n < 0) { // 测试用例第一行读取n
        n = parseInt(line.trim())
    } else {
        // 矩阵数据读取
        var tokens = parseInt(line);
        inputArr.push(tokens);
        // 记录当前读取的行数
        cur_line += 1;
    }

    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (n === cur_line) {
        checkNumbs(inputArr);
        // 重新初始化相关变量
        n = -1;
        ans = 0;
        cur_line = 0;
        inputArr = [];
    }
});

function checkNumbs(numArr) {
    var i = numArr.length;
    let j = -1;
    while (++j < i){
        let currNum = numArr[j];
        if(currNum == 0){
            console.log("Yes");
            continue
        }
        let sum = caculateSum(currNum);
        let res = numArr[j] % sum ;
        if(res == 0){
            console.log("Yes");
        }else {
            console.log("No");
        }
    }
}
function caculateSum(num) {
    let sum = 0;
    while (num){
        sum += num % 10;
        num = parseInt(num/10);
    }
    return sum
}
