//输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n)
{
    let i = 0;
    while (n != 0) {
        ++i;
        n = n & (n - 1);
    }
    return i;
    // write code here
}

console.log(NumberOf1(101));