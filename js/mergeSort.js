//
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。



function reOrderArray(array)
{
   return mergeSort(array);
}


// function merge(left, right) {
//     var result = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]){
//             result.push(left.shift());
//         }
//         else{
//             result.push(right.shift());
//         }
//     }
//     return result.concat(left, right);
// }

function merge(left, right) {
    var result,
        i,
        j;
    result = [];


    while(left[0] % 2 == 1 && left.length){
        result.push(left.shift());
    }
    while (right[0] % 2 == 1 && right.length) {
        result.push(right.shift());
    }
    return result.concat(left, right);
}


function mergeSort(arr) {
    //利用循环防止栈溢出；
    if(arr.length == 1){
        return arr;
    }
    var result = [];
    //result 是一个存放每次merge后结果的二维数组；
    for (let i = 0, len = arr.length; i < len; i++){
        result.push([arr[i]]);
    }

    //方便数组长度为奇数时进行操作
    result.push([]);

    for(let i = arr.length; i > 1; i = ~~((i+1)/2)){
        //每进入一个新的循环，需要合并的数组长度减半；
        for(var j=0, k = 0; k < i;j++, k += 2){
            result[j] = merge(result[k], result[k+1])
        }
        //将result尾部长度+1赋值为空，方便数组长度为奇数时进行操作。
        result[j] = [];
    }

    arr = result[0];
    return arr;
}



console.log(mergeSort([1,2,3,4,5,6,7]));

var a = [1,4,5,2,5,8,8,7,9];

// console.log(reOrderArray(a));


