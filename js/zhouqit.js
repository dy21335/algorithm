var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var d_arr = [];
var cur_line = 0;
var tokens;
var results = [];

rl.on('line', function(line){ // javascript每行数据的回调接口
    if (n < 0) { // 测试用例第一行读取n
        n = parseInt(line.trim())
    } else {
        // 矩阵数据读取
        tokens = line.split(' ');
        for(let i = 0; i <tokens.length; i++){
            tokens[i] = parseInt(tokens[i]);
        }
        d_arr.push(tokens);

        //console.log(d_arr);



        cur_line += 1;
    }

    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (n === cur_line) {
        for(let i = 0;i < n;i++){
            results[i] = Infinity;
            let temp = d_arr[i];
            let num = temp[0];
            for(let j = 1;j < num;j++){

                let T = temp[num] - temp[j];

                let bool1 = addCheck(T,temp);

                let bool2 = mCheck(T,temp);

                if(bool1&&bool2){

                    if(T < results[i]){
                        results[i] = T;
                    }
                }
            }


        }
        for(let i = 0; i < results.length; i++){
            console.log(results[i]);
        }




        // 重新初始化相关变量
        n = -1;
        cur_line = 0;
    }
});

function addCheck(T,array) {
    var temp = 0;
    var result;//记录是否x+t在序列中
    var len = array[0];
    for(let i = 1; i < len; ++i){

        temp = array[i] + T;

        if(temp <= array[len]){
            result = array.indexOf(temp,i);


            if(result == -1){
                return false;
            }
        }
        else continue;

    }
    return true;
}

function mCheck(T,array) {
    var temp = 0;
    var result;
    var len = array[0];
    for(let i = len; i > 0; --i){

        temp = array[i] - T;
        if(temp >= array[1]){
            result = array.indexOf(temp);
            if(result == -1){
                return false;
            }
        }
        else continue;
    }
    return true;
}