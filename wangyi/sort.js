//按对象的某个属性比较
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}

//按大小
function sortNumber(a,b)
{
    return a - b
}