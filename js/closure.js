// function fun1() {
//     var i = 4;
//     function fun2() {
//         console.log(i);
//     }
//     return fun2;
// }
//
// var temp = fun1();
// temp();
// temp = null;//释放对象


var moudel1 = (function () {
    var _count = 0;
    var m1 = function () {
        _count++;
    };
    var m2 = function () {
        _count--;
    }
    var m3 = function () {
        console.log(_count);
    }
    return {
        m1 : m1,
        m2 : m2,
        m3 : m3
    }

})();
moudel1.m1();
moudel1.m3();//1
moudel1.m2();
moudel1.m3();//0