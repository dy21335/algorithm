var array = [1, '1', {}, {a:"hehe"}, "a", "a", null, undefined, true, "true"];

function unique(array) {
    var obj = {};
    return array.filter(function(item, index, array){
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + item] = true)
    })
}

console.log(unique(array)); // [1, 2, "1"]

