var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var resArr = [];
var distance = 0;

resArr[0] = 0;
for(let i = 1; i <= 5; i++){
    resArr[i] = 1;
}

rl.on('line', function(line){ // javascript每行数据的回调接口
    distance = parseInt(line);
    console.log(Distance(distance));
});


function Distance(dis) {
    if( 0 <= dis && dis <=5 ){
        return resArr[dis];
    }
    for (let i = 6; i <= dis; i++) {
            minDis(i);
    }

    return resArr[dis]
}

function minDis(dis) {
    var min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <=5; i++) {
        let step = dis - i;
        min = min < resArr[step] ? min : resArr[step];
    }
    resArr[dis] = min + 1;
}

