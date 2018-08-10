/**
 * set(key,value)：向字典中添加新元素。
 * remove(key)：通过使用键值来从字典中移除键值对应的数据值。
 * has(key)：如果某个键值存在于这个字典中，则返回true，反之则返回false。
 * get(key)：通过键值查找特定的数值并返回。
 * clear()：将这个字典中的所有元素全部删除。
 * size()：返回字典所包含元素的数量。与数组的length属性类似。
 * keys()：将字典所包含的所有键名以数组形式返回。
 * values()：将字典所包含的所有数值以数组形式返回。
 */

export default function Dictionary() {
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