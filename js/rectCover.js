//我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
function rectCover(number)
{
    if (number <= 0)
    return 0;
    if (number === 1){
        return 1;
    }else if (number === 2){
        return 2;
    }
    return (number - 2) >= 0 ? (rectCover(number - 2) + rectCover(number - 1)) : (rectCover(number - 1));
    // write code here
}
console.log(rectCover(3))