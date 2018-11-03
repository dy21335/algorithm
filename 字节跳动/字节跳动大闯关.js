function Dictionary() {
    // items作为私有变量，是字典的载体
    var items = {};
    // has方法，如果某个键值存在于这个字典中，则返回true，反之则返回false
    this.has = function (key) {
        return key in items;
    };
    // set方法，向字典中添加新元素
    this.set = function (key, value) {
        items[key] = value;
    };
    // remove方法，通过使用键值来从字典中移除键值对应的数据值
    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    // get方法，通过键值查找特定的数值并返回
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };
    // clear方法，将这个字典中的所有元素全部删除
    this.clear = function(){
        // 清空字典列表
        items = {};
    };
    // size方法，返回字典所包含元素的数量。与数组的length属性类似
    this.size = function(){
        // Object.keys不会遍历原型链上的属性
        return Object.keys(items).length;
    };
    // keys方法，将字典所包含的所有键名以数组形式返回
    this.size = function(){
        return Object.keys(items);
    };
    // values方法，将字典所包含的所有数值以数组形式返回
    this.values = function() {
        var values = {};
        for (var k in items) {
            // 用has方法判断，避免遍历到原型链上的属性
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
}

//只适合于无向图

function Graph(){
    //vertices 存放顶点集；
    //adjList 存放邻接表；
    this.vertices = [];
    this.adjList = new Dictionary();
}

Graph.prototype.addVertex = function(v){
    this.vertices.push(v);
    this.adjList.set(v, []);
}

Graph.prototype.addEdge = function(v, w){
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
};

Graph.prototype.initializeColor = function(){
    var color = {};
    for(let i = 0; i < this.vertices.length; ++i){
        color[this.vertices[i]] = 'white';
    }
    return color;
}



Graph.prototype.dfs = function(callback){
    var res = 0;
    var _this = this;
    var color = this.initializeColor();
    for(let i = 0; i < this.vertices.length; ++i){
        if(color[this.vertices[i]] === 'white'){
            console.log("first white:", this.vertices[i]);
            res++;
            dfsVisit(this.vertices[i], color, callback);
        }
    }
    function dfsVisit(u, color, callback){
        color[u] = 'grey';
        callback && callback(u);
        var neighbors = _this.adjList.get(u);
        for(let i = 0; i<neighbors.length; ++i){
            let w = neighbors[i];
            if(color[w] === 'white'){
                dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
    }
    return res;
}



var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// 获取三行输入的值，输出它们的和
var countLine = 0;
var lines = 0;
var tokens = [];
var len = 0;
var graphDfs;
var teamNum = 0;
rl.on('line', function(line) {
    if(countLine == 0){
        countLine = parseInt(line)
        len = countLine;
    }else {
        //将数组转成字符数组
        tokens.push(line.split(" "))
        // console.log("line.split", line);
        if (--countLine == 0){
            graphDfs  = initGraph(tokens, len)
            teamNum = graphDfs.dfs();
            console.log("res", teamNum);
            tokens = [];
            len = 0;
            teamNum = 0;
            // team(tokens);
        }
    }
})

// 本题为考试多行输入输出规范示例，无需提交，不计分。
// var n = parseInt(readline());
// var tokens = [];
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     tokens.push(lines.slice());
// }

function initGraph(tokens, len) {
    graph = new Graph();
    for (i = 0; i < len; ++i){
        console.log("here",i)
        graph.addVertex(i);
    }
    console.log(tokens)
    tokens.forEach((value, index) => {
        for(let i = 0; i < value.length - 1; ++i){
            // console.log("aha")
            console.log("in, value[i]",index, parseInt(value[i])-1)
            graph.addEdge(index, parseInt(value[i])-1);
        }
        // console.log("graphadjext", graph.adjList.get([value]));
    })
    return graph
}



