var x = 5;
var obj = {
    x : 10,
    fun1 : (function fun1() {
        var x = 15;
        window.alert(this.x);//5
        //console.log(this.x);
        setTimeout(function () {
            window.alert(this.x);//5
        },1000)
    })()
}



// var x = 5;
// var obj = {
//     x : 10,
//     fun1 : function fun1() {
//         var x = 15;
//         window.alert(this.x);
//         //console.log(this.x);
//         setTimeout(function () {
//             window.alert(this.x);
//         },1000)
//     }
// }
//
// obj.fun1();//10，5