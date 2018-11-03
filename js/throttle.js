/**
 * 接受两个参数，一个是要执行的函数，以及在哪个作用域中执行；
 */
// function throttle(method, context){
//     clearTimeout(method.tId);
//     method.tId = setTimeout(() => {
//         method.call(context);
//     }, 1000);
// }

// function testTthrottle(){
//     console.log('1');
// }

// function throttle(fn, gapTime) {
//     fn._lastTime = null;
  
//     return function () {
//       fn._nowTime = + new Date()
//       if (fn._nowTime - fn._lastTime > gapTime || !fn._lastTime) {
//         fn();
//         fn._lastTime = fn._nowTime
//       }
//     }
//   }
  
//   let fn = ()=>{
//     console.log('boom')
//   }
  
//   setInterval(throttle(fn,3000),10)


function throttle(fn, gapTime) {
    let _lastTime = null;
  
    return function () {
      let _nowTime = + new Date()
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
        fn();
        _lastTime = _nowTime
      }
    }
  }
  
  let fn = ()=>{
    console.log('boom')
  }
  
  setInterval(throttle(fn,1000),10)
  