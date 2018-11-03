// 输入的第一行给出行数
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var num = 0
var inputs = []
rl.on('line', function(line) {
    if(num == 0) {
        // 这里其实Number也可以，但是这里只需要整数，所以直接用了parserInt
        num = parseInt(line.trim())
    } else {
        inputs.push(line.trim())
        if(num == inputs.length) {
            var res
            inputs.sort(function(a, b) {
                return a - b
            })
            if(num % 2) {
                res = inputs[(num - 1) / 2]
            } else {
                // 这里要注意转化一下  不然会拼接成字符串
                res = Math.floor((parseInt(inputs[num / 2]) + parseInt(inputs[num / 2 - 1]))  / 2)
            }

            console.log(res)
            // 不要忘记清空
            inputs.length = 0
            num = 0
        }
    }
})



