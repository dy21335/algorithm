var res = [1,2,3,4,5,6];

var ans = res.reduce(function (accumulator, curr, currindex) {

    if(accumulator < curr)
        return accumulator + curr;
    else return accumulator;
},0);

console.log(ans);


// console.log([0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr ),10);

nums = [['M',1000],['CM',900], ['D',500]];

var map = new Map(nums);