// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = 0;// 初始状态为负数，表示还没开始读取
var cholateNum = 0;
var tokens = [];
var ans = 1;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
    n++;
    if (n == 1) { // 测试用例第一行读取n
        cholateNum = parseInt(line);
    }else if(n == 2){
        tokens = line.split(' ');
        ans = caculate(tokens);
        console.log(ans);
        n = 0;
        tokens = [];
    }
});

function caculate(strArr) {
    let res = 1;
    let cur_sum = 0;
    let total_sum = 0;
    strArr.forEach((value, index) => {
        strArr[index] = parseInt(strArr[index]);
        total_sum += strArr[index];
    })
    // console.log("total", total_sum);

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] == 0){
            if(i == 0 || i == (strArr.length - 1)){
                // console.log("if1")
                continue;
            }
            if(cur_sum > 0 && total_sum - cur_sum > 0){
                // console.log("if2")
                res ++;
            }
        }else{
            cur_sum++;
            continue;
        }
    }

    return res;
}