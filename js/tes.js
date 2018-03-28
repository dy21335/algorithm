// //
// // function test() {
// //     return 0;
// // }
// //
// // var f1 = new test();
// // console.log(f1.prototype==test.prototype);
// // console.log(test.__proto__==Function.prototype);
//
//
// // var obj ={a:1,b:function () {console.log(this.a)}};
// // var fun =obj.b;
// // fun();
// // var test={};
// // console.log(typeof test=='object');
//
// // var obj1={
// //     1:"test1",
// //     "2":"test2",
// //     str:"test3"
// // }
// //
// // console.log(obj1[0]);
// // console.log(obj1[1]);
// // console.log(obj1.str);
//
// //  var test = (function(a) {
// //     this.a = a;
// //      return function(b) {
// //         return this.a + b;
// //      }
// //    }
// //    (function(a, b) {
// //     return a;
// //  }(1, 2))
// //  );
// //
// // console.log(test(4)); //输出什么？？？？
//
// /*在一个二维数组中，每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数*/
// /*function Find(target, array){
//     let row = array.length;
//     let col = array[0].length-1;
//     let i = 0;
//     let result = false;
//     while((i < row) && (col >= 0)){
//         if (target<array[i][col]){
//             --col;
//         }
//         else if(target==array[i][col]){
//             result = true;
//             break;
//         }
//         else if(target > array[i][col]){
//             if(++i<row);
//             else{
//                 break;
//             }
//         }
//     }
//         return result;
//     }
//
// var result=Find(7,[[1,2,8,9],[4,7,10,13]]);
// console.log(result);
// */
//
//
// /*请实现一个函数，将一个字符串中的空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。*/
// /*function replaceSpace(str)
// {
//         let arr=[];
//         for(let i = 0;i<str.length;i++){
//             if(str[i]==" "){
//
//                 arr.push("%");
//                 arr.push(20);
//             }
//             else{
//                 arr.push(str[i]);
//             }
//         }
//         arr = arr.join("");
//         return arr;
// }
//
// replaceSpace("we are happy!");*/
//
// // /*输入一个链表，从尾到头打印链表每个节点的值*/
// // function ListNode(x){
// //     this.val = x;
// //     this.next = null;
// // }
// // function printListFromTailToHead(head)
// // {
// //     let temStack = [];
// //     let current = null;
// //     current = head;
// //     while(current){
// //         temStack.push(current.val);
// //         current = current.next;
// //     }
// //     return temStack.reverse();
// // }
// //
// // head = new ListNode(1);
// // node1 = new ListNode(2);
// // node2 = new ListNode(3);
// // head.next = node1;
// // node1.next = node2;
// //
// // console.log(printListFromTailToHead(head));
//
//
//
// /*有关于类属性的声明*/
// // function Animal() {
// //     this.dog = 'dog';
// //     var ani2 = 'what';
// // }
// // var aniIns = new Animal();
// // var aniIns2 = new Animal();
// // console.log(Animal.prototype.ani2);//undefined
// // console.log(aniIns.prototype.ani2);//undefined
// // aniIns.ani2 = 'change';
// // console.log(aniIns.ani2);
//
// // console.log(5/2);
// //  var arr = {};
// // console.log({}=={});
// // console.log(arr==null);//false
// // console.log(undefined===null);
// // console.log(arr-'1');
// /*第一行会是行数N ( 0 < N <= 500)
// 之后N行中的每行第一个字段是数字X (0 <= X <= 500)，表示该行后面有X个单词。数字与单词间，单词与单词间均以空格分隔。
// N行后会有一行，包含数字K ( 0 < K <= N)
// 数据总大小不超过100K8*/
// // var n = parseInt(readline());
// // var ans = 0;
// // for(var i = 0;i < n; i++){
// //   lines = readline().split(" ")
// //   for(var j = 0;j < lines.length; j++){
// //     ans += parseInt(lines[j]);
// //   }
// // }
//
// //将所有单词存入一个数组，索引对应每个单词，pop出每个单词，然后用indexof方法检索数组的每个单词是否重复出现。
// //为每个不同的建立一个对象。对应的属性str存储每个单词的值，index存储每个单词出现的次数
//  var readline = require('readline');
//  const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//  });
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
//
// var input = "";
// var input_array = "";
//
// process.stdin.on('data', function (data) {
//   input += data;
// });
//
// process.stdin.on('end', function () {
//   input_array = input.split("\n");
//   // 处理input
// });
// var fun = function count(arr) {
//     var rows = parseInt(input_array[0]);
//     consol.log(rows);
//     let arr = [];//读取到的每个单词存进数组
//     let result=[];//最后没有重复
//     let obj = {
//       str:'',
//       index:1
//     };//记录没有重复的单词和出现的次数
//     let num;//每行单词个数
//     let lines;//每行单词数组
//     while (rows--){
//       lines = readline().split(" ");//保存到lines数组
//       num = parseInt(lines[0]);
//       //存进arr数组
//       for(var j = 1;j <= num; j++){
//         arr.push(lines[j]);
//       }
//     }
//     //遍历arr，pop每个元素，再index
//     let temp;
//     let m = 0;
//     temp = arr[0];
//     obj.str=arr.unshift();
//     result.push(obj);
//     for(var i = 1;i<arr.length;i++){
//       if(arr.indexOf(temp)){
//         obj.index++;
//         arr.unshift();
//       }
//       else {
//         temp = arr[i];
//         obj.str = arr.unshift();
//         result.push(obj);
//       }
//     }
//     var result = result.sort(objSort);
//     let k = parseInt(readline());
//     for (let n = 0;n<k;n++){
//       consol.log(result);
//     }
//     function objSort(obj1,obj2) {
//       if(obj1.n < obj2.n) return -1;
//       if(obj1.n==obj2.n) {
//         if(obj1.str[0]<obj2.str[0]) return -1;
//         if(obj1.str[0] == obj2.str[0]) return 0;
//         if(obj1.str[0] > obj2.str[0]) return 1;
//       }
//       if(obj1.n > obj2.n) return 1;
//     }
//   });
//
//

function obj(name) {
  this.name = name;
}
var arr = [];
arr.push(new obj("abc"));
arr.push(new obj("aac"));
console.log(arr.sort(objSort));


function objSort(obj1,obj2) {
  if(obj1.name<obj2.name) return -1;
  if(obj1.name == obj2.name)  return 0;
  //
  // for(let i = 1,j = 0;i<obj1.name.length&&j<obj2.length;i++,j++){
  //   if(obj1.name[i] == obj2.name[i])
  // }

  // }
  if(obj1.name > obj2.name) return 1;
};

