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

function Queue() {
    var items = [];
    // 向队列尾部添加一个（或多个）新的项
    this.enqueue = function(element){
        items.push(element);
    };
    // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
    this.dequeue = function(){
        return items.shift();
    };
    // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
    this.front = function(){
        return items[0];
    };
    // 如果队列中不包含任何元素，返回 true ，否则返回 false
    this.isEmpty = function(){
        return items.length == 0;
    };
    //  清空队列
    this.clear = function(){
        items = [];
    };
    // 返回队列包含的元素个数，与数组的 length 属性类似
    this.size = function(){
        return items.length;
    };
    this.print = function(){
        console.log(items.toString());
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

Graph.prototype.bfs = function(v, callback){
    var res = [];//结果数组
    var color = this.initializeColor();
    var queue = new Queue();
    queue.enqueue(v);
    res.push(v);
    while(!queue.isEmpty()){
        var u = queue.dequeue(),
            neighbors = this.adjList.get(u);
        color[u] = 'grey';
        for(let i = 0; i < neighbors.length; i++){
            var w = neighbors[i];
            if(color[w] === 'white'){
                color[w] = 'grey';
                queue.enqueue(w);
                res.push(w);
            }
        }
        color[u] = 'black';
        callback && callback(u);
    }
    return res;
}

Graph.prototype.dfs = function(callback){
    var res = [];
    var _this = this;
    var color = this.initializeColor();
    for(let i = 0; i < this.vertices.length; ++i){
        if(color[this.vertices[i]] === 'white'){
            res.push(this.vertices[i]);
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
                res.push(w);
                dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
    }
    return res;
}


graph.addEdge('A', 'D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'E');
graph.addEdge('B', 'C');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
// console.log(graph.adjList.get('A'));




