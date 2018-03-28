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


var k=-1;//先给行数置-1,表示还没开始读取
var rows=[]; //用于存储每行的输入
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  if(k<0){
    k=parseInt(line.trim());//读取第一行，得到接下来输入的行数
  }else{
    rows.push(line.trim());//将每次输入的行数据存入
    if(k==rows.length){//当输入的行数等于设定的k值时，开始逻辑处理
      var result=rows.reduce(function(fir,cur){ //连接字符串
        return fir+cur;
      });
      console.log(result); //输出结果
      r1.resume();

      rows.length=0;//状态重置
      k=-1;
    }
  };
