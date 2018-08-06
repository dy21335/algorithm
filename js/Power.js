//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
function Power(base, exponent)
{
    let res = 1;
    if(base == 0) return 0;
    if(exponent == 0) return 1;
    if(exponent < 0){
        let positive = Math.abs(exponent); 
        base = 1/base;
        while(positive--){
            res = res * base;
        }
    }else{
        while(exponent--){
            res = res * base;
        }
    }
    return res;
    // write code here
}
console.log(Power(2,-3))
console.log(Power(3,-2))
console.log(Power(0,-2))