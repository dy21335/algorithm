/*小明同学收集了n道编程问题，他想做一个网站把这些题目放在上面。
对于每一道问题给出问题的名称name，该问题的提交次数X，该问题的通过次数Y。一个问题的通过率定义为Y/X。
小明根据通过率把问题难度分了3个等级：
1、通过率0%<= Y/X <= 30%，难度为5。
2、通过率30%< Y/X <=60%，难度为4。
3、通过率60%< Y/X <=100%，难度为3。
为了方便大家查阅题目，小明希望所有题目按照题目名称的字典序从小到大排列在网站上，并且能显示每个题目的难度。你能帮他实现吗？
输入一个数n，接下来有n(n <=100)行，每行输入一个字符串name，整数X，整数Y，
依次表示每个题目的名称，提交次数和通过次数。name的长度不超过100,
name中只有小写字母，1<=X<=1000，0<=Y<=X。 输入保证所有题目的名称不同。
输出n行，按字典序从小到大排序后的题目，每行先输出一个字符串，题目的名称，再输出一个数，题目的难度等级，用一个空格隔开。*/

var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();
var l = -1;
var arr = [];
var objArr = [];//存储已经转换为对象的对象数组

// var solveMeFirst = (a, b) => a+b;
function obj(name,x,y,range) {
  this.name = name;
  this.x = x;
  this.y = y;
  this.range = 0;
}
function objSort(obj1,obj2) {
        if(obj1.name<obj2.name) return -1;
        if(obj1.name == obj2.name)  return 0;
        if(obj1.name > obj2.name) return 1;
};

//判断难度
function judgeRan(range) {
// 1、通过率0%<= Y/X <= 30%，难度为5。
// 2、通过率30%< Y/X <=60%，难度为4。
// 3、通过率60%< Y/X <=100%，难度为3。
  if(0<=range<=0.3) return 5;
  if(0.3<range<=0.6) return 4;
  if(0.6<range<=1) return 3;
}



rl.on('line', function (data) {
  if(l<0){
    l = parseInt(data);
    // console.log(l);
  }
  else{
    arr.push(data);
    if(l == arr.length){
      //数据已经读取完毕，对每行进行操作
      for(let i=0;i<arr.length;i++){
        var arrIn = arr[i].split(" ");
        var objIns = new obj(arrIn[0],arrIn[1],arrIn[2]);
        if(arrIn[1] != 0){
          objIns.range = objIns.y/objIns.x;
          objIns.range = judgeRan(objIns.range);
        }
        objArr.push(objIns);
      }
      objArr.sort(objSort);
      for(let j = 0;j<objArr.length;j++){
        process.stdout.write(objArr[j].name+" "+objArr[j].range+"\n");
        // console.log(objArr[j].name+" "+objArr[j].range);
      }
    process.exit();
    }

  }
});
