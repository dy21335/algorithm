/*把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。*/

// function minNumberInRotateArray(rotateArray)
// {
//     if(rotateArray.length==0){
//         return 0;
//     }
//     let index = minSearch(rotateArray,0,rotateArray.length-1);
//     // console.log(index);
//     // let frontArr = rotateArray.slice(0,index)? rotateArray.slice(0,index):[];
//     // let afterArr = rotateArray.slice(index);
//     // console.log(frontArr);
//     // console.log(afterArr);
//     // frontArr.reverse();
//     // afterArr.reverse();
//     // let result = frontArr.concat(afterArr).reverse();
//     console.log(rotateArray[index]);
//     return rotateArray[index];
// }
//
// function minSearch(arr, low, high) {
//     let result;
//     let index =low + parseInt((high-low)/2);
//       // console.log(low,high,index);
//     if(low>high){
//         return false;
//     }
//     if((high-low)==1){
//         // console.log((high-low)==1);
//         return high;
//     }
//     if(arr[index]>=arr[low]){
//         //要加上等号，否则，当输入的数组为[1,1,1,1]时，将无法查找；
//        result = minSearch(arr,index,high);
//     }
//     else if(arr[index]<=arr[low]){
//         result = minSearch(arr,low,index)
//     }
//     return result;
// }
// var arr = [6501,6828,6963,7036,7422,7674,8146,8468,8704,8717,9170,9359,9719,9895,9896,9913,9962,154,293,
//     334,492,1323,1479,1539,1727,1870,1943,2383,2392,2996,3282,3812,3903,4465,
//     4605,4665,4772,4828,5142,5437,5448,5668,5706,5725,6300,6335];
// var arr1 = [1,1,1,1];
// minNumberInRotateArray(arr1);


/*斐波那契数列*/
// function Fibonacci(n)
// {
//     if(n==1){
//         return 1;
//     }
//     let n0 = 0;
//    let n1 = 1;
//    let n2=0;
//    for(let i=2;i<=n;i++){
//        n2 = n0+n1;
//        n0=n1;
//        n1=n2;
//    }
//
//    // console.log(n2);
//     return n2;
// }

/*一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法*/
// function jumpFloor(number)
// {
//     if(number==1){
//         return 1;
//     }
//     if(number==2){
//         return 2;
//     }
//     return jumpFloor(number-1)+jumpFloor(number-2);
// }
//
// console.log(jumpFloor(4));

/*一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法*/
//2^(n-1)

// var arr = "bac";
// arr.split("");
// console.log(arr.split("").sort());
// var obj= {
//   a:'ZBC',
//   n:1
// }
// var obj2={
//   a:'EFG',
//   n:1
// }
// var arr1=[];
// arr1.push(obj);
// arr1.push(obj2);
// // console.log(obj.a[0]);
// console.log(arr1.sort(objSort));
// function objSort(obj1,obj2) {
//   if(obj1.n < obj2.n) return -1;
//   if(obj1.n==obj2.n) {
//     if(obj1.a[0]<obj2.a[0]) return -1;
//     if(obj1.a[0] == obj2.a[0]) return 0;
//     if(obj1.a[0] > obj2.a[0]) return 1;
//   }
//   if(obj1.n > obj2.n) return 1;
// }
// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// //每读一行，即一行输入结束敲回车，执行事件line对应的方法（这里为计算A+B并输出）
// rl.on('line', function(line) {
//   var tokens = line.split(' ')
//   //直接使用console.log进行输出，一次输出即为一行，输出多行可多次使用console.log
//   console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
// })



