
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var maxtri = []
var row_arr = [];
var cur_line = 0;
var row_bool = [];
var step = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
    if (n < 0) { // 测试用例第一行读取n
        maxtri = line.trim().split(" ");
        maxtri[0] = parseInt(maxtri[0]);
        maxtri[1] = parseInt(maxtri[1]);
        n = parseInt(maxtri[0]);
        // console.log(n);
    } else {

        // 矩阵数据读取
        row_arr.push(line.split(''));
        // console.log(row_arr);
        // 记录当前读取的行数
        cur_line += 1;
    }

    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (n === cur_line) {
        // 输出结果
        row_bool = init(row_bool,maxtri[0],maxtri[1]);

        scan1(row_arr, maxtri[0],maxtri[1]);

        scan2(row_arr, maxtri[0],maxtri[1]);
        console.log(step);
        // 重新初始化相关变量
        step = 0;
        n = -1;
        cur_line = 0;
    }
});


function init(row_bool, long, width) {
    let d_arr = new Array();
    for(let i = 0;i<long;i++){
        d_arr[i] = new Array();
        for(let j = 0;j<long;j++){
            d_arr[i][j] = 0;
        }
    }
    return d_arr;
}

function scan1(row_arr, long , width) {

    for(let i = 0;i<long;i++){
        for(let j = 0;j<width;j++){
            let i_temp = i;
            let j_temp = j;
            if(row_arr[i_temp][j_temp] == 'X')
                continue;

                if((row_arr[i_temp][j_temp] == 'B'||row_arr[i_temp][j_temp] == 'G')&&row_bool[i_temp][j_temp] != 1) {
                    // console.log(row_bool);
                     console.log("SCAN1"+i_temp+" "+j_temp);
                    row_bool[i_temp][j_temp] = 1;
                    step++;
                    // console.log("我是" + row_bool);

                    for (++i_temp, --j_temp; i_temp < long && j_temp >= 0; ++i_temp, --j_temp) {
                        if (row_arr[i_temp][j_temp] == 'B' || row_arr[i_temp][j_temp] == 'G') {
                            row_bool[i_temp][j_temp] = 1 ;
                        }
                        else break;

                    }
                }

        }

    }
}


function scan2(row_arr, long , width) {

    for(let i = 0;i<long;i++){
        for(let j = 0;j<width;j++){
            let i_temp = i;
            let j_temp = j;
            if(row_arr[i_temp][j_temp] == 'X')
                continue;

            if((row_arr[i_temp][j_temp] == 'Y'||row_arr[i_temp][j_temp] == 'G')&&row_bool[i_temp][j_temp] != -1) {
                // console.log(row_bool);
                 console.log("SCAN2"+i_temp+" "+j_temp);
                row_bool[i_temp][j_temp] = -1;
                step++;
                for (++i_temp, ++j_temp; i_temp < long && j_temp < width; ++i_temp, ++j_temp) {
                    if (row_arr[i_temp][j_temp] == 'Y' || row_arr[i_temp][j_temp] == 'G') {
                        row_bool[i_temp][j_temp] = -1 ;
                    }
                    else break;

                }
            }

        }

    }
}



// 4 2
// XY
// BX
// YX
// GX