// var moudle = {
//     x: 42,
//     getX: function () {
//         console.log(this.x);
//     }
// }
//
// var retrieveX = moudle.getX;
// retrieveX();//undefined
//
// var boundGetX = retrieveX.bind(moudle);
// boundGetX();//42
//bind的模拟实现

var moudle = {
    x: 42,
    getX: function (name, age) {
        this.name = name;
        this.age = age;
        console.log(this.x);
        console.log(this.name);
        console.log(this.age);
    }
}


var retrieveX = moudle.getX;
retrieveX();//undefined,undefined,undefined
// var boundGetX = retrieveX.bind(moudle,"daisy",100);
// var obj = new boundGetX();//undefined,daisy,100


Function.prototype.bind2 = function (context) {
    var self = this;
    //获取传入的参数里除去第一个参数之后的参数
    var args = Array.prototype.slice.call(arguments,1);

    var fNop = function () {};

    var fBound = function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = args.concat(Array.prototype.slice.call(arguments));
        //检查是否是把fBound当构造函数用？如果是构造函数，那么this值指向了当前这个new出来的obj；
        return self.apply(this instanceof fBound? this:context,bindArgs);
    }

    //// 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fNop.prototype = this.prototype;
    fBound.prototype = new fNop();
    return fBound;
}

var boundGetX = retrieveX.bind2(moudle,"sandra",100);
var obj = new boundGetX();//undefined sandra 100